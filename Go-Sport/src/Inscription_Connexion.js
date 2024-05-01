import React, { useState } from 'react';
import { Box } from "@chakra-ui/react";
import  UserContext  from './UserContext';
import HomeClient from './HomeClient';
import HomeEntraineur from './HomeEntraineur';
import HomeGestionnaire from './HomeGestionnaire';
import Inscription from './Register';
import Connexion from './Connexion';
import './HomePage.css';
import BG from "./assets/img/banner/bg.png";
import './client.css'





function InscriptionConnexion() {
  const [page, setPage] = useState('home');
  const [user, setUser] = useState(null);

  const handleLoginRedirect = () => {
    setPage('login');
  };

  const handleRegisterRedirect = () => {
    setPage('register');
  };

  const HomePage = ({ handleRegisterRedirect, handleLoginRedirect }) => {
    return (
      <div className="homePage">
        <div className='home-container'>
          <div className="home-content">
            <h1>RÉVELEZ VOTRE POTENTIEL</h1>
            <hr/ >
            <button onClick={handleRegisterRedirect}>JE CRÉE MON COMPTE</button>
            <p onClick={handleLoginRedirect}>J'ai déjà un compte</p>
          </div>
        </div>
        <img src={BG} alt="" />

      </div>
    );
  };
  
  return (
    <UserContext.Provider value={user}>
    <Box className="container">
      <Box className="overlay">
        {page === 'home' && <HomePage handleRegisterRedirect={handleRegisterRedirect} handleLoginRedirect={handleLoginRedirect} />}
        {page === 'register' && <Inscription setPage={setPage} />}
        {page === 'login' && <Connexion setPage={setPage} setUser={setUser} />}
        {page === 'HomeClient' && <HomeClient user={user} />}
        {page === 'HomeEntraineur' && <HomeEntraineur user={user} />}
        {page === 'HomeGestionnaire' && <HomeGestionnaire user={user} />}
      </Box>
    </Box>
    </UserContext.Provider>
  );
}

export default InscriptionConnexion;