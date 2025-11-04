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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
    companyName: "",
    website: "",
    industry: "",
    annualRevenue: "",
    teamSize: "",
    phone: "",
    biggestChallenge: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await initiateCheckout(formData);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Book Your Consultation - $299</DialogTitle>
          <DialogDescription>
            Fill in your details to proceed to secure checkout. Your $299 is fully credited toward your first project.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="companyName">Company Name *</Label>
              <Input
                id="companyName"
                required
                value={formData.companyName}
                onChange={(e) =>
                  setFormData({ ...formData, companyName: e.target.value })
                }
                placeholder="Your Company LLC"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="website">Website (Optional)</Label>
            <Input
              id="website"
              type="url"
              value={formData.website}
              onChange={(e) =>
                setFormData({ ...formData, website: e.target.value })
              }
              placeholder="https://yourcompany.com"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="industry">Industry *</Label>
              <Select
                required
                value={formData.industry}
                onValueChange={(value) =>
                  setFormData({ ...formData, industry: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Real Estate">Real Estate</SelectItem>
                  <SelectItem value="HVAC / Home Services">HVAC / Home Services</SelectItem>
                  <SelectItem value="Restaurant / Hospitality">Restaurant / Hospitality</SelectItem>
                  <SelectItem value="Marketing / Agency">Marketing / Agency</SelectItem>
                  <SelectItem value="Manufacturing / Logistics">Manufacturing / Logistics</SelectItem>
                  <SelectItem value="Healthcare / Dental">Healthcare / Dental</SelectItem>
                  <SelectItem value="E-commerce / Retail">E-commerce / Retail</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="annualRevenue">Annual Revenue *</Label>
              <Select
                required
                value={formData.annualRevenue}
                onValueChange={(value) =>
                  setFormData({ ...formData, annualRevenue: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select revenue range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="$1M - $2M">$1M - $2M</SelectItem>
                  <SelectItem value="$2M - $3M">$2M - $3M</SelectItem>
                  <SelectItem value="$3M - $5M">$3M - $5M</SelectItem>
                  <SelectItem value="$5M+">$5M+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="teamSize">Team Size *</Label>
            <Select
              required
              value={formData.teamSize}
              onValueChange={(value) =>
                setFormData({ ...formData, teamSize: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select team size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-10 employees">1-10 employees</SelectItem>
                <SelectItem value="11-25 employees">11-25 employees</SelectItem>
                <SelectItem value="26-50 employees">26-50 employees</SelectItem>
                <SelectItem value="50+ employees">50+ employees</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="biggestChallenge">Biggest Business Challenge *</Label>
            <Textarea
              id="biggestChallenge"
              required
              value={formData.biggestChallenge}
              onChange={(e) =>
                setFormData({ ...formData, biggestChallenge: e.target.value })
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
