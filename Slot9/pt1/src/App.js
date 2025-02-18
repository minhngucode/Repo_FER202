import './App.css';
import Banner from './Components/Banner';
import Header from './Components/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import StudentList from './Components/StudentList';
import Footer from './Components/Footer';


function App() {
  return (
    <>
      <Header/>
      <Banner/>
      <StudentList/>
      <Footer/>
    </>
  );
}

export default App;
