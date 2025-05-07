import React from 'react';
import './Education.css';

const Education = () => {
  const educationHistory = [
    {
      institution: 'University of Sydney',
      degree: 'Master of Computer Science (advanced entry)',
      period: '2025 - Current',
      logo: '/logos/usyd.jpg',
      description: "Specialized in Algorithms and Theory and Data Science and AI. Key coursework includes Advanced Algorithms, Machine Learning, and Big Data Analytics.",
      achievements: [
      ]
    },
    {
      institution: 'Monash University',
      degree: 'Graduate Certificate of Computer Science',
      period: '2019 - 2021',
      logo: '/logos/monash.png',
      description: "Foundation in Computer Science, including programming, data structures, and algorithms.",
      achievements: [
        'High Distinction'
      ]
    },
    {
      institution: 'University of Sydney',
      degree: 'Master of Commerce',
      period: '2019 - 2021',
      logo: '/logos/usyd.jpg',
      description: "Specialised in Supply chain Operations Management, focused on supply chain analytics, optimisation, risk management and predictive analytics.",
      achievements: [
      ]
    },
    {
      institution: 'University of Leicester',
      degree: 'Bachelor of Science in Biological Sciences',
      period: '2014 - 2017',
      logo: '/logos/leicester.jpg',
      description: 'Focused on molecular biology, genetics, and statistical analysis. Developed strong analytical skills through laboratory research and data analysis.',
      achievements: [
        'First Class Honours',
        'Research Project: "Statistical Analysis of Antibacterial Properties"',
        'Key courses: Molecular Biology, Genetics, Statistics, Research Methods'
      ]
    }
  ];

  // Sort education history by period (latest first)
  const sortedEducationHistory = [...educationHistory].sort((a, b) => {
    const getYear = (period) => {
      const year = period.split(' - ')[0];
      return year === 'Current' ? 9999 : parseInt(year);
    };
    return getYear(b.period) - getYear(a.period);
  });

  return (
    <div className="education-container">
      <h1>Education</h1>
      <div className="education-grid">
        {sortedEducationHistory.map((edu, index) => (
          <div key={index} className="education-card" data-aos="fade-up" data-aos-delay={index * 100}>
            <div className="institution-logo">
              <img src={edu.logo} alt={`${edu.institution} logo`} />
            </div>
            <div className="education-content">
              <h2>{edu.institution}</h2>
              <h3>{edu.degree}</h3>
              <p className="period">{edu.period}</p>
              <p className="description">{edu.description}</p>
              <ul className="achievements">
                {edu.achievements.map((achievement, idx) => (
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

export default Education; 