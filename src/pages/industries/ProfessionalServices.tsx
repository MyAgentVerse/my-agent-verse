import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import consultationHero from "@/assets/consultation-hero.jpg";
import consultationResults from "@/assets/consultation-results.jpg";
import buildCollaboration from "@/assets/build-collaboration.jpg";
import {
  MailQuestion,
  FileSignature,
  CreditCard,
  Database,
  Users,
  UserCheck,
  FilePlus,
  DollarSign,
  Plug,
  Clock,
  TrendingDown,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Briefcase,
} from "lucide-react";

const painPoints = [
  {
    icon: <MailQuestion className="w-6 h-6 text-amber-500" />,
    title: "Client onboarding drags on for two weeks",
    desc: "Email chains chasing documents, signatures, and intake forms — every new client is a manual project.",
  },
  {
    icon: <FileSignature className="w-6 h-6 text-amber-500" />,
    title: "Proposals and contracts built from scratch",
    desc: "Your team recreates the same documents for every engagement instead of generating them in seconds.",
  },
  {
    icon: <CreditCard className="w-6 h-6 text-amber-500" />,
    title: "Invoice follow-up done by hand",
    desc: "Someone on your team personally chasing every overdue invoice — time that should be spent on billable work.",
  },
  {
    icon: <Database className="w-6 h-6 text-amber-500" />,
    title: "Intake forms manually entered into the CRM",
    desc: "Data collected on forms has to be re-typed into your CRM. Every time. By a human.",
  },
  {
    icon: <Users className="w-6 h-6 text-amber-500" />,
    title: "Staff spending 20% of time on internal admin",
    desc: "Coordination emails, status updates, and internal reporting eat billable hours your clients are paying for.",
  },
];

const automations = [
  {
    icon: <UserCheck className="w-8 h-8 text-teal-600" />,
    title: "Client Onboarding Workflow",
    desc: "New client triggers an automated sequence: welcome email, document request, e-signature routing, CRM update — onboarding completes in 2 days, not 2 weeks.",
    image: buildCollaboration,
  },
  {
    icon: <FilePlus className="w-8 h-8 text-teal-600" />,
    title: "Proposal & Contract Generation",
    desc: "Pull client details, populate your template, generate a polished proposal or contract in seconds — ready to send before the meeting ends.",
    image: consultationResults,
  },
  {
    icon: <DollarSign className="w-8 h-8 text-teal-600" />,
    title: "Invoice & Payment Follow-Up",
    desc: "Invoices sent automatically on schedule. Follow-up sequences fire at 7, 14, and 30 days — 100% follow-up rate with zero staff time.",
    image: consultationHero,
  },
  {
    icon: <Plug className="w-8 h-8 text-teal-600" />,
    title: "Intake-to-CRM Automation",
    desc: "Client submits intake form → data flows directly into your CRM, tagged and ready for your team. No re-typing, no errors, no lag.",
    image: buildCollaboration,
  },
];

const stats = [
  {
    icon: <Clock className="w-7 h-7 text-teal-400" />,
    value: "2 days",
    label: "client onboarding (was 2 weeks)",
  },
  {
    icon: <TrendingDown className="w-7 h-7 text-amber-400" />,
    value: "45 min",
    label: "staff time per new client (was 6 hours)",
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-teal-400" />,
    value: "Zero",
    label: "manual CRM data entry",
  },
  {
    icon: <CheckCircle2 className="w-7 h-7 text-amber-400" />,
    value: "100%",
    label: "follow-up rate on invoices",
  },
];

