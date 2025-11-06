import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Save, Trash2, Mail, Phone, ExternalLink } from "lucide-react";
import { Lead } from "@/hooks/useLeads";

interface LeadDetailSheetProps {
  lead: Lead | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onUpdate: (id: string, updates: Partial<Lead>) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
}

export const LeadDetailSheet = ({ lead, open, onOpenChange, onUpdate, onDelete }: LeadDetailSheetProps) => {
  const [status, setStatus] = useState<string>("");
  const [priority, setPriority] = useState<string>("");
  const [notes, setNotes] = useState("");
  const [tags, setTags] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (lead) {
      setStatus(lead.status);
      setPriority(lead.priority);
      setNotes(lead.notes || "");
      setTags(lead.tags?.join(", ") || "");
    }
  }, [lead]);

  if (!lead) return null;

  const handleSave = async () => {
    setSaving(true);
    try {
      await onUpdate(lead.id, {
        status: status as any,
        priority: priority as any,
        notes,
        tags: tags.split(",").map(t => t.trim()).filter(Boolean),
        contacted_at: status !== 'new' && !lead.contacted_at ? new Date().toISOString() : lead.contacted_at,
      });
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this lead?")) {
      await onDelete(lead.id);
      onOpenChange(false);
    }
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-2xl overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Lead Details</SheetTitle>
        </SheetHeader>

        <div className="mt-6 space-y-6">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Information</h3>
            <div className="grid gap-4">
              <div>
                <Label>Name</Label>
                <p className="text-sm font-medium">{lead.name}</p>
              </div>
              <div>
                <Label>Email</Label>
                <div className="flex items-center gap-2">
                  <p className="text-sm">{lead.email}</p>
                  <Button variant="ghost" size="sm" onClick={() => window.open(`mailto:${lead.email}`)}>
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              {lead.phone && (
                <div>
                  <Label>Phone</Label>
                  <div className="flex items-center gap-2">
                    <p className="text-sm">{lead.phone}</p>
                    <Button variant="ghost" size="sm" onClick={() => window.open(`tel:${lead.phone}`)}>
                      <Phone className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
              {lead.company_name && (
                <div>
                  <Label>Company</Label>
                  <p className="text-sm">{lead.company_name}</p>
                </div>
              )}
            </div>
          </div>

          <Separator />

          {/* Form Details */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Form Details</h3>
            <div className="grid gap-4">
              <div>
                <Label>Form Type</Label>
                <p className="text-sm"><Badge variant="outline">{lead.form_type}</Badge></p>
              </div>
              {lead.form_source && (
                <div>
                  <Label>Source</Label>
                  <p className="text-sm">{lead.form_source}</p>
                </div>
              )}
              {Object.keys(lead.custom_fields).length > 0 && (
                <div>
                  <Label>Custom Fields</Label>
                  <div className="mt-2 space-y-2">
                    {Object.entries(lead.custom_fields).map(([key, value]) => (
                      <div key={key} className="text-sm">
                        <span className="font-medium capitalize">{key.replace(/_/g, ' ')}:</span>{' '}
                        <span>{typeof value === 'object' ? JSON.stringify(value) : String(value)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <Separator />

          {/* CRM Fields */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">CRM Management</h3>
            <div className="grid gap-4">
              <div>
                <Label>Status</Label>
                <Select value={status} onValueChange={setStatus}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new">New</SelectItem>
                    <SelectItem value="contacted">Contacted</SelectItem>
                    <SelectItem value="qualified">Qualified</SelectItem>
                    <SelectItem value="proposal">Proposal</SelectItem>
                    <SelectItem value="negotiation">Negotiation</SelectItem>
                    <SelectItem value="won">Won</SelectItem>
                    <SelectItem value="lost">Lost</SelectItem>
                    <SelectItem value="nurture">Nurture</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Priority</Label>
                <Select value={priority} onValueChange={setPriority}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="urgent">Urgent</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Tags (comma-separated)</Label>
                <Input
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  placeholder="e.g., hot-lead, follow-up, enterprise"
                />
              </div>

              <div>
                <Label>Notes</Label>
                <Textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={5}
                  placeholder="Add internal notes about this lead..."
                />
              </div>
            </div>
          </div>

          <Separator />

          {/* Timeline */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Timeline</h3>
            <div className="grid gap-2 text-sm">
              <div><span className="font-medium">Created:</span> {formatDate(lead.created_at)}</div>
              <div><span className="font-medium">Last Updated:</span> {formatDate(lead.updated_at)}</div>
              {lead.contacted_at && (
                <div><span className="font-medium">Contacted:</span> {formatDate(lead.contacted_at)}</div>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-2 pt-4">
            <Button onClick={handleSave} disabled={saving} className="flex-1">
              <Save className="h-4 w-4 mr-2" />
              {saving ? "Saving..." : "Save Changes"}
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              <Trash2 className="h-4 w-4 mr-2" />
              Delete
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
