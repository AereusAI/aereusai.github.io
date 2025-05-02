
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const benefits = [
  {
    title: 'Enhanced Decision Making',
    description: 'Provide leaders with comprehensive situational awareness for faster, more informed decisions.'
  },
  {
    title: 'Reduced Risk',
    description: 'Identify potential threats and vulnerabilities before they can impact operations.'
  },
  {
    title: 'Resource Optimization',
    description: 'Allocate personnel and assets more efficiently based on real-time intelligence.'
  },
  {
    title: 'Predictive Analysis',
    description: 'Anticipate changes in the operational environment through pattern recognition.'
  },
  {
    title: 'Cross-domain Integration',
    description: 'Seamlessly combine insights from multiple domains for a unified intelligence picture.'
  },
  {
    title: 'Accelerated Response',
    description: 'Reduce the time between observation and action with automated analysis workflows.'
  }
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h6 className="text-primary font-medium mb-2">VALUE PROPOSITION</h6>
          <h2 className="text-3xl font-bold mb-4">Key Benefits</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our AI-powered solutions provide significant advantages for organizations 
            requiring advanced situational awareness and tactical intelligence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
