'use client';
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const images = [
  {
    src: "https://img.freepik.com/free-photo/volunteers-holding-boxes-containing-donations-charity_23-2149230563.jpg?ga=GA1.1.1411535131.1738618804&semt=ais_hybrid",
    alt: "Food distribution",
  },
  {
    src: "https://img.freepik.com/free-photo/volunteers-preparing-boxes-with-food-donations-using-tablet_23-2148732714.jpg?ga=GA1.1.1411535131.1738618804&semt=ais_hybrid",
    alt: "Community gathering",
  },
  {
    src: "https://newafricafoundation.org/wp-content/uploads/2023/11/EidDonation_FreedomMovement_GrahlPhotography84.jpg",
    alt: "Community gathering",
  },
  {
    src: "https://img.freepik.com/free-photo/volunteer-collecting-donation-box-from-another-volunteer_23-2149230540.jpg?ga=GA1.1.1411535131.1738618804&semt=ais_hybrid",
    alt: "Community gathering",
  },
  {
    src: "https://img.freepik.com/free-photo/guy-girl-with-check-boxes-volunteers-masks-with-laptop-boxes-with-humanitarian-aid_1157-46595.jpg?ga=GA1.1.1411535131.1738618804&semt=ais_hybrid",
    alt: "Community gathering",
  },
  // repeat same thing but the src should be empty create 5 of them
  {
    src: "https://img.freepik.com/free-photo/medium-shot-men-helping-social-cause_23-2149142839.jpg?ga=GA1.1.1411535131.1738618804&semt=ais_hybrid",
    alt: "",
  },
  {
    src: "https://img.freepik.com/free-photo/smiley-male-volunteer-holding-food-donations_23-2148732651.jpg?ga=GA1.1.1411535131.1738618804&semt=ais_hybrid",
    alt: "",
  },
  {
    src: "https://img.freepik.com/free-photo/people-holding-food-donations-close-up_23-2149196122.jpg?ga=GA1.1.1411535131.1738618804&semt=ais_hybrid",
    alt: "",
  },
  {
    src: "https://img.freepik.com/free-photo/father-son-spending-time-together_23-2148943161.jpg?ga=GA1.1.1411535131.1738618804&semt=ais_hybrid",
    alt: "",
  },
  {
    src: "https://img.freepik.com/free-photo/guy-girl-with-check-boxes-volunteers-masks-with-laptop-boxes-with-humanitarian-aid_1157-46591.jpg?ga=GA1.1.1411535131.1738618804&semt=ais_hybrid",
    alt: "",
  },

  {
    src: "https://img.freepik.com/free-photo/people-getting-street-food_23-2149004327.jpg?ga=GA1.1.1411535131.1738618804&semt=ais_hybrid",
    alt: "",
  },
  {
    src: "https://img.freepik.com/free-photo/volunteer-helping-with-donation-box_23-2149230505.jpg?ga=GA1.1.1411535131.1738618804&semt=ais_hybrid",
    alt: "",
  },

  // Add more images as needed
];

const Grids = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div className="w-full py-12">
      <main className="flex flex-col  py-6 m-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} 
              onClick={() => { setIndex(index); setOpen(true); }}
              className=""
            >
              <Image
                src={image.src}
                alt={image.alt}
                className="rounded-lg border border-gray-300"
                width={200}
                height={100}
                layout="responsive"
              />
            </div>
          ))}
        </div>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index+1}
          slides={images.map((img) => ({ src: img.src }))}
          plugins={[Thumbnails]}
        />
      </main>
    </div>
  );
};
export default Grids;
