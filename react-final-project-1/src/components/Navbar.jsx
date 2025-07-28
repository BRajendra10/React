import React from 'react'
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full h-[60px] bg-gray-200 flex justify-between items-center px-3">
        <span className="text-2xl font-bold">CN</span>
        
        <ul className="flex gap-5">
            <li className="text-lg text-stone-700 hover:text-stone-950">
                <NavLink to={"/"}>Home</NavLink>
            </li>
            <li className="text-lg text-stone-700 hover:text-stone-950">
                <NavLink to={"/products"}>Products</NavLink>
            </li>
            <li className="text-lg text-stone-700 hover:text-stone-950">
                <NavLink to={"/services"}>Services</NavLink>
            </li>
            <li className="text-lg text-stone-700 hover:text-stone-950">
                <NavLink to={"/login"}>Login</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar