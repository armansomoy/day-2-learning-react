import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Person></Person>
    <Student></Student>
     
    </>
  )
}

function Person() {
  
  const age = 25;
  const money = 20;
  const person = {name: 'saib', age: 12} 
  return <h3>I am a {person.name} with age {age + money}</h3>
}

function Student() {
  return ( <>
  <p>THis is a studen</p>
  
  </>)
}
export default App
