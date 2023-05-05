import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./MainLayout.css";
import Footer from "../Footer/Footer";
import { Image, NavItem } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faPinterest } from "@fortawesome/free-brands-svg-icons";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const MainLayout = ({ children }) => {
  return (
    <>
      <Container className="container-custom" fluid>
        <Navbar
          collapseOnSelect
          sticky="top"
          className="navbar-custom"
          expand="lg"
          variant="light"
        >
          <Container>
            {/* <Navbar.Brand href="/">
              
            </Navbar.Brand> */}
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Nav.Item eventkey={1} href="/">
                  <Nav.Link as={Link} active={{}} to="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item eventkey={2} href="/portfolio">
                  <Nav.Link as={Link} active={{}} to="/portfolio">Portofolio</Nav.Link>
                </Nav.Item>
                <Nav.Item eventkey={3} href="/about">
                  <Nav.Link as={Link} active={{}} to="/about">About</Nav.Link>
                </Nav.Item>
                <Nav.Item eventkey={4} href="/contact">
                  <Nav.Link as={Link} active={{}} to="/contact">Contact</Nav.Link>
                </Nav.Item>
              </Nav>
              <Nav className="ms-auto navbar-icons">
                <Nav.Item>
                  <FontAwesomeIcon icon={faInstagram} />
                </Nav.Item>
                <Nav.Item>
                  <FontAwesomeIcon icon={faPinterest} />
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container className="logo-custom-container">
          <Image
            src="/View/Signature-Black.png"
            className="logo-custom"
            fluid
          />
        </Container>
        <div className="content">{children}</div>
        {/* <Footer/> */}
      </Container>
    </>
  );
};

export default MainLayout;
