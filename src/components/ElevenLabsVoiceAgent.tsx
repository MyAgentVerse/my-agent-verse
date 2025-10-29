import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "./ui/button";

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
  const [isOpen, setIsOpen] = useState(false);

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
    <>
      {/* Floating Toggle Button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 animate-fade-in">
          <div className="bg-card rounded-lg shadow-lg px-4 py-2 border border-border">
            <p className="text-sm font-medium whitespace-nowrap">How can I assist you?</p>
          </div>
          <Button
            onClick={() => setIsOpen(true)}
            className="h-14 w-14 rounded-full shadow-lg hover-scale"
            size="icon"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        </div>
      )}

      {/* Widget Modal */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
          <elevenlabs-convai agent-id="agent_2501k8pea9pxftab4kcbn0985jmh"></elevenlabs-convai>
        </div>
      )}
    </>
  );
};

export default ElevenLabsVoiceAgent;
