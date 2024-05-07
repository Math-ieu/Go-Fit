import React, { useEffect, useState } from 'react';
import PayerFacture from './ReglerFacture';

function FactureClient({ user }) {
  const [factures, setFactures] = useState([]);
  const [error, setError] = useState(null);
  const [selectedFacture, setSelectedFacture] = useState(null);

  useEffect(() => {
    const fetchFactures = async () => {
      try {
        const res = await fetch(`http://localhost:3001/factures/${user.id}`);
        if (!res.ok) { throw Error(res.statusText); }
        const data = await res.json();
        setFactures(data);
      } catch (err) {
        console.log(err);
        setError(err.message);
      }
    };
    fetchFactures();
  }, [user.id]);

  if (error) {
    return <div>Erreur : {error}</div>;
  } else {
    return (
      <div className='table-container' id='facture'>
        <h1>MES FACTURES</h1>
        <table className='table'>
        <tbody>
          <tr>
            <th>Nom de la facture</th>
            <th>Montant</th>
            <th>Date limite</th>
            <th>État</th>
          </tr>
          {factures.map(facture => (
            <tr key={facture.id_facture}>
              <td>{facture.nom_facture}</td>
              <td>{facture.montant_facture}</td>
              <td>{facture.date_limite_facture}</td>
              <td>
              {facture.etat_facture === 'P' ? 'Payé' :
                <span onClick={() => setSelectedFacture(facture)} style={{cursor: 'pointer'}}>
                  Impayé
                </span>
              }
              </td>
            </tr>
          ))}
        </tbody>
        </table>
        {selectedFacture && (
          <PayerFacture facture={selectedFacture} client={user} onClose={() => setSelectedFacture(null)} />
        )}
      </div>
    );
  }
}

export default FactureClient;
