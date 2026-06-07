import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, MapPin, Phone, Shield, Zap, Heart } from "lucide-react";
import founderJourney from "@/assets/founder-journey.jpg";
import aiTeam from "@/assets/ai-team-avatars.jpg";
import guaranteeBadge from "@/assets/guarantee-badge.png";

const beliefs = [
  {
    icon: Shield,
    title: "You should own what you pay for.",
    body: "We build systems you own outright. No lock-in, no platform dependency, no monthly fees to us after delivery. When we're done, the system is yours — forever.",
  },
  {
    icon: Zap,
    title: "ROI in weeks, not years.",
    body: "If an automation doesn't have a clear, fast payback, we tell you that upfront — before you spend a dollar. We only build things that make financial sense.",
  },
  {
    icon: Heart,
    title: "Simple beats sophisticated.",
    body: "The best automation is the one your team actually uses. We build for operators, not engineers. If it needs a manual to run it, we built it wrong.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>

        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-secondary/90 to-primary/20 py-20 md:py-28 text-white">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 right-20 h-80 w-80 rounded-full bg-primary/20 blur-3xl animate-pulse" />
            <div className="absolute bottom-10 left-20 h-60 w-60 rounded-full bg-accent/10 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          </div>
          <div className="container mx-auto px-6 relative">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <Badge className="mb-4 bg-primary/20 text-primary-foreground border-primary/30">About Us</Badge>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                  We're a small team with one obsession: making your operations run without you.
                </h1>
                <p className="text-xl text-white/80 leading-relaxed mb-8">
                  Based in The Woodlands, TX. We work with $1M–$5M businesses that are growing but drowning in the processes that got them here.
                </p>
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <MapPin className="h-4 w-4 text-accent" />
                  The Woodlands, Texas
                </div>
              </div>
              <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 to-accent/20 rounded-3xl blur-2xl" />
                <img src={founderJourney} alt="Our team" className="relative rounded-2xl shadow-2xl w-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
              <div className="animate-fade-in">
                <img src={aiTeam} alt="Our team at work" className="rounded-2xl shadow-lg w-full object-cover hover-scale" />
              </div>
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    MyAgentVerse started because we kept seeing the same problem: growing businesses where the owner and their best people were doing work that should have been automated years ago.
                  </p>
                  <p>
                    Invoices entered by hand. Leads followed up manually. Reports built from scratch every week. Crews dispatching by text. Quotes typed out one by one.
                  </p>
                  <p>
                    These weren't small businesses that couldn't afford to fix it — they were $2M, $3M, $4M operations. They just didn't have a clear path to fixing it without hiring another person or buying another tool that wouldn't quite fit.
                  </p>
                  <p className="font-semibold text-foreground">
                    We built MyAgentVerse to be that path. Custom-built, owned outright, results in weeks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Believe */}
        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-14 animate-fade-in">
              <h2 className="text-3xl font-bold mb-4">What We Believe</h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                Three principles that shape every engagement.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {beliefs.map((b) => (
                <div key={b.title} className="bg-background rounded-2xl p-8 shadow-sm border border-border hover-scale animate-fade-in">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <b.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{b.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Guarantee */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-10 border border-primary/20 text-center animate-fade-in">
              <img src={guaranteeBadge} alt="Guarantee" className="h-20 w-20 mx-auto mb-6" />
              <h2 className="text-2xl font-bold mb-4">Our Guarantee</h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                If we can't find at least 5 automation opportunities with positive ROI in your business during the free audit, <span className="font-semibold text-foreground">you pay nothing</span>. Not a dollar.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center text-sm text-muted-foreground">
                {["No risk", "No sales pitch", "No obligation"].map((item) => (
                  <div key={item} className="flex items-center gap-2 justify-center">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Based in The Woodlands */}
        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <MapPin className="h-10 w-10 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Based in The Woodlands, TX</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                We're active in The Woodlands business community and work with companies throughout the Greater Houston area. If you're looking for a local partner who understands Texas-area businesses, we'd love to meet in person.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+12816998318" className="flex items-center gap-2 justify-center text-primary font-semibold hover:text-primary/80 transition-colors">
                  <Phone className="h-5 w-5" />
                  (281) 699-8318
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-primary to-primary/80 py-20 text-white text-center">
          <div className="container mx-auto px-6 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to talk?</h2>
            <p className="text-white/80 text-xl mb-8 max-w-xl mx-auto">
              Start with a free process audit — 30 minutes, no pitch, just a map of what's worth fixing first.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" asChild className="hover-scale">
                <a href="/process-audit">Get Your Free Process Audit <ArrowRight className="ml-2 h-5 w-5" /></a>
              </Button>
              <Button variant="outline" size="lg" asChild className="hover-scale border-white text-white hover:bg-white hover:text-primary">
                <a href="/get-started">Get In Touch</a>
              </Button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default About;
