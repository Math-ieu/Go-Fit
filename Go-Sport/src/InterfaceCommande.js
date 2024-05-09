import React, { useState } from 'react';
import './InterfaceCommande.css';
import aspect_carte from './aspect_carte.png'
import carte from './carte.png'
import visa from './visa.png'
const InterfaceCommande = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [pays, setPays] = useState('');
  const [numero_carte, setNumero_carte] = useState('');
  const [date_expiration, setDate_expiration] = useState('');
  const [cvc, setCvc] = useState('');
  const paysListe = ['Maroc', 'France', 'États-Unis', 'Canada', /* Ajoutez d'autres pays ici */];
  const validerNumeroCarte = (numero) => {
    return /^\d{13,16}$/.test(numero);
  };
  
  const validerDateExpiration = (date) => {
    return /^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(date);
  };
  
  const validerCVC = (cvc) => {
    return /^\d{3,4}$/.test(cvc);
  };
  return (
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
        <label htmlFor="nom">PRENOM</label>
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
          {/* Ajoutez des options pour les pays ici */}
          {paysListe.map((pays) => (
            <option key={pays} value={pays}>
              {pays}
            </option>
          ))}
        </select>
        {/* Ajoutez des champs pour les méthodes de paiement ici */}
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
          onChange={(e) =>{ setNumero_carte(e.target.value);
            if (!validerNumeroCarte(e.target.value)) {
              console.log('Numéro de carte invalide');
            }}
          }
        />
        <label htmlFor='date_expiration'>DATE D'EXPIRATION</label>
        <input
          type="text"
          id="date_expiration"
          placeholder="MM/AA"
          value={date_expiration}
          onChange={(e) =>{setDate_expiration(e.target.value);
            if (!validerDateExpiration(e.target.value)) {
              console.log('Date d\'expiration invalide');
            }}
          }
        />
        <label htmlFor='cvc'>CVV</label>
        <input
          type="text"
          id="cvc"
          placeholder="123"
          value={cvc}
          onChange={(e) => {setCvc(e.target.value);
            if (!validerCVC(e.target.value)){
              console.log('CVV invalide');
            }}
          }
        />
        <h5>En fournissant vos informations de carte bancaire, vous aufonsez Coursera, Inc. à débiter votre carte pour les paiements futurs conformément à ses conditions</h5>
        <button>
            Valider
        </button>
      </div>
      </div> 
      </div>
  );
};

export default InterfaceCommande;