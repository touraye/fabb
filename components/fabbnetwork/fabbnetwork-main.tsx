'use client';
import React from 'react'
import Typography from '../shared/typography'
import { Card } from '../ui/card';
import Image from 'next/image';
import { Button } from '../ui/button';
import { brands } from '@/constant';


function FabbNetworkMain() {
  return (
    <div className='w-full py-12 bg-[#F0FAFC]'>
        <section className='max-container 2xl:w-[80%] w-[90%] mx-auto'>
            <div className='flex flex-col justify-center items-center gap-'>
                <Typography
                    typo="body-large-medium"
                    className='uppercase text-[#DB2777]'
                >
                    Brands that Trust us
                </Typography>
                <Typography
                    typo="header-2-semibold"
                    className='pb-3 !font-bold'
                >
                    Our Clients
                </Typography>
                <Typography
                    typo="body-large-regular"
                    className='max-w-[450px] text-center'
                >
                    Over the years, Kava has had the privilege to
                    work for both big and small businesses
                </Typography>
            </div>
            <div className='w-full py-12 grid xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 xs:gap-6 gap-3'>
                {brands.map((logo, index) => (
                    <Card
                        key={`Brand logo ${index+1}`}
                        className='w-full lg:h-[150px] h-[100px] flex flex-col justify-center items-center border-none bg-white shadow-sm rounded-md hover:shadow-lg transition-all duration-300'
                    >
                        <Image 
                            src={logo}
                            alt={`Brand ${index+1}`}
                            className='w-[100px] h-fit'
                        />
                    </Card>
                ))}
            </div>
            <div className='flex flex-col justify-center items-center'>
                <Button
                    variant="primary"
                    className='w-fit mx-auto !px-6 !py-6 text-base'
                >
                    Become a Partner
                </Button>
            </div>
        </section>
    </div>
  )
}

export default FabbNetworkMain