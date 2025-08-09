import { getCategories, getMostRecentNews, getMostRecentProject } from '@/lib/data';
import { News, Project } from '@/type';
import React from 'react';

const HeroSection = async () => {
  const categories = await getCategories();
  const mostRecentProject = getMostRecentProject(categories);
  const mostRecentNews = getMostRecentNews(categories);

  const renderCard = (item: Project | News | null, type: 'Project' | 'News') => {
    if (!item) {
      return (
        <div className="p-4 border rounded-lg shadow-sm bg-gray-50">
          <h3 className="text-xl font-semibold">No recent {type} found.</h3>
        </div>
      );
    }

    return (
      <div className="p-4 border rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-2">Latest {type}: {item.title}</h3>
        <p className="text-gray-600 line-clamp-3">{item.description}</p>
        {/* You can add more details like images or links here */}
      </div>
    );
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Highlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {renderCard(mostRecentProject, 'Project')}
        {renderCard(mostRecentNews, 'News')}
      </div>
    </div>
  );
};

export default HeroSection;
