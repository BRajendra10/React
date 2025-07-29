import React from 'react'

function ProductCard({title, description, price, image}) {
    console.log(title, description, price, image)
    return (
        <div className="h-[16rem] flex gap-3 bg-stone-50 p-3 shadow-2xl rounded-xl">
            <img src={image} alt="product-img" className="w-1/3 h-2/2" />

            <div className="flex flex-col gap-3">
                <h2 className="text-xl font-semibold">{title.substring(0, 50)} ...</h2>
                <p className="text-sm">{description.substring(0, 100)} ...</p>
                <span className="font-semibold">${price}</span>

                <div className="flex gap-3">
                    <button className="border py-2 px-5 rounded-full hover:bg-stone-950 hover:text-stone-50 duration-700">add to cart</button>
                    <button className="border py-2 px-5 rounded-full hover:bg-stone-950 hover:text-stone-50 duration-700">add to wishlist</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard