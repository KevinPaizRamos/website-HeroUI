import React from "react";
import "../styles/project-card.css";
import TechnologiesLabel from "./techologies-label";
import { FaReact } from "react-icons/fa";
// Importing the React icon from react-icons

function ProjectCard({
  title,
  description,
  imageUrl,
  technologies,
  icon,
  links,
}) {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} className="project-image" />
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <TechnologiesLabel
        technologies={technologies}
        Icon={icon} // Pass the icon prop to TechnologiesLabel
      />
      <div className="project-links">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
