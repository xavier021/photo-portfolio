import React from "react";
import MainLayout from "../Components/Layout/MainLayout";
import { motion } from "framer-motion";
import { Container } from "react-bootstrap";
import {PageAnimated, visible} from "../Components/AnimatedRoutes/PageAnimated";

function Contact() {
  return (
    <PageAnimated>
      <Container>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible,
          }}
          className="card portofolio-header"
        >
          <motion.h2>Contact</motion.h2>
        </motion.div>
      </Container>
      </PageAnimated>
  );
}

export default Contact;
