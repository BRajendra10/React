import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Products from '../components/Products';
import Services from '../components/Services';
import Login from '../components/Login';

function NavRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}

export default NavRoutes