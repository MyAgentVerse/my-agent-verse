import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, TrendingUp, Users, Clock, Monitor, Target } from "lucide-react";
import { useAnalyticsData } from "@/hooks/useAnalyticsData";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Skeleton } from "@/components/ui/skeleton";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const COLORS = ["#00b7c2", "#7c3aed", "#f59e0b", "#10b981", "#ef4444"];

export const AnalyticsView = () => {
  const [timeRange, setTimeRange] = useState<number>(30);
  const {
    trafficSources,
    conversionFunnel,
    performanceTrends,
    deviceStats,
    leadSources,
    avgTimeToConversion,
  } = useAnalyticsData(timeRange);

  return (
    <div className="space-y-6">
      {/* Header with Time Range Selector */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <Activity className="h-8 w-8 text-primary" />
            Analytics Dashboard
          </h2>
          <p className="text-muted-foreground mt-1">
            Track your marketing performance and conversion metrics
          </p>
        </div>
        <Select value={timeRange.toString()} onValueChange={(val) => setTimeRange(Number(val))}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select time range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7">Last 7 days</SelectItem>
            <SelectItem value="30">Last 30 days</SelectItem>
            <SelectItem value="90">Last 90 days</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Key Metrics Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Sessions</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {trafficSources?.reduce((sum, s) => sum + s.sessions, 0) || 0}
            </div>
            <p className="text-xs text-muted-foreground">
              Unique visitor sessions
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {conversionFunnel?.[3]?.percentage.toFixed(1) || 0}%
            </div>
            <p className="text-xs text-muted-foreground">
              Visitors to submissions
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Time to Convert</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {avgTimeToConversion?.hours || 0}h {avgTimeToConversion?.minutes || 0}m
            </div>
            <p className="text-xs text-muted-foreground">
              From first visit to lead
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Top Device</CardTitle>
            <Monitor className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold capitalize">
              {deviceStats?.[0]?.device || "N/A"}
            </div>
            <p className="text-xs text-muted-foreground">
              {deviceStats?.[0]?.percentage.toFixed(0) || 0}% of traffic
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Performance Trends */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Performance Trends (Last 14 Days)
          </CardTitle>
        </CardHeader>
        <CardContent>
          {!performanceTrends ? (
            <Skeleton className="h-[300px] w-full" />
          ) : (
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="page_views"
                  stroke="#00b7c2"
                  strokeWidth={2}
                  name="Page Views"
                />
                <Line
                  type="monotone"
                  dataKey="form_submissions"
                  stroke="#7c3aed"
                  strokeWidth={2}
                  name="Form Submissions"
                />
                <Line
                  type="monotone"
                  dataKey="leads"
                  stroke="#10b981"
                  strokeWidth={2}
                  name="Leads"
                />
              </LineChart>
            </ResponsiveContainer>
          )}
        </CardContent>
      </Card>

      {/* Two Column Layout */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Conversion Funnel */}
        <Card>
          <CardHeader>
            <CardTitle>Conversion Funnel</CardTitle>
          </CardHeader>
          <CardContent>
            {!conversionFunnel ? (
              <Skeleton className="h-[300px] w-full" />
            ) : (
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={conversionFunnel} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="stage" type="category" width={100} />
                  <Tooltip />
                  <Bar dataKey="count" fill="#00b7c2" />
                </BarChart>
              </ResponsiveContainer>
            )}
          </CardContent>
        </Card>

        {/* Traffic Sources */}
        <Card>
          <CardHeader>
            <CardTitle>Traffic Sources</CardTitle>
          </CardHeader>
          <CardContent>
            {!trafficSources ? (
              <Skeleton className="h-[300px] w-full" />
            ) : (
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={trafficSources}
                    dataKey="sessions"
                    nameKey="source"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label={(entry) => `${entry.source} (${entry.percentage.toFixed(0)}%)`}
                  >
                    {trafficSources.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            )}
          </CardContent>
        </Card>

        {/* Device Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Device Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            {!deviceStats ? (
              <Skeleton className="h-[250px] w-full" />
            ) : (
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={deviceStats}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="device" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="#7c3aed" />
                </BarChart>
              </ResponsiveContainer>
            )}
          </CardContent>
        </Card>

        {/* Lead Source Attribution */}
        <Card>
          <CardHeader>
            <CardTitle>Lead Source Attribution</CardTitle>
          </CardHeader>
          <CardContent>
            {!leadSources ? (
              <Skeleton className="h-[250px] w-full" />
            ) : leadSources.length === 0 ? (
              <div className="flex items-center justify-center h-[250px] text-muted-foreground">
                No lead data available yet
              </div>
            ) : (
              <div className="space-y-4">
                {leadSources.slice(0, 5).map((source, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="font-medium">{source.source}</div>
                      <div className="text-sm text-muted-foreground">{source.medium}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-lg">{source.count}</div>
                      <div className="text-xs text-muted-foreground">leads</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
