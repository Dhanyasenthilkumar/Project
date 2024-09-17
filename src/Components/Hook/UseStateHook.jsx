import React from 'react'
import { useState } from 'react'

export default function UseStateHook() {
  
    /* 
        const [VAR1, VAR2] = useState(initial value);

        VAR1 => stores updated or current state
        VAR2 => helps to update the current state
    */

        const [count,setCount] = useState(0);

        function incValue(){
            setCount(count+1)
        }
        function decValue(){
            setCount(count-1)
        }

        const [text,setText] = useState("");
    return (
    <div>
        <h1>UseState Demo</h1>

        <h1>{count}</h1>
        <button
            onClick={decValue}
        >Decrement</button>

        <button
            onClick={()=>{
                setCount(0)
            }}
        >Reset</button>
        
        <button
            onClick={incValue}
        >Increment</button>
        <br /><br />
        
        <label htmlFor="">text</label>
        <input type="text" name="" id="" onChange={(e)=>{setText(e.target.value)}} />
        
        <h1>result : {text}</h1>
    </div>
  )
}
