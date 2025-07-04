import './App.css'
import { useState } from 'react';

function App() {
  const [counter, setCount] = useState(0);

  function handleClick(num) {
    num < 0 ? alert("Numbers are not allowed to decrease less then 0") : setCount(num)
  }

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-50">
      <div className="flex flex-col justify-evenly items-center w-[400px] h-[300px] bg-blue-300 rounded-xl">
        <h1 className="text-6xl">{counter}</h1>

        <div className="flex gap-5">
          <button className="text-2xl bg-gray-200 p-4 py-2 rounded-xl" onClick={() => handleClick(counter - 1)}>-</button>
          <button className="text-xl bg-gray-200 p-4 py-2 rounded-xl" onClick={() => handleClick(0)}>Reset</button>
          <button className="text-xl bg-gray-200 p-4 py-2 rounded-xl" onClick={() => handleClick(counter + 1)}>+</button>
        </div>
      </div>
    </div>
  )
}

export default App
