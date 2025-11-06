import { useState } from "react";
import { useLeads } from "@/hooks/useLeads";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, Search, Filter } from "lucide-react";
import { LeadsTable } from "./LeadsTable";
import { LeadDetailSheet } from "./LeadDetailSheet";
import { LeadFilters } from "./LeadFilters";
import { exportToCSV } from "@/lib/exportCSV";
import { useToast } from "@/hooks/use-toast";

export const LeadsView = () => {
  const { leads, loading, updateLead, deleteLead } = useLeads();
  const [selectedLead, setSelectedLead] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    formType: "all",
    status: "all",
    priority: "all",
    dateRange: "all"
  });
  const { toast } = useToast();

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = searchTerm === "" || 
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.company_name?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFormType = filters.formType === "all" || lead.form_type === filters.formType;
    const matchesStatus = filters.status === "all" || lead.status === filters.status;
    const matchesPriority = filters.priority === "all" || lead.priority === filters.priority;
    
    return matchesSearch && matchesFormType && matchesStatus && matchesPriority;
  });

  const handleExportCSV = () => {
    exportToCSV(filteredLeads, `leads-${new Date().toISOString().split('T')[0]}`);
    toast({
      title: "Export Successful",
      description: `Exported ${filteredLeads.length} leads to CSV`,
    });
  };

  const handleClearFilters = () => {
    setSearchTerm("");
    setFilters({
      formType: "all",
      status: "all",
      priority: "all",
      dateRange: "all"
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-lg">Loading leads...</div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Search and Actions Bar */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by name, email, or company..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setShowFilters(!showFilters)}>
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
          <Button variant="outline" onClick={handleExportCSV}>
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Filters */}
      {showFilters && (
        <LeadFilters
          filters={filters}
          setFilters={setFilters}
          onClearFilters={handleClearFilters}
        />
      )}

      {/* Leads Count */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">
          Leads ({filteredLeads.length})
        </h2>
      </div>

      {/* Leads Table */}
      <LeadsTable
        leads={filteredLeads}
        onViewDetails={setSelectedLead}
      />

      {/* Lead Detail Sheet */}
      <LeadDetailSheet
        lead={selectedLead}
        open={!!selectedLead}
        onOpenChange={(open) => !open && setSelectedLead(null)}
        onUpdate={updateLead}
        onDelete={deleteLead}
      />
    </div>
  );
};
