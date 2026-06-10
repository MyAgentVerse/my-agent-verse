import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Helmet } from "react-helmet";
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
import logo from "@/assets/myagentverse-logo-new.png";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  company_name: z.string().optional(),
  role: z.string().min(1, "Please select your role"),
});

type FormData = z.infer<typeof formSchema>;

const HealthcareDemo = () => {
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

  useState(() => {
    trackFormStart("demo");
  });

  const handleGoToDemo = () => {
    window.open("https://healthcare.myagentverse.com/", "_blank");
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
        source: "qr_code_landing",
      },
    });

    if (result.success) {
      trackFormSubmit("demo", { industry: "healthcare", source: "qr_code" });
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
    <>
      <Helmet>
        <title>Healthcare AI Demo | MyAgentVerse</title>
        <meta name="description" content="See our Healthcare AI Assistant in action. Experience how AI can transform patient communication for your practice." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-8">
            <a href="/">
              <img src={logo} alt="MyAgentVerse" className="h-12 mx-auto" />
            </a>
          </div>

          {/* Card */}
          <div className="bg-card rounded-2xl shadow-xl border p-8">
            {isSuccess ? (
              <div className="flex flex-col items-center text-center py-6 space-y-4">
                <div className="p-3 rounded-full bg-green-100">
                  <CheckCircle className="h-12 w-12 text-green-600" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-foreground">You're All Set!</h1>
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
                {/* Header */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 mb-4">
                    <Stethoscope className="h-8 w-8 text-primary" />
                  </div>
                  <h1 className="text-2xl font-bold text-foreground">
                    See Our Healthcare AI in Action
                  </h1>
                  <p className="text-muted-foreground mt-2">
                    Get instant access to our live demo. See how AI can transform patient communication for your practice.
                  </p>
                </div>

                {/* Form */}
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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

                    <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
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
          </div>

          {/* Footer */}
          <p className="text-center text-sm text-muted-foreground mt-6">
            Questions? Call us at{" "}
            <a href="tel:+17135176792" className="text-primary hover:underline font-medium">
              (713) 517-6792
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default HealthcareDemo;
