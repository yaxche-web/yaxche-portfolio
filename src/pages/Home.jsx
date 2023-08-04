// pages/Home.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Navbar from '../components/Navbar';
import Presentation from '../components/Presentation';
import Contact from '../components/Contact';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

function Home() {
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