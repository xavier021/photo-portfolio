import React from "react";
import MainLayout from "../Components/MainLayout";
import { Col,Row, Container, Image } from "react-bootstrap";
import "./Home.css"
import { Box } from "@mui/material";

function Home() {
  return (
    <MainLayout>
    <Container className="custom-container" fluid>
        <Row className="custom-row">
            <Col>
                <h2 className="custom-name">Xavier Santana</h2>
                <h1 className="custom-title">PHOTOGRPAHER</h1>
            </Col>
            <Col className="custom-col" md>
                <Image 
                    src="/View/DSC04910-X.webp"
                    fluid
                    className="custom-pic"
                />
            </Col>
        </Row>
    </Container>
    </MainLayout>
  );
}

export default Home;
