import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../slices/countersilces';

function Counter() {
    const dispatch = useDispatch();
    const counterValue = useSelector((state) => state.counter.value); 
    const [amount, setAmount] = useState(0); // State for input value

    return (
        <div>
            <h1>Counter: {counterValue}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>

            <div>
                <input 
                    type="number" 
                    value={amount} 
                    onChange={(e) => setAmount(Number(e.target.value))} 
                    placeholder="Enter amount"
                />
                <button onClick={() => dispatch(incrementByAmount(amount))}>Increment By Amount</button>
            </div>
        </div>
    );
}

export default Counter;
