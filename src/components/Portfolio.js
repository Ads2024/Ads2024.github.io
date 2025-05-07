import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      title: 'Linear Programming Model',
      description: 'A Linear Programming (LP) model designed to help students make strategic college application decisions based on their GPA. Using data analysis of past admission statistics, this model balances admission probability with college prestige to optimize application strategy.',
      image: 'https://github.com/Ads2024/US-College-Optimizer-LP-Model/blob/main/public/LP_Model.png?raw=true/400x300',
      technologies: ['React', 'Node.js', 'tailwind'],
      projectLink: 'https://ads2024.github.io/US-College-Optimizer-LP-Model/',
      repoLink: 'https://github.com/Ads2024/US-College-Optimizer-LP-Model'
    },
    {
      title: 'A/B Testing Analysis',
      description: 'This analysis compares the performance of two marketing campaigns using A/B testing methodology. The control campaign represents the established approach, while the test campaign implements alternative strategies.',
      image: 'https://github.com/Ads2024/AB-Testing-Campaign-Analysis/blob/main/public/AB_Testing.png?raw=true/400x300',
      technologies: ['React', 'Node.js', 'tailwind'],
      projectLink: 'https://ads2024.github.io/AB-Testing-Campaign-Analysis/',
      repoLink: 'https://github.com/Ads2024/AB-Testing-Campaign-Analysis'
    },
    {
      title: 'BMW Stock Analytics Dashboard',
      description: 'A modern, interactive dashboard built with Streamlit for analyzing BMW stock data. Features a UI with glassmorphism effects and dynamic starfield background animation.',
      image: 'https://github.com/Ads2024/BMW-Stock-Analysis-Dashboard/blob/main/assets/Preview.gif?raw=true/400x300',
      technologies: ['Python', 'Streamlit', 'Plotly', 'glassmorphism','scipy','numpy','pandas'],
      projectLink: 'https://bmw-stock-analysis-dashboard.streamlit.app/',
      repoLink: 'https://github.com/Ads2024/BMW-Stock-Analysis-Dashboard'
    }
  ];

  return (
    <div className="portfolio-container">
      <h1>Portfolio</h1>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-card" data-aos="fade-up" data-aos-delay={index * 100}>
            <div className="portfolio-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="portfolio-content">
              <h2>{project.title}</h2>
              <p className="description">{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.projectLink} className="project-link" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-external-link-alt"></i> View Project
                </a>
                <a href={project.repoLink} className="repo-link" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i> View Repository
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio; 