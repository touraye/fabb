'use client';
import React, { useState } from 'react'
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Share from "yet-another-react-lightbox/plugins/share";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { other_images } from '@/constant';


function OtherGallery() {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);
  return (
    <div className='w-full xl:pt-8 md:pt-3'>
        <main className="flex flex-col items-center justify-center py-6 m-auto">
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {other_images.map((image, index) => (
                <div key={index} 
                onClick={() => { setIndex(index); setOpen(true); }}
                className="w-full h-[200px] relative group overflow-hidden"
                >
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-40 transition-all duration-500"></div>
                <Image
                    src={image}
                    alt={`Quality education image`}
                    className="w-full h-full object-cover rounded-lg border border-gray-300"
                />
                </div>
            ))}
            </div>

            <Lightbox
              open={open}
              close={() => setOpen(false)}
              index={index}
              slides={other_images.map((img) => ({ src: img.src }))}
              plugins={[Fullscreen, Zoom, Share, Thumbnails]}
            />
        </main>
    </div>
  )
}

export default OtherGallery