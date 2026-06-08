// === FILE: src/pages/ProcessAudit.tsx ===
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProcessAuditVideo from "@/components/ProcessAuditVideo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
      <Header />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[hsl(222_47%_11%)] text-white py-24 px-6">
        {/* gradient blobs */}
        <div className="pointer-events-none absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full bg-[hsl(186_100%_27%)/20] blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 w-[420px] h-[420px] rounded-full bg-[hsl(42_100%_50%)/15] blur-[100px]" />

        <div className="relative mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in">
            {/* Left — text */}
            <div>
              <div className="inline-block mb-4 rounded-full bg-[hsl(186_100%_27%)/30] px-4 py-1 text-sm font-medium text-[hsl(186_100%_70%)]">
                Free — No Obligation
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                Find Out Exactly What's Costing You{" "}
                <span className="text-[hsl(42_100%_50%)]">Time and Money</span>{" "}
                — Free.
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-8">
                In a free 30-minute call, we map your top 3–5 most painful manual
                processes and show you exactly what can be automated — with projected
                time and cost savings. No pitch. Just a map.
              </p>
              <Link to="/get-started">
                <Button
                  size="lg"
                  className="bg-[hsl(42_100%_50%)] hover:bg-[hsl(42_100%_42%)] text-[hsl(222_47%_11%)] font-bold text-base px-8 py-4 h-auto transition-transform hover:scale-105"
                >
                  Book My Free Process Audit
                </Button>
              </Link>
              <p className="mt-4 text-sm text-slate-400">
                Takes 30 minutes. We bring the analysis. You bring your biggest
                operational headache.
              </p>
            </div>
            {/* Right — image */}
            <div className="relative overflow-hidden hidden md:block">
              <img
                src={consultationHero}
                alt="Professional consultation meeting"
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
            See how it works — 15 seconds
          </p>
          <ProcessAuditVideo />
        </div>
      </section>

      {/* ── What Happens in the Audit ────────────────────────────────────── */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-[hsl(222_47%_11%)] mb-4">
            What Happens in the Audit
          </h2>
          <p className="text-center text-slate-500 mb-12 max-w-xl mx-auto">
            A focused 30-minute Zoom call that ends with a concrete plan in your
            hands.
          </p>

          {/* Banner image above 3 columns */}
          <div className="relative overflow-hidden mb-12">
            <img
              src={buildCollaboration}
              alt="Team collaborating on process audit"
              className="w-full h-64 object-cover rounded-2xl shadow-xl"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "We Listen",
                body: "You walk us through the processes that slow your team down most. No jargon, no prep work required — just your honest frustrations.",
              },
              {
                step: "02",
                title: "We Map It",
                body: "We identify the specific automation opportunities and rank them by ROI — so you know exactly where the biggest wins are hiding.",
              },
              {
                step: "03",
                title: "You Get a Plan",
                body: "A 1-page Automation Opportunity Map: what to automate, in what order, with estimated time and cost savings you can take to your team.",
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
                  <strong>5 automation opportunities with positive ROI</strong>{" "}
                  in your business, the audit costs you nothing. Not a dollar.
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
            Who This Is For
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left — checklist */}
            <div className="space-y-4">
              {[
                "You run a $1M–$5M revenue business",
                "Your team does repetitive manual work every week",
                "You've looked at automation tools but don't know where to start",
                "You want results in 60 days, not a 12-month roadmap",
                "You want to own what gets built — no platform lock-in",
              ].map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-[hsl(186_100%_27%)] flex items-center justify-center text-white text-sm font-bold">
                    ✓
                  </span>
                  <p className="text-lg text-slate-700">{item}</p>
                </div>
              ))}
            </div>
            {/* Right — image */}
            <div className="relative overflow-hidden hidden md:block">
              <img
                src={buildIdealClient}
                alt="Ideal client — business owner at work"
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
            {/* Left — deliverable cards */}
            <div className="grid gap-6">
              {[
                {
                  icon: "🗺️",
                  title: "Automation Opportunity Map",
                  body: "Your top processes ranked by ROI — a clear, one-page document you can act on immediately.",
                },
                {
                  icon: "⏱️",
                  title: "Time Savings Estimate",
                  body: "Hours per week your team gets back when each automation is live.",
                },
                {
                  icon: "💰",
                  title: "Cost Savings Projection",
                  body: "Annual dollar value of automating each process, based on your actual labor costs.",
                },
                {
                  icon: "📋",
                  title: "Priority Sequence",
                  body: "What to fix first, second, and third — so you get the highest ROI fastest.",
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
            {/* Right — image */}
            <div className="relative overflow-hidden hidden md:block">
              <img
                src={consultationResults}
                alt="Consultation results and deliverables"
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
            {/* Left — quote */}
            <div className="text-center md:text-left">
              <div className="text-[hsl(42_100%_50%)] text-5xl mb-6">"</div>
              <blockquote className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-8">
                We were copy-pasting data between 4 systems every morning. The audit
                took 30 minutes and we had a clear plan by the end of the week. The
                automation paid for itself in 6 weeks.
              </blockquote>
              <p className="text-slate-400 text-sm font-medium uppercase tracking-widest">
                — Operations Manager, Houston Manufacturing Co.
              </p>
            </div>
            {/* Right — roadmap image */}
            <div className="relative overflow-hidden hidden md:block">
              <img
                src={consultationRoadmap}
                alt="Roadmap and planning visual"
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
            Book Your Free Process Audit
          </h2>
          <p className="text-center text-slate-500 mb-4">
            Or call us directly:{" "}
            <a
              href="tel:+12816998318"
              className="text-[hsl(186_100%_27%)] font-bold hover:underline"
            >
              (281) 699-8318
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
                  You're on the calendar!
                </h3>
                <p className="text-slate-600">
                  We'll reach out within 1 business day to confirm your 30-minute
                  audit time. Check your email for next steps.
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
                      What's the most painful process in your business right now? *
                    </label>
                    <textarea
                      required
                      name="painProcess"
                      value={form.painProcess}
                      onChange={handleChange}
                      rows={4}
                      placeholder="We manually copy orders from our website into QuickBooks every evening..."
                      className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(186_100%_27%)] resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[hsl(42_100%_50%)] hover:bg-[hsl(42_100%_42%)] text-[hsl(222_47%_11%)] font-bold text-base h-12"
                  >
                    Book My Free Process Audit
                  </Button>
                  <p className="text-center text-xs text-slate-400">
                    No spam. No sales pitch. Just a 30-minute conversation.
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
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "How long does the audit take?",
                a: "30 minutes on Zoom. We keep it tight and respect your time.",
              },
              {
                q: "Is there any cost?",
                a: "No cost, guaranteed. If we can't find at least 5 automation opportunities with positive ROI, you owe nothing.",
              },
              {
                q: "Do I need to prepare anything?",
                a: "Just think of your top 3 time-draining processes before the call. That's it. We'll do the rest.",
              },
              {
                q: "What happens after the audit?",
                a: "You get the Automation Opportunity Map. If you want to move forward, we scope a project together. No pressure — the map is yours to keep regardless.",
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
          Ready to find your hidden hours?
        </h2>
        <p className="text-[hsl(186_100%_85%)] mb-8 max-w-lg mx-auto">
          30 minutes. A clear plan. Zero cost. Zero pressure.
        </p>
        <Link to="/get-started">
          <Button
            size="lg"
            className="bg-white text-[hsl(186_100%_27%)] hover:bg-slate-100 font-bold text-base px-8 h-12 transition-transform hover:scale-105"
          >
            Book My Free Process Audit
          </Button>
        </Link>
      </section>

      <Footer />
    </div>
  );
}
