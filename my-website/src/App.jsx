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

function App() {
  return (
    <Router>
      <NavBar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
