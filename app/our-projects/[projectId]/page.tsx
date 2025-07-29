'use client';
import ProjectDetailContent from '@/components/project-detail/project-detail-content'
import ProjectDetailMain from '@/components/project-detail/project-detail-main'
import { successful_projects } from '@/constant'
import { ProjectProps } from '@/type';
import { useParams } from 'next/navigation';
import React from 'react'

function ProjectDetailPage() {
    const params = useParams()
    const project = successful_projects.find(p => p.id.toString() === params.projectId) as ProjectProps
    console.log(params.projectId)


  if (!project) return <div>Project not found</div>

  return (
    <div>
        <ProjectDetailMain project={project}  />
        <ProjectDetailContent project={project} />
    </div>
  )
}

export default ProjectDetailPage