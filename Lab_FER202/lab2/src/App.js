import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Components/NavigationBar';
import Menu from './Components/Menu';
import Booking from './Components/Booking';
import Header from './Components/Header';


function App() {
  return (
    <div style={{ backgroundColor: '#333333', minHeight: '100vh', color: 'white' }}>
      <NavigationBar />
      <Header />
      <Menu />
      <Booking />
    </div>
  );
}

export default App;

