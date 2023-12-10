import React from "react";
import "./Home.css";
import Home from "../Components/Layout/Home/HomeSlide";
import HomeGallery from "../Components/Layout/Home/HomeGallery";
import {
  PageAnimated,
  itemVariants,
} from "../Components/AnimatedRoutes/PageAnimated";
import { motion } from "framer-motion";

function NewHome() {
  return (
    <>
      <PageAnimated>
        <motion.div variants={itemVariants}>
          <Home />
        </motion.div>
      </PageAnimated>
      <HomeGallery />
    </>
  );
}

export default NewHome;
