import './App.css';
import Counter from './Components/Counter';
import { useState } from 'react';
import ProductList from './Components/ProductList';
import SearchFilter from './Components/SearchFilter';


function App() {
  const [name, setName] = useState('Minh');
  const [age, setAge] = useState(20);
  return (
    <>
    <Counter/>
    ---------------------------------------------------------------------
    <div>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => {setName(e.target.value);
          console.log(e.target.value)
        }} 
      />
      <p>My name is {name}</p>
      <input 
        type="number" 
        value={age} 
        onChange={(e) => setAge(parseInt(e.target.value, 10))} 
      />
      <p>My age is {age}</p>
    </div>
    ---------------------------------------------------------------------
    <ProductList/>
    ---------------------------------------------------------------------
    <SearchFilter/>
    </>
  );
}

export default App;
