import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Radar, Map, Globe, MapPin, Binoculars, HardDrive } from "lucide-react";

const useCases = [
  {
    title: 'Reconnaissance Missions',
    description: 'Support intelligence gathering with advanced imaging and analysis for pre-mission planning and real-time situational awareness.',
    icon: <Radar className="h-6 w-6 text-primary" />,
    image: '/use_cases/reconnaissance.jpg'
  },
  {
    title: 'Rescue Operations',
    description: 'Locate and track individuals in distress, optimize rescue routes, and coordinate response teams with real-time intelligence.',
    icon: <Map className="h-6 w-6 text-primary" />,
    image: '/use_cases/rescue_mission.jpg'
  },
  {
    title: 'Infrastructure Assessment',
    description: 'Rapidly evaluate critical infrastructure condition and vulnerabilities through comprehensive aerial and satellite analysis.',
    icon: <Globe className="h-6 w-6 text-primary" />,
    image: '/use_cases/infrastructure_assessment.jpg'
  },
  {
    title: 'Border Control',
    description: 'Monitor extensive border areas with automated detection systems to identify unauthorized crossings and suspicious activities.',
    icon: <MapPin className="h-6 w-6 text-primary" />,
    image: '/use_cases/border_security.jpg'
  },
  {
    title: 'Battlefield Monitoring',
    description: 'Maintain continuous surveillance of active combat zones to track unit movements, identify threats, and evaluate tactical options.',
    icon: <Binoculars className="h-6 w-6 text-primary" />,
    image: '/use_cases/battlefield.jpg'
  },
  {
    title: 'Asset Tracking',
    description: 'Track and manage critical equipment and resources in real-time across multiple theaters of operation with precision location data.',
    icon: <HardDrive className="h-6 w-6 text-primary" />,
    image: '/use_cases/asset_deployment.jpg'
  }
];

const UseCases = () => {
  return (
    <section id="use-cases" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h6 className="text-primary font-medium mb-2">APPLICATIONS</h6>
          <h2 className="text-3xl font-bold mb-4">Use Cases</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Aereus AI solutions are deployed across various mission-critical scenarios
            where accurate situational awareness is essential.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <Card key={index} className="backdrop-blur-sm border-border overflow-hidden">
              <div className="h-48 bg-muted/30 relative overflow-hidden">
                <img 
                  src={useCase.image} 
                  alt={useCase.title} 
                  className="absolute inset-0 w-full h-full object-cover object-center scale-100 transition-transform hover:scale-95"
                />
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
              <CardHeader className="pb-2">
                <div className="mb-4 p-2 rounded-md bg-primary/10 w-fit">
                  {useCase.icon}
                </div>
                <CardTitle className="text-xl">{useCase.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{useCase.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
