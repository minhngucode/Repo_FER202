import logo from './logo.svg';
import './App.css';
import './ex4.scss';
import React, { useState } from 'react'
import Rectangle from "./Rectangle";
import Triangle from "./Triangle";


function App() {
  const courseName = ["React", "ReactNative", "NodeJs"]

  var people = [
    { name: 'Jack', age: 50 },
    { name: 'Michael', age: 9 },
    { name: 'John', age: 40 },
    { name: 'Ann', age: 19 },
    { name: 'Elisabeth', age: 16 }
  ]
  const arrTeenager = people.filter(people => people.age >= 10 && people.age <= 20)
  // console.log({arrTeenager})

  const checkFullTeen = () => {
    if (arrTeenager.length === people.length) return true
    else return false
  }

  var array = [1, 2, 3, 4]


  const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
  ];

  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  const person = {
    name: "Costas",
    address: {
      street: "Lalaland 12"
    }
  };
  const { address: { street } } = person;
  
  const companyNamesAfter1987 = companies.filter(company => company.start > 1987)
  const companyHaveRetail = companies.filter(company => company.category === "Retail")
  const companySortByEndDate = [...companies].sort((a, b) => a.end - b.end)
  const agesSort = [...ages].sort((a, b) => b - a)
  const sumAge = ages.reduce((sum, age) => sum + age, 0)
  const newCompany = {
    ...companies[0],
    printName() {
      console.log(this.name)
    }
  }
  const sumNumber = (...numbers) => numbers.reduce((total, num) => total + num, 0)
  const copyToArr = (...args) => {
    const resultArr = []
    args.forEach(args => {
      if (Array.isArray(args)) {
        resultArr.push(...args)
      } else {
        resultArr.push(args)
      }
    })
    return resultArr
  }

  const [count, setCount] = useState(0)
  const handleCount = () => {
    setCount(count + 1)
  }

  const url = "https://translate.google.com/?hl=vi&sl=en&tl=vi&op=translate"
  const [parsedParams, setParsedParams] = useState({});
  const handleParseUrl = () => {
    const queryString = url.split('?')[1]
    if (!queryString) {
      setParsedParams({})
      return;
    }
    const pairs = queryString.split('&')
    const queryParams = {}
    pairs.forEach(pair => {
      const [key, value] = pair.split('=')
      queryParams[key] = value
    })
    setParsedParams(queryParams)
  }

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      <div style={{ textAlign: "center" }}>
        <p style={{ fontSize: "3rem" }}> Hello <span style={{ fontWeight: "bold", color: "blue" }}>React</span></p>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div style={{ padding: "20px", display: "inline-block", borderRadius: "10px" }}>
          <img src={logo} alt="logo" style={{ width: "250px", height: "250px" }} />
          <p style={{color: "#23D6FE"}}>This is the React logo!</p>
          <p style={{ fontStyle: "italic", fontSize: "0.8rem" }}>
            (I don’t know why it is here either)
          </p>
          <p style={{ fontSize: "1rem", marginTop: "10px" }}>
            The library for web and native user interfaces
          </p>
        </div>
      </div>
      <div className="navbar-container">
        <nav className="navbar">
          <a href="#home" className="nav-link home-link">
            Home
          </a>
          <a href="#search" className="nav-link">
            Search
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
          <a href="#login" className="nav-link login-link">
            Login
          </a>
        </nav>
      </div>
      <h1 style={{ textAlign: "center", color: "blue" }}>This is JSX</h1>
      <h1>Course Name</h1>
      <ul>
        {courseName.map((name, index) => (
          <li key={index}>
            {name}
          </li>
        ))}
      </ul>
      <br></br><br></br><br></br>
      ______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
      <h1>First teenager:</h1>
      <p>{arrTeenager[0]?.name || "No Teenager Found"}</p>
      ____________________________________________________
      <h1>All teenager:</h1>
      <ul>
        {arrTeenager.map((people, index) => (
          <li key={index}>
            {people.name}
          </li>
        ))}
      </ul>
      ____________________________________________________
      <h1>
        Every person of the people array is teenager: {checkFullTeen() ? "true" : "false"}
      </h1>
      ____________________________________________________
      <h1>
        Any person of the people array is teenager: {!checkFullTeen() ? "true" : "false"}
      </h1>
      ____________________________________________________
      <h3>
        Reducing array to a single value: <br></br>
        answer 2.1: {array.reduce((sum, num) => sum = sum + num, 0)} <br></br>
        answer 2.2: {array.reduce((mul, num) => mul = mul * num, 1)}
      </h3>
      ____________________________________________________
      <h1>Company Name</h1>
      <ul>
        {companies.map((companies, index) => (
          <li key={index}>
            {companies.name}
          </li>
        ))}
      </ul>
      <h1>Company started after 1987</h1>
      <ul>
        {companyNamesAfter1987.map((company, index) => (
          <li key={index}>
            {company.name} - {company.start}
          </li>
        ))}
      </ul>
      <h1>Companies have category Retail</h1>
      <table border="1" style={{ width: "35%", textAlign: "center" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Start Year</th>
            <th>End Year</th>
          </tr>
        </thead>
        <tbody>
          {companyHaveRetail.map((company, index) => (
            <tr key={index}>
              <td>{company.name}</td>
              <td>{company.category}</td>
              <td>{company.start + 1}</td>
              <td>{company.end}</td>
            </tr>
          ))}
        </tbody>
      </table>
      ____________________________________________________
      <h1>Company Sort By End Date</h1>
      <ul>
        {companySortByEndDate.map((company, index) => (
          <li key={index}>
            {company.name} - {company.end}
          </li>
        ))}
      </ul>
      ____________________________________________________
      <h1>Sort Age</h1>
      {agesSort.map((age, index) => (
        <p key={index}>
          {age}
        </p>
      ))}
      ____________________________________________________
      <h1>Sum of age: <span>{sumAge}</span></h1>

      ____________________________________________________
      <h1>New Company Object</h1>
      <p>Company Name: {newCompany.name}</p>
      <p>Category: {newCompany.category}</p>
      ____________________________________________________
      <h1>Sum numbers</h1>
      <p>
        Sum of 10, 20, 30, 40, 50 is: {sumNumber(10, 20, 30, 40, 50)}
      </p>
      ____________________________________________________
      <h1>Add To Array</h1>
      <p>{JSON.stringify(copyToArr(1, 2, [3, 4], 5, [6, 7], "hello"))}</p>
      ____________________________________________________
      <h3>Destructuring the property street: {street}</h3>
      ____________________________________________________
      <h1>Increment Counter</h1>
      <button onClick={handleCount}>Click me: {count}</button> <br></br>
      ____________________________________________________
      <p> Input: "https://translate.google.com/?hl=vi&sl=en&tl=vi&op=translate" </p>
      <button onClick={handleParseUrl}>
        Parse Url
      </button>
      <p>Output:</p>
      <pre>{JSON.stringify(parsedParams, null, 2)}</pre>
      ____________________________________________________
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>Shape Area Calculator</h1>
        <Rectangle color="Red" length={10} width={5} />
        <Triangle color="Blue" base={8} height={6} />
      </div>
    </>
  );
}



export default App;