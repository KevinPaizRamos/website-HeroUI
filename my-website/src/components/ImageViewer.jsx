import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/image-viewer.css";

function ImageViewer({ imageUrl, onClose }) {
  // Close the viewer when the Escape key is pressed
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);
  return (
    <motion.div
      className="image-viewer-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose} // Close the viewer when clicking outside the image
    >
      <motion.img
        src={imageUrl}
        alt="Full View"
        className="image-viewer-image"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
      />
      <button
        className="close-button"
        onClick={onClose} // Close the viewer when the button is clicked
        aria-label="Close"
      >
        ✕
      </button>
    </motion.div>
  );
}

export default ImageViewer;
