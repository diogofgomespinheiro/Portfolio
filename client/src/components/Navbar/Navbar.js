import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 82;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });

  return (
    <div
      className={
        "navbar" + (showMenu ? " show-fixed" : "") + (scroll ? " scrolled" : "")
      }
    >
      <ul>
        <li onClick={() => setShowMenu(!showMenu)}>
        </li>
        <li>
          <Link
            className={showMenu ? "show" : ""}
            activeClass="active"
            to="home-section"
            spy={true}
            smooth={true}
            offset={-80}
            duration={800}
            onClick={() => setShowMenu(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={showMenu ? "show" : ""}
            activeClass="active"
            to="about-section"
            spy={true}
            smooth={true}
            offset={-80}
            duration={800}
            onClick={() => setShowMenu(false)}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={showMenu ? "show" : ""}
            activeClass="active"
            to="skills-section"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            onClick={() => setShowMenu(false)}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            className={showMenu ? "show" : ""}
            activeClass="active"
            to="projects-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setShowMenu(false)}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className={showMenu ? "show" : ""}
            activeClass="active"
            to="contact-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setShowMenu(false)}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
