import './HomeSection.css';
import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import mee9 from '../../assets/img/mee9.png';

const HomeSection = () => {
  return (
    <div id="home-section">
        <div className='Introcontent'>
            <span className='hello'>Hello,</span>
            <span className='introtext'>
              I'm &nbsp;
              <span className='name'>
                Ananya
              </span> 
              <br/> 
              <Typewriter
                words={['Software Developer💻;', 'Passionate Learner✨;','Front-end Developer👩‍💻;']}
                loop={5}
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
            <p className='para'>
              {/* Find a quote to write here */}
              {/* I am ewgfvewewvfhewgfwefgwefujwegfhj */}
            </p>
        </div>
        <div id='image'>
          <img src={mee9} alt='me'></img>
        </div>
    </div>
  )
}

export default HomeSection