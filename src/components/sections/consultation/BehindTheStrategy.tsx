import founderImage from "@/assets/founder-journey.jpg";

const BehindTheStrategy = () => {
  return (
    <section className="mb-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          Behind the Strategy: Meet Your AI Consultant
        </h2>
        
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-purple-500/30 rounded-3xl blur-3xl"></div>
            <img 
              src={founderImage} 
              alt="Dawood Kokawala, Founder of MyAgentVerse - AI strategist in modern workspace" 
              className="relative rounded-3xl shadow-2xl w-full"
            />
          </div>
          
          <div className="order-1 lg:order-2 space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Your session is led by <strong className="text-foreground">Dawood Kokawala</strong>, founder of MyAgentVerse, a hands-on AI strategist who has built real automation systems for industries including real estate, HVAC, healthcare, manufacturing, and marketing.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Dawood has personally developed and deployed AI voice agents, data-driven workflow systems, and full AI-powered customer engagement platforms using technologies like Retell AI, n8n, and ElevenLabs.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              He believes every business deserves access to world-class automation without the complexity or high consulting fees usually associated with AI transformation.
            </p>
            <p className="text-lg font-semibold text-foreground">
              This consultation gives you the same clarity, systems, and strategy that his high-end clients use to save hundreds of hours and scale profitably.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BehindTheStrategy;
