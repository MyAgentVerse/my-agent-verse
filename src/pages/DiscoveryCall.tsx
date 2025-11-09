import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Target, Lightbulb, TrendingUp, Calendar } from "lucide-react";
import Cal, { getCalApi } from "@calcom/embed-react";

const DiscoveryCall = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "discovery" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  const scrollToCalendar = () => {
    document.getElementById('cal-widget')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <Helmet>
        <title>Book Your Free Discovery Call | MyAgentVerse</title>
        <meta
          name="description"
          content="In 15-20 minutes, we'll uncover how AI fits your business — whether you need a roadmap, a custom build, or a ready-to-launch AI Agent. Book your free discovery call today."
        />
        <meta property="og:title" content="Book Your Free Discovery Call | MyAgentVerse" />
        <meta
          property="og:description"
          content="Let's find out what AI can do for you. Quick, structured conversation to give you clarity and direction on your AI journey."
        />
        <meta property="og:url" content="https://myagentverse.com/discovery-call" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background">
        <Header />

        <main className="container mx-auto px-6 py-20">
          {/* Hero Section */}
          <section className="text-center max-w-4xl mx-auto mb-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Let's Find Out What AI Can Do for You
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              In 15–20 minutes, we'll uncover how AI fits your business — whether you need a roadmap, a custom build, or a ready-to-launch AI Agent.
            </p>
            <Button 
              size="lg" 
              variant="accent" 
              className="text-lg px-8 hover-scale shadow-lg"
              onClick={scrollToCalendar}
            >
              Book My Discovery Call
            </Button>
          </section>

          {/* Why Book a Discovery Call Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Book a Discovery Call
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-2">
                This isn't a sales call — it's a short, structured conversation designed to give you clarity and direction.
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                By the end, you'll know exactly which solution fits your business stage, your biggest AI opportunities, and your next best step.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
              <Card className="hover-scale hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Identify Your Best-Fit Path</h3>
                  <p className="text-muted-foreground">
                    We'll quickly pinpoint whether you need a Consultation, 21-Day Build, or ready AI Agent.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-scale hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                    <Lightbulb className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold">Discover Quick Wins</h3>
                  <p className="text-muted-foreground">
                    Find 1–2 automation opportunities that can deliver measurable ROI within 30 days.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-scale hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Get Actionable Clarity</h3>
                  <p className="text-muted-foreground">
                    Receive a personalized follow-up summary with recommendations within 24 hours.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Who This Call Is For Section */}
          <section className="mb-20 bg-gradient-to-br from-accent/5 to-primary/5 rounded-3xl p-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Who This Call Is For
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg">Businesses generating $500K–$5M+ in annual revenue</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg">Teams juggling multiple tools but lacking automation</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg">Founders ready to implement within 30 days</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg">Leaders who value clear direction before execution</p>
                </div>
              </div>
              <p className="text-center text-muted-foreground italic mt-8 text-base">
                This isn't for people just 'exploring someday' — we focus on teams ready to move fast and execute.
              </p>
            </div>
          </section>

          {/* What You'll Leave With Section */}
          <section className="mb-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                What You'll Leave With
              </h2>
              <div className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Clarity on your AI readiness level</h3>
                        <p className="text-muted-foreground">Understand exactly where you stand and what's possible</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Defined next steps and estimated ROI timeline</h3>
                        <p className="text-muted-foreground">Clear action plan with realistic expectations</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Insight into where automation will save the most time</h3>
                        <p className="text-muted-foreground">Identify your highest-impact opportunities</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Confidence and clarity — without the tech overwhelm</h3>
                        <p className="text-muted-foreground">Simple, jargon-free guidance you can act on</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Cal.com Embed Section */}
          <section id="cal-widget" className="mb-20">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Book Your Discovery Call Below
                </h2>
                <p className="text-lg text-muted-foreground">
                  Pick a time that fits your schedule — this is where clarity begins.
                </p>
              </div>
              
              <div className="rounded-2xl border bg-card shadow-2xl overflow-hidden" style={{ minHeight: '700px' }}>
                <Cal
                  namespace="discovery"
                  calLink="agentverse/30min"
                  style={{ width: "100%", height: "100%", minHeight: "700px" }}
                  config={{ layout: "month_view" }}
                />
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="text-center max-w-4xl mx-auto py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 rounded-3xl px-8">
            <Calendar className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Clarity Costs Nothing. Confusion Costs Growth.
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Take the first step — book your free Discovery Call today.
            </p>
            <Button 
              size="lg" 
              variant="accent" 
              className="text-lg px-8 hover-scale shadow-lg"
              onClick={scrollToCalendar}
            >
              Book My Discovery Call
            </Button>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default DiscoveryCall;
