import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-hvac-tech.jpg";
import DemoModal from "@/components/DemoModal";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/10 to-secondary/5 py-20 md:py-32">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 right-20 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-accent/25 to-secondary/25 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-40 left-1/3 h-[350px] w-[350px] rounded-full bg-gradient-to-bl from-secondary/20 to-primary/20 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Colorful particles */}
        <div className="absolute top-32 right-1/4 h-3 w-3 rounded-full bg-accent animate-ping" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-40 right-1/3 h-2 w-2 rounded-full bg-primary animate-ping" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 right-20 h-2 w-2 rounded-full bg-secondary animate-ping" style={{ animationDelay: '2.5s' }} />
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
              <DemoModal>
                <Button variant="accent" size="lg" className="hover-scale">
                  🎧 Hear Ava Handle a Real HVAC Call
                </Button>
              </DemoModal>
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
            {/* Multi-layered decorative gradient background */}
            <div className="absolute -inset-8 bg-gradient-to-br from-primary/40 via-accent/40 to-secondary/30 rounded-[3rem] blur-3xl opacity-70 animate-pulse" />
            <div className="absolute -inset-6 bg-gradient-to-tl from-accent/30 via-primary/30 to-secondary/20 rounded-[2.5rem] blur-2xl opacity-60 animate-pulse" style={{ animationDelay: '1s' }} />
            
            {/* Geometric shapes */}
            <div className="absolute -top-8 right-1/4 h-16 w-16 rotate-45 bg-gradient-to-br from-primary to-accent opacity-20 animate-[float_4s_ease-in-out_infinite] blur-sm" />
            <div className="absolute -bottom-8 left-1/4 h-20 w-20 rotate-12 bg-gradient-to-tr from-accent to-secondary opacity-20 animate-[float_5s_ease-in-out_infinite] blur-sm" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/3 -right-4 h-12 w-12 rounded-full bg-gradient-to-r from-secondary to-primary opacity-25 animate-[float_3.5s_ease-in-out_infinite] blur-sm" style={{ animationDelay: '2s' }} />
            
            {/* Colorful floating badges */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-accent to-accent/90 text-accent-foreground px-5 py-2.5 rounded-full font-semibold shadow-xl shadow-accent/30 animate-[float_3s_ease-in-out_infinite] z-10 border-2 border-accent-foreground/10">
              24/7 Available
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground px-5 py-2.5 rounded-full font-semibold shadow-xl shadow-primary/30 animate-[float_3s_ease-in-out_infinite] z-10 border-2 border-primary-foreground/10" style={{ animationDelay: '1.5s' }}>
              Never Miss a Call
            </div>
            
            {/* Additional decorative dots */}
            <div className="absolute top-10 -left-3 h-3 w-3 rounded-full bg-primary animate-ping opacity-75" />
            <div className="absolute bottom-16 -right-3 h-3 w-3 rounded-full bg-accent animate-ping opacity-75" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 right-8 h-2 w-2 rounded-full bg-secondary animate-ping opacity-75" style={{ animationDelay: '2s' }} />
            
            {/* Main image with enhanced float animation and colorful border */}
            <div className="relative animate-[float_6s_ease-in-out_infinite] p-1 rounded-2xl bg-gradient-to-br from-primary via-accent to-secondary">
              <img 
                src={heroImage} 
                alt="HVAC technician on rooftop at sunset" 
                className="rounded-2xl shadow-2xl relative z-0 bg-background"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
