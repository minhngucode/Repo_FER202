import React from "react";
import ClickCounter from "./Components/ClickCounter";
import MyAlert from "./Components/MyAlert";
import MyDropdown from "./Components/MyDropdown";
import MyModal from "./Components/MyModal";
import MyRadioButton from "./Components/MyRadioButton";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container mt-3">
      <h2>React Event Handling Examples</h2>
      <ClickCounter />
      <hr />
      <MyAlert />
      <hr />
      <MyDropdown />
      <hr />
      <MyModal/>
      <hr />
      <MyRadioButton />
    </div>
  );
}

export default App;
