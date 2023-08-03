// components/Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      <p>Réalisé à la main par Yaxché - Développeur web</p>
      <div>
      <a href="https://github.com/Yaxche" target="_blank" rel="noopener noreferrer"> {/*  rel="noopener noreferrer" pour assurer une meilleure sécurité  */}
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/yaxche-web-developpeur/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
