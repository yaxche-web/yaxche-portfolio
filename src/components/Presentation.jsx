// components/Presentation.jsx
import React from 'react';
import '../styles/Presentation.scss';

const Presentation = () => {
  return (
    <div id='présentation' className="presentation-container">
      <div className="presentation-section">
        <h2>Présentation :</h2>
        <p>
        Au terme de quelques expériences enrichissantes dans la création de sites web pour des associations et des artistes avec WordPress et Divi, j’ai pris la décision de me former de manière professionnelle en suivant la formation de 9 mois chez OpenClassrooms en tant que Développeur Web - Intégrateur. Cette formation m'a permis d’acquérir une plus grande expertise.
        </p>
      </div>
      <div id="compétences" className="competences-section">
        <h2>Compétences :</h2>
        <p>
        La formation chez OpenClassrooms a pour objectif de me permettre de maîtriser les technologies et les langages techniques suivants :
        </p>
        <ul className="centered-list">
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