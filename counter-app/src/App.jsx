import './App.css'
import { useState } from 'react';

function App() {
  const [counter, setCount] = useState(1);

  function handleClick(num){
    if(num >= 20 || num <= 0){
      alert("Numbers are not allowed to increase/decrease more")
    }else{
      setCount(num)
    }
  }

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-50">
      <div className="flex flex-col justify-evenly items-center w-[400px] h-[300px] bg-blue-200">
        <h1 className="text-6xl">{counter}</h1>

        <div className="flex gap-5">
          <button className="text-xl bg-gray-200 p-4 py-2 rounded-xl" onClick={() => handleClick(counter+1)}>+</button>
          <button className="text-xl bg-gray-200 p-4 py-2 rounded-xl" onClick={() => handleClick(0)}>Reset</button>
          <button className="text-2xl bg-gray-200 p-4 py-2 rounded-xl" onClick={() => handleClick(counter-1)}>-</button>
        </div>
      </div>
    </div>
  )
}

export default App
