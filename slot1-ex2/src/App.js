import logo from './logo.svg';
import './App.css';

function App() {
  const arrPeople = [
    { name: 'minh', age: 20 },
    { name: 'son', age: 21 },
    { name: 'huan', age: 22 },
    { name: 'khang', age: 19 },
    { name: 'ngan', age: 20 }
  ]
  return (
    <>
    <h1>List people</h1>
      {
        arrPeople.map((people, index) => (
          <ul>
            <h4>
              Stt: {index + 1}
            </h4>
            <li>
              name is {people.name}
            </li>
            <li>
              age is {people.age}
            </li>
          </ul>
        ))
      }
    </>
  );
}

export default App;
