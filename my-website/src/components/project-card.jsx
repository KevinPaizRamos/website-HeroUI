import React from "react";
import "../styles/project-card.css";
import TechnologiesLabel from "./src/components/technologies-label.jsx";
function ProjectCard({ title, description, imageUrl }) {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} className="project-image" />
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <div className="project-links">
        <a href="#" className="project-link">
          View Project
        </a>
        <a href="#" className="project-link">
          GitHub
        </a>
        <TechnologiesLabel technologies={["JavaScript", "React"]} />
      </div>
    </div>
  );
}

export default ProjectCard;
