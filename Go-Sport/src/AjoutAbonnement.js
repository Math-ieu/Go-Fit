import React, { useState } from 'react';
import axios from 'axios';

function AjoutAbonnement() {
    const [nomAbonnement, setNomAbonnement] = useState('');
    const [typeAbonnement, setTypeAbonnement] = useState('');
    const [montantAbonnement, setMontantAbonnement] = useState('');

    const addAbonnement = async () => {
        const newAbonnement = {
            nom_abonnement: nomAbonnement,
            type_abonnement: typeAbonnement,
            montant_abonnement: montantAbonnement
        };
        await axios.post('http://localhost:3001/abonnements', newAbonnement);
    };

    return (
        <div>
            <input type="text" placeholder="Nom d'Abonnement" onChange={e => setNomAbonnement(e.target.value)} />
            <input type="text" placeholder="Type d'Abonnement" onChange={e => setTypeAbonnement(e.target.value)} />
            <input type="number" placeholder="Montant d'Abonnement" onChange={e => setMontantAbonnement(e.target.value)} />
            <button onClick={() => addAbonnement()}>Ajouter</button>
        </div>
    );
}

export default AjoutAbonnement;
