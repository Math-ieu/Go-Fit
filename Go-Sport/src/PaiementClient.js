import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function PaiementClient({ user }) {
  const [paiements, setPaiements] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPaiements = async () => {
      try {
        const res = await fetch(`http://localhost:3001/paiements/${user.id}`);
        if (!res.ok) { throw Error(res.statusText); }
        const data = await res.json();
        setPaiements(data);
      } catch (err) {
        console.log(err);
        setError(err.message);
      }
    };
    fetchPaiements();
  }, [user.id]);

  if (error) {
    return <div>Erreur : {error}</div>;
  } else {
    return (
      <div>
        <h1>Mes paiements</h1>
        <table>
        <tbody>
          <tr>
            <th>Nom du paiement</th>
            <th>Montant</th>
            <th>Date du paiement</th>
          </tr>
          {paiements.map(paiement => (
            <tr key={paiement.id_paiement}>
              <td>{paiement.nom_paiement}</td>
              <td>{paiement.montant_paiement}</td>
              <td>{paiement.date_paiement}</td>
            </tr>
          ))}
        </tbody>
        </table>
      </div>
    );
  }
}

export default PaiementClient;
