import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './Components/Counter.js';
import QuestionBank from './Components/QuestionBank.js';
import ChangeNameAge from './Components/ChangeNameAge.js';
import ItemList from './Components/ItemList.js';
import { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function App() {
  const [activeTab, setActiveTab] = useState("Counter");

  const renderComponent = () => {
    switch (activeTab) {
      case "Counter":
        return <Counter />;
      case "ChangeNameAge":
        return <ChangeNameAge />;
      case "ItemList":
        return <ItemList />;
      case "QuestionBank":
        return <QuestionBank />;
      default:
        return <Counter />;
    }
  };

  return (
    <>
      <Navbar bg="dark" expand="md" className="flex-column p-3">
        <Navbar.Brand className="mx-auto">My React App</Navbar.Brand>

        <Nav variant="tabs" className="w-100 justify-content-center">
          <Nav.Link
            active={activeTab === "Counter"}
            onClick={() => setActiveTab("Counter")}
          >
            Counter
          </Nav.Link>
          <Nav.Link
            active={activeTab === "ChangeNameAge"}
            onClick={() => setActiveTab("ChangeNameAge")}
          >
            Change Name & Age
          </Nav.Link>
          <Nav.Link
            active={activeTab === "ItemList"}
            onClick={() => setActiveTab("ItemList")}
          >
            Item List
          </Nav.Link>
          <Nav.Link
            active={activeTab === "QuestionBank"}
            onClick={() => setActiveTab("QuestionBank")}
          >
            Question Bank
          </Nav.Link>
        </Nav>
      </Navbar>

      <Container className="mt-4">
        {renderComponent()}
      </Container>
    </>
  );
}

export default App;