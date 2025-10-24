import React from 'react'
import { IoMdHeart } from 'react-icons/io';


const Card = ({ id, name, category, price, img }) => {
    const backgroundImageStyle = {
        backgroundImage: `url('${img}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    };
    return (
        <div key={id} className='w-[300px] h-[500px] flex flex-col gap-4 my-4'>
            <div data-aos="zoom-in" className='w-full h-full flex flex-col justify-evenly items-center relative bg-[#f3f3f3]' style={backgroundImageStyle} >
                <div data-aos="fade-up" className="flex justify-between items-center text-black w-full px-4 absolute bottom-10 gap-3">
                    <button className='w-full h-[50px] bg-white text-color-primary font-semibold' onClick={null}>{id == 1 ? "Out of Stock" : "Add to cart"}</button>
                </div>
            </div>
            <div className="flex justify-between">
                <p className='text-color-gray'>{category}</p>
                <span className='cursor-pointer' onClick={null} data-aos="zoom-in">
                    <IoMdHeart className='text-2xl' />
                </span>
            </div>
            <p className='text-color-primary font-medium'>{name}</p>
            <p className='text-color-primary font-medium'>${price}</p>
        </div>
    )
}

export default Card
