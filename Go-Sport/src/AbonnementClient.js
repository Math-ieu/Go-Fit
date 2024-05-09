import React, { useEffect, useState } from "react";

function AbonnementClient({ user }) {
  const [abonnements, setAbonnements] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAbonnements = async () => {
      try {
        const res = await fetch(`http://localhost:3001/AbonnementClient`);
        if (!res.ok) {
          throw Error(res.statusText);
        }
        const data = await res.json();
        setAbonnements(data);
      } catch (err) {
        console.log(err);
        setError(err.message);
      }
    };
    fetchAbonnements();
  }, []);

  
    return (
      <div id="abonnement" className="abonnement-container">
        <h1>MES ABONNEMENTS</h1>
        <table className="table">
          <tbody>
            <tr>
              <th>Nom de l'abonnement</th>
              <th>Type</th>
              <th>Montant</th>
            </tr>
            {abonnements.map((abonnement) => (
              <tr key={abonnement.id_abonnement}>
                <td>{abonnement.nom_abonnement}</td>
                <td>{abonnement.type_abonnement}</td>
                <td>{abonnement.montant_abonnement}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }


export default AbonnementClient;
