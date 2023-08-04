// pages/Project.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Project() {
  // Utilisez 'match.params.projectId' pour récupérer l'ID du projet depuis l'URL
  // Chargez les détails du projet depuis le fichier JSON en fonction de l'ID
  return (
    <div>
      <Navbar />
      <h2>Une page d'un projet</h2>
      <section>
        {/* Contenu de la page d'un projet */}
      </section>
      
      <Footer />
    </div>
  );
};

export default Project;
