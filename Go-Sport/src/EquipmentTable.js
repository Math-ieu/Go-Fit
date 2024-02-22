import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function EquipmentTable() {
    const [equipements, setEquipements] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchequipements = async () => {
            const res = await axios.get('http://localhost:3001/equipements');
            setEquipements(res.data);
        };
        fetchequipements();
    }, []);

    const deleteequipement = async (id) => {
        await axios.delete(`http://localhost:3001/equipements/${id}`);
        setEquipements(equipements.filter(equipement => equipement.id_equipement !== id));
    };

    const filteredequipements = equipements.filter(equipement =>
        equipement.nom_equipement.toLowerCase().includes(search.toLowerCase())
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
                    {filteredequipements.map(equipement => (
                        <tr key={equipement.id_equipement}>
                            <td>{equipement.nom_equipement}</td>
                            <td>{equipement.date_dernière_maintenance}</td>
                            <td>
                                <button onClick={() => deleteequipement(equipement.id)}>Supprimer</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to="/AjoutEquipement">
    <button>Ajouter un equipement</button>
</Link>
        </div>
    );
}

export default EquipmentTable;
