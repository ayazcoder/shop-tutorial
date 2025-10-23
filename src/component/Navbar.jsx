import React, { useState } from 'react'
import { FaShoppingBag } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false)

    return (
        <div className='h-20 p-4 sm:p-5 flex justify-between items-center w-full shadow-md shadow-gray-700/50 relative'>
            <div className="cursor-pointer logo text-lg sm:text-xl md:text-xl font-bold">
                CityCrafts
            </div>

            <div className="flex gap-3 items-center justify-between  md:hidden">
                <span className='cursor-pointer text-2xl'><FaShoppingBag /></span>
                {/* Burger button - visible only on mobile */}
                <button
                    aria-label="Toggle menu"
                    className="burger-menu text-2xl"
                    onClick={() => setMobileOpen(prev => !prev)}
                >
                    <GiHamburgerMenu />
                </button>
            </div>

            {/* Desktop menu */}
            <ul className='hidden md:flex gap-5 list-none text-md font-semibold'>
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>Shop</li>
                <li className='cursor-pointer'>Blog</li>
                <li className='cursor-pointer'>About</li>
                <li className='cursor-pointer'>Contact</li>
            </ul>

            <div className="hidden md:flex right-side mr-5 text-md font-semibold">
                <ul className='flex gap-8'>
                    <li className='cursor-pointer'>Add New Item</li>
                    <li className='cursor-pointer'>Admin</li>
                    <li className='cursor-pointer m-auto '><FaShoppingBag /></li>
                </ul>
            </div>
            {/* Mobile menu - shown when mobileOpen is true; hidden on md+ */}
            <div className={`mobile-menus ${mobileOpen ? 'flex' : 'hidden'} flex-col absolute top-[80px] right-0 w-2/4 sm:w-1/4 bg-gray-400 p-4 gap-4 md:hidden`}>
                <ul className='flex flex-col gap-4 list-none text-md font-semibold'>
                    <li className='cursor-pointer'>Home</li>
                    <li className='cursor-pointer'>Shop</li>
                    <li className='cursor-pointer'>Blog</li>
                    <li className='cursor-pointer'>About</li>
                    <li className='cursor-pointer'>Contact</li>
                    <li className='cursor-pointer'>Add New Item</li>
                    <li className='cursor-pointer'>Admin</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
