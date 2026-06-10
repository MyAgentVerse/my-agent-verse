// === FILE: src/pages/GetStarted.tsx ===
import { Helmet } from "react-helmet";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import founderJourney from "@/assets/founder-journey.jpg";
import consultationHero from "@/assets/consultation-hero.jpg";
import buildCollaboration from "@/assets/build-collaboration.jpg";
import heroAiWorkspace from "@/assets/hero-ai-workspace.jpg";
import consultationResults from "@/assets/consultation-results.jpg";

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const initialForm: ContactForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function GetStarted() {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Helmet>
        <title>Get Started with AI Automation | MyAgentVerse</title>
        <meta name="description" content="Ready to automate your business? Get started with MyAgentVerse — book your free Bottleneck Assessment and see exactly where your business is losing time and money." />
        <meta property="og:title" content="Get Started with AI Automation | MyAgentVerse" />
        <meta property="og:description" content="Start with a free 60-minute Bottleneck Assessment. No pitch, no pressure — just a clear map of what to fix first." />
        <meta property="og:url" content="https://myagentverse.com/get-started" />
        <meta property="og:image" content="https://myagentverse.com/social-preview.png" />
        <link rel="canonical" href="https://myagentverse.com/get-started" />
      </Helmet>
      <Header />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[hsl(222_47%_11%)] text-white py-24 px-6">
        <div className="pointer-events-none absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-[hsl(186_100%_27%)/20] blur-[110px]" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 w-[380px] h-[380px] rounded-full bg-[hsl(42_100%_50%)/12] blur-[90px]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in">
            {/* Left — text */}
            <div>
              <div className="inline-block mb-4 rounded-full bg-[hsl(186_100%_27%)/30] px-4 py-1 text-sm font-medium text-[hsl(186_100%_70%)]">
                No Sales Pitch
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                Let's Talk About{" "}
                <span className="text-[hsl(42_100%_50%)]">Your Business.</span>
              </h1>
              <p className="text-lg text-slate-300 max-w-xl">
                No sales pitch. Just a real conversation about what's slowing you down
                and whether we can help.
              </p>
            </div>
            {/* Right — image */}
            <div className="relative overflow-hidden hidden md:block">
              <img
                src={founderJourney}
                alt="Founder or business owner at work"
                className="h-[400px] w-full object-cover rounded-2xl shadow-xl"
                style={{ boxShadow: "0 0 40px 0 hsl(186 100% 27% / 0.35)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Two Options ──────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Option A — Primary */}
            <Card className="border-2 border-[hsl(186_100%_27%)] shadow-lg flex flex-col overflow-hidden">
              {/* Card top image */}
              <div className="relative overflow-hidden">
                <img
                  src={consultationHero}
                  alt="Professional consultation meeting"
                  className="h-40 w-full object-cover rounded-xl"
                />
              </div>
              <CardContent className="p-9 flex flex-col flex-1">
                <div className="inline-block mb-4 rounded-full bg-[hsl(186_100%_27%)] text-white text-xs font-bold px-3 py-1 uppercase tracking-wide w-fit">
                  Most Popular
                </div>
                <h2 className="text-2xl font-bold text-[hsl(222_47%_11%)] mb-3">
                  Book Free Bottleneck Assessment
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6 flex-1">
                  In 60 minutes on Zoom, we map your top 3–5 most painful manual
                  processes and show you exactly what can be automated — with
                  projected time and cost savings. You walk away with a concrete
                  plan, guaranteed.
                </p>
                <ul className="space-y-2 mb-8">
                  {[
                    "60-minute Zoom call",
                    "Automation Opportunity Map included",
                    "Zero cost, zero obligation",
                    "Guaranteed 5 bottlenecks worth fixing or it's free",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                      <span className="w-5 h-5 rounded-full bg-[hsl(186_100%_27%)] flex items-center justify-center text-white text-xs flex-shrink-0">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/process-audit">
                  <Button
                    size="lg"
                    className="w-full bg-[hsl(186_100%_27%)] hover:bg-[hsl(186_100%_22%)] text-white font-bold text-base h-12 transition-transform hover:scale-[1.02]"
                  >
                    Book Free Bottleneck Assessment
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Option B — Secondary */}
            <Card className="border border-slate-200 shadow-md flex flex-col overflow-hidden">
              {/* Card top image */}
              <div className="relative overflow-hidden">
                <img
                  src={buildCollaboration}
                  alt="Team collaborating"
                  className="h-40 w-full object-cover rounded-xl"
                />
              </div>
              <CardContent className="p-9 flex flex-col flex-1">
                <div className="inline-block mb-4 rounded-full bg-slate-100 text-slate-600 text-xs font-bold px-3 py-1 uppercase tracking-wide w-fit">
                  Quick Question
                </div>
                <h2 className="text-2xl font-bold text-[hsl(222_47%_11%)] mb-3">
                  Just have a question?
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6 flex-1">
                  Not ready for an audit call? That's fine. Drop us a message
                  below and we'll reply within one business day — usually same
                  day.
                </p>
                <div className="mt-auto">
                  <a href="#contact-form">
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full border-[hsl(186_100%_27%)] text-[hsl(186_100%_27%)] hover:bg-[hsl(186_100%_27%)/8] font-bold text-base h-12"
                    >
                      Use the Contact Form Below
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ── Contact Form ─────────────────────────────────────────────────── */}
      <section id="contact-form" className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-[hsl(222_47%_11%)] mb-3">
            Send Us a Message
          </h2>
          <p className="text-center text-slate-500 mb-10 text-sm">
            We read every message personally and respond within 1 business day.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left — form */}
            <div>
              {submitted ? (
                <Card className="border-0 shadow-lg bg-[hsl(186_100%_27%)/8]">
                  <CardContent className="p-10 text-center">
                    <div className="text-5xl mb-4">✅</div>
                    <h3 className="text-2xl font-bold text-[hsl(222_47%_11%)] mb-2">
                      Message received!
                    </h3>
                    <p className="text-slate-600">
                      We'll be in touch within 1 business day. For faster response,
                      call us at{" "}
                      <a
                        href="tel:+17135176792"
                        className="text-[hsl(186_100%_27%)] font-bold hover:underline"
                      >
                        (713) 517-6792
                      </a>
                      .
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border border-slate-200 shadow-md">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1">
                            Name *
                          </label>
                          <input
                            required
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Jane Smith"
                            className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(186_100%_27%)]"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1">
                            Email *
                          </label>
                          <input
                            required
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="jane@acme.com"
                            className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(186_100%_27%)]"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                          Phone
                        </label>
                        <input
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="(281) 555-0100"
                          className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(186_100%_27%)]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                          Message *
                        </label>
                        <textarea
                          required
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          rows={5}
                          placeholder="Tell us a bit about your business and what you're trying to solve..."
                          className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(186_100%_27%)] resize-none"
                        />
                      </div>
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-[hsl(42_100%_50%)] hover:bg-[hsl(42_100%_42%)] text-[hsl(222_47%_11%)] font-bold text-base h-12"
                      >
                        Send Message
                      </Button>
                      <p className="text-center text-xs text-slate-400">
                        No spam. We respond within 1 business day.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Right — decorative AI workspace image (hidden on mobile) */}
            <div className="relative overflow-hidden hidden md:block">
              <img
                src={heroAiWorkspace}
                alt="Modern AI workspace"
                className="w-full h-full object-cover rounded-2xl shadow-xl"
                style={{ minHeight: "420px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Direct Contact ───────────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-center text-[hsl(222_47%_11%)] mb-6">
            Prefer to reach out directly?
          </h2>

          {/* Decorative image above contact cards */}
          <div className="relative overflow-hidden mb-10 max-w-sm mx-auto">
            <img
              src={consultationResults}
              alt="Consultation results visual"
              className="w-full h-40 object-cover rounded-2xl shadow-xl"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            {[
              {
                icon: "📞",
                label: "Phone",
                value: "(713) 517-6792",
                href: "tel:+17135176792",
              },
              {
                icon: "📍",
                label: "Location",
                value: "The Woodlands, TX",
                href: null,
              },
              {
                icon: "✉️",
                label: "Email",
                value: "hello@myagentverse.com",
                href: "mailto:hello@myagentverse.com",
              },
            ].map(({ icon, label, value, href }) => (
              <Card key={label} className="border border-slate-200 shadow-sm">
                <CardContent className="p-7">
                  <div className="text-3xl mb-3">{icon}</div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="text-[hsl(186_100%_27%)] font-bold hover:underline"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="font-bold text-[hsl(222_47%_11%)]">{value}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center text-[hsl(222_47%_11%)] mb-12">
            Quick Answers
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Where are you located?",
                a: "We're based in The Woodlands, TX. We work with businesses locally and remotely across the US — most of our work happens on Zoom.",
              },
              {
                q: "How quickly do you respond?",
                a: "Within 1 business day, usually same day. For urgent matters, call us directly at (713) 517-6792.",
              },
              {
                q: "How do I know if my business is a good fit?",
                a: "If your team does repetitive manual work every week and you want it gone, you're a fit. The best way to find out is a free 60-minute Bottleneck Assessment — no obligation, no pitch.",
              },
            ].map(({ q, a }) => (
              <Card key={q} className="border border-slate-200 shadow-sm">
                <CardContent className="p-7">
                  <h3 className="font-bold text-[hsl(222_47%_11%)] mb-2">{q}</h3>
                  <p className="text-slate-600 leading-relaxed">{a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-[hsl(186_100%_27%)] text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Still on the fence?</h2>
        <p className="text-[hsl(186_100%_85%)] mb-8 max-w-lg mx-auto">
          The audit is free. The plan is yours to keep. The only downside is
          finding out how much time you've been leaving on the table.
        </p>
        <Link to="/process-audit">
          <Button
            size="lg"
            className="bg-white text-[hsl(186_100%_27%)] hover:bg-slate-100 font-bold text-base px-10 h-12 transition-transform hover:scale-105"
          >
            Book Free Bottleneck Assessment
          </Button>
        </Link>
      </section>

      <Footer />
    </div>
  );
}
