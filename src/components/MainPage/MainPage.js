import React from 'react'
import Navbar from '../Navbar/Navbar.js';
import FixedSideIcons from '../FixedSideIcons/FixedSideIcons.js';
import HomeSection from '../HomeSection/HomeSection.js';
import AboutSection from '../AboutSection/AboutSection.js';
import ProjectSection from '../ProjectSection/ProjectSection.js';
import CertificateSection from '../CertificateSection/CertificateSection.js';

function MainPage() {
  return (
    <div>
      <Navbar/>
      <FixedSideIcons/>
      <HomeSection/>
      <AboutSection/>
      <ProjectSection/>
      <CertificateSection/>
    </div>
  )
}

export default MainPage