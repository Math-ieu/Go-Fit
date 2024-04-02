const { Client } = require('pg');

const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'test',
    user: 'postgres',
    password: 'root'
});

client.on("connect", () => {
    console.log("Connected");
});

client.on("end", () => {
    console.log("Disconnected");
});

client.connect();

const NombreMembreInscrit = (intervale, periode) => {
    return new Promise((resolve, reject) => {
        client.query(`SELECT COUNT(*) FROM client WHERE registrationdate >= CURRENT_DATE - INTERVAL '${intervale} ${periode}';`)
            .then(result => {
                resolve(parseInt(result.rows[0].count));
            })
            .catch(err => {
                reject(err);
            });
    });
};


const NombreMembreParTypeAbonnement = (id_abonnement) => {
    return new Promise((resolve, reject) => {
        client.query(`SELECT COUNT(*) FROM client WHERE id_abonnement = ${id_abonnement};`)
            .then(result => {
                resolve(parseInt(result.rows[0].count));
            })
            .catch(err => {
                reject(err);
            });
    });
};

const NombreMembreParEntrainmentFerme = (intervale, periode) => {
    return new Promise((resolve, reject) => {
        client.query(`SELECT COUNT(a.id_client) FROM affecter_client_ferme a, entrainement_ferme e WHERE a.id_entrainement_ferme = e.id_entrainement_ferme and e.date_session >= CURRENT_DATE - INTERVAL '${intervale} ${periode}';`)
            .then(result => {
                resolve(parseInt(result.rows[0].count));
            })
            .catch(err => {
                reject(err);
            });
    });
};

const NombreMembreParEntrainmentOuvert = (intervale, periode) => {
    return new Promise((resolve, reject) => {
        client.query(`SELECT COUNT(a.id_client) FROM affecter_client_ouvert a, entrainement_ouvert e WHERE a.id_entrainement_ouvert = e.id_entrainement_ouvert and e.date_session >= CURRENT_DATE - INTERVAL '${intervale} ${periode}';`)
            .then(result => {
                resolve(parseInt(result.rows[0].count));
            })
            .catch(err => {
                reject(err);
            });
    });
};
Promise.all([
    NombreMembreInscrit(1, "year"),
    NombreMembreInscrit(1, "month"),
    NombreMembreInscrit(1, "week"),
    NombreMembreInscrit(1, "day"),
    NombreMembreParTypeAbonnement(0),
    NombreMembreParTypeAbonnement(1),
    NombreMembreParTypeAbonnement(2),
    NombreMembreParTypeAbonnement(3),
    NombreMembreParEntrainmentFerme(1, "year"),
    NombreMembreParEntrainmentOuvert(1, "year")

])
    .then(([nbInscritsParAn, nbInscritsParMois, nbInscritsParSemaine, nbInscritsParJour,
        NombreMembreParTypeAbonnementType1, NombreMembreParTypeAbonnementType2, NombreMembreParTypeAbonnementType3, NombreMembreParTypeAbonnementType4,
        NombreMembreParEntrainmentOuvertAn, NombreMembreParEntrainmentFermeAn]) => {
        const requetes = {
            "Nombre d'inscrit par an": nbInscritsParAn,
            "Nombre d'inscrit par mois": nbInscritsParMois,
            "Nombre d'inscrit par semaine": nbInscritsParSemaine,
            "Nombre d'inscrit par jour": nbInscritsParJour,
            "Abonnement Standard": NombreMembreParTypeAbonnementType1,
            "Abonnement Premium": NombreMembreParTypeAbonnementType2,
            "Abonnemeent Gold": NombreMembreParTypeAbonnementType3,
            "Abonnement Pro": NombreMembreParTypeAbonnementType4,
            "Nombre de participant ": NombreMembreParEntrainmentOuvertAn,
            "Session ferme par an": NombreMembreParEntrainmentFermeAn
        };
        console.log(requetes);
    })
    .catch(err => {
        console.error(err);
    })
    .finally(() => {
        client.end();
    });