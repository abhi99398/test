import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [counter,setCounter]=useState(15)
  

  const add=()=>{
    // console.log("clicked" ,counter)
    // counter= counter + 1;
    setCounter(counter+1)
   
  }
const remove=()=>{
  
  // counter= counter - 1;
 setCounter(counter-1)
  
  // evaluated variables matlab already output define ho 
  
}
  return (
    <>
    <h1>hello this is deomo of usestate {counter}</h1>
    <button
    onClick={add}>add value {counter}</button>
    <br />
    <button onClick={remove}>remove value {counter}</button>
    </>
  )
}

export default App
