
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ModelCard from '@/components/ModelCard';
import DemoSection from '@/components/DemoSection';
import Benefits from '@/components/Benefits';
import Footer from '@/components/Footer';
import UseCases from '@/components/UseCases';
import { Satellite, Box, Layers, BarChart, Globe, Radar, Map } from 'lucide-react';

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
                Our comprehensive AI approach combines multiple advanced models to deliver 
                unparalleled situational awareness and intelligence capabilities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
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
              
              <ModelCard 
                title="Advanced Tracking Systems"
                description="Multi-target tracking across diverse environments with adaptive algorithms for persistent surveillance."
                icon={<Radar className="h-6 w-6" />}
                tags={["Motion Analysis", "Object Tracking", "AI Prediction"]}
                isHighlighted={true}
              />
              
              <ModelCard 
                title="Strategic Asset Deployment"
                description="Optimize resource allocation and deployment of assets based on mission parameters and environmental conditions."
                icon={<Map className="h-6 w-6" />}
                tags={["Resource Optimization", "Decision Support", "Tactical Planning"]}
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
                <h3 className="text-xl font-semibold mb-3">Predictive & Real-time Analytics</h3>
                <p className="text-muted-foreground">
                  Combine historical data analysis with real-time processing to deliver immediate and forward-looking intelligence.
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
              
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="mb-4 p-2 rounded-md bg-primary/10 w-fit">
                  <Radar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Tactical Advantage</h3>
                <p className="text-muted-foreground">
                  Gain decisive operational edge through superior information processing and strategic insights.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="mb-4 p-2 rounded-md bg-primary/10 w-fit">
                  <Map className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Command Integration</h3>
                <p className="text-muted-foreground">
                  Seamlessly integrate with existing command systems to enhance decision-making across the operational hierarchy.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <DemoSection />
        <UseCases />
        <Benefits />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
