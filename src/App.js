import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import MainLayout from "./Components/Layout/MainLayout";
import AnimatedRoutes from "./Components/AnimatedRoutes/AnimatedRoutes";
import { Container } from "react-bootstrap";

// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
        <MainLayout>
          <AnimatedRoutes />
        </MainLayout>
    </>
  );
}

export default App;
