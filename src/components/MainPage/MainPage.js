import React from 'react'
import Navbar from '../Navbar/navbar.js';
import FixedSideIcons from '../fixed-side-icons/fixed-side-icons.js';
import Home from '../Home/home.js';
import About from '../About/about.js';
import Projects from '../Projects/projects.js';
import CertificateSection from '../CertificateSection/certificateSection.js';

function MainPage() {
  return (
    <div>
      <Navbar/>
      <FixedSideIcons/>
      <Home/>
      <About/>
      <Projects/>
      <CertificateSection/>
    </div>
  )
}

export default MainPage