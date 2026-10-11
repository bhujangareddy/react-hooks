import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'


// Ref means heap memory reference
let list = [];

// useRef(10) => { current: 10 }

function App() {
  const [count, setCount] = useState(10);
  // On every re-render of App componnet below user object will be re-intialized with new address in memory
  const user = { name: "Nani", age: 23 };
  // 1st render user #400
  // 2nd render user #500

  list.push(user);

  if(list.length === 2) {
    console.log(list);

    console.log(list[0] === list[1]); // false, beacuse the two intialized user objects will get stored in two different addresses
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

export default App
