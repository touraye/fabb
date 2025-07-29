"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { brands, logos } from "@/constant";
import Image from "next/image";


const LogoSlider = () => {
  const tripleLogos = [...logos, ...logos, ...logos];
  return (
    <div className="w-full lg:py-16 py-8">
      <section className=" max-container 2xl:w-[85%] w-[90%] mx-auto overflow-hidden">
        <motion.div
          className="flex space-x-16 w-max"
          animate={{ x: ["0", "-33.3333%"] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          {tripleLogos.map((logo, index) => (
            <div key={index} className="lg:w-20 w-16 flex items-center md:justify-center">
              <Image 
                src={logo.src}
                alt="Brand logo"
              />
            </div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default LogoSlider;
