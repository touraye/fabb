'use client';
import React from 'react'
import Typography from '../shared/typography';
import Image from 'next/image';
import luckyImg1 from "@/public/assets/images/projects/2024_baby_1.jpg"
import luckyImg2 from "@/public/assets/images/projects/2024_baby_2.jpg"
import luckyImg3 from "@/public/assets/images/projects/2024_baby_3.jpg"
import luckyImg4 from "@/public/assets/images/projects/2024_baby_4.jpg"
import luckyImg5 from "@/public/assets/images/projects/2024_baby_5.jpg"
import luckyImg6 from "@/public/assets/images/projects/2024_baby_6.jpg"
import luckyImg7 from "@/public/assets/images/projects/2025_baby_1.jpg"
import luckyImg8 from "@/public/assets/images/projects/2025_baby_10.jpg"
import luckyImg9 from "@/public/assets/images/projects/2025_baby_4.jpg"
import luckyImg10 from "@/public/assets/images/projects/2025_baby_7.jpg"
import luckyImg11 from "@/public/assets/images/projects/2025_baby_6.jpg"

const babies = [luckyImg1, luckyImg10, luckyImg11, luckyImg9, luckyImg2, luckyImg3, luckyImg4, luckyImg8, luckyImg5, luckyImg6, luckyImg7 ]

function LuckyBabiesMain() {
  return (
    <div className='w-full py-12'>
        <section className='max-container 2xl:w-[80%] w-[90%] flex flex-col items-center gap-4'>
            <Typography
                typo="header-3-semibold"
                className='!font-bold'
            >
                Our Lucky Babies
            </Typography>
            <div className='w-full py-8 columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4'>
                {babies.map((data, index) => (
                    <div key={index+1} className='break-inside-avoid '>
                        <div className='w-full h-auto relative group overflow-hidden'>
                            <div className='absolute inset-0 opacity-0 group-hover:opacity-[0.6] bg-black transition-all duration-700'></div>
                            <Image 
                                src={data}
                                alt='Baby Image'
                                className='w-full h-auto'
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </div>
  )
}

export default LuckyBabiesMain