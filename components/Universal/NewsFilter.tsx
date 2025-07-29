"use client";
import React, { useState } from "react";

const newsItems = [
  {
    date: "December 4, 2018",
    title: "Open Society Names New Head of Fellowship Program",
    region: "africa",
    year: "2018",
    type: "press-release",
  },
  {
    date: "November 27, 2018",
    title: "Open Society Foundations Celebrate 25 Years in South Africa",
    region: "africa",
    year: "2018",
    type: "announcement",
  },
  {
    date: "November 26, 2018",
    title: "The Open Society Foundation in Turkey Ceases Its Operations",
    region: "europe",
    year: "2018",
    type: "news",
  },
  {
    date: "October 15, 2018",
    title: "Open Society Announces New Human Rights Initiative",
    region: "usa",
    year: "2018",
    type: "press-release",
  },
  {
    date: "September 10, 2018",
    title: "Open Society Grants Support Global Education Programs",
    region: "asia-pacific",
    year: "2018",
    type: "news",
  },
];

const NewsFilter = () => {
  const [region, setRegion] = useState("all");
  const [year, setYear] = useState("all");
  const [type, setType] = useState("all");
  const [sortBy, setSortBy] = useState("date");

  const filteredNews = newsItems
    .filter(
      (item) =>
        (region === "all" || item.region === region) &&
        (year === "all" || item.year === year) &&
        (type === "all" || item.type === type)
    )
    .sort((a, b) =>
      sortBy === "date"
        ? new Date(b.date).getTime() - new Date(a.date).getTime()
        : a.title.localeCompare(b.title)
    );

  return (
    <div className="min-h-screen pt-16">
      <div className="">
        {/* Filtering Section */}
        <div className="flex justify-between items-center border-t border-b border-gray-200 pt-6 pb-6 px-4">
          <div className="text-gray-600 text-base flex items-center space-x-6">
            <span className="font-medium">Filter by:</span>

            <div className="flex items-center space-x-2">
              <span className="font-medium">Region</span>
              <select
                className="text-black border-none aoo border-gray-300  rounded-md"
                onChange={(e) => setRegion(e.target.value)}
                value={region}
              >
                <option value="all">All</option>
                <option value="africa">Africa</option>
                <option value="europe">Europe</option>
                <option value="usa">USA</option>
                <option value="asia-pacific">Asia-Pacific</option>
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <span className="font-medium">Year</span>
              <select
                className="text-black border-none border-gray-300 p-2 rounded-md"
                onChange={(e) => setYear(e.target.value)}
                value={year}
              >
                <option value="all">All</option>
                <option value="2018">2018</option>
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <span className="font-medium">Type</span>
              <select
                className="text-black border-none border-gray-300 rounded-md"
                onChange={(e) => setType(e.target.value)}
                value={type}
              >
                <option value="all">All</option>
                <option value="press-release">Press Release</option>
                <option value="announcement">Announcement</option>
                <option value="news">News</option>
              </select>
            </div>
          </div>

          <div className="flex items-center space-x-3 text-gray-600 text-base">
            <span className="font-medium">Sort by:</span>
            <select
              className="text-black border-none border-gray-300 p-2 rounded-md"
              onChange={(e) => setSortBy(e.target.value)}
              value={sortBy}
            >
              <option value="date">Date</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>

        {/* Item Count */}
        <div className="flex items-center bg-gray-100 justify-center border-b border-gray-200 pb-4 pt-4">
          <span className="font-medium">{filteredNews.length} News Items</span>
        </div>

        {/* News List */}
        <div className="bg-white">
          <div className="space-y-6">
            {filteredNews.length > 0 ? (
              filteredNews.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 pt-8 pb-8 flex flex-row justify-between px-4"
                >
                  <div className="space-y-1">
                    <p className="font-semibold uppercase">
                      {item.type.replace("-", " ")}
                    </p>
                    <div className="text-sm text-gray-500 mb-2">
                      {item.date}
                    </div>
                  </div>
                  <div className="text-lg text-start font-semibold text-black cursor-pointer">
                    {item.title}
                  </div>
                  <p className="font-normal text-black max-w-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Deserunt voluptatibus et repellat saepe soluta nisi
                    reprehenderit commodi ullam.
                  </p>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-500 py-6">
                No news found.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsFilter;
