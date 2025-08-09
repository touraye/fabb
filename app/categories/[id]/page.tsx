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

  const renderProjects = (projects: Project[]) => {
    if (projects.length === 0) return <p>No projects in this category.</p>;
    return (
      <div className="space-y-4">
        {projects.map(project => (
          <div key={project.id} className="p-4 border rounded-lg shadow-sm">
            <h4 className="font-semibold text-lg">{project.title}</h4>
            <p className="text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>
    );
  };

  const renderNews = (news: News[]) => {
    if (news.length === 0) return <p>No news in this category.</p>;
    return (
      <div className="space-y-4">
        {news.map(newsItem => (
          <div key={newsItem.id} className="p-4 border rounded-lg shadow-sm">
            <h4 className="font-semibold text-lg">{newsItem.title}</h4>
            <p className="text-gray-600">{newsItem.description}</p>
          </div>
        ))}
      </div>
    );
  };

  const renderGalleries = (galleries: Gallery[]) => {
    if (galleries.length === 0) return <p>No galleries in this category.</p>;
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {galleries.map(gallery => (
          <div key={gallery.id} className="p-2 border rounded-lg">
            <h4 className="font-semibold">{gallery.title}</h4>
          </div>
        ))}
      </div>
    );
  };

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

      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold border-b-2 border-gray-200 pb-2 mb-4">Projects</h2>
          {renderProjects(category.projects)}
        </div>
        <div>
          <h2 className="text-2xl font-bold border-b-2 border-gray-200 pb-2 mb-4">News</h2>
          {renderNews(category.news)}
        </div>
        <div>
          <h2 className="text-2xl font-bold border-b-2 border-gray-200 pb-2 mb-4">Galleries</h2>
          {renderGalleries(category.galleries)}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
