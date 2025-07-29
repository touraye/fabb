'use client';

import React from 'react';

const GambiaMap = () => {
  return (
    <div className="relative w-full py-6 flex flex-col justify-center items-center rounded-lg overflow-hidden">
      <div className='max-w-[1200px] md:w-[80%] w-[90%] h-fit mx-auto'>
        <video  
          className="w-full h-full"
          src="/assets/images/rotating_map.mp4"
          autoPlay
          loop
          muted
        />
      </div>
    </div>
  );
};

export default GambiaMap;
