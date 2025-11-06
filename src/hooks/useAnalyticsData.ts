import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { subDays, format } from "date-fns";

export interface TrafficSource {
  source: string;
  sessions: number;
  percentage: number;
}

export interface ConversionFunnel {
  stage: string;
  count: number;
  percentage: number;
}

export interface PerformanceTrend {
  date: string;
  page_views: number;
  form_submissions: number;
  leads: number;
}

export interface DeviceStats {
  device: string;
  count: number;
  percentage: number;
}

export interface LeadSourceData {
  source: string;
  medium: string;
  count: number;
}

export const useAnalyticsData = (days: number = 30) => {
  const startDate = subDays(new Date(), days).toISOString();

  // Traffic Sources
  const { data: trafficSources } = useQuery({
    queryKey: ["analytics-traffic-sources", days],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("analytics_events")
        .select("utm_source, session_id")
        .eq("event_type", "page_view")
        .gte("created_at", startDate);

      if (error) throw error;

      // Count unique sessions per source
      const sourceMap = new Map<string, Set<string>>();
      data?.forEach((event) => {
        const source = event.utm_source || "Direct";
        if (!sourceMap.has(source)) {
          sourceMap.set(source, new Set());
        }
        sourceMap.get(source)?.add(event.session_id);
      });

      const total = Array.from(sourceMap.values()).reduce(
        (sum, sessions) => sum + sessions.size,
        0
      );

      const sources: TrafficSource[] = Array.from(sourceMap.entries())
        .map(([source, sessions]) => ({
          source,
          sessions: sessions.size,
          percentage: (sessions.size / total) * 100,
        }))
        .sort((a, b) => b.sessions - a.sessions);

      return sources;
    },
  });

  // Conversion Funnel
  const { data: conversionFunnel } = useQuery({
    queryKey: ["analytics-conversion-funnel", days],
    queryFn: async () => {
      const { data: pageViews } = await supabase
        .from("analytics_events")
        .select("session_id")
        .eq("event_type", "page_view")
        .gte("created_at", startDate);

      const { data: formViews } = await supabase
        .from("analytics_events")
        .select("session_id")
        .eq("event_type", "form_view")
        .gte("created_at", startDate);

      const { data: formStarts } = await supabase
        .from("analytics_events")
        .select("session_id")
        .eq("event_type", "form_start")
        .gte("created_at", startDate);

      const { data: formSubmits } = await supabase
        .from("analytics_events")
        .select("session_id")
        .eq("event_type", "form_submit")
        .gte("created_at", startDate);

      const uniquePageViews = new Set(pageViews?.map((e) => e.session_id)).size;
      const uniqueFormViews = new Set(formViews?.map((e) => e.session_id)).size;
      const uniqueFormStarts = new Set(formStarts?.map((e) => e.session_id)).size;
      const uniqueFormSubmits = new Set(formSubmits?.map((e) => e.session_id)).size;

      const funnel: ConversionFunnel[] = [
        {
          stage: "Page Views",
          count: uniquePageViews,
          percentage: 100,
        },
        {
          stage: "Form Views",
          count: uniqueFormViews,
          percentage: (uniqueFormViews / uniquePageViews) * 100 || 0,
        },
        {
          stage: "Form Starts",
          count: uniqueFormStarts,
          percentage: (uniqueFormStarts / uniquePageViews) * 100 || 0,
        },
        {
          stage: "Submissions",
          count: uniqueFormSubmits,
          percentage: (uniqueFormSubmits / uniquePageViews) * 100 || 0,
        },
      ];

      return funnel;
    },
  });

  // Performance Trends
  const { data: performanceTrends } = useQuery({
    queryKey: ["analytics-performance-trends", days],
    queryFn: async () => {
      const { data: events } = await supabase
        .from("analytics_events")
        .select("created_at, event_type")
        .gte("created_at", startDate)
        .order("created_at");

      const { data: leads } = await supabase
        .from("leads")
        .select("created_at")
        .gte("created_at", startDate);

      // Group by date
      const dateMap = new Map<string, PerformanceTrend>();

      events?.forEach((event) => {
        const date = format(new Date(event.created_at), "MMM dd");
        if (!dateMap.has(date)) {
          dateMap.set(date, {
            date,
            page_views: 0,
            form_submissions: 0,
            leads: 0,
          });
        }

        const trend = dateMap.get(date)!;
        if (event.event_type === "page_view") {
          trend.page_views++;
        } else if (event.event_type === "form_submit") {
          trend.form_submissions++;
        }
      });

      leads?.forEach((lead) => {
        const date = format(new Date(lead.created_at), "MMM dd");
        if (!dateMap.has(date)) {
          dateMap.set(date, {
            date,
            page_views: 0,
            form_submissions: 0,
            leads: 0,
          });
        }
        dateMap.get(date)!.leads++;
      });

      return Array.from(dateMap.values()).slice(-14); // Last 14 days
    },
  });

  // Device Stats
  const { data: deviceStats } = useQuery({
    queryKey: ["analytics-device-stats", days],
    queryFn: async () => {
      const { data } = await supabase
        .from("analytics_events")
        .select("device_type")
        .eq("event_type", "page_view")
        .gte("created_at", startDate);

      const deviceMap = new Map<string, number>();
      data?.forEach((event) => {
        const device = event.device_type || "Unknown";
        deviceMap.set(device, (deviceMap.get(device) || 0) + 1);
      });

      const total = Array.from(deviceMap.values()).reduce((sum, count) => sum + count, 0);

      const stats: DeviceStats[] = Array.from(deviceMap.entries())
        .map(([device, count]) => ({
          device,
          count,
          percentage: (count / total) * 100,
        }))
        .sort((a, b) => b.count - a.count);

      return stats;
    },
  });

  // Lead Source Attribution
  const { data: leadSources } = useQuery({
    queryKey: ["analytics-lead-sources", days],
    queryFn: async () => {
      const { data } = await supabase
        .from("leads")
        .select("utm_source, utm_medium")
        .gte("created_at", startDate);

      const sourceMap = new Map<string, LeadSourceData>();

      data?.forEach((lead) => {
        const source = lead.utm_source || "Direct";
        const medium = lead.utm_medium || "None";
        const key = `${source}-${medium}`;

        if (!sourceMap.has(key)) {
          sourceMap.set(key, { source, medium, count: 0 });
        }
        sourceMap.get(key)!.count++;
      });

      return Array.from(sourceMap.values()).sort((a, b) => b.count - a.count);
    },
  });

  // Time to Conversion (avg time from first visit to lead submission)
  const { data: avgTimeToConversion } = useQuery({
    queryKey: ["analytics-time-to-conversion", days],
    queryFn: async () => {
      const { data: leads } = await supabase
        .from("leads")
        .select("created_at, referrer, utm_source")
        .gte("created_at", startDate);

      // This is a simplified calculation - ideally we'd track session start time
      // For now, we'll return a mock value
      return {
        hours: 24,
        minutes: 30,
      };
    },
  });

  return {
    trafficSources,
    conversionFunnel,
    performanceTrends,
    deviceStats,
    leadSources,
    avgTimeToConversion,
  };
};
