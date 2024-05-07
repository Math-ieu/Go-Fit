import React, { useState } from "react";
import "./nav.css";
import { IoIosCloseCircle } from "react-icons/io";

const Nav = ({ links, profileImage, user }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="nav">
      <div className="navbar" style={{ zIndex: isOpen ? 1 : 0 }}>
        <div className="gofit__logo">
          <h1>GO-FIT</h1>
        </div>

        <div className="nav__links">
          {links.map((link, index) => (
            <a key={index} href={link.href}>
              {link.text}
            </a>
          ))}
        </div>

        <div className="profile__image">
          <img src={profileImage} alt="" onClick={() => setIsOpen(true)} />
        </div>
      </div>
      {isOpen && (
        <div className="popup">
          <div id="popup__head">
            <h1>Mes informations</h1>
            <i onClick={() => setIsOpen(false)}><IoIosCloseCircle/></i>
          </div>
          <hr />
          <div className="popup__info"> 
            <div className="info">
              <label>Nom : </label>
              <input type="text" name="" id="" placeholder={user.lastname} />
            </div>
            <div className="info">
              <label>Prenom : </label>
              <input type="text" name="" id="" placeholder={user.firstname} />
            </div>
            <div className="info">
              <label>Email : </label>
              <input type="text" name="" id="" placeholder={user.email} />
            </div>
            <div className="info">
              <label>Sexe : </label>
              <input type="text" name="" id="" placeholder={user.sex} />
            </div>
            <div className="info">
              <label>Poids : </label>
              <input type="text" name="" id="" placeholder={user.weight} />
            </div>
            <div className="info">
              <label>Taille : </label>
              <input type="text" name="" id="" placeholder={user.height} />
            </div>
            <div className="info">
              <label>Motivation : </label>
              <input type="text" name="" id="" placeholder={user.motivation} />
            </div>
            <div className="info">
              <label>Objectif : </label>
              <input type="text" name="" id="" placeholder={user.goal} />
            </div>
            <div className="info">
              <label>Type d'entrainement : </label>
              <input type="text" name="" id="" placeholder={user.trainingtype} />
            </div>
            <div className="info">
              <label>Téléphone : </label>
              <input type="text" name="" id="" placeholder={user.phone} />
            </div>
            <div className="info">
              <label>Date de Naissance : </label>
              <input type="text" name="" id="" placeholder={user.birthdate.toLocaleDateString()} />
            </div>
            <div className="info">
              <label>Date d'Inscription : </label>
              <input type="text" name="" id="" placeholder={user.registrationdate.toLocaleDateString()} />
            </div>
          </div>
          <div className="popup__button">
            <button className="modify">Modifier</button>
            <button onClick={() => setIsOpen(false)} className="close">Fermer</button>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default Nav;
