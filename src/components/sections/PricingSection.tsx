import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  return (
    <section id="pricing" className="bg-background py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 rounded-lg bg-accent/10 border border-accent/20 p-4 text-center">
            <p className="text-sm md:text-base">
              💡 Want lifetime access? 10 founding businesses get Aura + 3 agents for life at $499.{" "}
              <a href="/#founder-offer" className="font-semibold text-accent hover:underline">
                See Founding Offer →
              </a>
            </p>
          </div>
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
            Start where you need help most. Grow from there.
          </h2>
          <p className="mb-12 text-center text-lg text-muted-foreground">
            All plans include 24/7 coverage and hands-on setup from MyAgentVerse.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Fix Missed Calls: Ava</CardTitle>
                <CardDescription className="text-3xl font-bold text-foreground">$99/mo</CardDescription>
                <p className="text-xs text-muted-foreground mt-2">+ $0.10 per call/text</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">✓</span>
                    <span>Answers every call and text instantly.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">✓</span>
                    <span>Covers after-hours and weekends.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">✓</span>
                    <span>Stops ad dollars from going to waste.</span>
                  </li>
                </ul>
                <Button variant="outline" className="mt-6 w-full" asChild>
                  <a href="#book">Get Started</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="relative border-primary shadow-xl">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground">
                Most Popular
              </Badge>
              <CardHeader>
                <CardTitle>Fill Your Calendar: Ava + Jack</CardTitle>
                <CardDescription className="text-3xl font-bold text-foreground">$249/mo</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">✓</span>
                    <span>Everything in Ava.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">✓</span>
                    <span>Jack follows up on quotes, forms, and old leads.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">✓</span>
                    <span>Keeps techs busy, schedules full.</span>
                  </li>
                </ul>
                <Button variant="accent" className="mt-6 w-full" asChild>
                  <a href="#book">Get Started</a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Run It All: Ava + Jack + Sofia</CardTitle>
                <CardDescription className="text-3xl font-bold text-foreground">$399/mo</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">✓</span>
                    <span>Covers calls, follow-ups, reminders, reviews.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">✓</span>
                    <span>Daily ROI summaries.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">✓</span>
                    <span>Works beside your dispatcher, not instead of them.</span>
                  </li>
                </ul>
                <Button variant="outline" className="mt-6 w-full" asChild>
                  <a href="#book">Get Started</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
