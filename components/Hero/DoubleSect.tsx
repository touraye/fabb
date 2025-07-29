'use client';
import React from "react";
import testImg from "@/public/assets/images/lucky_baby.jpg";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Typography from "../shared/typography";
import StarRating from "../reusable/star-rating";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import gambiaFlag from "@/public/assets/images/gambia_flag.png"

const testimonials = [
  {
    text: `“The first-born baby was welcomed at 1:46 a.m., with her mother Ananias E. Mendy from Besse village in Foni.”
            — The Point Newspaper, Jan 2, 2020
            Though not a direct quote, this was the only named mother linked to the 2020 Baby of the Year event across all hospitals covered.
          `,
    name: "Ananias E. Mendy",
    role: "Bundung Maternal and Child Hospital",
    time_of_birth: "1 : 46AM",
    location: "Besse village, Foni",
  },
  {
    text: `Quote (reported via hospital staff):
            “We are happy that our own staff in the hospital happens to be a winner of this wonderful gift.”
            — Kebba Sanneh, EFSTH PRO (referring to a hospital staff member who gave birth)
            This suggests that the mother was both a staff member and beneficiary, but her name was not disclosed publicly.`,
    name: "Unnamed Mother (EFSTH) ",
    time_of_birth: "12 : 49AM",
    location: "None",
    role: "Edward Francis Small Teaching Hospital",
  },
  {
    text: `While not directly quoted, Binta Jassey, the mother of the first baby, was acknowledged by the hospital CEO during the ceremony.
          “Our first baby in Kanifing was born at 12:03 a.m. and is a girl. We hope the beneficiaries will make the best use of the materials given to them.”
          — Kebba Manneh, CEO of Kanifing General Hospital
          `,
    name: "Unnamed Mother ",
    time_of_birth: "12 : 03AM",
    location: "None",
    role: "Kanifing General Hospital",
  },
  {
    text: `Her baby was the second born at Bundung hospital, and she was briefly named in coverage but not quoted directly.`,
    name: "Saho Ceesay",
    time_of_birth: "1 : 55AM",
    location: "Besse village, Foni",
    role: "Bundung (Second Baby)",
  },
];

const DoubleSect = () => {
  const router = useRouter()

  return (
    <div className="lg:py-0 pb-16 flex lg:flex-row flex-col justify-end lg:gap-0 gap-12 lg:max-h-[700px] xl:h-[70vh] bg-app-primary ">
      <div className="lg:hidden lg:w-1/2 h-fit relative flex items-center justify-between">
        <div className="w-full md:h-full xs:h-[400px] h-[300px]">
          <Image 
            src={testImg}
            alt="Testimony"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-30 z-[10]" />
          <div className="relative w-full h-full py-10 flex flex-col justify-between items- xs:gap-16 gap-8 text-white z-[20]">
            <div className="w-[90%] mx-auto flex flex-col justify-center items- gap-4">
              <Typography
                typo="header-2-semibold"
                className="!text-white"
              >
                Lucky Baby Program
              </Typography>
              <p className="font-normal">
                The stories of first babies born each year
              </p>
            </div>
            <div className="w-[90%] mx-auto">
              <Button
                variant="primary"
                onClick={() => router.push("/lucky-babies")}
                className="w-fit px-6 py-6 text-lg !rounded-[0.5rem]"
              >
                View More
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:max-w-[45rem] lg:w-[55%] xl:py-0 py-8 bg-app-primary flex flex-col items- justify-center lg:gap-4 gap-12 text-white">
        {/* <div className="max-w-xl p-8">
          <h1 className="text-2xl md:text-2xl font-bold text-white">
            Our Focus Areas
          </h1>
          <p className="text-white font-medium">
            At the core of our mission is cultivating Africa&apos;s next generation
            of leaders. To do this, we devote our programs and resources to key
            areas that will empower youth and lift up communities across the
            continent.
          </p>
          <Accordion type="single" collapsible className="w-full text-white">
            <AccordionItem value="item-1">
              <AccordionTrigger>Religion</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Health</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that match the other
                component&apos;s aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
              National</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if you
                prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Global</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if you
                prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>Education</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if you
                prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div> */}
        <div className="xl:w-[70%] lg:w-[85%] w-[90%] mx-auto flex flex-col gap-3">
          <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">
            Beneficiary Stories
          </h1>
          <p className="font-normal ">
            Powerful proof of impact comes from those whose lives have
            been uplifted.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent
            className="lg:pt-5 "
          >
            {testimonials.map((data, index) => (
              <CarouselItem key={index} className="  flex flex-col items-stretch">
                <Card
                  key={data.name}
                  className="xl:w-[70%] lg:w-[85%] w-[90%] mx-auto h-full flex flex-col justify-between gap-2 border-gray-200 bg-white"
                >
                  <CardHeader className="pb-0 flex flex-row items-center gap-4">
                    <Image
                      src={gambiaFlag}
                      alt={`${data.name} flag`}
                      className="w-12 h-12 object-cover rounded-full"
                    />
                    <div className="flex flex-col -gap-2 text-black">
                      <Typography
                        typo="body-large-medium"
                      >
                        {data.name}
                      </Typography>
                      <Typography
                        typo="body-medium-medium"
                        className="!leading-tight !text-gray-600"
                      >
                        {data.role}
                      </Typography>
                    </div>
                  </CardHeader>
                  <CardContent className="md:pt-3 pb-0 flex flex-col">
                    {data.time_of_birth && (
                      <Typography
                        typo="body-medium-medium"
                        className="!leading-relaxed text-gray-600"
                      >
                        Time of birth: <span className="text-black">{data.time_of_birth}</span>
                      </Typography>
                    )}
                    <Typography
                      typo="body-medium-regular"
                      className="!leading-relaxed text-gray-600"
                    >
                      {data.text}
                    </Typography>
                  </CardContent>
                  <CardFooter 
                    className="h-full xl:py-2 flex flex-col justify-end"
                  >
                    <div className="w-full h-fit flex justify-between items-center">
                      <div className="text-app-primary">
                        <Typography
                          typo="body-large-semibold"
                        >5/5</Typography>
                      </div>
                      <StarRating rating={5} />
                    </div>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

        </Carousel>
      </div>

      {/* Side 2 */}
      <div className="hidden w-1/2 relative group overflow-hidden lg:flex items-center justify-center">
        <div className="w-full h-full">
          <Image 
            src={testImg}
            alt="Testimony"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center">
          <div className="absolute inset-0 group-hover:bg-black opacity-30 z-[10]" />
          <div className="relative w-full xl:h-[470px] h-full xl:py-0 py-8 flex flex-col justify-between items-center gap- text-white z-[20]">
            <div className="w-[80%] mx-auto flex flex-col items-start gap-3 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-transform duration-300 delay-100">
              <Typography
                typo="header-3-semibold"
                className="!text-white !text-center z-[20]"
              >
                Lucky Baby Program
              </Typography>
              <p className="font-normal  z-[20]">
                The stories of first babies born each year
              </p>
            </div>
            <div className="w-[80%] mx-auto">
              <Button
                variant="primary"
                onClick={() => router.push("/lucky-babies")}
                className="px-8 py-6 text-lg !rounded-[0.5rem] z-[20]"
              >
                View More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoubleSect;
