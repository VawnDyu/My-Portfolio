import React from 'react';
import ProjectCard from './projectsCard';
import projectsData from './projectsData';
import './projects.css';
import './globals.css';

function Projects() {
  return (
    <div className="projects-page">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            techStack={project.techStack}
            liveLink={project.liveLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;