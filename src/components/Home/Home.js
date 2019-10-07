import React, { useState, createRef } from "react";

import Typewriter from "typewriter-effect";
import ReactTooltip from "react-tooltip";
import copy from "clipboard-copy";

import "./Home.css";
import linkedIn from "../../assets/linkedin.svg";
import envelope from "../../assets/envelope.svg";
import githubLogo from "../../assets/github-logo.svg";

const Home = () => {
  const [emailToolTipText, setEmailToolTipText] = useState("Click to copy email");
  let EmailToolTipRef = createRef();

  const handleEmailClick = () => {
    copy("diogo.fgomes.pinheiro@gmail.com");
    setEmailToolTipText("Copied to clipboard");
    setTimeout(() => {
      setEmailToolTipText("Click to copy email");
      ReactTooltip.hide(EmailToolTipRef);
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
            <h2>FullStack Developer</h2>
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
                ref={ref => EmailToolTipRef = ref}
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
        <h2>
          "Power comes not from knowledge kept but from knowledge shared."
        </h2>
        <h2> - Bill gates</h2>
      </div>

      <ReactTooltip />
    </section>
  );
};

export default Home;
