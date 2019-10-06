import React from "react";

import Typewriter from "typewriter-effect";

import "./Home.css";
import linkedIn from "../../assets/linkedin.svg";
import envelope from "../../assets/envelope.svg";
import githubLogo from "../../assets/github-logo.svg";

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="content">
          <div className="welcome-box">
            {/* <span>Hello I´m</span> */}
            <Typewriter
              options={{
                strings: [
                  "Hello I´m",
                  "Olá eu sou",
                  "Bonjour je suis",
                  "Hallo ich bin",
                  "Hola yo soy"
                ],
                autoStart: true,
                loop: true
              }}
            />
          </div>
          <div className="profile-information">
            <h1>Diogo Pinheiro</h1>
            <h2>FullStack Developer</h2>
            <div className="social-media">
              <a rel="noopener noreferrer" href="https://github.com/diogofgomespinheiro" target="_blank"><img src={githubLogo} alt="git" /></a>
              <a rel="noopener noreferrer" href="https://www.linkedin.com/in/diogo-fgpinheiro/" target="_blank"><img src={linkedIn} alt="linkedIn" /></a>
              <a rel="noopener noreferrer" href="https://github.com/diogofgomespinheiro" target="_blank"><img src={envelope} alt="email" /></a>
            </div>
          </div>
        </div>
        <div className="profile-picture"></div>
      </section>
      <div className="divider">
        <h2>
          "Power comes not from knowledge kept but from knowledge shared."
        </h2>
        <h2> - Bill gates</h2>
      </div>
    </>
  );
};

export default Home;
