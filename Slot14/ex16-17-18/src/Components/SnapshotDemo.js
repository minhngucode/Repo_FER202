import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

const SnapshotDemo = () => {
  const [count, setCount] = useState(0);
  const [snapshot, setSnapshot] = useState(null);

  const handleIncrement = () => setCount(count + 1);
  const handleSnapshot = () => setSnapshot(count);
  const handleRestore = () => {
    if (snapshot !== null) setCount(snapshot);
  };

  return (
    <Card className="p-3 text-center">
      <h3>State as a Snapshot</h3>
      <p>Count: {count}</p>
      <Button variant="warning" onClick={handleIncrement} className="m-1">
        Increment
      </Button>
      <Button variant="info" onClick={handleSnapshot} className="m-1">
        Take Snapshot
      </Button>
      <Button variant="danger" onClick={handleRestore} className="m-1">
        Restore Snapshot
      </Button>
    </Card>
  );
};

export default SnapshotDemo;
