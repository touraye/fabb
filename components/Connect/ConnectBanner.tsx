import Image from 'next/image'
import React from 'react'

const ConnectBanner = () => {
    return (
        <div className="flex items-center justify-center bg-[#F8FAFC]">
            <div className='w-full relative py-[7%] mx-[10%] rounded-xl mt-[9%] overflow-hidden'>
                <div className="absolute inset-0 rounded-xl">
                    <Image
                        src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjEwMTYtYy0wMi1rc2g2cWt1Zy5qcGc.jpg" // Replace with your actual image path
                        alt="Board of Directors"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>

                {/* Content on top of the image */}
                <div className="relative  flex flex-col justify-center items-center text-center p-10">
                    <h2 className="uppercase text-3xl md:text-5xl text-white font-bold mb-5 mt-2">
                    Our Offices Across Africa
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default ConnectBanner