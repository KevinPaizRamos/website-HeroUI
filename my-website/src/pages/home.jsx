import React from "react";
import "../styles/home.css";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Import GitHub and LinkedIn icons
function Home() {
  return (
    <div className="home-layout">
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
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
      <p className="description">
        I am a Full-Stack / Front-End Developer. I am currently working on
        expanding my knowledge in the field of AI and Machine Learning, looking
        for full time opportunities to grow and learn.
        <br />
      </p>
      {/* Social Media Icons */}
      <div className="social-icons">
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
    </div>
  );
}
export default Home;
