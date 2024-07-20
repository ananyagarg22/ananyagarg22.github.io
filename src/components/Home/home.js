import React from 'react';
import './home.css';
import mee9 from '../../assets/img/mee9.png';

const Home = () => {
  return (
    <section id="home">
        <div className='Introcontent'>
            <span className='hello'>Hello,</span>
            <span className='introtext'>I'm <span className='name'>Ananya</span> <br/> Software Developer</span>
            <p className='para'>I am ewgfvewewvfhewgfwefgwefujwegfhj</p>


        </div>
        <div id='image'>
            <img src={mee9} alt='me'></img>
        </div>
    </section>
  )
}

export default Home