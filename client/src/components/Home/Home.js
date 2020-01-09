import React, { useState, useRef } from "react";

import Typewriter from "typewriter-effect";
import ReactTooltip from "react-tooltip";
import copy from "clipboard-copy";

import "./Home.css";
import linkedIn from "../../assets/linkedin.svg";
import envelope from "../../assets/envelope.svg";
import githubLogo from "../../assets/github-logo.svg";

const Home = () => {
  const [emailToolTipText, setEmailToolTipText] = useState(
    "Click to copy email"
  );
  const EmailToolTipRef = useRef(null);

  const handleEmailClick = () => {
    copy("diogo.fgomes.pinheiro@gmail.com");
    setEmailToolTipText("Copied to clipboard");
    setTimeout(() => {
      setEmailToolTipText("Click to copy email");
      ReactTooltip.hide(EmailToolTipRef.current);
    }, 1000);
  };

  return (
    <section className="home" id="home-section">
      <div className="container">
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
            <h2>Frontend Developer</h2>
            <div className="social-media">
              <a
                rel="noopener noreferrer"
                href="https://github.com/diogofgomespinheiro"
                target="_blank"
                data-tip="Github"
              >
                <img src={githubLogo} alt="git" />
              </a>
              <a
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/diogo-fgpinheiro/"
                target="_blank"
                data-tip="Linkedin"
              >
                <img src={linkedIn} alt="linkedIn" />
              </a>
              <img
                src={envelope}
                ref={EmailToolTipRef}
                alt="email"
                data-tip
                data-for="email"
                style={{ cursor: "pointer", marginLeft: "15px" }}
                onClick={handleEmailClick}
              />
              <ReactTooltip id="email">
                <span>{emailToolTipText}</span>
              </ReactTooltip>
            </div>
          </div>
        </div>
        <div className="profile-picture"></div>
      </div>
      <div className="divider">
        <div className="divider-img"></div>
        <div className="divider-content">
          <h2>
            "Power comes not from knowledge kept but from knowledge shared."
          </h2>
          <h2> - Bill gates</h2>
        </div>
      </div>
      <ReactTooltip />
    </section>
  );
};

export default Home;
