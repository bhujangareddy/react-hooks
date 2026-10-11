import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  debugger;
  const [count, setCount] = useState(0)

  const increaseCount = () => {
    setCount(count + 1);
  }

  useEffect(() => {
    debugger;
    console.log("count is changed", count);
  }, []);

  return (
    <>
      <h4>Count: {count}</h4>
      <button onClick={increaseCount}>Increase count</button>
    </>
  )
}

export default App
