import { Badge } from "@/components/ui/badge";

const TrustSection = () => {
  return (
    <section className="bg-primary py-20 text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 inline-flex items-center justify-center rounded-full border-4 border-accent bg-primary px-6 py-3">
            <p className="text-lg font-bold">Limited to 10 HVAC Shops / Month</p>
          </div>
          
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Personal onboarding. Limited spots for quality.
          </h2>
          
          <p className="mb-12 text-lg leading-relaxed">
            Every shop runs a little different. That's why each setup is personal. We onboard only 10 HVAC shops per month to keep support hands-on and quality high.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="bg-background px-6 py-2 text-foreground">
              Transparent pricing
            </Badge>
            <Badge variant="secondary" className="bg-background px-6 py-2 text-foreground">
              No contracts
            </Badge>
            <Badge variant="secondary" className="bg-background px-6 py-2 text-foreground">
              Live U.S. support
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
