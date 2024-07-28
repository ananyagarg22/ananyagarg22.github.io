import React from 'react'
import'./Navbar.css'
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import download from '../../assets/img/download.png';
import techCV from '../../assets/AnanyaGarg_CV.pdf';
import nontechCV from '../../assets/AnanyaGarg_nontechCV.pdf';
import dropdown from '../../assets/img/arrow-down-sign-to-navigate.png';
import redirect from '../../assets/img/share_w.png';

const Navbar = () => {

  // const navigator = useNavigate();

  // const navigateTo = () => {
  //   navigator('/resume');
  // }
  const [isVisible,setVisible] = useState(false);

  const showPopUp = () => {
    setVisible(true);
  
  }
  const hidePopUp = () => {
    setVisible(false);
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
        <div>
          <div id='contactme' onMouseEnter={showPopUp} onMouseLeave={hidePopUp}>
            <p>Resume</p>
            <img src={dropdown} alt='' id='contactmeimg'/>
            {
              isVisible && <ul id='resume-options'>
              <hr/><li>
                <button>
                  <a href={techCV} target='_blank' rel='noreferrer'>
                    Technical &nbsp;
                    <img src={redirect} alt='' id='contactmeimg'/>
                  </a>
                </button>
              </li>
              <li>
                <button>
                  <a href={nontechCV} target='_blank' rel='noreferrer'>
                    Non-Technical &nbsp;
                    <img src={redirect} alt='' id='contactmeimg'/>
                  </a>
                </button>
              </li>
            </ul>
          }
          </div>
          
        </div>

    </div>
  )
}

export default Navbar