import { useCart } from "./useCart";
import { dishes } from "./dishes";
import { useState } from "react";
import { Card, Button, Container, Row, Col, Form } from "react-bootstrap";

const DishesList = () => {
  const { addToCart, totalItems } = useCart();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDishes = dishes.filter(dish =>
    dish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dish.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <h2 className="text-center my-3">Dishes (Items in cart: {totalItems})</h2>

      <Form.Control
        type="text"
        placeholder="Tìm món ăn..."
        className="mb-3"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <Row>
        {filteredDishes.map((dish) => (
          <Col md={6} lg={4} key={dish.id} className="mb-3">
            <Card className="dish-card">
              <Card.Img variant="top" src={dish.image} alt={dish.name} style={{ height: "200px", objectFit: "cover" }} />
              <Card.Body>
                <Card.Title>{dish.name} - ${dish.price}</Card.Title>
                <Card.Text>{dish.description}</Card.Text>
                <Button variant="primary" onClick={() => addToCart(dish)}>Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default DishesList;
