import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import EventHandlingDemo from "./Components/EventHandlingDemo";
import RenderAndCommitDemo from "./Components/RenderAndCommitDemo";
import SnapshotDemo from "./Components/SnapshotDemo";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1 className="text-center mb-4">React Event Handling Demo</h1>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <EventHandlingDemo />
        </Col>
        <Col md={4}>
          <RenderAndCommitDemo />
        </Col>
        <Col md={4}>
          <SnapshotDemo />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
