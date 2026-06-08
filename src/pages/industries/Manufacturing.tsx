import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { HF } from "@/lib/hf-images";
import manufacturingHero from "@/assets/manufacturing-hero.jpg";




import {
  FileText,
  CalendarDays,
  ClipboardList,
  MailOpen,
  BarChart2,
  CheckCircle2,
  TrendingDown,
  DollarSign,
  Clock,
  ShieldCheck,
  ArrowRight,
  Layers,
  Truck,
  Calculator,
} from "lucide-react";

const painPoints = [
  {
    icon: <FileText className="w-6 h-6 text-amber-500" />,
    title: "Manual invoice processing at scale",
    desc: "AP teams manually entering hundreds of invoices per month — slow, error-prone, and expensive.",
  },
  {
    icon: <CalendarDays className="w-6 h-6 text-amber-500" />,
    title: "Spreadsheet production scheduling",
    desc: "Production schedules built and updated by hand in spreadsheets, creating version control chaos.",
  },
  {
    icon: <ClipboardList className="w-6 h-6 text-amber-500" />,
    title: "End-of-shift quality reports done manually",
    desc: "Quality data compiled by hand at shift end, delaying visibility and increasing defect risk.",
  },
  {
    icon: <MailOpen className="w-6 h-6 text-amber-500" />,
    title: "Vendor POs tracked in email chains",
    desc: "Purchase orders scattered across inboxes — follow-ups missed, deliveries delayed.",
  },
  {
    icon: <BarChart2 className="w-6 h-6 text-amber-500" />,
    title: "Month-end reporting takes days",
    desc: "Finance and ops teams spend 2–3 days per month gathering data that should be instant.",
  },
];

const automations = [
  {
    icon: <FileText className="w-8 h-8 text-teal-600" />,
    title: "Invoice & PO Processing",
    desc: "Auto-extract line items from invoices, match against POs, route for approval, and post to your accounting system — zero manual entry.",
    image: manufacturingOperations,
  },
  {
    icon: <ClipboardList className="w-8 h-8 text-teal-600" />,
    title: "Production Reporting",
    desc: "Auto-compile shift data from your machines and operators, flag exceptions, and deliver reports before the next shift starts.",
    image: manufacturingEfficiency,
  },
  {
    icon: <Truck className="w-8 h-8 text-teal-600" />,
    title: "Vendor Communication",
    desc: "Automated PO issuance, delivery confirmations, and vendor follow-ups — your purchasing runs itself.",
    image: manufacturingSupplyChain,
  },
  {
    icon: <Calculator className="w-8 h-8 text-teal-600" />,
    title: "Job Costing & Quoting",
    desc: "Pull live material costs, apply labor rates, and generate accurate estimates automatically — quote faster, win more.",
    image: manufacturingForecasting,
  },
];

const stats = [
  {
    icon: <TrendingDown className="w-7 h-7 text-teal-400" />,
    value: "70%",
    label: "reduction in invoice processing time",
  },
  {
    icon: <DollarSign className="w-7 h-7 text-amber-400" />,
    value: "$47K",
    label: "average annual savings on AP alone",
  },
  {
    icon: <Clock className="w-7 h-7 text-teal-400" />,
    value: "Same Day",
    label: "month-end close (was 3 days)",
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-amber-400" />,
    value: "0",
    label: "manual data entry errors after deployment",
  },
];

export default function Manufacturing() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden min-h-[600px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${manufacturingHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,40%,10%)]/90 via-[hsl(220,40%,10%)]/70 to-transparent" />
        {/* Gradient blob */}
        <div className="absolute top-20 right-32 w-72 h-72 rounded-full bg-teal-500/20 blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 animate-fade-in">
          <Badge className="mb-4 bg-amber-500/20 text-amber-300 border-amber-500/40 text-sm">
            Manufacturing Automation
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl leading-tight mb-6">
            Manufacturing businesses run on processes. Ours are built to automate yours.
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10">
            From invoice processing to production scheduling, we build the automations that cut your admin burden and let your operators focus on the floor — not the spreadsheets.
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
              Common Bottlenecks
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 max-w-2xl mx-auto">
              Where manufacturing operations break down every week.
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
            <Badge className="mb-3 bg-teal-100 text-teal-700 border-teal-200">
              Our Solutions
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              What we automate for manufacturers
            </h2>
            <p className="mt-4 text-slate-600 max-w-xl mx-auto">
              Four core automation systems built for $1M–$5M manufacturers in the Houston/Woodlands area.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {automations.map((item, i) => (
              <Card
                key={i}
                className="overflow-hidden border border-slate-200 hover:shadow-lg transition-all duration-300 hover-scale"
              >
                <div className="h-48 overflow-hidden">
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
            Woodlands Manufacturing Co.
          </h2>
          <p className="text-slate-400 mb-12 text-lg">
            A mid-sized Houston-area manufacturer processing 200+ invoices per month — manually.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { label: "Invoices automated per month", value: "200+" },
              { label: "Processing time per invoice", value: "18 min → 2 min" },
              { label: "Annual AP savings", value: "$47,000" },
              { label: "Month-end close", value: "3 days → same day" },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5">
                <div className="text-2xl font-bold text-amber-400 mb-2">{item.value}</div>
                <div className="text-slate-400 text-sm">{item.label}</div>
              </div>
            ))}
          </div>
          <blockquote className="text-slate-300 italic text-lg max-w-2xl mx-auto">
            "We were spending hours every week on invoices and month-end reports. MyAgentVerse automated all of it. Our AP team now does in minutes what used to take days."
          </blockquote>
          <p className="text-slate-500 text-sm mt-3">— Operations Director, Woodlands Manufacturing Co.</p>
        </div>
      </section>

      {/* ROI Numbers */}
      <section className="py-24 bg-teal-700 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-20 w-64 h-64 rounded-full bg-teal-500/30 blur-3xl" />
          <div className="absolute bottom-10 left-20 w-56 h-56 rounded-full bg-amber-400/20 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-14 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              The ROI speaks for itself
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
            Get a free process audit for your manufacturing operation.
          </h2>
          <p className="text-slate-600 mb-8 text-lg">
            We'll map your biggest admin bottlenecks and show you exactly where automation delivers fast ROI — before you spend a dollar.
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
