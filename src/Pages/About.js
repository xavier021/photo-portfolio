import React, { useState } from "react";
import MainLayout from "../Components/Layout/MainLayout";
import { Container, Col, Row } from "react-bootstrap";
import "./About.css";
import Loader from "../Components/Spinner/LoadingImg";
import { Image } from "react-bootstrap";
import { motion } from "framer-motion";
import {PageAnimated, itemVariants} from "../Components/AnimatedRoutes/PageAnimated";


function About() {
  // const [loading, setLoading] = useState(true);

  return (
    // <MainLayout>
    <Container fluid>
      <PageAnimated>
        <Row>
          <Col lg>
            <Container>
              <motion.div variants={itemVariants}>
                <Image
                  src="/View/x-portrait-04.webp"
                  fluid
                  className="custom-pic"
                  roundedCircle
                />
              </motion.div>
            </Container>
          </Col>
          <Col className="card about-content" lg>
            <motion.div variants={itemVariants} className="card-body">
              Hi, I'm Xavier Santana, and I'm a photographer who loves to
              capture the beauty and uniqueness of the world around me. With a
              passion for portrait, landscape, and event photography, I've honed
              my skills behind the lens to create stunning images that tell a
              story and evoke emotions.
              <br />
              As a portrait photographer, I strive to capture the essence and
              personality of my subjects in each photo. My goal is to showcase
              their individuality and create a lasting memory that they can
              cherish for years to come.
              <br />
              When it comes to landscape photography, I love to explore the
              natural beauty of our planet. From stunning sunsets to majestic
              mountains, I strive to capture the breathtaking landscapes that
              inspire and move us.
              <br />
              And as an event photographer, I'm there to capture the special
              moments and memories that people will cherish for a lifetime.
              Whether it's a wedding, a concert, or a corporate event, I have an
              eye for detail and a knack for capturing the perfect shot.
              <br />
              With every project, I bring my creativity, professionalism, and
              dedication to deliver images that exceed expectations. So if
              you're looking for a photographer who can bring your vision to
              life, I'm here to help.
              <br />
            </motion.div>
          </Col>
        </Row>
      </PageAnimated>
    </Container>
    // </MainLayout>
  );
}

export default About;
