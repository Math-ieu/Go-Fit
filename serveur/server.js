const express = require('express');
const { Client } = require('pg');
const cors = require('cors');
const fs = require('fs');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
const port = 3001;

const client = new Client({
  host: 'localhost',
  port: 5432,
  database: 'test',
  user: 'postgres',
  password: 'root'
});

client.connect();



app.get('/rapports', async (req, res) => {
  const result = await client.query('SELECT * FROM rapport');
  res.json(result.rows);
});



app.post('/abonnements', async (req, res) => {
  const newAbonnement = req.body;
  await client.query('INSERT INTO abonnement SET ?', [newAbonnement]);
  res.json({ message: 'Abonnement ajouté avec succès.' });
});

app.get('/abonnements', async (req, res) => {
  const result = await client.query('SELECT * FROM abonnement');
  res.json(result.rows);
});

app.delete('/abonnements/:id', async (req, res) => {
  const { id } = req.params;
  await client.query('DELETE FROM abonnement WHERE id_abonnement = $1', [id]);
  res.json({ message: 'Abonnement supprimé avec succès.' });
});



app.post('/ajoutPlanning', async (req, res) => {
  const { date, entraineur, salle, debut, fin, nom_session, effectif_max, effectif } = req.body;
  const query = 'INSERT INTO ENTRAINEMENT_FERME( ID_SALLE, ID_ENTRAINEUR, DATE_SESSION, DEBUT, FIN, EFFECTIF, EFFECTIF_MAX, NOM_SESSION, JOUR_DE_LA_SEMAINE) VALUES($1, $2, $3, $4, $5, $6, $7, $8,)';
  const values = [salle, entraineur, date, debut, fin, effectif, effectif_max, nom_session, 'jeudi'];
  try {
    await client.query(query, values);
    res.status(200).json({ success: true, message: 'Ajout effectué' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Cet entraineur et cette salle ne sont pas libres à ce moment' });
  }
});


app.get('/sessions_ouvert', (req, res) => {
  client.query('SELECT *, TO_CHAR(date_session, \'YYYY-MM-DD\') AS date_session, TO_CHAR(debut, \'HH24:MI:SS\') AS debut FROM ENTRAINEMENT_OUVERT', (error, results) => {
    if (error) {
      console.error('Error fetching sessions:', error);
      throw error;
    }
    console.log('Sessions from database:', results.rows);
    res.status(200).json(results.rows);
  });
});





app.get('/sessions_ferme', (req, res) => {
  client.query('SELECT *, TO_CHAR(date_session, \'YYYY-MM-DD\') AS date_session, TO_CHAR(debut, \'HH24:MI:SS\') AS debut FROM ENTRAINEMENT_FERME', (error, results) => {
    if (error) {
      console.error('Error fetching sessions:', error);
      res.status(500).json({ error: 'Error fetching sessions' });
    } else {
      console.log('Sessions from database:', results.rows);
      res.status(200).json(results.rows);
    }
  });
});

app.post('/participate', (req, res) => {
  const { sessionId, name, surname } = req.body;

  client.query('BEGIN', (err) => {
    if (err) {
      console.error('Error beginning transaction:', err);
      res.status(500).json({ error: 'Error beginning transaction' });
    } else {
      client.query('SELECT id FROM CLIENT WHERE lastname = $1 AND firstname = $2', [name, surname], (error, results) => {
        if (error) {
          console.error('Error fetching client:', error);
          res.status(500).json({ error: 'Error fetching client' });
        } else {
          const clientId = results.rows[0].id;

          client.query('INSERT INTO AFFECTER_CLIENT_FERME (ID_CLIENT, ID_ENTRAINEMENT_FERME) VALUES ($1, $2)', [clientId, sessionId], (error) => {
            if (error) {
              console.error('Error inserting participation:', error);
              res.status(500).json({ error: 'Error inserting participation' });
            } else {
              client.query('UPDATE ENTRAINEMENT_FERME SET EFFECTIF = EFFECTIF + 1 WHERE ID_ENTRAINEMENT_FERME = $1', [sessionId], (error) => {
                if (error) {
                  console.error('Error updating session:', error);
                  res.status(500).json({ error: 'Error updating session' });
                } else {
                  client.query('COMMIT', (err) => {
                    if (err) {
                      console.error('Error committing transaction', err.stack);
                      res.status(500).json({ error: 'Error committing transaction' });
                    } else {
                      res.status(201).send('Client ajouté');
                    }
                  });
                }
              });
            }
          });
        }
      });
    }
  });
});




app.get('/equipements', async (req, res) => {
  const result = await client.query('SELECT * FROM equipement');
  res.json(result.rows);
});

app.delete('/equipements/:id', async (req, res) => {
  const { id } = req.params;
  await client.query('DELETE FROM client WHERE id = $1', [id]);
  res.json({ message: 'Client supprimé avec succès.' });
});

app.post('/equipements', async (req, res) => {
  const newClient = req.body;
  await client.query('INSERT INTO client SET ?', [newClient]);
  res.json({ message: 'Client ajouté avec succès.' });
});




app.get('/clients', async (req, res) => {
  const result = await client.query('SELECT * FROM client');
  res.json(result.rows);
});

app.delete('/clients/:id', async (req, res) => {
  const { id } = req.params;
  await client.query('DELETE FROM client WHERE id = $1', [id]);
  res.json({ message: 'Client supprimé avec succès.' });
});

app.post('/clients', async (req, res) => {
  const newClient = req.body;
  await client.query('INSERT INTO client SET ?', [newClient]);
  res.json({ message: 'Client ajouté avec succès.' });
});




app.get('/entraineurs', async (req, res) => {
  const result = await client.query('SELECT * FROM ENTRAINEUR');
  res.json(result.rows);
});

app.delete('/entraineurs/:id', async (req, res) => {
  const { id } = req.params;
  await client.query('DELETE FROM ENTRAINEUR WHERE id = $1', [id]);
  res.json({ message: 'Entraîneur supprimé avec succès.' });
});





app.get('/factures/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await client.query('SELECT *, TO_CHAR(date_limite_facture, \'YYYY-MM-DD\') AS date_limite_facture FROM facture WHERE id_client = $1', [id]);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});


app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const tables = ['client', 'entraineur', 'gestionnaire'];
  for (let table of tables) {
    const result = await client.query(`SELECT * FROM ${table} WHERE email = $1 AND password = $2`, [email, password]);
    if (result.rows.length > 0) {
      console.log(`Table: ${table}, User: `, result.rows[0]);
      return res.json({ table, user: result.rows[0] });
    }
  }
  return res.status(401).json({ error: 'une erreur sest produite' });
});

