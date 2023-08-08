import React, { useState } from 'react';
import '../styles/GalerieProjects.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import projectsData from '../data/projects.json';

function GalerieProjects() {
  const [expandedProjectId, setExpandedProjectId] = useState(null);

  const toggleProjectInfo = (projectId) => {
    setExpandedProjectId((prevId) => (prevId === projectId ? null : projectId));
  };

  return (
    <div className="galerie">
        {projectsData.map((project) => (
            <div key={project.id} className={`project ${expandedProjectId === project.id ? 'open' : ''}`}>

                <h3>{project.titre}</h3>

                <img src={`images/${project.image}`} alt={project.titre} />

                <div className="techno">
                  {project.techno.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>

                <button className="en-savoir-plus" onClick={() => toggleProjectInfo(project.id)}>{expandedProjectId === project.id ? 'Fermer' :'En savoir plus'}</button>

                {expandedProjectId === project.id && (
                  <div className="more-info">
                      <p>{project.description}</p>

                      <p><strong>Problématiques et solutions:</strong> {project["problématique et solution"]}</p>

                      <p><strong>Compétences développées:</strong> {project["compétences développées"]}</p>

                      <p><a href={project.githubLink} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a></p>
                      
                  </div>
          )}
            </div>
      ))}
    </div>
  );
}

export default GalerieProjects;
