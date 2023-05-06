import React from "react";
import MainLayout from "../Components/Layout/MainLayout";
import { motion } from "framer-motion";
import { Container } from "react-bootstrap";
import {PageAnimated, visible} from "../Components/AnimatedRoutes/PageAnimated";

function Contact() {
  return (
    <PageAnimated>
      <Container>
        <motion.h3
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible,
          }}
        >
          Contact
        </motion.h3>
      </Container>
      </PageAnimated>
  );
}

export default Contact;
