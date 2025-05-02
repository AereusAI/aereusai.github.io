
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ModelCard from '@/components/ModelCard';
import DemoSection from '@/components/DemoSection';
import Benefits from '@/components/Benefits';
import Footer from '@/components/Footer';
import { Satellite, Box, Layers, BarChart, Globe } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        {/* Models Section */}
        <section id="models" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h6 className="text-primary font-medium mb-2">OUR TECHNOLOGY</h6>
              <h2 className="text-3xl font-bold mb-4">Advanced AI Models</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our dual-model approach combines 3D scene reconstruction and satellite sensing 
                to deliver unparalleled situational awareness and intelligence capabilities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ModelCard 
                title="3D Scene Intelligence"
                description="Transform standard imagery into detailed 3D models for enhanced spatial awareness and tactical planning."
                icon={<Box className="h-6 w-6" />}
                tags={["Computer Vision", "Deep Learning", "Real-time"]}
                isHighlighted={true}
              />
              
              <ModelCard 
                title="Orbital Insight Engine"
                description="Advanced satellite imagery analysis for wide-area surveillance, change detection, and predictive intelligence."
                icon={<Satellite className="h-6 w-6" />}
                tags={["Remote Sensing", "Geospatial", "Pattern Recognition"]}
                isHighlighted={true}
              />
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section id="features" className="py-20 bg-muted/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h6 className="text-primary font-medium mb-2">CAPABILITIES</h6>
              <h2 className="text-3xl font-bold mb-4">Key Features</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our platform offers a comprehensive suite of tools designed to provide 
                actionable intelligence and enhance operational effectiveness.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="mb-4 p-2 rounded-md bg-primary/10 w-fit">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Multi-layer Analysis</h3>
                <p className="text-muted-foreground">
                  Process and correlate data across multiple dimensions for comprehensive situational understanding.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="mb-4 p-2 rounded-md bg-primary/10 w-fit">
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Predictive Analytics</h3>
                <p className="text-muted-foreground">
                  Leverage historical data and machine learning to forecast potential scenarios and outcomes.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="mb-4 p-2 rounded-md bg-primary/10 w-fit">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Global Coverage</h3>
                <p className="text-muted-foreground">
                  Access worldwide imagery and data sources for comprehensive intelligence gathering.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <DemoSection />
        <Benefits />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
