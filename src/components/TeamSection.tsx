import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Twitter, Linkedin, Github } from "lucide-react";
import Alvaro from "/alvaro.jpg";
import Juanqui from "/juanqui.jpeg";

const teamMembers = [
  {
    name: "Álvaro Ritter",
    title: "Co-Founder",
    bio: "Expert in AI and computer vision with extensive experience in military applications. Led multiple projects in tactical intelligence and situational awareness systems.",
    image: Alvaro,
    social: {
      linkedin: "https://www.linkedin.com/in/alvaro-ritter/",
      github: "https://github.com/alvaroritter"
    }
  },
  {
    name: "Juan Carlos Climent Pardo",
    title: "Co-Founder",
    bio: "Specialist in deep learning and geospatial analysis with a background in satellite imagery processing. Previously developed advanced tracking systems for defense applications.",
    image: Juanqui,
    social: {
      twitter: "https://x.com/jcliment55",
      linkedin: "https://www.linkedin.com/in/juan-carlos-climent-pardo/",
      github: "https://github.com/jc-cp"
    }
  }
];

const TeamSection = () => {
  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h6 className="text-primary font-medium mb-2">OUR TEAM</h6>
          <h2 className="text-3xl font-bold mb-4">Meet the Founders</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our team combines expertise in artificial intelligence, computer vision, 
            and entrepreneurship to deliver modern solutions to the battlefield at a staggering pace.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-square relative bg-muted/30">
                {/* Placeholder for headshot image */}
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center p-8">
                      <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4"></div>
                      <p>Headshot placeholder</p>
                    </div>
                  )}
                </div>
              </div>
              <CardHeader>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-primary">{member.title}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{member.bio}</p>
                <div className="flex gap-4 mt-2">
                  <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition">
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection; 