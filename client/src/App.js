import React from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <div className="footer">
        <a
          href="https://github.com/diogofgomespinheiro"
          target="_blank"
          rel="noopener noreferrer"
        >
          Designed & Built By Diogo Pinheiro
        </a>
      </div>
    </div>
  );
}

export default App;
