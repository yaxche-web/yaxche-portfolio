// components/Footer.jsx
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCookieBite } from "@fortawesome/free-solid-svg-icons";
import '../styles/Footer.scss';

function Footer() {
  return (
    <footer>
      <p>&#169; Réalisé à la main par Yaxché - Développeur web</p>

    <p>
        Ce site ne propose pas de cookies ! mais si vous en voulez, cliquez sur l'icône <a href="https://www.google.com/search?q=o%C3%B9+manger+des+cookies+proche+de+chez+moi" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faCookieBite} className='iconcookie'/>
      </a> pour trouver les meilleurs endroits où en manger près de chez vous !
      </p>
      

    </footer>
  );
};

export default Footer;
