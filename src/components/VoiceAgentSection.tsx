import { useState } from "react";
import VoiceDiscButton from "./voice/VoiceDiscButton";
import VoiceChatModal from "./voice/VoiceChatModal";

export default function VoiceAgentSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        <div className="flex justify-center min-h-[300px] items-center">
          <VoiceDiscButton onClick={() => setIsModalOpen(true)} />
        </div>
      </div>

      <VoiceChatModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </section>
  );
}
