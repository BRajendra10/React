import React from 'react'

function Counter() {
    return (
        <div className="w-[20rem] h-[15rem] bg-gray-100 flex flex-col items-center justify-evenly rounded-xl p-3 shadow-xl">
            <h1 className="text-5xl">0</h1>

            <div className="flex gap-5">
                <button className="px-6 py-3 bg-gray-300 rounded-lg text-lg font-semibold">+1</button>
                <button className="px-6 py-3 bg-gray-300 rounded-lg text-lg font-semibold">-1</button>
            </div>
        </div>
    )
}

export default Counter