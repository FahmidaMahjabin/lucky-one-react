import React from "react";
import {useState, useEffect} from "react";
// import data.json from "../public/fakeData/data.json";
import './App.css';
import HowReactWorks from "./Components/AnswerQus/HowReactWorks";
import HowUseStateWorks from "./Components/AnswerQus/HowUseStateWorks";
import PropsVsState from "./Components/AnswerQus/PropsVsState";
import Container from "./Components/Container/Container";

function App() {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("data.json")
    .then(res => res.json())
    .then(data => setFoods(data))  
  }, [])
  
  return (
    <div>
      <h1 className = "text-center display-2 text-success">Food Fantasy</h1>
      <Container foods = {foods}></Container>
      <HowReactWorks></HowReactWorks>
      <PropsVsState></PropsVsState>
      <HowUseStateWorks></HowUseStateWorks>
      
    </div>
  )
}

export default App;
