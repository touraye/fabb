'use client';
import Image from "next/image";
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Typography from "../shared/typography";
import StarRating from "../reusable/star-rating";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay"


const testimonials = [
  {
    text: "When the ground shook and homes crumbled in our village during the devastating Turkey earthquake, lives were turned upside down in an instant. Desperate for aid, we felt utterly helpless – until the New Africa Foundation arrived. They helped set up shelters, organize food and water, and provide emergency care.",
    name: "Yousef Dauda",
    role: "Village Leader Diyarbakir Province, Turkey",
    flag: "https://newafricafoundation.org/wp-content/uploads/2023/11/Roundel_flag_of_Turkey.svg",
  },
  {
    text: "When my wife had complications after the birth of our conjoined newborns, we depleted our meager savings just getting to the hospital. With surgery urgently needed, the staggering costs left me desperate to help them. Through its special healthcare fund, the New Africa Foundation kindly paid for the full surgery!",
    name: "Kwesi Agyemang",
    role: "Father, Conjoined Twins, Ghana",
    flag: "https://newafricafoundation.org/wp-content/uploads/2023/10/Container-1.png",
  },
  {
    text: "When my wife had complications after the birth of our conjoined newborns, we depleted our meager savings just getting to the hospital. With surgery urgently needed, the staggering costs left me desperate to help them. Through its special healthcare fund, the New Africa Foundation kindly paid for the full surgery!",
    name: "Sammy Stranger",
    role: "Father, Conjoined Twins, Ghana",
    flag: "https://newafricafoundation.org/wp-content/uploads/2023/10/Container-1.png",
  },
  {
    text: "When my wife had complications after the birth of our conjoined newborns, we depleted our meager savings just getting to the hospital. With surgery urgently needed, the staggering costs left me desperate to help them. Through its special healthcare fund, the New Africa Foundation kindly paid for the full surgery!",
    name: "Christopher Nkunku",
    role: "Father, Conjoined Twins, Ghana",
    flag: "https://newafricafoundation.org/wp-content/uploads/2023/10/Container-1.png",
  },
];

export function Testimonials() {
  return (
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
        className="flex items-stretch"
      >
        {testimonials.map((data, index) => (
          <CarouselItem key={index} className="flex flex-col items-stretch md:basis-1/2 lg:basis-1/3">
            <Card
              key={data.name}
              className="w-full h-full flex flex-col justify-between gap-2 border-gray-200"
            >
              <CardHeader className="flex flex-row items-center gap-4">
                <Image
                  src={data.flag}
                  alt={`${data.name} flag`}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="flex flex-col -gap-2">
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
              <CardContent className="xl:pt-3">
                <Typography
                  typo="body-large-regular"
                  className="!leading-relaxed text-gray-600"
                >
                  {data.text}
                </Typography>
              </CardContent>
              <CardFooter 
                className="h-full xl:py-3 flex flex-col justify-end"
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
          // <div key={index} className="bg-[#cde3db] p-4 rounded-lg w-full">
          //   <p className="text-gray-800 font-medium">{testimonial.text}</p>
          //   <div className="flex items-center gap-3 mt-4">
          //     <Image
          //       src={testimonial.flag}
          //       alt={`${testimonial.name} flag`}
          //       width={40}
          //       height={40}
          //       className="rounded-full"
          //     />
          //     <div>
          //       <p className="font-bold text-black">{testimonial.name}</p>
          //       <p className="text-gray-600 text-sm">{testimonial.role}</p>
          //     </div>
          //   </div>
          // </div>
        ))}
      </CarouselContent>

    </Carousel>
  );
}