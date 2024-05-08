import PlanningGestionnaire from './PlanningGestionnaire';
import PlanningOuvertGestionnaire from './PlanningOuvertGestionnaire';
import ClientTable from './ClientTable';
import EntraineurTable from './EntraineurTable';
import EquipmentTable from './EquipmentTable';
import AbonnementTable from './AbonnementTable';
import React, { useState } from "react";
import Planning from "./Planning";
import PlanningOuvert from "./PlanningOuvert";
import EquipmentClientDiv from './EquipmentClientDiv';
import EntraineurAbonnementDiv from './EntraineurAbonnementDiv';
import Nav from "./Nav";
import man from './assets/img/man.png'
import salle from './assets/img/salle.jpg'
import Graph from './stats/graph';



function HomeGestionnaire({ user }) {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "EquipmentClientDiv":
        return <EquipmentClientDiv />;
      case "EntraineurAbonnementDiv":
        return <EntraineurAbonnementDiv />;
      case "PlanningOuvert":
        return <PlanningOuvert />;
      case "PlanningGestionnaire":
        return <PlanningGestionnaire />;
      default:
        return (
          <div>
            <h1>Bonjour, bienvenue administrateur {user.firstname} !</h1>
            <div className='home__image'>
              <Graph/>
            </div>
          </div>
        );
    }
  };
  

  return (
    <div id="home__cl" className="home__cl">
      <Nav 
        links={[
          {href: "EquipmentClientDiv", text: "Les équipements et les clients", onClick: () => setPage("EquipmentClientDiv")},
          {href: "EntraineurAbonnementDiv", text: "Les entraineurs et les abonnements", onClick: () => setPage("EntraineurAbonnementDiv")},
          {href: "PlanningOuvert", text: "Les plannings ouverts", onClick: () => setPage("PlanningOuvert")},
          {href: "PlanningGestionnaire", text: "PlanningGestionnaire", onClick: () => setPage("PlanningGestionnaire")},
          ]}
        profileImage={man}
        user={user}
        gofitLink="http://localhost:3000/HomeGestionnaire"
        setPage={setPage} 
      />

      <div style={{ marginTop: '6%' }}>
        {renderPage()}
      </div>


    </div>
  );
}

export default HomeGestionnaire;

