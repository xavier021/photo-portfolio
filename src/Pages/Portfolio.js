import React from "react";
import MainLayout from "../Components/MainLayout";
import "./Portfolio.css";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Container, Row } from "react-bootstrap";

function Portfolio() {
  return (
    <MainLayout>
      {/* <Container> */}
      <h2 className="ms-auto">Portfolio</h2>
        <Tabs
          defaultActiveKey="events"
          id="uncontrolled-tab-example"
          className="mb-3 ms-auto custom-tab justify-content-end"
          variant="pills"
        >
          <Tab eventKey="events" title="Events" className="pill-custom">
            <p>test</p>
          </Tab>
          <Tab eventKey="landscape" title="Landscape">
            <p>test 2</p>
          </Tab>
          <Tab eventKey="portrait" title="Portrait">
            <p>test 3</p>
          </Tab>
        </Tabs>
      {/* </Container> */}
    </MainLayout>
  );
}

export default Portfolio;
