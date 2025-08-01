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
    <div className="min-h-screen grid grid-cols-12">
      <div className="col-start-2 col-end-12 grid grid-cols-3 gap-4">
        {
          data.map((el) => <ProductCard id={el.id} title={el.title} description={el.description} price={el.price} image={el.image} />)
        }
      </div>
    </div>
  )
}

export default Products