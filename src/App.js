import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home"
import Portfolio from "./Pages/Portfolio";

// import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    )
}

export default App;