import React, { useState, useEffect } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";

function Ex5() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [isFormValid, setIsFormValid] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const validateEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    const validatePassword = (password) => {
        return password.length >= 8;
    };

    useEffect(() => {
        setIsEmailValid(validateEmail(email));
        setIsPasswordValid(validatePassword(password));
        setIsFormValid(validateEmail(email) && validatePassword(password));
    }, [email, password]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid) {
            setShowAlert(true);
            setTimeout(() => setShowAlert(false), 3000);
        }
    };

    return (
        <Container className="mt-4">
            {showAlert && (
                <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                    Valid Form
                </Alert>
            )}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Nhập email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        isInvalid={email.length > 0 && !isEmailValid}
                    />
                    <Form.Control.Feedback type="invalid">
                        Email không hợp lệ!
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formPassword" className="mt-3">
                    <Form.Label>Mật khẩu</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Nhập mật khẩu"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        isInvalid={password.length > 0 && !isPasswordValid}
                    />
                    <Form.Control.Feedback type="invalid">
                        Mật khẩu phải có ít nhất 8 ký tự!
                    </Form.Control.Feedback>
                </Form.Group>

                <Button
                    variant="primary"
                    type="submit"
                    className="mt-3"
                    disabled={!isFormValid}
                >
                    Đăng nhập
                </Button>
            </Form>
        </Container>
    );
}

export default Ex5;
