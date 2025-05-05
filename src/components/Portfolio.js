import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'A brief description of the project and its goals.',
      image: 'https://via.placeholder.com/400x300',
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      title: 'Project 2',
      description: 'Another project description highlighting key features.',
      image: 'https://via.placeholder.com/400x300',
      technologies: ['Vue.js', 'Firebase', 'SCSS'],
      link: '#'
    },
    {
      title: 'Project 3',
      description: 'Description of the third project and its impact.',
      image: 'https://via.placeholder.com/400x300',
      technologies: ['Angular', 'Express', 'PostgreSQL'],
      link: '#'
    }
  ];

  return (
    <div className="portfolio-container">
      <h1>Portfolio</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio; 