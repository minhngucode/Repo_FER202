// src/components/Login1.js
import React, { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Alert, Row, Col } from 'react-bootstrap';

// Khởi tạo state ban đầu cho form đăng nhập
const initialLoginState = {
  loginName: '',
  loginPass: '',
  loginError: '',
};

// Hàm reducer để quản lý state
const loginReducer = (state, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, loginName: action.payload };
    case 'SET_PASS':
      return { ...state, loginPass: action.payload };
    case 'SET_ERROR':
      return { ...state, loginError: action.payload };
    default:
      return state;
  }
};

function Login() {
  const [state, dispatch] = useReducer(loginReducer, initialLoginState);
  const navigate = useNavigate();

  // Hàm xử lý khi người dùng nhấn nút đăng nhập
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const { loginName, loginPass } = state;

    // Kiểm tra xem người dùng đã nhập đủ thông tin chưa
    if (!loginName || !loginPass) {
      dispatch({ type: 'SET_ERROR', payload: 'Vui lòng nhập đầy đủ thông tin!' });
      return;
    }

    // Gọi API để kiểm tra thông tin đăng nhập
    fetch('http://localhost:9999/UserAccounts')
      .then((res) => res.json())
      .then((data) => {
        console.log('data user: ',data);
        const userFound = data.find(
          (u) => u.username === loginName && u.password === loginPass
        );
        if (userFound) {
          alert('Đăng nhập thành công!');
          dispatch({ type: 'SET_ERROR', payload: '' });
          navigate('/home1');
        } else {
          dispatch({ type: 'SET_ERROR', payload: 'Tên đăng nhập hoặc mật khẩu không đúng!' });
        }
      })
      .catch(() => dispatch({ type: 'SET_ERROR', payload: 'Đã có lỗi xảy ra!' }));
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="text-center mb-4">Đăng Nhập</h2>
          {/* Hiển thị thông báo lỗi nếu có */}
          {state.loginError && <Alert variant="danger">{state.loginError}</Alert>}
          <Form onSubmit={handleLoginSubmit}>
            <Form.Group className="mb-3" controlId="loginName">
              <Form.Label>Tên Đăng Nhập</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập tên đăng nhập"
                value={state.loginName}
                onChange={(e) =>
                  dispatch({ type: 'SET_NAME', payload: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="loginPass">
              <Form.Label>Mật Khẩu</Form.Label>
              <Form.Control
                type="password"
                placeholder="Nhập mật khẩu"
                value={state.loginPass}
                onChange={(e) =>
                  dispatch({ type: 'SET_PASS', payload: e.target.value })
                }
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Đăng Nhập
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;