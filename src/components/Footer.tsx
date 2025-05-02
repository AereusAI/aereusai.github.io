
import React from 'react';
import { Radar } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/20 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Radar className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">SightLine</span>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition">
              Twitter
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition">
              LinkedIn
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition">
              GitHub
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition">
              Contact
            </a>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2025 SightLine Nexus. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
