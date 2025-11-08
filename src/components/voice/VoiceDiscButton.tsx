import { Mic } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VoiceDiscButtonProps {
  onClick: () => void;
  isActive?: boolean;
}

export default function VoiceDiscButton({ onClick, isActive = false }: VoiceDiscButtonProps) {
  return (
    <Button
      onClick={onClick}
      className={`
        relative w-32 h-32 rounded-full 
        bg-gradient-to-br from-primary via-accent to-secondary
        hover:scale-110 transition-all duration-300
        shadow-2xl hover:shadow-primary/50
        ${isActive ? 'animate-pulse' : ''}
      `}
      variant="ghost"
    >
      <div className="absolute inset-2 rounded-full bg-background/10 backdrop-blur-sm flex items-center justify-center">
        <Mic className={`h-12 w-12 text-primary-foreground ${isActive ? 'animate-pulse' : ''}`} />
      </div>
      {isActive && (
        <div className="absolute inset-0 rounded-full animate-ping bg-primary/30" />
      )}
    </Button>
  );
}
