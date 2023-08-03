import React from 'react';

const Presentation = () => {
  return (
    <div className="presentation-container">
      <div className="presentation-section">
        <h2>Présentation :</h2>
        <p>
          Après quelques expériences sur la création de deux sites pour une association
          et une artiste via wordpress et divi, j’ai décidé de me former plus
          professionnellement en suivant la formation chez OpenClassrooms de 9 mois :
          Développeur Web - intégrateur.
        </p>
      </div>
      <div id="compétences" className="competences-section">
        <h2>Compétences :</h2>
        <p>
          La formation chez OpenClassrooms a pour but de faire maîtriser les technologies
          et les langages techniques suivants :
        </p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Git/GitHub</li>
          <li>NodeJS</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>les API REST</li>
        </ul>
      </div>
    </div>
  );
};

export default Presentation;