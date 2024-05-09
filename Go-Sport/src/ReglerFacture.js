import React, { useState } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import './InterfaceCommande.css';
import aspect_carte from './aspect_carte.png'
import carte from './carte.png'
import { Select } from '@chakra-ui/react'
import visa from './visa.png'

const PayerFacture = ({ facture, client, onClose }) => {
  const [nomPaiement, setNomPaiement] = useState("");
  const [montantPaiement, setMontantPaiement] = useState("");
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [pays, setPays] = useState('');
  const [numero_carte, setNumero_carte] = useState('');
  const [date_expiration, setDate_expiration] = useState('');
  const [cvc, setCvc] = useState('');
  const paysListe = ['Maroc', 'France', 'États-Unis', 'Canada', /* Ajoutez d'autres pays ici */];

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
      onClose();
    } catch (error) {
      console.error(
        "Il y a eu une erreur lors du traitement de votre paiement !",
        error
      );
    }
  };

  return ReactDOM.createPortal(
    (
      <div className="payer-facture-popup">
      <div className="interface-commande">
        <div className="informations-facturation">
          <h2>Payer la facture</h2>
          <label htmlFor="nom">NOM</label>
          <input
            type="text"
            id="nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />
          <label htmlFor="prenom">PRENOM</label>
          <input
            type="text"
            id="prenom"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
          />
          <label htmlFor="pays">PAYS</label>
          <select
            id="pays"
            value={pays}
            onChange={(e) => setPays(e.target.value)}
          >
            {paysListe.map((pays) => (
              <option key={pays} value={pays}>
                {pays}
              </option>
            ))}
          </select>
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
        </div>
        <div className='methodes-paiement'>
          <h3>METHODES DE PAIEMENT</h3> 
          <div className="paiement_carte">
            <h4>
              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', color:'blue'}}>
                <img src={aspect_carte} alt="Aspect de la carte" style={{ marginRight: '10px' }} />
                Carte bancaire
              </span>
            </h4>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <label htmlFor="numero_carte">NUMERO DE CARTE</label>
              <span style={{ display: 'flex', alignItems: 'center' }}> 
                <img src={carte} alt="Mastercarte" style={{ marginRight: '1px' }}  />
                <img src={visa} alt="Visa" style={{ marginRight: '5px' }} />
              </span>
            </div>
            <input
              type="text"
              id="numero_carte"
              placeholder="1234 1234 1234 1234"
              value={numero_carte}
              onChange={(e) => setNumero_carte(e.target.value)}
            />
            <label htmlFor='date_expiration'>DATE D'EXPIRATION</label>
            <input
              type="text"
              id="date_expiration"
              placeholder="MM/AA"
              value={date_expiration}
              onChange={(e) => setDate_expiration(e.target.value)}
            />
            <label htmlFor='cvc'>CVV</label>
            <input
              type="text"
              id="cvc"
              placeholder="123"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
            />
            <h5>En fournissant vos informations de carte bancaire, vous aufonsez Coursera, Inc. à débiter votre carte pour les paiements futurs conformément à ses conditions</h5>
            <button type="button" onClick={handlePayment}>
              Payer
            </button>
          </div>
        </div> 
      </div>
      </div>
    ),
    document.body 
  );
};

export default PayerFacture;
