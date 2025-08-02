import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sensor from './Sensor'

function App() {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)

  return (
    <>
      <h1>Vite + React + Tailwind CSS</h1> 
      <h1>{count}</h1>
      <button onClick={increment}>increment</button>
      <Sensor /> 
    </>
  )
}

export default App
