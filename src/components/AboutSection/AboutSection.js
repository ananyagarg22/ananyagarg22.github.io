import './AboutSection.css'
import React from 'react'
import calendar from '.././../assets/img/calendar.png';
import pythonicon from '../../assets/icons/python.svg';
import jsicon from '../../assets/icons/js.svg';
import mysql from '../../assets/icons/mysql.svg';
import html from '../../assets/icons/html.svg';
import css from '../../assets/icons/css.svg';
import matlab from '../../assets/icons/matlab.svg';
import react from '../../assets/icons/react.svg';
import vuejs from '../../assets/icons/vuejs.svg';
import git from '../../assets/icons/git.svg';
import vscode from '../../assets/icons/vscode.svg';
import arduino from '../../assets/icons/arduino.svg';
import link from '../../assets/img/link.png';
import tensorflow from '../../assets/icons/tensorflow.svg';
import jupyter from '../../assets/icons/jupyter.svg';

const AboutSection = () => {
  return (
    <div id='about'>
      <div id='heading'>
        About Me
      </div>
      <div id='insideaboutsection'>
        <p>Hi There, I am <span id='fullname-color'>Ananya Garg</span> from <span id='city-color'>Faridabad, India</span>.
          <br/>
        I have completed my Bachelors degree (B.A.I) in Computer Engineering at Trinity College Dublin. 🍀</p>
      </div>
      <div id='education-and-experience-sections'>
        {/* Education Section */}
        <div id='education'>
          <h2 id='education-heading'>Education</h2><br/>
          <div id='education-content'>
            <div id='education-section'>
            <p id='class-year'><img src={calendar} alt='calender-icon' width='20px' height='20px'></img>&nbsp;2021-2023</p><br/>
            <p><b>Bachelors Degree (B.A.I) - Trinity College Dublin</b></p><br/>
            <p>Major - Computer Engineering</p><br/>
            </div>
            
            <div id='education-section'>
            <p id='class-year'><img src={calendar} alt='calender-icon' width='20px' height='20px'></img>&nbsp;2019-2021</p><br/>
            <p><b>Bachelors Degree - Thapar Institute of Engineering and Technology</b></p><br/>
            <p>Major - Computer Engineering</p><br/>
            </div>

            <div id='education-section'>
            <p id='class-year'><img src={calendar} alt='calender-icon' width='20px' height='20px'></img>&nbsp;2017-2019</p><br/>
              <p><b>Delhi Public School, Faridabad</b></p><br/>
              <p>Senior Secondary Education</p>
            </div>
          </div> 
        </div>
        {/* Experience Section */}
        <div id='experience'>
          <h2 id='experience-heading'>Experience</h2><br/>
          <div id='experience-content'>
            <div id='experience-section'>
            <p id='class-year'><img src={calendar} alt='calender-icon' width='20px' height='20px'></img>&nbsp;Jan 2024 - present</p><br/>
            <p><b>Frontend Web Development Intern</b></p><br/>
            <a className='experience-links' href="https://www.truminds.com/home">
              <p>Truminds Software Systems&nbsp; <img src={link} alt='link-icon' height='15px' width='15px'></img></p><br/>    
            </a>
            <div id='tech-stack'> &nbsp;
              <img src={react} alt='react-link' height='35px' width='35px'></img>&nbsp; &nbsp; 
              <img src={jsicon} alt='js-icon' height='35px' width='35px'></img>&nbsp; &nbsp;
              <img src={git} alt='git-icon' height='35px' width='35px'></img></div>
            </div>
            
            <div id='experience-section'>
              <p id='class-year'><img src={calendar} alt='calender-icon' width='20px' height='20px'></img>&nbsp;Jun 2022 - July 2022</p><br/>
              <p><b>Software Developer Intern</b></p><br/>
              <a className='experience-links' href="https://www.sidhiinternational.com/">
                <p>Sidhi International Metalloys&nbsp; <img src={link} alt='link-icon' height='15px' width='15px'></img></p><br/>   
              </a>
              <div id='tech-stack'> &nbsp;
                <img src={pythonicon} alt='python-icon' height='35px' width='35px'></img>&nbsp; &nbsp; 
                <img src={tensorflow} alt='tensorflow-icon' height='35px' width='35px'></img>&nbsp; &nbsp;
                <img src={jupyter} alt='jupyter-icon' height='35px' width='35px'></img>
              </div>
            </div>
          </div> 
        </div>
      </div>
      {/* Skills Section */}
      <div id='skills'>
        <h2>Skillset</h2>
        <div id='skill-content'>
          <h3 id='language-heading'>Languages</h3>
          <div id='languages'>
            <SkillComponent icon={pythonicon} alt='python-icon' name='Python'/>
            <SkillComponent icon={jsicon} alt='js-icon' name='Javascript'/>
            <SkillComponent icon={mysql} alt='mysql-icon' name='MySQL'/>
            <SkillComponent icon={html} alt='html-icon' name='HTML'/>
            <SkillComponent icon={css} alt='css-icon' name='CSS'/>
            <SkillComponent icon={matlab} alt='matlab-icon' name='MATLAB'/>
          </div>

          <h3 id='framework-heading'>Frameworks</h3>
          <div id='frameworks'>
            <SkillComponent icon={react} alt='react-icon' name='React'/>
            <SkillComponent icon={vuejs} alt='vuejs-icon' name='Vue.js'/>
          </div>

          <h3 id='tools-heading'>Tools</h3>
          <div id='tools'>
            <SkillComponent icon={git} alt='git-icon' name='Git'/>
            <SkillComponent icon={vscode} alt='vscode-icon' name='VSCode'/>
            <SkillComponent icon={arduino} alt='arduino-icon' name='Arduino'/>
          </div>

        </div>
      </div>
    </div>
  )
}

const SkillComponent =  ({icon,alt,name}) => {
  return(
    <div id='skill'>
      <img src={icon} alt={alt} width='50px' height='50px'></img>
      <br/>
      {name}
    </div>
  )
}

export default AboutSection