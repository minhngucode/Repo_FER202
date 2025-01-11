import logo from './logo.svg';
import './App.css';

function App() {
  const people = {
    name: `minh`,
    age: 20
  }
  return (
    <h1>age of {people.name} is: {people.age}</h1>
  );
}

export default App;
