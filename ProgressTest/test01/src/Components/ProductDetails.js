import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/Products/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product:', error.response ? error.response.status : error.message);
                setProduct(null);
            }
        };
        fetchProduct();
    }, [id]);

    if (!product) {
        return <div>Product not found or loading...</div>;
    }

    return (
        <div className="container mt-5">
            <Card className="product-detail-card">
                <div className="card-content">
                    <div className="image-container">
                        <Card.Img variant="top" src={product.image} alt={product.name} className="card-img-top" style={{maxWidth: '300px', margin: 'auto'}}/>
                    </div>
                    <Card.Body className="text-content">
                        <Card.Title className="product-title">{product.name}</Card.Title>
                        <Card.Text className="product-price">Price: {product.price}</Card.Text>
                        <Card.Text className="product-description">Description: {product.description}</Card.Text>
                        <Card.Text className="product-category">Category: {product.category}</Card.Text>
                        <Card.Text className="product-stock">Stock: {product.stock}</Card.Text>
                        <Button
                            variant="primary"
                            onClick={() => navigate('/products')}
                            className="back-button btn-primary mt-3"
                        >
                            Back to Product List
                        </Button>
                    </Card.Body>
                </div>
            </Card>
        </div>
    );
};

export default ProductDetail;