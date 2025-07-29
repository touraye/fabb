'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

const partnerLogos = [
    'https://framerusercontent.com/images/WwlNiwookPEhueneIIsOzdMYr4.png?scale-down-to=512',
    'https://framerusercontent.com/images/QrEW0ldyBvQb3qVFJFPBJZp8W54.png?scale-down-to=512',
    'https://framerusercontent.com/images/9lHEd9AJXozys9swMr1nseo5WY.jpeg',
    'https://framerusercontent.com/images/OZSOHwfxs1v2AOyhNgr84QTLQ.jpeg?scale-down-to=512',
    'https://framerusercontent.com/images/eh6fQ6uI5gtPRGfrf76dk4Leak.jpg?scale-down-to=512',
    'https://framerusercontent.com/images/n42PAjOhcNNvHPi2ysRzleyyb4.png?scale-down-to=512',
    'https://framerusercontent.com/images/WwlNiwookPEhueneIIsOzdMYr4.png?scale-down-to=512',
    'https://framerusercontent.com/images/MTR4LQcEVW2MAlgZRMeOLA7ro.png?scale-down-to=512',
    'https://framerusercontent.com/images/B36ibyDvWskreEddAreNDtlbss.png?scale-down-to=512'
];

const PartnersSlider = () => {
    return (
        <div className="py-10 bg-white text-center relative pb-[50px]">
            <h2 className="text-5xl font-bold text-indigo-900 my-10 mb-[70px]">Our Partners</h2>
            <div className="relative w-full overflow-hidden">
                <div className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
                <div className="absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={5}
                    spaceBetween={30}
                    loop={true}
                    speed={6000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        320: { slidesPerView: 2 },
                        640: { slidesPerView: 3 },
                        1024: { slidesPerView: 5 }
                    }}
                    className="w-full px-4 flex justify-center items-center"
                >
                    {partnerLogos.map((logo, index) => (
                        <SwiperSlide key={index} className="flex justify-center items-center mb-10">
                            <div className="w-[150px] h-[75px] flex justify-center items-center overflow-hidden rounded-xl">
                                <Image src={logo} alt="Partner Logo" width={150} height={75} className="object-contain" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default PartnersSlider;