// components/Header.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../styles/Header.scss';

function Header() {
  return (
    <div className="header-container">
      
      <div className="h1-container">
        <h1>
          <span className="h1-line">Bonjour!</span>
          <span className="h1-line">Je suis Yaxché,</span>
          <span className="h1-line">Développeur </span>
          <span className="h1-line">Full Stack<sup className="h1-exponent">baby junior</sup>
          </span>
        </h1>
      </div>

      <div>
          <FontAwesomeIcon icon={faLink} />
        </div>

      <div className="social-links">
        <div className="icon-container">
        <a href="https://github.com/yaxche-web" target="_blank" rel="noopener noreferrer" aria-label="Lien vers GitHub">
  <FontAwesomeIcon icon={faGithub} className="icon-github fa-fade" />
</a>
<a href="https://www.linkedin.com/in/yaxche-web-developpeur/" target="_blank" rel="noopener noreferrer" aria-label="Lien vers LinkedIn">
  <FontAwesomeIcon icon={faLinkedin} className="icon-linkedin fa-fade" />
</a>

        </div>
        <div className='callaction'>
        <a href="/yaxche-portfolio/#contact" className="contact-button">
          Me contacter
        </a>

        </div>
        
      </div>
    </div>
  );
}

export default Header;
