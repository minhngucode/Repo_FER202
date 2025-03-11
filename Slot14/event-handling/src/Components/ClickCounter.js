import React, { useState } from "react";
import { Button } from "react-bootstrap";

function ClickCounter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <Button onClick={handleClick}>Click me</Button>
      <p>Button clicked {count} times</p>
    </div>
  );
}

export default ClickCounter;
