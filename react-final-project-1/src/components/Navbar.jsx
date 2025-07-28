import React from 'react'

function Navbar() {
  return (
    <nav className="w-full h-[60px] bg-gray-200 flex justify-between items-center px-3">
        <span className="text-2xl font-bold">CN</span>
        <ul className="flex gap-5">
            <li className="text-lg text-stone-700 hover:text-stone-950"><a href="#">Home</a></li>
            <li className="text-lg text-stone-700 hover:text-stone-950"><a href="#">Products</a></li>
            <li className="text-lg text-stone-700 hover:text-stone-950"><a href="#">services</a></li>
            <li className="text-lg text-stone-700 hover:text-stone-950"><a href="#">login</a></li>
        </ul>
    </nav>
  )
}

export default Navbar