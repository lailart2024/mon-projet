import React from 'react';
import './App.css';
import './style.css';
import Profile from './components/Profile.js';
import ContactInfo from './components/ContactInfo.js';
import Languages from './components/Languages.js';
import Interests from './components/Interests.js';
import Education from './components/Education.js';
import ProfessionalObjective from './components/ProfessionalObjective.js';
import Skills from './components/Skills.js';
import Competencies from './components/Competencies.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <div className="contain">
        <div className="leftsplit">
          <Profile />
          <ContactInfo />
          <Languages 
            anglais={80} 
            francais={90} 
            arabe={90} 
            espagnol={20} 
          />
          <Interests />
        </div>
        <div className="rightsplit">
          <ProfessionalObjective />
          <Education />
          <Skills />
          <Competencies />
          {/* Add the link to formulaire.html */}
          <div className="form-link">
            <a href={`${process.env.PUBLIC_URL}/formulaire.html`} target="_blank" rel="noopener noreferrer">
              Go to Formulaire
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

