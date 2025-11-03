import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { LogOut, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { StatsCards } from "@/components/admin/StatsCards";
import { FilterBar } from "@/components/admin/FilterBar";
import { ConsultationLeadsTable } from "@/components/admin/ConsultationLeadsTable";
import { LeadDetailDialog } from "@/components/admin/LeadDetailDialog";
import { exportToCSV } from "@/lib/exportCSV";

const ConsultationDashboard = () => {
  const [leads, setLeads] = useState<any[]>([]);
  const [filteredLeads, setFilteredLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedLead, setSelectedLead] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [industryFilter, setIndustryFilter] = useState("all");
  const [paymentStatusFilter, setPaymentStatusFilter] = useState("all");
  const [revenueFilter, setRevenueFilter] = useState("all");
  const [teamSizeFilter, setTeamSizeFilter] = useState("all");
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    fetchLeads();
    
    // Set up real-time subscription
    const channel = supabase
      .channel('consultation_leads_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'consultation_leads'
        },
        () => {
          fetchLeads();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  useEffect(() => {
    filterLeads();
  }, [leads, searchTerm, industryFilter, paymentStatusFilter, revenueFilter, teamSizeFilter]);

  const fetchLeads = async () => {
    try {
      const { data, error } = await supabase
        .from('consultation_leads')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setLeads(data || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const filterLeads = () => {
    let filtered = [...leads];

    // Search filter
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(lead =>
        lead.name.toLowerCase().includes(searchLower) ||
        lead.email.toLowerCase().includes(searchLower) ||
        lead.company_name.toLowerCase().includes(searchLower)
      );
    }

    // Industry filter
    if (industryFilter !== "all") {
      filtered = filtered.filter(lead => lead.industry === industryFilter);
    }

    // Payment status filter
    if (paymentStatusFilter !== "all") {
      filtered = filtered.filter(lead => lead.payment_status === paymentStatusFilter);
    }

    // Revenue filter
    if (revenueFilter !== "all") {
      filtered = filtered.filter(lead => lead.annual_revenue === revenueFilter);
    }

    // Team size filter
    if (teamSizeFilter !== "all") {
      filtered = filtered.filter(lead => lead.team_size === teamSizeFilter);
    }

    setFilteredLeads(filtered);
  };

  const handleClearFilters = () => {
    setSearchTerm("");
    setIndustryFilter("all");
    setPaymentStatusFilter("all");
    setRevenueFilter("all");
    setTeamSizeFilter("all");
  };

  const handleExportCSV = () => {
    exportToCSV(filteredLeads, `consultation-leads-${new Date().toISOString().split('T')[0]}`);
    toast({
      title: "Export Successful",
      description: `Exported ${filteredLeads.length} leads to CSV`,
    });
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading dashboard...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Consultation Leads Dashboard</h1>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleExportCSV}>
              <Download className="h-4 w-4 mr-2" />
              Export CSV
            </Button>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Stats Cards */}
        <StatsCards leads={leads} />

        {/* Filters */}
        <FilterBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          industryFilter={industryFilter}
          setIndustryFilter={setIndustryFilter}
          paymentStatusFilter={paymentStatusFilter}
          setPaymentStatusFilter={setPaymentStatusFilter}
          revenueFilter={revenueFilter}
          setRevenueFilter={setRevenueFilter}
          teamSizeFilter={teamSizeFilter}
          setTeamSizeFilter={setTeamSizeFilter}
          onClearFilters={handleClearFilters}
        />

        {/* Leads Table */}
        <div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold">
              Consultation Leads ({filteredLeads.length})
            </h2>
          </div>
          <ConsultationLeadsTable
            leads={filteredLeads}
            onViewDetails={setSelectedLead}
          />
        </div>
      </main>

      {/* Lead Detail Dialog */}
      <LeadDetailDialog
        lead={selectedLead}
        open={!!selectedLead}
        onOpenChange={(open) => !open && setSelectedLead(null)}
        onUpdate={fetchLeads}
      />
    </div>
  );
};

export default ConsultationDashboard;
