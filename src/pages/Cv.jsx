// components/CV.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function CV() {
  return (
    <div>
      <Navbar />
      <section>
        <h2>Mon CV</h2>
        {/* Le CV visible dans la page avec un bouton pour le télécharger ou l'imprimer */}
      </section>
      <Footer />
    </div>
  );
};

export default CV;
