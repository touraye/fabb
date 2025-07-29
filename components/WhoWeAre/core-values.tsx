'use client';
import React from 'react'
import Typography from '../shared/typography'
import { Award, Heart, TrendingUp, Users } from 'lucide-react';
import { Card, CardContent, CardHeader } from '../ui/card';

const core_values = [
    {
        id: "1",
        title: "Compassion",
        icon: Heart,
        description: `We approach every community with empathy and understanding.`,
    },
    {
        id: "2",
        title: "Integrity",
        icon: Award,
        description: `We maintain transparency and accountability in all our actions.`,
    },
    {
        id: "3",
        title: "Empowerment",
        icon: TrendingUp,
        description: `We believe in building capacity and self-reliance in communities.`,
    },
    {
        id: "4",
        title: "Collaboration",
        icon: Users,
        description: `We work together with communities, partners, and stakeholders.`,
    },
]

function CoreValues() {
  return (
    <div className='w-full py-16'>
        <section className='max-container 2xl:w-[80%] w-[90%] mx-auto flex flex-col'>
            <div className='w-full flex flex-col items-center gap-2'>
                <Typography
                    typo="header-3-semibold"
                    className='text-center'
                >
                    Our Core Values
                </Typography>
                <Typography
                    typo="body-large-regular"
                    className='sm:w-[600px] text-center'
                >
                    These fundamental principles guide everything we do and shape how we work with communities.
                </Typography>
            </div>

            <div className='w-full py-10 grid lg:grid-cols-4 sm:grid-cols-2 gap-6'>
                {core_values.map((data) => (
                    <Card
                        key={data.id}
                        className='py-6 xl:px-3 flex flex-col items-center bg-white border-gray-200 shadow-none hover:shadow-md transition-all duration-700'
                    >
                        <CardHeader
                            className='p-3 rounded-full bg-[#D1FAE5]'
                        >
                            <data.icon color='#059669' />
                        </CardHeader>
                        <CardContent className='pt-3 flex flex-col items-center gap-2'>
                            <Typography
                                typo="body-large-medium"
                            >
                                {data.title}
                            </Typography>
                            <Typography
                                typo="body-medium-regular"
                                className='text-center'
                            >
                                {data.description}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    </div>
  )
}

export default CoreValues