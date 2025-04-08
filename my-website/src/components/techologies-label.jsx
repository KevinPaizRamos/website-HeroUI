import React from "react";

function TechnologiesLabel({ technologies }) {
  const styles = {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginTop: "10px",
  };
  return (
    <div className="technologies-label" style={styles}>
      {technologies.map((technology, index) => (
        <span key={index} className="technology-label">
          {technology}
        </span>
      ))}
    </div>
  );
}
export default TechnologiesLabel;
