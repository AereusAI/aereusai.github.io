import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/components/ui/collapsible";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string, closeMenu: boolean = false) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      if (closeMenu) {
        setIsOpen(false);
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-2">
          <img src="/Logo+Inverted.png" alt="Aereus AI Logo" className="h-10 w-10" />
          <span className="font-bold text-lg">Aereus AI</span>
          <span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full ml-2">v1.01</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('models')}
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            Models
          </button>
          <button 
            onClick={() => scrollToSection('features')}
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            Features & Benefits
          </button>
          <button 
            onClick={() => scrollToSection('demos')}
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            Demos
          </button>
          <button 
            onClick={() => scrollToSection('use-cases')}
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            Use Cases
          </button>
          <button 
            onClick={() => scrollToSection('team')}
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            Team
          </button>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <Button size="sm" onClick={() => window.location.href = 'mailto:info@aereus.de'}>
            Request Demo
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
                <button 
                  className="text-sm text-muted-foreground hover:text-foreground transition py-2 text-left"
                  onClick={() => scrollToSection('models', true)}
                >
                  Models
                </button>
                <button 
                  className="text-sm text-muted-foreground hover:text-foreground transition py-2 text-left"
                  onClick={() => scrollToSection('features', true)}
                >
                  Features & Benefits
                </button>
                <button 
                  className="text-sm text-muted-foreground hover:text-foreground transition py-2 text-left"
                  onClick={() => scrollToSection('demos', true)}
                >
                  Demos
                </button>
                <button 
                  className="text-sm text-muted-foreground hover:text-foreground transition py-2 text-left"
                  onClick={() => scrollToSection('use-cases', true)}
                >
                  Use Cases
                </button>
                <button 
                  className="text-sm text-muted-foreground hover:text-foreground transition py-2 text-left"
                  onClick={() => scrollToSection('team', true)}
                >
                  Team
                </button>
                <div className="flex flex-col gap-2 pt-2">
                  <Button size="sm" className="justify-center" onClick={() => window.location.href = 'mailto:info@aereus.de'}>
                    Request Demo
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
