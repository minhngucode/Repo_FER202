// src/components/ProductList1.js
//dùng fetch, chỉ có popup Buy, React Bootstrap
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, ListGroup, Button, Form, Row, Col } from 'react-bootstrap';

function ProductList1() {
  const [dataItems, setDataItems] = useState([]); // Danh sách sản phẩm
  const [searchText, setSearchText] = useState(''); // Từ khóa tìm kiếm
  const navigate = useNavigate();

  // Lấy danh sách sản phẩm từ API khi component được render
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:9999/Products');
        const items = await response.json();
        console.log('items: ',items);
        setDataItems(items);
      } catch (err) {
        console.error('Lỗi khi lấy dữ liệu:', err);
      }
    };
    fetchData();
  }, []);

  // Lọc sản phẩm dựa trên từ khóa tìm kiếm
  const filteredItems = dataItems.filter((item) =>
    item.description.toLowerCase().includes(searchText.toLowerCase())
  );

  // Chuyển hướng đến trang chi tiết sản phẩm
  const goToDetailPage = (itemId) => {
    navigate(`/products/${itemId}`);
  };

  // Hiển thị popup khi mua hàng
  const buyItemNow = (item) => {
    alert(`Đã mua ${item.description} thành công!`);
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Danh Sách Sản Phẩm</h2>
      {/* Thanh tìm kiếm */}
      <Form.Group className="mb-4">
        <Form.Control
          type="text"
          placeholder="Tìm kiếm sản phẩm..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </Form.Group>
      <Row>
        {filteredItems.map((item) => (
          <Col md={4} key={item.id} className="mb-3">
            <ListGroup>
              <ListGroup.Item>
                <img
                  src={item.image}
                  alt={item.description}
                  className="product-image-custom mb-2"
                />
                <h5>{item.description}</h5>
                <p>{item.category}</p>
                <p><strong>{item.price} VNĐ</strong></p>
                <Button
                  variant="info"
                  onClick={() => goToDetailPage(item.id)}
                  className="me-2 mb-2"
                >
                  Xem Chi Tiết
                </Button>
                <Button
                  variant="success"
                  onClick={() => buyItemNow(item)}
                  className="mb-2"
                >
                  Mua Ngay
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductList1;