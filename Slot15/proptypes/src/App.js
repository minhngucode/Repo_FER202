import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import UserProfile from './Components/UserProfile';
import UserProfile2 from './Components/UserProfile2';
import MyForm from './Components/MyForm';
import ValidationForm from './Components/ValidationForm';

function App() {
  const handleFormSubmit = (formData) => {
    console.log("Dữ liệu đã gửi:", formData);
  };

  return (
    <Container className="my-5">
      <h1 className="text-center mb-5">Ứng Dụng React - Form Validation</h1>

      <Row className="mb-4">
        <Col>
          <Card className="shadow-lg p-4">
            <Card.Body>
              <Card.Title>Thông Tin Người Dùng (UserProfile)</Card.Title>
              <UserProfile name="Nguyễn Văn A" age={25} />
              <UserProfile name="" age={25} />
              <UserProfile name="Nguyễn Văn B" age="twenty five" />
              <UserProfile name="Nguyễn Văn C" age={null} />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <Card className="shadow-lg p-4">
            <Card.Body>
              <Card.Title>Form Kiểm Tra Người Dùng (UserProfile2)</Card.Title>
              <UserProfile2 name="Nguyễn Văn A" age={25} onSubmit={handleFormSubmit} />
              <UserProfile2 name="Nguyễn Văn B" age="twenty five" onSubmit={handleFormSubmit} />
              <UserProfile2 name="" age={30} onSubmit={handleFormSubmit} />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={8} className="mx-auto">
          <Card className="shadow-lg p-4">
            <Card.Body>
              <Card.Title>Đăng Ký Người Dùng (MyForm)</Card.Title>
              <MyForm title="Đăng Ký Người Dùng" onSubmit={handleFormSubmit} />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={8} className="mx-auto">
          <Card className="shadow-lg p-4">
            <Card.Body>
              <Card.Title>Form Kiểm Tra Thông Tin (ValidationForm)</Card.Title>
              <ValidationForm onSubmit={handleFormSubmit} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
