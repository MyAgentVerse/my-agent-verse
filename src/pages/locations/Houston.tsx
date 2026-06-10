import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, MapPin, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const painPoints = [
  "Leads come in after hours and nobody answers",
  "Your team spends hours on follow-up calls and data entry",
  "Scheduling jobs, appointments, and meetings eats your day",
  "Reporting takes hours that should go to actual work",
  "Customers fall through the cracks between quote and close",
];

const services = [
  {
    title: "24/7 AI Voice Agent",
    description:
      "Never miss a call again. Our AI answers, qualifies, and books appointments around the clock — even on weekends and holidays.",
  },
  {
    title: "Automated Lead Follow-Up",
    description:
      "Every new lead gets an instant response via text and email. Multi-step nurture sequences run on autopilot until they book.",
  },
  {
    title: "Workflow & Scheduling Automation",
    description:
      "AI handles appointment booking, dispatch scheduling, reminders, and confirmations so your team focuses on the work.",
  },
  {
    title: "Custom AI Build",
    description:
      "We design and deploy a fully custom AI system tailored to your Houston business's exact processes. You own it outright.",
  },
];

const industries = [
  "HVAC & Home Services",
  "Real Estate & Property Management",
  "Manufacturing & Distribution",
  "Professional Services",
  "Field Service Companies",
  "Healthcare & Med Spas",
];

const Houston = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>AI Automation Agency Houston, TX | MyAgentVerse</title>
        <meta
          name="description"
          content="MyAgentVerse is Houston's AI automation agency for small and mid-size businesses. We build custom AI agents that handle calls, follow-ups, and workflows 24/7. Free Process Audit."
        />
        <meta property="og:title" content="AI Automation Agency Houston, TX | MyAgentVerse" />
        <meta
          property="og:description"
          content="Houston AI automation agency building custom AI agents for $1M–$5M businesses. 24/7 call handling, lead follow-up, and workflow automation. Free Process Audit."
        />
        <meta property="og:url" content="https://myagentverse.com/houston" />
        <meta property="og:image" content="https://myagentverse.com/social-preview.png" />
        <link rel="canonical" href="https://myagentverse.com/houston" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "MyAgentVerse",
            "url": "https://myagentverse.com",
            "telephone": "+17135176792",
            "description": "AI automation agency serving Houston, TX businesses with custom AI agents for calls, follow-ups, and workflow automation.",
            "areaServed": {
              "@type": "City",
              "name": "Houston",
              "containedInPlace": { "@type": "State", "name": "Texas" }
            }
          }
        `}</script>
      </Helmet>

      <Header />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-[hsl(222_47%_11%)] py-24 px-6 text-white md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 flex items-center justify-center gap-2 text-sm font-medium text-teal-400">
              <MapPin className="h-4 w-4" />
              <span>Serving Houston, TX & Greater Houston Area</span>
            </div>
            <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
              Houston's AI Automation Agency for Growing Businesses
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-300 md:text-xl">
              We build custom 24/7 AI agents that handle your calls, follow up every lead, and automate
              your workflows — so your Houston business runs leaner and grows faster.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8">
                <Link to="/process-audit">Get Your Free Process Audit</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <a href="tel:+17135176792">
                  <Phone className="mr-2 h-4 w-4" />
                  (713) 517-6792
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
              Sound familiar, Houston?
            </h2>
            <p className="mb-12 text-center text-lg text-muted-foreground">
              These are the top operational bottlenecks we solve for Houston-area businesses every week.
            </p>
            <ul className="mx-auto max-w-2xl space-y-4">
              {painPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal-600" />
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 px-6">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
              What We Build for Houston Businesses
            </h2>
            <p className="mb-12 text-center text-lg text-muted-foreground">
              Every system is custom-built for your business. You own it outright — no monthly platform fees to us.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {services.map(({ title, description }) => (
                <div key={title} className="rounded-xl border bg-card p-6">
                  <h3 className="mb-3 text-xl font-bold">{title}</h3>
                  <p className="text-muted-foreground">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Industries We Serve in Houston
            </h2>
            <p className="mb-10 text-lg text-muted-foreground">
              We specialize in industries where manual bottlenecks are costing real money.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {industries.map((industry) => (
                <span
                  key={industry}
                  className="rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-medium text-teal-800"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Why MyAgentVerse */}
        <section className="py-20 px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
              Why Houston Businesses Choose MyAgentVerse
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                { title: "You Own It", body: "No lock-in. The AI system is yours after we build it. No ongoing fees to us — forever." },
                { title: "Fast Deployment", body: "Most systems go live in 2–4 weeks. We move fast and keep you in the loop every step." },
                { title: "Texas-Based Team", body: "We're local. We understand the Houston business landscape and we're easy to reach." },
              ].map(({ title, body }) => (
                <div key={title} className="rounded-xl border bg-card p-6 text-center">
                  <h3 className="mb-3 text-lg font-bold">{title}</h3>
                  <p className="text-sm text-muted-foreground">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-[hsl(222_47%_11%)] text-white text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Ready to Automate Your Houston Business?
            </h2>
            <p className="mb-8 text-lg text-gray-300">
              Book a free Process Audit. We'll identify your biggest automation opportunities and show you
              exactly what's possible — no obligation, no sales pressure.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8">
                <Link to="/process-audit">
                  Book Free Process Audit <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Houston;
