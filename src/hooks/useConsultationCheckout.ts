import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useAnalytics } from "./useAnalytics";

interface ConsultationData {
  email: string;
  name: string;
  companyName: string;
  website?: string;
  industry: string;
  annualRevenue: string;
  teamSize: string;
  phone: string;
  biggestChallenge: string;
  useCases?: string[];
}

export const useConsultationCheckout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { trackFormSubmit } = useAnalytics();

  const initiateCheckout = async (data: ConsultationData) => {
    setIsLoading(true);
    try {
      const { data: result, error } = await supabase.functions.invoke(
        "create-consultation-payment",
        {
          body: data,
        }
      );

      if (error) throw error;

      if (result?.url) {
        // Track consultation form submission
        trackFormSubmit('consultation', {
          email: data.email,
          company_name: data.companyName,
          industry: data.industry,
        });
        
        window.open(result.url, "_blank");
      } else {
        throw new Error("No checkout URL received");
      }
    } catch (error: any) {
      console.error("Checkout error:", error);
      toast.error(error.message || "Failed to initiate checkout");
    } finally {
      setIsLoading(false);
    }
  };

  return { initiateCheckout, isLoading };
};
