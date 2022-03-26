import React from "react";
import {useState, useEffect} from "react";
// import data.json from "../public/fakeData/data.json";
import './App.css';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("data.json")
    .then(res => res.json())
    .then(datas => {console.log(datas);
      return setData(datas)})
  
    
  }, [])
  
  return (
    <div>
      <h1>Welcome to page</h1>
      {data.map(item => <img src = {item.picture}></img>)}
    </div>
  )
}

export default App;
