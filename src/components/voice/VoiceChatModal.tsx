import { useState, useRef, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Mic, MicOff, Volume2, Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface VoiceChatModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function VoiceChatModal({ open, onOpenChange }: VoiceChatModalProps) {
  const { toast } = useToast();
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [transcript, setTranscript] = useState("");
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!open) {
      stopRecording();
    }
  }, [open]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        await processAudio(audioBlob);
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
      
      toast({
        title: "Recording started",
        description: "Speak now...",
      });
    } catch (error) {
      console.error("Error starting recording:", error);
      toast({
        title: "Error",
        description: "Failed to access microphone",
        variant: "destructive",
      });
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const processAudio = async (audioBlob: Blob) => {
    setIsProcessing(true);
    
    try {
      // Convert audio to base64
      const reader = new FileReader();
      reader.readAsDataURL(audioBlob);
      
      reader.onloadend = async () => {
        const base64Audio = (reader.result as string).split(',')[1];
        
        // Send to speech-to-text
        const { data: sttData, error: sttError } = await supabase.functions.invoke('speech-to-text', {
          body: { audio: base64Audio }
        });

        if (sttError) throw sttError;
        
        const transcribedText = sttData.text;
        setTranscript(transcribedText);

        // Send to text-to-speech for AI response
        const { data: ttsData, error: ttsError } = await supabase.functions.invoke('text-to-speech', {
          body: { 
            text: `You said: ${transcribedText}. How can I help you with that?`,
            voice: 'alloy'
          }
        });

        if (ttsError) throw ttsError;

        // Play the audio response
        const audioBase64 = ttsData.audioContent;
        const audioBlob = base64ToBlob(audioBase64, 'audio/mpeg');
        const audioUrl = URL.createObjectURL(audioBlob);
        
        if (audioRef.current) {
          audioRef.current.src = audioUrl;
          audioRef.current.play();
        }

        toast({
          title: "Processing complete",
          description: "Playing AI response...",
        });
      };
    } catch (error) {
      console.error("Error processing audio:", error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to process audio",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const base64ToBlob = (base64: string, mimeType: string): Blob => {
    const byteCharacters = atob(base64);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += 512) {
      const slice = byteCharacters.slice(offset, offset + 512);
      const byteNumbers = new Array(slice.length);
      
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    return new Blob(byteArrays, { type: mimeType });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">Voice Chat</DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col items-center gap-6 py-6">
          <div className="relative">
            <Button
              onClick={isRecording ? stopRecording : startRecording}
              disabled={isProcessing}
              className={`
                w-32 h-32 rounded-full
                ${isRecording 
                  ? 'bg-gradient-to-br from-red-500 to-red-600 animate-pulse' 
                  : 'bg-gradient-to-br from-primary via-accent to-secondary'
                }
                hover:scale-110 transition-all duration-300
                shadow-2xl
              `}
              variant="ghost"
            >
              {isProcessing ? (
                <Loader2 className="h-12 w-12 text-primary-foreground animate-spin" />
              ) : isRecording ? (
                <MicOff className="h-12 w-12 text-white" />
              ) : (
                <Mic className="h-12 w-12 text-primary-foreground" />
              )}
            </Button>
            {isRecording && (
              <div className="absolute inset-0 rounded-full animate-ping bg-red-500/30" />
            )}
          </div>

          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              {isProcessing 
                ? "Processing your voice..." 
                : isRecording 
                ? "Recording... Click to stop" 
                : "Click to start speaking"}
            </p>
            {transcript && (
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm font-medium mb-1">You said:</p>
                <p className="text-sm text-muted-foreground">{transcript}</p>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Volume2 className="h-4 w-4" />
            <span>Audio output enabled</span>
          </div>
        </div>

        <audio ref={audioRef} className="hidden" />
      </DialogContent>
    </Dialog>
  );
}
