import React from 'react';
import FactureClient from "./FactureClient";
import PaiementClient from "./PaiementClient";

const FacturePaiement = ({
  user = {
    id: 1,
    firstname: "John",
    lastname: "Doe",
    address: "123 Main St, City",
    email: "a@a.aa",
    password: "a",
    sex: "M",
    weight: "75.00",
    height: "180.00",
    motivation: "Stay fit and healthy",
    goal: "Lose weight",
    trainingtype: "Cardio",
    phone: "1234567890",
    birthdate: new Date("1990-01-15"),
    registrationdate: new Date("2024-01-25"),
    photo: null,
  }
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
