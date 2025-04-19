import React from 'react';

function ProjectCard({ title, description, image, techStack, liveLink, githubLink }) {
  return (
    <div className="project-card">
      <img 
      src={image} 
      alt={title} 
      className="project-image" 
      onClick={() => window.open(image, '_blank')}
      rel="noopener noreferrer" />
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tech-stack">
          {techStack.map((tech, index) => (
            <span key={index} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
        <div className="project-buttons">
            {liveLink && (
                <a href={liveLink} target="_blank" rel="noopener noreferrer" className="btn live-btn">
                    Live Demo
                </a>
            )}
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="btn github-btn">
            View Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;