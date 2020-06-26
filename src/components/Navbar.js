import React from 'react';

//Logo
import MyEduSolveLogo from '../assets/Logo.svg';
import ProfileIcon from '../assets/ProfileIcon.svg';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navbar">
      <div className="Logo-nav-menu">
        <img src={MyEduSolveLogo} className="Logo" />
        <button className="navbar-toggler Nav-dropdown" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown mr-3">
              <a className="nav-link dropdown-toggle text-dark" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                KELAS
              </a>
            </li>
            <li className="nav-item mr-3">
              <a className="nav-link text-dark">EVENTS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark">CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="Profile-nav-wrapper">
        <div className="Profile-nav">
          <img src={ProfileIcon} />
          <p>ARIYA PUTRA</p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;