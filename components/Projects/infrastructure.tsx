'use client';
import React from 'react'
import Typography from '../shared/typography'
import { all_projects } from '@/dummyData/Data'
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'
import Image from 'next/image'
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { successful_projects } from '@/constant';

function Infrastructure() {
    const router = useRouter()
  return (
    <div className='w-full flex flex-col gap-8'>
        <Typography
            typo="header-3-semibold"
        >
            Infrastructure Development
        </Typography>
        <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-6 m-auto">
          {successful_projects.map((data, index) => (
            data.category === "Infrastructure Development" && (
                <Card
                    key={data.id}
                    className="flex flex-col justify-between rounded-none border-none group"
                >
                <div className="w-full md:h-[250px] sm:h-[200px] xs:h-[350px] h-[250px] overflow-hidden">
                    <Image  
                    src={data.img}
                    alt={`Project ${index+1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
                <CardHeader
                    className="px-3 pb-2"
                >
                    <Typography
                    typo="body-large-semibold"
                    className="!leading-tight"
                    >
                    {data.heading}
                    </Typography>
                </CardHeader>
                <CardContent className="px-3 ">
                    <Typography 
                        className='xl:line-clamp-4 sm:line-clamp-2 line-clamp-4'
                    >
                    {data.description}
                    </Typography>
                </CardContent>
                <CardFooter
                    className=" px-3 py-2 flex flex-col items-start justify-end border-t border-gray-200"
                >
                    <div className='h-fit '>
                        <Button
                            variant="primary"
                            onClick={() => router.push(`/our-projects/${data.id}`)}
                            className="w-fit px-0 text-[#DB2777] text-start hover:bg-white flex border-none shadow-none bg-white !font-bold"
                        >
                            Explore project
                            <ArrowRight />
                        </Button>
                    </div>
                </CardFooter>
                </Card>
            )
            ))}
        </div>
    </div>
  )
}

export default Infrastructure