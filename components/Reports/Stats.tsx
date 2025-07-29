import React from 'react'

const Stats = () => {
  return (
    <div className='w-full'>
        <section className="max-container 2xl:w-[80%] w-[90%] mx-auto flex justify-between flex-wrap bg-white lg:py-6 py-3  border-b border-b-gray-300">
          <div className="text-center">
            <h2 className="lg:text-[3.5rem] md:text-[2.8rem] text-[2.5rem] mb-3 font-bold">$23.0B</h2>
            <p className="md:text-sm text-xs mt-2 tracking-wide text-black">EXPENDITURES TO DATE</p>
          </div>
          <div className="text-center">
            <h2 className="lg:text-[3.5rem] md:text-[2.8rem] text-[2.5rem] mb-3 font-bold">$1.7B</h2>
            <p className="md:text-sm text-xs mt-2 tracking-wide text-black">TOTAL 2023 EXPENDITURES</p>
          </div>
          <div className="text-center">
            <h2 className="lg:text-[3.5rem] md:text-[2.8rem] text-[2.5rem] mb-3 font-bold">16.2%</h2>
            <p className="md:text-sm text-xs mt-2  text-black">
              AVERAGE ANNUAL CHANGE IN EXPENDITURES SINCE 2016
            </p>
          </div>
        </section>
    </div>
  )
}

export default Stats