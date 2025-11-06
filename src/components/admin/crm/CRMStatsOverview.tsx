import { useLeads } from "@/hooks/useLeads";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, DollarSign, TrendingUp, Clock } from "lucide-react";

export const CRMStatsOverview = () => {
  const { leads } = useLeads();

  const totalLeads = leads.length;
  const newLeads = leads.filter(l => l.status === 'new').length;
  const qualifiedLeads = leads.filter(l => l.status === 'qualified').length;
  const wonLeads = leads.filter(l => l.status === 'won').length;
  
  const totalRevenue = leads
    .filter(l => l.payment_amount && l.payment_status === 'paid')
    .reduce((sum, l) => sum + (l.payment_amount || 0), 0);
  
  const conversionRate = totalLeads > 0 ? ((wonLeads / totalLeads) * 100).toFixed(1) : '0';
  
  const avgResponseTime = leads
    .filter(l => l.contacted_at && l.created_at)
    .reduce((sum, l) => {
      const created = new Date(l.created_at).getTime();
      const contacted = new Date(l.contacted_at!).getTime();
      return sum + (contacted - created);
    }, 0) / (leads.filter(l => l.contacted_at).length || 1);
  
  const avgHours = (avgResponseTime / (1000 * 60 * 60)).toFixed(1);

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalLeads}</div>
          <p className="text-xs text-muted-foreground">
            {newLeads} new, {qualifiedLeads} qualified
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${totalRevenue.toFixed(2)}</div>
          <p className="text-xs text-muted-foreground">
            {wonLeads} won deals
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{conversionRate}%</div>
          <p className="text-xs text-muted-foreground">
            Leads to won
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Avg Response Time</CardTitle>
          <Clock className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{avgHours}h</div>
          <p className="text-xs text-muted-foreground">
            Time to first contact
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
