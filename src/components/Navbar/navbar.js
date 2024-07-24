import React from 'react'
import'./navbar.css'
import AnchorLink from "react-anchor-link-smooth-scroll";
import file from '../../assets/img/file.png';
import { useNavigate } from 'react-router-dom';
import download from '../../assets/img/download.png';

const Navbar = () => {

  const navigator = useNavigate();

  const navigateToResume = () => {
    navigator('/resume');
  } 

  return (
    <nav className='navbar'>
        <div id="nav-logo">
                <span id="diff-color">A</span>nanya<span id="diff-color">.</span>
        </div>
        <div className='menu'>
            <AnchorLink className='menulist' href='#home'>Home</AnchorLink>
            <AnchorLink className='menulist' href='#about'>About Me</AnchorLink>
            <AnchorLink className='menulist' href='#projects'>Projects</AnchorLink>
            <AnchorLink className='menulist' href='#certificate'>Certificates</AnchorLink>
            <AnchorLink className='menulist'>Contact</AnchorLink>
            {/* <li><a href="#home" class="active">Home</a></li>
            <li><a href="#AboutMe">About Me</a></li>
            <li><a href="#Projects">Projects</a></li>
            <li><a href="#Certificates">Certificates</a></li>
            <li><a href="#Contact">Contact</a></li> */}
        </div>
        <button id='contactme' onClick={navigateToResume}>
          <img src={download} alt='' id='contactmeimg'/>
          <p>Resume</p>
        </button>
    </nav>
  )
}

export default Navbar