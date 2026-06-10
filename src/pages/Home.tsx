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
  TrendingUp,
  Phone,
  BarChart3,
  Bot,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroAiWorkspace from "@/assets/hero-ai-workspace.jpg";
import guaranteeBadge from "@/assets/guarantee-badge.png";
import industriesConnected from "@/assets/industries-connected.jpg";
import businessChaos from "@/assets/business-chaos.jpg";
import problemSolutionSplit from "@/assets/problem-solution-split.jpg";
import buildCollaboration from "@/assets/build-collaboration.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[hsl(222_47%_11%)] py-24 md:py-32">
        <div className="pointer-events-none absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-[hsl(186_100%_27%)] opacity-20 blur-[120px] animate-pulse" />
        <div className="pointer-events-none absolute -bottom-24 -right-16 h-[400px] w-[400px] rounded-full bg-[hsl(42_100%_50%)] opacity-10 blur-[100px] animate-pulse" />

        <div className="container relative mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="animate-fade-in space-y-8">
              <Badge className="border-[hsl(186_100%_27%)] bg-[hsl(186_100%_27%)]/10 text-[hsl(186_85%_60%)]">
                AI-Powered Business Optimization
              </Badge>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
                Your Business Has a Bottleneck.{" "}
                <span className="text-[hsl(42_100%_50%)]">
                  We Find It. We Fix It.
                </span>
              </h1>
              <p className="max-w-xl text-lg text-slate-300 md:text-xl">
                We identify and eliminate the operational bottlenecks that eat
                your time, frustrate your team, and slow your growth. We use AI,
                automation, and intelligent systems to remove them for good.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  variant="accent"
                  size="lg"
                  className="hover-scale group"
                >
                  <Link to="/process-audit">
                    Book Free Bottleneck Assessment
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  style={{
                    background: "transparent",
                    border: "1.5px solid rgba(255,255,255,0.4)",
                    color: "white",
                  }}
                  size="lg"
                  className="hover-scale hover:bg-white/10"
                >
                  <Link to="/services">See How It Works</Link>
                </Button>
              </div>
              <p className="text-sm text-slate-400">
                Based in The Woodlands, TX · Serving service businesses across
                the U.S.
              </p>
            </div>

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

      {/* ── 2. PROBLEM SECTION ──────────────────────────────────── */}
      <section className="bg-background py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mb-12 grid items-center gap-8 lg:grid-cols-2 animate-fade-in">
            <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-[4/3]">
              <img
                src={businessChaos}
                alt="Overwhelmed business owner"
                className="rounded-2xl shadow-xl object-cover w-full h-full"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Most business owners are stuck. Not because they lack ambition.
              </h2>
              <p className="text-lg text-muted-foreground">
                They're stuck because a bottleneck somewhere in their operation
                is quietly costing them time, money, and growth every single
                week. Here's what that usually looks like.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                heading: "Missed calls. Missed revenue.",
                body: "Leads call after hours, nobody picks up, and they book with whoever answers first. That's not a staffing problem. That's a bottleneck.",
                icon: Phone,
              },
              {
                heading: "Your best people doing busywork.",
                body: "Scheduling, follow-up calls, manual data entry, copy-pasting between systems. Your team is capable of real work. This isn't it.",
                icon: Users,
              },
              {
                heading: "You can't see what's happening.",
                body: "No clear picture of which leads converted, how fast your team responds, or where jobs are falling through. You're flying blind.",
                icon: BarChart3,
              },
            ].map(({ heading, body, icon: Icon }, i) => (
              <Card
                key={i}
                className="hover-scale group border-l-4 border-l-red-500/70 bg-card shadow-md transition-shadow hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <Icon className="mb-4 h-8 w-8 text-red-400/70" />
                  <h3 className="mb-2 text-lg font-bold">{heading}</h3>
                  <p className="text-muted-foreground leading-relaxed">{body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. SOLUTION SECTION ─────────────────────────────────── */}
      <section className="bg-muted/40 py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mb-12 grid items-center gap-8 lg:grid-cols-2 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                We find the bottleneck. We fix it. Then we help you{" "}
                <span className="text-[hsl(186_100%_27%)]">scale.</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                We don't come in and try to sell you software. We start by
                understanding your business. Then we figure out what's actually
                slowing it down and build the right solution around that.
              </p>
              <p className="text-muted-foreground">
                Sometimes that's AI. Sometimes it's automation. Sometimes it's a
                dashboard that finally gives you visibility. It depends on your
                bottleneck, not on what we want to sell.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-[4/3]">
              <img
                src={problemSolutionSplit}
                alt="Before and after: problem solved"
                className="rounded-2xl shadow-xl object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
            {[
              {
                icon: Phone,
                title: "AI Receptionists",
                description:
                  "24/7 call handling that never sleeps. Every call answered, every lead captured, every appointment booked. Your phone stops being a missed opportunity.",
              },
              {
                icon: Zap,
                title: "AI Follow-Up Systems",
                description:
                  "Every lead gets an immediate response. Automated follow-up sequences run on their own until the prospect converts. No lead falls through the cracks.",
              },
              {
                icon: Settings,
                title: "Workflow Automation",
                description:
                  "The repetitive manual tasks your team does every day, automated. Less time on process. More time on actual work that moves the business forward.",
              },
              {
                icon: BarChart3,
                title: "Business Dashboards",
                description:
                  "Real-time visibility into your operation. Know where your revenue is coming from, where it's leaking, and what needs attention right now.",
              },
              {
                icon: Bot,
                title: "Custom AI Agents",
                description:
                  "AI built specifically around how your business runs. Not a generic tool. A system designed for your processes, your team, and your customers.",
              },
            ].map(({ icon: Icon, title, description }, i) => (
              <Card
                key={i}
                className="hover-scale group relative overflow-hidden border-0 bg-card shadow-md transition-all hover:shadow-xl"
              >
                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[hsl(186_100%_27%)] to-[hsl(42_100%_50%)]" />
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex rounded-xl bg-[hsl(186_100%_27%)]/10 p-3">
                    <Icon className="h-6 w-6 text-[hsl(186_100%_27%)]" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button
              asChild
              variant="accent"
              size="lg"
              className="hover-scale group"
            >
              <Link to="/process-audit">
                Find Your Bottleneck for Free
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
              What happens when the bottleneck is gone.
            </h2>
            <p className="mt-3 text-slate-400">
              Real results from real businesses we've worked with.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                stat: "8-19 hrs",
                label: "saved per week, per automation built",
                icon: Clock,
              },
              {
                stat: "Under 30 days",
                label: "from first call to live system",
                icon: Zap,
              },
              {
                stat: "200-300%",
                label: "ROI on workflow automation",
                icon: TrendingUp,
              },
              {
                stat: "3-5x",
                label: "more client volume without adding headcount",
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
          <div className="mb-12 grid items-center gap-8 lg:grid-cols-2 animate-fade-in">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                We work across industries. One thing stays the same.
              </h2>
              <p className="text-muted-foreground text-lg">
                Every business we help has a bottleneck. We find it, fix it, and
                build systems that keep it from coming back.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl h-72">
              <img
                src={industriesConnected}
                alt="Businesses we serve"
                className="rounded-2xl shadow-xl object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "HVAC and Home Services",
                pain: "After-hours calls go to voicemail. Leads book your competitor. Dispatch is still done by hand. We fix the response time and the scheduling chaos.",
                href: "/hvac",
                badge: "High Call Volume",
              },
              {
                title: "Healthcare and Medical Practices",
                pain: "Front desk is overwhelmed. Appointment reminders are manual. Patient follow-up falls off. We give you back time and reduce no-shows.",
                href: "/industries",
                badge: "Patient Experience",
              },
              {
                title: "Dental Practices",
                pain: "Scheduling gaps, missed recall outreach, and front desk juggling phones and walk-ins at the same time. We close those gaps automatically.",
                href: "/industries",
                badge: "Scheduling Bottleneck",
              },
              {
                title: "Assisted Living Facilities",
                pain: "Family communication, staff coordination, and documentation take hours that should go to residents. We automate the administrative load.",
                href: "/industries",
                badge: "Operations-Heavy",
              },
              {
                title: "Real Estate Teams",
                pain: "New leads come in from five different places and most get followed up on once. We make sure every lead gets the attention it needs until it converts.",
                href: "/realtor",
                badge: "Lead Conversion",
              },
              {
                title: "Professional Services",
                pain: "Proposals, contracts, onboarding, and reporting take more time than the actual client work. We automate the paper trail so you can focus on delivery.",
                href: "/industries/professional-services",
                badge: "Document-Heavy",
              },
              {
                title: "Manufacturing and Distribution",
                pain: "Job orders, inventory updates, and supplier coordination still done by hand. Reporting takes hours. We cut that down to minutes.",
                href: "/industries/manufacturing",
                badge: "Workflow Automation",
              },
              {
                title: "Field Service Companies",
                pain: "Dispatch, scheduling, invoicing, and follow-up all fall on the same two people. We build systems that handle the coordination so they can focus on the jobs.",
                href: "/industries/field-service",
                badge: "Scheduling and Billing",
              },
              {
                title: "Law Firms",
                pain: "Intake is slow. Client communication is inconsistent. Billing and document management eat hours every week. We tighten the entire operation.",
                href: "/industries",
                badge: "Client Intake",
              },
            ].map(({ title, pain, href, badge }, i) => (
              <Link key={i} to={href} className="group block">
                <Card className="hover-scale h-full border-0 bg-card shadow-md transition-all group-hover:shadow-xl">
                  <CardContent className="p-6">
                    <Badge className="mb-3 bg-[hsl(186_100%_27%)]/10 text-[hsl(186_100%_27%)]">
                      {badge}
                    </Badge>
                    <h3 className="mb-2 text-lg font-bold">{title}</h3>
                    <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                      {pain}
                    </p>
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
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center animate-fade-in">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              How it works
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              We don't do long discovery phases or vague proposals. You know
              what you're getting before we start, and you see results fast.
            </p>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative space-y-8">
              {[
                {
                  step: "01",
                  title: "Business Bottleneck Assessment",
                  description:
                    "We spend time understanding how your business actually operates and find your biggest constraint. You walk away with a clear map of where time and money are leaking out, whether you work with us or not.",
                },
                {
                  step: "02",
                  title: "Solution Design",
                  description:
                    "We figure out the right combination of AI, automation, workflows, and dashboards for your specific situation. No cookie-cutter approaches. The solution fits your business, your tools, and your team.",
                },
                {
                  step: "03",
                  title: "We Build and Deploy",
                  description:
                    "We build the system and get it running. Most clients have something live in under 30 days. We connect to your existing tools. You don't need to buy new software to make this work.",
                },
                {
                  step: "04",
                  title: "Optimization",
                  description:
                    "Once the system is live, we keep improving it. We monitor performance, track results, and make adjustments. The goal is continuous improvement, not a one-time fix.",
                },
              ].map(({ step, title, description }, i) => (
                <div
                  key={i}
                  className="hover-scale flex gap-8 rounded-2xl bg-card p-8 shadow-md"
                >
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

            <div className="relative overflow-hidden rounded-2xl shadow-xl h-full min-h-[400px] hidden lg:block">
              <img
                src={buildCollaboration}
                alt="Building your automation solution"
                className="rounded-2xl shadow-xl object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. WHY US SECTION ───────────────────────────────────── */}
      <section className="bg-background py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center animate-fade-in">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Business first. Technology second.
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto text-lg">
              We don't show up with a product to sell. We show up to understand
              your operation and figure out what's actually holding it back.
              Then we build the right solution for that specific problem.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: CheckCircle,
                title: "We find the real problem first.",
                body: "Most companies skip this step and jump straight to selling you a tool. We don't. Every engagement starts with understanding your business before recommending anything.",
              },
              {
                icon: FileText,
                title: "You own everything we build.",
                body: "No platform lock-in. No ongoing fees to us. The systems, the workflows, the automations. All of it is yours. We document everything and train your team.",
              },
              {
                icon: TrendingUp,
                title: "Results in weeks, not months.",
                body: "We move fast. Most clients have their first system running in under 30 days. We scope the work upfront so there are no surprises halfway through.",
              },
            ].map(({ icon: Icon, title, body }, i) => (
              <div
                key={i}
                className="hover-scale rounded-2xl border bg-card p-8 shadow-md"
              >
                <div className="mb-4 inline-flex rounded-xl bg-[hsl(186_100%_27%)]/10 p-3">
                  <Icon className="h-6 w-6 text-[hsl(186_100%_27%)]" />
                </div>
                <h3 className="mb-3 text-xl font-bold">{title}</h3>
                <p className="text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>

          {/* Guarantee */}
          <div className="mt-16 animate-fade-in flex flex-col items-center gap-6 rounded-2xl border border-[hsl(186_100%_27%)]/20 bg-[hsl(186_100%_27%)]/5 p-10 shadow-lg max-w-3xl mx-auto text-center">
            <img
              src={guaranteeBadge}
              alt="Guarantee badge"
              className="h-24 w-24 object-contain"
            />
            <div>
              <h3 className="mb-3 text-2xl font-bold md:text-3xl">
                Our Assessment Guarantee
              </h3>
              <p className="text-lg text-muted-foreground">
                If we can't find{" "}
                <span className="font-semibold text-foreground">
                  at least 5 bottlenecks worth fixing
                </span>{" "}
                in your business, the assessment is completely free. No pitch.
                No pressure. Just an honest look at your operation.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {["No obligation", "60-minute session", "Written findings"].map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm font-medium text-[hsl(186_100%_27%)]"
                  >
                    <CheckCircle className="h-4 w-4" />
                    {item}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. FINAL CTA ────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(186_100%_27%)] via-[hsl(186_80%_20%)] to-[hsl(222_47%_11%)]" />
        <div className="pointer-events-none absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-[hsl(42_100%_50%)] opacity-20 blur-[80px] animate-pulse" />

        <div className="container relative mx-auto max-w-3xl px-6 text-center">
          <div className="animate-fade-in space-y-6">
            <h2 className="text-4xl font-extrabold text-white md:text-5xl">
              Stop letting bottlenecks hold back your growth.
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Book your Free Business Bottleneck Assessment. We'll map out
              exactly where your business is losing time and money, and show you
              what it would take to fix it.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                asChild
                variant="accent"
                size="lg"
                className="hover-scale group px-10 text-base"
              >
                <Link to="/process-audit">
                  Book Free Bottleneck Assessment
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                style={{ background: "transparent", border: "1.5px solid rgba(255,255,255,0.4)", color: "white" }}
                className="hover-scale hover:bg-white/10"
              >
                <a href="tel:+17135176792">Call (713) 517-6792</a>
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
