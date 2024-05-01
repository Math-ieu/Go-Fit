import React, {useState} from 'react'
import './nav.css'

const Nav = ({links, profileImage}) => {

  const  [isOpen, setIsOpen] = useState(false);

  return (
    <div id="nav">
        <div className='navbar'>
          <div className="gofit__logo">
            <h1>GO-FIT</h1>
          </div>

          <div className='nav__links'>
            {links.map((link, index) => (
              <a key={index} href={link.href}>{link.text}</a>
            ))}
          </div>

          <div className='profile__image'>
            <img src={profileImage} alt="" onClick={() => setIsOpen(true)}/>
          </div>
        </div>

    </div>
  )
}

export default Nav
