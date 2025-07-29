'use client';
import React, { useRef } from 'react'
import Typography from '../shared/typography'
import { useInView } from 'framer-motion';
import { AnimatedCard } from './animated-card';

type JourneyProps = {
    id: string;
    title: string;
    year: string;
    description: string
}

const journey: JourneyProps[] = [
    {
        id: "1",
        title: "Foundation Established",
        year: "2016",
        description: `FaBB Foundation was officially registered as a non-profit organization in The Gambia.`
    },
    {
        id: "2",
        title: "First Health Clinic",
        year: "2017",
        description: `Opened our first community health clinic in Basse, Upper River Region.`
    },
    {
        id: "3",
        title: "Education Program Launch",
        year: "2018",
        description: `Launched scholarship program supporting 50 students in their educational journey.`
    },
    {
        id: "4",
        title: "Clean Water Initiative",
        year: "2019",
        description: `Began water well construction project, completing first 5 wells in rural communities.`
    },
    {
        id: "5",
        title: "COVID-19 Response",
        year: "2020",
        description: `Adapted programs to provide emergency relief and health support during the pandemic.`
    },
    {
        id: "6",
        title: "Maternal Health Focus",
        year: "2021",
        description: `Expanded maternal health services with mobile clinics and trained birth attendants.`
    },
    {
        id: "7",
        title: "Youth Skills Program",
        year: "2022",
        description: `Launched vocational training program for young people in technology and trades.`
    },
    {
        id: "8",
        title: "Partnership Expansion",
        year: "2023",
        description: `Formed strategic partnerships with international organizations and local governments.`
    },
    {
        id: "9",
        title: "Digital Innovation",
        year: "2024",
        description: `Introduced digital health records and online education platforms.`
    },
]

function OurJourney() {
  return (
    <div className='w-full py-12 bg-gray-50'>
        <section className='max-container 2xl:w-[80%] w-[90%] mx-auto space-y-16'>
            <div className='flex flex-col items-center gap-4'>
                <Typography
                    typo="header-3-semibold"
                >
                    Our Journey
                </Typography>
                <Typography
                    typo="body-large-regular"
                >
                    Key milestones in our mission to empower Gambian communities.
                </Typography>
            </div>
            <div className="relative">
                <div className="absolute hidden md:block top-0 left-1/2 h-full w-0.5 bg-gradient-to-b from-pink-300 to-pink-100 -ml-px"></div>
                <div className="absolute hidden top-0 left-1/2 h-8 w-8 rounded-full bg-[#DB2777] -ml-4 md:flex items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-white"></div>
                </div>
            
                <div className="space-y-8 md:space-y-1">
                    {journey.map((item, index) => (
                    <AnimatedCard key={item.id} id={index}>
                        <div className={`group relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
                        <div className={`md:absolute flex-shrink-0 w-24 h-24 rounded-full border-4 border-white bg-[#DB2777] shadow-md flex items-center justify-center z-10 ${index % 2 === 0 ? 'md:left-1/2 md:-ml-12' : 'md:right-1/2 md:-mr-12'}`}>
                            <Typography typo="header-5-semibold" className="text-white">
                            {item.year}
                            </Typography>
                        </div>
                        
                        <div className={`w-full md:w-5/12 lg:px-8 md:px-3 px-8 py-10 rounded-2xl bg-white shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300 ${index % 2 === 0 ? 'md:mr-auto lg:pr-16 ' : 'lg:ml-auto lg:pl-10'} z-[20]`}>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-3 h-3 rounded-full bg-[#DB2777]"></div>
                                <Typography typo="header-6-semibold" className="text-gray-900">
                                    {item.title}
                                </Typography>
                            </div>
                            <Typography typo="body-large-regular" className="text-gray-600">
                                {item.description}
                            </Typography>
                        </div>
                        <div className={`md:hidden absolute top-24 left-1/2 ${index !== journey.length - 1 ? "h-full" : "h-[60%]"} w-0.5 bg-[#DB2777] -ml-px`}></div>
                        </div>
                    </AnimatedCard>
                    ))}
                </div>
            
                <div className="absolute hidden bottom-0 left-1/2 h-8 w-8 rounded-full bg-[#DB2777] -ml-4 md:flex items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-white"></div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default OurJourney