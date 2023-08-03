// components/Skills.js
import React from 'react';


const Skills = () => {
    const skills = [
      { name: "HTML", percentage: 55 },
      { name: "CSS", percentage: 55 },
      { name: "JavaScript", percentage: 55 },
      { name: "React", percentage: 55 },
      { name: "Git/GitHub", percentage: 55 },
      { name: "NodeJS", percentage: 55 },
      { name: "Express", percentage: 55 },
      { name: "MongoDB", percentage: 55 },
      { name: "API", percentage: 55 },

     
      // Ajoutez d'autres compétences ici
    ];
  
    return (
      <div className="skills-container">
        <h2>Hard Skills :</h2>
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <div className="name">{skill.name}</div>
            <div className="bar-container">
              <div className="bar" style={{ width: `${skill.percentage}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Skills;
