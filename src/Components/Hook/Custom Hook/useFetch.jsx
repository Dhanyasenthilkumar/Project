import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function useFetch(api) {
    const[data,setData] = useState([]);

    useEffect(()=>{
        fetch(api)
        .then((res)=>{return res.json()})
        .then((data)=>{setData(data)});
    },[api]);
  return [data];
}
