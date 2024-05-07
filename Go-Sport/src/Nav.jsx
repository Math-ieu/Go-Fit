import React, {useState} from 'react'
import './nav.css'

const Nav = ({links, profileImage, user, gofitLink, setPage}) => {

  const  [isOpen, setIsOpen] = useState(false);

  return (
    <div id="nav">
        <div className='navbar' style={{ zIndex: isOpen ? 1 : 0 }}>
          <div className="gofit__logo">
            <h1 onClick={() => setPage('home')}>GO-FIT</h1>
          </div>

          <div className='nav__links'>
            {links.map((link, index) => (
              <a key={index} onClick={() => setPage(link.href)}>{link.text}</a>
            ))}
          </div>

          <div className='profile__image'>
            <img src={profileImage} alt="" onClick={() => setIsOpen(true)}/>
          </div>
        </div>
        {isOpen && (
          <div className='popup'>
            <h2>Informations de l'utilisateur</h2>
            <p>Nom : {user.firstname} {user.lastname}</p>
            <p>Email : {user.email}</p>
            <p>Sexe : {user.sex}</p>
            <p>Poids : {user.weight}</p>
            <p>Taille : {user.height}</p>
            <p>Motivation : {user.motivation}</p>
            <p>Objectif : {user.goal}</p>
            <p>Type d'entraînement : {user.trainingtype}</p>
            <p>Téléphone : {user.phone}</p>
            <p>Date de naissance : {user.birthdate.toLocaleDateString()}</p>
            <p>Date d'inscription : {user.registrationdate.toLocaleDateString()}</p>
            <button onClick={() => setIsOpen(false)}>Fermer</button>
          </div>
        )}

    </div>
  )
}

export default Nav
