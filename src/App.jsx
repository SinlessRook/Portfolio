import './App.css'
import AboutPage from './pages/AboutPage.jsx'
import LandingPage from './pages/LandingPage.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/Footer.jsx';
import NavBar from './components/NavBar.jsx';
import ProjectPage from './Pages/ProjectPage.jsx';

function App() {

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', height: 'auto' }}>
        <NavBar />
        <LandingPage />
        <AboutPage />
        <ProjectPage/>
        <Footer />
      </div>
    </>
  )
}

export default App
