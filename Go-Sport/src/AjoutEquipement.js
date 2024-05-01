import React, { useState } from 'react';
import axios from 'axios';

function AjoutEquipment() {
    const [nomTypeEquipment, setNomTypeEquipment] = useState('');
    const [etatEquipment, setEtatEquipment] = useState('');
    const [dateDerniereMaintenance, setDateDerniereMaintenance] = useState('');

    const addEquipment = async () => {
        const newEquipment = {
            nom_type_equipment: nomTypeEquipment,
            etat_equipment: etatEquipment,
            date_derniere_maintenance: dateDerniereMaintenance
        };
        await axios.post('http://localhost:3001/equipments', newEquipment);
    };

    return (
        <div id='ajout-equip'>
            <div className='aj-equip'>
                <input type="text" placeholder="Nom Type Équipement" onChange={e => setNomTypeEquipment(e.target.value)} />
                <input type="text" placeholder="État Équipement" onChange={e => setEtatEquipment(e.target.value)} />
                <input type="date" placeholder="Date Dernière Maintenance" onChange={e => setDateDerniereMaintenance(e.target.value)} />
                <button id="add-btn" onClick={() => addEquipment()}>Ajouter</button>
            </div>
        </div>
    );
}

export default AjoutEquipment;
