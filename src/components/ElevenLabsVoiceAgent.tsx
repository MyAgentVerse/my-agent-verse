import { useEffect } from "react";
import { Clock, Phone } from "lucide-react";

// Declare the custom element for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'agent-id': string;
      };
    }
  }
}

const ElevenLabsVoiceAgent = () => {
  useEffect(() => {
    // Load the ElevenLabs widget script
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
    script.async = true;
    script.type = 'text/javascript';
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-[500px] md:min-h-[600px]">
      {/* Decorative gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl" />
      
      {/* ElevenLabs ConvAI Widget */}
      <div className="relative z-10 w-full flex items-center justify-center">
        <elevenlabs-convai agent-id="agent_2501k8pea9pxftab4kcbn0985jmh"></elevenlabs-convai>
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
