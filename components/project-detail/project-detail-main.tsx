'use client';
import React from 'react'
import Typography from '../shared/typography'
import { ProjectProps } from '@/type';

function ProjectDetailMain({ project }: { project: ProjectProps }) {
    console.log(project)
  return (
    <div className='w-full py-16 bg-app-primary'>
        <section className='max-container 2xl:w-[80%] w-[90%] mx-auto flex md:flex-row flex-col justify-between items-center lg:gap-10 gap-6 text-white'>
            <div className='flex-1'>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold !leading-relaxed line-clamp-2'
                >
                    {project.heading}
                </Typography>
            </div>
            <div className='flex-1 lg:px-12 sm:px-6 sm:border-l border-white'>
                <Typography
                    typo="body-medium-medium"
                    className='lg:w-[90%] line-clamp-4'
                >
                    {project.description}
                </Typography>
            </div>
        </section>
    </div>
  )
}

export default ProjectDetailMain