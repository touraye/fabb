import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import CategoriesList from "@/components/CategoriesList";
import LogoSlider from "@/components/Hero/LogoSlider";
import Circle from "@/components/Hero/Cirlcle";
import VideoHero from "@/components/Hero/VideoHero";
// import Carder from "@/components/Hero/Carder";
import MiniCard from "@/components/Hero/MiniCard";
import DoubleSect from "@/components/Hero/DoubleSect";
import Carder from "@/components/Hero/Carder";
import Accord from "@/components/Hero/Accords";
import Gallery from "@/components/Hero/Gallery";
import GambiaMap from "@/components/Hero/Map";

const Home = () => {
  
  return (
    <div>
      <CategoriesList />
      <VideoHero />
      <section className="max-container 2xl:w-[80%] w-[90%] mx-auto">
        <div className="bg-app-primary relative md:px-10 py-6 p-5 mb-16 md:-mt-[150px] -mt-[100px] max-md:mx-auto md:space-y-5 space-y-3 z-60 max-w-[40rem]">
          <h2 className="font-medium text-xl text-white uppercase">Our Mission</h2>
          <p className="text-white text-justify">
            Our mission entails disseminating the narrative that Gambians are
            solely reliant on external aid; rather, we aim to underscore the
            paradigm shift wherein foundations like FaBB empower Gambian communities through sustainable healthcare, quality education, and development programs that create lasting and long term positive change, improving the overall standard of leaving for Gambians.
          </p>
          <Link
            className="font-medium text-white text-sm uppercase flex items-center space-x-2"
            href="/who-we-are"
          >
            <span>Learn More </span> <ArrowRight size={12} className="text-white" />
          </Link>
        </div>
      </section>
      <LogoSlider />
      <Circle />
      <MiniCard />
      <GambiaMap />
      <DoubleSect />
      <Carder />
      
      <Gallery/>
      <Accord />
      
    </div>
  );
};

export default Home;
