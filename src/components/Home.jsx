// components/Home.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Navbar from './Navbar';
import Presentation from './Presentation';
import Contact from './Contact';
import Skills from './Skills';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <header>
        <h1>Bonjour!
        Je suis Yaxché
        Développeur full stack</h1>
        <a href="https://github.com/Yaxche" target="_blank" rel="noopener noreferrer"> {/*  rel="noopener noreferrer" pour assurer une meilleure sécurité  */}
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/yaxche-web-developpeur/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>
      </header>
      <Presentation />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
