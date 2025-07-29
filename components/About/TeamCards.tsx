import Image from 'next/image';
import laminImg from '@/public/assets/images/leadership/lamin_jassey.jpg'
import fatouImg from '@/public/assets/images/leadership/fatou_ceesay.jpg'
import musaImg from '@/public/assets/images/leadership/musa_sise.jpg'
import bettyImg from '@/public/assets/images/leadership/betty_saine.jpg'
import aminataImg from '@/public/assets/images/leadership/aminata_jallow.jpg'
import sainabouImg from '@/public/assets/images/leadership/sainabou_conteh.jpg'
import mariamaImg from '@/public/assets/images/leadership/aminata_jallow.jpg'
import madouImg from '@/public/assets/images/leadership/betty_saine.jpg'

import React from 'react';
import { Card } from '../ui/card';

const team_members = [
    {
        id: "1",
        img: laminImg,
        name: "Lamin M. Jassey",
        title: "Chairman of Board",
    },
    {
        id: "2",
        img: fatouImg,        
        name: "Fatou Ceesay",
        title: "Acting Chairperson",
    },
    {
        id: "3",
        img: musaImg,        
        name: "Musa Sise",
        title: "Board Secretary/Member",
    },
    {
        id: "4",
        img: bettyImg,
        name: "Betty Saine",
        title: "CEO",
    },
    {
        id: "5",
        img: aminataImg,        
        name: "Aminata Jallow",
        title: "Treasurer / Co‑signatory",
    },
    {
        id: "6",
        img: sainabouImg,        
        name: "Program Manager",
        title: "Sainabou Conteh",
    },
    {
        id: "7",
        img: null,        
        name: "Mariama Sanyang",
        title: "Senior Communications & Logistics",
    },
    {
        id: "8",
        img: null,        
        name: "Modou Faal",
        title: "Assistant Communications & Logistics",
    },
]

const TeamCards = () => {
    return (
        <div className='w-full py-12'>
            <section className='max-container 2xl:w-[80%] w-[90%]  mx-auto'>
                <div className='w-full grid xl:grid-cols-4 md:grid-cols-3 xs:grid-cols-2 gap-4'>
                    {team_members.map((data, index) => (
                        <Card 
                            key={data.id}
                            className='w-full lg:h-[350px] md:h-[300px] sm:h-[350px] xs:h-[300px] h-[380px] relative group overflow-hidden border-none'
                        >   
                            {data.img ? (
                                <Image 
                                    src={data.img}
                                    alt={`Member ${index+1}`}
                                    className='w-full h-full object-cover'
                                />

                            ) : (
                                <div className='w-full h-full bg-black'></div>
                            )}
                            <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end px-4 py-6'>
                                <h3 className='text-white sm:text-2xl text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300'>
                                    {data.name}
                                </h3>
                                <p className='text-gray-300 sm:text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100'>
                                    {data.title}
                                </p>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>
            
        </div>

    );
};

export default TeamCards;