import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UserCheck, Mail, Trash2 } from "lucide-react";

interface BulkActionsProps {
  selectedCount: number;
  onAction: (action: string) => void;
  disabled?: boolean;
}

const BulkActions = ({ selectedCount, onAction, disabled }: BulkActionsProps) => {
  if (selectedCount === 0) return null;

  return (
    <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-lg border border-primary/20">
      <span className="text-sm font-medium">
        {selectedCount} lead{selectedCount > 1 ? 's' : ''} selected
      </span>
      
      <div className="flex gap-2 ml-auto">
        <Button
          size="sm"
          variant="outline"
          onClick={() => onAction('mark-contacted')}
          disabled={disabled}
        >
          <UserCheck className="h-4 w-4 mr-2" />
          Mark Contacted
        </Button>
        
        <Button
          size="sm"
          variant="outline"
          onClick={() => onAction('send-email')}
          disabled={disabled}
        >
          <Mail className="h-4 w-4 mr-2" />
          Send Email
        </Button>
        
        <Button
          size="sm"
          variant="outline"
          onClick={() => onAction('change-status')}
          disabled={disabled}
        >
          Change Status
        </Button>
        
        <Button
          size="sm"
          variant="outline"
          onClick={() => onAction('change-priority')}
          disabled={disabled}
        >
          Change Priority
        </Button>
        
        <Button
          size="sm"
          variant="destructive"
          onClick={() => onAction('delete')}
          disabled={disabled}
        >
          <Trash2 className="h-4 w-4 mr-2" />
          Delete
        </Button>
      </div>
    </div>
  );
};

export default BulkActions;
