import React from 'react';
import { useParams } from 'react-router-dom';
import { projectsData } from '../data/ProjectData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGithub } from '@fortawesome/free-brands-svg-icons';   


function ProjectDetail () {
    const { projectId } = useParams();
    const project = projectsData.find((project) => project.id === parseInt(projectId));

  return (
    <div className="project-detail">
      <img
        src={`/images/${project.imageFile}`} // Use image path from public folder
        alt={project.title}
        className="project-image"
      />
      
      <h2>{project.title}</h2>
      <p className="project-description">{project.description}</p>
      <div className="project-info">
        <p><b>Dates:</b> {project.dateStarted} - {project.dateEnded}</p>
        <p><b>Tech Stack:</b> {project.techStack.join(', ')}</p>
        <p><b>Association:</b> {project.association}</p>
        <a href={project.githubLink} className="github-link" target='_blank'>
          <FontAwesomeIcon icon={faGithub} className="fa-icon" />
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectDetail;