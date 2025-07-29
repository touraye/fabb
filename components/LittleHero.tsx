import React from 'react'
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const LittleHero = () => {
    return (
        <div className='bg-[#DB2777] '>
            <div className='max-container py-1  px-5 2xl:w-[80%] w-[90%] mx-auto flex justify-between items-center'>
                <div className="flex space-x-3">
                    <a href="https://twitter.com" className='p-2 hover:bg-blue-950 hover:bg-opacity-70 rounded-full transition duration-500' target="_blank" rel="noopener noreferrer">
                        <Twitter strokeWidth={0} fill="currentColor" className="text-white w-5 h-5" />
                    </a>
                    <a href="https://facebook.com" className='p-2 hover:bg-blue-950 hover:bg-opacity-70 rounded-full transition duration-500' target="_blank" rel="noopener noreferrer">
                        <Facebook strokeWidth={0} fill="currentColor" className="text-white w-5 h-5" />
                    </a>
                    <a href="https://instagram.com" className='p-2 hover:bg-blue-950 hover:bg-opacity-70 rounded-full transition duration-500' target="_blank" rel="noopener noreferrer">
                        <Instagram  className="text-white w-5 h-5" />
                    </a>
                    <a href="https://youtube.com" className='p-2 hover:bg-blue-950 hover:bg-opacity-70 rounded-full transition duration-500' target="_blank" rel="noopener noreferrer">
                        <Youtube className="text-white w-5 h-5" />
                    </a>
                </div>

                <div className='flex space-x-2'>
                    <p className=' cursor-pointer text-base text-white font-semibold hover:text-green-700 transition duration-500'>EN</p>
                    <p className=' cursor-pointer text-base text-white font-semibold hover:text-green-700 transition duration-500'>FR</p>
                    <p className=' cursor-pointer text-base text-white font-semibold hover:text-green-700 transition duration-500'>ES</p>
                    <p className=' cursor-pointer text-base text-white font-semibold hover:text-green-700 transition duration-500'>DT</p>
                </div>
            </div>
        </div>
    )
}

export default LittleHero