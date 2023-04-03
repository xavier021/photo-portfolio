import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./MainLayout.css";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar
        collapseOnSelect
        sticky="top"
        className="navbar-custom"
        bg="light"
        variant="light"
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/portfolio">Portofolio</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link href="/contact">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>{children}</div>
    </>
  );
};

export default MainLayout;
