import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Rocket, Shield } from "lucide-react";

const ImplementationSection = () => {
  return (
    <section className="bg-gradient-to-br from-accent/5 to-primary/5 py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Live in 24 Hours. Risk-Free for 7 Days.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stop letting opportunities slip through the cracks. Your AI team is ready to work—fast setup, zero risk, immediate results.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-10">
            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-primary/10 p-4">
                    <Rocket className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="mb-3 text-center text-xl font-bold">
                  24-Hour Setup
                </h3>
                <p className="text-center text-muted-foreground">
                  Book your call today, and we'll have your AI teammates answering calls and following up by tomorrow. No long contracts. No complicated onboarding. Just results.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent shadow-lg">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-accent/10 p-4">
                    <Shield className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <h3 className="mb-3 text-center text-xl font-bold">
                  7-Day Free Pilot
                </h3>
                <p className="text-center text-muted-foreground">
                  Try it completely free for 7 days. See Ava answer real calls, watch Jack convert old leads, experience Sofia keeping your schedule full. Zero commitment until you're convinced.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-primary/10 p-4">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="mb-3 text-center text-xl font-bold">
                  Instant ROI
                </h3>
                <p className="text-center text-muted-foreground">
                  Most HVAC shops see recovered revenue from the first week. One saved install pays for months of service. One captured emergency call can cover your entire year.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="mb-6 text-lg font-semibold">
              Your competitors are losing calls right now. Don't be next.
            </p>
            <Button variant="accent" size="lg" asChild>
              <a href="/booking">Start Your Free 7-Day Pilot</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplementationSection;
