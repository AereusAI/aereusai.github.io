
import React from 'react';
import { Button } from "@/components/ui/button";
import { Radar } from "lucide-react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-2">
          <Radar className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">SightLine</span>
          <span className="code-pill ml-2">v1.0</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition">Features</a>
          <a href="#models" className="text-sm text-muted-foreground hover:text-foreground transition">Models</a>
          <a href="#demos" className="text-sm text-muted-foreground hover:text-foreground transition">Demos</a>
          <a href="#benefits" className="text-sm text-muted-foreground hover:text-foreground transition">Benefits</a>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="hidden sm:inline-flex">
            Documentation
          </Button>
          <Button size="sm">
            Try Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
