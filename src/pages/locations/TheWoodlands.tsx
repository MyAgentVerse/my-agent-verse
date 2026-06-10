import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, MapPin, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const painPoints = [
  "After-hours calls go unanswered and leads book your competition",
  "Your team manually follows up on quotes, leads, and appointments",
  "Scheduling takes hours of back-and-forth every week",
  "Weekly reporting pulls your best people away from client work",
  "New customers fall through between inquiry and first appointment",
];

const services = [
  {
    title: "24/7 AI Voice Agent",
    description:
      "An AI answers every call, qualifies the lead, and books the appointment — day or night, weekend or holiday.",
  },
  {
    title: "Automated Lead Nurture",
    description:
      "Every lead gets an instant follow-up and a multi-step sequence that runs until they convert. No leads left behind.",
  },
  {
    title: "Scheduling & Dispatch Automation",
    description:
      "AI handles bookings, reminders, confirmations, and rescheduling automatically — integrated with your existing calendar.",
  },
  {
    title: "Custom AI Systems",
    description:
      "We build end-to-end AI automation tailored to your exact workflows. You own the system outright with no ongoing fees to us.",
  },
];

const industries = [
  "HVAC & Home Services",
  "Real Estate Agents & Brokers",
  "Medical Spas & Healthcare",
  "Professional Services & Consulting",
  "Field Service Companies",
  "Manufacturing & Distribution",
];

const TheWoodlands = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>AI Automation Agency The Woodlands, TX | MyAgentVerse</title>
        <meta
          name="description"
          content="MyAgentVerse is The Woodlands' local AI automation agency. We build custom AI agents for small businesses that handle calls, follow-ups, and workflows 24/7. Free Process Audit."
        />
        <meta property="og:title" content="AI Automation Agency The Woodlands, TX | MyAgentVerse" />
        <meta
          property="og:description"
          content="The Woodlands AI automation agency — custom AI agents for local businesses. 24/7 call handling, lead follow-up automation, and workflow systems. Free Process Audit."
        />
        <meta property="og:url" content="https://myagentverse.com/the-woodlands" />
        <meta property="og:image" content="https://myagentverse.com/social-preview.png" />
        <link rel="canonical" href="https://myagentverse.com/the-woodlands" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "MyAgentVerse",
            "url": "https://myagentverse.com",
            "telephone": "+17135176792",
            "description": "AI automation agency based in The Woodlands, TX — building custom AI agents for local businesses.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "The Woodlands",
              "addressRegion": "TX",
              "addressCountry": "US"
            },
            "areaServed": {
              "@type": "City",
              "name": "The Woodlands",
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
              <span>Based in The Woodlands, TX — Serving the Greater Houston Area</span>
            </div>
            <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
              The Woodlands AI Automation Agency for Local Businesses
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-300 md:text-xl">
              We're your neighbors. MyAgentVerse is based right here in The Woodlands — building custom
              AI agents that run your business 24/7 so you can focus on growth.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8">
                <Link to="/process-audit">Book Free Assessment</Link>
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
              We Know These Problems — Because We're Local
            </h2>
            <p className="mb-12 text-center text-lg text-muted-foreground">
              The Woodlands businesses we work with face the same operational bottlenecks every week.
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
              What We Build for The Woodlands Businesses
            </h2>
            <p className="mb-12 text-center text-lg text-muted-foreground">
              Every system is built specifically for your business. No templates, no cookie-cutter tools.
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
              Industries We Serve in The Woodlands Area
            </h2>
            <p className="mb-10 text-lg text-muted-foreground">
              We work with businesses where automation has the clearest, fastest ROI.
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

        {/* Local Trust */}
        <section className="py-20 px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
              Your Local AI Partner — Not a Faceless Agency
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Local & Reachable",
                  body: "We're based in The Woodlands. We're easy to reach, we know your market, and we show up when it matters.",
                },
                {
                  title: "You Own Everything",
                  body: "Every system we build is yours. No platform lock-in, no monthly fees to us. The IP and infrastructure belong to you.",
                },
                {
                  title: "Live in 2–4 Weeks",
                  body: "We move fast. Most clients have their first AI system running in under 30 days from our first conversation.",
                },
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
              Let's Talk About Your Business
            </h2>
            <p className="mb-8 text-lg text-gray-300">
              Book a free Bottleneck Assessment. We'll map out exactly where your operation is losing time and money
              and show you the ROI — no obligation, no pressure.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8">
                <Link to="/process-audit">
                  Book Free Assessment <ArrowRight className="ml-2 h-4 w-4" />
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

export default TheWoodlands;
