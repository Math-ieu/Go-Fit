import PlanningEntraineur from './PlanningEntraineur';
import React, { useState } from "react";
import Planning from "./Planning";
import PlanningOuvert from "./PlanningOuvert";
import Nav from "./Nav";
import man from './assets/img/man.png'
import salle from './assets/img/salle.jpg'
function HomeEntraineur({ user }) {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "PlanningOuvert":
        return <PlanningOuvert />;
      case "PlanningEntraineur":
        return <PlanningEntraineur />;
      default:
        return <div><h1>Bonjour, bienvenue Coach {user.firstname} !</h1>
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
          {href: "PlanningEntraineur", text: "Planning", onClick: () => setPage("PlanningEntraineur")},
          ]}
        profileImage={man}
        user={user}
        gofitLink="http://localhost:3000/HomeEntraineur"
        setPage={setPage} 
      />

      <div style={{ marginTop: '6%' }}>
        {renderPage()}
      </div>


    </div>
  );
}

export default HomeEntraineur;
