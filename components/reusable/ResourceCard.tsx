import { Gallery, News, Project } from '@/type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Resource = (Project & { type: 'project' }) | (News & { type: 'news' }) | (Gallery & { type: 'gallery' });

interface ResourceCardProps {
  resource: Resource;
}

const ResourceCard = ({ resource }: ResourceCardProps) => {
  const getLinkHref = `/categories/${resource.id}`;
  // const getLinkHref = () => {
  //   switch (resource.type) {
  //     case 'project':
  //       return `/projects/${resource.id}`;
  //     case 'news':
  //       // Assuming /news/[id] will be created
  //       return `/news/${resource.id}`;
  //     case 'gallery':
  //       // Assuming /galleries/[id] will be created
  //       return `/galleries/${resource.id}`;
  //   }
  // };

  const getImageUrl = () => {
    // Both Project and News have an 'images' array.
    if ('images' in resource && Array.isArray(resource.images) && resource.images.length > 0) {
      // Assuming the first image is the primary one.
      return resource.images[0];
    }
    // Fallback to a placeholder if no image is available.
    return '/assets/images/placeholder.png';
  };

  const description = 'description' in resource ? resource.description : '';

  return (
    <Link href={getLinkHref} className="block border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
      <div className="relative w-full h-48 bg-gray-200">
        {/* The Image component from Next.js requires a valid src.
            I need to handle the case where the image URL might be missing or invalid.
            For now, I'll assume getImageUrl provides a valid path. */}
        <Image
          src={getImageUrl()}
          alt={resource.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <span className="text-xs font-semibold uppercase text-gray-500 bg-gray-100 px-2 py-1 rounded">{resource.type}</span>
        <h3 className="text-lg font-bold mt-2 truncate">{resource.title}</h3>
        <p className="text-sm text-gray-600 mt-2 line-clamp-2 h-10">{description}</p>
      </div>
    </Link>
  );
};

export default ResourceCard;
