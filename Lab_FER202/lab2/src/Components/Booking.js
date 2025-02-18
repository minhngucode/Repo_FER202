import { Button, Form, Container, Row, Col } from 'react-bootstrap';
const Booking = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center">Book Your Table</h2>
      <Form>
        <Row className="mb-3">
          <Col md={4}><Form.Control type="text" placeholder="Your Name *" /></Col>
          <Col md={4}><Form.Control type="email" placeholder="Your Email *" /></Col>
          <Col md={4}>
            <Form.Select>
              <option>Select a Service</option>
              <option>Dine In</option>
              <option>Take Away</option>
            </Form.Select>
          </Col>
        </Row>
        <Form.Group className="mb-3">
          <Form.Control as="textarea" placeholder="Please write your comment" />
        </Form.Group>
        <Form>
          <div className="mb-3">
            <Form.Check 
              inline
              label="1"
            />
            <Form.Check
              inline
              label="2"
            />
            <Form.Check
              inline
              label="3"
            />
          </div>
        </Form>
        <Button variant="warning">Send Message</Button>
      </Form>

    </Container>
  );
};

export default Booking;


