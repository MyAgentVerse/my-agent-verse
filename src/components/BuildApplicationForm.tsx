import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { useLeadSubmission } from "@/hooks/useLeadSubmission";
import { useAnalytics } from "@/hooks/useAnalytics";

const buildFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(100, "Name must be less than 100 characters"),
  email: z
    .string()
    .trim()
    .email("Invalid email address")
    .max(255, "Email must be less than 255 characters"),
  phone: z
    .string()
    .trim()
    .min(10, "Phone is required and must be at least 10 characters")
    .max(20, "Phone must be less than 20 characters"),
  companyName: z
    .string()
    .trim()
    .min(1, "Company name is required")
    .max(200, "Company name must be less than 200 characters"),
  annualRevenue: z
    .string()
    .trim()
    .min(1, "Annual revenue is required"),
  teamSize: z
    .string()
    .trim()
    .min(1, "Team size is required"),
  projectType: z
    .string()
    .trim()
    .min(1, "Project type is required"),
  timeline: z
    .string()
    .trim()
    .min(1, "Timeline is required"),
  budget: z
    .string()
    .trim()
    .min(1, "Budget is required"),
  projectDescription: z
    .string()
    .trim()
    .min(20, "Please provide at least 20 characters describing your project")
    .max(2000, "Description must be less than 2000 characters"),
  techRequirements: z
    .string()
    .trim()
    .max(1000, "Tech requirements must be less than 1000 characters")
    .optional()
    .or(z.literal("")),
});

type BuildFormData = z.infer<typeof buildFormSchema>;

const BuildApplicationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { submitLead } = useLeadSubmission();
  const { trackFormStart, trackFormSubmit } = useAnalytics();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<BuildFormData>({
    resolver: zodResolver(buildFormSchema),
  });

  const onSubmit = async (data: BuildFormData) => {
    setIsSubmitting(true);

    try {
      // Submit to CRM
      const result = await submitLead({
        email: data.email,
        name: data.name,
        phone: data.phone,
        company_name: data.companyName,
        form_type: 'build',
        custom_fields: {
          annual_revenue: data.annualRevenue,
          team_size: data.teamSize,
          project_type: data.projectType,
          timeline: data.timeline,
          budget: data.budget,
          project_description: data.projectDescription,
          tech_requirements: data.techRequirements || null,
        },
      });

      if (!result.success) {
        throw new Error(result.error);
      }

      // Track successful submission
      trackFormSubmit('build', {
        lead_id: result.lead?.id,
        email: data.email,
        project_type: data.projectType,
      });

      toast({
        title: "Application Submitted!",
        description: "We'll review your project and get back to you within 24 hours.",
      });

      reset();
    } catch (error: any) {
      console.error("Error submitting build application:", error);
      toast({
        title: "Submission Failed",
        description: "Something went wrong. Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)} 
      onFocus={() => trackFormStart('build')}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="name" className="text-sm font-medium">
            Full Name *
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="John Smith"
            className="mt-1"
            {...register("name")}
            disabled={isSubmitting}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="email" className="text-sm font-medium">
            Email *
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="john@company.com"
            className="mt-1"
            {...register("email")}
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="phone" className="text-sm font-medium">
            Phone *
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+1 (555) 123-4567"
            className="mt-1"
            {...register("phone")}
            disabled={isSubmitting}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-destructive">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="companyName" className="text-sm font-medium">
            Company Name *
          </Label>
          <Input
            id="companyName"
            type="text"
            placeholder="Your Company LLC"
            className="mt-1"
            {...register("companyName")}
            disabled={isSubmitting}
          />
          {errors.companyName && (
            <p className="mt-1 text-xs text-destructive">{errors.companyName.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="annualRevenue" className="text-sm font-medium">
            Annual Revenue *
          </Label>
          <Select
            onValueChange={(value) => setValue("annualRevenue", value)}
            disabled={isSubmitting}
          >
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select revenue range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="$1M - $2M">$1M - $2M</SelectItem>
              <SelectItem value="$2M - $3M">$2M - $3M</SelectItem>
              <SelectItem value="$3M - $5M">$3M - $5M</SelectItem>
              <SelectItem value="$5M+">$5M+</SelectItem>
            </SelectContent>
          </Select>
          {errors.annualRevenue && (
            <p className="mt-1 text-xs text-destructive">{errors.annualRevenue.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="teamSize" className="text-sm font-medium">
            Team Size *
          </Label>
          <Select
            onValueChange={(value) => setValue("teamSize", value)}
            disabled={isSubmitting}
          >
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select team size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-5 employees">1-5 employees</SelectItem>
              <SelectItem value="6-10 employees">6-10 employees</SelectItem>
              <SelectItem value="11-25 employees">11-25 employees</SelectItem>
              <SelectItem value="26-50 employees">26-50 employees</SelectItem>
              <SelectItem value="50+ employees">50+ employees</SelectItem>
            </SelectContent>
          </Select>
          {errors.teamSize && (
            <p className="mt-1 text-xs text-destructive">{errors.teamSize.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <Label htmlFor="projectType" className="text-sm font-medium">
            Project Type *
          </Label>
          <Select
            onValueChange={(value) => setValue("projectType", value)}
            disabled={isSubmitting}
          >
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Client Portal">Client Portal</SelectItem>
              <SelectItem value="Team Dashboard">Team Dashboard</SelectItem>
              <SelectItem value="Custom CRM">Custom CRM</SelectItem>
              <SelectItem value="Quoting Tool">Quoting Tool</SelectItem>
              <SelectItem value="AI Integration">AI Integration</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
          {errors.projectType && (
            <p className="mt-1 text-xs text-destructive">{errors.projectType.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="timeline" className="text-sm font-medium">
            Timeline *
          </Label>
          <Select
            onValueChange={(value) => setValue("timeline", value)}
            disabled={isSubmitting}
          >
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="When do you need this?" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ASAP (Next 2 weeks)">ASAP (Next 2 weeks)</SelectItem>
              <SelectItem value="Within 1 month">Within 1 month</SelectItem>
              <SelectItem value="1-3 months">1-3 months</SelectItem>
              <SelectItem value="3+ months">3+ months</SelectItem>
            </SelectContent>
          </Select>
          {errors.timeline && (
            <p className="mt-1 text-xs text-destructive">{errors.timeline.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="budget" className="text-sm font-medium">
            Budget *
          </Label>
          <Select
            onValueChange={(value) => setValue("budget", value)}
            disabled={isSubmitting}
          >
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select budget" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="$10k - $25k">$10k - $25k</SelectItem>
              <SelectItem value="$25k - $50k">$25k - $50k</SelectItem>
              <SelectItem value="$50k - $100k">$50k - $100k</SelectItem>
              <SelectItem value="$100k+">$100k+</SelectItem>
            </SelectContent>
          </Select>
          {errors.budget && (
            <p className="mt-1 text-xs text-destructive">{errors.budget.message}</p>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="projectDescription" className="text-sm font-medium">
          Project Description *
        </Label>
        <Textarea
          id="projectDescription"
          placeholder="Tell us about your project - what problem are you solving? What features do you need? Who will use this?"
          className="mt-1 min-h-[120px]"
          {...register("projectDescription")}
          disabled={isSubmitting}
        />
        {errors.projectDescription && (
          <p className="mt-1 text-xs text-destructive">{errors.projectDescription.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="techRequirements" className="text-sm font-medium">
          Technical Requirements (Optional)
        </Label>
        <Textarea
          id="techRequirements"
          placeholder="Any specific integrations, APIs, or technical requirements? (e.g., Stripe payments, Twilio SMS, Google Calendar integration)"
          className="mt-1 min-h-[80px]"
          {...register("techRequirements")}
          disabled={isSubmitting}
        />
        {errors.techRequirements && (
          <p className="mt-1 text-xs text-destructive">{errors.techRequirements.message}</p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full"
        size="lg"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting Application...
          </>
        ) : (
          "Submit Build Application"
        )}
      </Button>

      <p className="text-sm text-muted-foreground text-center">
        We review all applications within 24 hours. Only 2 build slots available per month.
      </p>
    </form>
  );
};

export default BuildApplicationForm;
