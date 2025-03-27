import React from 'react';
import { Card, Button } from 'react-bootstrap';

function NewsItem({ news }) {
  return (
    <Card className="news-item d-flex flex-row">
      <Card.Img
        variant="left"
        src={news.images}
        alt={news.title}
        className="news-image"
        style={{ width: '150px', height: '150px', objectFit: 'cover' }}
      />
      <Card.Body className="news-body">
        <Card.Title className="news-item-title">{news.title}</Card.Title>
        <Card.Text className="news-item-text">{news.description}</Card.Text>
        <Button variant="link" className="news-button p-0">
          {news.title}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default NewsItem;