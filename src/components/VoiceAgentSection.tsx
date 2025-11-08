import { useEffect } from "react";

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

export default function VoiceAgentSection() {
  useEffect(() => {
    // Load the ElevenLabs widget script
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
    script.async = true;
    script.type = 'text/javascript';
    
    script.onload = () => {
      console.log("ElevenLabs widget script loaded successfully");
    };
    
    script.onerror = () => {
      console.error("Failed to load ElevenLabs widget script");
    };
    
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="bg-gradient-to-br from-primary/5 via-accent/10 to-secondary/5 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold md:text-4xl mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Talk to Our AI Agent
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience conversational AI in action. Click the disc below to start a voice conversation with our intelligent agent.
          </p>
        </div>
        <div className="flex justify-center min-h-[500px] items-center">
          <elevenlabs-convai agent-id="agent_2501k8pea9pxftab4kcbn0985jmh"></elevenlabs-convai>
        </div>
      </div>
    </section>
  );
}
