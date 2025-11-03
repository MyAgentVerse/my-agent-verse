import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Mail, Phone } from "lucide-react";

interface ConsultationLeadsTableProps {
  leads: any[];
  onViewDetails: (lead: any) => void;
}

export const ConsultationLeadsTable = ({ leads, onViewDetails }: ConsultationLeadsTableProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid': return 'bg-green-500 hover:bg-green-600';
      case 'pending': return 'bg-yellow-500 hover:bg-yellow-600';
      case 'failed': return 'bg-red-500 hover:bg-red-600';
      default: return 'bg-gray-500';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (leads.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No consultation leads found</p>
      </div>
    );
  }

  return (
    <div className="rounded-md border overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Industry</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Revenue</TableHead>
            <TableHead>Team Size</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leads.map((lead) => (
            <TableRow key={lead.id}>
              <TableCell className="whitespace-nowrap">
                {formatDate(lead.created_at)}
              </TableCell>
              <TableCell className="font-medium">{lead.name}</TableCell>
              <TableCell>{lead.company_name}</TableCell>
              <TableCell>{lead.industry}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <a href={`mailto:${lead.email}`} title={lead.email}>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </a>
                  <a href={`tel:${lead.phone}`} title={lead.phone}>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Phone className="h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </TableCell>
              <TableCell className="whitespace-nowrap">{lead.annual_revenue}</TableCell>
              <TableCell className="whitespace-nowrap">{lead.team_size}</TableCell>
              <TableCell>
                <Badge className={getStatusColor(lead.payment_status)}>
                  {lead.payment_status}
                </Badge>
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
