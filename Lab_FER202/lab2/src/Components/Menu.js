import menu1 from '../Pizza_Images/menu1.jpg';
import menu2 from '../Pizza_Images/menu2.jpg';
import menu3 from '../Pizza_Images/menu3.jpg';
import menu4 from '../Pizza_Images/menu4.jpg';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
const Menu = () => {
    const menuItems = [
        { name: "Margherita Pizza", price: "$40.00", salePrice: "$24.00", image: menu1, tag: "SALE" },
        { name: "Mushroom Pizza", price: "$25.00", image: menu2 },
        { name: "Hawaiian Pizza", price: "$30.00", image: menu3, tag: "NEW" },
        { name: "Pesto Pizza", price: "$30.00", salePrice: "$20.00", image: menu4, tag: "SALE" },
    ];
    return (
        <Container className="my-5">
            <h2>Our Menu</h2>
            <Row>
                {menuItems.map((item, index) => (
                    <Col md={3} key={index} className="mb-4">
                        <Card className="position-relative">
                            {item.tag && (
                                <div className="position-absolute top-0 start-0 bg-warning text-dark p-2 rounded-pill" style={{ zIndex: 1 }}>
                                    {item.tag}
                                </div>
                            )}
                            <Card.Img variant="top" src={item.image} alt={item.name} />
                            <Card.Body className="text-center">
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                    {item.salePrice ? (
                                        <>
                                            <del style={{ color: 'black' }}>{item.price}</del>{' '}
                                            <span style={{ color: 'orange' }}>{item.salePrice}</span>
                                        </>
                                    ) : (
                                        <span style={{ color: 'orange' }}>{item.price}</span>
                                    )}
                                </Card.Text>
                                <Button variant="dark" className="w-100">Buy</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};
export default Menu;


