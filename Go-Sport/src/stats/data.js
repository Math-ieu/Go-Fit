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

const NombreMembreInscritParAn = (intervale) => {
    return new Promise((resolve, reject) => {
        client.query(`SELECT COUNT(*) FROM client WHERE registrationdate >= CURRENT_DATE - INTERVAL '${intervale} year';`)
            .then(result => {
                resolve(parseInt(result.rows[0].count));
            })
            .catch(err => {
                reject(err);
            });
    });
};

const NombreMembreInscritParMois = (intervale) => {
    return new Promise((resolve, reject) => {
        client.query(`SELECT COUNT(*) FROM client WHERE registrationdate >= CURRENT_DATE - INTERVAL '${intervale} month';`)
            .then(result => {
                resolve(parseInt(result.rows[0].count));
            })
            .catch(err => {
                reject(err);
            });
    });
};

const NombreMembreInscritParSemaine = (intervale) => {
    return new Promise((resolve, reject) => {
        client.query(`SELECT COUNT(*) FROM client WHERE registrationdate >= CURRENT_DATE - INTERVAL '${intervale} week';`)
            .then(result => {
                resolve(parseInt(result.rows[0].count));
            })
            .catch(err => {
                reject(err);
            });
    });
};

const NombreMembreInscritParJour = (intervale) => {
    return new Promise((resolve, reject) => {
        client.query(`SELECT COUNT(*) FROM client WHERE registrationdate >= CURRENT_DATE - INTERVAL '${intervale} day';`)
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
Promise.all([
    NombreMembreInscritParAn(1),
    NombreMembreInscritParMois(1),
    NombreMembreInscritParSemaine(1),
    NombreMembreInscritParJour(1),
    NombreMembreParTypeAbonnement(0),
    NombreMembreParTypeAbonnement(1),
    NombreMembreParTypeAbonnement(2),
    NombreMembreParTypeAbonnement(3)

])
    .then(([nbInscritsParAn, nbInscritsParMois, nbInscritsParSemaine, nbInscritsParJour,
        NombreMembreParTypeAbonnementType1, NombreMembreParTypeAbonnementType2, NombreMembreParTypeAbonnementType3, NombreMembreParTypeAbonnementType4]) => {
        const requetes = {
            "Nombre d'inscrit par an": nbInscritsParAn,
            "Nombre d'inscrit par mois": nbInscritsParMois,
            "Nombre d'inscrit par semaine": nbInscritsParSemaine,
            "Nombre d'inscrit par jour": nbInscritsParJour,
            "Abonnement Standard": NombreMembreParTypeAbonnementType1,
            "Abonnement Premium": NombreMembreParTypeAbonnementType2,
            "Abonnemeent Gold": NombreMembreParTypeAbonnementType3,
            "Abonnement Pro": NombreMembreParTypeAbonnementType4

        };
        console.log(requetes);
    })
    .catch(err => {
        console.error(err);
    })
    .finally(() => {
        client.end();
    });