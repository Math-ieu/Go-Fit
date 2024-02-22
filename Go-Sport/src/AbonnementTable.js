import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import axios from 'axios';

function AbonnementTable() {
    const [abonnements, setAbonnements] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchAbonnements = async () => {
            const res = await axios.get('http://localhost:3001/abonnements');
            setAbonnements(res.data);
        };
        fetchAbonnements();
    }, []);

    const deleteAbonnement = async (id) => {
        await axios.delete(`http://localhost:3001/abonnements/${id}`);
        setAbonnements(abonnements.filter(abonnement => abonnement.id_abonnement !== id));
    };

    const filteredAbonnements = abonnements.filter(abonnement =>
        abonnement.nom_abonnement.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <input type="text" placeholder="Rechercher par nom d'abonnement" onChange={e => setSearch(e.target.value)} />
            <table>
                <thead>
                    <tr>
                        <th>Nom d'Abonnement</th>
                        <th>Type d'Abonnement</th>
                        <th>Montant d'Abonnement</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredAbonnements.map(abonnement => (
                        <tr key={abonnement.id_abonnement}>
                            <td>{abonnement.nom_abonnement}</td>
                            <td>{abonnement.type_abonnement}</td>
                            <td>{abonnement.montant_abonnement}</td>
                            <td>
                                <button onClick={() => deleteAbonnement(abonnement.id_abonnement)}>Supprimer</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to="/AjoutAbonnement">
                <button>Ajouter un abonnement</button>
            </Link>
        </div>
    );
}

export default AbonnementTable;


