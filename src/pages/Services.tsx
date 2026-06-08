// === FILE: src/pages/Services.tsx ===
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  Settings,
  FileText,
  Zap,
  Shield,
  Clock,
  TrendingUp,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import buildHero from "@/assets/build-hero.jpg";
import manufacturingOperations from "@/assets/manufacturing-operations.jpg";
import realtorDashboard from "@/assets/realtor-dashboard.jpg";
import aiMattersInfographic from "@/assets/ai-matters-infographic.jpg";

const Services = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Services — AI Agents & Workflow Automation | MyAgentVerse</title>
        <meta name="description" content="Custom AI agents, workflow automation, and owned builds for SMBs in manufacturing, field service, and professional services." />
        <link rel="canonical" href="https://my-agent-verse.lovable.app/services" />
        <meta property="og:title" content="Services | MyAgentVerse" />
        <meta property="og:description" content="Custom AI agents and workflow automation for $1M–$5M businesses." />
        <meta property="og:url" content="https://my-agent-verse.lovable.app/services" />
      </Helmet>
      <Header />



      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[hsl(222_47%_11%)] py-24 md:py-32">
        <div className="pointer-events-none absolute -top-24 -left-24 h-[450px] w-[450px] rounded-full bg-[hsl(186_100%_27%)] opacity-20 blur-[120px] animate-pulse" />
        <div className="pointer-events-none absolute -bottom-16 right-0 h-[350px] w-[350px] rounded-full bg-[hsl(42_100%_50%)] opacity-10 blur-[100px] animate-pulse" />

        <div className="container relative mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left: text + CTA */}
            <div className="animate-fade-in space-y-7">
              <Badge className="border-[hsl(186_100%_27%)] bg-[hsl(186_100%_27%)]/10 text-[hsl(186_85%_60%)]">
                What We Do
              </Badge>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
                We don't sell AI. We fix the processes{" "}
                <span className="text-[hsl(42_100%_50%)]">
                  eating your business alive.
                </span>
              </h1>
              <p className="text-lg text-slate-300 md:text-xl">
                Every engagement starts with understanding your operations — not
                pitching software. We find where time and money are bleeding out,
                then we stop it.
              </p>
              <Button asChild variant="accent" size="lg" className="hover-scale group">
                <Link to="/process-audit">
                  Get Your Free Process Audit
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* Right: hero image with gradient overlay */}
            <div className="animate-fade-in relative hidden lg:block">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[4/3]">
                <img
                  src={buildHero}
                  alt="Modern professional automation"
                  className="rounded-2xl shadow-xl object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[hsl(222_47%_11%)]/50 to-transparent rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2a. SERVICE: OPERATIONS AUTOMATION ──────────────────── */}
      <section className="bg-background py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-3">
            {/* Image on the left */}
            <div className="animate-fade-in relative overflow-hidden rounded-2xl shadow-xl aspect-[4/3] hidden lg:block">
              <img
                src={manufacturingOperations}
                alt="Manufacturing operations floor"
                className="rounded-2xl shadow-xl object-cover w-full h-full"
              />
            </div>

            {/* Text content — middle */}
            <div className="animate-fade-in space-y-6">
              <div className="inline-flex rounded-xl bg-[hsl(186_100%_27%)]/10 p-4">
                <Settings className="h-10 w-10 text-[hsl(186_100%_27%)]" />
              </div>
              <Badge className="bg-[hsl(186_100%_27%)]/10 text-[hsl(186_100%_27%)]">
                Service 01
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Operations Automation
              </h2>
              <p className="text-lg text-muted-foreground">
                Your CRM, email, accounting, and inventory are all separate
                systems — and someone on your team is manually bridging the gaps
                every single day. We connect everything and eliminate those
                manual steps permanently.
              </p>
              <ul className="space-y-3">
                {[
                  "Job dispatch and scheduling automation",
                  "Automated weekly reporting to leadership",
                  "Client onboarding flows from form to file",
                  "Inventory and order status sync across systems",
                  "Internal alerts and escalation routing",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[hsl(186_100%_27%)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Dark engagement card — right */}
            <div className="animate-fade-in space-y-6">
              <Card className="border-0 bg-[hsl(222_47%_11%)] text-white shadow-xl">
                <CardContent className="p-8">
                  <h3 className="mb-6 text-lg font-bold text-slate-300 uppercase tracking-wider">
                    Engagement Details
                  </h3>
                  <div className="space-y-5">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <span className="text-slate-400">Price Range</span>
                      <span className="text-xl font-bold text-[hsl(42_100%_50%)]">
                        $5,000 – $20,000
                      </span>
                    </div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <span className="text-slate-400">Timeline</span>
                      <span className="font-semibold text-white">
                        4–6 weeks
                      </span>
                    </div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <span className="text-slate-400">Best For</span>
                      <span className="font-semibold text-white">
                        2–3 connected processes
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Ownership</span>
                      <span className="font-semibold text-[hsl(186_85%_60%)]">
                        You own the build
                      </span>
                    </div>
                  </div>
                  <Button
                    asChild
                    variant="accent"
                    size="lg"
                    className="hover-scale mt-8 w-full group"
                  >
                    <Link to="/process-audit">
                      Start with a Free Audit
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2b. SERVICE: LEAD & QUOTE AUTOMATION ────────────────── */}
      <section className="bg-muted/40 py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-3">
            {/* Dark engagement card — left */}
            <div className="animate-fade-in space-y-6">
              <Card className="border-0 bg-[hsl(222_47%_11%)] text-white shadow-xl">
                <CardContent className="p-8">
                  <h3 className="mb-6 text-lg font-bold text-slate-300 uppercase tracking-wider">
                    Engagement Details
                  </h3>
                  <div className="space-y-5">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <span className="text-slate-400">Price Range</span>
                      <span className="text-xl font-bold text-[hsl(42_100%_50%)]">
                        $5,000 – $15,000
                      </span>
                    </div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <span className="text-slate-400">Timeline</span>
                      <span className="font-semibold text-white">
                        3–5 weeks
                      </span>
                    </div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <span className="text-slate-400">Best For</span>
                      <span className="font-semibold text-white">
                        Service businesses with inbound leads
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Ownership</span>
                      <span className="font-semibold text-[hsl(186_85%_60%)]">
                        You own the build
                      </span>
                    </div>
                  </div>
                  <Button
                    asChild
                    variant="accent"
                    size="lg"
                    className="hover-scale mt-8 w-full group"
                  >
                    <Link to="/process-audit">
                      Start with a Free Audit
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Text content — middle */}
            <div className="animate-fade-in space-y-6">
              <div className="inline-flex rounded-xl bg-[hsl(42_100%_50%)]/10 p-4">
                <Zap className="h-10 w-10 text-[hsl(42_100%_50%)]" />
              </div>
              <Badge className="bg-[hsl(42_100%_50%)]/10 text-[hsl(42_80%_40%)]">
                Service 02
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Lead & Quote Automation
              </h2>
              <p className="text-lg text-muted-foreground">
                Every lead followed up within minutes. Quotes generated
                automatically from your pricing rules. Your CRM always current
                — without anyone manually updating it. Speed-to-lead wins deals;
                we make you the fastest responder in your market.
              </p>
              <ul className="space-y-3">
                {[
                  "Instant lead response via email or SMS",
                  "Automated quote generation from pricing logic",
                  "CRM auto-update on every touchpoint",
                  "Lead scoring and smart routing by territory or rep",
                  "Follow-up sequences until replied or disqualified",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[hsl(42_100%_50%)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image on the right */}
            <div className="animate-fade-in relative overflow-hidden rounded-2xl shadow-xl aspect-[4/3] hidden lg:block">
              <img
                src={realtorDashboard}
                alt="CRM dashboard view"
                className="rounded-2xl shadow-xl object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2c. SERVICE: DOCUMENT & PROCESS SIMPLIFICATION ──────── */}
      <section className="bg-background py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left: text */}
            <div className="animate-fade-in space-y-6">
              <div className="inline-flex rounded-xl bg-[hsl(186_100%_27%)]/10 p-4">
                <FileText className="h-10 w-10 text-[hsl(186_100%_27%)]" />
              </div>
              <Badge className="bg-[hsl(186_100%_27%)]/10 text-[hsl(186_100%_27%)]">
                Service 03
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Document & Process Simplification
              </h2>
              <p className="text-lg text-muted-foreground">
                Invoices, contracts, estimates, and compliance documents —
                extracted, routed, filed, and acted on automatically. Businesses
                typically see a 70–80% time reduction on document-heavy work
                within the first month.
              </p>
              <ul className="space-y-3">
                {[
                  "Invoice and estimate generation from job data",
                  "Contract creation from templates with e-sign routing",
                  "Compliance document extraction and filing",
                  "Intake form to internal workflow in seconds",
                  "Multi-step approval routing without email chains",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[hsl(186_100%_27%)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="rounded-xl border border-[hsl(186_100%_27%)]/20 bg-[hsl(186_100%_27%)]/5 p-5">
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-6 w-6 text-[hsl(186_100%_27%)]" />
                  <p className="font-semibold">
                    Average result: 70–80% time reduction on document-heavy
                    workflows
                  </p>
                </div>
              </div>
            </div>

            {/* Right: image stacked above the dark pricing card */}
            <div className="animate-fade-in space-y-6">
              <div className="relative overflow-hidden rounded-2xl shadow-xl h-72 hidden lg:block">
                <img
                  src={aiMattersInfographic}
                  alt="AI and automation infographic"
                  className="rounded-2xl shadow-xl object-cover w-full h-full"
                />
              </div>
              <Card className="border-0 bg-[hsl(222_47%_11%)] text-white shadow-xl">
                <CardContent className="p-8">
                  <h3 className="mb-6 text-lg font-bold text-slate-300 uppercase tracking-wider">
                    Engagement Details
                  </h3>
                  <div className="space-y-5">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <span className="text-slate-400">Price Range</span>
                      <span className="text-xl font-bold text-[hsl(42_100%_50%)]">
                        $3,000 – $12,000
                      </span>
                    </div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <span className="text-slate-400">Timeline</span>
                      <span className="font-semibold text-white">
                        2–4 weeks
                      </span>
                    </div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <span className="text-slate-400">Best For</span>
                      <span className="font-semibold text-white">
                        High document volume businesses
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Ownership</span>
                      <span className="font-semibold text-[hsl(186_85%_60%)]">
                        You own the build
                      </span>
                    </div>
                  </div>
                  <Button
                    asChild
                    variant="accent"
                    size="lg"
                    className="hover-scale mt-8 w-full group"
                  >
                    <Link to="/process-audit">
                      Start with a Free Audit
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. WHAT WE DON'T DO ─────────────────────────────────── */}
      <section className="bg-[hsl(222_47%_11%)] py-20">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="animate-fade-in space-y-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              What we don't do
            </h2>
            <p className="text-slate-400">
              We'd rather tell you this upfront than waste your time.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  text: "Sell you a chatbot and call it AI transformation",
                },
                {
                  text: "Build things you can't own or understand after delivery",
                },
                {
                  text: "Disappear after the project ends",
                },
              ].map(({ text }, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/5 p-5 text-left"
                >
                  <XCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-400" />
                  <p className="text-slate-300">{text}</p>
                </div>
              ))}
            </div>

            <p className="text-slate-400">
              We build real systems with your existing tools, hand them over
              completely, and document everything so your team can run them
              independently.
            </p>
          </div>
        </div>
      </section>

      {/* ── 4. PRICING TIERS ────────────────────────────────────── */}
      <section className="bg-muted/40 py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center animate-fade-in">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Simple, scoped pricing
            </h2>
            <p className="mt-3 text-muted-foreground">
              Every project is scoped and priced before we start. No surprises.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Quick Win */}
            <Card className="hover-scale relative border-2 border-border bg-card shadow-md transition-all hover:shadow-xl">
              <CardHeader className="pb-4 pt-8 text-center">
                <Badge className="mx-auto mb-3 w-fit bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  Quick Win
                </Badge>
                <div className="text-4xl font-extrabold">
                  $1,500
                  <span className="text-lg font-normal text-muted-foreground">
                    {" "}
                    – $3,500
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Single automation · 1 week
                </p>
              </CardHeader>
              <CardContent className="space-y-4 px-8 pb-8">
                <ul className="space-y-3">
                  {[
                    "One focused automation",
                    "Works with your existing tools",
                    "Delivered in about a week",
                    "Full documentation included",
                    "You own the build",
                    "No ongoing platform fees to us",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm">
                      <CheckCircle className="h-4 w-4 flex-shrink-0 text-[hsl(186_100%_27%)]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="pt-2 text-sm text-muted-foreground">
                  Best for: one specific pain point you want solved fast.
                </p>
                <Button asChild variant="outline" className="hover-scale mt-4 w-full">
                  <Link to="/process-audit">Start with a Free Audit</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Operations System */}
            <Card className="hover-scale relative border-2 border-[hsl(186_100%_27%)] bg-card shadow-xl">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="bg-[hsl(186_100%_27%)] text-white px-4 py-1">
                  Most Common
                </Badge>
              </div>
              <CardHeader className="pb-4 pt-8 text-center">
                <Badge className="mx-auto mb-3 w-fit bg-[hsl(186_100%_27%)]/10 text-[hsl(186_100%_27%)]">
                  Operations System
                </Badge>
                <div className="text-4xl font-extrabold">
                  $5,000
                  <span className="text-lg font-normal text-muted-foreground">
                    {" "}
                    – $20,000
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  2–3 connected processes · 4–8 weeks
                </p>
              </CardHeader>
              <CardContent className="space-y-4 px-8 pb-8">
                <ul className="space-y-3">
                  {[
                    "2–3 fully connected automations",
                    "Cross-system data flows",
                    "Scoped and priced upfront",
                    "Team training included",
                    "Full documentation included",
                    "You own the build",
                    "No ongoing platform fees to us",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm">
                      <CheckCircle className="h-4 w-4 flex-shrink-0 text-[hsl(186_100%_27%)]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="pt-2 text-sm text-muted-foreground">
                  Best for: businesses where multiple broken processes are
                  connected.
                </p>
                <Button asChild variant="accent" className="hover-scale mt-4 w-full group">
                  <Link to="/process-audit">
                    Start with a Free Audit
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Full Build */}
            <Card className="hover-scale relative border-2 border-border bg-card shadow-md transition-all hover:shadow-xl">
              <CardHeader className="pb-4 pt-8 text-center">
                <Badge className="mx-auto mb-3 w-fit bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  Full Build
                </Badge>
                <div className="text-4xl font-extrabold">
                  $15,000
                  <span className="text-lg font-normal text-muted-foreground">
                    {" "}
                    – $40,000
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Complex multi-system · 8–12 weeks
                </p>
              </CardHeader>
              <CardContent className="space-y-4 px-8 pb-8">
                <ul className="space-y-3">
                  {[
                    "Complex multi-system integration",
                    "Custom logic and business rules",
                    "Phased delivery with checkpoints",
                    "Dedicated project manager",
                    "Full documentation included",
                    "You own the build",
                    "No ongoing platform fees to us",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm">
                      <CheckCircle className="h-4 w-4 flex-shrink-0 text-[hsl(186_100%_27%)]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="pt-2 text-sm text-muted-foreground">
                  Best for: high-complexity operations or multiple departments.
                </p>
                <Button asChild variant="outline" className="hover-scale mt-4 w-full">
                  <Link to="/process-audit">Start with a Free Audit</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            <Shield className="mb-0.5 mr-1.5 inline-block h-4 w-4 text-[hsl(186_100%_27%)]" />
            All tiers include: you own the build. No ongoing platform fees to
            us. Everything documented.
          </p>
        </div>
      </section>

      {/* ── 5. FINAL CTA ────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(186_100%_27%)] via-[hsl(186_80%_20%)] to-[hsl(222_47%_11%)]" />
        <div className="pointer-events-none absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-[hsl(42_100%_50%)] opacity-20 blur-[80px] animate-pulse" />

        <div className="container relative mx-auto max-w-3xl px-6 text-center">
          <div className="animate-fade-in space-y-6">
            <h2 className="text-4xl font-extrabold text-white md:text-5xl">
              Not sure which fits?
            </h2>
            <p className="text-lg text-white/80">
              Start with the free process audit. We'll map your top 3 painful
              processes, tell you exactly what's worth automating, and give you
              a clear recommendation — with no obligation to hire us.
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
                <a href="tel:+12816998318">Call (281) 699-8318</a>
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-6 pt-2">
              {[
                "No obligation",
                "60-minute session",
                "Written findings",
                "The Woodlands, TX",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-white/60"
                >
                  <CheckCircle className="h-4 w-4 text-[hsl(42_100%_50%)]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
