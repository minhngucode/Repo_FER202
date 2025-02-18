import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <Container fluid className="container-s bg-orange">
                <Row>
                    <Col md={7} className="ms-5 mt-3">
                        <div className="fs-3 fw-bold">Our Address</div>
                        <div className="items">
                            <div>Khu đô thị FPT Đà Nẵng</div>

                            <div className="item d-flex">
                                <img src="https://cdn-icons-png.flaticon.com/512/597/597177.png" className="icon" alt="" />
                                <div className="ps-2">+8402311111</div>
                            </div>
                            <div className="item d-flex">
                                <img src="https://cdn-icons-png.flaticon.com/512/597/597177.png" className="icon" alt="" />
                                <div className="ps-2">+852 8765 4321</div>
                            </div>
                            <div className="item d-flex">
                                <img src="https://cdn-icons-png.flaticon.com/512/597/597177.png" className="icon" alt="" />
                                <a href="mailto:fptudn@fpt.edu.vn" className="text-decoration-none ps-2">fptudn@fpt.edu.vn</a>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="items d-flex mt-5">
                            {[
                                "https://cdn-icons-png.flaticon.com/512/2111/2111483.png",
                                "https://cdn-icons-png.flaticon.com/512/20/20837.png",
                                "https://cdn-icons-png.flaticon.com/512/80/80963.png",
                                "https://cdn-icons-png.flaticon.com/512/733/733635.png",
                                "https://cdn-icons-png.flaticon.com/512/49/49084.png",
                                "https://cdn-icons-png.flaticon.com/512/4338/4338894.png"
                            ].map((icon, index) => (
                                <div className="item" key={index}>
                                    <a href="">
                                        <img src={icon} className="icon-second ps-1" alt="" />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
                <Row>
                    <div className="mt-5 mb-3 d-flex justify-content-center align-items-center">&copy; CopyWrite 2023</div>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;