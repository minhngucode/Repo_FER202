import './App.css';
import Welcome from './Components/Welcome';
import UserProfile from './Components/UserProfile';
import NameList from './Components/NameList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import StudentCard from './Components/StudentCard';
import student1 from './images/student1.jpg';
import student2 from './images/student2.jpg';
import student3 from './images/student3.jpg';





function App() {
  const userData = { name: "minhdc", age: 20 };
  const namesList = ["minhdc", "ngandtt"];
  const students = [
    { name: "minhdc", age: 20, avatar: student1 },
    { name: "ngandtt", age: 19, avatar: student2 },
    { name: "meowmeow", age: 18, avatar: student3},
  ];
  return (
    <>
      <Welcome name="Minh" />
      <UserProfile user={userData} />
      <NameList names={namesList} />
      <Container>
        <h1 className="my-4 text-center">Student information</h1>
        <Row>
          {/*Duyệt qua mảng students và truyền từng đối tượng student vào Student Card*/}
          {students.map((student, index) => (
            <Col key={index} sm={12} md={4}>
              <StudentCard student={student} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;
