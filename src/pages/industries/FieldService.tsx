import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroHvacTech from "@/assets/hero-hvac-tech.jpg";
import hvacTechniciansWorking from "@/assets/hvac-technicians-working.jpg";
import hvacSuccessTestimonial from "@/assets/hvac-success-testimonial.jpg";
import buildBookingCalendar from "@/assets/build-booking-calendar.png";
import {
  Timer,
  PhoneOff,
  Send,
  MessageSquareOff,
  FileBarChart,
  Zap,
  Repeat2,
  Bell,
  BarChart3,
  TrendingUp,
  Clock,
  CheckCircle2,
  ArrowRight,
  Calendar,
  Users,
} from "lucide-react";

const painPoints = [
  {
    icon: <Timer className="w-6 h-6 text-amber-500" />,
    title: "Losing jobs to faster competitors",
    desc: "Prospects call three companies. The first one to respond wins. Slow follow-up means lost revenue.",
  },
  {
    icon: <PhoneOff className="w-6 h-6 text-amber-500" />,
    title: "Dispatch done by phone and text",
    desc: "Job assignments communicated informally through calls and texts — jobs get missed, techs get double-booked.",
  },
  {
    icon: <Send className="w-6 h-6 text-amber-500" />,
    title: "Quotes sent manually with no follow-up",
    desc: "You send a quote and hope they call back. No automated follow-up sequence means money left on the table.",
  },
  {
    icon: <MessageSquareOff className="w-6 h-6 text-amber-500" />,
    title: "Inconsistent customer communication",
    desc: "Customers don't know when their tech is arriving, and you have no system to tell them automatically.",
  },
  {
    icon: <FileBarChart className="w-6 h-6 text-amber-500" />,
    title: "End-of-week reporting eats half a day",
    desc: "Friday afternoons lost to compiling job counts, revenue summaries, and tech performance from scattered data.",
  },
];

const automations = [
  {
    icon: <Calendar className="w-8 h-8 text-teal-600" />,
    title: "Job Dispatch Automation",
    desc: "New job request triggers automatic assignment to the right tech based on location, availability, and skill — no phone tag required.",
    image: buildBookingCalendar,
  },
  {
    icon: <Repeat2 className="w-8 h-8 text-teal-600" />,
    title: "Quote-to-Follow-Up Sequence",
    desc: "Quote sent automatically minutes after assessment. Follow-up sequence fires at 24h, 48h, and 7 days — capturing acceptances you'd otherwise miss.",
    image: hvacTechniciansWorking,
  },
  {
    icon: <Bell className="w-8 h-8 text-teal-600" />,
    title: "Customer Update Notifications",
    desc: "Customers get automatic SMS/email when job is scheduled, when tech is en route, and when job is complete — zero manual communication.",
    image: hvacSuccessTestimonial,
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-teal-600" />,
    title: "Weekly Reporting",
    desc: "Every Monday morning: auto-compiled report of jobs completed, revenue, tech utilization, and open quotes — pulled from your existing job data.",
    image: buildBookingCalendar,
  },
];

const stats = [
  {
    icon: <Zap className="w-7 h-7 text-amber-400" />,
    value: "8 min",
    label: "average quote response time (was 4 hours)",
  },
  {
    icon: <Clock className="w-7 h-7 text-teal-400" />,
    value: "14 hrs",
    label: "returned to the team each week",
  },
  {
    icon: <TrendingUp className="w-7 h-7 text-amber-400" />,
    value: "23%",
    label: "increase in quote acceptance rate",
  },
  {
    icon: <CheckCircle2 className="w-7 h-7 text-teal-400" />,
    value: "Zero",
    label: "missed follow-ups",
  },
];

export default function FieldService() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>AI Automation for Field Service Businesses | MyAgentVerse</title>
        <meta name="description" content="AI agents built for field service companies — HVAC, plumbing, electrical, and more. Automate dispatch, booking, follow-ups, and customer communication 24/7." />
        <meta property="og:title" content="AI Automation for Field Service Businesses | MyAgentVerse" />
        <meta property="og:description" content="Automate dispatch, booking, and customer follow-ups for your field service business with custom AI agents." />
        <meta property="og:url" content="https://myagentverse.com/industries/field-service" />
        <meta property="og:image" content="https://myagentverse.com/social-preview.png" />
        <link rel="canonical" href="https://myagentverse.com/industries/field-service" />
      </Helmet>
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden min-h-[600px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroHvacTech})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,40%,10%)]/90 via-[hsl(220,40%,10%)]/70 to-transparent" />
        <div className="absolute top-16 right-24 w-80 h-80 rounded-full bg-amber-500/15 blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 animate-fade-in">
          <Badge className="mb-4 bg-amber-500/20 text-amber-300 border-amber-500/40 text-sm">
            Field Service Automation · HVAC · Plumbing · Electrical
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl leading-tight mb-6">
            You're in the field. Your operations should run without you.
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10">
            We automate job dispatch, quote follow-up, and customer communication so your team stops losing jobs to faster competitors.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold hover-scale"
            >
              <Link to="/process-audit">
                Get a Free Process Audit <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/40 text-white hover:bg-white/10"
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
              Sound familiar?
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 max-w-2xl mx-auto">
              Where field service businesses bleed time and revenue
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
              Four automations that change how your business runs
            </h2>
            <p className="mt-4 text-slate-600 max-w-xl mx-auto">
              Purpose-built for HVAC, plumbing, electrical, and service contractors doing $1M–$5M.
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
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-teal-600/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 animate-fade-in">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-teal-500/20 text-teal-300 border-teal-500/40">
              Case Study
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Houston HVAC Contractor
            </h2>
            <p className="text-slate-400 text-lg">
              A 12-tech HVAC company losing quotes because follow-up was too slow and dispatch was chaos.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { label: "Hours saved per week", value: "14 hrs" },
              { label: "Quote response time", value: "4 hrs → 8 min" },
              { label: "Quote acceptance rate", value: "+23%" },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-amber-400 mb-2">{item.value}</div>
                <div className="text-slate-400 text-sm">{item.label}</div>
              </div>
            ))}
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <p className="text-slate-300 text-lg italic leading-relaxed mb-4">
              "We used to lose jobs just because we were slow to respond. Now quotes go out in minutes and follow-up happens automatically. We don't even think about it anymore — it just runs."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-medium text-sm">Owner</p>
                <p className="text-slate-500 text-xs">Houston HVAC Contractor, The Woodlands area</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-teal-700 relative overflow-hidden">
        <div className="absolute top-10 right-20 w-64 h-64 rounded-full bg-teal-500/30 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-20 w-56 h-56 rounded-full bg-amber-400/20 blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-14 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Results by the numbers</h2>
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
            Get a free process audit for your field service business.
          </h2>
          <p className="text-slate-600 mb-8 text-lg">
            We'll map the exact workflows where your team is losing time and jobs — and show you what automation would change.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold hover-scale text-base px-8"
          >
            <Link to="/process-audit">
              Book Your Free Audit <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          <p className="mt-4 text-slate-500 text-sm">
            Based in The Woodlands, TX · (281) 699-8318
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
