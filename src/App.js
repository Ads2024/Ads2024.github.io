import React from 'react';
import { Link } from 'react-scroll';
import './App.css';
import AboutMe from './components/AboutMe';
import WorkHistory from './components/WorkHistory';
import Portfolio from './components/Portfolio';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-container">
          <Link to="about" smooth={true} duration={500} className="nav-link">About Me</Link>
          <Link to="work" smooth={true} duration={500} className="nav-link">Work History</Link>
          <Link to="education" smooth={true} duration={500} className="nav-link">Education</Link>
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