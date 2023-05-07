import { ImageList, ImageListItem } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import { PageAnimated, itemVariants } from "../AnimatedRoutes/PageAnimated";
import { Container } from "react-bootstrap";

const pictures = [
  {
    img: "/View/DSC04156(LAND).jpg",
    title: "Bed",
  },
  {
    img: "/View/DSC04994(LAND).jpg",
    title: "Bed",
    rows: 2,
    cols: 2,
  },
  {
    img: "/View/DSC05005(LAND).jpg",
    title: "Kitchen",
    rows: 2,
  },
  {
    img: "/View/DSC05047(LAND).jpg",
    title: "Sink",
  },
  {
    img: "/View/DSC05203(LAND).jpg",
    title: "Candle",
    rows: 2,
    cols: 2,
  },
  {
    img: "/View/DSC04399_ARM_LAND.jpg",
    title: "Portrait 4",
    cols: 2,
  },
  {
    img: "/View/DSC04435_ARM_LAND.jpg",
    title: "Portrait 5",
    rows: 2,
    cols: 2,
  },
  {
    img: "/View/DSC05053(LAND).jpg",
    title: "Books",
    rows: 2,
  },
  {
    img: "/View/DSC04302_ARM_LAND.jpg",
    title: "Portrait 4",
    rows: 2,
  },
  {
    img: "/View/DJI_0042(LAND).jpg",
    title: "Candle",
    // cols:2,
  },
  {
    img: "/View/DSC05098(LAND).jpg",
    title: "Books",
    // cols:2,
    // rows:2,
  },
];

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}
export default function QuiltedImageList() {
  return (
    <Container fluid>
      <PageAnimated>
        <motion.div variants={itemVariants}>
          <ImageList variant="quilted" cols={4} rowHeight={300}>
            {pictures.map((pic) => (
              <ImageListItem
                key={pic.img}
                cols={pic.cols || 1}
                rows={pic.rows || 1}
                loading="lazy"
              >
                <img
                  {...srcset(pic.img, 300, pic.rows, pic.cols)}
                  alt={pic.title}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </motion.div>
      </PageAnimated>
    </Container>
  );
}
