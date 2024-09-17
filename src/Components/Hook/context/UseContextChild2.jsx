import React from 'react'
import { dat } from './UseContextParent'
import { useContext } from 'react';
export default function UseContextChild2() {
    const data = useContext(dat)
    return (
    <div>
        <h1>child 2</h1>
        <ol>
            {
                data.map((item)=>{
                    return(
                        <li>{item}</li>
                    )
                })
            }
        </ol>
    </div>
  )
}
