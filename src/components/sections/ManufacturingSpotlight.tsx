import { Factory, Network, Database, MessageSquare, TrendingUp, DollarSign } from "lucide-react";
import supplyChainImage from "@/assets/manufacturing-supply-chain.jpg";
import operationsImage from "@/assets/manufacturing-operations.jpg";
import dataIntegrityImage from "@/assets/manufacturing-data-integrity.jpg";
import communicationImage from "@/assets/manufacturing-communication.jpg";
import forecastingImage from "@/assets/manufacturing-forecasting.jpg";
import efficiencyImage from "@/assets/manufacturing-efficiency.jpg";
import heroImage from "@/assets/manufacturing-hero.jpg";

const ManufacturingSpotlight = () => {
  const capabilities = [
    {
      icon: Network,
      title: "Supply Chain Precision",
      description: "AI continuously monitors suppliers, forecasts shortages, and synchronizes logistics across multiple facilities — preventing costly delays and ensuring every component arrives exactly when needed.",
      image: supplyChainImage,
      color: "blue"
    },
    {
      icon: Factory,
      title: "Operations Coordination",
      description: "Smart orchestration balances workloads across departments, tracks shift performance, and dynamically reassigns tasks — keeping production lines in sync and efficient.",
      image: operationsImage,
      color: "purple"
    },
    {
      icon: Database,
      title: "Real-Time Data Integrity",
      description: "Every data point is validated as it enters the system. The AI automatically flags errors, missing inputs, or inconsistencies — ensuring complete accuracy before reports or metrics are generated.",
      image: dataIntegrityImage,
      color: "green"
    },
    {
      icon: MessageSquare,
      title: "Internal Communication Alignment",
      description: "AI-powered communication hubs ensure every department — from engineering to logistics — stays synchronized. Updates, alerts, and task changes are automatically routed to the right people.",
      image: communicationImage,
      color: "cyan"
    },
    {
      icon: TrendingUp,
      title: "Decision Guidance & Forecasting",
      description: "Predictive intelligence analyzes equipment performance, production trends, and energy use — turning complex data into clear next actions for managers and supervisors.",
      image: forecastingImage,
      color: "orange"
    },
    {
      icon: DollarSign,
      title: "Efficiency & Cost Optimization",
      description: "Machine learning models detect waste and inefficiency patterns, recommending automated adjustments that reduce costs and improve profitability across the operation.",
      image: efficiencyImage,
      color: "emerald"
    }
  ];

  const colorClasses = {
    blue: "from-blue-500/10 to-blue-600/5 border-blue-500/20 hover:border-blue-500/40",
    purple: "from-purple-500/10 to-purple-600/5 border-purple-500/20 hover:border-purple-500/40",
    green: "from-green-500/10 to-green-600/5 border-green-500/20 hover:border-green-500/40",
    cyan: "from-cyan-500/10 to-cyan-600/5 border-cyan-500/20 hover:border-cyan-500/40",
    orange: "from-orange-500/10 to-orange-600/5 border-orange-500/20 hover:border-orange-500/40",
    emerald: "from-emerald-500/10 to-emerald-600/5 border-emerald-500/20 hover:border-emerald-500/40"
  };

  const iconColorClasses = {
    blue: "text-blue-500",
    purple: "text-purple-500",
    green: "text-green-500",
    cyan: "text-cyan-500",
    orange: "text-orange-500",
    emerald: "text-emerald-500"
  };

  return (
    <section className="mb-32 animate-fade-in">
      <div className="rounded-3xl bg-gradient-to-br from-primary/5 via-purple-500/5 to-primary/5 p-8 md:p-16 shadow-xl">
        <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          Major Project Spotlight – AI in Manufacturing
        </h2>
        
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h3 className="mb-6 text-2xl font-bold">Behind the Scenes of a Massive AI Deployment</h3>
          <p className="text-xl text-muted-foreground leading-relaxed mb-4">
            We're currently implementing one of our largest <strong className="text-foreground">AI transformation projects</strong> for a leading U.S. manufacturing plant.
          </p>
          <p className="text-xl text-muted-foreground leading-relaxed">
            While we can't share names, the scale and depth of this initiative show what enterprise-grade AI can achieve when designed to think, predict, and optimize every part of production.
          </p>
        </div>

        <div className="space-y-12 mb-16">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div 
                key={index} 
                className={`group rounded-2xl bg-gradient-to-br ${colorClasses[capability.color as keyof typeof colorClasses]} p-8 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
              >
                <div className="grid gap-8 lg:grid-cols-2 items-center">
                  <div className={index % 2 === 0 ? "order-1" : "order-2"}>
                    <Icon className={`w-12 h-12 ${iconColorClasses[capability.color as keyof typeof iconColorClasses]} mb-4`} />
                    <h4 className="mb-4 text-2xl font-bold">{capability.title}</h4>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                  <div className={index % 2 === 0 ? "order-2" : "order-1"}>
                    <div className="rounded-xl overflow-hidden shadow-2xl">
                      <img 
                        src={capability.image} 
                        alt={`${capability.title} visualization`}
                        className="w-full hover-scale transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-muted to-muted/50 p-8 md:p-12 mb-12">
          <h3 className="mb-6 text-2xl font-bold text-center">In Summary</h3>
          <p className="text-xl text-muted-foreground leading-relaxed mb-6 text-center max-w-3xl mx-auto">
            This project demonstrates how MyAgentVerse AI systems integrate across departments — connecting data, decisions, and operations into one intelligent ecosystem.
          </p>
          <p className="text-xl text-foreground leading-relaxed text-center max-w-3xl mx-auto font-semibold">
            It's a glimpse into what happens when AI doesn't just analyze the past, but actively <em>shapes the future</em> of industrial performance.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src={heroImage} 
            alt="Complete smart factory ecosystem with AI-powered network connections"
            className="w-full hover-scale transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default ManufacturingSpotlight;
