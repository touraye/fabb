import Image from 'next/image'

import React from 'react'

const MissionVision = () => {
    return (
        <div>
            <div className='bg-[#FAFAFA] flex justify-center my-10 px-[4%] md:px-[10%] py-20'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="max-md:text-sm text-base flex flex-col ">
                        <div className="mb-7">
                            <h2 className='font-bold text-5xl mb-7'>Our Mission</h2>
                            <p className="mb-4">
                                Our mission entails disseminating the narrative that Africans are not solely reliant on external aid; rather, we aim to underscore the paradigm shift wherein Africans are poised to contribute aid to the global community.
                            </p>
                            <p className="mb-4">
                                New Africa epitomizes this transformative ethos. Recognizing the prevailing imagery of African children and nations perpetuated by the world—marked by destitution and hunger—our foundation endeavors to cultivate, motivate, and elevate emerging youth in Africa through diverse channels. We strive to facilitate their engagement in impactful modes of self-governance and the establishment of robust business ventures and entrepreneurial endeavors.
                            </p>
                            <p className=''>
                                In contributing value to society across various domains, we endeavor to counter the prevailing misrepresentations of our continent. New Africa assumes the role of a representative entity, bridging the chasm between the populace and the responsibilities that conventionally fall within the domain of larger institutions.
                            </p>
                        </div>

                        <div className="">
                            <h2 className='font-bold text-5xl mb-7'>Our Vision</h2>
                            <p className="mb-4">
                            Our visionary pursuit is centered on a profound transformation of the ordinary individual’s mindset.
                            </p>
                            <p className="mb-4">
                            Irrespective of one’s health, physical abilities, wealth, poverty, age, or youth, our goal is to illuminate the understanding that the essence of the future lies in embracing a new beginning—a pristine genesis in our actions, a tabula rasa of endeavors and ideas.
                            </p>
                            <p className=''>
                            This encapsulates our overarching vision: the metamorphosis of African lives, guiding them to perceive that their future unfolds as the inaugural pages of a freshly inscribed volume, symbolizing A New Dawn.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-y-10">
                        <Image
                            src="https://newafricafoundation.org/wp-content/uploads/2023/11/africa-volunteering-charity-people-and-ecology-1024x681.jpg"
                            alt="Description"
                            width={500}
                            height={500}
                            className="w-full h-full object-cover"
                        />

                        <Image
                            src="https://newafricafoundation.org/wp-content/uploads/2023/11/IMG_0446-1024x683.jpg"
                            alt="Description"
                            width={500}
                            height={500}
                            className="w-full h-full object-cover"
                        />

                    </div>
                </div>
            </div>

        </div>
    )
}

export default MissionVision