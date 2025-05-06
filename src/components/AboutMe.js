import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="profile-image">
          <img src="https://media.licdn.com/dms/image/v2/D4D03AQHcqXkHFxyuHw/profile-displayphoto-shrink_800_800/B4DZXVBg2wG8Ac-/0/1743035699172?e=1752105600&v=beta&t=LWjDBZEc8Qi6v3YGf2mWhP2oKdp9zF6fP6LR_Ch-p8g" alt="Profile" />
        </div>
        <div className="about-text">
          <h1>About Me</h1>
          <p className="subtitle">Data Analyst</p>
          <p className="description">
          Data Analyst with 3+ years’ experience across FMCG, assembly manufacturing, and utilities. Skilled in SQL, Python, Power BI, and Databricks. I’ve automated reporting pipelines, implemented forecasting systems, and developed scalable data tools using SQL, Python, DAX, and Git-based CI/CD workflows that drive real decisions. Currently completing a Master of Computer Science to deepen my technical stack and expand into analytics engineering and data product development.
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