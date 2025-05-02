
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Satellite, Cube } from "lucide-react";

const DemoSection = () => {
  return (
    <section id="demos" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h6 className="text-primary font-medium mb-2">INTERACTIVE DEMOS</h6>
          <h2 className="text-3xl font-bold mb-4">Experience Our Models in Action</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore the capabilities of our AI models with these interactive demonstrations. 
            See firsthand how they process and analyze data in real-time.
          </p>
        </div>
        
        <Tabs defaultValue="3d" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto mb-8">
            <TabsTrigger value="3d" className="flex items-center gap-2">
              <Cube className="h-4 w-4" /> 3D Reconstruction
            </TabsTrigger>
            <TabsTrigger value="satellite" className="flex items-center gap-2">
              <Satellite className="h-4 w-4" /> Satellite Sensing
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="3d" className="mt-2">
            <div className="demo-container glow-border">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <Cube className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-medium mb-2">3D Scene Reconstruction Demo</h3>
                  <p className="text-muted-foreground mb-4">
                    Embed your 3D reconstruction demo here. This area supports interactive WebGL content.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 bg-muted/30 rounded-lg p-4 text-sm">
              <p className="text-muted-foreground">
                <strong>Note:</strong> This demo showcases our 3D scene reconstruction technology that transforms multiple 2D images into detailed 3D models, enabling comprehensive spatial understanding for tactical operations.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="satellite" className="mt-2">
            <div className="demo-container glow-border">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <Satellite className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-medium mb-2">Satellite Sensing Demo</h3>
                  <p className="text-muted-foreground mb-4">
                    Embed your satellite sensing and analysis demo here. This area supports map visualization and imagery analysis.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 bg-muted/30 rounded-lg p-4 text-sm">
              <p className="text-muted-foreground">
                <strong>Note:</strong> This demo highlights our satellite imagery analysis system that detects changes, identifies objects, and extracts actionable intelligence from remote sensing data.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default DemoSection;
