import React from 'react';

const CategorySkeleton = () => {
  return (
    <div className="p-4">
      <div className="animate-pulse">
        {/* Skeleton for Hero Section */}
        <div className="mb-8">
          <div className="h-8 bg-gray-300 rounded w-1/4 mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="h-40 bg-gray-300 rounded"></div>
            <div className="h-40 bg-gray-300 rounded"></div>
          </div>
        </div>

        {/* Skeleton for Tabs */}
        <div>
          <div className="flex space-x-4 border-b">
            <div className="h-10 bg-gray-300 rounded w-24"></div>
            <div className="h-10 bg-gray-300 rounded w-24"></div>
            <div className="h-10 bg-gray-300 rounded w-24"></div>
          </div>
          <div className="mt-4">
            <div className="h-20 bg-gray-300 rounded mb-4"></div>
            <div className="h-20 bg-gray-300 rounded mb-4"></div>
            <div className="h-20 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySkeleton;
