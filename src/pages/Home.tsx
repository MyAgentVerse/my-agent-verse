// === FILE: src/pages/Home.tsx ===
import { Link } from "react-router-dom";
import {
  Clock,
  ArrowRight,
  CheckCircle,
  Settings,
  FileText,
  Users,
  Zap,
  Shield,
  TrendingUp,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroAiWorkspace from "@/assets/hero-ai-workspace.jpg";
import guaranteeBadge from "@/assets/guarantee-badge.png";
import industriesConnected from "@/assets/industries-connected.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[hsl(222_47%_11%)] py-24 md:py-32">
        {/* Gradient blobs */}
        <div className="pointer-events-none absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-[hsl(186_100%_27%)] opacity-20 blur-[120px] animate-pulse" />
        <div className="pointer-events-none absolute -bottom-24 -right-16 h-[400px] w-[400px] rounded-full bg-[hsl(42_100%_50%)] opacity-10 blur-[100px] animate-pulse" />

        <div className="container relative mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Copy */}
            <div className="animate-fade-in space-y-8">
              <Badge className="border-[hsl(186_100%_27%)] bg-[hsl(186_100%_27%)]/10 text-[hsl(186_85%_60%)]">
                AI Automation for Growing Businesses
              </Badge>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
                The stuff your team hates doing every week?{" "}
                <span className="text-[hsl(42_100%_50%)]">
                  We make it run itself.
                </span>
              </h1>
              <p className="max-w-xl text-lg text-slate-300 md:text-xl">
                We build custom AI systems for growing businesses that eliminate
                your most costly, repetitive processes — in 60 days or less.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  variant="accent"
                  size="lg"
                  className="hover-scale group"
                >
                  <Link to="/process-audit">
                    Get Your Free Process Audit
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="hover-scale border-white/30 text-white hover:bg-white/10">
                  <a href="tel:+12816998318">Call (281) 699-8318</a>
                </Button>
              </div>
              <p className="text-sm text-slate-400">
                Based in The Woodlands, TX · Serving $1M–$5M businesses
              </p>
            </div>

            {/* Hero image */}
            <div className="animate-fade-in relative hidden lg:block">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-tr from-[hsl(186_100%_27%)]/30 to-[hsl(42_100%_50%)]/20 blur-xl" />
              <img
                src={heroAiWorkspace}
                alt="AI automation workspace"
                className="relative rounded-2xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. PAIN SECTION ─────────────────────────────────────── */}
      <section className="bg-background py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center animate-fade-in">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Sound familiar?
            </h2>
            <p className="mt-3 text-muted-foreground">
              If any of these hit close to home, you're in the right place.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                quote:
                  "My best people are doing admin work instead of actual work.",
                icon: Users,
              },
              {
                quote:
                  "We're copying the same data into three different systems every single day.",
                icon: Clock,
              },
              {
                quote:
                  "I follow up with leads manually and half of them fall through the cracks.",
                icon: TrendingUp,
              },
            ].map(({ quote, icon: Icon }, i) => (
              <Card
                key={i}
                className="hover-scale group border-l-4 border-l-red-500/70 bg-card shadow-md transition-shadow hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <Quote className="mb-4 h-8 w-8 text-red-400/60" />
                  <p className="text-lg font-medium leading-relaxed text-foreground">
                    "{quote}"
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon className="h-4 w-4 text-orange-400" />
                    <span>We hear this every week.</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. SOLUTION SECTION ─────────────────────────────────── */}
      <section className="bg-muted/40 py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center animate-fade-in">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              We turn your most painful processes into systems{" "}
              <span className="text-[hsl(186_100%_27%)]">
                that run themselves.
              </span>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Settings,
                title: "Operations Automation",
                description:
                  "Connect your tools, eliminate manual steps, free your team from repetitive work. We integrate your CRM, email, accounting, and inventory so data flows automatically — no copy-pasting, no dropped balls.",
              },
              {
                icon: Zap,
                title: "Lead & Quote Automation",
                description:
                  "Never lose a lead to slow response. Automated follow-up, quoting, and routing. Every inquiry gets an intelligent reply within minutes, and your CRM stays current without anyone touching it.",
              },
              {
                icon: FileText,
                title: "Document & Process Simplification",
                description:
                  "Turn hours of paperwork into seconds. Invoices, contracts, forms — handled automatically. Extraction, routing, filing, and compliance checks happen without a single manual step.",
              },
            ].map(({ icon: Icon, title, description }, i) => (
              <Card
                key={i}
                className="hover-scale group relative overflow-hidden border-0 bg-card shadow-md transition-all hover:shadow-xl"
              >
                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[hsl(186_100%_27%)] to-[hsl(42_100%_50%)]" />
                <CardContent className="p-8">
                  <div className="mb-5 inline-flex rounded-xl bg-[hsl(186_100%_27%)]/10 p-3">
                    <Icon className="h-7 w-7 text-[hsl(186_100%_27%)]" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold">{title}</h3>
                  <p className="text-muted-foreground">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button asChild variant="accent" size="lg" className="hover-scale group">
              <Link to="/process-audit">
                See Which Applies to You
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── 4. NUMBERS SECTION ──────────────────────────────────── */}
      <section className="bg-[hsl(222_47%_11%)] py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center animate-fade-in">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Real outcomes. Real numbers.
            </h2>
            <p className="mt-3 text-slate-400">
              From automations we've already built for businesses like yours.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                stat: "8–19 hrs",
                label: "saved per week per automation built",
                icon: Clock,
              },
              {
                stat: "60 days",
                label: "or less to first real results",
                icon: Zap,
              },
              {
                stat: "200–300%",
                label: "ROI on document automation",
                icon: TrendingUp,
              },
              {
                stat: "3–5x",
                label: "more client volume without new hires",
                icon: Users,
              },
            ].map(({ stat, label, icon: Icon }, i) => (
              <div
                key={i}
                className="hover-scale animate-fade-in rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm"
              >
                <Icon className="mx-auto mb-4 h-8 w-8 text-[hsl(42_100%_50%)]" />
                <div className="text-4xl font-extrabold text-white">{stat}</div>
                <div className="mt-2 text-sm text-slate-400">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. INDUSTRIES SECTION ───────────────────────────────── */}
      <section className="bg-background py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center animate-fade-in">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Built for businesses like yours
            </h2>
            <p className="mt-3 text-muted-foreground">
              We specialize in three industries where process waste hits hardest.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Manufacturing & Distribution",
                pain: "Job orders, inventory updates, and supplier coordination still done by hand — costing 15+ hours a week.",
                href: "/industries/manufacturing",
                badge: "Operations-Heavy",
              },
              {
                title: "Field Service",
                pain: "Dispatching, job scheduling, invoicing, and follow-up all fall on the same two people every day.",
                href: "/industries/field-service",
                badge: "Scheduling & Billing",
              },
              {
                title: "Professional Services",
                pain: "Proposals, contracts, onboarding, and reporting take up more time than the actual client work.",
                href: "/industries/professional-services",
                badge: "Document-Heavy",
              },
            ].map(({ title, pain, href, badge }, i) => (
              <Link key={i} to={href} className="group block">
                <Card className="hover-scale h-full border-0 bg-card shadow-md transition-all group-hover:shadow-xl">
                  <CardContent className="p-8">
                    <Badge className="mb-4 bg-[hsl(186_100%_27%)]/10 text-[hsl(186_100%_27%)]">
                      {badge}
                    </Badge>
                    <h3 className="mb-3 text-xl font-bold">{title}</h3>
                    <p className="mb-4 text-muted-foreground">{pain}</p>
                    <div className="flex items-center gap-1 text-sm font-medium text-[hsl(186_100%_27%)] transition-transform group-hover:translate-x-1">
                      See how we help
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. HOW IT WORKS ─────────────────────────────────────── */}
      <section className="bg-muted/40 py-20">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="mb-12 text-center animate-fade-in">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              How it works
            </h2>
            <p className="mt-3 text-muted-foreground">
              No long discovery phases. No vague proposals. Just a clear path
              from problem to working system.
            </p>
          </div>

          <div className="relative space-y-8">
            {[
              {
                step: "01",
                title: "Free Process Audit",
                description:
                  "We map your top 3 painful processes and show you exactly what to automate — and what not to. You walk away with a clear picture of where your time is actually going, regardless of whether you hire us.",
              },
              {
                step: "02",
                title: "We Build It",
                description:
                  "Custom automation, built in 4–8 weeks. Scoped and priced before we start — no surprises mid-project. We connect your existing tools; you don't need to buy new software.",
              },
              {
                step: "03",
                title: "You Own It",
                description:
                  "No lock-in, no monthly platform fees to us. You own everything we build. We document it, hand it over, and train your team. We're available for ongoing support, but you're never trapped.",
              },
            ].map(({ step, title, description }, i) => (
              <div key={i} className="hover-scale flex gap-8 rounded-2xl bg-card p-8 shadow-md">
                <div className="flex-shrink-0">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(186_100%_27%)] text-lg font-extrabold text-white">
                    {step}
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold">{title}</h3>
                  <p className="text-muted-foreground">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. GUARANTEE ────────────────────────────────────────── */}
      <section className="bg-background py-20">
        <div className="container mx-auto max-w-3xl px-6 text-center">
          <div className="animate-fade-in flex flex-col items-center gap-6 rounded-2xl border border-[hsl(186_100%_27%)]/20 bg-[hsl(186_100%_27%)]/5 p-10 shadow-lg">
            <img
              src={guaranteeBadge}
              alt="Guarantee badge"
              className="h-24 w-24 object-contain"
            />
            <div>
              <h2 className="mb-3 text-2xl font-bold md:text-3xl">
                Our Audit Guarantee
              </h2>
              <p className="text-lg text-muted-foreground">
                If we can't find{" "}
                <span className="font-semibold text-foreground">
                  5 processes worth automating
                </span>{" "}
                in your business, the audit is completely free. No pitch, no
                pressure — just an honest look at your operations.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "No obligation",
                "60-minute session",
                "Written findings",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm font-medium text-[hsl(186_100%_27%)]"
                >
                  <CheckCircle className="h-4 w-4" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. FINAL CTA ────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(186_100%_27%)] via-[hsl(186_80%_20%)] to-[hsl(222_47%_11%)]" />
        <div className="pointer-events-none absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-[hsl(42_100%_50%)] opacity-20 blur-[80px] animate-pulse" />

        <div className="container relative mx-auto max-w-3xl px-6 text-center">
          <div className="animate-fade-in space-y-6">
            <h2 className="text-4xl font-extrabold text-white md:text-5xl">
              Ready to stop doing{" "}
              <span className="text-[hsl(42_100%_50%)]">$20/hour work?</span>
            </h2>
            <p className="text-lg text-white/80">
              Your first step is a free process audit. We'll show you exactly
              where the hours are going — and what it would take to get them
              back.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                asChild
                variant="accent"
                size="lg"
                className="hover-scale group px-10 text-base"
              >
                <Link to="/process-audit">
                  Get Your Free Process Audit
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="hover-scale border-white/40 text-white hover:bg-white/10"
              >
                <a href="tel:+12816998318">
                  Or Call (281) 699-8318
                </a>
              </Button>
            </div>
            <p className="text-sm text-white/50">
              The Woodlands, TX · Response within 1 business day
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
