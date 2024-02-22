import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PayerFacture from './ReglerFacture';




function FactureClient({ user }) {
  const [factures, setFactures] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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
      <div>
        <h1>Mes factures</h1>
        <table>
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
                <button onClick={() => navigate('/PayerFacture', { state: { facture: facture , client: user } })}>
                  Impayé
                </button>
              }
              </td>
            </tr>
          ))}
        </tbody>
        </table>
      </div>
    );
  }
}

export default FactureClient;
