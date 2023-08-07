// pages/Home.jsx
import React from 'react';

import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Presentation from '../components/Presentation';
import Contact from '../components/Contact';
import Skills from '../components/Skills';
import Footer from '../components/Footer';




function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Presentation />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;