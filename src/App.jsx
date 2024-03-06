import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import Todo from "Todo.js";
import Todo from "./Todo.jsx";
import Actor from "./Actor.jsx";
import Singer from "./Singer.jsx";
import BookStore from "./BookStore.jsx";
import Book from "./Book.jsx";

function App() {
  const singers = [
    { name: "arijhit", age: 36, id: 1 },
    { name: "eva rahman", age: 55, id: 2 },
    { name: "Akash", age: 12, id: 3 },
    { name: "Pritom", age: 28, id: 4 },
  ];
  const actors = ["shakib", "srk", "jasim", "rubel"];

  const books = [
    {id: 1, name: "physics", price: 500},
    {id: 2, name: "math", price: 600},
    {id: 3, name: "english", price: 800},
    {id: 4, name: "Biology", price: 200},
  ]

  return (
    <>
    <BookStore books={books}></BookStore>
      {/* {singers.map((singer) => (
        <Singer singer={singer}></Singer>
      ))} */}
      {/* {actors.map((actor) => (
        <Actor name={actor}></Actor>
      ))}
      <Actor name={"Arman"}></Actor> */}
      {/* <Todo task="Learn React" isDone={true}></Todo>
    <Todo task="Explore Core Concepts" isDone={false}></Todo>
    <Todo task="Try JSX" isDone={true}></Todo> */}
      {/* <Device name="laptop" price="55000"></Device>
      <Device name="mobile" price="10000"></Device>
      <Device name="watch" price="3000"></Device>
      <Person></Person>
      <Student grade="7" score="99"></Student>
      <Student grade={12} score="99"></Student>
      <Student grade={10} ></Student>
      <Developer></Developer> */}
    </>
  );
}

function Device(props) {
  console.log(props);
  return <h2>This Device: {props.name}</h2>;
}

function Person() {
  const age = 25;
  const money = 20;
  const person = { name: "saib", age: 12 };
  return (
    <h3>
      I am a {person.name} with age {age + money}
    </h3>
  );
}

function Developer() {
  const developerStyle = {
    margin: "20px",
    padding: "20px",
    border: "1px solid purple",
    borderRadius: "10px",
  };
  return (
    <div style={developerStyle}>
      <h2>Developer</h2>
      <p>Coding</p>
    </div>
  );
}

function Student({ grade, score = 0 }) {
  console.log(grade, score);
  return (
    <div className="student">
      <p>THis is a student </p>
      <p>Grade: {grade} </p>
      <p>Score: {score} </p>
    </div>
  );
}
export default App;
