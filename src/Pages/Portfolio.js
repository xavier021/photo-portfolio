import React, { useState } from "react";
import MainLayout from "../Components/Layout/MainLayout";
import "./Portfolio.css";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
// import { Container, Row } from "react-bootstrap";
import { ImagePor, ImageLand, ImageEvent } from "../Components/Gallery/Images";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  PageAnimated,
  itemVariants,
  visible,
} from "../Components/AnimatedRoutes/PageAnimated";

function Portfolio() {
  return (
    <>
      {/* <MainLayout> */}
      <PageAnimated>
        <Container className="portofolio-content">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible,
            }}
            className="card portofolio-header"
          >
            <motion.h2>ALBUMS</motion.h2>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Tabs
              defaultActiveKey="portrait"
              id="uncontrolled-tab-example"
              className="mb-3 custom-tab justify-content-end"
              variant="pills"
            >
              <Tab eventKey="portrait" title="Portrait" mountOnEnter>
                <ImagePor />
              </Tab>
              <Tab eventKey="landscape" title="Landscape" mountOnEnter>
                <ImageLand />
              </Tab>
              <Tab
                eventKey="events"
                title="Events"
                className="pill-custom"
                mountOnEnter
              >
                <ImageEvent />
              </Tab>
            </Tabs>
          </motion.div>
        </Container>
      </PageAnimated>
      {/* </MainLayout> */}
    </>
  );
}

export default Portfolio;
