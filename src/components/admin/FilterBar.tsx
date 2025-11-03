import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface FilterBarProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  industryFilter: string;
  setIndustryFilter: (value: string) => void;
  paymentStatusFilter: string;
  setPaymentStatusFilter: (value: string) => void;
  revenueFilter: string;
  setRevenueFilter: (value: string) => void;
  teamSizeFilter: string;
  setTeamSizeFilter: (value: string) => void;
  onClearFilters: () => void;
}

export const FilterBar = ({
  searchTerm,
  setSearchTerm,
  industryFilter,
  setIndustryFilter,
  paymentStatusFilter,
  setPaymentStatusFilter,
  revenueFilter,
  setRevenueFilter,
  teamSizeFilter,
  setTeamSizeFilter,
  onClearFilters,
}: FilterBarProps) => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <Input
          placeholder="Search by name, email, or company..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1"
        />
        
        <Select value={paymentStatusFilter} onValueChange={setPaymentStatusFilter}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Payment Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="paid">Paid</SelectItem>
            <SelectItem value="failed">Failed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Select value={industryFilter} onValueChange={setIndustryFilter}>
          <SelectTrigger className="w-full sm:w-[200px]">
            <SelectValue placeholder="Industry" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Industries</SelectItem>
            <SelectItem value="Technology/Software">Technology/Software</SelectItem>
            <SelectItem value="Healthcare">Healthcare</SelectItem>
            <SelectItem value="Finance/Banking">Finance/Banking</SelectItem>
            <SelectItem value="Retail/E-commerce">Retail/E-commerce</SelectItem>
            <SelectItem value="Manufacturing">Manufacturing</SelectItem>
            <SelectItem value="Real Estate">Real Estate</SelectItem>
            <SelectItem value="Professional Services">Professional Services</SelectItem>
            <SelectItem value="Other">Other</SelectItem>
          </SelectContent>
        </Select>

        <Select value={revenueFilter} onValueChange={setRevenueFilter}>
          <SelectTrigger className="w-full sm:w-[200px]">
            <SelectValue placeholder="Annual Revenue" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Revenue Ranges</SelectItem>
            <SelectItem value="Under $100K">Under $100K</SelectItem>
            <SelectItem value="$100K - $500K">$100K - $500K</SelectItem>
            <SelectItem value="$500K - $1M">$500K - $1M</SelectItem>
            <SelectItem value="$1M - $5M">$1M - $5M</SelectItem>
            <SelectItem value="$5M - $10M">$5M - $10M</SelectItem>
            <SelectItem value="Over $10M">Over $10M</SelectItem>
          </SelectContent>
        </Select>

        <Select value={teamSizeFilter} onValueChange={setTeamSizeFilter}>
          <SelectTrigger className="w-full sm:w-[200px]">
            <SelectValue placeholder="Team Size" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Team Sizes</SelectItem>
            <SelectItem value="1-5 employees">1-5 employees</SelectItem>
            <SelectItem value="6-20 employees">6-20 employees</SelectItem>
            <SelectItem value="21-50 employees">21-50 employees</SelectItem>
            <SelectItem value="51-100 employees">51-100 employees</SelectItem>
            <SelectItem value="Over 100 employees">Over 100 employees</SelectItem>
          </SelectContent>
        </Select>

        <Button variant="outline" onClick={onClearFilters} size="icon">
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
