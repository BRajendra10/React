import React from 'react'
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full bg-stone-200 flex justify-end px-4 py-3">
        <ul className="h-[2rem] flex items-center justify-end gap-3">
            <NavLink to={'/bag'} className="p-2 text-lg hover:text-orange-400" href="bag">Bag</NavLink>
            <NavLink to={'/wishlist'} className="p-2 text-lg hover:text-orange-400" href="bag">wishlist</NavLink>
        </ul>
    </nav>
  )
}

export default Navbar