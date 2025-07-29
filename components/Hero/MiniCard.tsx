import React from 'react';
import { CirclePlayIcon } from "lucide-react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogOverlay,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Image from "next/image";
import life_changing from "@/public/assets/images/life_changing.jpg"

const MiniCard = () => {
  return (
    <div className="relative w-full mt-12 h-[70vh] max-h-[650px] overflow-hidden">
      <Image
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={life_changing    }
        alt="Empowering Nations"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 flex flex-col justify-center bg-black bg-opacity-50 ">
        <div className='max-container w-[80%] mx-auto flex items-center sm:flex-row flex-col sm:gap-16 gap-10'>
          <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-bold md:space-y-6 space-y-4">
            <div>
                Transforming <span className="text-[#17E1B0]">Lives</span> <br />
            </div>
            <div>
                Since <span className="text-[#17E1B0]">2016.</span>
            </div>
          </h1>
        
        <div className="flex justify-center items-center space-x-8">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <div className="bg-[#DB2777] xl:p-4 p-2 rounded-full animate-pulse cursor-pointer">
                <CirclePlayIcon size={35} className="text-white" />
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
  );
};

export default MiniCard;