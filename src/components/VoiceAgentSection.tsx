import { useEffect } from "react";

// Declare global type for ElevenLabs
declare global {
  interface Window {
    ElevenLabs?: {
      agent?: {
        agentId: string;
        type: string;
      };
    };
  }
}

export default function VoiceAgentSection() {
  useEffect(() => {
    // Configure ElevenLabs before loading the script
    window.ElevenLabs = window.ElevenLabs || {};
    window.ElevenLabs.agent = {
      agentId: "agent_2501k8pea9pxftab4kcbn0985jmh",
      type: "inline"
    };

    // Load the ElevenLabs agent script
    const script = document.createElement("script");
    script.src = "https://cdn.elevenlabs.io/agent.js";
    script.async = true;
    script.type = "text/javascript";
    
    script.onload = () => {
      console.log("ElevenLabs agent script loaded successfully");
    };
    
    script.onerror = () => {
      console.error("Failed to load ElevenLabs agent script");
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
        <div className="flex justify-center min-h-[400px] items-center">
          <div id="elevenlabs-voice-agent" className="w-full max-w-2xl"></div>
        </div>
      </div>
    </section>
  );
}
