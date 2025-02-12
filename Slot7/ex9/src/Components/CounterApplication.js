import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap"; // Import Button từ React Bootstrap

const CounterApplication = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="w-64 p-4 text-center shadow-lg border rounded">
      <h2 className="text-xl font-bold mb-4">Counter Application</h2>
      <p className="text-2xl font-semibold">{count}</p>
      <div className="d-flex justify-content-center mt-4 gap-3">
        <Button variant="danger" onClick={() => setCount(count - 1)}>
          Decrement
        </Button>
        <Button variant="primary" onClick={() => setCount(count + 1)}>
          Increment
        </Button>
      </div>
    </div>
  );
};

export default CounterApplication;
