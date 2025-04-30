import React from "react";
import * as motion from "motion/react-client";
import "../styles/skillsSection.css";

function SkillsSection({ title, content }) {
  return (
    <div className="skills-section">
      <h3>{title}:</h3>
      <ul className="skills-list">
        {content.map((skill, index) => (
          <motion.span
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="skill-name"
            key={index}
          >
            <img src={skill.imgSrc} alt={skill.name} />
            {skill.name}
          </motion.span>
        ))}
      </ul>
    </div>
  );
}

export default SkillsSection;
