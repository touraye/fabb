import { getCategories } from '@/lib/data';
import { Category, News, Project, Gallery } from '@/type';
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from 'next/image';

const CategoriesTabs = async () => {
  const categories = await getCategories();

  if (!categories || categories.length === 0) {
    return <p>No categories found.</p>;
  }

  const renderProjects = (projects: Project[]) => {
    if (projects.length === 0) return <p>No projects in this category.</p>;
    return (
      <div className="space-y-2">
        {projects.map(project => (
          <div key={project.id} className="p-2 border rounded">
            <h4 className="font-semibold">{project.title}</h4>
            <p className="text-sm text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>
    );
  };

  const renderNews = (news: News[]) => {
    if (news.length === 0) return <p>No news in this category.</p>;
    return (
      <div className="space-y-2">
        {news.map(newsItem => (
          <div key={newsItem.id} className="p-2 border rounded">
            <h4 className="font-semibold">{newsItem.title}</h4>
            <p className="text-sm text-gray-600">{newsItem.description}</p>
          </div>
        ))}
      </div>
    );
  };

  const renderGalleries = (galleries: Gallery[]) => {
    // The gallery data structure is not well defined in the sample,
    // so this is a placeholder implementation.
    if (galleries.length === 0) return <p>No galleries in this category.</p>;
    return (
      <div className="grid grid-cols-3 gap-2">
        {galleries.map(gallery => (
          <div key={gallery.id} className="p-2 border rounded">
            <h4 className="font-semibold">{gallery.title}</h4>
          </div>
        ))}
      </div>
    );
  };

  return (
    <Tabs defaultValue={categories[0].id.toString()} className="w-full">
      <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {categories.map((category) => (
          <TabsTrigger key={category.id} value={category.id.toString()}>{category.title}</TabsTrigger>
        ))}
      </TabsList>
      {categories.map((category) => (
        <TabsContent key={category.id} value={category.id.toString()}>
          <div className="p-4 border rounded-lg mt-2">
            <div className="flex items-start space-x-4">
              {category.image && (
                <Image
                  src={category.image}
                  alt={category.title}
                  width={150}
                  height={150}
                  className="rounded-lg object-cover"
                />
              )}
              <div>
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                <p>{category.description}</p>
              </div>
            </div>
            <div className="mt-4 space-y-4">
              <div>
                <h4 className="text-lg font-semibold border-b pb-1 mb-2">Projects</h4>
                {renderProjects(category.projects)}
              </div>
              <div>
                <h4 className="text-lg font-semibold border-b pb-1 mb-2">News</h4>
                {renderNews(category.news)}
              </div>
              <div>
                <h4 className="text-lg font-semibold border-b pb-1 mb-2">Galleries</h4>
                {renderGalleries(category.galleries)}
              </div>
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default CategoriesTabs;
