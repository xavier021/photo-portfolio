import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./About.css";
import { Image } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  PageAnimated,
  itemVariants,
  visible,
} from "../Components/AnimatedRoutes/PageAnimated";

function About() {

  return (
    <>
      <PageAnimated>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible,
          }}
          className="card portofolio-header"
        >
          <motion.h2>About Me</motion.h2>
        </motion.div>
        <Container xxl>
          <Row className="justify-content-md-center about-container">
            <Col className="custom-pic" md>
              {/* <Container lg> */}
              <motion.div variants={itemVariants}>
                <Image
                  src="/View/x-portrait-04.webp"
                  fluid
                  className="custom-pic"
                  roundedCircle
                />
              </motion.div>
            </Col>
            <Col className="card about-content" md>
              <motion.div variants={itemVariants} className="card-body">
                <p>
                  Hi, I'm Xavier Santana, and I'm a photographer who loves to
                  capture the beauty and uniqueness of the world around me. With
                  a passion for portrait, landscape, and event photography, I've
                  honed my skills behind the lens to create stunning images that
                  tell a story and evoke emotions.
                </p>

                <p>
                  As a portrait photographer, I strive to capture the essence
                  and personality of my subjects in each photo. My goal is to
                  showcase their individuality and create a lasting memory that
                  they can cherish for years to come.
                </p>

                <p>
                  When it comes to landscape photography, I love to explore the
                  natural beauty of our planet. From stunning sunsets to
                  majestic mountains, I strive to capture the breathtaking
                  landscapes that inspire and move us.
                </p>

                <p>
                  And as an event photographer, I'm there to capture the special
                  moments and memories that people will cherish for a lifetime.
                  Whether it's a wedding, a concert, or a corporate event, I
                  have an eye for detail and a knack for capturing the perfect
                  shot.
                </p>

                <p>
                  With every project, I bring my creativity, professionalism,
                  and dedication to deliver images that exceed expectations. So
                  if you're looking for a photographer who can bring your vision
                  to life, I'm here to help.
                </p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </PageAnimated>
    </>
  );
}

export default About;
