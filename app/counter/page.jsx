"use client"

import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, selectCounter } from "./CounterSlice"

const Counter = () => {

  const { count } = useSelector(selectCounter);
  const dispatch = useDispatch();

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>++</button>
      <button onClick={() => dispatch(decrement())}>--</button>
    </>
  )
}

export default Counter