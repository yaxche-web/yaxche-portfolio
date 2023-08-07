// pages/Projects.js
import React from 'react';
import Navbar from '../components/Navbar';

import GalerieProjects from '../components/GalerieProjects';

import Footer from '../components/Footer';




function Projects() {
  return (
    <div>
      <Navbar />
      <div>
        <h2>Mes projets</h2>
        <GalerieProjects />
        </div>
      <Footer />
    </div>
  );
};

export default Projects;
