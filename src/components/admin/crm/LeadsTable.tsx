import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, Mail, Phone } from "lucide-react";
import { Lead } from "@/hooks/useLeads";

interface LeadsTableProps {
  leads: Lead[];
  onViewDetails: (lead: Lead) => void;
  selectedLeads?: string[];
  onSelectLead?: (leadId: string, selected: boolean) => void;
  onSelectAll?: (selected: boolean) => void;
}

export const LeadsTable = ({ 
  leads, 
  onViewDetails,
  selectedLeads = [],
  onSelectLead,
  onSelectAll
}: LeadsTableProps) => {
  const allSelected = leads.length > 0 && selectedLeads.length === leads.length;
  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      new: "bg-blue-500",
      contacted: "bg-yellow-500",
      qualified: "bg-green-500",
      proposal: "bg-purple-500",
      negotiation: "bg-orange-500",
      won: "bg-emerald-500",
      lost: "bg-red-500",
      nurture: "bg-gray-500"
    };
    return colors[status] || "bg-gray-500";
  };

  const getPriorityColor = (priority: string) => {
    const colors: Record<string, string> = {
      low: "bg-gray-500",
      medium: "bg-blue-500",
      high: "bg-orange-500",
      urgent: "bg-red-500"
    };
    return colors[priority] || "bg-gray-500";
  };

  const formatFormType = (formType: string) => {
    const labels: Record<string, string> = {
      contact: "Contact",
      consultation: "Consultation",
      build: "21-Day Build",
      demo: "Demo",
      other: "Other"
    };
    return labels[formType] || formType;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  if (leads.length === 0) {
    return (
      <div className="text-center py-12 border rounded-lg">
        <p className="text-muted-foreground">No leads found</p>
      </div>
    );
  }

  return (
    <div className="border rounded-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            {onSelectAll && (
              <TableHead className="w-12">
                <Checkbox
                  checked={allSelected}
                  onCheckedChange={(checked) => onSelectAll(checked as boolean)}
                  aria-label="Select all leads"
                />
              </TableHead>
            )}
            <TableHead>Date</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Form Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Priority</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leads.map((lead) => (
            <TableRow key={lead.id}>
              {onSelectLead && (
                <TableCell>
                  <Checkbox
                    checked={selectedLeads.includes(lead.id)}
                    onCheckedChange={(checked) => onSelectLead(lead.id, checked as boolean)}
                    aria-label={`Select ${lead.name}`}
                  />
                </TableCell>
              )}
              <TableCell className="whitespace-nowrap">
                {formatDate(lead.created_at)}
              </TableCell>
              <TableCell className="font-medium">{lead.name}</TableCell>
              <TableCell>{lead.company_name || '-'}</TableCell>
              <TableCell>
                <Badge variant="outline">{formatFormType(lead.form_type)}</Badge>
              </TableCell>
              <TableCell>
                <Badge className={getStatusColor(lead.status)}>
                  {lead.status}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge className={getPriorityColor(lead.priority)}>
                  {lead.priority}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => window.open(`mailto:${lead.email}`)}
                  >
                    <Mail className="h-4 w-4" />
                  </Button>
                  {lead.phone && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => window.open(`tel:${lead.phone}`)}
                    >
                      <Phone className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </TableCell>
              <TableCell>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onViewDetails(lead)}
                >
                  <Eye className="h-4 w-4 mr-2" />
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
