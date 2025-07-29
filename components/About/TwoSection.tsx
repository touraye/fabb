import Image from "next/image";
import React from "react";
import { FaGooglePlay } from "react-icons/fa";
import boardImg from "@/public/assets/images/leadership_img.jpg";

const TwoSection = () => {
  return (
    <div className="flex mt-[40px] flex-col md:flex-row justify-end items-center md:h-[70vh] md:max-h-[650px]">
      {/* Left Content - 1/2 Width */}
      <div className="h-full md:w-1/2 md:py-0 py-12 bg-gray-100 flex items-center justify-end">
        <div className="2xl:w-[80%] md:w-[90%] w-[95%] lg:max-w-[41rem] lg:pr-8 pr-2 flex flex-col lg:gap-2">
          <h3 className="text-xl text-gray-600">
            Want to participate in decision making?
          </h3>
          <h2 className="xs:text-4xl text-3xl md:text-3xl lg:text-5xl lg:leading-tight leading-snug font-bold text-app-primary mt-2">
            Apply to join our board of directors.
          </h2>
          <p className="text-gray-500 mt-4 text-lg">
            The process of becoming a board member is simple and convenient,
            kindly submit your credentials for review.
          </p>
          <button className="w-fit mt-3 bg-[#DB2777] xs:text-base text-sm text-white font-bold py-3 px-6 rounded shadow-md hover:bg-yellow-500">
            REQUEST MEMBERSHIP NOW
          </button>
        </div>
      </div>

      <div className="w-full md:w-1/2 h-full relative">
        <Image
          src={boardImg}
          alt="Volunteers"
          className="w-full h-full object-cover"
        />
        {/* <div className="absolute space-y-1 inset-0 flex flex-col items-center justify-center text-white bg-black/30">
          <button className="bg-white text-black font-bold p-8 rounded-full  shadow-md animate-pulse">
            <FaGooglePlay className="text-yellow-500" />
          </button>
          <h3 className="text-xl">Watch This Video</h3>
          <h2 className="text-3xl font-bold uppercase">Play it</h2>
        </div> */}
      </div>
    </div>
  );
};

export default TwoSection;
