import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { motion } from "framer-motion";

import NavBar from "./components/navbar";
import About from "./pages/about";
import Home from "./pages/home";
import WorkExperience from "./pages/experience";
import Projects from "./pages/projects";
import Skills from "./pages/skills";

function App() {
  return (
    <Router>
      <NavBar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<WorkExperience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
