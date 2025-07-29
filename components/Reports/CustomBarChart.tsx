"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import React from "react";

const data = [
  { region: "Africa", expenditure: 325.2 },
  { region: "Asia Pacific", expenditure: 220.9 },
  { region: "Europe and Central Asia", expenditure: 519.9 },
  { region: "America and Caribbean", expenditure: 254.3 },
  { region: "Middle East and North Africa", expenditure: 489.1 },
  { region: "United States", expenditure: 401.3 },
  { region: "Total", expenditure: 1745.1 },
];

const CustomBarChart = () => {
  return (
    <div className="w-full lg:py-12 py-8">
      <section className="max-container 2xl:w-[80%] w-[90%] mx-auto ">
        <div className="flex lg:flex-row flex-col justify-between gap-4">
          <h2 className="text-2xl font-bold text-black">
            2020 Expenditures by Region
          </h2>
          <div className="flex flex-row xs:flex-nowrap flex-wrap">
            <button className="py-2 px-3 border border-gray-300 hover:bg-[#345F80] hover:text-white transition-all duration-500 ease-in-out">2020</button>
            <button className="py-2 px-3 border border-gray-300 hover:bg-[#345F80] hover:text-white transition-all duration-500 ease-in-out">2021</button>
            <button className="py-2 px-3 border border-gray-300 hover:bg-[#345F80] hover:text-white transition-all duration-500 ease-in-out">2022</button>
            <button className="py-2 px-3 border border-gray-300 hover:bg-[#345F80] hover:text-white transition-all duration-500 ease-in-out">2023</button>
            <button className="py-2 px-3 border border-gray-300 hover:bg-[#345F80] hover:text-white transition-all duration-500 ease-in-out">2024</button>
            <button className="py-2 px-3 border border-gray-300 hover:bg-[#345F80] hover:text-white transition-all duration-500 ease-in-out">2025</button>
          </div>
        </div>
        <div className="mt-5 flex ">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={data}
              layout="vertical"
              margin={{ top: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="region" type="category" width={150} hide />
              <Tooltip formatter={(value) => `$${value}M`} />
              <Legend />
              <Bar
                dataKey="expenditure"
                fill="#05D192"
                name="Expenditure (in Millions)"
                barSize={50}
              >
                <LabelList
                  dataKey="region"
                  position="insideLeft"
                  fill="#000"
                  fontSize={12}
                  fontWeight="bold"
                  className="uppercase whitespace-nowrap text-xs"
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  );
};

export default CustomBarChart;
