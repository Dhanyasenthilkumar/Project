import React from 'react'

export default function ChildProp(prop) {
    const data = prop.RE;
  return (
    <div>
        <h1>ChildProp</h1>

        <ul>
            {
                data.map((item,index)=>{
                    return(
                        <li key={index}>{item}</li>
                    )
                })
            }
        </ul>
    </div>
  )
}
