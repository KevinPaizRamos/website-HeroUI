import React, { useState } from "react";
import { AnimatePresence, motion, usePresenceData, wrap } from "motion/react";
import projectsContent from "../utils/projects-content";
import ProjectCard from "../components/project-card";
import "../styles/projects.css";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(0); // Start with the first project
  const [direction, setDirection] = useState(1); // Direction of the slide

  // Function to handle slide navigation
  function setSlide(newDirection) {
    const nextItem = wrap(
      0,
      projectsContent.length,
      selectedProject + newDirection
    );
    setSelectedProject(nextItem);
    setDirection(newDirection);
  }

  const color = `var(--hue-${selectedProject})`; // Dynamic color based on selected project

  return (
    <div className="projects-page" style={container}>
      <motion.button
        initial={false}
        animate={{ backgroundColor: color }}
        aria-label="Previous"
        style={button}
        onClick={() => setSlide(-1)}
        whileFocus={{ outline: `2px solid ${color}` }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowLeft />
      </motion.button>
      <AnimatePresence custom={direction} initial={false} mode="popLayout">
        <Slide
          key={selectedProject}
          project={projectsContent[selectedProject]}
          color={color}
        />
      </AnimatePresence>
      <motion.button
        initial={false}
        animate={{ backgroundColor: color }}
        aria-label="Next"
        style={button}
        onClick={() => setSlide(1)}
        whileFocus={{ outline: `2px solid ${color}` }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowRight />
      </motion.button>
    </div>
  );
}

// Slide Component
const Slide = React.forwardRef(function Slide({ project, color }, ref) {
  const direction = usePresenceData();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: direction * 50 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          delay: 0.2,
          type: "spring",
          duration: 0.3,
          bounce: 0.4,
        },
      }}
      exit={{ opacity: 0, x: direction * -50 }}
    >
      <ProjectCard
        title={project.title}
        description={project.description}
        imageUrl={project.imageSrc}
        technologies={project.technologies}
        links={project.links}
      />
    </motion.div>
  );
});

// Arrow Components
function ArrowLeft() {
  return (
    <svg {...iconsProps}>
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg {...iconsProps}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

// Styles
const container = {
  display: "flex",
  flexDirection: "row", // Arrange items horizontally
  alignItems: "center", // Center items vertically
  justifyContent: "center", // Center items horizontally
  gap: "20px", // Space between the buttons and the content
  minHeight: "70vh", // Use 80% of the viewport height
  padding: "20px", // Add some padding around the content
  margin: "0 auto", // Center the container horizontally
};

const button = {
  backgroundColor: "#0cdcf7",
  width: 40,
  height: 40,
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  zIndex: 1,
  outlineOffset: 2,
};

const iconsProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export default Projects;
