import { useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

// Generate or retrieve session ID
const getSessionId = () => {
  let sessionId = sessionStorage.getItem('analytics_session_id');
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem('analytics_session_id', sessionId);
  }
  return sessionId;
};

// Get device type
const getDeviceType = () => {
  const width = window.innerWidth;
  if (width < 768) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
};

// Get browser info
const getBrowserInfo = () => {
  const ua = navigator.userAgent;
  if (ua.includes('Chrome')) return 'Chrome';
  if (ua.includes('Safari')) return 'Safari';
  if (ua.includes('Firefox')) return 'Firefox';
  if (ua.includes('Edge')) return 'Edge';
  return 'Other';
};

// Get OS info
const getOSInfo = () => {
  const ua = navigator.userAgent;
  if (ua.includes('Win')) return 'Windows';
  if (ua.includes('Mac')) return 'MacOS';
  if (ua.includes('Linux')) return 'Linux';
  if (ua.includes('Android')) return 'Android';
  if (ua.includes('iOS')) return 'iOS';
  return 'Other';
};

// Get UTM parameters from URL
const getUTMParams = () => {
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get('utm_source') || undefined,
    utm_medium: params.get('utm_medium') || undefined,
    utm_campaign: params.get('utm_campaign') || undefined,
    utm_content: params.get('utm_content') || undefined,
    utm_term: params.get('utm_term') || undefined,
  };
};

interface TrackEventParams {
  event_type: string;
  event_category?: string;
  event_action?: string;
  event_label?: string;
  event_value?: number;
  metadata?: Record<string, any>;
}

export const useAnalytics = () => {
  // Track page view on mount
  useEffect(() => {
    trackPageView();
  }, []);

  const trackPageView = async () => {
    try {
      const sessionId = getSessionId();
      const utmParams = getUTMParams();
      
      await supabase.from('analytics_events').insert({
        session_id: sessionId,
        event_type: 'page_view',
        event_category: 'navigation',
        page_url: window.location.pathname,
        page_title: document.title,
        referrer: document.referrer || undefined,
        ...utmParams,
        device_type: getDeviceType(),
        browser: getBrowserInfo(),
        os: getOSInfo(),
        user_agent: navigator.userAgent,
      });
    } catch (error) {
      console.error('Analytics tracking error:', error);
    }
  };

  const trackEvent = async ({
    event_type,
    event_category,
    event_action,
    event_label,
    event_value,
    metadata,
  }: TrackEventParams) => {
    try {
      const sessionId = getSessionId();
      const utmParams = getUTMParams();
      
      await supabase.from('analytics_events').insert({
        session_id: sessionId,
        event_type,
        event_category,
        event_action,
        event_label,
        event_value,
        page_url: window.location.pathname,
        page_title: document.title,
        referrer: document.referrer || undefined,
        ...utmParams,
        device_type: getDeviceType(),
        browser: getBrowserInfo(),
        os: getOSInfo(),
        user_agent: navigator.userAgent,
        metadata: metadata || {},
      });
    } catch (error) {
      console.error('Analytics tracking error:', error);
    }
  };

  const trackFormView = (formName: string) => {
    trackEvent({
      event_type: 'form_view',
      event_category: 'forms',
      event_action: 'view',
      event_label: formName,
    });
  };

  const trackFormStart = (formName: string) => {
    trackEvent({
      event_type: 'form_start',
      event_category: 'forms',
      event_action: 'start',
      event_label: formName,
    });
  };

  const trackFormSubmit = (formName: string, metadata?: Record<string, any>) => {
    trackEvent({
      event_type: 'form_submit',
      event_category: 'forms',
      event_action: 'submit',
      event_label: formName,
      metadata,
    });
  };

  return {
    trackPageView,
    trackEvent,
    trackFormView,
    trackFormStart,
    trackFormSubmit,
  };
};
