import React, { useReducer } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
function formReducer(state, action) {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.value };
    case 'SET_AGE':
      return { ...state, age: action.value };
    default:
      return state;
  }
}
function ChangeNameAge() {
  const [state, dispatch] = useReducer(formReducer, { name: '', age: '' });
  const handleNameChange = (e) => {
    dispatch({ type: 'SET_NAME', value: e.target.value });
  };
  const handleAgeChange = (e) => {
    dispatch({ type: 'SET_AGE', value: e.target.value });
  };
  return (
    <Container fluid className="App">
      <Card className="form-card">
        <Form>
          <Form.Group controlId="formName">
            <Form.Label className="form-label">Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={state.name}
              onChange={handleNameChange}
              className="form-control"/>
          </Form.Group>
          <Form.Group controlId="formAge" className="mt-3">
            <Form.Label className="form-label">Age:</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter age"
              value={state.age}
              onChange={handleAgeChange}
              className="form-control"/>
          </Form.Group>
          {/* <Button variant="primary" className="mt-3" type="button">
            Submit
          </Button> */}
        </Form>
        <hr />
        <h4 className="preview-title">Preview:</h4>
        <p className="preview-text">Name: {state.name}</p>
        <p className="preview-text">Age: {state.age}</p>
      </Card>
    </Container>
  );
}
export default ChangeNameAge;