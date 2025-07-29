import Image from 'next/image'
import React from 'react'

const Twosided = () => {
  return (
    <div className='flex justify-center my-10 px-[4%] md:px-[10%]'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <Image
          src="https://img.freepik.com/premium-photo/guy-girl-with-check-boxes-volunteers-masks-with-laptop-boxes-with-humanitarian-aid_1157-46589.jpg?ga=GA1.1.1411535131.1738618804&semt=ais_hybrid"
          alt="Description"
          width={500}
          height={500}
          className='w-full h-full object-cover'
          />

        </div>

        <div className="max-md:text-sm flex flex-col space-y-5">
            <h1 className='font-bold text-4xl whitespace-nowrap text-black'>Socio-Economic Empowerment</h1>
          <p className="">
          We believe developing sustainable economic opportunities and financial stability for disadvantaged communities is key to uplifting families. Our Socio-Economic Empowerment initiatives provide:          </p>
          <ul className="md:pl-8">
            <li>• Entrepreneurship Training: Equips aspiring entrepreneurs with business skills training, mentorship and microloans to launch companies.</li>
            <li>• Employability Programs: Partners with employers to offer resume writing workshops, interview prep, workplace skills training and job placements.</li>
            <li>• Financial Literacy: Provides modules and coaching on savings, budgeting, investing to promote sound financial planning.</li>
            <li>• Cooperatives Support: Bolsters farmer and artisan cooperatives with access to resources, microfinance and connections to markets.</li>
          </ul>
          <p>
          By giving communities in need the tools to become economically empowered, we plant the seeds for shared prosperity.          </p>
        </div>
      </div>
    </div>
  )
}

export default Twosided