import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react'

export default function UseMemoHook() {
    const [num,setNum] = useState(0);
    const loop = useMemo(()=>{
        var nums = 0;
        for(let i=0;i<num;i++){
            nums+=num*12
        }
        return nums
    },[num])
  return (
    <div>
        <label htmlFor="">Enter Num</label>
        <input type="text" onChange={(e) => { setNum(e.target.value) }} name="" placeholder='' id="" />

        <h1>
            result : {num} <br />
            loop : {loop}
        </h1>
    </div>
  )
}
