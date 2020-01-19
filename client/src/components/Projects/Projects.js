import React from "react";

import "./Projects.css";

import eye from "../../assets/eye.svg";

import projectsData from "../../data/projectsData";

const Projects = () => {
  return (
    <section className="projects" id="projects-section">
      <h1>Projects</h1>
      {projectsData.map(project => (
        <div className="container" key={project.title}>
          <div className="image-container">
            <header>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </header>
            <img src={project.gif_src} alt="" />
          </div>
          <div className="project-information">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <ul>
              {project.technologies.map((tech,index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
            <div className="buttons-container">
              {project.demo_link ? (
                <button
                  className="btn"
                  onClick={() => window.open(project.demo_link, "_blank")}
                >
                  Demo
                </button>
              ) : (
                <button className="btn disabled" disabled>
                  Demo
                </button>
              )}
              <a
                href={project.github_link}
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
      ))}
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
