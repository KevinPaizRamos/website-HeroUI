import React from "react";
import "../styles/about.css";

function About() {
  return (
    <div className="about-layout">
      <div className="about">
        <h1>About Me</h1>
        <p>
          I'm Kevin Paiz, a Computer Science student at Farmingdale State
          College, graduating in May 2025. I recently completed a Software
          Engineer Internship at Umbrava, where I improved the reliability of a
          web application by developing over 100 automated UI tests using
          Playwright, React, and GraphQL, reducing manual testing efforts by
          60%. Additionally, I participated in CodePath’s Web Development
          program, gaining hands-on experience building full-stack applications
          with React, and deepening my knowledge of modern web technologies. I
          have a strong technical foundation in Java, Kotlin, Python,
          JavaScript, and C#, with experience using Spring Boot, Node.js,
          PostgreSQL, Firebase, and CI/CD pipelines. I’m passionate about
          writing clean, scalable code and continuously expanding my skills in
          software development.
        </p>
      </div>
      <div className="profile-picture">
        <img
          src="https://avatars.githubusercontent.com/u/69616951?v=4"
          alt="Kevin Paiz Ramos"
        />
      </div>
    </div>
  );
}
export default About;
