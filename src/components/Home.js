import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import '../styles/home.css'

function Home() {
  return (
    <section id='home' className='sectionHome'>
      <div className="home">
        <h2>Hi, I'm</h2>
        <h1 className="title">Válery Suárez</h1>
        <h3>Junior Fullstack Developer</h3>
        <a href="#aboutsme" className="icono-flecha">
          <FontAwesomeIcon icon={faAngleDown} />
        </a>
      </div>
    </section>
  );
}

export default Home;