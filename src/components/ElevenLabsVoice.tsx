import { useState } from "react";
import { Mic } from "lucide-react";

const ElevenLabsVoice = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Voice Disk */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-[70px] h-[70px] bg-primary rounded-full shadow-xl hover:scale-110 transition-transform duration-300 cursor-pointer z-[9999] flex items-center justify-center group"
      >
        <Mic className="w-8 h-8 text-primary-foreground group-hover:animate-pulse" />
      </div>

      {/* ElevenLabs Agent Iframe */}
      {isOpen && (
        <div className="fixed bottom-[110px] right-6 w-[360px] h-[480px] rounded-2xl overflow-hidden shadow-2xl z-[9998] animate-in slide-in-from-bottom-4 duration-300">
          <iframe
            src="https://elevenlabs.io/app/talk-to?agent_id=agent_2501k8pea9pxftab4kcbn0985jmh"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="microphone"
            title="ElevenLabs Voice Agent"
          />
        </div>
      )}
    </>
  );
};

export default ElevenLabsVoice;
