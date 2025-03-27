// src/components/FormInput.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Toast, ToastContainer } from 'react-bootstrap';

function FormInput() {
    const [userData, setUserData] = useState({ fullName: '', phoneNumber: '', emailAddress: '' }); // Dữ liệu form
    const [validationErrors, setValidationErrors] = useState({}); // Lỗi validate
    const [showToast, setShowToast] = useState(false); // Hiển thị thông báo lỗi
    const navigate = useNavigate();

    // Hàm kiểm tra dữ liệu form
    const validateForm = () => {
        const errors = {};
        if (!userData.fullName) errors.fullName = 'Tên không được để trống';
        if (!userData.phoneNumber || userData.phoneNumber.length < 10 || userData.phoneNumber.length > 20)
            errors.phoneNumber = 'Số điện thoại phải từ 10-20 ký tự';
        if (!userData.emailAddress || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.emailAddress))
            errors.emailAddress = 'Email không đúng định dạng';
        return errors;
    };

    const navigateToHome = () => {
        navigate('/home1');
    };

    // Hàm xử lý khi người dùng gửi form
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setValidationErrors(errors);
            setShowToast(true);
        } else {
            alert('Form đã được gửi thành công!');
            setValidationErrors({});
            setShowToast(false);
            fetch('http://localhost:9999/forms', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData),
            });
        }
    };

    return (
        <Container className="my-5">
            <h2 className="text-center mb-4">Form Thông Tin</h2>
            <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="fullName">
                    <Form.Label>Tên</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Nhập tên"
                        value={userData.fullName}
                        onChange={(e) => setUserData({ ...userData, fullName: e.target.value })}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="phoneNumber">
                    <Form.Label>Số Điện Thoại</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Nhập số điện thoại"
                        value={userData.phoneNumber}
                        onChange={(e) => setUserData({ ...userData, phoneNumber: e.target.value })}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="emailAddress">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Nhập email"
                        value={userData.emailAddress}
                        onChange={(e) => setUserData({ ...userData, emailAddress: e.target.value })}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={handleFormSubmit}>
                    Gửi
                </Button> <br></br><br></br>
                <Button variant="primary" onClick={navigateToHome}>
                    Quay Lại Trang Chủ
                </Button>
            </Form>

            {/* Hiển thị thông báo lỗi bằng Toast */}
            <ToastContainer position="top-end" className="p-3">
                <Toast show={showToast} onClose={() => setShowToast(false)} delay={3000} autohide>
                    <Toast.Header>
                        <strong className="me-auto">Lỗi</strong>
                    </Toast.Header>
                    <Toast.Body>
                        {Object.values(validationErrors).map((error, index) => (
                            <div key={index} className="error-message">{error}</div>
                        ))}
                    </Toast.Body>
                </Toast>
            </ToastContainer>
        </Container>
    );
}

export default FormInput;