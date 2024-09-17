import React from 'react'
import ChildProp from './ChildProp';

export default function ParentProp() {
    const arr = ["Hunter","Scram","GT","Gureilla","Classic"];
  return (
    <div>
        <h1>Parent File..!</h1>
        <ol>
            {
                arr.map((item,index)=>{
                    return(
                        <li key={index}>{item}</li>
                    )
                })
            }
        </ol>
        <ChildProp RE={arr} />
    </div>
  )
}
