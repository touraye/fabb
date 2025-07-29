import Image from "next/image";
import React from 'react'

const ContentCards = () => {
    const cards = [
        {
            id: 1,
            imageUrl:
                "https://img.freepik.com/free-photo/brazilian-people-celebrating-easter_23-2151297798.jpg?uid=R176520851&ga=GA1.1.438080985.1725988205&semt=ais_hybrid",
            title: "Feeding Dreams",
            description:
                "We've fed 10,000 hungry kids, ensuring that their bellies are full and their dreams are nourished. We believe that no child should ever go to bed hungry.",
            link: "#",
        },
        {
            id: 2,
            imageUrl:
                "https://img.freepik.com/premium-photo/back-view-volunteers-helping-refugees_950002-381535.jpg?uid=R176520851&ga=GA1.1.438080985.1725988205&semt=ais_hybrid",
            title:
                "Disaster Relief for Turkey",
            description:
                "We donated thousands of tents to victims of the earthquake disaster in Turkey, providing shelter and comfort during the toughest times. We don't only stop there.",
            link: "#",
        },
        {
            id: 3,
            imageUrl:
                "https://img.freepik.com/free-photo/journalists-taking-interview-outdoors_23-2149029380.jpg?uid=R176520851&ga=GA1.1.438080985.1725988205&semt=ais_hybrid",
            title:
                "The Convention – Igniting The Voices Of Africa",
            description:
                "The Convention is sponsored by the New Africa Foundation. This event is scheduled to take place on the 7th of January 2024 at the Kwame Nkrumah Independence Square, coinciding with Ghana’s inauguration day.",
            link: "#",
        },
        {
            id: 4,
            imageUrl:
                "https://img.freepik.com/free-photo/showing-outstretched-touching-shadow-test_1134-824.jpg?uid=R176520851&ga=GA1.1.438080985.1725988205&semt=ais_hybrid",
            title:
                "The University Challenge – Entrepreneurship",
            description:
                "The University Challenge envisions a transformative departure from the conventional approach of obtaining degrees solely for job-seeking purposes - a pursuit that is often limited by the scarcity of job opportunities in a given economy or country.",
            link: "#",
        },
        {
            id: 5,
            imageUrl:
                "https://img.freepik.com/premium-photo/religious-symbols-christianity-cross-islam-crescent-buddhism-dharma-wheel-hinduism-aum-judaism-david-star-taoism-yin-yang-world-religion-concept-prophets-all-religions-bring-peace-world_2379-3237.jpg?uid=R176520851&ga=GA1.1.438080985.1725988205&semt=ais_hybrid",
            title:
                "Interfaith Harmony",
            description:
                "Crossing barriers and fostering harmony, the Foundation became a bridge between Christians and Muslims, proving that unity can prevail in diversity was swift in action.",
            link: "#",
        },

        {
            id: 6,
            imageUrl:
                "https://img.freepik.com/free-psd/coronavirus-web-template_23-2148900204.jpg?uid=R176520851&ga=GA1.1.438080985.1725988205&semt=ais_hybrid",
            title:
                "COVID-19 Response",
            description:
                "During the COVID-19 pandemic and Ghana's lockdown, the New Africa Foundation was swift in action. a bridge between Christians and Muslims can prevail.",
            link: "#",
        },

    ];

    return (
        <div className="my-10  px-[4%] md:px-[10%] grid md:grid-cols-2 gap-10">
            {cards.map((card) => (
                <div
                    key={card.id}
                    className="rounded-xl shadow-lg overflow-hidden bg-white"
                >
                    <div className="relative rounded">
                        <Image
                            src={card.imageUrl}
                            alt={card.title}
                            width={1024}
                            height={700}
                            className="w-full h-[300px] object-cover"
                        />
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-700">{card.title}</h3>
                        <p className="text-gray-600 mt-3">{card.description}</p>
                        <a
                            href={card.link}
                            className="uppercase text-[#DB2777] hover:text-[#367978] transition duration-300 text-sm font-medium mt-4 inline-block"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ContentCards;
