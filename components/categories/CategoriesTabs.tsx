import { getCategories, getAllProjects, getAllNews, getAllGalleries } from '@/lib/data';
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ResourceCard from '../reusable/ResourceCard';
import { Gallery, News, Project } from '@/type';

type Resource = (Project & { type: 'project' }) | (News & { type: 'news' }) | (Gallery & { type: 'gallery' });

const CategoriesTabs = async () => {
  const categories = await getCategories();

  if (!categories || categories.length === 0) {
    return <p>No content found.</p>;
  }

  const allProjects = getAllProjects(categories);
  const allNews = getAllNews(categories);
  const allGalleries = getAllGalleries(categories);

  const allResources = [...allProjects, ...allNews, ...allGalleries].sort((a, b) => {
    // Sort by creation date, most recent first
    const dateA = new Date('created_at' in a ? a.created_at : 0);
    const dateB = new Date('created_at' in b ? b.created_at : 0);
    return dateB.getTime() - dateA.getTime();
  });

  const renderResourceGrid = (resources: Resource[]) => {
    if (resources.length === 0) {
      return <p className="text-center py-8 text-gray-500">No items to display in this category.</p>;
    }
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4">
        {resources.map(resource => (
          <ResourceCard key={`${resource.type}-${resource.id}`} resource={resource} />
        ))}
      </div>
    );
  };

  return (
    <Tabs defaultValue="all" className="w-full">
      <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="projects">Projects</TabsTrigger>
        <TabsTrigger value="news">News</TabsTrigger>
        <TabsTrigger value="galleries">Galleries</TabsTrigger>
      </TabsList>

      <TabsContent value="all">
        {renderResourceGrid(allResources)}
      </TabsContent>
      <TabsContent value="projects">
        {renderResourceGrid(allProjects)}
      </TabsContent>
      <TabsContent value="news">
        {renderResourceGrid(allNews)}
      </TabsContent>
      <TabsContent value="galleries">
        {renderResourceGrid(allGalleries)}
      </TabsContent>
    </Tabs>
  );
};

export default CategoriesTabs;
