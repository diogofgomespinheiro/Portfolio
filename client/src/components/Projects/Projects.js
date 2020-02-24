import React, { useEffect, useState } from "react";
import { createClient } from "contentful";

import "./Projects.css";

import eye from "../../assets/eye.svg";

const client = createClient({
  space: process.env.REACT_APP_SPACE_KEY,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN
});

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const loadProjects = async () => {
      const res = await client.getEntries({
        content_type: "projects"
      });
      
      setProjects(res.items);
    };

    loadProjects();
  }, []);

  return (
    <section className="projects" id="projects-section">
      <h1>Projects</h1>
      {projects.map(project => (
        <div className="container" key={project.sys.id}>
          <div className="image-container">
            <header>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </header>
            <img src={project.fields.image.fields.file.url} alt="" />
          </div>
          <div className="project-information">
            <h2>{project.fields.title}</h2>
            <p>{project.fields.description}</p>
            <ul>
              {project.fields.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
            <div className="buttons-container">
              {project.fields.demoUrl ? (
                <button
                  className="btn"
                  onClick={() => window.open(project.fields.demoUrl, "_blank")}
                >
                  Demo
                </button>
              ) : (
                <button className="btn disabled" disabled>
                  Demo
                </button>
              )}
              <a
                href={project.fields.repositoryUrl}
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
