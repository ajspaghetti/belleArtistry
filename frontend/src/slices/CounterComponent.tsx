import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incremented, decremented } from './counterSlice';

export const CounterComponent = () => {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(incremented())}>Increment</button>
      <button onClick={() => dispatch(decremented())}>Decrement</button>
    </div>
  );
};
