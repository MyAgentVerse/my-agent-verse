import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";

const ConsultationTable = () => {
  const deliverables = [
    {
      step: "Pre-Call",
      deliverable: "AI Opportunity Audit — We analyze your workflows, lead flow, and operations to uncover automation opportunities before your session.",
      value: "$750"
    },
    {
      step: "Live Call (60 min)",
      deliverable: "AI Strategy & ROI Breakdown — We identify your top two or three high-impact automation opportunities and estimate your yearly savings or revenue potential.\n\nRisk & Opportunity Scorecard — A custom report revealing where AI can create leverage and what risks to address first.",
      value: "$1,500"
    },
    {
      step: "Follow-Up (30 min Delivery Call)",
      deliverable: "90-Day AI Implementation Roadmap — A clear, step-by-step execution plan with milestones and quick wins.\n\nAI Profit Map (ROI Calculator) — An interactive tool showing your projected efficiency gains and savings.",
      value: "$500"
    },
    {
      step: "",
      deliverable: "Implementation Assets — Personalized tool stack recommendations, workflow diagrams, and ready-to-use checklists delivered live during your follow-up session.",
      value: "$750"
    },
    {
      step: "Bonus",
      deliverable: "Full Credit Toward Your First AI Project — Your $299 consultation fee is fully credited if you move forward with implementation.",
      value: "Risk-Free"
    }
  ];

  return (
    <section className="mb-20">
      <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
        What You'll Get Inside Your Session
      </h2>

      {/* Desktop Table */}
      <div className="hidden md:block max-w-6xl mx-auto overflow-hidden rounded-2xl border border-border shadow-lg">
        <Table>
          <TableHeader>
            <TableRow className="bg-primary hover:bg-primary">
              <TableHead className="text-primary-foreground font-bold">Step</TableHead>
              <TableHead className="text-primary-foreground font-bold">Deliverable</TableHead>
              <TableHead className="text-primary-foreground font-bold">Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {deliverables.map((item, index) => (
              <TableRow key={index} className={item.step === "Bonus" ? "bg-accent/20" : ""}>
                <TableCell className="font-semibold align-top">{item.step}</TableCell>
                <TableCell className="whitespace-pre-line">{item.deliverable}</TableCell>
                <TableCell className={`font-bold align-top ${item.value === "Risk-Free" ? "text-green-600" : "text-primary"}`}>
                  {item.value}
                </TableCell>
              </TableRow>
            ))}
            <TableRow className="bg-muted font-bold">
              <TableCell colSpan={2} className="text-right text-lg">Total Value:</TableCell>
              <TableCell className="text-primary text-xl">$6,000+</TableCell>
            </TableRow>
            <TableRow className="bg-accent/30 font-bold">
              <TableCell colSpan={2} className="text-right text-xl">Your Investment:</TableCell>
              <TableCell className="text-accent-foreground text-2xl">$299</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4 max-w-2xl mx-auto">
        {deliverables.map((item, index) => (
          <Card key={index} className={item.step === "Bonus" ? "border-accent" : ""}>
            <CardContent className="pt-6">
              {item.step && <h3 className="font-bold text-primary mb-2">{item.step}</h3>}
              <p className="text-sm mb-3 whitespace-pre-line">{item.deliverable}</p>
              <p className={`font-bold ${item.value === "Risk-Free" ? "text-green-600" : "text-primary"}`}>
                Value: {item.value}
              </p>
            </CardContent>
          </Card>
        ))}
        <Card className="bg-muted">
          <CardContent className="pt-6">
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-lg">Total Value:</span>
              <span className="font-bold text-primary text-xl">$6,000+</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold text-xl">Your Investment:</span>
              <span className="font-bold text-accent-foreground text-2xl">$299</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ConsultationTable;
