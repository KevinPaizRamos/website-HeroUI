import React from "react";
import { FaReact, FaNodeJs, FaPython, FaAws } from "react-icons/fa";
import { FaJava, FaCode } from "react-icons/fa6"; // Example icons
import { SiFirebase, SiKotlin, SiAndroidstudio } from "react-icons/si"; // More icons
import { RiJavascriptFill, RiSupabaseFill, RiOpenaiFill } from "react-icons/ri";
import { AiOutlineStock } from "react-icons/ai";
function TechnologiesLabel({ technologies, Icon }) {
  const styles = {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    margin: "20px",
  };

  const labelStyles = {
    display: "flex",
    alignItems: "center",
    gap: "5px",
  };

  // Map technologies to their corresponding icons
  const technologyIcons = {
    React: FaReact,
    "Node.js": FaNodeJs,
    JavaScript: RiJavascriptFill,
    Python: FaPython,
    Firebase: SiFirebase,
    "Supabase(PostgreSQL)": RiSupabaseFill,
    FlaskAPI: FaPython, // Assuming Flask uses Python icon
    AWS: FaAws,
    OpenAI: RiOpenaiFill,
    Java: FaJava,
    Kotlin: SiKotlin,
    "Android Studio": SiAndroidstudio,
    FinancialModelingPrep: AiOutlineStock, // Assuming Java for this icon
    AlphaVantage: AiOutlineStock, // Assuming Java for this icon
    MVVM: FaCode, // Assuming MVVM uses Java icon
  };

  return (
    <div className="technologies-label" style={styles}>
      {technologies.map((technology, index) => {
        const Icon = technologyIcons[technology]; // Get the icon for the technology
        return (
          <span key={index} className="technology-label" style={labelStyles}>
            {Icon && <Icon />} {/* Render the icon if it exists */}
            {technology}
          </span>
        );
      })}
    </div>
  );
}

export default TechnologiesLabel;
