import React from 'react';
import { increment, decrement, incrementByAmount, decrementByAmount } from './CounterSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
export default function CounterApp() {

    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    const [num, setNum] = useState(0);

    return (
        <div>
            <h1>Redux Counter App</h1>

            <button
                onClick={() => {
                    dispatch(increment())
                }}
            >Increment</button>
            <h1> {count} </h1>
            <button
                onClick={() => {
                    dispatch(decrement())
                }}
            >Decrement</button>
            <br />
            <input type="number" name="" value={num} onChange={(e) => { setNum(e.target.value) }} id="" />
            <button
                onClick={() => {
                    dispatch(incrementByAmount(Number(num)))
                }}
            >Increment By Amount</button>
            <button
                onClick={() => {
                    dispatch(decrementByAmount(Number(num)))
                }}
            >Decrement By Amount</button>
        </div>
    )
}
