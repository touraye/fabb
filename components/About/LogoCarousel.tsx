'use client';

import * as React from "react";
import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarImage } from "../ui/avatar";
import Link from "next/link";
import { logos } from "@/constant";
import Image from "next/image";



const LogoCarousel = () => {
  const tripleLogos = [...logos, ...logos, ...logos];
  return (
    <div className="py-16">

      <section className="max-container 2xl:w-[85%] w-[90%] mx-auto md:space-y-6 overflow-hidden">
        <h1 className="md:text-3xl text-2xl text-blue-950 font-bold text-center pb-12">
          OUR NETWORK
        </h1>
        <motion.div
          className="flex space-x-20 w-max"
          animate={{ x: ["0", "-33.3333%"] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear", repeatType: "loop" }}
        >
          {tripleLogos.map((logo, index) => (
            <div key={index} className="lg:w-20 w-16 flex items-center md:justify-center">
              <Image
                src={logo.src}
                alt="Brand logo"
                className="w-full h-fit"
              />
            </div>
          ))}
        </motion.div>
        {/* <motion.div
          className="lg:hidden flex space-x-8"
          animate={{ x: [0, -600] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          {logos.map((logo, index) => (
            <Link key={index} href={logo.href} className="lg:w-32 w-32 flex items-center md:justify-center">
              <Image 
                src={logo.src}
                alt="Brand logo"
              />
            </Link>
          ))}
        </motion.div> */}
      </section>
    </div>
  );
};

export default LogoCarousel;