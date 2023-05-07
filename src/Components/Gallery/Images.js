import React, { useEffect, useRef, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Loader from "../Spinner/LoadingImg";
import { motion } from "framer-motion";

const portraits = [
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
        </Row>
      </motion.div>
    </Container>
  );
}
