import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { landscape } from "../Layout/Home/Gallery";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1 } }}
        viewport={{ once: true }}
      >
        <section className="gallery-land">
          <ImageList
            cols={1}
            gap={0}
            sx={{
              mb: 8,
              gridTemplateColumns:
                "repeat(auto-fill, minmax(480px,1fr))!important",
            }}
            rowHeight={164}
          >
            {landscape.map((item, index) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=161&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                  className="pic-port-custom"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </section>
        <footer className="container mx-auto custom-footer d-flex flex-wrap justify-content-between align-items-center">
          <div className="col-md-4 d-flex align-items-center list-unstyled">
            <li className="nav-item footer-home">
              <a className="nav-link px-2" href="/">
                Home
              </a>
            </li>
          </div>
          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="nav-item footer-home">
              <a className="nav-link px-2" href="/portfolio">
                <FontAwesomeIcon icon={faCamera} />
              </a>
            </li>
            <li className="nav-item footer-home">
              <a
                className="nav-link px-2"
                href="https://www.instagram.com/_xavierphotography"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li className="nav-item footer-home">
              <a className="nav-link px-2" href="/contact">
                Contact
              </a>
            </li>
          </ul>
          <div className="container footer-copyright">
            <p>
              2023 © Xavier Santana Photography.
            </p>
          </div>
        </footer>
      </motion.div>
    </>
  );
}
