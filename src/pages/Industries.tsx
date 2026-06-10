import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const industries = [
  {
    badge: "High Call Volume",
    title: "HVAC and Home Services",
    body: "After-hours calls go to voicemail. Leads book your competitor. Dispatch is still done by hand. We fix the response time and the scheduling chaos.",
    href: "/industries/field-service",
  },
  {
    badge: "Patient Experience",
    title: "Healthcare and Medical Practices",
    body: "Front desk is overwhelmed. Appointment reminders are manual. Patient follow-up falls off. We give you back time and reduce no-shows.",
    href: "/process-audit",
  },
  {
    badge: "Scheduling Bottleneck",
    title: "Dental Practices",
    body: "Scheduling gaps, missed recall outreach, and front desk juggling phones and walk-ins at the same time. We close those gaps automatically.",
    href: "/process-audit",
  },
  {
    badge: "Operations-Heavy",
    title: "Assisted Living Facilities",
    body: "Family communication, staff coordination, and documentation take hours that should go to residents. We automate the administrative load.",
    href: "/process-audit",
  },
  {
    badge: "Lead Conversion",
    title: "Real Estate Teams",
    body: "New leads come in from five different places and most get followed up on once. We make sure every lead gets the attention it needs until it converts.",
    href: "/process-audit",
  },
  {
    badge: "Document-Heavy",
    title: "Professional Services",
    body: "Proposals, contracts, onboarding, and reporting take more time than the actual client work. We automate the paper trail so you can focus on delivery.",
    href: "/industries/professional-services",
  },
  {
    badge: "Workflow Automation",
    title: "Manufacturing and Distribution",
    body: "Job orders, inventory updates, and supplier coordination still done by hand. Reporting takes hours. We cut that down to minutes.",
    href: "/industries/manufacturing",
  },
  {
    badge: "Scheduling and Billing",
    title: "Field Service Companies",
    body: "Dispatch, scheduling, invoicing, and follow-up all fall on the same two people. We build systems that handle the coordination so they can focus on the jobs.",
    href: "/industries/field-service",
  },
  {
    badge: "Client Intake",
    title: "Law Firms",
    body: "Intake is slow. Client communication is inconsistent. Billing and document management eat hours every week. We tighten the entire operation.",
    href: "/process-audit",
  },
];

const Industries = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Industries We Serve | AI Automation & Bottleneck Removal | MyAgentVerse</title>
        <meta name="description" content="MyAgentVerse removes operational bottlenecks for HVAC, healthcare, dental, real estate, manufacturing, law firms, and more. Free Bottleneck Assessment." />
        <meta property="og:title" content="Industries We Serve | MyAgentVerse" />
        <meta property="og:description" content="We find and fix operational bottlenecks across 9 industries. HVAC, healthcare, dental, real estate, manufacturing, and more." />
        <meta property="og:url" content="https://myagentverse.com/industries" />
        <meta property="og:image" content="https://myagentverse.com/social-preview.png" />
        <link rel="canonical" href="https://myagentverse.com/industries" />
      </Helmet>
      <Header />

      {/* Hero */}
      <section className="bg-[hsl(222,47%,11%)] py-20 md:py-28">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <Badge className="mb-4 border-[hsl(186_100%_27%)] bg-[hsl(186_100%_27%)]/10 text-[hsl(186_85%_60%)]">
            Industries We Serve
          </Badge>
          <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white md:text-5xl">
            Every business we help has a bottleneck.{" "}
            <span className="text-[hsl(42_100%_50%)]">We find it. We fix it.</span>
          </h1>
          <p className="mb-10 text-xl text-slate-300">
            The industry changes. The problem is always the same — your best people are
            spending time on things that should run automatically.
          </p>
          <Button asChild size="lg" className="bg-[hsl(42_100%_50%)] hover:bg-[hsl(42_100%_42%)] text-slate-900 font-bold px-10">
            <Link to="/process-audit">
              Book Free Bottleneck Assessment <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Industry grid */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => (
              <div
                key={ind.title}
                className="group rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-md hover:border-[hsl(186_100%_27%)]/50"
              >
                <Badge className="mb-4 bg-[hsl(186_100%_27%)]/10 text-[hsl(186_100%_27%)] text-xs">
                  {ind.badge}
                </Badge>
                <h2 className="mb-3 text-xl font-bold">{ind.title}</h2>
                <p className="mb-6 text-muted-foreground leading-relaxed text-sm">
                  {ind.body}
                </p>
                <Link
                  to={ind.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[hsl(186_100%_27%)] hover:text-[hsl(186_100%_20%)] transition-colors"
                >
                  See how we help
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(186_100%_27%)] via-[hsl(186_80%_20%)] to-[hsl(222_47%_11%)]" />
        <div className="container relative mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-4 text-4xl font-extrabold text-white">
            Not sure if we cover your industry?
          </h2>
          <p className="mb-8 text-lg text-white/80">
            If your team does repetitive manual work and it's slowing you down,
            we can almost certainly help. Book a free 60-minute Bottleneck Assessment
            and we'll tell you exactly what's worth fixing.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="bg-[hsl(42_100%_50%)] hover:bg-[hsl(42_100%_42%)] text-slate-900 font-bold px-10">
              <Link to="/process-audit">
                Book Free Assessment <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              style={{ background: "transparent", border: "1.5px solid rgba(255,255,255,0.4)", color: "white" }}
              className="hover:bg-white/10"
            >
              <a href="tel:+17135176792">Call (713) 517-6792</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Industries;
