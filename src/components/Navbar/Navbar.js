import React, { useState } from "react";
import "./Navbar.css";

import menuIcon from '../../assets/menu-button.svg';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(1);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="navbar">
      <ul>
        <img src={menuIcon} alt="Menu" onClick={() => setShowMenu(!showMenu)}/>
        <li className={(activeLink === 1 ? 'active' : '') + (showMenu ? ' show' : '')}>
          <a href="#home" onClick={() => setActiveLink(1)}>Home</a>
        </li>
        <li className={(activeLink === 2 ? 'active' : '') + (showMenu ? ' show' : '')}>
          <a href onClick={() => setActiveLink(2)}>About</a>
        </li>
        <li className={(activeLink === 3 ? 'active' : '') + (showMenu ? ' show' : '')}>
          <a href onClick={() => setActiveLink(3)}>Skills</a>
        </li>
        <li className={(activeLink === 4 ? 'active' : '') + (showMenu ? ' show' : '')}>
          <a href onClick={() => setActiveLink(4)}>Projects</a>
        </li>
        <li className={(activeLink === 5 ? 'active' : '') + (showMenu ? ' show' : '')}>
          <a href onClick={() => setActiveLink(5)}>Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
