// components/Skills.jsx
import React from 'react';
import '../styles/Skills.scss';

function Skills() {
    const skills = [
      { name: "Volonté", percentage: 100 },
      { name: "HTML", percentage: 90 },
      { name: "CSS", percentage: 70 },
      { name: "JavaScript", percentage: 30 },
      { name: "React", percentage: 60 },
      { name: "Git/GitHub", percentage: 60 },
      { name: "NodeJS", percentage: 50 },
      { name: "Express", percentage: 50 },
      { name: "MongoDB", percentage: 55 },
      { name: "API", percentage: 50 },
      { name: "FontAwesome", percentage: 55 },
    ];
  
    return (
      <div className="skills-container">
        <h2>Skills :</h2>
        <p>"Le pourcentage est basé sur mon sentiment de maîtrise à la fin de ma formation."</p>
        <div className="center-container">
            {skills.map((skill, index) => (
              <div className="skill" key={index}>
                <div className="name-skill">
                <span className="name">{skill.name}</span>
              </div>
                <div className="bar-container">
                  <div className="bar" style={{ width: `${skill.percentage}%` }}></div>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  };
  
  export default Skills;
