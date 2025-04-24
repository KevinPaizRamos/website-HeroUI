import React from "react";

import "../styles/navbar.css";

import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();
  return (
    <nav className="navbar">
      <div className="navbar-logo">Kevin Paiz Ramos</div>
      <ul className="navbar-links">
        <li>
          <Link
            to="/"
            className={location.pathname === "/" ? "active-link" : ""}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active-link" : ""}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/skills"
            className={location.pathname === "/skills" ? "active-link" : ""}
          >
            Skills
          </Link>
        </li>

        <li>
          <Link
            to="/experience"
            className={location.pathname === "/experience" ? "active-link" : ""}
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className={location.pathname === "/projects" ? "active-link" : ""}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/resume"
            className={location.pathname === "/resume" ? "active-link" : ""}
          >
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
