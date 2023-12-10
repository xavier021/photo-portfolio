import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "./Images.css"

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export const portraits = [
  {
    img: "/View/DSC04159(POR).jpg",
    title: "Portrait 4",
  },
  {
    img: "/View/DSC04253(POR).jpg",
    title: "Portrait 5",
  },
  {
    img: "/View/DSC04285(POR).jpg",
    title: "Portrait 4",
  },
  {
    img: "/View/DSC03122(Bryan-POR).jpg",
    title: "Books",
  },
  {
    img: "/View/DSC03124(Bryan-POR).jpg",
    title: "Chairs",
  },
  {
    img: "/View/DSC03145(Bryan-POR).jpg",
    title: "Candle",
  },
  {
    img: "/View/DSC06001.jpg",
    title: "Sink",
  },
  {
    img: "/View/DSC05887.jpg",
    title: "Sink",
  },
  {
    img: "/View/DSC06069.jpg",
    title: "Sink",
  },
  {
    img: "/View/DSC06034.jpg",
    title: "Sink",
  },
  {
    img: "/View/DSC06053.jpg",
    title: "Sink",
  },
  {
    img: "/View/DSC06032.jpg",
    title: "Sink",
  },
  {
    img: "/View/DSC02606(KEN-POR).jpg",
    title: "Bed",
  },
  {
    img: "/View/DSC02552(KEN).jpg",
    title: "Kitchen",
  },
  {
    img: "/View/DSC02633(KEN).jpg",
    title: "Sink",
  },
];

const landscape = [
  {
    img: "/View/DSC04156(LAND).jpg",
    title: "Bed",
  },
  {
    img: "/View/DSC04994(LAND).jpg",
    title: "Bed",
  },
  {
    img: "/View/DSC05005(LAND).jpg",
    title: "Kitchen",
  },
  {
    img: "/View/DSC05047(LAND).jpg",
    title: "Sink",
  },
  {
    img: "/View/DSC05098(LAND).jpg",
    title: "Books",
  },
  {
    img: "/View/DSC05053(LAND).jpg",
    title: "Books",
  },
  {
    img: "/View/DSC05154(LAND).jpg",
    title: "Chairs",
  },
  {
    img: "/View/DSC05203(LAND).jpg",
    title: "Candle",
  },
  {
    img: "/View/DJI_0003(LAND).jpg",
    title: "Candle",
  },
  {
    img: "/View/DJI_0007(LAND).jpg",
    title: "Candle",
  },
  {
    img: "/View/DJI_0038(LAND).jpg",
    title: "Candle",
  },
  {
    img: "/View/DJI_0042(LAND).jpg",
    title: "Candle",
  },
];

const events = [
  {
    img: "/View/DSC04144(X&C).jpg",
    title: "Portrait 5",
  },
  {
    img: "/View/DSC03967-Edit(X&C).jpg",
    title: "Portrait 4",
  },
  {
    img: "/View/DSC04150(X&C).jpg",
    title: "Portrait 4",
  },
  {
    img: "/View/DSC02717(K&M).jpg",
    title: "Bed",
  },
  {
    img: "/View/DSC02721-Edit(K&M).jpg",
    title: "Kitchen",
  },
  {
    img: "/View/DSC02914-Edit(K&M).jpg",
    title: "Sink",
  },
];

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

export function ImagePor() {
  const [index, setIndex] = useState(-1);

  const slides = portraits.map(({ img }) => ({ src: img }));

  return (
    <Container>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible,
        }}
      >
        <Row>
          <ImageList variant="woven" cols={3} gap={8} sx={{mb: 8, gridTemplateColumns: 'repeat(auto-fill, minmax(400px,1fr))!important'}}>
            {portraits.map((item, index) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=161&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                  onClick={() => setIndex(index)}
                  className="pic-port-custom"
                />
              </ImageListItem>
            ))}
          </ImageList>
          <Lightbox
            slides={slides}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
          />
        </Row>
      </motion.div>
    </Container>
  );
}

export function ImageLand() {
  const [index, setIndex] = useState(-1);

  const slides = landscape.map(({ img }) => ({ src: img }));

  return (
    <Container>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible,
        }}
      >
        <Row>
          <ImageList variant="woven" cols={3} gap={8} sx={{mb: 8, gridTemplateColumns: 'repeat(auto-fill, minmax(400px,1fr))!important'}}>
            {landscape.map((item, index) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=161&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                  onClick={() => setIndex(index)}
                  className="pic-port-custom"
                />
              </ImageListItem>
            ))}
          </ImageList>
          <Lightbox
            slides={slides}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
          />
        </Row>
      </motion.div>
    </Container>
  );
}

export function ImageEvent() {
  const [index, setIndex] = useState(-1);

  const slides = events.map(({ img }) => ({ src: img }));

  return (
    <Container>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible,
        }}
      >
        <Row>
          <ImageList variant="woven" cols={3} gap={8} sx={{mb: 8, gridTemplateColumns: 'repeat(auto-fill, minmax(400px,1fr))!important'}}>
            {events.map((item, index) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=161&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                  onClick={() => setIndex(index)}
                  className="pic-port-custom"
                />
              </ImageListItem>
            ))}
          </ImageList>
          <Lightbox
            slides={slides}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
          />
        </Row>
      </motion.div>
    </Container>
  );
}
