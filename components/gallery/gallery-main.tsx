'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import EducationGallery from "./education-gallery";
import HealthcareGallery from "./healthcare-gallery";
import EmpowermentGallery from "./empowerment-gallery";
import InfrastrutureGallery from "./infrastructure-gallery";
import OtherGallery from "./other-gallery";


const GalleryMain = () => {

  return (
    <div className="w-full md:py-16 py-10">
        <section className='max-container 2xl:w-[80%] w-[90%] mx-auto'>
            <Tabs defaultValue="education-gallery" className="w-full">
                <div className='w-full overflow-auto'>
                    <TabsList
                        className='w-fit pb-4 flex flex-nowrap items-start !text-lg'
                    >
                        <TabsTrigger
                            value="education-gallery"
                            className='border-2 border-[#367978] bg-[#367978] text-white'
                        >Quality Education</TabsTrigger>
                        <TabsTrigger 
                            value="healthcare-gallery"
                            className='border-2 border-[#367978] bg-[#367978] text-white'
                        >Quality Healthcare</TabsTrigger>
                        <TabsTrigger 
                            value="advocacy-gallery"
                            className='border-2 border-[#367978] bg-[#367978] text-white'
                        >Advocacy & Empowerment</TabsTrigger>
                        <TabsTrigger 
                            value="infrastructure-gallery"
                            className='border-2 border-[#367978] bg-[#367978] text-white'
                        >Infrastructure Development</TabsTrigger>
                        <TabsTrigger 
                            value="others"
                            className='border-2 border-[#367978] bg-[#367978] text-white'
                        >Others</TabsTrigger>
                    </TabsList>
                </div>
                <TabsContent value="education-gallery">
                    <EducationGallery />
                </TabsContent>
                <TabsContent value="healthcare-gallery">
                    <HealthcareGallery />
                </TabsContent>
                <TabsContent value="advocacy-gallery">
                    <EmpowermentGallery />
                </TabsContent>
                <TabsContent value="infrastructure-gallery">
                    <InfrastrutureGallery />
                </TabsContent>
                <TabsContent value="others">
                    <OtherGallery />
                </TabsContent>
            </Tabs>
        </section>
      
    </div>
  );
};
export default GalleryMain;
