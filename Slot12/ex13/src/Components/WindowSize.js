import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

function WindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container className="form-container">
      <h3 className="title">Window size: </h3>
      <h2>
        {windowSize.width} x {windowSize.height}
      </h2>
    </Container>
  );
}

export default WindowSize;
