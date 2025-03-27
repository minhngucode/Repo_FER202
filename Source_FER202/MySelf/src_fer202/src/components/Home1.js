// src/components/Home1.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav, Carousel } from 'react-bootstrap';

function Home1() {
  const [slideIndex, setSlideIndex] = useState(0); // Chỉ số slide hiện tại
  const [slideImages, setSlideImages] = useState([]); // Danh sách hình ảnh slide

  // Lấy danh sách hình ảnh slide từ API
  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await fetch('http://localhost:9999/slides');
        const data = await response.json();
        setSlideImages(data.map((s) => s.image));
      } catch (err) {
        console.error('Lỗi khi lấy dữ liệu:', err);
      }
    };
    fetchSlides();
  }, []);

  return (
    <Container className="my-5">
      {/* Thanh điều hướng */}
      <Navbar bg="light" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand as={Link} to="/">Trang Chủ</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" className="nav-item-custom">
                Đăng Nhập
              </Nav.Link>
              <Nav.Link as={Link} to="/products" className="nav-item-custom">
                Sản Phẩm
              </Nav.Link>
              <Nav.Link as={Link} to="/form" className="nav-item-custom">
                Form
              </Nav.Link>
              <Nav.Link as={Link} to="/edit" className="nav-item-custom">
                Danh Sách Chỉnh Sửa
              </Nav.Link>
              <Nav.Link as={Link} to="/cart" className="nav-item-custom">
                Giỏ Hàng
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Carousel hiển thị slide */}
      <Carousel activeIndex={slideIndex} onSelect={(selectedIndex) => setSlideIndex(selectedIndex)}>
        {slideImages.length > 0 ? (
          slideImages.map((slide, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={slide}
                alt={`Slide ${index}`}
                style={{ height: '400px', objectFit: 'cover' }}
              />
            </Carousel.Item>
          ))
        ) : (
          <Carousel.Item>
            <div>Đang tải slide...</div>
          </Carousel.Item>
        )}
      </Carousel>
    </Container>
  );
}

export default Home1;