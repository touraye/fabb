import ProjectDetailContent from '@/components/project-detail/project-detail-content';
import ProjectDetailMain from '@/components/project-detail/project-detail-main';
import { getProjectById } from '@/lib/data';
import { notFound } from 'next/navigation';
import React from 'react';

// In Next.js 15, `params` can be a promise.
// We update the interface to reflect this for type safety.
interface ProjectDetailPageProps {
  params: Promise<{
    projectId: string;
  }>;
}

const ProjectDetailPage = async ({ params }: ProjectDetailPageProps) => {
  // Await the params promise to get the actual params object
  const resolvedParams = await params;

  // Fetch the project data using the ID from the resolved params
  const project = await getProjectById(resolvedParams.projectId);

  if (!project) {
    // Use Next.js's notFound utility to render a 404 page
    notFound();
  }

  return (
    <div>
      {/* These components now receive the fetched project data */}
      <ProjectDetailMain project={project} />
      <ProjectDetailContent project={project} />
    </div>
  );
}

export default ProjectDetailPage;