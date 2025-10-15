import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-hvac-tech.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              You're out on a job. The phone rings back at the shop. No one picks up.
            </h1>
            <p className="text-xl text-muted-foreground">
              Ten minutes later, another company gets the install. Five thousand dollars — gone. Every ad click, every form, every message you paid for — lost if no one answers fast.
            </p>
            <p className="text-lg font-medium">
              Meet Ava. Your 24/7 AI Front Desk from MyAgentVerse. Ava answers every call and handles every lead — before competitors do.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button variant="accent" size="lg" asChild>
                <a href="#demo">🎧 Hear Ava Handle a Real HVAC Call</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#pricing">See Plans Starting at $149/mo</a>
              </Button>
            </div>
            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
              "We haven't missed a lead since Ava joined our team." <br />
              <span className="font-semibold not-italic">— Mike, AirMax Heating & Cooling</span>
            </blockquote>
          </div>
          <div className="relative">
            <img 
              src={heroImage} 
              alt="HVAC technician on rooftop at sunset" 
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
