import React from 'react'
import Image from 'next/image'

const focus_areas = [
    {
        id: "1",
        title: "Quality Education",
        icon: "https://cdn-icons-png.flaticon.com/128/2702/2702134.png",
    },
    {
        id: "2",
        title: "Quality Healthcare",
        icon: "https://cdn-icons-png.flaticon.com/128/4419/4419981.png",
    },
    {
        id: "3",
        title: "Advocacy & Empowerment",
        icon: "https://cdn-icons-png.flaticon.com/128/16683/16683906.png",
    },
    {
        id: "4",
        title: "Infrastructure Development",
        icon: "https://cdn-icons-png.flaticon.com/128/502/502854.png",
    },
    
]

const Circle = () => {
    return (
        <div className="w-full bg-white text-center py-16">
            <div className="max-container 2xl:w-[80%] w-[90%] mx-auto">
                <div className="bg-[#DB2777] text-white font-semibold py-3 px-10 inline-block rounded-md mb-6">
                    FaBB 2025: FOCUS AREAS
                </div>
                <h2 className="md:block hidden text-4xl lg:text-5xl font-bold text-[#000] mb-3">
                    Shaping a brighter tomorrow through
                </h2>
                <h2 className="md:block hidden mt-2 text-4xl lg:text-5xl font-bold text-[#000] mb-5">
                    empowerment & Development.
                </h2>
                <h2 className="md:hidden block mt-2 text-3xl sm:text-4xl lg:text-5xl leading-tight font-bold text-[#000] mb-5">
                    Shaping a brighter tomorrow through empowerment & Development.
                </h2>

                <p className="text-gray-700 mb-10 text-lg">
                    Dedicated to addressing healthcare, education, socio-economic, climate and environmental issues hence making vast
                    impact across the Gambia.
                </p>
                <div className="grid lg:grid-cols-4 grid-cols-2 gap-[50px] justify-center">
                    {focus_areas.map((data, index) => (
                        <div 
                            key={data.id}
                            className="flex flex-col items-center">
                            <div className="rounded-full xl:p-10 p-8 md:mb-4 mb-2 border-2 hover:bg-app-primary border-[#000] transition duration-500">
                                <Image
                                    src={data.icon}
                                    alt={`${data.title} ${index+1}`}
                                    width={48}
                                    height={48}
                                />
                            </div>
                            <p className="sm:text-2xl text-xl font-semibold text-[#000] whitespace-wrap">{data.title}</p>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}

export default Circle
