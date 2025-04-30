import React from "react";

import "../styles/navbar.css";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <nav className="navbar">
      <div className="navbar-logo">Kevin Paiz Ramos</div>
      <button className="hamburger-menu" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
        <li>
          <Link
            to="/"
            className={location.pathname === "/" ? "active-link" : ""}
            onClick={closeMenu} // Close menu on link click
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active-link" : ""}
            onClick={closeMenu} // Close menu on link click
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/skills"
            className={location.pathname === "/skills" ? "active-link" : ""}
            onClick={closeMenu} // Close menu on link click
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="/experience"
            className={location.pathname === "/experience" ? "active-link" : ""}
            onClick={closeMenu} // Close menu on link click
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className={location.pathname === "/projects" ? "active-link" : ""}
            onClick={closeMenu} // Close menu on link click
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/resume"
            className={location.pathname === "/resume" ? "active-link" : ""}
            onClick={closeMenu} // Close menu on link click
          >
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
