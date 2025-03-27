import React from 'react';
import { Row, Col } from 'react-bootstrap';
import NewsItem from './NewsItem';

const newsList = [
  { id: 1, title: 'Woman bakes expletive-laden pies to ‘get a rise’ out of her grandmother in annual tradition', description: '“What started as a means to get a rise out of my Grammy has snowballed into a weird family tradition,” wrote Jess Lydon.', images: '/images/event-1.jpg' },
  { id: 2, title: 'Martha Stewart shows off her 30 pies after canceled Thanksgiving dinner plans', description: 'Queen of Thanksgiving Martha Stewart may not be hosting a turkey dinner this year but fret not, she will still be celebrating with literally 30 pies.', images: '/images/event-2.jpg' },
  { id: 3, title: 'Burger King is testing a new breakfast sandwich', description: 'This is a win for the flatbread fans.', images: '/images/event-3.jpg' },
  { id: 4, title: 'Popeyes permanently adds chicken wings to its menu', description: 'And you can get ’em in five different flavors.', images: '/images/event-4.jpg' },
  { id: 5, title: 'Top salmon with a sizzling mix of aromatics and spices', description: 'Tadka is a ubiquitous South Asian technique that adds a dramatic last-minute coat of flavor.', images: '/images/event-5.jpg' },
  { id: 6, title: '80 Christmas dinner ideas for the ultimate holiday feast', description: 'Build the perfect Christmas menu with these delicious recipes.', images: '/images/event-6.jpg' },
  { id: 7, title: 'How to make the easiest prime rib roast for the holidays', description: 'Use these tips and tricks to make a juicy and amazingly delicious prime rib roast.', images: '/images/event-7.jpg' },
  { id: 8, title: 'Turn leftover turkey into a flavorful Waldorf salad', description: 'This light, bright turkey salad is the best post-Thanksgiving lunch.', images: '/images/event-8.jpg' },
];

function News() {
  return (
    <div className="news-container">
      <h2 className="news-title">News</h2>
      <Row>
        {newsList.map(news => (
          <Col md={6} key={news.id} className="mb-4">
            <NewsItem news={news} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default News;