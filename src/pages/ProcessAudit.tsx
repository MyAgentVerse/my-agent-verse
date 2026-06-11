// === FILE: src/pages/ProcessAudit.tsx ===
import { Helmet } from "react-helmet";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProcessAuditVideo from "@/components/ProcessAuditVideo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLeadSubmission } from "@/hooks/useLeadSubmission";
import guaranteeBadge from "@/assets/guarantee-badge.png";
import consultationHero from "@/assets/consultation-hero.jpg";
import buildCollaboration from "@/assets/build-collaboration.jpg";
import buildIdealClient from "@/assets/build-ideal-client.jpg";
import consultationResults from "@/assets/consultation-results.jpg";
import consultationRoadmap from "@/assets/consultation-roadmap.jpg";

interface FormState {
  name: string;
  company: string;
  phone: string;
  email: string;
  painProcess: string;
}

const initialForm: FormState = {
  name: "",
  company: "",
  phone: "",
  email: "",
  painProcess: "",
};

export default function ProcessAudit() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { submitLead } = useLeadSubmission();

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    // Never let the form hang — resolve within 10 s regardless of Supabase status
    const timeoutFallback = new Promise<{ success: boolean }>((resolve) =>
      setTimeout(() => resolve({ success: false }), 10000)
    );

    try {
      await Promise.race([
        submitLead({
          name: form.name,
          email: form.email,
          phone: form.phone || undefined,
          company_name: form.company || undefined,
          form_type: "consultation",
          custom_fields: {
            pain_process: form.painProcess,
            source: "/process-audit",
          },
        }),
        timeoutFallback,
      ]);
    } catch (err) {
      console.error("Form submission error:", err);
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Helmet>
        <title>Free Business Bottleneck Assessment | MyAgentVerse</title>
        <meta
          name="description"
          content="Book your free Business Bottleneck Assessment. We find the operational bottleneck that's costing your business the most time and money, then show you exactly how to fix it. The Woodlands, TX."
        />
        <meta
          property="og:title"
          content="Free Business Bottleneck Assessment | MyAgentVerse"
        />
        <meta
          property="og:description"
          content="Find out exactly where your business is losing time and money. Free 60-minute session, written findings, no obligation."
        />
        <meta
          property="og:url"
          content="https://myagentverse.com/process-audit"
        />
        <meta
          property="og:image"
          content="https://myagentverse.com/social-preview.png"
        />
        <link rel="canonical" href="https://myagentverse.com/process-audit" />
      </Helmet>
      <Header />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[hsl(222_47%_11%)] text-white py-24 px-6">
        <div className="pointer-events-none absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full bg-[hsl(186_100%_27%)/20] blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 w-[420px] h-[420px] rounded-full bg-[hsl(42_100%_50%)/15] blur-[100px]" />

        <div className="relative mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in">
            <div>
              <div className="inline-block mb-4 rounded-full bg-[hsl(186_100%_27%)/30] px-4 py-1 text-sm font-medium text-[hsl(186_100%_70%)]">
                Free. No Obligation.
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                Your Business Has a Bottleneck.{" "}
                <span className="text-[hsl(42_100%_50%)]">
                  Let's Find It Together.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-8">
                In a free 60-minute session, we map your operation, identify the
                bottlenecks costing you the most time and money, and give you a
                clear plan to fix them. You leave with a written report
                regardless of what you decide to do next.
              </p>
              <a href="#book">
                <Button
                  size="lg"
                  className="bg-[hsl(42_100%_50%)] hover:bg-[hsl(42_100%_42%)] text-[hsl(222_47%_11%)] font-bold text-base px-8 py-4 h-auto transition-transform hover:scale-105"
                >
                  Book Free Bottleneck Assessment
                </Button>
              </a>
              <p className="mt-4 text-sm text-slate-400">
                60 minutes. Written findings. Zero pressure.
              </p>
            </div>
            <div className="relative overflow-hidden hidden md:block">
              <img
                src={consultationHero}
                alt="Business bottleneck assessment session"
                className="h-[420px] w-full object-cover rounded-2xl shadow-xl"
                style={{ boxShadow: "0 0 40px 0 hsl(186 100% 27% / 0.35)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Video Demo ───────────────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-[hsl(222_47%_11%)]">
        <div className="mx-auto max-w-4xl">
          <p className="text-center text-slate-400 text-sm uppercase tracking-widest mb-6 font-medium">
            See how it works
          </p>
          <ProcessAuditVideo />
        </div>
      </section>

      {/* ── What Happens in the Session ──────────────────────────────────── */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-[hsl(222_47%_11%)] mb-4">
            What Happens in the Assessment
          </h2>
          <p className="text-center text-slate-500 mb-12 max-w-xl mx-auto">
            A focused 60-minute session that ends with a written bottleneck
            report and a clear path forward.
          </p>

          <div className="relative overflow-hidden mb-12">
            <img
              src={buildCollaboration}
              alt="Business assessment session"
              className="w-full h-64 object-cover rounded-2xl shadow-xl"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "We Map Your Operation",
                body: "You walk us through how your business runs day to day. What your team does, where things slow down, what falls through the cracks. No prep required.",
              },
              {
                step: "02",
                title: "We Find the Bottlenecks",
                body: "We identify the specific constraints limiting your growth and rank them by the impact they're having on your time, your team, and your revenue.",
              },
              {
                step: "03",
                title: "You Get a Written Plan",
                body: "A clear, one-page Bottleneck Report showing what's slowing you down, what to fix first, and what the fix could realistically save you. Yours to keep.",
              },
            ].map(({ step, title, body }) => (
              <Card
                key={step}
                className="border-0 shadow-md hover:shadow-xl transition-shadow hover:scale-[1.02] transition-transform"
              >
                <CardContent className="p-8">
                  <div className="text-4xl font-black text-[hsl(186_100%_27%)/20] mb-3">
                    {step}
                  </div>
                  <h3 className="text-xl font-bold text-[hsl(222_47%_11%)] mb-3">
                    {title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Guarantee ────────────────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-[hsl(186_100%_27%)]">
        <div className="mx-auto max-w-3xl">
          <Card className="border-0 shadow-2xl">
            <CardContent className="p-10 flex flex-col md:flex-row items-center gap-8">
              <img
                src={guaranteeBadge}
                alt="Guarantee badge"
                className="w-28 h-28 object-contain flex-shrink-0"
              />
              <div>
                <h2 className="text-2xl font-extrabold text-[hsl(222_47%_11%)] mb-3">
                  Our Guarantee
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed">
                  If we can't identify at least{" "}
                  <strong>5 bottlenecks worth fixing</strong> in your business,
                  the session costs you nothing. Not a dollar. Not even your
                  time, because you'll walk away with something useful no matter
                  what.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ── Who This Is For ──────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-[hsl(222_47%_11%)] mb-10 text-center">
            This Is For You If
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              {[
                "You own or run a service-based business",
                "Your team spends time on repetitive work that could be automated",
                "You're missing leads, calls, or follow-ups because nobody has the bandwidth",
                "You want to grow but don't want to just keep adding headcount",
                "You want results in weeks, not a 12-month roadmap",
                "You want to own whatever gets built with no platform lock-in",
              ].map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-[hsl(186_100%_27%)] flex items-center justify-center text-white text-sm font-bold">
                    ✓
                  </span>
                  <p className="text-lg text-slate-700">{item}</p>
                </div>
              ))}
            </div>
            <div className="relative overflow-hidden hidden md:block">
              <img
                src={buildIdealClient}
                alt="Business owner at work"
                className="w-full h-[380px] object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── What You Walk Away With ───────────────────────────────────────── */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-[hsl(222_47%_11%)] mb-12">
            What You Walk Away With
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="grid gap-6">
              {[
                {
                  icon: "🗺️",
                  title: "Bottleneck Report",
                  body: "A clear, one-page document showing your top bottlenecks ranked by the impact they're having on your time, team, and revenue.",
                },
                {
                  icon: "⏱️",
                  title: "Time Savings Estimate",
                  body: "How many hours per week your team gets back when each bottleneck is removed. Real numbers based on your actual operation.",
                },
                {
                  icon: "💰",
                  title: "Cost Savings Projection",
                  body: "The annual dollar value of fixing each bottleneck, based on your labor costs and the volume of work involved.",
                },
                {
                  icon: "📋",
                  title: "Priority Action Plan",
                  body: "What to fix first, second, and third so you get the highest return as fast as possible. A sequenced roadmap, not a vague suggestion.",
                },
              ].map(({ icon, title, body }) => (
                <Card
                  key={title}
                  className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-7 flex gap-5">
                    <span className="text-3xl flex-shrink-0">{icon}</span>
                    <div>
                      <h3 className="font-bold text-[hsl(222_47%_11%)] text-lg mb-1">
                        {title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {body}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="relative overflow-hidden hidden md:block">
              <img
                src={consultationResults}
                alt="Assessment deliverables"
                className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonial ──────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-[hsl(222_47%_11%)]">
        <div className="mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <div className="text-[hsl(42_100%_50%)] text-5xl mb-6">"</div>
              <blockquote className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-8">
                We were copy-pasting data between 4 systems every morning. The
                assessment took 60 minutes and we had a clear plan by the end of
                the call. The automation paid for itself in 6 weeks.
              </blockquote>
              <p className="text-slate-400 text-sm font-medium uppercase tracking-widest">
                Operations Manager, Houston Manufacturing Co.
              </p>
            </div>
            <div className="relative overflow-hidden hidden md:block">
              <img
                src={consultationRoadmap}
                alt="Business planning session"
                className="w-full h-72 object-cover rounded-2xl shadow-xl opacity-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Booking Form ─────────────────────────────────────────────────── */}
      <section id="book" className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold text-center text-[hsl(222_47%_11%)] mb-3">
            Book Your Free Business Bottleneck Assessment
          </h2>
          <p className="text-center text-slate-500 mb-4">
            Or call us directly:{" "}
            <a
              href="tel:+17135176792"
              className="text-[hsl(186_100%_27%)] font-bold hover:underline"
            >
              (713) 517-6792
            </a>
          </p>
          <p className="text-center text-slate-400 text-sm mb-10">
            The Woodlands, TX · We also work with businesses remotely
          </p>

          {submitted ? (
            <Card className="border-0 shadow-lg bg-[hsl(186_100%_27%)/8]">
              <CardContent className="p-10 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-[hsl(222_47%_11%)] mb-2">
                  You're on the calendar.
                </h3>
                <p className="text-slate-600">
                  We'll reach out within 1 business day to confirm your session
                  time. Check your email for next steps.
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
                        Company *
                      </label>
                      <input
                        required
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Acme Inc."
                        className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(186_100%_27%)]"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
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
                      What's the biggest bottleneck in your business right now? *
                    </label>
                    <textarea
                      required
                      name="painProcess"
                      value={form.painProcess}
                      onChange={handleChange}
                      rows={4}
                      placeholder="We manually copy orders from our website into QuickBooks every evening. It takes two hours and someone always makes an error..."
                      className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(186_100%_27%)] resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className="w-full bg-[hsl(42_100%_50%)] hover:bg-[hsl(42_100%_42%)] text-[hsl(222_47%_11%)] font-bold text-base h-12 disabled:opacity-60"
                  >
                    {loading ? "Submitting…" : "Book Free Bottleneck Assessment"}
                  </Button>
                  <p className="text-center text-xs text-slate-400">
                    No spam. No sales pitch. Just a 60-minute conversation that
                    could change how your business operates.
                  </p>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center text-[hsl(222_47%_11%)] mb-12">
            Common Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "How long does the session take?",
                a: "60 minutes on Zoom. We use the full time. You'll leave with a written report, not just a conversation.",
              },
              {
                q: "Is there any cost?",
                a: "None. If we can't find at least 5 bottlenecks worth fixing in your business, the session is free. If we do find them, the report is still yours to keep with no obligation to hire us.",
              },
              {
                q: "Do I need to prepare anything?",
                a: "Just think about where your team loses the most time in a typical week. That's it. We'll ask the right questions and map the rest.",
              },
              {
                q: "What happens after the assessment?",
                a: "You get your Bottleneck Report. If you want to move forward, we put together a scoped proposal. If you don't, you still have a clear picture of what to fix and in what order. No pressure either way.",
              },
              {
                q: "What kind of businesses do you work with?",
                a: "Service-based businesses across any industry: HVAC, healthcare, dental, real estate, law firms, manufacturing, field service, professional services. If your team is doing manual work that slows you down, we can help.",
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
        <h2 className="text-3xl font-bold mb-4">
          Stop letting bottlenecks hold back your growth.
        </h2>
        <p className="text-[hsl(186_100%_85%)] mb-8 max-w-lg mx-auto">
          60 minutes. A written plan. Zero cost. Zero pressure.
        </p>
        <a href="#book">
          <Button
            size="lg"
            className="bg-white text-[hsl(186_100%_27%)] hover:bg-slate-100 font-bold text-base px-8 h-12 transition-transform hover:scale-105"
          >
            Book Free Bottleneck Assessment
          </Button>
        </a>
      </section>

      <Footer />
    </div>
  );
}
