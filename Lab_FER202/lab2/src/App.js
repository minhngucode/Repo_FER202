import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Menu from './Components/Menu';
import Booking from './Components/Booking';
import Header from './Components/Header';


function App() {
  return (
    <div style={{ backgroundColor: '#333333', minHeight: '100vh', color: 'white' }}>
      <Navbar />
      <Header />
      <Menu />
      <Booking />
    </div>
  );
}

export default App;
