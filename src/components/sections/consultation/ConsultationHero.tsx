import { useState } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-ai-workspace.jpg";
import ConsultationCheckoutDialog from "@/components/ConsultationCheckoutDialog";

const ConsultationHero = () => {
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  return (
    <section className="mb-20 animate-fade-in">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        <div className="text-center lg:text-left px-4 sm:px-0">
          <h1 className="mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[hsl(var(--hero-gradient-start))] to-[hsl(var(--hero-gradient-end))] bg-clip-text text-transparent break-words">
            AI Strategy & Implementation Sprint
          </h1>
          <h2 className="mb-6 text-xl sm:text-2xl md:text-3xl font-semibold text-foreground break-words">
            Transform Your Business with AI in Just Two Private Sessions
          </h2>
          <p className="mb-8 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Most businesses know AI can help but don't know where to start or what will actually move the needle. This two-step consultation gives you absolute clarity, measurable ROI, and a 90-day action plan to begin automating your operations, marketing, or customer service with confidence.
          </p>
          <Button 
            onClick={() => setCheckoutOpen(true)}
            size="lg"
            className="bg-[hsl(var(--hero-button))] hover:bg-[hsl(var(--hero-button-hover))] text-white font-semibold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 h-auto w-full sm:w-auto"
          >
            Book Your Session ($299 Credit Applied)
          </Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
          <img 
            src={heroImage} 
            alt="AI Strategy & Implementation Sprint - Professional and AI hologram planning strategy" 
            className="relative rounded-3xl shadow-2xl w-full hover-scale"
          />
        </div>
      </div>
      <ConsultationCheckoutDialog 
        open={checkoutOpen}
        onOpenChange={setCheckoutOpen}
      />
    </section>
  );
};

export default ConsultationHero;
