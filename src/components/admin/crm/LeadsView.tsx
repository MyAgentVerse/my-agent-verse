import { useState } from "react";
import { useLeads } from "@/hooks/useLeads";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, Search, Filter } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { LeadsTable } from "./LeadsTable";
import { LeadDetailSheet } from "./LeadDetailSheet";
import { LeadFilters } from "./LeadFilters";
import BulkActions from "./BulkActions";
import { exportToCSV } from "@/lib/exportCSV";
import { useToast } from "@/hooks/use-toast";

export const LeadsView = () => {
  const { leads, loading, updateLead, deleteLead } = useLeads();
  const [selectedLead, setSelectedLead] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedLeads, setSelectedLeads] = useState<string[]>([]);
  const [bulkActionDialog, setBulkActionDialog] = useState<{ open: boolean; action: string }>({ open: false, action: "" });
  const [bulkValue, setBulkValue] = useState("");
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

  const handleSelectLead = (leadId: string, selected: boolean) => {
    setSelectedLeads(prev =>
      selected ? [...prev, leadId] : prev.filter(id => id !== leadId)
    );
  };

  const handleSelectAll = (selected: boolean) => {
    setSelectedLeads(selected ? filteredLeads.map(l => l.id) : []);
  };

  const handleBulkAction = async (action: string) => {
    if (action === 'delete') {
      setBulkActionDialog({ open: true, action });
      return;
    }

    if (action === 'mark-contacted') {
      try {
        await Promise.all(
          selectedLeads.map(id =>
            updateLead(id, { status: 'contacted', contacted_at: new Date().toISOString() })
          )
        );
        toast({
          title: "Success",
          description: `Marked ${selectedLeads.length} leads as contacted`,
        });
        setSelectedLeads([]);
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to update leads",
          variant: "destructive",
        });
      }
      return;
    }

    if (action === 'change-status' || action === 'change-priority') {
      setBulkActionDialog({ open: true, action });
    }
  };

  const executeBulkAction = async () => {
    const { action } = bulkActionDialog;
    
    try {
      if (action === 'delete') {
        await Promise.all(selectedLeads.map(id => deleteLead(id)));
        toast({
          title: "Success",
          description: `Deleted ${selectedLeads.length} leads`,
        });
      } else if (action === 'change-status' && bulkValue) {
        await Promise.all(selectedLeads.map(id => updateLead(id, { status: bulkValue as any })));
        toast({
          title: "Success",
          description: `Updated ${selectedLeads.length} leads`,
        });
      } else if (action === 'change-priority' && bulkValue) {
        await Promise.all(selectedLeads.map(id => updateLead(id, { priority: bulkValue as any })));
        toast({
          title: "Success",
          description: `Updated ${selectedLeads.length} leads`,
        });
      }
      
      setSelectedLeads([]);
      setBulkActionDialog({ open: false, action: "" });
      setBulkValue("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to perform bulk action",
        variant: "destructive",
      });
    }
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

      {/* Bulk Actions */}
      <BulkActions
        selectedCount={selectedLeads.length}
        onAction={handleBulkAction}
      />

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
        selectedLeads={selectedLeads}
        onSelectLead={handleSelectLead}
        onSelectAll={handleSelectAll}
      />

      {/* Bulk Action Dialogs */}
      <AlertDialog open={bulkActionDialog.open} onOpenChange={(open) => setBulkActionDialog({ ...bulkActionDialog, open })}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              {bulkActionDialog.action === 'delete' && 'Delete Selected Leads?'}
              {bulkActionDialog.action === 'change-status' && 'Change Status'}
              {bulkActionDialog.action === 'change-priority' && 'Change Priority'}
            </AlertDialogTitle>
            <AlertDialogDescription>
              {bulkActionDialog.action === 'delete' && `Are you sure you want to delete ${selectedLeads.length} leads? This action cannot be undone.`}
              {bulkActionDialog.action === 'change-status' && (
                <div className="space-y-4 pt-4">
                  <p>Select new status for {selectedLeads.length} leads:</p>
                  <Select value={bulkValue} onValueChange={setBulkValue}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">New</SelectItem>
                      <SelectItem value="contacted">Contacted</SelectItem>
                      <SelectItem value="qualified">Qualified</SelectItem>
                      <SelectItem value="proposal">Proposal</SelectItem>
                      <SelectItem value="won">Won</SelectItem>
                      <SelectItem value="lost">Lost</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
              {bulkActionDialog.action === 'change-priority' && (
                <div className="space-y-4 pt-4">
                  <p>Select new priority for {selectedLeads.length} leads:</p>
                  <Select value={bulkValue} onValueChange={setBulkValue}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="urgent">Urgent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setBulkValue("")}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={executeBulkAction}>
              {bulkActionDialog.action === 'delete' ? 'Delete' : 'Update'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

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
