import './App.css';
import DisplayInfo from './Components/DisplayInfo';
import SimpleReact from './Components/SimpleReact';
import CounterApplication from './Components/CounterApplication';
import CardFPT from './Components/CardFPT';


function App() {
  const cardData = {
    title: "Cong Minh - FPT DaNang",
    description: "Mobile: 0814033612",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/68/Logo_FPT_Education.png"
  };
  return (
    <>
    <DisplayInfo/>
    <SimpleReact/>
    <CounterApplication/>
    <div className="container mt-5">
      <CardFPT item={cardData} />
    </div>
    </>
  );
}

export default App;
