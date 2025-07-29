import React from 'react'
import { ArrowRight, CirclePlayIcon } from "lucide-react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogOverlay,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Link from "next/link";

const VideoHero = () => {
  return (
    <div className="relative w-full md:h-[85vh] h-[60vh] max-h-[650px] overflow-hidden mb-10">
    <video
      className="absolute top-0 left-0 w-full h-full object-cover"
      src="/fabb_hero.mp4"
      autoPlay
      loop
      muted
    />
    <div className=" absolute inset-0 flex justify-center flex-col bg-black bg-opacity-30 ">
      <div className='max-container 2xl:w-[80%] w-[90%] mx-auto flex flex-col space-y-4'>
          <h1 className="w-full xl:pb-6 lg:pb-12 md:pb-6 pb-3 flex flex-col gap-4 text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold">
            <div>
              Transforming <span className="text-[#17E1B0]">Gambia.</span>
            </div>
            <div>
              Empowering <span className="text-[#17E1B0]">Lives.</span>
            </div>
          </h1>
          <div className="flex flex-row space-x-8">
            <Link
              className="px-5 max-md:px-2 max-md:py-2 flex items-center py-3 bg-white font-normal md:text-base text-sm uppercase flex-row border-b-4 border-[#DB2777]"
              href="#"
            >
              learn more
              <ArrowRight size={18} className="ml-2 flex items-center justify-center" />
            </Link>
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
            </AlertDialog>
          </div>
        </div>
      </div>
  </div>
)
}

export default VideoHero
