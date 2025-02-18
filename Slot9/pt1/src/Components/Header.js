import React from "react";
import { Container, Navbar, Form, Nav, FormControl } from "react-bootstrap";
import "../index.css";
const Header = () => {
    return (
        <Navbar expand="lg" style={{height: '100px', backgroundColor: '#EACDAD'}}>
            <Container className="d-flex justify-content-start" >
                <Navbar.Brand href="#home">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/6/68/Logo_FPT_Education.png"
                        alt="FPT Logo"
                        width="100"
                    />
                </Navbar.Brand>
                <Nav className="ms-3 d-flex align-items-center">
                    <Nav.Link href="#home" className="d-flex align-items-center" style={{color: 'orange'}}>
                        <img src="https://cdn-icons-png.flaticon.com/512/1946/1946488.png" width="20" alt="" className="me-2" />
                        Trang Chủ
                    </Nav.Link>
                    <Nav.Link href="#majors" className="d-flex align-items-center" style={{color: 'orange'}}>
                        <img src="https://cdn-icons-png.flaticon.com/512/12589/12589242.png" width="20" alt="" className="me-2" />
                        Ngành Học
                    </Nav.Link>
                    <Nav.Link href="#admissions" className="d-flex align-items-center" style={{color: 'orange'}}>
                        <img src="https://cdn-icons-png.flaticon.com/512/3596/3596091.png" width="20" alt="" className="me-2" />
                        Tuyển Sinh
                    </Nav.Link>
                    <Nav.Link href="#students" className="d-flex align-items-center" style={{color: 'orange'}}>
                        <img src="https://cdn-icons-png.flaticon.com/512/2099/2099192.png" width="20" alt="" className="me-2" />
                        Sinh Viên
                    </Nav.Link>
                </Nav>
            </Container>
            <Form className="d-flex ms-3 align-items-center" style={{ paddingRight: '10%' }}>
                <span className="me-2">Search:</span>
                <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
            </Form>
        </Navbar>
    );
};
export default Header;
