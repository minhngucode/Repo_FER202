import React, { useReducer } from 'react';
import { Container, Button, Card } from 'react-bootstrap';

const initialState = { count: 0 };

function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <Container fluid className="App">
      <Card className="counter-card">
        <h1 className="counter-title">Counter: {state.count}</h1>
        <div>
          <Button 
            className="m-2" 
            onClick={() => dispatch({ type: 'INCREMENT' })}
          >
            +
          </Button>
          <Button 
            className="m-2" 
            onClick={() => dispatch({ type: 'DECREMENT' })}
          >
            -
          </Button>
          <Button 
            variant="secondary" 
            className="m-2" 
            onClick={() => dispatch({ type: 'RESET' })}
          >
            Reset
          </Button>
        </div>
      </Card>
    </Container>
  );
}

export default Counter;