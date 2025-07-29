import ConnectBanner from '@/components/Connect/ConnectBanner'
import ConnectHero from '@/components/Connect/ConnectHero'
import FaqAccordionWithImage from '@/components/Connect/FaqAccordionWithImage'
import OfficeLocations from '@/components/Connect/OfficeLocations'
import PartnersSlider from '@/components/Connect/PartnersSlider'
import React from 'react'

const page = () => {
  return (
    <div>
        <ConnectHero/>
        <ConnectBanner/>
        <OfficeLocations/>
        <PartnersSlider/>
        <FaqAccordionWithImage/>
    </div>
  )
}

export default page