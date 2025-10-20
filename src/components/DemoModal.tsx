import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2 } from "lucide-react";

interface DemoModalProps {
  children: React.ReactNode;
}

const DemoModal = ({ children }: DemoModalProps) => {
  const phoneNumber = "(832) 842-9474";

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            🎧 Try Ava - Your AI HVAC Assistant
          </DialogTitle>
          <DialogDescription className="text-base pt-2">
            Experience how Ava handles real customer calls with natural, professional conversations.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          {/* Instructions */}
          <div className="bg-accent/10 rounded-lg p-4 space-y-3">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-accent" />
              How it Works
            </h3>
            <p className="text-sm text-muted-foreground">
              When you call, pretend you're a customer calling an HVAC company. Ava will answer and handle your call just like a real receptionist - but she's available 24/7 and never misses a beat.
            </p>
          </div>

          {/* What to Expect */}
          <div className="space-y-2">
            <h4 className="font-semibold">What to Expect:</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Professional greeting and natural conversation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Ava will ask about your HVAC needs</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>She'll capture your information and schedule service</span>
              </li>
            </ul>
          </div>

          {/* Example Scenarios */}
          <div className="bg-secondary/10 rounded-lg p-4 space-y-2">
            <h4 className="font-semibold text-sm">Try These Scenarios:</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• "My AC stopped working and it's 95 degrees"</li>
              <li>• "I need a quote for a new heating system"</li>
              <li>• "Can someone come out this week?"</li>
            </ul>
          </div>

          {/* Phone Number */}
          <div className="space-y-4">
            <div className="bg-primary/5 border-2 border-primary/20 rounded-lg p-4 text-center">
              <p className="text-sm text-muted-foreground mb-2">Call this number:</p>
              <p className="text-3xl font-bold text-primary tracking-wide">{phoneNumber}</p>
            </div>

            {/* Call Button */}
            <Button 
              variant="accent" 
              size="lg" 
              className="w-full" 
              asChild
            >
              <a href={`tel:${phoneNumber}`}>
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </a>
            </Button>
          </div>

          <p className="text-xs text-center text-muted-foreground">
            This is a live demo line. Ava is ready to show you how she handles your customers.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DemoModal;
