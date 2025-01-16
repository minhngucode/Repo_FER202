import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NamePerson from './Components/NamePerson';
import PersonList from './Components/PersonList';
import Exercise2 from './Components/Exercise2';
import Exercise4 from './Components/Exercise4';
import FirstTeenager from './Components/FirstTeenager';
import AreAllTeenagers from './Components/AreAllTeenagers';
import Exercise7 from './Components/Exercise7';
import Exercise8 from './Components/Exercise8';
import Exercise9 from './Components/Exercise9';
import Exercise10 from './Components/Exercise10';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <NamePerson/>
    <Exercise2/>
    <PersonList/>
    <Exercise4/>
    <FirstTeenager/>
    <AreAllTeenagers/>
    <Exercise7/>
    <Exercise8/>
    <Exercise9/>
    <Exercise10/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