app.post('/inscription', upload.single('photo'), async (req, res) => {
  const { firstName, lastName, address, email, password, sex, weight, height, motivation, goal, trainingType, phone, birthDate, registrationDate } = req.body;
  const photo = req.file ? fs.readFileSync(req.file.path) : null;
  const query = 'INSERT INTO client(firstName, lastName, address, email, password, sex, weight, height, motivation, goal, trainingType, phone, birthDate, registrationDate, photo) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)';
  const values = [firstName, lastName, address, email, password, sex, weight, height, motivation, goal, trainingType, phone, birthDate, registrationDate, photo];
  try {
    await client.query(query, values);
    res.status(200).json({ message: 'Inscription réussie' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Une erreur est survenue lors de l\'inscription' });
  }
});

app.post('/PayerFacture', async (req, res) => {
  console.log(req.body)
  const { id_facture, id_client, nom_paiement, montant_paiement, date_paiement } = req.body;

  try {
    const result = await client.query(
      'INSERT INTO paiement (id_facture, id_client, nom_paiement, montant_paiement, date_paiement) VALUES ($1, $2, $3, $4, $5)',
      [id_facture, id_client, nom_paiement, montant_paiement, date_paiement]
    );

    res.status(200).send('Payment Successful');
  } catch (error) {
    console.error('Error processing payment', error);
    res.status(500).send('Error processing payment');
  }
});


app.get('/paiements/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await client.query('SELECT * FROM paiement WHERE id_client = $1', [id]);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Une erreur interne est survenue' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
