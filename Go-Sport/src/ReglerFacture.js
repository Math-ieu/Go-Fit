import React, { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const PayerFacture = () => {
  const location = useLocation();
  const { facture, client } = location.state;
  const [nomPaiement, setNomPaiement] = useState("");
  const [montantPaiement, setMontantPaiement] = useState("");
  console.log("facture : " + facture.nom_facture);
  console.log("" + client);
  const handlePayment = async () => {
    try {
      await axios.post("http://localhost:3001/PayerFacture", {
        id_facture: facture.id_facture,
        id_client: client.id,
        nom_paiement: nomPaiement,
        montant_paiement: montantPaiement,
        date_paiement: new Date().toISOString().split("T")[0], // La date d'aujourd'hui
      });
      alert("Paiement réussi");
    } catch (error) {
      console.error(
        "Il y a eu une erreur lors du traitement de votre paiement !",
        error
      );
    }
  };

  return (
    <div id="payer-facture">
      <div className="facture-form">
        <form className="payer-form">
          <h1>Effectuer un paiement</h1>
          <hr />
          <label htmlFor="n">Nom du paiement</label>
          <input
            id="n"
            type="text"
            value={nomPaiement}
            onChange={(e) => setNomPaiement(e.target.value)}
          />
          <label htmlFor="m">Montant</label>
          <input
            id="m"
            type="number"
            value={montantPaiement}
            onChange={(e) => setMontantPaiement(e.target.value)}
          />

          <button type="button" onClick={handlePayment}>
            Payer
          </button>
        </form>
      </div>
    </div>
  );
};

export default PayerFacture;
