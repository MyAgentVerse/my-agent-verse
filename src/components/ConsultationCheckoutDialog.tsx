import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useConsultationCheckout } from "@/hooks/useConsultationCheckout";
import { Loader2 } from "lucide-react";

interface ConsultationCheckoutDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ConsultationCheckoutDialog = ({
  open,
  onOpenChange,
}: ConsultationCheckoutDialogProps) => {
  const { initiateCheckout, isLoading } = useConsultationCheckout();
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    company: "",
    challenge: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await initiateCheckout(formData);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Book Your Consultation - $299</DialogTitle>
          <DialogDescription>
            Fill in your details to proceed to secure checkout. Your $299 is fully credited toward your first project.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="John Smith"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="john@company.com"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Company Name *</Label>
            <Input
              id="company"
              required
              value={formData.company}
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
              placeholder="Your Company LLC"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="challenge">Biggest Business Challenge *</Label>
            <Textarea
              id="challenge"
              required
              value={formData.challenge}
              onChange={(e) =>
                setFormData({ ...formData, challenge: e.target.value })
              }
              placeholder="What's the main challenge you're looking to solve with AI?"
              rows={3}
            />
          </div>
          <Button
            type="submit"
            className="w-full"
            size="lg"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              "Proceed to Checkout"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationCheckoutDialog;
