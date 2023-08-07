// components/Navbar.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import '../styles/Navbar.scss';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleBurgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      
      <div className="mobile-nav">

        <div className="logo">
            <ul>
                <li><Link to="/" className="nav-logo">Yax'ché</Link></li>
                <span className="visually-hidden">aller à la page d'accueil</span>
            </ul>
        </div>

        <div className={`burger ${isMenuOpen ? 'active' : ''}`} onClick={handleBurgerClick}>
          &#9776;
        </div>
      </div>
      <ul className={`right-nav ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="/#présentation" className="nav-link">Présentation</a></li>
        <li><a href="/#compétences" className="nav-link">Compétences</a></li>
        <li><a href="/#contact" className="nav-link">Contact</a></li>
        <li><Link to="/projects" className="nav-link">Mes projets</Link></li>
        <li><Link to="/Page404" className="nav-link">404</Link></li>
      </ul>
    </nav>
  );
};


export default Navbar;