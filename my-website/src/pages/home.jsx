import React from "react";
import "../styles/home.css";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Import GitHub and LinkedIn icons
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
      className="home-layout"
    >
      <span className="welcome-message">
        <h1>Hi, I am Kevin Paiz Ramos</h1>
        <Typewriter
          words={[
            "Full Stack Developer",
            "Web Developer",
            "Mobile Developer",
            "Frontend Developer",
          ]}
          onLoopDone={(loopCount) => console.log(`looped ${loopCount} times`)}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
      <p className="description">
        I am a Full-Stack / Front-End Developer. I am currently working on
        expanding my knowledge in the field of Full-Stack development and AI and
        Machine Learning, looking for full time opportunities to grow and learn.
        <br />
      </p>
      {/* Social Media Icons */}
    </motion.div>
  );
}
export default Home;
