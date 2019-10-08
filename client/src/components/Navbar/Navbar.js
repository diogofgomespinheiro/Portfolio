import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

import "./Navbar.css";

import menuIcon from "../../assets/menu-button.svg";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 82;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck)
      }
    })
  })

  return (
    <div className={"navbar" + (showMenu ? " show-fixed" : "") + (scroll ? ' scrolled' : '')}>
      <ul>
        <img src={menuIcon} alt="Menu" onClick={() => setShowMenu(!showMenu)} />
        <Link
          className={showMenu ? 'show' : ''}
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
        <Link
          className={showMenu ? 'show' : ''}
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
        <Link
          className={showMenu ? 'show' : ''}
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
        <Link
          className={showMenu ? 'show' : ''}
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
        <Link
          className={showMenu ? 'show' : ''}
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
      </ul>
    </div>
  );
};

export default Navbar;
