import CoreValues from '@/components/WhoWeAre/core-values'
import OurJourney from '@/components/WhoWeAre/our-journey'
import Timeline from '@/components/WhoWeAre/Timeline'
import WhoHero from '@/components/WhoWeAre/WhoHero'
import React from 'react'

const page = () => {
  return (
    <div>
      <WhoHero/>
      <Timeline/>
      <CoreValues />
      <OurJourney />
    </div>
  )
}

export default page
