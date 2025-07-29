import React from 'react'
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogOverlay,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog";
import {CirclePlayIcon } from "lucide-react";
  

const ProjectBanner = () => {
    return (
        <div className='w-full bg-[#367978] md:py-16 py-10'>
            <div className='max-container 2xl:w-[80%] w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 '>
                <div className="md:cols-1 py-3 flex flex-col gap-6 md:border-r-2 border-gray-50">
                    <p className='md:text-left text-center text-4xl lg:text-7xl text-white font-bold'>Our Projects</p>
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <div className="m-auto bg-[#DB2777] p-2 rounded-full animate-pulse">
                                <CirclePlayIcon size={38} className="text-white" />
                            </div>
                        </AlertDialogTrigger>
                        <AlertDialogOverlay>
                            <AlertDialogContent className="max-w-2xl p-4 bg-[#17E1B0] rounded-xl  md:rounded-xl">
                                <video controls className="w-full rounded-lg">
                                    <source src="/your-video.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <AlertDialogFooter>
                                    <AlertDialogCancel className="text-white bg-[#D1A42C] hover:text-white hover:bg-gray-800 rounded-xl">
                                        Close
                                    </AlertDialogCancel>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialogOverlay>
                    </AlertDialog>{" "}
                </div>
                <div className="md:pl-5 py-3">
                    <p className='md:max-w-md w-full text-white'>Since our inception, we have implemented targeted programs across healthcare, education, economic empowerment and more to uplift disadvantaged youth and communities across Gambia.</p>
                    

                </div>
            </div>
        </div>
    )
}

export default ProjectBanner