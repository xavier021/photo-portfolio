import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    // <Container className="fixed-bottom custom-footer">
      <footer className="fixed-bottom custom-footer d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
          <div className="col-md-4 d-flex align-items-center list-unstyled">
            <li className="nav-item">
              <a className="nav-link px-2" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-2" href="/portfolio">
              <FontAwesomeIcon icon={faCamera} />
              </a>
            </li>
          </div>
          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="nav-item">
              <a className="nav-link px-2" href="/about">
              <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-2" href="/contact">
                Contact
              </a>
            </li>
        </ul>
      </footer>
    // </Container>
  );
}
