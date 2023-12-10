import React from "react";
import "./HomeGallery.css";
import { Container, Row } from "react-bootstrap";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { portraits, landscape } from "./Gallery";
import Footer from "../../Footer/Footer";
import { motion } from "framer-motion";
import { PageAnimated, itemVariants } from "../../AnimatedRoutes/PageAnimated";
import { useNavigate } from "react-router-dom";

export default function HomeGallery() {

  const navigate = useNavigate();


  return (
    <>
      <PageAnimated>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1 } }}
          viewport={{ once: true }}
        >
          <section className="container gallery">
            <div className="container gallery-text">
              <h3>Hi, I'm Xavier Santana, a photographer from Florida.</h3>
              <p>
                With a passion for portrait, landscape, and event photography,
                I've honed my skills behind the lens to create stunning images
                that tell a story and evoke emotions.
              </p>
            </div>
          </section>

          <section className="container gallery-pics">
            <Row className="container mx-auto row-custom">
              <ImageList
                cols={3}
                gap={40}
                sx={{
                  mb: 8,
                  gridTemplateColumns:
                    "repeat(auto-fill, minmax(400px,1fr))!important",
                }}
                rowHeight={492}
              >
                {portraits.map((item, index) => (
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
            </Row>
          </section>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1 } }}
          viewport={{ once: true }}
        >
          <section className="container gallery-contact">
            <div className="row mx-auto row-custom">
              <div className="col-sm-9">
                <h2 className="contact-text">
                  I would love to capture your precious moments. Contact me if you would like to work together. 
                </h2>
              </div>
              <div className="col-3 contact-button">
                <button className="home-contact-button" onClick={ ()=> navigate("/contact")}>Contact</button>
              </div>
            </div>
          </section>
        </motion.div>
      </PageAnimated>
    </>
  );
}
