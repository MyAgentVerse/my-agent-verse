import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroWorkspace from "@/assets/hero-ai-workspace.jpg";
import { Sparkles } from "lucide-react";

const AIRoadmapHero = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroWorkspace}
          alt="AI Roadmap Strategy Call Hero Banner — MyAgentVerse Homepage"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/85" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-[hsl(var(--hero-gradient-start))]/30 to-[hsl(var(--hero-gradient-end))]/30 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-[hsl(var(--hero-gradient-end))]/25 to-[hsl(var(--hero-gradient-start))]/25 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container relative mx-auto px-6">
        <div className="mx-auto max-w-5xl text-center">
          {/* Icon Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[hsl(var(--hero-gradient-start))]/20 to-[hsl(var(--hero-gradient-end))]/20 px-6 py-2 backdrop-blur-sm animate-fade-in">
            <Sparkles className="h-5 w-5 text-[hsl(var(--hero-button))]" />
            <span className="text-sm font-semibold">Limited Strategy Sessions Available</span>
          </div>

          {/* Headline with Gradient */}
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Discover Where AI Can Save or Earn You{" "}
            <span className="bg-gradient-to-r from-[hsl(var(--hero-gradient-start))] to-[hsl(var(--hero-gradient-end))] bg-clip-text text-transparent">
              $100K+
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mb-8 text-xl text-muted-foreground md:text-2xl leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Get a 1-on-1 AI Strategy Session with MyAgentVerse — Includes a personalized audit and roadmap designed to uncover hidden automation opportunities.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button 
              size="lg"
              asChild
              className="text-lg px-8 py-6 rounded-xl shadow-2xl transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,183,194,0.4)] hover:scale-105 group"
              style={{
                backgroundColor: 'hsl(var(--hero-button))',
                color: 'hsl(var(--primary-foreground))'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'hsl(var(--hero-button-hover))';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'hsl(var(--hero-button))';
              }}
            >
              <Link to="/consultation" className="flex items-center gap-2">
                Reserve Your Strategy Call Now
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </Button>
          </div>

          {/* Price Highlight */}
          <p className="mt-6 text-sm font-medium text-muted-foreground animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <span className="line-through opacity-70">$10,000 strategy</span>{" "}
            <span className="text-2xl font-bold text-[hsl(var(--hero-button))]">→ $299</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AIRoadmapHero;
