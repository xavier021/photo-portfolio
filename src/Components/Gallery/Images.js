import React, { useEffect, useRef, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Loader from "../Spinner/LoadingImg";
import { motion } from "framer-motion";

const portraits = [
  {
    img: "/View/DSC04159(POR).webp",
    title: "Portrait 4",
  },
  {
    img: "/View/DSC04253(POR).webp",
    title: "Portrait 5",
  },
  {
    img: "/View/DSC04285(POR).webp",
    title: "Portrait 4",
  },
  {
    img: "/View/DSC03122(Bryan-POR).webp",
    title: "Books",
  },
  {
    img: "/View/DSC03124(Bryan-POR).webp",
    title: "Chairs",
  },
  {
    img: "/View/DSC03145(Bryan-POR).webp",
    title: "Candle",
  },
  {
    img: "/View/DSC02606_KEN-POR_.webp",
    title: "Bed",
  },
  {
    img: "/View/DSC02552_KEN_.webp",
    title: "Kitchen",
  },
  {
    img: "/View/DSC02633_KEN_.webp",
    title: "Sink",
  },
];

const landscape = [
  {
    img: "/View/DSC04156(LAND).webp",
    title: "Bed",
  },
  {
    img: "/View/DSC04994(LAND).webp",
    title: "Bed",
  },
  {
    img: "/View/DSC05005(LAND).webp",
    title: "Kitchen",
  },
  {
    img: "/View/DSC05047(LAND).webp",
    title: "Sink",
  },
  {
    img: "/View/DSC05098(LAND).webp",
    title: "Books",
  },
  {
    img: "/View/DSC05053(LAND).webp",
    title: "Books",
  },
  {
    img: "/View/DSC05154(LAND).webp",
    title: "Chairs",
  },
  {
    img: "/View/DSC05203(LAND).webp",
    title: "Candle",
  },
  {
    img: "/View/DJI_0003(LAND).webp",
    title: "Candle",
  },
  {
    img: "/View/DJI_0007(LAND).webp",
    title: "Candle",
  },
  {
    img: "/View/DJI_0038(LAND).webp",
    title: "Candle",
  },
  {
    img: "/View/DJI_0042(LAND).webp",
    title: "Candle",
  },
];

const events = [
  {
    img: "/View/DSC04144_X_C_.webp",
    title: "Portrait 5",
  },
  {
    img: "/View/DSC03967-Edit(X&C).webp",
    title: "Portrait 4",
  },
  {
    img: "/View/DSC04150_X_C_.webp",
    title: "Portrait 4",
  },
  {
    img: "/View/DSC02717_K_M_.webp",
    title: "Bed",
  },
  {
    img: "/View/DSC02721-Edit_K_M_.webp",
    title: "Kitchen",
  },
  {
    img: "/View/DSC02914-Edit_K_M_.webp",
    title: "Sink",
  },
];

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

export function ImagePor() {
  const [loading, setLoading] = useState(true);
  const counter = useRef(0);

  const imageLoader = () => {
    counter.current += 1;

    console.log(counter);

    if (counter.current >= portraits.length) {
      setLoading(false);
      console.log("Por " + counter);
    }
  };

  return (
    <Container>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible,
        }}
      >
        <Row>
          {/* <div style={{ display: loading ? "block" : "none" }}>
            <Loader />
          </div>
          <div style={{ display: loading ? "none" : "block" }}> */}
            <ImageList variant="woven" cols={3} gap={8}>
              {portraits.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}?w=161&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                    onLoad={imageLoader}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          {/* </div> */}
        </Row>
      </motion.div>
    </Container>
  );
}

export function ImageLand() {
  const [loadingLand, setLoadingLand] = useState(true);
  const counter_land = useRef(0);

  console.log("Counter at Land" + counter_land);

  const imageLoader = () => {
    counter_land.current += 1;

    console.log("At land " + counter_land);

    if (counter_land.current >= landscape.length) {
      setLoadingLand(false);
      console.log("Land " + counter_land);
    }
  };

  return (
    <Container>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible,
        }}
      >
        <Row>
          {/* <div style={{ display: loadingLand ? "block" : "none" }}>
            <Loader />
          </div>
          <div style={{ display: loadingLand ? "none" : "block" }}> */}
            <ImageList variant="woven" cols={3} gap={8}>
              {landscape.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}?w=161&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                    onLoad={imageLoader}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          {/* </div> */}
        </Row>
      </motion.div>
    </Container>
  );
}

export function ImageEvent() {
  const [loadingEvent, setLoadingEvent] = useState(true);
  const counter = useRef(0);

  console.log("Counter at Event " + counter);

  const imageLoader = () => {
    counter.current += 1;
    if (counter.current >= events.length) {
      setLoadingEvent(false);
    }
  };

  return (
    <Container>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible,
        }}
      >
        <Row>
          {/* <div style={{ display: loadingEvent ? "block" : "none" }}>
            <Loader />
          </div>
          <div style={{ display: loadingEvent ? "none" : "block" }}> */}
            <ImageList variant="woven" cols={3} gap={8}>
              {events.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}?w=161&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                    // onLoad={imageLoader}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          {/* </div> */}
        </Row>
      </motion.div>
    </Container>
  );
}
