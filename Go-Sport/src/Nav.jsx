import React, { useState } from "react";
import "./nav.css";
import { IoIosCloseCircle } from "react-icons/io";
import axios from 'axios';

const Nav = ({ links, profileImage, user, setPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [updatedUser, setUpdatedUser] = useState(user);

  const handleInputChange = (event) => {
    setUpdatedUser({
      ...updatedUser,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:3001/users/${user.id}`, updatedUser);
      alert('Informations mises à jour avec succès');
    } catch (error) {
      try {
        await axios.put(`http://localhost:3001/entraineurs/${user.id}`, updatedUser);
        alert('Informations mises à jour avec succès');
      } catch (error) {
        console.error('Erreur lors de la mise à jour des informations de l\'entraîneur', error);
      }
    }
  };

  return (
    <div id="nav">
      <div className="navbar" style={{ zIndex: isOpen ? 1 : 0 }}>
        <div className="gofit__logo">
          <h1 onClick={() => setPage('home')}>GO-FIT</h1>
        </div>

        <div className="nav__links">
          {links.map((link, index) => (
            <a key={index} onClick={() => setPage(link.href)}>
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
          <form className="popup__info" onSubmit={handleSubmit}> 
            {Object.keys(user).map((key, index) => (
              user[key] && (
                <div className="info" key={index}>
                  <label>{key.charAt(0).toUpperCase() + key.slice(1)} : </label>
                  <input type="text" name={key} id="" placeholder={user[key]} onChange={handleInputChange} />
                </div>
              )
            ))}
            <div className="popup__button">
              <button type="submit" className="modify">Modifier</button>
              <button onClick={() => setIsOpen(false)} className="close">Fermer</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Nav;
