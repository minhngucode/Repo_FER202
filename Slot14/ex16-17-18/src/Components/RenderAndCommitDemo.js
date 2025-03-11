import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

const RenderAndCommitDemo = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <Card className="p-3 text-center">
      <h3>Render & Commit</h3>
      <p>Count: {count}</p>
      <Button variant="success" onClick={handleClick}>
        Increment
      </Button>
    </Card>
  );
};

export default RenderAndCommitDemo;
