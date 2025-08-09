import React from 'react';

const TabsSkeleton = () => {
  return (
    <div className="animate-pulse">
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
  );
};

export default TabsSkeleton;
