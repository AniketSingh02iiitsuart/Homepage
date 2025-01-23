import React from 'react';
import './ProjectsSection.css';

function ProjectsSection() {
  return (
    <section className="projects-section">
      <h2>Our Projects</h2>
      <div className="projects">
        <img src="https://via.placeholder.com/150" alt="Project 1" />
        <img src="https://via.placeholder.com/150" alt="Project 2" />
        <img src="https://via.placeholder.com/150" alt="Project 3" />
      </div>
    </section>
  );
}

export default ProjectsSection;