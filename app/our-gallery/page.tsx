'use client';
import GalleryMain from "@/components/gallery/gallery-main";
import Gallery from "@/components/Hero/Gallery";
import React from "react";

const page = () => {
  return (
    <div>
        <div className="w-full bg-app-primary md:py-[70px] py-12">
          <div className="max-container 2xl:w-[80%] w-[90%] mx-auto flex flex-col sm:gap-6 gap-3 text-white">
            <p className="w-full text-4xl lg:text-7xl text-white font-bold text-center">Gallery</p>
            
          </div>
        </div>
      <GalleryMain />

      <Gallery/>
    </div>
  );
};

export default page;
