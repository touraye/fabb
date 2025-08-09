import React, { Suspense } from 'react';
import HeroSection from '@/components/categories/HeroSection';
import CategoriesTabs from '@/components/categories/CategoriesTabs';
import HeroSkeleton from '@/components/skeletons/HeroSkeleton';
import TabsSkeleton from '@/components/skeletons/TabsSkeleton';

const CategoriesPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Work and Impact</h1>

      <Suspense fallback={<HeroSkeleton />}>
        <HeroSection />
      </Suspense>

      <Suspense fallback={<TabsSkeleton />}>
        <CategoriesTabs />
      </Suspense>
    </div>
  );
};

export default CategoriesPage;
