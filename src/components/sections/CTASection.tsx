import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import DemoModal from "@/components/DemoModal";

const CTASection = () => {
  return (
    <section id="demo" className="bg-gradient-to-br from-secondary to-secondary/80 py-20 text-secondary-foreground">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            You fix the systems. Ava fixes the follow-up.
          </h2>
          
          <p className="mb-12 text-xl">
            Even one saved install can pay for a month, sometimes for the whole year.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button 
              variant="accent" 
              size="lg"
              asChild
            >
              <a href="tel:+12816998318" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call Us: (281) 699-8318
              </a>
            </Button>
            <DemoModal>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-transparent border-2 border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary font-semibold"
              >
                🎧 Hear Ava Demo
              </Button>
            </DemoModal>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-transparent border-2 border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary font-semibold"
              asChild
            >
              <a href="/booking">📅 Book Setup Call</a>
            </Button>
          </div>

          <p className="mt-12 text-sm font-medium opacity-90">
            MyAgentVerse: real AI teammates for real HVAC shops.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
