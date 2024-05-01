import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FactureClient from "./FactureClient";
import PaiementClient from "./PaiementClient";
import Planning from "./Planning";
import PlanningGestionnaire from "./PlanningGestionnaire";
import PlanningOuvert from "./PlanningOuvert";
import Nav from "./Nav";

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
  const user1 = user;
  if (page === "factures") {
    return <FactureClient user={user} />;
  }

  if (page === "paiements") {
    return <PaiementClient user={user} />;
  }
  if (page === "HomeClient") {
    return <HomeClient user={user} />;
  }

  return (
    <div id="home__cl" className="home__cl">
      <Nav />
      <h1 id="h1-home">Bonjour, bienvenue {user1.firstname} !</h1>
      {/*
      <table>
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
  </table>*/}

      <div className="facture-paiement">
        <div>
          <FactureClient user={user1} />
        </div>
        <div>
          <PaiementClient user={user1} />
        </div>
      </div>

      <div className="en-ov">
        <h1>ENTRAINEMENTS OUVERTS</h1>
        <PlanningOuvert />
      </div>
      <hr />

      <div className="pl">
        <h1>ENTRAINEMENTS FERMES</h1>
        <PlanningGestionnaire />
      </div>

      {/*<button onClick={() => setPage("factures")}>Mes factures</button>
      <button onClick={() => setPage("paiements")}>Mes paiements</button>*/}
    </div>
  );
}

export default HomeClient;
