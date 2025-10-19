import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-hvac-tech.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary/10 to-accent/15 py-20 md:py-32">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 right-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-40 h-64 w-64 rounded-full bg-accent/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-40 left-20 h-80 w-80 rounded-full bg-secondary/10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl animate-fade-in">
              You're out on a job. The phone rings back at the shop. No one picks up.
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Ten minutes later, another company gets the install. Five thousand dollars, gone. Every ad click, every form, every message you paid for lost if no one answers fast.
            </p>
            <p className="text-lg font-medium animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Meet Ava. Your 24/7 AI Front Desk from MyAgentVerse. Ava answers every call and handles every lead before competitors do.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button variant="accent" size="lg" asChild className="hover-scale">
                <a href="#demo">🎧 Hear Ava Handle a Real HVAC Call</a>
              </Button>
              <Button variant="outline" size="lg" asChild className="hover-scale">
                <a href="#pricing">See Plans Starting at $149/mo</a>
              </Button>
            </div>
            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground animate-fade-in" style={{ animationDelay: '0.4s' }}>
              "We haven't missed a lead since Ava joined our team." <br />
              <span className="font-semibold not-italic">Mike, AirMax Heating & Cooling</span>
            </blockquote>
          </div>
          
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {/* Decorative elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-accent/30 to-secondary/20 rounded-3xl blur-2xl opacity-60 animate-pulse" />
            
            {/* Floating badges */}
            <div className="absolute -top-6 -right-6 bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold shadow-lg animate-[float_3s_ease-in-out_infinite] z-10">
              24/7 Available
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold shadow-lg animate-[float_3s_ease-in-out_infinite] z-10" style={{ animationDelay: '1.5s' }}>
              Never Miss a Call
            </div>
            
            {/* Main image with float animation */}
            <div className="relative animate-[float_6s_ease-in-out_infinite]">
              <img 
                src={heroImage} 
                alt="HVAC technician on rooftop at sunset" 
                className="rounded-2xl shadow-2xl relative z-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
