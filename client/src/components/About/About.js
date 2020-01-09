import React from "react";
import pdf from "../../assets/resume.pdf";

import "./About.css";

import aboutImage from "../../assets/about-image.svg";

const About = () => {
  return (
    <section id="about-section" className="about">
      <img src={aboutImage} alt="person" />
      <div className="content">
        <h1>About Me</h1>
        <p>
          Frontend Developer with flair for creating elegant solutions in the
          least amount of time. Looking for growth opportunities to try new
          technologies and grow my technical skill set in a team environment.
        </p>
        <p>
          Keys: Hard Worker, Team Player, Commitement, Ambition, Respect,
          Autodidact{" "}
        </p>
        <button
          className="btn"
          onClick={() =>
            window.open(pdf, "_blank")
          }
        >
          Download CV
        </button>
      </div>
    </section>
  );
};

export default About;
