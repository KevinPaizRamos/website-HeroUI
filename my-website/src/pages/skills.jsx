import React from "react";
import SkillsSection from "../components/skillls-section";
import {
  AnimatePresence,
  color,
  motion,
  usePresenceData,
  wrap,
} from "motion/react";
import "../styles/skillsSection.css";

function Skills() {
  const languages = [
    {
      name: "JavaScript",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
      name: "Python",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    },
    {
      name: "Java",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg",
    },
    {
      name: "C#",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
    },
    {
      name: "HTML",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    },
  ];
  const frameworks = [
    {
      name: "React",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      name: "Node.js",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Flask",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
    },
    {
      name: "Spring Boot",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
    },
  ];

  const tools = [
    {
      name: "Git",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    },
    {
      name: "GitHub",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    },
    {
      name: "GitHub Actions",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", // GitHub logo for GitHub Actions
    },
    {
      name: "Postman",
      imgSrc: "https://www.svgrepo.com/show/354202/postman-icon.svg", // Postman logo
    },
    {
      name: "Playwright",
      imgSrc: "https://playwright.dev/img/playwright-logo.svg", // Playwright logo
    },
    {
      name: "Firebase",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg",
    },
    {
      name: "PostgreSQL",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "MongoDB",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "GraphQL",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
    },
    {
      name: "REST APIs",
      imgSrc: "rest.png", // Generic API logo
    },
    {
      name: "Linux",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
    },
  ];

  const cloud = [
    {
      name: "AWS",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    },
    {
      name: "Google Cloud",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
    },
    {
      name: "Azure",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
    },
  ];

  const IDEs = [
    {
      name: "Visual Studio Code",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    },
    {
      name: "IntelliJ IDEA",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg",
    },
    {
      name: "NetBeans",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apache/apache-original.svg", // No specific NetBeans logo, using Apache
    },
    {
      name: "Android Studio",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg",
    },
    {
      name: "PyCharm",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pycharm/pycharm-original.svg",
    },
  ];
  const certifications = [
    { name: "Codepath Intermediate Web Development", imgSrc: "codepath.jpg" },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
      className="skills-page"
    >
      <div className="skills-list">
        <SkillsSection title={"Languages"} content={languages} />
        <SkillsSection title={"Frameworks"} content={frameworks} />
        <SkillsSection title={"Tools"} content={tools} />
        <SkillsSection title={"Cloud"} content={cloud} />
        <SkillsSection title={"IDEs"} content={IDEs} />
        <SkillsSection title={"Certifications"} content={certifications} />
      </div>
    </motion.div>
  );
}
export default Skills;
