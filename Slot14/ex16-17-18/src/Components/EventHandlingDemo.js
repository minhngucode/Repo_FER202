import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

const EventHandlingDemo = () => {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <Card className="p-3 text-center">
      <h3>Event Handling</h3>
      <p>Count: {count}</p>
      <Button variant="primary" onClick={handleButtonClick}>
        Increase Count
      </Button>
    </Card>
  );
};

export default EventHandlingDemo;
