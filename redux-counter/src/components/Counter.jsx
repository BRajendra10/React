import React from 'react'

function Counter() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[25rem] h-[20rem] flex flex-col justify-around items-center shadow-2xl rounded-xl gap-5 px-5 py-10">
        <h1 className="text-4xl">0</h1>

        <div className="flex gap-5">
          <button className="px-5 py-3 text-xl rounded-lg bg-gray-200">+1</button>
          <button className="px-5 py-3 text-xl rounded-lg bg-gray-200">-1</button>
        </div>
      </div>
    </div>
  )
}

export default Counter