import React, { useState } from 'react';
import JokesData from '../data/jokes';

function JokesComponent() {
  const [currentJoke, setCurrentJoke] = useState("Cliquez sur le bouton pour afficher une blague de développeur"); // hook useState pour gérer la blague actuelle : currentJoke. 

  function getRandomJoke() { // fonction gènère un index aléatoire à partir du tableau de données JokesData
    const randomIndex = Math.floor(Math.random() * JokesData.length);
    setCurrentJoke(JokesData[randomIndex].text);
  }

  return (
    <div className="jokes-container">
      <p id="joke-text">{currentJoke}</p>
      <button id="refresh-btn" onClick={getRandomJoke}> {/* au click renouvelle la blague */}
        Rafraîchir la blague
      </button>
    </div>
  );
}

export default JokesComponent;
