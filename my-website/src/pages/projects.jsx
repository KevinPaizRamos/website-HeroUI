import React from "react";
import ProjectCard from "../components/project-card";
import { AnimatePresence, motion, usePresenceData, wrap } from "motion/react";
import { useEffect } from "react";
import { useState } from "react";
import { projectsContent } from "../utils/projects-content";
import "../styles/projects.css";

function Projects() {
  return (
    <div className="projects-page">
      <ProjectCard
        title="Project 1"
        description="This is a description of project 1."
        imageUrl="https://via.placeholder.com/150"
      />
    </div>
  );
}
export default Projects;
