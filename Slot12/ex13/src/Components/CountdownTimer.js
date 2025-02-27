import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";

function CountdownTimer({ initialValue = 10 }) {
  const [timeRemaining, setTimeRemaining] = useState(initialValue);

  useEffect(() => {
    if (timeRemaining <= 0) return;

    const timer = setInterval(() => {
      setTimeRemaining((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeRemaining]);

  return (
    <Container className="form-container">
      <h3 className="title">Countdown</h3>
      <h2>{timeRemaining}s</h2>
      <Button
        className="gradient-button"
        onClick={() => setTimeRemaining(initialValue)}
        disabled={timeRemaining > 0}
      >
        Reset
      </Button>
    </Container>
  );
}

export default CountdownTimer;
