// components/Skills.js
import React from 'react';


const Skills = () => {
    const skills = [
      { name: "HTML", percentage: 55 },
      { name: "CSS", percentage: 55 },
      // Ajoutez d'autres compétences ici
    ];
  
    return (
      <div className="skills-container">
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
