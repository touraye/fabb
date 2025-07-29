import Image from 'next/image'

import React from 'react'

const BoardBanner = () => {
    return (
        <div className='w-full relative h-[200px] '>
            <div className="absolute inset-0">
                <Image
                    src="https://anchorforallfoundation.org/wp-content/uploads/2021/05/ab-bg-page-title.jpg" // Replace with your actual image path
                    alt="Board of Directors"
                    layout="fill"
                    objectFit="cover"
                />
            </div>

            {/* Content on top of the image */}
            <div className="relative  flex flex-col justify-center items-center text-center p-10">
                <h2 className="uppercase text-2xl md:text-3xl text-[#002866] font-bold mb-5 mt-2">
                    Board of Directors
                </h2>
                <button className="uppercase font-semibold p-3 bg-[#FFEE00] text-[#002866] hover:bg-[#002866] hover:text-[#FFEE00] transform hover:scale-105 transition duration-300 text-sm">
                    Our Team
                </button>
            </div>
        </div>
    )
}

export default BoardBanner