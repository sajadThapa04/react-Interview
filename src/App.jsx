import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(4)
  const add = () => {
    setCount(prevCounter => prevCounter + 1);
    setCount(prevCounter => prevCounter + 1);
    setCount(prevCounter => prevCounter + 1);
    setCount(prevCounter => prevCounter + 1);
    
  }

  const remove = () => {
    if (count <= 0) {
      setCount(0);
    }
    else {
      setCount(count - 1);

    }
  }
  return (
    <>
      <h1>Counting: {count}</h1>
      <button onClick={add}>Add</button>
      <button onClick={remove}>Remove</button>

    </>
  )
}

export default App
