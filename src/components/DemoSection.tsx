import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Satellite, Box, Map, Radar } from "lucide-react";

const DemoSection = () => {
  const trackingVideoUrl = "/demos/tracking.mp4";
  const reconstructionVideoUrl = "/demos/reconstruction.mp4";
  const informationGatheringVideoUrl = "/demos/tactical_intel.mp4";

  return (
    <section id="demos" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h6 className="text-primary font-medium mb-2">DEMOS</h6>
          <h2 className="text-3xl font-bold mb-4">Experience Our Models in Action</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore the capabilities of Aereus AI models with these interactive demonstrations. 
            See firsthand how they process and analyze data in real-time.
          </p>
        </div>
        
        <Tabs defaultValue="deployment" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-4 w-full max-w-3xl mx-auto mb-8">
            <TabsTrigger value="deployment" className="flex items-center gap-2">
              <Map className="h-4 w-4" /> Tactical Intelligence
            </TabsTrigger>
            <TabsTrigger value="3d" className="flex items-center gap-2">
              <Box className="h-4 w-4" /> 3D Reconstruction
            </TabsTrigger>
            <TabsTrigger value="satellite" className="flex items-center gap-2">
              <Satellite className="h-4 w-4" /> Satellite Sensing
            </TabsTrigger>
            <TabsTrigger value="tracking" className="flex items-center gap-2">
              <Radar className="h-4 w-4" /> Tracking Systems
            </TabsTrigger>
          </TabsList>
          
          {/* Information Gathering Tab */}
          <TabsContent value="deployment" className="mt-2">
            <div className="demo-container glow-border h-[500px] overflow-hidden relative">
              <video
                src={informationGatheringVideoUrl}
                controls
                autoPlay
                muted
                loop
                playsInline
                className="rounded-lg w-full h-full object-cover bg-black"
                onError={(e) => console.error('Video load error', e)}
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="mt-6 bg-muted/30 rounded-lg p-4 text-sm">
              <p className="text-muted-foreground">
                <strong>Note:</strong> This demo illustrates our tactical intelligence system that optimizes regional information recollection and assessment based on terrain, mission parameters, and real-time conditions.
              </p>
            </div>
          </TabsContent>
          
          {/* 3D Reconstruction Tab */}
          <TabsContent value="3d" className="mt-2">
            <div className="demo-container glow-border h-[500px] relative flex items-center justify-center">
              <video
                src={reconstructionVideoUrl}
                controls
                autoPlay
                muted
                loop
                playsInline
                className="rounded-lg w-full h-full object-cover bg-black"
                onError={(e) => console.error('Video load error', e)}
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="mt-6 bg-muted/30 rounded-lg p-4 text-sm">
              <p className="text-muted-foreground">
                <strong>Note:</strong> This demo showcases our 3D scene reconstruction technology that transforms multiple 2D images into detailed 3D models, enabling comprehensive spatial understanding for tactical operations.
              </p>
            </div>
          </TabsContent>
          
          {/* Satellite Sensing Tab */}
          <TabsContent value="satellite" className="mt-2">
            <div className="demo-container glow-border h-[500px] overflow-hidden relative">
              <img 
                src="/demos/satellite.png"
                alt="Military Asset Deployment Demo" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="mt-6 bg-muted/30 rounded-lg p-4 text-sm">
              <p className="text-muted-foreground">
                <strong>Note:</strong> This demo highlights our satellite imagery analysis system that detects changes, identifies objects, and extracts actionable intelligence from remote sensing data.
              </p>
            </div>
          </TabsContent>
          
          {/* Tracking Systems Tab */}
          <TabsContent value="tracking" className="mt-2">
            <div className="demo-container glow-border h-[500px] relative flex items-center justify-center">
              <video
                src={trackingVideoUrl}
                controls
                autoPlay
                muted
                loop
                playsInline
                className="rounded-lg w-full h-full object-cover bg-black"
                onError={(e) => console.error('Video load error', e)}
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="mt-6 bg-muted/30 rounded-lg p-4 text-sm">
              <p className="text-muted-foreground">
                <strong>Note:</strong> This demo showcases our advanced tracking technology that monitors multiple targets simultaneously across diverse environments, supporting time-critical operations.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default DemoSection;
