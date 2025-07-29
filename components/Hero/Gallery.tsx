"use client"

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const videos = [
    { 
        id: 1, 
        title: 'FABB foundation and Qatar charity donate medical items to Essau District Hospital', 
        url: 'https://www.youtube.com/embed/0CvoU3XV4es', 
        duration: '3:42', 
    },
    { 
        id: 2, 
        title: 'First Lady Fatoumata Bah-Barrow presents scholarships to forty girls from disadvantaged backgrounds', 
        url: 'https://www.youtube.com/embed/23Ijj8P-lJU', 
        duration: '4:26', 
    },
    { 
        id: 3, 
        title: 'FABB FOUNDATION- STORY BY SAIDOU CAMARA 01.01.2023', 
        url: 'https://www.youtube.com/embed/T5XogWCLWmE', 
        duration: '4:29', 
    },
    { 
        id: 4, 
        title: 'FABB foundation and partners organise free medical camp at the EFSTH', 
        url: 'https://www.youtube.com/embed/fA8-Vw3-1s8', 
        duration: '3:27', 
    },
    { 
        id: 5, 
        title: 'FABB Foundation donates food items across four regions in The Gambia', 
        url: 'https://www.youtube.com/embed/H53yAgcR0iM', 
        duration: '14:22', 
    },
    { 
        id: 6, 
        title: 'FABB Foundation presents gifts to families of newly born babies in the West Coast Region', 
        url: 'https://www.youtube.com/embed/zxDU-4-YMfU', 
        duration: '4:47', 
    },
    { 
        id: 7, 
        title: 'FaBB Foundation Receives Medical Items Worth D32 Million.', 
        url: 'https://www.youtube.com/embed/9dPsz7a4KFc', 
        duration: '3:06', 
    },
];

const Gallery = () => {
    const [selectedVideo, setSelectedVideo] = useState(videos[0]);

    const getYoutubeThumbnail = (url: string) => {
        const videoId = url.split('/embed/')[1];
        return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    };

    return (
        <div className='pt-12 pb-16 bg-app-primary space-y-2'>
            <section className='max-container 2xl:w-[80%] w-[90%] mx-auto'>
                <div className='flex flex-col space-y-3'>
                    <h2 className='text-4xl font-bold text-white '>Media</h2>
                    <p className=' text-white text-lg'>
                        Experience the transformative power of FaBB through our collection of audio-visuals showcasing various initiatives
                    </p>
                    <Link href='' className='pb-4 flex flex-row gap-2 font-semibold text-sm text-[#CEA12B]'>
                        SEE MORE VIDEOS <ArrowRight className='w-5 h-5' />
                    </Link>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4'>
                    <div className='lg:col-span-2'>
                        <div className=''>
                            <div className="h-full"> 
                                <iframe
                                    className="w-full xl:min-h-[500px] lg:min-h-[400px] min-h-[300px] h-full rounded-lg"
                                    src={`${selectedVideo.url}?autoplay=1`}
                                    title={selectedVideo.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    <div className='col-span-1 bg-app-primary shadow-lg p-4 rounded-lg'>
                        <div className="pb-4 flex justify-between flex-row">
                            <h3 className='text-lg font-bold text-[#CEA12B] mb-3'>Video Gallery</h3>
                            <p className='text-sm text-gray-200 mb-4'>{videos.length} Videos</p>
                        </div>
                        <div className='no_scroll_display xl:h-[400px] lg:h-[300px] h-[200px] overflow-auto'>
                            <div className=' h-full flex flex-col gap-2 flex-nowrap'>
                                {videos.map((video) => (
                                    <div
                                        key={video.id}
                                        className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer ${selectedVideo.id === video.id ? 'bg-[#1e9a7d]' : 'hover:bg-[#]'
                                            } transition`}
                                        onClick={() => setSelectedVideo(video)}
                                    >
                                        <Image 
                                            src={getYoutubeThumbnail(video.url)} 
                                            alt={video.title} 
                                            width={70} 
                                            height={70} 
                                            className='rounded object-cover aspect-video'
                                        />
                                        <div className='flex-1 min-w-0'>
                                            <p className='text-white text-sm font-semibold truncate'>{video.title}</p>
                                            <p className='text-gray-400 text-xs'>{video.duration}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Gallery;