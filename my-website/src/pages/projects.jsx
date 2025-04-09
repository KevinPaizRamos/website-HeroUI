import React from "react";
import ProjectCard from "../components/project-card";
import { AnimatePresence, motion, usePresenceData, wrap } from "motion/react";
import { useEffect } from "react";
import { useState } from "react";
import projectsContent from "../utils/projects-content";
import "../styles/projects.css";

function Projects() {
  return (
    <motion.div className="projects-page">
      {projectsContent.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          imageUrl={project.imageSrc}
          technologies={project.technologies}
          links={project.links}
        />
      ))}
    </motion.div>
  );
}
export default Projects;
