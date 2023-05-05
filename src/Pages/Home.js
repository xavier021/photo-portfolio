import React, { useState } from "react";
import MainLayout from "../Components/Layout/MainLayout";
import { Col, Row, Container, Image } from "react-bootstrap";
import "./Home.css";
import { Box } from "@mui/material";
import Loader from "../Components/Spinner/LoadingImg";

function Home() {
  const [loading, setLoading] = useState(true);

  return (
    // <MainLayout>
      <Container className="custom-container" fluid>
        <Row className="custom-row">
          <Col>
            <h2 className="custom-name">Xavier Santana</h2>
            <h1 className="custom-title">PHOTOGRPAHER</h1>
          </Col>
          <Col className="custom-col" md>
            <div
              className="loader-div"
              style={{ display: loading ? "block" : "none" }}
            >
              <Loader />
            </div>
            <div style={{ display: loading ? "none" : "block" }}>
              <Container>
                <Image
                  src="/View/x-portrait-04.webp"
                  fluid
                  className="custom-pic"
                  onLoad={() => setLoading(false)}
                />
              </Container>
            </div>
          </Col>
        </Row>
      </Container>

  );
}

export default Home;
