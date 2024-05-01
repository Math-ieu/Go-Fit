import React, {useState} from 'react'
import './nav.css'
import man from './assets/img/man.png'


const Nav = () => {

  const  [isOpen, setIsOpen] = useState(false);

  return (
    <div id="nav">
        <div className='navbar'>
          <div className="gofit__logo">
            <h1>GO-FIT</h1>
          </div>

          <div className='nav__links'>
            <a href="#">Planning</a>
            <a href="#">Abonnements</a>
            <a href="#">factures</a>
            <a href="#">Payements</a>
          </div>

          <div className='profile__image'>
            <img src={man} alt="" onClick={() => setIsOpen(true)}/>
          </div>
        </div>

    </div>
  )
}

export default Nav