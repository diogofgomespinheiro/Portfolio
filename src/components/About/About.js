import React from 'react';

import './About.css';

import aboutImage from '../../assets/about-image.svg';

const About = () => {
  return (
    <section id="about-section" className="about"> 
      <img src={aboutImage} alt=""/>
      <div className="content">
        <h1>About Me</h1>
        <p>Hi im ryan and my life is kinda crazy, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, exercitationem eum. rporis magnam ullam eaque quos tenetur. Corporis, repellat dolores. </p>
        <p>Keys: Hard Worker, Team Player, </p>
        <button>Download CV</button>
      </div>
    </section>
  );
}

export default About;