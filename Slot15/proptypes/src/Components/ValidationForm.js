import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Button, Container, Alert } from "react-bootstrap";

const ValidationForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    gender: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name || formData.name.length < 3 || formData.name.length > 50) {
      newErrors.name = "Tên phải có từ 3 đến 50 ký tự!";
    }

    const age = parseInt(formData.age, 10);
    if (!formData.age) {
      newErrors.age = "Tuổi không được để trống!";
    } else if (isNaN(age) || age < 18 || age > 100) {
      newErrors.age = "Tuổi phải nằm trong khoảng 18-100!";
    }

    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email không hợp lệ!";
    }

    if (!formData.phone || !/^\d{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Số điện thoại phải có 10-15 chữ số!";
    }

    if (!["Nam", "Nữ", "Khác"].includes(formData.gender)) {
      newErrors.gender = "Giới tính phải là Nam, Nữ hoặc Khác!";
    }

    if (!formData.terms) {
      newErrors.terms = "Bạn phải đồng ý với điều khoản!";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <Container>
      <h3>Đăng ký người dùng</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Tên</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label>Tuổi</Form.Label>
          <Form.Control
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            isInvalid={!!errors.age}
          />
          <Form.Control.Feedback type="invalid">{errors.age}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label>Số điện thoại</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            isInvalid={!!errors.phone}
          />
          <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label>Giới tính</Form.Label>
          <Form.Control
            as="select"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            isInvalid={!!errors.gender}
          >
            <option value="">Chọn giới tính</option>
            <option value="Nam">Nam</option>
            <option value="Nữ">Nữ</option>
            <option value="Khác">Khác</option>
          </Form.Control>
          <Form.Control.Feedback type="invalid">{errors.gender}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Check
            type="checkbox"
            label="Đồng ý với điều khoản"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
            isInvalid={!!errors.terms}
          />
          <Form.Control.Feedback type="invalid">{errors.terms}</Form.Control.Feedback>
        </Form.Group>

        <Button type="submit">Gửi</Button>
      </Form>
    </Container>
  );
};

ValidationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ValidationForm;
