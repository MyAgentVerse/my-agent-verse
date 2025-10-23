import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";
import hvacTech from "@/assets/hero-hvac-tech.jpg";
import avaAvatar from "@/assets/clara-avatar.png";
import jackAvatar from "@/assets/nexus-avatar.png";
import sofiaAvatar from "@/assets/vera-avatar.png";
import workshopImage from "@/assets/testimonial-workshop.jpg";
import { Phone, Clock, DollarSign, Zap, CheckCircle, Shield } from "lucide-react";

const Home = () => {

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 md:py-32">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-6xl">
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div className="space-y-8">
                  <div className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                    For HVAC Businesses
                  </div>
                  
                  <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                    Stop Losing Calls. Start Booking Jobs.
                  </h1>
                  
                  <p className="text-xl text-muted-foreground">
                    Your AI front desk team answers every call, books appointments, and follows up with customers—24/7. Never miss another lead.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                      <span className="text-lg">Live calls in 24 hours</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                      <span className="text-lg">7-day free pilot—no credit card</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                      <span className="text-lg">Only $99/month + $0.10 per call</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" variant="default" asChild className="text-base">
                      <a href="/booking">Start Free 7-Day Trial</a>
                    </Button>
                    <DemoModal>
                      <Button size="lg" variant="outline" className="text-base">
                        <Phone className="mr-2 h-5 w-5" />
                        Hear Ava Demo
                      </Button>
                    </DemoModal>
                  </div>

                  <p className="text-sm text-muted-foreground italic">
                    "We caught 47 missed calls in the first week. Ava paid for herself in 3 days." — Ben, Lone Star Heating & Air
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl" />
                  <img
                    src={hvacTech}
                    alt="HVAC technician at work"
                    className="relative rounded-2xl shadow-2xl"
                  />
                  
                  {/* Floating badges */}
                  <div className="absolute -top-4 -right-4 rounded-lg bg-card p-4 shadow-lg border border-border">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <span className="font-semibold">24/7 Available</span>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-4 -left-4 rounded-lg bg-card p-4 shadow-lg border border-border">
                    <div className="flex items-center gap-2">
                      <Phone className="h-5 w-5 text-accent" />
                      <span className="font-semibold">Never Miss a Call</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="bg-muted/50 py-20">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Every missed call is money walking out the door
              </h2>
              <div className="grid gap-6 md:grid-cols-3 text-left mt-12">
                <Card>
                  <CardContent className="pt-6">
                    <div className="mb-4 text-4xl font-bold text-destructive">$347</div>
                    <p className="text-muted-foreground">Average value of one missed HVAC service call</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="mb-4 text-4xl font-bold text-destructive">62%</div>
                    <p className="text-muted-foreground">Of customers who don't reach you call a competitor</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="mb-4 text-4xl font-bold text-destructive">5-7</div>
                    <p className="text-muted-foreground">Calls missed per week by average HVAC shop</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Solution - Meet Your AI Team */}
        <section className="bg-background py-20">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-6xl">
              <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
                Meet your AI front desk team
              </h2>
              <p className="mb-12 text-center text-xl text-muted-foreground">
                Three specialized AI agents working together to handle your calls, scheduling, and follow-ups
              </p>

              <div className="grid gap-8 md:grid-cols-3">
                <Card>
                  <CardContent className="pt-6 text-center">
                    <img src={avaAvatar} alt="Ava" className="mx-auto mb-4 h-24 w-24 rounded-full" />
                    <h3 className="mb-2 text-xl font-bold">Ava</h3>
                    <p className="mb-2 text-sm font-semibold text-primary">Your AI Receptionist</p>
                    <p className="text-muted-foreground">
                      Answers every call with a warm greeting, qualifies leads, and books appointments directly into your calendar
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6 text-center">
                    <img src={jackAvatar} alt="Jack" className="mx-auto mb-4 h-24 w-24 rounded-full" />
                    <h3 className="mb-2 text-xl font-bold">Jack</h3>
                    <p className="mb-2 text-sm font-semibold text-accent">Your AI Dispatcher</p>
                    <p className="text-muted-foreground">
                      Coordinates your team, sends job details to technicians, and keeps everyone on the same page
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6 text-center">
                    <img src={sofiaAvatar} alt="Sofia" className="mx-auto mb-4 h-24 w-24 rounded-full" />
                    <h3 className="mb-2 text-xl font-bold">Sofia</h3>
                    <p className="mb-2 text-sm font-semibold text-secondary">Your AI Follow-Up Specialist</p>
                    <p className="text-muted-foreground">
                      Sends appointment reminders, follows up on estimates, and nurtures leads until they book
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Section */}
        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-20">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
                The math is simple
              </h2>
              
              <div className="grid gap-8 md:grid-cols-2">
                <div className="rounded-xl bg-card p-8 shadow-lg">
                  <h3 className="mb-4 text-2xl font-bold text-destructive">Without Ava</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p>→ 6 missed calls per week</p>
                    <p>→ Average job value: $347</p>
                    <p>→ 62% book with competitors</p>
                    <div className="pt-4 text-2xl font-bold text-foreground">
                      = $1,292 lost per week
                    </div>
                    <div className="text-3xl font-bold text-destructive">
                      $67,184 lost per year
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-primary p-8 shadow-lg text-primary-foreground">
                  <h3 className="mb-4 text-2xl font-bold">With Ava</h3>
                  <div className="space-y-3">
                    <p>→ 0 missed calls</p>
                    <p>→ Every lead answered instantly</p>
                    <p>→ Automatic appointment booking</p>
                    <div className="pt-4 text-2xl font-bold">
                      Cost: $99/month + calls
                    </div>
                    <div className="text-3xl font-bold">
                      ROI: 12.9x in month 1
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-muted py-20">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-5xl">
              <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
                Real HVAC shops, real results
              </h2>

              <div className="mb-12 overflow-hidden rounded-2xl">
                <img 
                  src={workshopImage} 
                  alt="HVAC workshop" 
                  className="w-full"
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardContent className="pt-6">
                    <p className="mb-4 text-lg italic">"Ava catches every call now — my office manager finally goes home on time."</p>
                    <p className="font-semibold text-primary">Ben, Lone Star Heating & Air</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <p className="mb-4 text-lg italic">"Jack fills the gaps we never had time for."</p>
                    <p className="font-semibold text-primary">Melissa, CoolZone Services</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <p className="mb-4 text-lg italic">"Sofia keeps everything moving — like a second pair of hands for dispatch."</p>
                    <p className="font-semibold text-primary">Ray, QuickCool HVAC</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <p className="mb-4 text-lg italic">"Feels like we finally have the backup we needed."</p>
                    <p className="font-semibold text-primary">Tony, Comfort Pros HVAC</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>


        {/* How It Works */}
        <section className="bg-background py-20">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
                Get started in 3 simple steps
              </h2>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                    1
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold">Book Your Free Setup Call</h3>
                    <p className="text-muted-foreground">
                      We'll learn about your business, get your phone number forwarding, and customize Ava's greeting and responses for your shop.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent text-xl font-bold text-accent-foreground">
                    2
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold">Go Live in 24 Hours</h3>
                    <p className="text-muted-foreground">
                      Your AI team starts answering calls, booking appointments, and following up with leads. You'll see every interaction in your dashboard.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-xl font-bold text-secondary-foreground">
                    3
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold">Watch Your Calendar Fill Up</h3>
                    <p className="text-muted-foreground">
                      Try it free for 7 days. No credit card required. If you love it, keep going for just $99/month + $0.10 per call.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="bg-muted/50 py-20">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
                Simple, transparent pricing
              </h2>
              <p className="mb-12 text-center text-xl text-muted-foreground">
                One flat rate. No hidden fees. Cancel anytime.
              </p>

              <Card className="border-2 border-primary">
                <CardContent className="p-8 text-center">
                  <h3 className="mb-2 text-2xl font-bold">Complete AI Front Desk Team</h3>
                  <div className="mb-6">
                    <span className="text-5xl font-bold">$99</span>
                    <span className="text-xl text-muted-foreground">/month</span>
                  </div>
                  <p className="mb-6 text-lg text-muted-foreground">+ $0.10 per call or text handled</p>
                  
                  <div className="mb-8 space-y-3 text-left">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>Ava (AI Receptionist) - answers & books calls</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>Jack (AI Dispatcher) - coordinates your team</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>Sofia (AI Follow-Up) - nurtures every lead</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>24/7 availability - never miss a call</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>Calendar integration & automatic booking</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>7-day free trial - no credit card required</span>
                    </div>
                  </div>

                  <Button size="lg" className="w-full text-lg" asChild>
                    <a href="/booking">Start Your Free 7-Day Trial</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-20">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-4xl font-bold md:text-5xl">
                Stop losing calls. Start growing.
              </h2>
              <p className="mb-8 text-xl text-muted-foreground">
                Join HVAC shops already using AI to capture every lead and book more jobs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="default" className="text-lg" asChild>
                  <a href="/booking">Get Started Free</a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg" asChild>
                  <a href="/hvac">Learn More About HVAC Solutions</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
