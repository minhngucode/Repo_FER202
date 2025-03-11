import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";

function MyAlert() {
  const [show, setShow] = useState(false);

  const handleButtonClick = () => {
    setShow(true);
  };

  const handleAlertClose = () => setShow(false);

  return (
    <div>
      <Button onClick={handleButtonClick}>Show Alert</Button>
      {show && (
        <Alert variant="success" onClose={handleAlertClose} dismissible>
          <Alert.Heading>Success!</Alert.Heading>
          <p>alert complete</p>
        </Alert>
      )}
    </div>
  );
}

export default MyAlert;
