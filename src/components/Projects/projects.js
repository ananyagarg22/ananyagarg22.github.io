import React from 'react';
import './projects.css';
import pythonicon from '../../assets/icons/python.svg';
import jupytericon from '../../assets/icons/jupyter.svg';
import foldericon from '../../assets/img/folder.png'
import redirecticon from '../../assets/img/redirect.png';
import vuejs from '../../assets/icons/vuejs.svg';
import htmlicon from '../../assets/icons/html.svg';
import cssicon from '../../assets/icons/css.svg';
import git from '../../assets/icons/git.svg';
import arduino from '../../assets/icons/arduino.svg';
import react from '../../assets/icons/react.svg';
import js from '../../assets/icons/js.svg';


function projects() {
  return (
    <div id='projects'>
      <div>
        <h2>Projects</h2>
        <div id="listofprojects">
          <Project 
            speciality="Final Year Project"
            title="Laughter Recognition in Natural Conversational Speech"
            link="https://github.com/ananyagarg22/final-year-project" 
            tech_stack={[pythonicon, jupytericon, git]}
          >  
          </Project>
          <Project 
            speciality="API usage"
            title="OpenWeather API based Weather Application"
            link="https://github.com/ananyagarg22/internet-application-assignment-1" 
            tech_stack={[vuejs, htmlicon, cssicon]}
          >  
          </Project>
          <Project 
            speciality="Decentralisation"
            title="Peer-to-Peer SOS Emergency Network"
            link="https://github.com/ananyagarg22/-P2P-SOS-Emergency-Network-" 
            tech_stack={[pythonicon]}
          >  
          </Project>
          <Project 
            speciality="Hardware programming"
            title="Accident Avoidance System"
            link="https://github.com/ananyagarg22/Accident-Avoidance-System" 
            tech_stack={[arduino]}
          >  
          </Project>
          <Project 
            speciality="Portfolio Website"
            title="Personal Portfolio Website"
            link="https://github.com/ananyagarg22/ananyagarg22.github.io" 
            tech_stack={[react, js, htmlicon, cssicon, git]}
          >  
          </Project>
        </div>
      </div>
    </div>
  )
}

function Project ({speciality, title, link, tech_stack}) {  
  return(
    <div id="project">
      <div id="action-icons">
        <div id='folder-icon'> <img src={foldericon} height='30px' width='30px'></img> </div>
        <div id='redirect-icon'><a href={link}><img id='redirect' src={redirecticon} height='20px' width='20px'></img></a></div>
      </div>
      <div id="project-title">{title}</div>
      <div id="project-tech-stack">
        {
          tech_stack.map(tech => (
            <img id='tech' src={tech} alt='' width='30px' height='30px'></img>
          ))
        }
      </div>
      <div id="speciality">
        {speciality}
      </div>
    </div>
  )
}

export default projects