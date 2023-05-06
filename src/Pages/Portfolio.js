import React, { useState } from "react";
import MainLayout from "../Components/Layout/MainLayout";
import "./Portfolio.css";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
// import { Container, Row } from "react-bootstrap";
import { ImagePor, ImageLand, ImageEvent } from "../Components/Gallery/Images";
import { Container } from "react-bootstrap";

function Portfolio() {
  return (
    <>
      <MainLayout>
        <Container className="portofolio-content">
          <div className="card portofolio-header">
            <h2>PORTFOLIO</h2>
          </div>

          <Tabs
            defaultActiveKey="events"
            id="uncontrolled-tab-example"
            className="mb-3 custom-tab justify-content-end"
            variant="pills"
          >
            <Tab
              eventKey="events"
              title="Events"
              className="pill-custom"
              mountOnEnter
            >
              <ImageEvent />
            </Tab>
            <Tab eventKey="landscape" title="Landscape" mountOnEnter>
              <ImageLand />
            </Tab>
            <Tab eventKey="portrait" title="Portrait" mountOnEnter>
              <ImagePor />
            </Tab>
          </Tabs>
        </Container>
      </MainLayout>
    </>
  );
}

export default Portfolio;
