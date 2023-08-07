// pages/Page404.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import JokesComponent from '../components/Jokes';
import '../styles/Page404.scss';

function Page404() {
  return (
    <div>
      <Navbar />


      <div className="page-container">

        <div className="not-found">

          <h1 className='H1fail'>404</h1>
          <p className='fail'>Oups! La page que vous recherchez semble introuvable</p>
          <a href="/" className="home-link">Retourner à la page d'accueil</a>

        </div>

        <div className='jokes'><JokesComponent /></div>

       
        
      </div>
      
      <Footer />
    </div>
  );
};

export default Page404;
