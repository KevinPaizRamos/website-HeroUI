import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import "../styles/navbar.css";
import styled, { ThemeContext } from "styled-components";
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Kevin Paiz Ramos</div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/experience">Experience</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
