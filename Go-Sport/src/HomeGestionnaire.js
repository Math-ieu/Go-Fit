import React from 'react';
//import PlanningGestionnaire from './PlanningGestionnaire';
//import PlanningOuvertGestionnaire from './PlanningOuvertGestionnaire';
import ClientTable from './ClientTable';
import EntraineurTable from './EntraineurTable';
import EquipmentTable from './EquipmentTable';
import AbonnementTable from './AbonnementTable';
import Planning from './Planning';
import PlanningOuvert from './PlanningOuvert';
import Nav from './Nav';


function HomeGestionnaire({ user = {
  id: 1,
  nom: "Nom1",
  email: "c@c.cc",
  password: "c",
  age: 50
}}) {
  return (
    <div id='gestionnaire-home'>
      <Nav /> 
      <h1 style={{ color: "#333", textAlign: "center", fontStyle:'italic', margin:"30px 0" }}>Bonjour, bienvenue {user.nom} !</h1>
      {/* <div style={{width: 'fit-content'}}> bricolage à arranger et autres que j'ai oublié haha */}
        {/* <table className='table' style={{margin:'10px 50px'}}>
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
        </table> */}
      {/* </div> */}
      <div className='row-2'>
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

        <div className='inner'>
          <div className='inner-1'>
            <h1 style={{ color: "#333", textAlign: "center", fontWeight:'bold' }}>La liste des Entraineurs</h1>
            <EntraineurTable/>
          </div>
          <div className='inner-1'>
            <h1 style={{ color: "#333", textAlign: "center" , fontWeight:'bold'}}>La liste des abonnements</h1>
            <AbonnementTable/>
          </div>
        </div>
      </div>

      <h1 style={{ color: "#333", textAlign: "center", fontWeight:'bold' }}>Nos Entrainements fermés</h1>
      {/*<PlanningGestionnaire/>*/}
      <Planning />
      <hr />
      <h1 style={{ color: "#333", textAlign: "center" , fontWeight:'bold'}}>Nos Entrainements ouverts</h1>
      {/*<PlanningOuvertGestionnaire/>*/}
      <PlanningOuvert />
    </div>

  );
}

export default HomeGestionnaire;

