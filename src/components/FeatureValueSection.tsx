
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Layers, BarChart, Globe, Radar, Map, Shield, Command } from "lucide-react";

// Combined feature and value propositions
const featureValues = [
  {
    title: 'Multi-layer Analysis',
    description: 'Process and correlate data across multiple dimensions for comprehensive situational understanding.',
    value: 'Enhanced Decision Making',
    valueDescription: 'Provide commanders with comprehensive situational awareness for faster, more informed tactical decisions.',
    icon: <Layers className="h-6 w-6 text-primary" />
  },
  {
    title: 'Predictive & Real-time Analytics',
    description: 'Combine historical data analysis with real-time processing to deliver immediate and forward-looking intelligence.',
    value: 'Reduced Risk',
    valueDescription: 'Identify potential threats and vulnerabilities before they can impact personnel or mission objectives.',
    icon: <BarChart className="h-6 w-6 text-primary" />
  },
  {
    title: 'Global Coverage',
    description: 'Access worldwide imagery and data sources for comprehensive intelligence gathering.',
    value: 'Resource Optimization',
    valueDescription: 'Allocate personnel and assets more efficiently based on real-time intelligence and predictive analysis.',
    icon: <Globe className="h-6 w-6 text-primary" />
  },
  {
    title: 'Tactical Advantage',
    description: 'Gain decisive operational edge through superior information processing and strategic insights.',
    value: 'Predictive Analysis',
    valueDescription: 'Anticipate changes in the operational environment through pattern recognition and threat assessment.',
    icon: <Shield className="h-6 w-6 text-primary" />
  },
  {
    title: 'Command Integration',
    description: 'Seamlessly integrate with existing command systems to enhance decision-making across the operational hierarchy.',
    value: 'Cross-domain Integration',
    valueDescription: 'Seamlessly combine insights from multiple domains for a unified intelligence picture.',
    icon: <Command className="h-6 w-6 text-primary" />
  },
  {
    title: 'Rapid Deployment',
    description: 'Set up and deploy systems quickly in any environment with minimal configuration requirements.',
    value: 'Accelerated Response',
    valueDescription: 'Reduce the time between observation and action with automated analysis workflows and command integration.',
    icon: <Map className="h-6 w-6 text-primary" />
  }
];

const FeatureValueSection = () => {
  return (
    <section id="features" className="py-20 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h6 className="text-primary font-medium mb-2">CAPABILITIES & VALUE</h6>
          <h2 className="text-3xl font-bold mb-4">Features & Benefits</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform offers a comprehensive suite of tools designed to provide 
            actionable intelligence and enhance operational effectiveness, delivering tangible value to your missions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureValues.map((item, index) => (
            <Card key={index} className="bg-card p-6 rounded-lg border border-border">
              <div className="mb-4 p-2 rounded-md bg-primary/10 w-fit">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground mb-6">
                {item.description}
              </p>
              <div className="pt-4 border-t border-border">
                <h4 className="font-medium mb-2 text-primary">{item.value}</h4>
                <p className="text-sm text-muted-foreground">
                  {item.valueDescription}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureValueSection;
