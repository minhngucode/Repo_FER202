import pizza1 from '../Pizza_Images/pizza1.jpg';
import pizza2 from '../Pizza_Images/pizza2.jpg';
import pizza3 from '../Pizza_Images/pizza3.jpg';
import pizza4 from '../Pizza_Images/pizza4.jpg';
import pizza5 from '../Pizza_Images/pizza5.jpg';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Carousel } from 'react-bootstrap';

const Header = () => {
  return (
    <Carousel>
      {[pizza1, pizza2, pizza3, pizza4, pizza5].map((image, index) => (
        <Carousel.Item key={index} interval={3000}>
          <img className="d-block w-100" src={image} alt={`Slide ${index + 1}`} style={{ height: '500px', objectFit: 'cover' }} />
          <Carousel.Caption>
            <h1>Neapolitan Pizza</h1>
            <p>If you are looking for traditional Italian pizza, the Neapolitan is the best option!</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Header;

