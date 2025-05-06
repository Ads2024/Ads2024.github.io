import React from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      degree: "Master of Computer Science (advanced entry)",
      school: "The University of Sydney",
      year: "2025 - Current",
      description: "Specialized in Algorithms and Theory and Data Science and AI. Key coursework includes Advanced Algorithms, Machine Learning, and Big Data Analytics."
    },
    {
      degree: "Graduate Certificate of Computer Science",
      school: "Monash University",
      year: "2023 - 2024",
      description: "Focused on computer science fundamentals and programming. Obtained a High Distinction grade."
    },
    {
      degree: "Master of Commerce",
      school: "The University of Sydney",
      year: "2019 - 2021",
      description: "Specialised in supply chain operations and global business."
    },
    {
      degree: "Bachelor of Science (Honours) in Biological Science",
      school: "University of Leicester, UK",
      year: "2014 - 2017",
      description: "Specialised in Biochemistry and Molecular Biology. Graduated with First Class Honours."
    }
  ];

  return (
    <div className="education-container">
      <h1>Education</h1>
      <div className="education-timeline">
        {educationData.map((edu, index) => (
          <div key={index} className="education-card">
            <div className="education-header">
              <h2>{edu.degree}</h2>
              <span className="year">{edu.year}</span>
            </div>
            <h3 className="school">{edu.school}</h3>
            <p className="description">{edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education; 