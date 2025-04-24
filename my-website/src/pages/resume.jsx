import React from "react";
import "../styles/resume.css";
import { motion } from "motion/react";

function Resume() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        className="resume-page"
      >
        <section className="resume-info">
          <h1>My Resume</h1>
          <p>
            Below is my resume. You can view it directly or download it using
            the button below.
          </p>
          <a
            href="Kevin_Paiz_Resume_SWE.pdf"
            download="Kevin_Paiz_Resume_SWE.pdf"
            className="download-resume-button"
          >
            Download Resume
          </a>
        </section>

        <div className="resume-viewer">
          <iframe
            src="Kevin_Paiz_Resume_SWE.pdf"
            title="Resume"
            frameBorder="0"
            className="resume-iframe"
          ></iframe>
        </div>
      </motion.div>
    </>
  );
}

export default Resume;
