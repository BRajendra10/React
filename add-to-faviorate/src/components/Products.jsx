import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import ProductCard from './ProductCard';

function Products() {
  const [data, setData] = useState([]);

  async function getData() {
    try {
      const res = await axios.get("http://localhost:3000/products");
      setData(res.data);
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="w-full min-h-screen flex justify-center">
      <div className="w-[80%] grid grid-cols-3 gap-5">
        {data.map((el) => <ProductCard id={el.id} title={el.title} description={el.description} price={el.price} image={el.thumbnail} />)}
      </div>
    </div>
  )
}

export default Products