import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Globe, Building2, DollarSign, Users, Calendar, FileText } from "lucide-react";

interface LeadDetailDialogProps {
  lead: any;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onUpdate: () => void;
}

export const LeadDetailDialog = ({ lead, open, onOpenChange, onUpdate }: LeadDetailDialogProps) => {
  const [notes, setNotes] = useState(lead?.notes || "");
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  const handleSaveNotes = async () => {
    setSaving(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      const { error } = await supabase
        .from('consultation_leads')
        .update({ 
          notes,
          contacted_at: new Date().toISOString(),
          contacted_by: user?.email || 'admin'
        })
        .eq('id', lead.id);

      if (error) throw error;

      toast({
        title: "Notes Saved",
        description: "Lead notes have been updated successfully",
      });
      
      onUpdate();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  if (!lead) return null;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid': return 'bg-green-500';
      case 'pending': return 'bg-yellow-500';
      case 'failed': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Lead Details</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Status Badge */}
          <div className="flex items-center gap-2">
            <Badge className={getStatusColor(lead.payment_status)}>
              {lead.payment_status}
            </Badge>
            {lead.consultation_scheduled && (
              <Badge variant="outline">Consultation Scheduled</Badge>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-3">
            <h3 className="font-semibold text-lg">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">Name:</span> {lead.name}
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a href={`mailto:${lead.email}`} className="text-primary hover:underline">
                  {lead.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <a href={`tel:${lead.phone}`} className="text-primary hover:underline">
                  {lead.phone}
                </a>
              </div>
              {lead.website && (
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  <a href={lead.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    {lead.website}
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Business Information */}
          <div className="space-y-3">
            <h3 className="font-semibold text-lg">Business Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">Company:</span> {lead.company_name}
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">Industry:</span> {lead.industry}
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">Revenue:</span> {lead.annual_revenue}
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">Team Size:</span> {lead.team_size}
              </div>
            </div>
          </div>

          {/* Challenge & Use Cases */}
          <div className="space-y-3">
            <h3 className="font-semibold text-lg">Consultation Focus</h3>
            <div className="space-y-2">
              <div>
                <span className="font-medium">Biggest Challenge:</span>
                <p className="mt-1 p-3 bg-muted rounded-md">{lead.biggest_challenge}</p>
              </div>
              {lead.use_cases && Object.keys(lead.use_cases).length > 0 && (
                <div>
                  <span className="font-medium">Use Cases:</span>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {Object.entries(lead.use_cases).map(([key, value]) => 
                      value && <Badge key={key} variant="secondary">{key}</Badge>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Timeline</h3>
            <div className="text-sm space-y-1">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">Submitted:</span>
                {new Date(lead.created_at).toLocaleString()}
              </div>
              {lead.contacted_at && (
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Last Contacted:</span>
                  {new Date(lead.contacted_at).toLocaleString()}
                  {lead.contacted_by && ` by ${lead.contacted_by}`}
                </div>
              )}
            </div>
          </div>

          {/* Admin Notes */}
          <div className="space-y-2">
            <Label htmlFor="notes">Admin Notes</Label>
            <Textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add internal notes about this lead..."
              rows={4}
            />
            <Button onClick={handleSaveNotes} disabled={saving}>
              {saving ? "Saving..." : "Save Notes"}
            </Button>
          </div>

          {/* Stripe Info */}
          {lead.stripe_session_id && (
            <div className="text-sm text-muted-foreground">
              <span className="font-medium">Stripe Session ID:</span> {lead.stripe_session_id}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
