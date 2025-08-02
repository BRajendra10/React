import React from 'react'
import axios from 'axios'
import { useContext } from 'react'
import { useState, useEffect } from "react"
import ProductCard from './ProductCard';
import { FormContext } from '../context/FormContext';

function Products() {
  const [data, setData] = useState([]);
  const { login } = useContext(FormContext);

  async function getData() {
    try{
      const res = await axios.get("http://localhost:3000/products");
      setData(res.data);
    }
    catch (error){
      console.log(error)
    }
  }

  useEffect(() => {
    getData();
  }, [login])

  return (
    <div className="min-h-screen grid grid-cols-12 gap-5">
      <div className="h-10 col-start-2 col-end-12 grid grid-cols-20">
        <select className="col-start-18 col-end-21 text-lg bg-gray-200 rounded-lg p-2" name="filter" id="filter-product">
          <option value="">Filter products</option>
          <option value="low-to-high">Price: low to hight</option>
          <option value="hight-to-low">Price: hight to low</option>
          <option value="beauty">Category: Beauty</option>
          <option value="fragrances">Category: Fragrances</option>
          <option value="furniture">Category: Furniture</option>
          <option value="groceries">Category: Groceries</option>
        </select>
      </div>

      <div className="col-start-2 col-end-12 grid grid-cols-3 gap-4">
        {
          data.map((el) => <ProductCard id={el.id} title={el.title} description={el.description} price={el.price} image={el.thumbnail} />)
        }
      </div>
    </div>
  )
}

export default Products