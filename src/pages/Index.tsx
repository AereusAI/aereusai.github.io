import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ModelSection from '@/components/ModelSection'
import DemoSection from '@/components/DemoSection';
import Footer from '@/components/Footer';
import UseCases from '@/components/UseCases';
import FeatureValueSection from '@/components/FeatureValueSection';
import TeamSection from '@/components/TeamSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        <ModelSection />
        <DemoSection />
        <FeatureValueSection />
        <UseCases />
        <TeamSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
