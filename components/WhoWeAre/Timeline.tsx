"use client";
import React, { useRef } from "react";
import Image from "next/image";
import fabbImg from "@/public/assets/images/FaBB_img.jpg"
import missionImg from "@/public/assets/images/fabb_mission.jpg"
import visionImg from "@/public/assets/images/fabb_vision.jpg"

const Timeline = () => {
  const years = ["FaBB Story", "Mission", "Vision"];
  const sections = useRef<{ [key: string]: HTMLElement | null }>({});

  const scrollToYear = (title: string) => {
    sections.current[title]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="max-container 2xl:w-[80%] w-[90%] mx-auto my-10 flex xs:flex-row flex-col max-h-[900px] xs:h-screen ">
      {/* Left Sidebar */}
      <div className="xs:block hidden md:w-[120px] w-[100px] md:pt-0 pt-3 overflow-y-auto xs:border-r border-gray-300">
        <ul className="space-y-2">
          {years.map((title) => (
            <li className="" key={title}>
              <button
                onClick={() => scrollToYear(title)}
                className="text-gray-700 hover:text-black font-medium"
              >
                {title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-full sm:px-8 px-4 overflow-y-auto">
        {years.map((title) => (
          <div
            key={title}
            ref={(el) => {
              if (el) {
                sections.current[title] = el;
              }
            }}
            className="border-b-4 border-black lg:pb-20 pb-10 lg:mb-16 mb-8 grid lg:grid-cols-4  lg:gap-6 gap-4"
          >
            <h2 className="xl:text-4xl lg:text-4xl md:text-3xl text-[1.7rem] font-bold col-span-1 pt-8 lg:border-r border-gray-300">{title}</h2>
            <div className="sm:col-span-3 lg:pl-3">
              {title === "FaBB Story" && (
                <div>
                  <h3 className="lg:text-3xl text-2xl lg:mb-2 font-bold">
                    How FaBB Foundation started
                  </h3>
                  <div className="w-10 border-2 border-[#05D192] lg:mt-6 mt-3 lg:mb-4 mb-2"></div>
                  <p className="md:text-xl text-lg text-gray-900 mb-[6.5%]">
                    The foundation, established on May 1, 2017, by Her Excellency Dr. Fatoumatta Bah-Barrow, focuses on uplifting 
                    disadvantaged women, underprivileged youth, children, and vulnerable communities across The Gambia. Our 
                    initiatives include providing scholarships, drilling boreholes, distributing medical supplies, and supporting 
                    health and education programs.
                  </p>
                  <Image
                    src={fabbImg}
                    alt="FABB Story Event"
                    width={800}
                    height={500}
                    className="w-full rounded-lg shadow-md"
                  />
                </div>
              )}
              {title === "Mission" && (
                <div>
                  <h3 className="lg:text-3xl text-2xl mb-2 font-bold">Mission of FaBB Foundation</h3>
                  <div className="w-10 border-2 border-[#05D192] lg:mt-6 mt-3 lg:mb-4 mb-2"></div>
                  <p className="md:text-xl text-lg text-gray-900 mb-[6.5%]">
                    To empower Gambian communities through sustainable healthcare, education, and development programs that 
                    create lasting positive change and improve quality of life.
                  </p>
                  <Image
                    src={missionImg}
                    alt="FABB Story Event"
                    width={800}
                    height={500}
                    className="w-full rounded-lg shadow-md"
                  />
                </div>
              )}
              {title === "Vision" && (
                <div>
                  <h3 className="lg:text-3xl text-2xl mb-2 font-bold">The Vision of FaBB Foundation</h3>
                  <div className="w-10 border-2 border-[#05D192] lg:mt-6 mt-3 lg:mb-4 mb-2"></div>
                  <p className="md:text-xl text-lg text-gray-900 mb-[6.5%]">
                    A thriving Gambia where every community has access to quality healthcare, education, and opportunities for 
                    sustainable development and prosperity.
                  </p>
                  <Image
                    src={visionImg}
                    alt="FABB Story Event"
                    width={800}
                    height={500}
                    className="w-full rounded-lg shadow-md"
                  />
                </div>
              )}
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
