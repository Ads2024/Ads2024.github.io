import React from 'react';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      name: 'SQL (Advanced) Certificate',
      issuer: 'HackerRank',
      date: '2025',
      logo: '/logos/hackerrank.png',
      credentialId: '',
      credentialUrl: 'https://www.hackerrank.com/certificates/f2b2dd7e510d',
      description: 'Certification in SQL (Advanced) from HackerRank.'
    },
    {
      name: 'Databricks Lakehouse Fundamentals',
      issuer: 'Databricks',
      date: '2024',
      logo: '/logos/databricks.png',
      credentialId: '',
      credentialUrl: 'https://www.credential.net/1116ab60-8a05-4737-9776-9e7c72553e40',
      description: 'Databricks Lakehouse Fundamentals'
    },
    {
      name: 'Microsoft Certified: Power BI Data Analyst Associate',
      issuer: 'Microsoft',
      date: '2023',
      logo: '/logos/microsoft.png',
      credentialId: ' D6FF6E0F01F552B0',
      credentialUrl: 'https://learn.microsoft.com/api/credentials/share/en-gb/AbdirahmanMohamed-9209/D6FF6E0F01F552B0?sharingId=15DF2C654BEE55E6',
      description: 'Certification for Power BI Data Analyst Associate'
    }
  ];

  return (
    <div className="certifications-container">
      <h1>Certifications</h1>
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-card" data-aos="fade-up" data-aos-delay={index * 100}>
            <div className="certification-logo">
              <img src={cert.logo} alt={`${cert.issuer} logo`} />
            </div>
            <div className="certification-content">
              <h2>{cert.name}</h2>
              <h3>{cert.issuer}</h3>
              <p className="date">{cert.date}</p>
              <p className="credential-id">Credential ID: {cert.credentialId}</p>
              <a href={cert.credentialUrl} className="credential-link" target="_blank" rel="noopener noreferrer">View Credential</a>
              <p className="description">{cert.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications; 