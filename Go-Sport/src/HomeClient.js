import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FactureClient from "./FactureClient";
import PaiementClient from "./PaiementClient";
import Planning from "./Planning";
import PlanningGestionnaire from "./PlanningGestionnaire";
import PlanningOuvert from "./PlanningOuvert";
import AbonnementClient from "./AbonnementClient";
import FacturePaiement from "./FacturePaiement";
import Nav from "./Nav";
import man from './assets/img/man.png'
import salle from './assets/img/salle.jpg'

function HomeClient({
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
  },
}) {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "PlanningOuvert":
        return <PlanningOuvert />;
      case "Planning":
        return <Planning />;
      case "AbonnementClient":
        return <AbonnementClient />;
      case "FacturePaiement":
        return <FacturePaiement user={user} />;
      default:
        return <div><h1>Bonjour, bienvenue {user.firstname} !</h1>
        <div className='home__image' >
            <img src={salle} alt="home" style={{ width: '100%', height:'600px' }}/>
          </div>
        </div>;
    }
  };

  return (
    <div id="home__cl" className="home__cl">
      <Nav 
        links={[
          {href: "PlanningOuvert", text: "Planning Ouvert", onClick: () => setPage("PlanningOuvert")},
          {href: "Planning", text: "Planning", onClick: () => setPage("Planning")},
          {href: "AbonnementClient", text: "Abonnements", onClick: () => setPage("AbonnementClient")},
          {href: "FacturePaiement", text: "factures et historique de paiement", onClick: () => setPage("FacturePaiement")},
        ]}
        profileImage={man}
        user={user}
        gofitLink="http://localhost:3000/HomeClient"
        setPage={setPage} 
      />

      <div style={{ marginTop: '6%' }}>
        {renderPage()}
      </div>


    </div>
  );
}

export default HomeClient;