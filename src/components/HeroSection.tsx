
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 noise-bg"></div>
      <div className="absolute top-20 -left-32 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -right-32 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-muted">
            <span className="text-xs font-medium text-primary">Military-Grade AI Technology</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Aereus AI <span className="gradient-text">Situational Awareness</span> for Critical Decision Making
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Advanced models for 3D scene reconstruction, satellite sensing, tracking, and asset deployment, providing unprecedented tactical intelligence and decision support.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg">
              Request Demo
            </Button>
            <Button size="lg" variant="outline">
              Technical Overview
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border">
              <div className="font-mono text-xs text-muted-foreground mb-1">CAPABILITY 01</div>
              <h3 className="text-xl font-semibold mb-2">Real-time Adaptive Learning</h3>
              <p className="text-sm text-muted-foreground">Continuously improves accuracy through field deployment feedback loops</p>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border">
              <div className="font-mono text-xs text-muted-foreground mb-1">CAPABILITY 02</div>
              <h3 className="text-xl font-semibold mb-2">Multi-source Fusion</h3>
              <p className="text-sm text-muted-foreground">Integrates data from multiple sensors and sources for comprehensive analysis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
