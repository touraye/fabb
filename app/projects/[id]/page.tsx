import { getProjectById } from '@/lib/data';
import { notFound } from 'next/navigation';
import React from 'react';
import Image from 'next/image';

// Update the interface for Next.js 15
interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

const ProjectPage = async ({ params }: ProjectPageProps) => {
  // Await the params promise to resolve it
  const resolvedParams = await params;
  const project = await getProjectById(resolvedParams.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-lg text-gray-600 mb-8">{project.description}</p>

      {project.images && project.images.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Project Images</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {project.images.map((image, index) => (
              <div key={index} className="relative w-full h-64">
                <Image
                  src={image}
                  alt={`${project.title} image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectPage;
