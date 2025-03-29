import React from "react";
import "../styles/about.css";
import { motion } from "framer-motion";
function About() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
      className="about-layout"
    >
      <div className="about">
        <h1>About Me</h1>
        <p className="description-about">
          I am a Computer Science student at Farmingdale State College,
          graduating in May 2025. I recently completed a Software Engineer
          Internship at Umbrava, where I improved the reliability of a web
          application by developing over 100 automated UI tests using
          Playwright, React, and GraphQL, I participated in CodePath’s Web
          Development program, gaining hands-on experience building full-stack
          applications with React.
        </p>
      </div>
      <div className="profile-picture">
        <img src="./src/assets/ghili kevin.png" alt="Kevin Paiz Ramos" />
      </div>
    </motion.div>
  );
}
export default About;
