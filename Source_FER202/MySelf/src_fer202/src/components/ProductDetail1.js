// src/components/ProductDetail1.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, ListGroup, Button } from 'react-bootstrap';

function ProductDetail1() {
  const [productInfo, setProductInfo] = useState(null); // Thông tin sản phẩm
  const { id } = useParams();
  const navigate = useNavigate();

  // Lấy thông tin sản phẩm từ API dựa trên id
  useEffect(() => {
    const fetchProductInfo = async () => {
      try {
        const response = await fetch(`http://localhost:9999/Products/${id}`);
        const data = await response.json();
        console.log('data: ',data);
        setProductInfo(data);
      } catch (err) {
        console.error('Lỗi khi lấy dữ liệu:', err);
      }
    };
    fetchProductInfo();
  }, [id]);

  // Chuyển hướng về trang chủ
  const navigateToHome = () => {
    navigate('/home1');
  };

  if (!productInfo) return <div>Đang tải...</div>;

  return (
    <Container className="my-5">
        <h1>Product details</h1>
      <h2 className="text-center mb-4">{productInfo.description}</h2>
      <ListGroup>
        <ListGroup.Item>
          <img
            src={productInfo.image}
            alt={productInfo.description}
            className="product-image-custom mb-3"
          />
          <p><strong>Mô Tả:</strong> {productInfo.description}</p>
          <p><strong>Giá:</strong> {productInfo.price} VNĐ</p>
          <Button variant="primary" onClick={navigateToHome}>
            Quay Lại Trang Chủ
          </Button>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
}

export default ProductDetail1;