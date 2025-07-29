'use client'
import React, { useState } from 'react'
import Typography from '../shared/typography'
import { ProjectProps } from '@/type'
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Share from "yet-another-react-lightbox/plugins/share";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Image from 'next/image'

function ProjectDetailContent({ project }: { project: ProjectProps }) {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    console.log("projects: ", project)
  return (
    <div className='w-full py-8'>
        <section className='work-sans max-container 2xl:w-[80%] w-[90%] auto flex flex-col gap-4'>
             <div className='flex flex-col gap-2'>
                <Typography
                    typo="header-5-semibold"
                    className='pb-2 uppercase !font-bold'
                    >
                    {project.heading}
                </Typography>
                {project.description.map(data => (
                    <p 
                        key={data}
                        className='flex flex-col gap-8'>
                        {data}
                    </p>
                ))}
                

                <main className="flex flex-col  py-6 m-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {project?.images?.map((image, index) => (
                        <div key={index} 
                            onClick={() => { setIndex(index); setOpen(true); }}
                            className="h-[200px] relative group overflow-hidden"
                        >
                        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-40 transition-all duration-500"></div>
                        <Image
                            src={image}
                            alt={`Project images`}
                            className="w-full h-full object-cover rounded-lg border border-gray-300"
                        />
                        </div>
                    ))}
                    </div>

                    <Lightbox
                        className='w-full h-full'
                        open={open}
                        close={() => setOpen(false)}
                        index={index}
                        slides={project?.images?.map((img) => ({ src: img.src }))}
                        plugins={[Fullscreen, Zoom, Share, Thumbnails]}
                    />
                </main>
             </div>
        </section>
    </div>
  )
}

export default ProjectDetailContent