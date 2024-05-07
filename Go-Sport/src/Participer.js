import React, { useState } from 'react';
import axios from 'axios';
import './Participer.css'

function Participer({ session, onParticipate, onClose }) {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (session.effectif >= session.effectif_max) {
      alert('Il n\'y a plus de place');
      return;
    }

    axios.post('http://localhost:3001/participate', {
      sessionId: session.id,
      name: name,
      surname: surname
    }).then(() => {
      onParticipate();
    });
  };

  return (
    <div className="participer-popup">
      <button onClick={onClose}>X</button>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Nom" required />
        <input type="text" value={surname} onChange={e => setSurname(e.target.value)} placeholder="Prénom" required />
        <button type="submit">Valider</button>
      </form>
    </div>
  );
}

export default Participer;
