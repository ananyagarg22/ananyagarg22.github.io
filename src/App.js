import './App.css';
import Navbar from './components/Navbar/navbar.js';
import FixedSideIcons from './components/fixed-side-icons/fixed-side-icons.js';
import Home from './components/Home/home.js';
import About from './components/About/about.js';
import Projects from './components/Projects/projects.js';
import CertificateSection from './components/CertificateSection/certificateSection.js';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <FixedSideIcons/>
      <Home/>
      <About/>
      <Projects/>
      <CertificateSection/>
    </div>
  )
}

export default App;
