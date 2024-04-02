const axios = require('axios');

const fetchStatsMembresInscritHomme = async (intervale, periode) => {
    try {
        const res = await axios.get('http://localhost:3001/stats/membresinscrithomme', {
            params: { intervale, periode }
        });
        return res.data; // Renvoie les données de la réponse
    } catch (error) {
        console.error('Erreur lors de la récupération des stats:', error);
        return null; // En cas d'erreur, renvoie null ou une valeur par défaut
    }
};
const fetchStatsMembresInscritFemme = async (intervale, periode) => {
    try {
        const res = await axios.get('http://localhost:3001/stats/membresinscritfemme', {
            params: { intervale, periode }
        });
        return res.data; // Renvoie les données de la réponse
    } catch (error) {
        console.error('Erreur lors de la récupération des stats:', error);
        return null; // En cas d'erreur, renvoie null ou une valeur par défaut
    }
};

const fetchStatsMembresParTypeAbonnement = async (idAbonnement) => {
    try {
        const res = await axios.get('http://localhost:3001/stats/membrespartypeabonnement', {
            params: { id_abonnement: idAbonnement }
        });
        return res.data; // Renvoie les données de la réponse
    } catch (error) {
        console.error('Erreur lors de la récupération des stats:', error);
        return null; // En cas d'erreur, renvoie null ou une valeur par défaut
    }
};


const fetchStatsMembreParEntrainementFerme = async (intervale, periode) => {
    try {
        const res = await axios.get('http://localhost:3001/stats/membreparentrainmentferme', {
            params: { intervale: intervale, periode: periode }
        });
        return res.data; // Renvoie les données de la réponse
    } catch (error) {
        console.error('Erreur lors de la récupération des stats:', error);
        return null; // En cas d'erreur, renvoie null ou une valeur par défaut
    }
};

const fetchStatsMembreParEntrainementOuvert = async (intervale, periode) => {
    try {
        const res = await axios.get('http://localhost:3001/stats/membreparentrainmentouvert', {
            params: { intervale: intervale, periode: periode }
        });
        return res.data; // Renvoie les données de la réponse
    } catch (error) {
        console.error('Erreur lors de la récupération des stats:', error);
        return null; // En cas d'erreur, renvoie null ou une valeur par défaut
    }
};


const fetchStatsMembresInscritParMoisAnneeHomme = async (annee) => {
    try {
        const res = await axios.get('http://localhost:3001/stats/membresinscritparmoisanneehomme', {
            params: { annee: annee }
        });
        return res.data; // Renvoie les données de la réponse
    } catch (error) {
        console.error('Erreur lors de la récupération des stats:', error);
        return null; // En cas d'erreur, renvoie null ou une valeur par défaut
    }
};

const fetchStatsMembresInscritParMoisAnneeFemme = async (annee) => {
    try {
        const res = await axios.get('http://localhost:3001/stats/membresinscritparmoisanneefemme', {
            params: { annee: annee }
        });
        return res.data; // Renvoie les données de la réponse
    } catch (error) {
        console.error('Erreur lors de la récupération des stats:', error);
        return null; // En cas d'erreur, renvoie null ou une valeur par défaut
    }
};

console.log(fetchStatsMembresInscritHomme("2", "year"));

module.exports = { fetchStatsMembresInscritHomme, fetchStatsMembresInscritFemme, fetchStatsMembresParTypeAbonnement, fetchStatsMembreParEntrainementFerme, fetchStatsMembreParEntrainementOuvert, fetchStatsMembresInscritParMoisAnneeFemme, fetchStatsMembresInscritParMoisAnneeHomme };
