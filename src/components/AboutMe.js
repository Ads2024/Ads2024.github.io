import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="profile-image">
          <img src="profile.jpeg" alt="Profile" />
        </div>
        <div className="about-text">
          <h1>About Me</h1>
          <p className="subtitle">
  <strong>Quantitative Analyst & Analytics Engineer</strong><br />
  Forecasting &nbsp;|&nbsp; Optimization &nbsp;|&nbsp; Scalable BI Systems
</p>
          <p className="description">
          Data Analyst & Analytics Engineer with 3+ years of experience across FMCG, assembly manufacturing, and utilities. I specialize in building forecasting models, optimization tools, and self-serve BI systems using Python, SQL, DAX, and Databricks. My work spans automated reporting pipelines, statistical anomaly detection, and scalable data infrastructure, all backed by Git-based CI/CD workflows. Currently completing a Master of Computer Science to deepen my capabilities in distributed systems, machine learning, and analytics product development.
          </p>
          <div className="skills">
            <h2>Skills</h2>
            <div className="skill-tags">
              <span className="skill-tag">Power BI</span>
              <span className="skill-tag">SQL</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">A/B Testing</span>
              <span className="skill-tag">Statistical Analysis</span>
              <span className="skill-tag">Data Visualization</span>
              <span className="skill-tag">Data Engineering</span>
              <span className="skill-tag">Data Science</span>
              <span className="skill-tag">Data Modelling</span>
              <span className="skill-tag">Git</span>
              <span className="skill-tag">CI/CD</span>
              <span className="skill-tag">Databricks</span>
              <span className="skill-tag">DAX</span>
              <span className="skill-tag">Forecasting</span>
              <span className="skill-tag">ETL</span>
              <span className="skill-tag">Tableau</span>
              <span className="skill-tag">Excel</span>
              <span className="skill-tag">Docker</span>
              <span className="skill-tag">Java</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">React</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Azure</span>
              <span className="skill-tag">MongoDB</span>
              
              

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe; 
