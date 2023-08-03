// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Présentation</Link></li>
        <li><a href="/#compétences">Compétences</a></li>
        <li><Link to="/projects">Mes projets</Link></li>
        <li><a href="/#contact">Contact</a></li>
        <li><Link to="/Cv">Mon CV</Link></li>
        <li><Link to="/Page404">404</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
