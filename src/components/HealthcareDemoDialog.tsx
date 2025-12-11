import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useLeadSubmission } from "@/hooks/useLeadSubmission";
import { useAnalytics } from "@/hooks/useAnalytics";
import { Loader2, Stethoscope, CheckCircle, ExternalLink } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  company_name: z.string().optional(),
  role: z.string().min(1, "Please select your role"),
});

type FormData = z.infer<typeof formSchema>;

interface HealthcareDemoDialogProps {
  children: React.ReactNode;
}

export const HealthcareDemoDialog = ({ children }: HealthcareDemoDialogProps) => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  const { submitLead } = useLeadSubmission();
  const { trackFormStart, trackFormSubmit } = useAnalytics();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company_name: "",
      role: "",
    },
  });

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (isOpen) {
      trackFormStart("demo");
      setIsSuccess(false);
    }
  };

  const handleGoToDemo = () => {
    window.open("https://healthcare.myagentverse.com/", "_blank");
    setOpen(false);
    setIsSuccess(false);
    form.reset();
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    const result = await submitLead({
      email: data.email,
      name: data.name,
      phone: data.phone || undefined,
      company_name: data.company_name || undefined,
      form_type: "demo",
      custom_fields: {
        industry: "healthcare",
        demo_type: "healthcare_demo",
        role: data.role,
      },
    });

    if (result.success) {
      trackFormSubmit("demo", { industry: "healthcare" });
      setIsSuccess(true);
    } else {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact support.",
        variant: "destructive",
      });
    }
    
    setIsSubmitting(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        {isSuccess ? (
          <div className="flex flex-col items-center text-center py-6 space-y-4">
            <div className="p-3 rounded-full bg-green-100">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground">You're All Set!</h3>
              <p className="text-muted-foreground mt-2">
                Click below to explore our Healthcare AI Demo.
              </p>
            </div>
            <Button onClick={handleGoToDemo} className="w-full gap-2" size="lg">
              <ExternalLink className="h-4 w-4" />
              Open Healthcare Demo
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <div className="flex items-center gap-2 mb-2">
                <div className="p-2 rounded-full bg-primary/10">
                  <Stethoscope className="h-5 w-5 text-primary" />
                </div>
                <DialogTitle className="text-xl">See Our Healthcare AI in Action</DialogTitle>
              </div>
              <DialogDescription>
                Get instant access to our live demo. See how AI can transform patient communication for your practice.
              </DialogDescription>
            </DialogHeader>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Dr. Jane Smith" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="jane@practice.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="(555) 123-4567" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Practice Name</FormLabel>
                        <FormControl>
                          <Input placeholder="ABC Medical" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Role *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your role" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="doctor">Doctor / Physician</SelectItem>
                          <SelectItem value="practice_admin">Practice Administrator</SelectItem>
                          <SelectItem value="office_manager">Office Manager</SelectItem>
                          <SelectItem value="nurse">Nurse / Clinical Staff</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Getting Access...
                    </>
                  ) : (
                    "Access Live Demo →"
                  )}
                </Button>
              </form>
            </Form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
