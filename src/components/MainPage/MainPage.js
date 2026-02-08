import React from 'react'
import Navbar from '../Navbar/navbar.js';
import FixedSideIcons from '../FixedSideIcons/FixedSideIcons.js';
import HomeSection from '../HomeSection/HomeSection.js';
import AboutSection from '../AboutSection/AboutSection.js';
import ProjectSection from '../ProjectSection/ProjectSection.js';
import CertificateSection from '../CertificateSection/certificateSection.js';
import Background from '../Background/Background.js';

function MainPage() {
  return (
    <div>
      <Background/>
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