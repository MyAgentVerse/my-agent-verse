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
  phoneNumber?: string;
  industry?: "hvac" | "realtor";
}

const DemoModal = ({ children, phoneNumber = "(832) 843-9474", industry = "hvac" }: DemoModalProps) => {
  const isRealtor = industry === "realtor";
  
  const content = {
    title: isRealtor ? "Try Ava - Your AI Real Estate Assistant" : "Try Ava - Your AI HVAC Assistant",
    description: isRealtor 
      ? "Experience how Ava handles real customer calls with natural, professional conversations for real estate."
      : "Experience how Ava handles real customer calls with natural, professional conversations.",
    howItWorksText: isRealtor
      ? "When you call, pretend you're a customer calling a real estate agent. Ava will answer and handle your call just like a real receptionist - but she's available 24/7 and never misses a beat."
      : "When you call, pretend you're a customer calling an HVAC company. Ava will answer and handle your call just like a real receptionist - but she's available 24/7 and never misses a beat.",
    needsText: isRealtor ? "Ava will ask about your real estate needs" : "Ava will ask about your HVAC needs",
    scheduleText: isRealtor ? "She'll capture your information and schedule a showing" : "She'll capture your information and schedule service",
    scenarios: isRealtor ? [
      "\"I'm interested in seeing homes in the downtown area\"",
      "\"Can you help me sell my house?\"",
      "\"I'd like to schedule a showing this week\""
    ] : [
      "\"My AC stopped working and it's 95 degrees\"",
      "\"I need a quote for a new heating system\"",
      "\"Can someone come out this week?\""
    ]
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center pr-8">
            🎧 {content.title}
          </DialogTitle>
          <DialogDescription className="text-base pt-2">
            {content.description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4 pb-6">
          {/* Instructions */}
          <div className="bg-accent/10 rounded-lg p-3 space-y-2">
            <h3 className="font-semibold text-base flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
              How it Works
            </h3>
            <p className="text-sm text-muted-foreground">
              {content.howItWorksText}
            </p>
          </div>

          {/* What to Expect */}
          <div className="space-y-2">
            <h4 className="font-semibold text-sm">What to Expect:</h4>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Professional greeting and natural conversation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>{content.needsText}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>{content.scheduleText}</span>
              </li>
            </ul>
          </div>

          {/* Example Scenarios */}
          <div className="bg-secondary/10 rounded-lg p-3 space-y-2">
            <h4 className="font-semibold text-sm">Try These Scenarios:</h4>
            <ul className="text-sm text-muted-foreground space-y-0.5">
              {content.scenarios.map((scenario, index) => (
                <li key={index}>• {scenario}</li>
              ))}
            </ul>
          </div>

          {/* Phone Number */}
          <div className="space-y-3">
            <div className="bg-primary/5 border-2 border-primary/20 rounded-lg p-3 text-center">
              <p className="text-sm text-muted-foreground mb-1">Call this number:</p>
              <p className="text-2xl sm:text-3xl font-bold text-primary tracking-wide break-all">{phoneNumber}</p>
            </div>

            {/* Call Button */}
            <Button 
              variant="accent" 
              size="lg" 
              className="w-full text-base" 
              asChild
            >
              <a href={`tel:${phoneNumber}`}>
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </a>
            </Button>
          </div>

          <p className="text-xs text-center text-muted-foreground pb-2">
            This is a live demo line. Ava is ready to show you how she handles your customers.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DemoModal;
