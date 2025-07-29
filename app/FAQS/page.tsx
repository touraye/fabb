import Faqs from "@/components/FAQS/Faqs";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#F4F4F4]">
      <div className="w-full bg-[#367978] px-[150px] py-[70px]">
        <p className="text-4xl lg:text-7xl text-white font-bold">FAQs</p>
      </div>

      <Faqs />
    </div>
  );
};

export default page;
