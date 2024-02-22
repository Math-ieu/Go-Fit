import React from 'react';
import PlanningGestionnaire from './PlanningGestionnaire';
import PlanningOuvertGestionnaire from './PlanningOuvertGestionnaire';
import ClientTable from './ClientTable';
import EntraineurTable from './EntraineurTable';
import EquipmentTable from './EquipmentTable';
import AbonnementTable from './AbonnementTable';


function HomeGestionnaire({ user }) {
  return (
    <div style={{ padding: "20px", backgroundColor: "#f5f5f5" }}>
      <h1 style={{ color: "#333", textAlign: "center" }}>Bonjour, bienvenue {user.nom} !</h1>
      <table style={{ width: "100%", marginBottom: "20px" }}>
        <tbody>
          <tr>
            <th>Email</th>
            <th>Password</th>
          </tr>
          <tr>
            <td>{user.email}</td>
            <td>{user.password}</td>
          </tr>
        </tbody>
      </table>
      <h1 style={{ color: "#333", textAlign: "center" }}>La liste des Equipements</h1>
      <EquipmentTable/>

      <h1 style={{ color: "#333", textAlign: "center" }}>La liste des clients</h1>
      <ClientTable/>
      <h1 style={{ color: "#333", textAlign: "center" }}>La liste des Entraineurs</h1>
      <EntraineurTable/>
      <h1 style={{ color: "#333", textAlign: "center" }}>La liste des abonnements</h1>
      <AbonnementTable/>

      <h1 style={{ color: "#333", textAlign: "center" }}>Nos Entrainements fermés</h1>
      <PlanningGestionnaire/>
      <h1 style={{ color: "#333", textAlign: "center" }}>Nos Entrainements ouverts</h1>
      <PlanningOuvertGestionnaire/>
    </div>

  );
}

export default HomeGestionnaire;