export default function ProfessionalServices() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>AI Automation for Professional Services Firms | MyAgentVerse</title>
        <meta name="description" content="AI automation for consultants, law firms, accountants, and agencies. Automate client intake, follow-ups, scheduling, and reporting so your team focuses on billable work." />
        <meta property="og:title" content="AI Automation for Professional Services Firms | MyAgentVerse" />
        <meta property="og:description" content="Automate client intake, follow-ups, and scheduling for professional services firms with custom AI agents." />
        <meta property="og:url" content="https://myagentverse.com/industries/professional-services" />
        <meta property="og:image" content="https://myagentverse.com/social-preview.png" />
        <link rel="canonical" href="https://myagentverse.com/industries/professional-services" />
      </Helmet>
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden min-h-[600px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${consultationHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,40%,10%)]/90 via-[hsl(220,40%,10%)]/70 to-transparent" />
        <div className="absolute top-20 right-28 w-80 h-80 rounded-full bg-teal-500/15 blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 animate-fade-in">
          <Badge className="mb-4 bg-amber-500/20 text-amber-300 border-amber-500/40 text-sm">
            Professional Services Automation · Law · Accounting · Consulting · Staffing
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl leading-tight mb-6">
            Your people are your product. Stop having them do paperwork.
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10">
            We automate the admin work that eats your billable hours — client onboarding, document collection, reporting, follow-up — so your team can focus on the work clients actually pay for.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold hover-scale"
            >
              <Link to="/process-audit">
                Book Free Bottleneck Assessment <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              style={{ background: "transparent", border: "1.5px solid rgba(255,255,255,0.4)", color: "white" }}
              className="hover-scale hover:bg-white/10"
            >
              <Link to="/get-started">Talk to Us First</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-3 bg-teal-100 text-teal-700 border-teal-200">
              The real cost of manual admin
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 max-w-2xl mx-auto">
              Where professional services firms lose billable hours every week
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((point, i) => (
              <Card
                key={i}
                className="border border-slate-200 hover:border-teal-300 hover:shadow-md transition-all duration-200 hover-scale"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-amber-50 rounded-lg shrink-0">{point.icon}</div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">{point.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{point.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Automate */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-3 bg-teal-100 text-teal-700 border-teal-200">Our Systems</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Four automations that protect your billable hours
            </h2>
            <p className="mt-4 text-slate-600 max-w-xl mx-auto">
              Built for law firms, accountants, consultants, staffing agencies, and marketing agencies doing $1M–$5M.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {automations.map((item, i) => (
              <Card
                key={i}
                className="overflow-hidden border border-slate-200 hover:shadow-lg transition-all duration-300 hover-scale"
              >
                <div className="h-48 overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-teal-50 rounded-lg">{item.icon}</div>
                    <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-24 bg-[hsl(220,40%,10%)] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-teal-600/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-fade-in">
          <Badge className="mb-4 bg-teal-500/20 text-teal-300 border-teal-500/40">
            Case Study
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Houston Professional Services Firm
          </h2>
          <p className="text-slate-400 mb-12 text-lg">
            A 15-person consulting firm where onboarding every client took two weeks of back-and-forth emails and 6 hours of staff time.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              { label: "Client onboarding time", value: "2 weeks → 2 days" },
              { label: "Staff time per new client", value: "6 hrs → 45 min" },
              { label: "CRM data entry errors", value: "Eliminated" },
              { label: "Invoice follow-up rate", value: "100% automated" },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5 text-left">
                <div className="text-2xl font-bold text-amber-400 mb-1">{item.value}</div>
                <div className="text-slate-400 text-sm">{item.label}</div>
              </div>
            ))}
          </div>
          <blockquote className="text-slate-300 italic text-lg max-w-2xl mx-auto">
            "Our team was spending a full day per new client just on onboarding admin. Now it's automated. We onboard faster, look more professional, and our consultants stay focused on client work."
          </blockquote>
          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="w-9 h-9 rounded-full bg-teal-600 flex items-center justify-center">
              <Briefcase className="w-4 h-4 text-white" />
            </div>
            <p className="text-slate-500 text-sm">Managing Partner, Houston Consulting Firm</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-teal-700 relative overflow-hidden">
        <div className="absolute top-10 right-20 w-64 h-64 rounded-full bg-teal-500/30 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-20 w-56 h-56 rounded-full bg-amber-400/20 blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-14 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              What the numbers look like after automation
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7 text-center hover-scale transition-all duration-200"
              >
                <div className="flex justify-center mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-teal-200 text-sm leading-snug">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4">
            <CheckCircle2 className="w-5 h-5 text-teal-600" />
            <span className="text-teal-700 font-medium text-sm">Free, no-obligation audit</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Book your free Bottleneck Assessment.
          </h2>
          <p className="text-slate-600 mb-8 text-lg">
            We'll walk through your workflows and show you exactly how many billable hours are being lost to admin — and what it would take to get them back.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold hover-scale text-base px-8"
          >
            <Link to="/process-audit">
              Book Free Bottleneck Assessment <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          <p className="mt-4 text-slate-500 text-sm">
            Based in The Woodlands, TX · (713) 517-6792
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
