import './App.css';
import AnimalCard from "./Components/AnimalCard";
import animals from "./Components/data";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";


function App() {
  const showAdditionalData = (additional) => {
    const formattedData = Object.entries(additional)
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");
    alert(formattedData);
  };
  return (
    <>
      <Container className="mt-4">
      <h1 className="text-center mb-4">Animal Information</h1>
      <Row className="justify-content-center">
        {animals.map((animal) => (
          <Col key={animal.name} md={4} sm={6} xs={12} className="mb-4 d-flex">
            <AnimalCard
              image={animal.image}
              name={animal.name}
              scientificName={animal.scientificName}
              size={animal.size}
              diet={animal.diet}
              additional={animal.additional}
              showAdditional={showAdditionalData}
            />
          </Col>
        ))}
      </Row>
    </Container>
    </>
  );
}

export default App;
