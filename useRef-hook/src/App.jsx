import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import UseEffectOne from './pages/UseEffectOne'
import UseRefOne from './pages/UseRefOne'
import UseRefTwo from './pages/useRefTwo'
// import './App.css'

function App() {
  // debugger;
  const [count, setCount] = useState(0);

  useEffect(() => {
    // debugger;
    console.log("count rendered with value", count);
  });

  return (
    <>
      {/* <UseEffectOne /> */}
      {/* <button onClick={() =>  setCount(count + 1)}>Count: {count}</button> */}
      {/* <UseRefOne /> */}
      <UseRefTwo />
    </>
  )
}

export default App
