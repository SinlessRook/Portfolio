
import './App.css'
import AboutPage from './Components/Pages/AboutPage'
import LandingPage from './Components/Pages/LandingPage'
import ProjectPage from './Components/Pages/ProjectPage'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';

function App() {

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', height: 'auto' }}>
        <NavBar />
        <LandingPage />
        <AboutPage />
        <ProjectPage />
        <Footer />
      </div>
    </>
  )
}

export default App
