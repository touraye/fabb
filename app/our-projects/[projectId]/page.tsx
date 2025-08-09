import ProjectDetailContent from '@/components/project-detail/project-detail-content';
import ProjectDetailMain from '@/components/project-detail/project-detail-main';
import { successful_projects } from '@/constant';
import { ProjectProps } from '@/type';
import { notFound } from 'next/navigation';
import React from 'react';

interface ProjectDetailPageProps {
  params: Promise<{
    projectId: string;
  }>;
}

const ProjectDetailPage = async ({ params }: ProjectDetailPageProps) => {
  const resolvedParams = await params;

  const project = successful_projects.find(p => p.id.toString() === resolvedParams.projectId);

  if (!project) {
    notFound();
  }

  return (
    <div>
      <ProjectDetailMain project={project as ProjectProps} />
      <ProjectDetailContent project={project as ProjectProps} />
    </div>
  );
}

export default ProjectDetailPage;