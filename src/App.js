import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import './App.css';
import AboutMe from './components/AboutMe';
import WorkHistory from './components/WorkHistory';
import Portfolio from './components/Portfolio';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import { initGA, trackPageView, trackSectionView } from './utils/analytics';

function App() {
  useEffect(() => {
    // Initialize Google Analytics
    initGA();
    
    // Track initial page view
    trackPageView(window.location.pathname);

    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.75) {
          section.classList.add('visible');
          // Track section view when it becomes visible
          const sectionId = section.id;
          trackSectionView(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-container">
          <Link to="about" smooth={true} duration={500} className="nav-link">About Me</Link>
          <Link to="work" smooth={true} duration={500} className="nav-link">Work History</Link>
          <Link to="education" smooth={true} duration={500} className="nav-link">Education</Link>
          <Link to="certifications" smooth={true} duration={500} className="nav-link">Certifications</Link>
          <Link to="portfolio" smooth={true} duration={500} className="nav-link">Portfolio</Link>
          <Link to="contact" smooth={true} duration={500} className="nav-link">Contact</Link>
        </div>
      </nav>

      <main>
        <section id="about" className="section">
          <AboutMe />
        </section>
        <section id="work" className="section">
          <WorkHistory />
        </section>
        <section id="education" className="section">
          <Education />
        </section>
        <section id="certifications" className="section">
          <Certifications />
        </section>
        <section id="portfolio" className="section">
          <Portfolio />
        </section>
        <section id="contact" className="section">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App; 