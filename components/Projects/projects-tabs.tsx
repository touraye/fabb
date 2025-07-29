'use client';
import React, { useEffect, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import QualityEducation from './quality-education'
import QualityHealthcare from './quality-healthcare'
import AdvocacyEmpowerment from './advocacy-empowerment'
import Infrastructure from './infrastructure'
import OtherProjects from './others'
import { useRouter, useSearchParams } from 'next/navigation'

const tabValues = [
    'quality-education',
    'quality-healthcare',
    'advocacy-empowerment',
    'infrastructure-development',
    'others'
  ] as const;

type TabValue = typeof tabValues[number];

function ProjectTabs() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const defaultTab: TabValue = 'quality-education'

  const tabParam = searchParams.get('tab')
  const [activeTab, setActiveTab] = useState<TabValue>(
    tabParam && tabValues.includes(tabParam as TabValue) 
      ? tabParam as TabValue 
      : defaultTab
  )

  useEffect(() => {
    if (tabParam && tabParam !== activeTab && tabValues.includes(tabParam as TabValue)) {
      setActiveTab(tabParam as TabValue)
    }
  }, [tabParam])

  const handleTabChange = (value: string) => {
    if (!tabValues.includes(value as TabValue)) return
    
    const newTab = value as TabValue
    setActiveTab(newTab)
    
    // Update URL without page reload
    const params = new URLSearchParams(window.location.search)
    params.set('tab', newTab)
    router.push(`?${params.toString()}`, { scroll: false })
  }
  return (
    <div className='w-full py-12'>
        <section 
            className='max-container 2xl:w-[80%] w-[90%] mx-auto'
        >
            <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
                <div className='w-full overflow-auto'>
                    <TabsList
                        className='w-fit lg:pb-12 pb-6 !text-lg flex flex-nowrap items-start'
                    >
                        {tabValues.map((tab) => (
                            <TabsTrigger 
                                key={tab}
                                value={tab}
                                className='border-2 border-[#367978] bg-[#367978] text-white'
                            >
                                {tab.split('-').map(word => 
                                word[0].toUpperCase() + word.slice(1)
                                ).join(' ')}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </div>
                <TabsContent value="quality-education">
                    <QualityEducation />
                </TabsContent>
                <TabsContent value="quality-healthcare">
                    <QualityHealthcare />
                </TabsContent>
                <TabsContent value="advocacy-empowerment">
                    <AdvocacyEmpowerment />
                </TabsContent>
                <TabsContent value="infrastructure-development">
                    <Infrastructure />
                </TabsContent>
                <TabsContent value="others">
                    <OtherProjects />
                </TabsContent>
            </Tabs>
        </section>
    </div>
  )
}

export default ProjectTabs