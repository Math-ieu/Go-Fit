import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import axios from 'axios';

function EntraineurTable() {
    const [entraineurs, setEntraineurs] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchEntraineurs = async () => {
            const res = await axios.get('http://localhost:3001/entraineurs');
            setEntraineurs(res.data);
        };
        fetchEntraineurs();
    }, []);

    const deleteEntraineur = async (id) => {
        await axios.delete(`http://localhost:3001/entraineurs/${id}`);
        setEntraineurs(entraineurs.filter(entraineur => entraineur.id !== id));
    };

    const filteredEntraineurs = entraineurs.filter(entraineur =>
        entraineur.nom.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <input type="text" placeholder="Rechercher par nom" onChange={e => setSearch(e.target.value)} />
            <table>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredEntraineurs.map(entraineur => (
                        <tr key={entraineur.id}>
                            <td>{entraineur.nom}</td>
                            <td>{entraineur.prenom}</td>
                            <td>
                                <button onClick={() => deleteEntraineur(entraineur.id)}>Supprimer</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to="/AjoutEntraineur">
                <button>Ajouter un entraîneur</button>
            </Link>
        </div>
    );
}

export default EntraineurTable;
