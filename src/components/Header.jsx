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
          <span className="h1-line h1-line-1">Bonjour!</span>
          <span className="h1-line h1-line-2">Je suis Yaxché,</span>
          <span className="h1-line h1-line-3">Développeur </span>
          <span className="h1-line h1-line-4">Full Stack<sup className="h1-exponent">baby junior</sup>
          </span>
        </h1>
      </div>

      <div>
          <FontAwesomeIcon icon={faLink} />
        </div>

      <div className="social-links">
        <div className="icon-container">
          <a href="https://github.com/Yaxche" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="icon-github fa-fade" />
          </a>
          <a href="https://www.linkedin.com/in/yaxche-web-developpeur/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="icon-linkedin fa-fade" />
          </a>
        </div>
        <div className='callaction'>
        <a href="/#contact" className="contact-button">
          Me contacter
        </a>

        </div>
        
      </div>
    </div>
  );
}

export default Header;
