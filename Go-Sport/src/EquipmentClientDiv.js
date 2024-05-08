import React from "react";
import EquipmentTable from "./EquipmentTable";
import ClientTable from "./ClientTable";
import AbonnementTable from "./AbonnementTable";
import EntraineurTable from "./EntraineurTable";

function EquipmentClientDiv() {
  return (
    <div className='inner'>
      <div className='inner-1'>
        <h1 style={{ color: "#333", textAlign: "center", fontWeight:'bold' }}>La liste des Equipements</h1>
        <EquipmentTable/>
      </div>
      <div className='inner-1'>
        <h1 style={{ color: "#333", textAlign: "center", fontWeight:'bold' }}>La liste des clients</h1>
        <ClientTable/>
      </div>
    </div>
  );
}


export default EquipmentClientDiv;



