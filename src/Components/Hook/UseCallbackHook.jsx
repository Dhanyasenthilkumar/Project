import React from 'react'
import { useCallback } from 'react';
import { useRef } from 'react';
import { useState } from 'react'

export default function UseCallbackHook() {

    const [color, setColor] = useState("");
    const dispColor = useRef()

    const handleChangeColor = useCallback((e) => {
        e.preventDefault();

        dispColor.current.style.background  = color;
    },[color]);
    
    return (
        <div ref={dispColor} style={{position:"absolute",width:"100%",height:"100%"}}>
            <form onSubmit={handleChangeColor}>
                <label htmlFor="">Enter Color</label>
                <input type="text" onChange={(e) => { setColor(e.target.value) }} name="" placeholder='HEX, Name, RGB' id="" />
            </form>
        </div>
    )
}
