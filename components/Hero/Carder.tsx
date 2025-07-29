'use client';
import React from "react";
import Image from "next/image";
import Project1Img from '@/public/assets/images/project_1.jpeg'
import Project2Img from '@/public/assets/images/project_2.jpg'
import Project3Img from '@/public/assets/images/project_3.jpeg'
import Project4Img from '@/public/assets/images/project_3.jpeg'
import Project5Img from '@/public/assets/images/project_2.jpg'
import Project6Img from '@/public/assets/images/project_6.jpeg'
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Typography from "../shared/typography";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { successful_projects } from "@/constant";

const projects = [
  {
    id: "1",
    img: Project1Img,
    title: "The Convention-Igniting The Voices Of Africa",
    description: `The Convention is sponsored by the New Africa Foundation. Event is scheduled to take place`,
  },
  {
    id: "2",
    img: Project2Img,
    title: "The University Challenge-Entrepreneurship, Leadership, Wealth Creation",
    description: `The University Challenge envisions a transformative departure from the conventional approach of.`,
  },
  {
    id: "3",
    img: Project3Img,
    title: "The Convention-Igniting The Voices Of Africa",
    description: `The Convention is sponsored by the New Africa Foundation. This event is scheduled to take place.`,
  },
  {
    id: "4",
    img: Project4Img,
    title: "The Convention – Igniting The Voices Of Africa",
    description: `The Convention is sponsored by the New Africa Foundation. This event is scheduled to take place.`,
  },
  {
    id: "5",
    img: Project5Img,
    title: "The Convention – Igniting The Voices Of Africa",
    description: `The Convention is sponsored by the New Africa Foundation. This event is scheduled to take place.`,

  },
  {
    id: "6",
    img: Project6Img,
    title: "The Convention – Igniting The Voices Of Africa",
    description: `The Convention is sponsored by the New Africa Foundation. This event is scheduled to take place.`,

  },
]

const Carder = () => {
  const router = useRouter();

  return (
    <div className="w-full md:py-12 py-8">
      <section className="max-container 2xl:w-[80%] w-[90%] mx-auto space-y-10">
        <div className="flex items- flex-col gap-3 ">
          <h2 className="text-gray-900 text-4xl font-semibold">Projects</h2>
          <p className=" text-lg text-gray-700">
            Since our inception, we have implemented targeted programs across
            healthcare, education, and economic empowerment.
          </p>
        </div>

        <div className="w-full hidden lg:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 m-auto">
          {successful_projects.slice(0, 6).map((data, index) => (
            <Card
                  key={data.id}
                  className="flex flex-col justify-between rounded-none border-none group"
              >
              <div className="w-full md:h-[250px] sm:h-[200px] h-[250px] overflow-hidden">
                  <Image  
                  src={data.img}
                  alt={`Project ${index+1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
              </div>
              <CardHeader
                  className="px-3 pb-2"
              >
                  <Typography
                  typo="body-large-semibold"
                  className="!leading-tight"
                  >
                  {data.heading}
                  </Typography>
              </CardHeader>
              <CardContent className="px-3 ">
                  <Typography 
                      className='line-clamp-2'
                  >
                  {data.description}
                  </Typography>
              </CardContent>
              <CardFooter
                  className=" px-3 py-2 flex flex-col items-start justify-end border-t border-gray-200"
              >
                  <div className='h-fit '>
                      <Button
                          variant="primary"
                          onClick={() => router.push(`/our-projects/${data.id}`)}
                          className="w-fit px-0 text-[#DB2777] text-start hover:bg-white flex border-none shadow-none bg-white !font-bold"
                      >
                          Explore project
                          <ArrowRight />
                      </Button>
                  </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="w-full lg:hidden grid sm:grid-cols-2 lg:grid-cols-3 gap-6 m-auto">
          {successful_projects.slice(0, 3).map((data, index) => (
            <Card
                  key={data.id}
                  className="flex flex-col justify-between rounded-none border-none group"
              >
              <div className="w-full md:h-[250px] sm:h-[200px] h-[250px] overflow-hidden">
                  <Image  
                  src={data.img}
                  alt={`Project ${index+1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
              </div>
              <CardHeader
                  className="px-3 pb-2"
              >
                  <Typography
                  typo="body-large-semibold"
                  className="!leading-tight"
                  >
                  {data.heading}
                  </Typography>
              </CardHeader>
              <CardContent className="px-3 ">
                  <Typography 
                      className='line-clamp-2'
                  >
                  {data.description}
                  </Typography>
              </CardContent>
              <CardFooter
                  className=" px-3 py-2 flex flex-col items-start justify-end border-t border-gray-200"
              >
                  <div className='h-fit '>
                      <Button
                          variant="primary"
                          onClick={() => router.push(`/our-projects/${data.id}`)}
                          className="w-fit px-0 text-[#DB2777] text-start hover:bg-white flex border-none shadow-none bg-white !font-bold"
                      >
                          Explore project
                          <ArrowRight />
                      </Button>
                  </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Link
            className="uppercase flex flex-row text-white px-4 border-b-4  border-app-primary bg-[#DB2777] py-3 font-semibold text-center"
            href="/our-projects"
          >
            Successful stories<ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Carder;