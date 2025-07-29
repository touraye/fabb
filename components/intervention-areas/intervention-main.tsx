import Image from "next/image";
import Link from "next/link";
import React from 'react'

const InterventionMain = () => {
    const cards = [
        {
            id: 1,
            imageUrl:
                "https://img.freepik.com/free-photo/showing-outstretched-touching-shadow-test_1134-824.jpg?uid=R176520851&ga=GA1.1.438080985.1725988205&semt=ais_hybrid",
            title:
                "Quality Education",
            description:
                "The University Challenge envisions a transformative departure from the conventional approach of obtaining degrees solely for job-seeking purposes - a pursuit that is often limited by the scarcity of job opportunities in a given economy or country.",
            link: "/our-projects?tab=quality-education",
        },
        {
            id: 2,
            imageUrl:
                "https://img.freepik.com/free-photo/brazilian-people-celebrating-easter_23-2151297798.jpg?uid=R176520851&ga=GA1.1.438080985.1725988205&semt=ais_hybrid",
            title: "Quality Healthcare",
            description:
                "We've fed 10,000 hungry kids, ensuring that their bellies are full and their dreams are nourished. We believe that no child should ever go to bed hungry.",
            link: "/our-projects?tab=quality-healthcare",
        },
        {
            id: 3,
            imageUrl:
                "https://img.freepik.com/premium-photo/back-view-volunteers-helping-refugees_950002-381535.jpg?uid=R176520851&ga=GA1.1.438080985.1725988205&semt=ais_hybrid",
            title:
                "Advocacy & Empowerment",
            description:
                "We donated thousands of tents to victims of the earthquake disaster in Turkey, providing shelter and comfort during the toughest times. We don't only stop there.",
            link: "/our-projects?tab=advocacy-empowerment",
        },
        {
            id: 4,
            imageUrl:
                "https://img.freepik.com/free-photo/journalists-taking-interview-outdoors_23-2149029380.jpg?uid=R176520851&ga=GA1.1.438080985.1725988205&semt=ais_hybrid",
            title:
                "Infrastructure Development",
            description:
                "The Convention is sponsored by the New Africa Foundation. This event is scheduled to take place on the 7th of January 2024 at the Kwame Nkrumah Independence Square, coinciding with Ghana's inauguration day.",
            link: "/our-projects?tab=infrastructure-development",
        },
    ];

    return (
        <div className="w-full py-16 bg-gray-50">
            <div className="w-[80%]  mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Key Interventions</h2>
                <div className="grid md:grid-cols-2 gap-12">
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                        >
                            <div className="relative h-60">
                                <Image
                                    src={card.imageUrl}
                                    alt={card.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                                />
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-gray-800 mb-3">{card.title}</h3>
                                <p className="text-gray-600 mb-5 flex-grow">
                                    {card.description}
                                </p>
                                <Link
                                    href={card.link}
                                    className="text-sm font-semibold text-[#DB2777] hover:text-[#c2256a] transition-colors duration-300 inline-flex items-center group"
                                >
                                    Read success stories
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default InterventionMain;