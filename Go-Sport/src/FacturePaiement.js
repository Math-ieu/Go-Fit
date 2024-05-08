import React from 'react';
import FactureClient from "./FactureClient";
import PaiementClient from "./PaiementClient";

const FacturePaiement = ({
  user 
}) => {
  return (
    <div className="facture-paiement">
      <div>
        <FactureClient user={user} />
      </div>
      <div>
        <PaiementClient user={user} />
      </div>
    </div>
  );
}

export default FacturePaiement;
