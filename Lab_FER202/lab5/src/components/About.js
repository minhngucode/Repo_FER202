import React from 'react';
import { Card, Carousel, Image, Row, Col } from 'react-bootstrap';
function About() {
  const eventImages = [
    '/images/event-1.jpg',
    '/images/event-2.jpg',
    '/images/event-3.jpg',
    '/images/event-4.jpg',
  ];
  const menuImages = [
    '/images/menu-01.jpg',
    '/images/menu-02.jpg',
    '/images/menu-03.jpg',
    '/images/menu-04.jpg',
  ];
  return (
    <div className="about-container">
      <div className="about-header text-center">
        <h1 className="about-title">About Us</h1>
        <p className="about-description">
          Welcome to our Food Application!
        </p>
      </div>
      <div className="about-carousel-section">
        <h3 className="section-title">Our Events & Highlights</h3>
        <Carousel className="about-carousel">
          {eventImages.map((img, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100 about-carousel-image"
                src={img}
                alt={`Event ${index + 1}`}
                style={{ height: '400px', objectFit: 'cover' }}
              />
              <Carousel.Caption>
                <h3>Event {index + 1}</h3>
                <p>Discover exciting events and updates from our community.</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className="about-menu-section">
        <h3 className="section-title">Explore Our Food</h3>
        <Row>
          {menuImages.map((img, index) => (
            <Col md={3} key={index} className="mb-4">
              <div className="menu-item">
                <Image
                  src={img}
                  alt={`Menu ${index + 1}`}
                  fluid
                  className="menu-image"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="menu-overlay">
                  <p className="menu-text">Food {index + 1}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default About;