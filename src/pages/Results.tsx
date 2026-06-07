import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, TrendingUp, Clock, Users, Zap } from "lucide-react";
import testimonialSuccess from "@/assets/testimonial-success.jpg";
import buildCollaboration from "@/assets/build-collaboration.jpg";
import manufacturingOps from "@/assets/manufacturing-operations.jpg";

const caseStudies = [
  {
    number: "01",
    industry: "Sign Manufacturing",
    year: "2025",
    project: "RoyalSigns CRM",
    headline: "End-to-end operations: quoting to invoicing — all automated.",
    problem:
      "A sign manufacturing company was running their entire operation through email threads, spreadsheets, and manual handoffs. Sales quoted by hand, production tracked on a whiteboard, install crews dispatched by text, invoices created one by one.",
    solution:
      "We built RoyalSigns CRM — a fully integrated operations system covering quoting, production scheduling, install tracking, and invoicing. Every step hands off automatically to the next.",
    results: [
      "Quote generation: hours → minutes",
      "Zero missed handoffs between sales, production & install",
      "Invoicing automated at job completion",
      "Full pipeline visibility for owners and managers",
    ],
    tags: ["Quoting", "Production tracking", "Invoicing"],
    image: buildCollaboration,
    stat: { value: "4 departments", label: "connected in one system" },
  },
  {
    number: "02",
    industry: "Manufacturing",
    year: "2025",
    project: "Manufacturing Dashboard",
    headline: "Plant managers got real-time visibility. Manual reporting disappeared.",
    problem:
      "A manufacturing operation was compiling throughput, downtime, and staffing reports by hand at the end of every shift. Managers were making decisions on yesterday's data. Problems weren't caught until they became expensive.",
    solution:
      "We built a real-time operations dashboard that surfaces throughput, downtime, and staffing insights the moment data is available — with automated alerts for anything outside acceptable ranges.",
    results: [
      "Shift reporting: manual → fully automated",
      "Downtime identified and flagged in real time",
      "Staffing insights updated live throughout the day",
      "Forecasting built in — no spreadsheet needed",
    ],
    tags: ["Real-time KPIs", "Downtime tracking", "Forecasts"],
    image: manufacturingOps,
    stat: { value: "Real-time", label: "vs. end-of-shift manual reports" },
  },
  {
    number: "03",
    industry: "Construction / Field Services",
    year: "2026",
    project: "JobSnap",
    headline: "Field crews stopped losing paperwork. Owners stopped chasing updates.",
    problem:
      "A field services company had crews submitting daily reports via text messages and photos scattered across multiple phones. Owners had no real-time job visibility, documentation was inconsistent, and job photos were impossible to find when needed.",
    solution:
      "We built JobSnap — a mobile-first field operations system where crews submit job photos, daily reports, and live status updates from any device. Everything is organized, searchable, and visible to the office instantly.",
    results: [
      "Daily reports: text chaos → structured, organized, searchable",
      "Job photos automatically tagged and filed per project",
      "Live job status visible to office without calling crews",
      "Mobile-first — works on any device, no training needed",
    ],
    tags: ["Mobile-first", "Daily reports", "Photo logs"],
    image: testimonialSuccess,
    stat: { value: "Any device", label: "from the field, in real time" },
  },
];

const stats = [
  { icon: TrendingUp, value: "247%", label: "Average ROI" },
  { icon: Clock, value: "8 weeks", label: "Average payback period" },
  { icon: Zap, value: "14 hrs/wk", label: "Average time saved" },
  { icon: Users, value: "100%", label: "Client satisfaction" },
];

const testimonials = [
  {
    quote:
      "I kept saying I'd look into automation 'someday.' The audit took 30 minutes and we had a working system in 5 weeks. I wish we'd done it 2 years ago.",
    name: "Sarah M.",
    title: "Operations Director",
  },
  {
    quote:
      "They mapped our entire process and we were live in 3 weeks. The ROI was immediate and obvious. No fluff, no PowerPoints — just a working system.",
    name: "James T.",
    title: "Owner, Manufacturing",
  },
  {
    quote:
      "What I appreciated most is that we own everything. No subscriptions, no vendor lock-in. It just runs — and it keeps running.",
    name: "Maria C.",
    title: "CEO, Field Services",
  },
];

