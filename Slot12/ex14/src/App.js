import { ThemeProvider } from './Components/ThemeContext';
import Theme from './Components/Theme';
import DishesList from './Components/DishesList';
import Cart from './Components/Cart';
import { CartProvider } from './Components/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <>
    <ThemeProvider>
      <Theme />
    </ThemeProvider>
    <CartProvider>
    <div style={{ padding: '20px' }}>
      <DishesList />
      <hr />
      <Cart />
    </div>
  </CartProvider>
  </>
  );
};

export default App;