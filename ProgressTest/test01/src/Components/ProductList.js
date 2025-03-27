import React, { useState, useEffect } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('http://localhost:5000/Products');
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="container mt-5">
      <h2>Product List</h2>
      <Row>
        {products.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4} className="mb-4">
            <Card style={{ width: '100%', height: '100%' }}>
              <Card.Img
                variant="top"
                src={product.image}
                style={{ objectFit: 'cover', height: '300px' }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <div className="mt-auto">
                  <Button
                    variant="primary"
                    className="me-2"
                    onClick={() => alert(`Buy ${product.name} for ${product.price}`)}
                  >
                    Buy Now - {product.price}
                  </Button>
                  <Button
                    variant="info"
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    More Details
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductList;