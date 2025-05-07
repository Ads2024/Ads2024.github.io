import React from 'react';
import './WorkHistory.css';

const WorkHistory = () => {
  const workExperiences = [
    {
      company: 'Downer EDI',
      position: 'Data Analyst',
      period: '2024 - Present',
      logo: '/logos/downer.png',
      description: 'Developed and maintained data pipelines and reporting tools using SQL, Python, and Power BI to support decision-making and strategic initiatives.',
      achievements: [
        'Automated reporting workflows, cutting manual effort by 50% and improving reliability',
        'Delivered self-service Power BI and custome Streamlit dashboards integrating DAX, SQL, and Python for key business unit',
        'Championed version control adoption for BI assets using Git, supporting collaboration and auditability',
        'Implemented forecasting systems using Python and SQL, providing insights for capacity planning and resource allocation',
        'Created automated statistical anomaly detection workflows for ticketing system metrics, reducing incident blind spots'
      ]
    },
    {
      company: 'Snack Brands Australia',
      position: 'Supply Chain Data Analyst',
      period: '2022 - 2023',
      logo: '/logos/snackbrands.jpg',
      description: 'Transformed supply chain analytics through statistical forecasting and data warehousing. Designed A/B testing frameworks with linear programming to optimize operational planning. Modernized planning systems from legacy Access to Power BI, substantially increasing analytical capabilities across the organization',
      achievements: [
        'Applied A/B testing and linear programming to optimise operational costs, achieving a 25% reduction in forecast error',
        'Led inventory forecasting initiative using statistical modelling, reducing holding costs by 15%',
        'Modernised supply chain planning system from legacy Access to Power BI, significantly enhancing analytical capabilities',
        'Developed a forecasting system using Python and SQL, providing insights for capacity planning and resource allocation',
        'Developed real-time KPI dashboards for supply chain monitoring and anomaly detection, reducing incident blind spots'
      ]
    },
    {
      company: 'Rode Microphones',
      position: 'Operations Analyst',
      period: '2021 - 2022',
      logo: '/logos/rode.jpg',
      description: 'Drove manufacturing efficiency improvements through data-driven optimization. Applied statistical analysis and linear programming to production processes, improving labor efficiency and overall production throughput. Built real-time performance monitoring dashboards for operational visibility',
      achievements: [
        'Implemented statistical analysis and linear programming to optimise production processes, improving labor efficiency and overall production throughput by 25%',
        'Ran A/B tests to optimise packaging, improving labour efficiency by 70%',
        'Introduced automated reporting workflows, saving over 10 hours per week in manual effort',
        'Built real-time performance monitoring dashboards for operational visibility'
      ]
    },
    {
      company: 'University of Leicester',
      position: 'Research Assistant Intern (Statistical Modelling)',
      period: '2016 - 2017',
      logo: '/logos/leicester.jpg',
      description: 'Performed statistical modeling in R to analyze antibacterial properties of paracetamol. Contributed to experimental design, spectroscopy analysis, and gene expression studies via PCR and cell-based assays.',
      achievements: [
        'Developed statistical models in R to analyse antibacterial properties of paracetamol',
        'Contributed to experimental design, spectroscopy analysis, and gene expression studies via PCR and cell-based assays',
        'Completed a 12 month research project on the antibacterial properties of paracetamol'
      ]
    }
  ];

  return (
    <div className="work-history-container">
      <h1>Work History</h1>
      <div className="timeline">
        {workExperiences.map((experience, index) => (
          <div key={index} className="timeline-item" data-aos="fade-up" data-aos-delay={index * 100}>
            <div className="timeline-content">
              <div className="company-logo">
                <img src={experience.logo} alt={`${experience.company} logo`} />
              </div>
              <h2>{experience.company}</h2>
              <h3>{experience.position}</h3>
              <p className="period">{experience.period}</p>
              <p className="description">{experience.description}</p>
              <ul className="achievements">
                {experience.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkHistory; 