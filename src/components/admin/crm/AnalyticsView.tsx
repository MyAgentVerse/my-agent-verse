import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity } from "lucide-react";

export const AnalyticsView = () => {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5" />
            Analytics Dashboard
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Analytics tracking and reporting features coming soon. This will include:
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>• Form conversion funnel visualization</li>
            <li>• Traffic source analysis</li>
            <li>• Lead source attribution</li>
            <li>• Time-to-conversion metrics</li>
            <li>• Geographic distribution of leads</li>
            <li>• Performance trends over time</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};
