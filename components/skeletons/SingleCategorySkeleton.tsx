import React from 'react';

const SingleCategorySkeleton = () => {
  return (
    <div className="container mx-auto p-4 animate-pulse">
      {/* Title */}
      <div className="h-10 bg-gray-300 rounded w-3/4 mb-4"></div>

      {/* Image and Description */}
      <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-4 mb-8">
        <div className="w-full md:w-1/3 h-48 bg-gray-300 rounded-lg"></div>
        <div className="w-full md:w-2/3">
          <div className="h-6 bg-gray-300 rounded mb-2"></div>
          <div className="h-6 bg-gray-300 rounded mb-2"></div>
          <div className="h-6 bg-gray-300 rounded w-5/6"></div>
        </div>
      </div>

      {/* Projects, News, Galleries */}
      <div className="space-y-8">
        <div>
          <div className="h-8 bg-gray-300 rounded w-1/4 mb-4"></div>
          <div className="space-y-2">
            <div className="h-16 bg-gray-300 rounded"></div>
            <div className="h-16 bg-gray-300 rounded"></div>
          </div>
        </div>
        <div>
          <div className="h-8 bg-gray-300 rounded w-1/4 mb-4"></div>
          <div className="space-y-2">
            <div className="h-16 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCategorySkeleton;
