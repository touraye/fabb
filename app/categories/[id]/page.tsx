import { getCategoryById } from '@/lib/data';
import { News, Project, Gallery } from '@/type';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';

interface CategoryPageProps {
  params: {
    id: string;
  };
}

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const category = await getCategoryById(params.id);

  if (!category) {
    notFound();
  } 

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{category.title}</h1>

      <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-8 mb-8">
        {category.image && (
          <div className="w-full md:w-1/3">
            <Image
              src={category.image}
              alt={category.title}
              width={400}
              height={400}
              className="rounded-lg object-cover w-full"
            />
          </div>
        )}
        <div className="w-full md:w-2/3">
          <p className="text-lg text-gray-700">{category.description}</p>
        </div>
      </div>      
    </div>
  );
};

export default CategoryPage;
