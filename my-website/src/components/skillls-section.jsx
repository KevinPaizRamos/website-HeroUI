import React from "react";
import * as motion from "motion/react-client";

function SkillsSection({ title, content }) {
  return (
    <div className="skills-list" style={skillList}>
      <section className="skills-section">
        <h3 style={skillListHeader}>{title}:</h3>
        <ul style={list} className="skills-list">
          {content.map((skill, index) => (
            <motion.span
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              style={listItem}
              className="skill-name"
              key={index}
            >
              <img style={img} src={skill.imgSrc} />
              {skill.name}
            </motion.span>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default SkillsSection;

const skillList = {
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "start",
  gap: "1rem",
};

const skillListHeader = {
  alignItems: "start",
  justifyContent: "start",
  display: "flex",
  fontSize: "1.5rem",
  fontWeight: "bold",
  color: "#4f46e5",
};

const list = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "1rem",
  padding: "0",
  margin: "0",
  listStyleType: "none",
};

const listItem = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0.5rem 1rem",
  borderRadius: "4px",

  color: "#333",
  fontSize: "1.5rem",
  fontWeight: "400",
};

const img = {
  width: "2rem",
  height: "2rem",
  marginRight: "0.5rem",
};
