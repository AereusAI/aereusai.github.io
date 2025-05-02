
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Radar, Menu, X } from "lucide-react";
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/components/ui/collapsible";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-2">
          <Radar className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">Aereus AI</span>
          <span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full ml-2">v1.0</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition">Features</a>
          <a href="#models" className="text-sm text-muted-foreground hover:text-foreground transition">Models</a>
          <a href="#demos" className="text-sm text-muted-foreground hover:text-foreground transition">Demos</a>
          <a href="#use-cases" className="text-sm text-muted-foreground hover:text-foreground transition">Use Cases</a>
          <a href="#benefits" className="text-sm text-muted-foreground hover:text-foreground transition">Benefits</a>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="sm">
            Documentation
          </Button>
          <Button size="sm">
            Try Now
          </Button>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden">
          <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="icon">
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="absolute top-16 left-0 right-0 bg-background border-b border-border p-4 shadow-lg z-50 animate-in slide-in-from-top">
              <nav className="flex flex-col space-y-4">
                <a 
                  href="#features" 
                  className="text-sm text-muted-foreground hover:text-foreground transition py-2"
                  onClick={() => setIsOpen(false)}
                >Features</a>
                <a 
                  href="#models" 
                  className="text-sm text-muted-foreground hover:text-foreground transition py-2"
                  onClick={() => setIsOpen(false)}
                >Models</a>
                <a 
                  href="#demos" 
                  className="text-sm text-muted-foreground hover:text-foreground transition py-2"
                  onClick={() => setIsOpen(false)}
                >Demos</a>
                <a 
                  href="#use-cases" 
                  className="text-sm text-muted-foreground hover:text-foreground transition py-2"
                  onClick={() => setIsOpen(false)}
                >Use Cases</a>
                <a 
                  href="#benefits" 
                  className="text-sm text-muted-foreground hover:text-foreground transition py-2"
                  onClick={() => setIsOpen(false)}
                >Benefits</a>
                <div className="flex flex-col gap-2 pt-2">
                  <Button variant="outline" size="sm" className="justify-center">
                    Documentation
                  </Button>
                  <Button size="sm" className="justify-center">
                    Try Now
                  </Button>
                </div>
              </nav>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
