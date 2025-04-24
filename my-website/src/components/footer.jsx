import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import "../styles/footer.css"; // Import your CSS file for styling

function Footer() {
  const location = useLocation();
  const isHomePage = location.pathname === "/"; // Check if the current path is the home page and hide the footer
  return (
    <footer className="footer">
      <div className="footer-links">
        {/* Social Media Icons */}
        <a
          href="https://github.com/KevinPaizRamos"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={60} />
        </a>
        <a
          href="https://linkedin.com/in/kevinpaiz"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={60} />
        </a>
      </div>
      <p style={{ color: "black" }}>
        &copy; {new Date().getFullYear()} Kevin Paiz Ramos. All rights reserved.
      </p>{" "}
      {/* Corrected copyright symbol */}
    </footer>
  );
}

export default Footer;
