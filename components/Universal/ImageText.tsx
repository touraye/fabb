import Image from 'next/image'
import React from 'react'

const ImageText = () => {
  return (
    <div className='flex justify-center my-10 px-[4%] md:px-[10%]'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <Image
            src="https://newafricafoundation.org/wp-content/uploads/2023/11/happy-portrait-and-black-woman-student-at-college-standing-in-an-outdoor-garden-in-south-africa-h.jpg"
            alt="Description"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-md:text-sm flex flex-col ">
          <p className="mb-7">
            The New Africa Foundation is an entity focused on addressing challenges in Africa. Our mission goes beyond typical charitable activities such as distributing food. We strive to bridge religious, societal, racial, and interpersonal gaps. Our multifaceted approach not only brings smiles to people’s faces but also actively works towards fostering unity and understanding.
          </p>
          <p className="mb-7">
            The New Africa Foundation operates as a self-funded organization dedicated to addressing socio-economic issues and making a positive impact on various communities. Our outreach extends to diverse areas, ranging from prisons to schools for the blind and deaf. We are not limited to specific countries, as our efforts span across Africa and occasionally extend beyond its borders.
          </p>
          <p>
            It’s crucial to note that the New Africa Foundation distinguishes itself by not relying on donations; the organization’s accomplishments underscore its commitment to making a meaningful difference. This aspect sets us apart from other foundations with similar goals.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ImageText
