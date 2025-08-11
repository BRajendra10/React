import React from 'react'

function ProductCard({ id, title, description, price, image }) {

    return (
        <div className="h-[16rem] flex gap-3 bg-stone-50 p-3 shadow-2xl rounded-xl" key={id}>
            <img src={image} alt="product-img" className="w-1/3 h-2/2" />

            <div className="grid grid-rows-12 gap-5">
                <h2 className="text-xl font-semibold">{title.substring(0, 70)} ...</h2>
                <p className="text-sm row-end-5">{description.substring(0, 150)} ...</p>
                <span className="font-semibold row-start-8 row-end-9">${price}</span>

                <div className="flex gap-3 row-start-10 row-end-13">
                    <button className="border px-5 rounded-full hover:bg-stone-950 hover:text-stone-50 duration-700">add to bag</button>
                    <button className="border border-orange-300 px-5 rounded-full hover:bg-orange-300 hover:text-orange-50 duration-700">Buy now</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard