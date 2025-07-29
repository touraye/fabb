'use client';
import ProjectBanner from '@/components/Projects/ProjectBanner'
import ProjectTabs from '@/components/Projects/projects-tabs'
import React, { Suspense } from 'react'

const ProjectsPage = () => {
    return (
        <div>
            <main>
                <ProjectBanner />
                <Suspense fallback={<div>Loading projects...</div>}>
                    <ProjectTabs />
                </Suspense>
                {/* <ContentCards/> */}
            </main>
        </div>
    )
}

export default ProjectsPage