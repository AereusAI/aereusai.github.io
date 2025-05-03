import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ModelCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
  capabilities: string[];
  isHighlighted?: boolean;
  demoId: string;
}

const ModelCard: React.FC<ModelCardProps> = ({
  title,
  description,
  icon,
  tags,
  capabilities,
  isHighlighted = false,
  demoId
}) => {
  const handleExploreClick = () => {
    // First scroll to the demos section
    const demoSection = document.getElementById('demos');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
      
      // More robust approach to find and click the tab
      setTimeout(() => {
        // Try multiple selector approaches to find the tab
        let tabTrigger = document.querySelector(`[data-state="inactive"][value="${demoId}"]`) as HTMLElement;
        
        if (!tabTrigger) {
          // Try finding by role and value
          const allTabs = document.querySelectorAll('[role="tab"]');
          for (let i = 0; i < allTabs.length; i++) {
            const tab = allTabs[i] as HTMLElement;
            if (tab.getAttribute('value') === demoId) {
              tabTrigger = tab;
              break;
            }
          }
        }
        
        if (tabTrigger) {
          console.log(`Clicking tab for ${demoId}`);
          tabTrigger.click();
        } else {
          console.error(`Could not find tab for ${demoId}`);
        }
      }, 800); // Increased delay to ensure scroll completes
    }
  };

  return (
    <Card className={`h-full flex flex-col transition-all duration-300 ${isHighlighted ? 'animate-glow' : ''}`}>
      <CardHeader>
        <div className="flex items-start gap-4">
          <div className="p-2 rounded-md bg-primary/10 text-primary">
            {icon}
          </div>
          <div>
            <CardTitle className="mt-1">{title}</CardTitle>
            <CardDescription className="mt-2">{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-2 text-sm mb-4">
          {capabilities.map((capability, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2">•</span>
              <span>{capability}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full" 
          variant={isHighlighted ? "default" : "outline"}
          onClick={handleExploreClick}
        >
          Explore Model
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ModelCard;
