import LogoCarousel from "@/components/About/LogoCarousel";
import TeamCards from "@/components/About/TeamCards";
import TwoSection from "@/components/About/TwoSection";
import LogoSlider from "@/components/Hero/LogoSlider";
import React from "react";

const page = () => {
  return (
    <div className="w-full">
      <div className="max-container 2xl:w-[80%] w-[90%] mx-auto pb-10  border-b border-gray-300 lg:pt-10 pt-5">
        <div className="xs:space-y-8 space-y-4 max-w-6xl">
          <h1 className="font-bold lg:text-5xl xs:text-4xl text-3xl max-md:text-4xl tracking-[-0.14rem]">
            LEADERSHIP
          </h1>
          <p className="lg:text-xl text-lg max-md:text-base font-normal text-black">
            The Open Society leadership team works alongside our staff,
            partners, and grantees to help promote the values of justice.
          </p>
        </div>
      </div>
      <TeamCards />
      <TwoSection />
      <LogoCarousel />
    </div>
  );
};

export default page;
