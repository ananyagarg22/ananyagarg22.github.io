// import React from 'react'
// import'./Navbar.css'
// import AnchorLink from "react-anchor-link-smooth-scroll";
// import { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import download from '../../assets/img/download.png';
// import techCV from '../../assets/AnanyaGarg_CV.pdf';
// import nontechCV from '../../assets/AnanyaGarg_nontechCV.pdf';
// import dropdown from '../../assets/img/arrow-down-sign-to-navigate.png';
// import redirect from '../../assets/img/share_w.png';

// const Navbar = () => {

//   // const navigator = useNavigate();

//   // const navigateTo = () => {
//   //   navigator('/resume');
//   // }
//   const [isVisible,setVisible] = useState(false);

//   const showPopUp = () => {
//     setVisible(true);
  
//   }
//   const hidePopUp = () => {
//     setVisible(false);
//   }

//   return (
//     <div className='navbar'>
//         <div id="nav-logo">
//                 <span id="diff-color">A</span>nanya<span id="diff-color">.</span>
//         </div>
//         <div className='menu'>
//             <AnchorLink className='menuitem' href='#home-section'>Home</AnchorLink>
//             <AnchorLink className='menuitem' href='#about'>About Me</AnchorLink>
//             <AnchorLink className='menuitem' href='#projects'>Projects</AnchorLink>
//             <AnchorLink className='menuitem' href='#certificate'>Certificates</AnchorLink>
//             {/* <AnchorLink className='menuitem'>Contact</AnchorLink> */}
//         </div>
//         <div>
//           <div id='contactme' onMouseEnter={showPopUp} onMouseLeave={hidePopUp}>
//             <p>Resume</p>
//             <img src={dropdown} alt='' id='contactmeimg'/>
//             {
//               isVisible && <ul id='resume-options'>
//               <hr/><li>
//                 <button>
//                   <a href={techCV} target='_blank' rel='noreferrer'>
//                     Technical &nbsp;
//                     <img src={redirect} alt='' id='contactmeimg'/>
//                   </a>
//                 </button>
//               </li>
//               <li>
//                 <button>
//                   <a href={nontechCV} target='_blank' rel='noreferrer'>
//                     Non-Technical &nbsp;
//                     <img src={redirect} alt='' id='contactmeimg'/>
//                   </a>
//                 </button>
//               </li>
//             </ul>
//           }
//           </div>
          
//         </div>

//     </div>
//   )
// }

// export default Navbar

import React, { useState } from 'react';
import './Navbar1.css';
import AnchorLink from "react-anchor-link-smooth-scroll";
import techCV from '../../assets/AnanyaGarg_CV.pdf';
import nontechCV from '../../assets/AnanyaGarg_nontechCV.pdf';
import dropdown from '../../assets/img/arrow-down-sign-to-navigate.png';
import redirect from '../../assets/img/share_w.png';
import Dropdown from 'rc-dropdown';
import Menu, { Item as MenuItem, Divider } from 'rc-menu';
import 'rc-dropdown/assets/index.css';

const Navbar = () => {
  const [isVisible, setVisible] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const showPopUp = () => {
    setVisible(!isVisible); // Toggle visibility on click
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navbar'>
      <div id="nav-logo">
        <span id="diff-color">A</span>nanya<span id="diff-color">.</span>
      </div>
      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <AnchorLink className='menuitem' href='#home-section'>Home</AnchorLink>
        <AnchorLink className='menuitem' href='#about'>About Me</AnchorLink>
        <AnchorLink className='menuitem' href='#projects'>Projects</AnchorLink>
        <AnchorLink className='menuitem' href='#certificate'>Certificates</AnchorLink>
      </div>
      <div id='contactme'>
        <Resumebutton/>
      </div>
      {/* <div className='resume-container'>
        <div id='contactme' onClick={showPopUp}>
          <p>Resume</p>
          <img src={dropdown} alt='' id='contactmeimg'/>
          {isVisible && (
            <ul id='resume-options' onMouseLeave={() => setVisible(false)}>
              <hr/>
              <li>
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
          )}
        </div>
      </div> */}
      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>
    </div>
  );
};

const Resumebutton = () => {

  const redirect_icon = (
    <img src={redirect} alt=''id='contactmeimg'/>
  )
  const menu = (
    <Menu>
      <Divider />
      <MenuItem id='Ananya' itemIcon={redirect_icon}>
        <a href={techCV} target='_blank' rel='noreferrer'>
           Technical &nbsp;
        </a>
      </MenuItem>
      <MenuItem id='Ananya' itemIcon={redirect_icon}>
        <a href={nontechCV} target='_blank' rel='noreferrer'>
          Non-Technical &nbsp;
          
        </a>
      </MenuItem>
    </Menu>
  );
  return(
    <Dropdown
        overlay={menu}
        animation="slide-up"
        overlayClassName='mudit'
    >
      <button id='resume-style'>Resume</button>
    </Dropdown>
  )
}
export default Navbar;

