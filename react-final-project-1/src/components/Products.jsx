import React from 'react'
import axios from 'axios'
import { useState, useEffect } from "react"
import ProductCard from './ProductCard';


function Products() {
  const [data, setData] = useState([]);

  async function getData() {
    const res = await axios.get("http://localhost:3000/products");
    setData(res.data);
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="min-h-screen grid grid-cols-12">
      <div className="col-start-2 col-end-12 grid grid-cols-3 gap-4">

        {
          data.map((el) => <ProductCard title={el.title} description={el.description} price={el.price} image={el.image} />)
        }

        {/* <div className="h-[16rem] flex gap-3 bg-stone-50 p-3">
          <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="product-img" className="w-1/3 h-2/2" />

          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h2>
            <p className="text-sm">Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
            <span className="font-semibold">$109.95</span>

            <div className="flex gap-3">
              <button className="border py-2 px-5 rounded-full hover:bg-stone-950 hover:text-stone-50 duration-700">add to cart</button>
              <button className="border py-2 px-5 rounded-full hover:bg-stone-950 hover:text-stone-50 duration-700">add to wishlist</button>
            </div>
          </div>
        </div> */}

      </div>
    </div>
  )
}

export default Products