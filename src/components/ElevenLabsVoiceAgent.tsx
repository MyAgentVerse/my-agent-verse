import { useState } from "react";
import { Mic } from "lucide-react";
import { Clock, Phone } from "lucide-react";

const ElevenLabsVoiceAgent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex items-center justify-center min-h-[400px]">
      {/* Decorative gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl" />
      
      {/* Central animated disk */}
      <div className="relative z-10">
        {/* Iframe Container - appears above disk when open */}
        {isOpen && (
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-[360px] max-w-[calc(100vw-32px)] animate-fade-in">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20">
              <iframe
                src="https://elevenlabs.io/app/talk-to?agent_id=agent_2501k8pea9pxftab4kcbn0985jmh"
                width="100%"
                height="480"
                frameBorder="0"
                allow="microphone"
                className="w-full"
                title="ElevenLabs Voice Agent"
              />
            </div>
          </div>
        )}

        {/* Animated Disk Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative group"
          aria-label="Toggle voice agent"
        >
          {/* Outer glow rings */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent opacity-40 blur-2xl animate-pulse" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent to-primary opacity-30 blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
          
          {/* Main disk */}
          <div className="relative h-20 w-20 md:h-24 md:w-24 rounded-full bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(0,133,255,0.6)] flex items-center justify-center border-4 border-primary-foreground/20">
            <Mic className="h-10 w-10 md:h-12 md:w-12 text-primary-foreground animate-pulse" />
          </div>
        </button>
      </div>

      {/* Floating badges */}
      <div className="absolute -top-4 -right-4 rounded-lg bg-card p-4 shadow-lg border border-border animate-fade-in hover-scale z-20">
        <div className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-primary" />
          <span className="font-semibold">24/7 Available</span>
        </div>
      </div>
      
      <div className="absolute -bottom-4 -left-4 rounded-lg bg-card p-4 shadow-lg border border-border animate-fade-in hover-scale z-20" style={{ animationDelay: '0.2s' }}>
        <div className="flex items-center gap-2">
          <Phone className="h-5 w-5 text-accent" />
          <span className="font-semibold">Never Miss a Call</span>
        </div>
      </div>
    </div>
  );
};

export default ElevenLabsVoiceAgent;
