import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App(){
  let [counter,setCounter]= useState(0)

  const incriment = ()=>{
    setCounter(counter+1)
    console.log(counter);
  }

  const decriment = ()=>{
    if(counter>0)
    setCounter(counter-1)
    console.log(counter);
  }
  return(

    <>
      <h1 style={{color:counter>0?"green":"red"}}>counter:{counter}</h1>
      <button style={{color:counter>10?"yellow":"white"}} onClick={incriment}>Add values</button>
      <button disabled={counter>0?false:true} style={{color:counter>10?"yellow":"white"}}onClick={decriment}>Remove values</button>
    </>



  )
} 