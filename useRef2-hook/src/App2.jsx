import { useRef, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'


// Ref means heap memory reference
let list = [];

// useRef(null) => { current: null }

function App2() {
  const [count, setCount] = useState(10);

  const userRef = useRef({ name: "Nani", age: 23 });

  console.log(userRef);


  list.push(userRef);

  if(list.length === 2) {
    console.log(list);

    console.log(list[0] === list[1]); // true, beacuse useRef hook will treat the user object as only single user object and will point to same address
  }


  const increaseCount = () => {
    setCount(count + 1);
  }


  return (
    <>
      <h2>Count: {count}</h2>

      <button onClick={increaseCount}>Increase Count</button>
    </>
  )
}

export default App2
