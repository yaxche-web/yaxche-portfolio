// components/Page404.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import JokesComponent from '../components/Jokes';

function Page404() {
  return (
    <div>
      <Navbar />
      <section>
        <div className="not-found">
          <h1 className='H1fail'>404</h1>
          <p className='fail'>Oups! La page que vous recherchez semble introuvable</p>
          <a href="/" className="home-link">Retourner sur la page d'accueil</a>
        </div>
      </section>
      <JokesComponent />
      <Footer />
    </div>
  );
};

export default Page404;
