import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const contactFormSchema = z.object({
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
    .min(10, "Phone must be at least 10 characters")
    .max(20, "Phone must be less than 20 characters")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("send-contact-form", {
        body: {
          name: data.name,
          email: data.email,
          phone: data.phone || undefined,
          message: data.message,
        },
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Thank you!",
        description: "We'll get back to you soon.",
      });

      reset();
    } catch (error: any) {
      console.error("Error submitting contact form:", error);
      toast({
        title: "Oops!",
        description: "Something went wrong. Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="name" className="text-sm font-medium">
          Name *
        </Label>
        <Input
          id="name"
          type="text"
          placeholder="Your name"
          className="mt-1"
          {...register("name")}
          disabled={isSubmitting}
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="email" className="text-sm font-medium">
          Email *
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="your@email.com"
          className="mt-1"
          {...register("email")}
          disabled={isSubmitting}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="phone" className="text-sm font-medium">
          Phone
        </Label>
        <Input
          id="phone"
          type="tel"
          placeholder="(123) 456-7890"
          className="mt-1"
          {...register("phone")}
          disabled={isSubmitting}
        />
        {errors.phone && (
          <p className="mt-1 text-xs text-red-400">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="message" className="text-sm font-medium">
          Message *
        </Label>
        <Textarea
          id="message"
          placeholder="Tell us how we can help..."
          className="mt-1 min-h-[100px]"
          {...register("message")}
          disabled={isSubmitting}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
