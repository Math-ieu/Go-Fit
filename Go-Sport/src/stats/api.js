
const fetchStatsMembresInscritHomme = async (intervale, periode) => {
    try {
        const res = await fetch('http://localhost:3001/stats/membresinscrithomme', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                intervale: intervale,
                periode: periode,
            })
        });

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json(); // Utilisez .json() pour extraire les données
        return data; // Renvoie les données de la réponse
    } catch (error) {
        console.error('Erreur lors de la récupération des stats:', error);
        return null; // En cas d'erreur, renvoie null ou une valeur par défaut
    }
};
const fetchStatsMembresInscritFemme = async (intervale, periode) => {
    try {
        const res = await fetch('http://localhost:3001/stats/membresinscritfemme', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                intervale: intervale,
                periode: periode,
            })
        });
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json(); // Utilisez .json() pour extraire les données
        return data; // Renvoie les données de la réponse
    } catch (error) {
        console.error('Erreur lors de la récupération des stats:', error);
        return null; // En cas d'erreur, renvoie null ou une valeur par défaut
    }
};

const fetchStatsMembresParTypeAbonnement = async (idAbonnement) => {
    try {
        const res = await fetch('http://localhost:3001/stats/membrespartypeabonnement', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id_abonnement: idAbonnement

            })
        });
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json(); // Utilisez .json() pour extraire les données
        return data; // Renvoie les données de la réponse// Renvoie les données de la réponse
    } catch (error) {
        console.error('Erreur lors de la récupération des stats:', error);
        return null; // En cas d'erreur, renvoie null ou une valeur par défaut
    }
};


const fetchStatsMembreParEntrainementFerme = async (intervale, periode) => {
    try {
        const res = await fetch('http://localhost:3001/stats/membreparentrainementferme', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                intervale: intervale,
                periode: periode,
            })
        });
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json(); // Utilisez .json() pour extraire les données
        return data; // Renvoie les données de la réponse
    } catch (error) {
        console.error('Erreur lors de la récupération des stats:', error);
        return null; // En cas d'erreur, renvoie null ou une valeur par défaut
    }
};

const fetchStatsMembreParEntrainementOuvert = async (intervale, periode) => {
    try {
        const res = await fetch('http://localhost:3001/stats/membreparentrainementouvert', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                intervale: intervale,
                periode: periode,
            })
        });
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json(); // Utilisez .json() pour extraire les données
        return data; // Renvoie les données de la réponse
    } catch (error) {
        console.error('Erreur lors de la récupération des stats:', error);
        return null; // En cas d'erreur, renvoie null ou une valeur par défaut
    }
};


const fetchStatsMembresInscritParMoisAnneeHomme = async (annee) => {
    try {
        const res = await fetch('http://localhost:3001/stats/membresinscritparmoisanneehomme', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                annee: annee
            })
        });
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json(); // Utilisez .json() pour extraire les données
        return data; // Renvoie les données de la réponse
    } catch (error) {
        console.error('Erreur lors de la récupération des stats:', error);
        return null; // En cas d'erreur, renvoie null ou une valeur par défaut
    }
};

const fetchStatsMembresInscritParMoisAnneeFemme = async (annee) => {
    try {
        const res = await fetch('http://localhost:3001/stats/membresinscritparmoisanneefemme', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                annee: annee
            })
        });
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json(); // Utilisez .json() pour extraire les données
        return data; // Renvoie les données de la réponse
    } catch (error) {
        console.error('Erreur lors de la récupération des stats:', error);
        return null; // En cas d'erreur, renvoie null ou une valeur par défaut
    }
};

fetchStatsMembreParEntrainementFerme('7', 'month')
    .then(data => {
        console.log(data); // Affiche les données lorsque la Promise est résolue
    })
    .catch(error => {
        console.error('Error:', error); // Gère les erreurs
    });;

module.exports = { fetchStatsMembresInscritHomme, fetchStatsMembresInscritFemme, fetchStatsMembresParTypeAbonnement, fetchStatsMembreParEntrainementFerme, fetchStatsMembreParEntrainementOuvert, fetchStatsMembresInscritParMoisAnneeFemme, fetchStatsMembresInscritParMoisAnneeHomme };
