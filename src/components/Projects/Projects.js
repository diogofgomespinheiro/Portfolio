import React from 'react';

import './Projects.css';

import img from '../../assets/1.gif';
import eye from '../../assets/eye.svg';

const Projects = () => {
  return (
    <section className="projects" id="projects-section">
      <h1>Projects</h1>
      <div className="container">
        <div className="image-container"> 
          <header>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </header>
          <img src={img} alt=""/>
        </div>
        <div className="project-information">
          <h2>Titulo</h2>
          <p>Descriçao breve do projeto</p>
          <ul>
            <li>React</li>
            <li>Node.js</li>
          </ul>
          <div className="buttons-container">
            <button>Demo</button>
            <span><img src={eye} alt="icon"/> View repository</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;