const Results = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>

        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-secondary/90 to-primary/30 py-20 md:py-28 text-white">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 right-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-pulse" />
            <div className="absolute bottom-10 left-20 h-56 w-56 rounded-full bg-accent/10 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          </div>
          <div className="container mx-auto px-6 relative">
            <div className="max-w-3xl animate-fade-in">
              <Badge className="mb-4 bg-primary/20 text-primary-foreground border-primary/30">Our Work</Badge>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Real businesses. Real systems. Real results.
              </h1>
              <p className="text-xl text-white/80 leading-relaxed mb-8">
                Not demos. Not projections. Actual systems we've built — and the operational changes they created.
              </p>
              <Button variant="accent" size="lg" asChild className="hover-scale">
                <a href="/process-audit">
                  Get Your Free Process Audit <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <section className="bg-primary py-10">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
              {stats.map((s) => (
                <div key={s.label} className="animate-fade-in">
                  <s.icon className="mx-auto mb-2 h-6 w-6 text-accent" />
                  <div className="text-3xl font-bold text-accent">{s.value}</div>
                  <div className="text-sm text-white/80 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case studies */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Case Studies</h2>
              <p className="text-muted-foreground text-lg">
                Every project starts with a messy, manual process. Every project ends with a system that runs itself.
              </p>
            </div>

            <div className="space-y-24">
              {caseStudies.map((cs, i) => (
                <div
                  key={cs.number}
                  className="grid md:grid-cols-2 gap-12 items-center animate-fade-in"
                >
                  {/* Image side */}
                  <div className={i % 2 === 1 ? "md:order-2" : ""}>
                    <div className="relative">
                      <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/10 rounded-3xl blur-xl" />
                      <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                        <img src={cs.image} alt={cs.project} className="w-full h-72 object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent flex items-end p-6">
                          <div>
                            <div className="text-accent font-bold text-2xl">{cs.stat.value}</div>
                            <div className="text-white/80 text-sm">{cs.stat.label}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content side */}
                  <div className={i % 2 === 1 ? "md:order-1" : ""}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-5xl font-bold text-muted-foreground/20">№{cs.number}</span>
                      <div>
                        <Badge variant="outline" className="text-xs mb-1">{cs.industry} · {cs.year}</Badge>
                        <h3 className="text-xl font-bold text-primary">{cs.project}</h3>
                      </div>
                    </div>

                    <h4 className="text-2xl font-bold mb-5 leading-tight">{cs.headline}</h4>

                    <div className="mb-4">
                      <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-1">The Problem</p>
                      <p className="text-muted-foreground">{cs.problem}</p>
                    </div>

                    <div className="mb-6">
                      <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-1">What We Built</p>
                      <p className="text-muted-foreground">{cs.solution}</p>
                    </div>

                    <div className="bg-muted/50 rounded-xl p-5 mb-6">
                      <p className="text-sm font-semibold mb-3">Results</p>
                      <ul className="space-y-2">
                        {cs.results.map((r) => (
                          <li key={r} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {cs.tags.map((t) => (
                        <Badge key={t} className="bg-primary/10 text-primary border-primary/20">{t}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">What our clients say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((t) => (
                <div key={t.name} className="bg-background rounded-2xl p-8 shadow-sm hover-scale border border-border animate-fade-in">
                  <div className="text-5xl text-primary/20 font-serif leading-none mb-4">"</div>
                  <p className="text-muted-foreground leading-relaxed mb-6 italic">{t.quote}</p>
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-primary to-primary/80 py-20 text-white text-center">
          <div className="container mx-auto px-6 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Want results like these?</h2>
            <p className="text-white/80 text-xl mb-8 max-w-2xl mx-auto">
              Start with a free 30-minute process audit. We'll map your biggest operational pain points and show you exactly what's worth automating.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" asChild className="hover-scale">
                <a href="/process-audit">Get Your Free Process Audit <ArrowRight className="ml-2 h-5 w-5" /></a>
              </Button>
              <Button variant="outline" size="lg" asChild className="hover-scale border-white text-white hover:bg-white hover:text-primary">
                <a href="tel:+12816998318">(281) 699-8318</a>
              </Button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Results;
