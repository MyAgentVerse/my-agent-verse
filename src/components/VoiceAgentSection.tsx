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
    const script = document.createElement("script");
    script.src = "https://cdn.elevenlabs.io/agent.js";
    script.async = true;
    document.body.appendChild(script);

    window.ElevenLabs = window.ElevenLabs || {};
    window.ElevenLabs.agent = {
      agentId: "agent_2501k8pea9pxftab4kcbn0985jmh",
      type: "inline"
    };

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="bg-background py-12">
      <div className="container mx-auto px-6">
        <div className="flex justify-center">
          <div id="elevenlabs-voice-agent"></div>
        </div>
      </div>
    </section>
  );
}
