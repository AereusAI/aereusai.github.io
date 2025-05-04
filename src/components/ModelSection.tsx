import ModelCard from '@/components/ModelCard'
import { Box, Satellite, Radar, Map } from 'lucide-react';

const ModelSection = () => {
  return(
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ModelCard 
              title="3D Scene Intelligence"
              description="Transform standard imagery into detailed 3D models for enhanced spatial awareness and tactical planning."
              icon={<Box className="h-6 w-6" />}
              tags={["Computer Vision", "Deep Learning", "Real-time"]}
              capabilities={[
              "Fully textured 3D reconstruction from 2D images",
              "Real-time processing for immediate visualization",
              "Automated object recognition in 3D space"
              ]}
              isHighlighted={true}
              demoId="3d"
          />
          
          <ModelCard 
              title="Orbital Insight Engine"
              description="Advanced satellite imagery analysis for wide-area surveillance, change detection, and predictive intelligence."
              icon={<Satellite className="h-6 w-6" />}
              tags={["Remote Sensing", "Geospatial", "Pattern Recognition"]}
              capabilities={[
              "Multi-spectrum satellite data fusion",
              "Historical change detection and analysis",
              "Automated feature extraction and classification"
              ]}
              isHighlighted={true}
              demoId="satellite"
          />
          
          <ModelCard 
              title="Advanced Tracking Systems"
              description="Multi-target tracking across diverse environments with adaptive algorithms for persistent surveillance."
              icon={<Radar className="h-6 w-6" />}
              tags={["Motion Analysis", "Object Tracking", "AI Prediction"]}
              capabilities={[
              "Simultaneous multi-target tracking",
              "Predictive movement analysis",
              "Cross-sensor target correlation and fusion"
              ]}
              isHighlighted={true}
              demoId="tracking"
          />
          
          <ModelCard 
              title="Strategic Asset Deployment"
              description="Optimize resource allocation and deployment of assets based on mission parameters and environmental conditions."
              icon={<Map className="h-6 w-6" />}
              tags={["Resource Optimization", "Decision Support", "Tactical Planning"]}
              capabilities={[
              "AI-driven deployment recommendations",
              "Real-time resource allocation optimization",
              "Mission-specific asset configuration suggestions"
              ]}
              isHighlighted={true}
              demoId="deployment"
          />
          </div>
      </div>
      </section>
  );
};

export default ModelSection;