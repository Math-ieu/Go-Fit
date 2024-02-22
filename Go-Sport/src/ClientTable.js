import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import axios from 'axios';




function ClientTable() {
    const [clients, setClients] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchClients = async () => {
            const res = await axios.get('http://localhost:3001/clients');
            setClients(res.data);
        };
        fetchClients();
    }, []);

    const deleteClient = async (id) => {
        await axios.delete(`http://localhost:3001/clients/${id}`);
        setClients(clients.filter(client => client.id !== id));
    };

    const filteredClients = clients.filter(client =>
        client.firstname.toLowerCase().includes(search.toLowerCase())
    );
    

    return (
        <div>
            <input type="text" placeholder="Rechercher par nom prénom" onChange={e => setSearch(e.target.value)} />
            <table>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredClients.map(client => (
                        <tr key={client.id}>
                            <td>{client.firstname}</td>
                            <td>{client.lastname}</td>
                            <td>
                                <button onClick={() => deleteClient(client.id)}>Supprimer</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to="/AjouterClient">
    <button>Ajouter un client</button>
</Link>
        </div>
    );
}

export default ClientTable;
