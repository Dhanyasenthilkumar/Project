import React, { useReducer } from 'react'

export default function UseReducerHook() {

  const data = {
    Name:"",
    Email:"",
    Phone:""
  }

  const [state,dispatch] = useReducer(reduce,data);

  function reduce(ins,outs){
    if(outs.type === "cgtext"){
      return{
        ...ins,
        [outs.field]:outs.vals
      }
    }
    else{
      return false;
    }
  }

  function handleChangeText(e){
    const {name,value} = e.target;

    dispatch({
      type:"cgtext",
      field:name,
      vals:value
    })

  }

  return (
    <div>
      <label htmlFor="">Name</label>
      <input
        type="text"
        name="Name"
        value={state.Name}
        onChange={handleChangeText}
        id=""
      />

      <label htmlFor="">Email</label>
      <input
        type="email"
        name="Email"
        value={state.Email}
        onChange={handleChangeText}
        id=""
      />

      <label htmlFor="">Phone</label>
      <input
        type="number"
        name="Phone"
        value={state.Phone}
        onChange={handleChangeText}
        id=""
      />

      <h1>
        Name : {state.Name} <br />
        Email : {state.Email} <br />
        Phone : {state.Phone}
      </h1>
    </div>
  )
}
