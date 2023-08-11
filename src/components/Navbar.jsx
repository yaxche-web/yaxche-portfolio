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
              <li>
                  <Link to="/yaxche-portfolio" className="nav-logo" aria-label="Lien vers la page d'accueil Yax'ché">
                        Yax'ché
                  </Link>
              </li>
        </ul>

        </div>

        <div className={`burger ${isMenuOpen ? 'active' : ''}`} onClick={handleBurgerClick}>
          &#9776;
        </div>
      </div>
      <ul className={`right-nav ${isMenuOpen ? 'active' : ''}`}>
      <li><a href="/yaxche-portfolio/#présentation" className="nav-link">Présentation</a></li>
        <li><a href="/yaxche-portfolio/#compétences" className="nav-link">Compétences</a></li>
        <li><a href="/yaxche-portfolio/#contact" className="nav-link">Contact</a></li>
        <li><Link to="/yaxche-portfolio/projects" className="nav-link">Mes projets</Link></li>
      </ul>
    </nav>
  );
};


export default Navbar;