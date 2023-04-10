import React, { useState } from "react";
import MainLayout from "../Components/MainLayout";
import "./Portfolio.css";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
// import { Container, Row } from "react-bootstrap";
import { ImagePor, ImageLand, ImageEvent } from "../Components/Images";

function Portfolio() {

  return (
    <MainLayout>
      {/* <Container> */}
      <h2 className="ms-auto">PORTFOLIO</h2>
      <Tabs
        defaultActiveKey="events"
        id="uncontrolled-tab-example"
        className="mb-3 custom-tab justify-content-end"
        variant="pills"
      >
        <Tab eventKey="events" title="Events" className="pill-custom" mountOnEnter unmountOnExit>
          <ImageEvent />
        </Tab>
        <Tab eventKey="landscape" title="Landscape" mountOnEnter unmountOnExit>
          <ImageLand />
        </Tab>
        <Tab eventKey="portrait" title="Portrait" mountOnEnter unmountOnExit>
          <ImagePor />
        </Tab>
      </Tabs>
    </MainLayout>
  );
}

export default Portfolio;
