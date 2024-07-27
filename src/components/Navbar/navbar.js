import React from 'react'
import'./Navbar.css'
import AnchorLink from "react-anchor-link-smooth-scroll";
// import file from '../../assets/img/file.png';
import { useNavigate } from 'react-router-dom';
import download from '../../assets/img/download.png';

const Navbar = () => {

  const navigator = useNavigate();

  const navigateToResume = () => {
    navigator('/resume');
  } 

  return (
    <div className='navbar'>
        <div id="nav-logo">
                <span id="diff-color">A</span>nanya<span id="diff-color">.</span>
        </div>
        <div className='menu'>
            <AnchorLink className='menuitem' href='#home-section'>Home</AnchorLink>
            <AnchorLink className='menuitem' href='#about'>About Me</AnchorLink>
            <AnchorLink className='menuitem' href='#projects'>Projects</AnchorLink>
            <AnchorLink className='menuitem' href='#certificate'>Certificates</AnchorLink>
            {/* <AnchorLink className='menuitem'>Contact</AnchorLink> */}
        </div>
        <button id='contactme' onClick={navigateToResume}>
          <img src={download} alt='' id='contactmeimg'/>
          <p>Resume</p>
        </button>
    </div>
  )
}

export default Navbar