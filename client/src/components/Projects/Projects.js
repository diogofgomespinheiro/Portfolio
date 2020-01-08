import React from "react";

import "./Projects.css";

import devconGif from "../../assets/devcon.gif";
import clothingAppGif from "../../assets/clothingapp.gif";
import smartbrainGif from "../../assets/smartbrain.gif";
import aircncGif from "../../assets/aircnc.gif";
import eye from "../../assets/eye.svg";

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
          <img src={devconGif} alt="" />
        </div>
        <div className="project-information">
          <h2>Devcon</h2>
          <p>
            A web app to create developers profile/portfolio, share posts and
            get help from other developers.
          </p>
          <ul>
            <li>ReactJS</li>
            <li>Redux</li>
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>JWT</li>
            <li>Heroku</li>
          </ul>
          <div className="buttons-container">
            <button
              className="btn"
              onClick={() =>
                window.open(
                  "https://intense-reaches-17959.herokuapp.com/",
                  "_blank"
                )
              }
            >
              Demo
            </button>
            <a
              href="https://github.com/diogofgomespinheiro/devcon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <img src={eye} alt="icon" /> View repository
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="image-container">
          <header>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </header>
          <img src={clothingAppGif} alt="" />
        </div>
        <div className="project-information">
          <h2>Clothing App</h2>
          <p>
            Fictional E-commerce store to buy clothes, with stripe payment
            integrated.{" "}
          </p>
          <ul>
            <li>ReactJS</li>
            <li>Redux</li>
            <li>Redux-Saga</li>
            <li>Node.js</li>
            <li>Stripe</li>
            <li>Firebase</li>
            <li>Heroku</li>
          </ul>
          <div className="buttons-container">
            <button
              className="btn"
              onClick={() =>
                window.open(
                  "https://clothing-app-91219.herokuapp.com/",
                  "_blank"
                )
              }
            >
              Demo
            </button>
            <a
              href="https://github.com/diogofgomespinheiro/ClothingApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <img src={eye} alt="icon" /> View repository
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="image-container">
          <header>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </header>
          <img src={smartbrainGif} alt="" />
        </div>
        <div className="project-information">
          <h2>FaceRecognition App</h2>
          <p>
            A web app to detect faces and demographics through Clarifai API.
          </p>
          <ul>
            <li>ReactJS</li>
            <li>Node.js</li>
            <li>PostgresSQL</li>
            <li>Docker</li>
            <li>Redis</li>
            <li>AWS Lambda</li>
            <li>Clarifai API</li>
          </ul>
          <div className="buttons-container">
            <button className="btn disabled" disabled>
              Demo
            </button>
            <a
              href="https://github.com/diogofgomespinheiro/facerecognitionapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <img src={eye} alt="icon" /> View repository
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="image-container">
          <header>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </header>
          <img src={aircncGif} alt="" />
        </div>
        <div className="project-information">
          <h2>Aircnc</h2>
          <p>
            A simple web app to rent company spaces, made at Omnistack week from
            Rocketseat.
          </p>
          <ul>
            <li>ReactJS</li>
            <li>Node.js</li>
            <li>React Native</li>
            <li>socket.io</li>
          </ul>
          <div className="buttons-container">
            <button className="btn disabled" disabled>
              Demo
            </button>
            <a
              href="https://github.com/diogofgomespinheiro/RocketSeatBootcamp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <img src={eye} alt="icon" /> View repository
              </span>
            </a>
          </div>
        </div>
      </div>
      <h1 className="github-link">
        <a
          href="https://github.com/diogofgomespinheiro"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check my github for more projects...
        </a>
      </h1>
    </section>
  );
};

export default Projects;
