import React from 'react';
import { Carousel, Image, Row, Col } from 'react-bootstrap';

function Home() {
  const slides = [
    { src: '/images/slide1.jpg', alt: 'Slide 1' },
    { src: '/images/slide2.jpg', alt: 'Slide 2' },
    { src: '/images/slide3.jpg', alt: 'Slide 3' },
  ];

  const menuImages = [
    '/images/menu-01.jpg',
    '/images/menu-02.jpg',
    '/images/menu-03.jpg',
    '/images/menu-04.jpg',
    '/images/menu-05.jpg',
    '/images/menu-06.jpg',
  ];

  return (
    <div>
      <Carousel>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={slide.src}
              alt={slide.alt}
              style={{ height: '400px', objectFit: 'cover' }}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      <h2 className="text-center mt-4" style={{ color: 'red' }}>
        This is Home Page
      </h2>

      <Row className="text-center mt-4">
        {menuImages.map((img, index) => (
          <Col key={index} xs={6} md={2}>
            <Image
              src={img}
              alt={`Menu ${index + 1}`}
              roundedCircle
              fluid
              style={{ width: '100px', height: '100px', objectFit: 'cover' }}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Home;