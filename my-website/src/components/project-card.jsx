import React, { useState } from "react";
import "../styles/project-card.css";
import TechnologiesLabel from "./techologies-label";
import { CiLink } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";
import ImageViewer from "./ImageViewer"; // Importing the ImageViewer component
// Importing the React icon from react-icons

function ProjectCard({
  title,
  description,
  imageUrl,
  technologies,
  icon,
  links,
}) {
  const [isViewerOpen, setIsViewerOpen] = useState(false); // State to control the image viewer
  const linksIcons = {
    "View Project": CiLink,
    GitHub: FaGithub,
  };

  return (
    <div className="project-card">
      <img
        src={imageUrl}
        alt={title}
        className="project-image"
        onClick={() => setIsViewerOpen(true)}
      />
      <h3 className="project-title">{title}</h3>
      <TechnologiesLabel
        technologies={technologies}
        Icon={icon} // Pass the icon prop to TechnologiesLabel
      />
      <p className="project-description">{description}</p>

      <div className="project-links">
        {links.map((link, index) => {
          const Icon = linksIcons[link.label]; // Get the icon for the link label
          return (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              {Icon && <Icon />} {/* Render the icon if it exists */}
              {link.label}
            </a>
          );
        })}
      </div>
      {/* Render the ImageViewer if isViewerOpen is true */}
      {isViewerOpen && (
        <ImageViewer
          imageUrl={imageUrl}
          onClose={() => setIsViewerOpen(false)} // Close the viewer
        />
      )}
    </div>
  );
}

export default ProjectCard;
