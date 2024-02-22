import React, { useState } from 'react';
import axios from 'axios';

function Participer({ session, onParticipate }) {
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
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Nom" required />
      <input type="text" value={surname} onChange={e => setSurname(e.target.value)} placeholder="Prénom" required />
      <button type="submit">Valider</button>
    </form>
  );
}

export default Participer;
