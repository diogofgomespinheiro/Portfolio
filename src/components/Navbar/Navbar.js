import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="home">
      <ul>
        <li>
          <a href>Home</a>
          <div className="underline"></div>
        </li>
        <li>
          <a href>About</a>
        </li>
        <li>
          <a href>Skills</a>
        </li>
        <li>
          <a href>Projects</a>
        </li>
        <li>
          <a href>Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
