
import './App.css'
import AboutPage from './pages/AboutPage'
import LandingPage from './pages/LandingPage'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/Footer';
import NavBar from './components/NavBar';

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
