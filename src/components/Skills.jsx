// components/Skills.jsx
import React from 'react';
import '../styles/Skills.scss';

function Skills() {
    const skills = [
      { name: "Volonté", percentage: 100 },
      { name: "HTML", percentage: 55 },
      { name: "CSS", percentage: 55 },
      { name: "JavaScript", percentage: 30 },
      { name: "React", percentage: 50 },
      { name: "Git/GitHub", percentage: 50 },
      { name: "NodeJS", percentage: 40 },
      { name: "Express", percentage: 40 },
      { name: "MongoDB", percentage: 40 },
      { name: "API", percentage: 40 },
      { name: "FontAwesome", percentage: 55 },
    ];
  
    return (
      <div className="skills-container">
        <h2>Skills :</h2>
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
