import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import axios from 'axios';

function RapportTable() {
    const [rapports, setRapports] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchRapports = async () => {
            const res = await axios.get('http://localhost:3001/rapports');
            setRapports(res.data);
        };
        fetchRapports();
    }, []);

    // Supprimez ou commentez la fonction deleteRapport
    /* const deleteRapport = async (id) => {
        await axios.delete(`http://localhost:3001/rapports/${id}`);
        setRapports(rapports.filter(rapport => rapport.id_rapport !== id));
    }; */

    const filteredRapports = rapports.filter(rapport =>
        rapport.nom_rapport.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <input type="text" placeholder="Rechercher par nom de rapport" onChange={e => setSearch(e.target.value)} />
            <table>
                <thead>
                    <tr>
                        <th>Nom du Rapport</th>
                        <th>Date du Rapport</th>
                        <th>Effectif Total</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredRapports.map(rapport => (
                        <tr key={rapport.id_rapport}>
                            <td>{rapport.nom_rapport}</td>
                            <td>{rapport.date_rapport}</td>
                            <td>{rapport.effectif_total}</td>
                            <td>
                                {/* Commentez ou supprimez le bouton de suppression */}
                                {/* <button onClick={() => deleteRapport(rapport.id_rapport)}>Supprimer</button> */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to="/AjoutRapport">
                <button>Ajouter un rapport</button>
            </Link>
        </div>
    );
}

export default RapportTable;
