// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Présentation</Link></li>
        <li><Link to="/skills">Compétences</Link></li>
        <li><Link to="/projects">Mes projets</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/cv">Mon CV</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
