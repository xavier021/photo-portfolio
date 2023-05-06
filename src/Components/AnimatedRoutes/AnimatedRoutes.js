import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "../../Pages/About";
import Contact from "../../Pages/Contact";
import Home from "../../Pages/Home";
import Portfolio from "../../Pages/Portfolio";

import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
    const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;