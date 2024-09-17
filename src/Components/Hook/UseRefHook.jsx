import React, { useRef } from 'react'

export default function UseRefHook() {

    const InpRef = useRef(null);
    const disp = useRef()

    function handleClick(){
        console.log(InpRef.current.value);
        disp.current.innerHTML = InpRef.current.value

        disp.current.style.background = '#'+Math.random().toString(16).substr(-6);
        disp.current.style.color = '#'+Math.random().toString(16).substr(-6);
    }

  return (
    <div>
        <label htmlFor="">Enter Text:</label>
        <input ref={InpRef} type="text" name="" id="" />
        <button onClick={handleClick}>Send</button>
        <h1 ref={disp}>demo</h1>
    </div>
  )
}
