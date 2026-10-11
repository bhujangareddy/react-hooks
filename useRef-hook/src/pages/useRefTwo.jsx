import React, { useRef, useState } from 'react'

const UseRefTwo = () => {
    const [myNum, setMyNum] = useState(0);

    const inputOne = useRef(0);
    const inputTwo = useRef(0);

    const getNumBox = () => {
        console.log("Hello");
        console.log(inputOne.current);
        inputOne.current.style.width = "400px";
    }

    const getTextBox = () => {
        console.log("World");
        console.log(inputTwo.current);
    }

    return (
        <>
            <h2>Learn code online</h2> 
            <input 
                ref={inputOne} 
                value={myNum} 
                type='number' 
                style={{ width: "100px" }}
                onChange={e => setMyNum(e.target.value)} 
            />
            <input 
                ref={inputTwo}
                value={myNum} 
                type='text' 
                onChange={e => setMyNum(e.target.value)} 
            />
            <h3>Value is : {myNum}</h3>

            <button onClick={() => getNumBox()}>Rupees</button>
            <button onClick={() => getTextBox()}>Dollars</button>
        </>
    )
}

export default UseRefTwo
