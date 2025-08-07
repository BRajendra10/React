import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../features/counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[25rem] h-[20rem] flex flex-col justify-around items-center shadow-2xl rounded-xl gap-5 px-5 py-10">
        <h1 className="text-4xl">{count}</h1>

        <div className="flex gap-5">
          <button className="px-5 py-3 text-xl rounded-lg bg-gray-200" onClick={() => dispatch(increment())}>+1</button>
          <button className="px-5 py-3 text-xl rounded-lg bg-gray-200" onClick={() => dispatch(decrement())}>-1</button>
        </div>
      </div>
    </div>
  )
}

export default Counter