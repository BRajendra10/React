import React from 'react'
import { useContext } from 'react'
import { FormContext } from '../context/FormContext';
import { NavLink } from "react-router-dom";

function Navbar() {
    const { login, handleLogin } = useContext(FormContext);

  return (
    <nav className="w-full h-[4rem] bg-gray-300 flex justify-between items-center px-3">
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
                {login ? <button onClick={() => handleLogin(!login)}>Logout</button> : <NavLink to={"/login"}>Login</NavLink>}
            </li>
        </ul>
    </nav>
  )
}

export default Navbar