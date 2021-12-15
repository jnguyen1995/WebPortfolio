import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Resume from "./components/pages/Resume";
import resumePDF from "./images/Jonathan-Nguyen-Resume.pdf";
import Portfolio from "./components/pages/Portfolio";
import Media from "./components/pages/Media";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume pdf={resumePDF} />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/media" element={<Media />} />
      </Routes>
    </Router>
  );
}

export default App;
