import React from 'react';

const HeroSkeleton = () => {
  return (
    <div className="animate-pulse mb-8">
      <div className="h-8 bg-gray-300 rounded w-1/4 mb-4"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="h-40 bg-gray-300 rounded"></div>
        <div className="h-40 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default HeroSkeleton;
