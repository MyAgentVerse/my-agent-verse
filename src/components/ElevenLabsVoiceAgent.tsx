import { Clock, Phone } from "lucide-react";

const ElevenLabsVoiceAgent = () => {
  return (
    <div className="relative flex items-center justify-center min-h-[500px] md:min-h-[600px]">
      {/* Decorative gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl" />
      
      {/* ElevenLabs Agent Iframe - Full Interface with Orb */}
      <div className="relative z-10 w-full max-w-[600px] h-[500px] md:h-[600px] flex items-center justify-center">
        <iframe
          src="https://elevenlabs.io/app/talk-to?agent_id=agent_2501k8pea9pxftab4kcbn0985jmh"
          width="100%"
          height="100%"
          frameBorder="0"
          allow="microphone"
          className="rounded-2xl"
          title="ElevenLabs Voice Agent - Talk to Ava"
        />
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
