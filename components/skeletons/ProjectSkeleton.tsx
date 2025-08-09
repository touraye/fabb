import React from 'react';

const ProjectSkeleton = () => {
  return (
    <div className="container mx-auto p-4 animate-pulse">
      {/* Title */}
      <div className="h-10 bg-gray-300 rounded w-3/4 mb-4"></div>

      {/* Image Gallery Skeleton */}
      <div className="mb-8">
        <div className="h-64 bg-gray-300 rounded-lg mb-2"></div>
        <div className="grid grid-cols-5 gap-2">
          <div className="h-24 bg-gray-300 rounded"></div>
          <div className="h-24 bg-gray-300 rounded"></div>
          <div className="h-24 bg-gray-300 rounded"></div>
          <div className="h-24 bg-gray-300 rounded"></div>
          <div className="h-24 bg-gray-300 rounded"></div>
        </div>
      </div>

      {/* Description */}
      <div className="w-full">
        <div className="h-6 bg-gray-300 rounded mb-2"></div>
        <div className="h-6 bg-gray-300 rounded mb-2"></div>
        <div className="h-6 bg-gray-300 rounded w-5/6"></div>
      </div>
    </div>
  );
};

export default ProjectSkeleton;
