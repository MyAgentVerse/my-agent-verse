import { CheckCircle } from "lucide-react";
import businessOwnerImage from "@/assets/consultation-results.jpg";

const WhyThisWorks = () => {
  const reasons = [
    "Two private sessions with clear, measurable outcomes—not vague advice.",
    "Delivered reports, calculators, and assets you can share with your team.",
    "A full credit of your consultation fee toward your first project, ensuring zero risk.",
    "You will leave knowing exactly which automations to build, how much they will save you, and how to get them live within 90 days."
  ];

  return (
    <section className="mb-20">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="absolute inset-0 bg-gradient-to-l from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
          <img 
            src={businessOwnerImage} 
            alt="Business owner reviewing AI roadmap with data visualizations" 
            className="relative rounded-3xl shadow-2xl w-full"
          />
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">
            Why This Works
          </h2>
          <div className="space-y-4">
            {reasons.map((reason, index) => (
              <div key={index} className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                <p className="text-lg text-muted-foreground">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyThisWorks;
