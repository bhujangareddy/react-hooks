import React from 'react'
import { useState, useEffect, useRef } from 'react';

const UseEffectOne = () => {
    const [name, setName] = useState("");
    // useRef is similar to useState
    // But it won't re-render like state variables does when they changed
    // useRef is used to persist the values b/w re-renders
    // useRef only returns one value (here it is renderCount - i.e., it doesn't have any setter function)
    // 
    // const renderCount = useRef(0); // here the zero is stored in an object with key current- { current: 0 }
    // here, renderCount is an object with single property or key named 'current'

    // useEffect(() => {
    //   renderCount.current = renderCount.current + 1;
    // });

    const inputRef = useRef();

    function focus() {
        // console.log(inputRef.current);
        inputRef.current.focus();
        // We can access the attribute or props of inputRef(i.e., here input component) like variables, functions etc.
        // But never manually set the values like below with ref
        // Because it makes code harder to read and update later

        // inputRef.current.value = "Some text"
    }

    // One more usecase of useRef is to use previous value of state
    const prevName = useRef("")

    useEffect(() => {
        prevName.current = name;
    }, [name]);

    // Notes of useRef:
    // 1. It is used to access DOM elements(i.e., attribtes or props or functions)
    // 2. They are also useful for persisting values across renders without actually causing re-render
    return (
        <>
            <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} placeholder='Enter your name' />
            <div>My Name is {name}</div>
            <div>But, It used to be {prevName.current}</div>
            {/* <div>I rendered {renderCount.current} times</div>  */}
            <button onClick={focus}>focus</button>
        </>
    )
}

export default UseEffectOne;
