import './App.css';
import AboutPage from './components/About.jsx';
import LandingPage from './components/Landing.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/Footer.jsx';
import NavBar from './components/NavBar.jsx';
import ProjectPage from './components/Project.jsx';
import ContactPage from './components/ContactPage.jsx';
import { useState, useRef, useEffect } from 'react';

function App() {
  const [position, setPosition] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    if (sectionRefs.current[position]) {
      sectionRefs.current[position].scrollIntoView({ behavior: 'smooth' });
    }
  }, [position]);


  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', height: 'auto' }}>
        <NavBar currentPage={position} onNavigate={setPosition} />
        <div ref={(el) => (sectionRefs.current[0] = el)} />
        <LandingPage />
        <div ref={(el) => (sectionRefs.current[1] = el)} />
        <AboutPage />
        <div ref={(el) => (sectionRefs.current[2] = el)} />
        <ProjectPage />
        <div ref={(el) => (sectionRefs.current[3] = el)} />
        <ContactPage />
        <Footer />
      </div>
    </>
  );
}

export default App;
