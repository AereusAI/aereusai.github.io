
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ModelCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
  isHighlighted?: boolean;
}

const ModelCard: React.FC<ModelCardProps> = ({
  title,
  description,
  icon,
  tags,
  isHighlighted = false
}) => {
  return (
    <Card className={`h-full flex flex-col transition-all duration-300 ${isHighlighted ? 'animate-glow' : ''}`}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="p-2 rounded-md bg-primary/10 text-primary">
            {icon}
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        <CardTitle className="mt-4">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-2 text-sm">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Real-time data processing & analysis</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Advanced neural network architecture</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Optimized for edge deployment</span>
          </li>
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant={isHighlighted ? "default" : "outline"}>
          Explore Model
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ModelCard;
