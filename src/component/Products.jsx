import React from 'react'
import products from '../data.json'
import Card from './Card'
const Products = () => {
  const productsData = Object.values(products)
  return (
    <div className='h-full p-10 '>
      <div className="filters flex gap-3 justify-center">
        <button className="btn px-5 py-3  bg-blue-950 hover:bg-blue-900 font-semibold cursor-pointer text-white rounded-sm">Clocks</button>
        <button className="btn px-5 py-3  bg-blue-950 hover:bg-blue-900 font-semibold cursor-pointer text-white rounded-sm">Furnitures</button>
        <button className="btn px-5 py-3  bg-blue-950 hover:bg-blue-900 font-semibold cursor-pointer text-white rounded-sm">Electronics</button>
        <button className="btn px-5 py-3  bg-blue-950 hover:bg-blue-900 font-semibold cursor-pointer text-white rounded-sm">Toyes</button>
        <div className="border border-blue-950 p-2 rounded-sm flex items-center gap-2  cursor-pointer">
          <svg className="w-4 h-4 text-gray-500  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
          <input type="text" className='  text-sm text-[#767676] focus:outline-none' placeholder='Search Furniture' />
        </div>
      </div>

      <div className="cards">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {
            productsData?.map(({ id, name, category, price, img }) => (
              <Card 
                id={id}
                name={name}
                category={category}
                price={price}
                img={img}
              />
            ))
          }
        </div>
      </div >
    </div >
  )
}

export default Products
