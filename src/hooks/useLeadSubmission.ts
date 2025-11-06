import { supabase } from "@/integrations/supabase/client";
import { useAnalytics } from "./useAnalytics";

interface LeadData {
  email: string;
  name: string;
  phone?: string;
  company_name?: string;
  form_type: 'contact' | 'consultation' | 'build' | 'demo' | 'other';
  custom_fields?: Record<string, any>;
  payment_status?: string;
  payment_amount?: number;
  stripe_session_id?: string;
}

export const useLeadSubmission = () => {
  const { trackFormSubmit } = useAnalytics();

  const submitLead = async (data: LeadData) => {
    try {
      // Get UTM parameters
      const params = new URLSearchParams(window.location.search);
      const utmParams = {
        utm_source: params.get('utm_source') || undefined,
        utm_medium: params.get('utm_medium') || undefined,
        utm_campaign: params.get('utm_campaign') || undefined,
        utm_content: params.get('utm_content') || undefined,
        utm_term: params.get('utm_term') || undefined,
      };

      // Submit lead to database
      const { data: lead, error } = await supabase
        .from('leads')
        .insert({
          ...data,
          form_source: window.location.pathname,
          referrer: document.referrer || undefined,
          ...utmParams,
          user_agent: navigator.userAgent,
        })
        .select()
        .single();

      if (error) throw error;

      // Track form submission
      trackFormSubmit(data.form_type, {
        lead_id: lead.id,
        email: data.email,
        form_source: window.location.pathname,
      });

      return { success: true, lead };
    } catch (error: any) {
      console.error('Lead submission error:', error);
      return { success: false, error: error.message };
    }
  };

  return { submitLead };
};
