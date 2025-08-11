import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Wishlist from '../components/Wishlist'
import Bag from '../components/Bag'
import Products from '../components/Products'

function AllRoutes() {
  return (
    <Routes>
        <Route path={'/wishlist'} element={<Wishlist />} />
        <Route path={'/bag'} element={<Bag />} />
        <Route path={'/'} element={<Products />} />
    </Routes>
  )
}

export default AllRoutes