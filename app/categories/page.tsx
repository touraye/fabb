import React, { Suspense } from 'react';
import CategorySkeleton from '@/components/skeletons/CategorySkeleton';
import HeroSection from '@/components/categories/HeroSection';
import CategoriesTabs from '@/components/categories/CategoriesTabs';

const CategoriesPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Work and Impact</h1>
      <Suspense fallback={<CategorySkeleton />}>
        <HeroSection />
        <CategoriesTabs />
      </Suspense>
    </div>
  );
};

export default CategoriesPage;
