import logo from './logo.svg';
import './App.css';
import { Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home1 from './components/Home1';
import ProductList from './components/ProductList';
import ProductDetail1 from './components/ProductDetail1';
import Cart from './components/Cart';
import FormInput from './components/FormInput';

function App() {
  return (
    <Routes>
      <Route path="/home1" element={<Home1 />} />
      <Route path="/" element={<Login />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/:id" element={<ProductDetail1 />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/form" element={<FormInput />} />
    </Routes>
  );
}

export default App;
