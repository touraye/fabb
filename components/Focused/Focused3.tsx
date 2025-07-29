import Image from 'next/image'
import React from 'react'

const Focused3 = () => {
  return (
    <div className='flex mt-[90px] justify-center my-10 px-[4%] md:px-[10%]'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <Image
          src="https://img.freepik.com/premium-photo/portrait-black-woman-flex-power-winning-empowerment-against-studio-background-face-female-person-model-with-strength-arm-muscle-achievement-with-success-strong-energy_590464-209639.jpg?ga=GA1.1.1411535131.1738618804&semt=ais_hybrid"
          alt="Description"
          width={500}
          height={500}
          className='w-full h-full object-cover'
          />

        </div>

        <div className="max-md:text-sm flex flex-col space-y-5">
            <h1 className='font-bold text-4xl whitespace-nowrap text-black'>Women Empowerment & Advocacy</h1>
          <p className="">
          The rise of Africa depends on the empowerment of women, who face disproportionate barriers. We work to:  </p>
          <ul className="md:pl-8">
            <li>• Provide Skills Training: Offers programs in literacy, marketing, finance, leadership tailored for women.</li>
            <li>• Support Women Entrepreneurs: Connects female founders to networking, mentorship and funding opportunities.</li>
            <li>• Improve Healthcare Access: Partners to enhance outreach on maternal health and sexual education.</li>
            <li>• End Violence Against Women: Works with communities to shift attitudes through workshops and education.</li>
            <li>• Advance Equality: Pushes for policy reform on issues like girls’ education, land ownership and equitable wages.</li>
          </ul>
          <p>
          When barriers are removed and women empowered, the prosperity of African communities grows exponentially.  </p>
        </div>
      </div>
    </div>
  )
}

export default Focused3