import { useState } from "react";
import { Button } from "@/components/ui/button";
import { HF } from "@/lib/hf-images";

const PHONE = "(713) 517-6792";
const PHONE_HREF = "tel:+17135176792";
const CTA_HREF = "/process-audit";

// ─── Brand tokens ────────────────────────────────────────────────────────────
const teal = "hsl(186 100% 27%)";
const amber = "hsl(42 100% 50%)";
const dark = "hsl(222 47% 11%)";

export default function LandingPage() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    headache: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen font-sans antialiased">
      {/* ── Sticky mini-bar ──────────────────────────────────────────────── */}
      <div
        className="sticky top-0 z-50 flex items-center justify-between px-6 py-3 shadow-md"
        style={{ backgroundColor: dark }}
      >
        <span className="text-white font-bold text-lg tracking-tight">
          MyAgent<span style={{ color: amber }}>Verse</span>
        </span>
        <a
          href={PHONE_HREF}
          className="text-sm font-semibold"
          style={{ color: amber }}
        >
          {PHONE}
        </a>
      </div>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: dark }}
      >
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 flex flex-col lg:flex-row items-center gap-12">
          {/* Copy */}
          <div className="flex-1 max-w-2xl">
            {/* Badge */}
            <span
              className="inline-block rounded-full px-4 py-1 text-xs font-semibold tracking-wide mb-6"
              style={{ backgroundColor: `${teal}33`, color: amber }}
            >
              Free · No Commitment · The Woodlands, TX
            </span>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight mb-6">
              Find Out Exactly What's Costing You Time and Money —{" "}
              <span style={{ color: amber }}>Free.</span>
            </h1>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              In a free 30-minute call, we map your top 3–5 most painful manual
              processes and show you exactly what can be automated — with
              projected time and cost savings.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={CTA_HREF}>
                <Button
                  size="lg"
                  className="text-base font-bold px-8 py-6 rounded-xl shadow-lg hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: amber, color: dark }}
                >
                  Book My Free Process Audit →
                </Button>
              </a>
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center gap-2 text-white font-semibold text-base underline underline-offset-4 hover:text-amber-400 transition-colors"
                style={{ color: "white" }}
              >
                <span>📞</span> {PHONE}
              </a>
            </div>
          </div>

          {/* Hero image — desktop only */}
          <div className="hidden lg:block flex-1 max-w-lg">
            <img
              src={HF.painChaos}
              alt="Overwhelmed business owner buried in manual work"
              className="rounded-2xl shadow-2xl w-full object-cover"
              style={{ aspectRatio: "16/9" }}
            />
          </div>
        </div>
      </section>

      {/* ── Social proof bar ─────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "hsl(222 47% 8%)" }}>
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { stat: "8–19 hrs/week", label: "saved per team" },
            { stat: "60 days", label: "to first results" },
            { stat: "200–300% ROI", label: "typical return" },
            { stat: "5 wins", label: "guaranteed in audit" },
          ].map(({ stat, label }) => (
            <div key={stat}>
              <p
                className="text-3xl font-extrabold mb-1"
                style={{ color: amber }}
              >
                {stat}
              </p>
              <p className="text-gray-400 text-sm">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Pain section ─────────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4" style={{ color: dark }}>
            Sound familiar?
          </h2>
          <p className="text-center text-gray-500 mb-12 text-lg">
            If any of these hit close to home, you're leaving money on the table
            every single day.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "My best people spend half their day on admin work.",
              "We're manually copying data between 3 systems every single day.",
              "I follow up with leads by hand and half fall through the cracks.",
            ].map((quote) => (
              <div
                key={quote}
                className="rounded-xl p-6 border-l-4 bg-red-50"
                style={{ borderColor: "#dc2626" }}
              >
                <p className="text-gray-800 text-lg font-medium leading-snug">
                  "{quote}"
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href={CTA_HREF}>
              <Button
                size="lg"
                className="text-base font-bold px-8 py-6 rounded-xl hover:opacity-90 transition-opacity"
                style={{ backgroundColor: amber, color: dark }}
              >
                Book My Free Process Audit →
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ── What you get ─────────────────────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: teal }}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-4">
            What you walk away with
          </h2>
          <p className="text-center text-teal-100 mb-12 text-lg">
            A complete picture of your automation opportunity — in 30 minutes,
            free.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🗺️",
                title: "Automation Opportunity Map",
                desc: "Your top processes ranked by ROI so you know exactly where to start — and what to skip.",
              },
              {
                icon: "⏱️",
                title: "Time Savings Estimate",
                desc: "Hours per week your team gets back, broken down by role and process so it's impossible to ignore.",
              },
              {
                icon: "💰",
                title: "Cost Savings Projection",
                desc: "Annual dollar value with a clear payback period. Take it to your CFO or board with confidence.",
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl p-8 bg-white/10 backdrop-blur-sm border border-white/20 text-white"
              >
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="text-xl font-bold mb-3">{title}</h3>
                <p className="text-teal-100 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Case study strip ─────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2
            className="text-2xl font-bold text-center mb-10"
            style={{ color: dark }}
          >
            Real Result · Houston HVAC Contractor
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-10 bg-gray-50 rounded-2xl overflow-hidden shadow-md">
            {/* Image */}
            <div className="md:w-2/5 flex-shrink-0">
              <img
                src={HF.hvacTech}
                alt="HVAC technician using dispatch app on tablet"
                className="w-full h-full object-cover"
                style={{ minHeight: "280px" }}
              />
            </div>

            {/* Content */}
            <div className="flex-1 p-8 md:pr-10">
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-2">
                Problem
              </p>
              <p className="text-gray-700 mb-6">
                Spending 3 hours every Monday morning manually scheduling
                dispatch and building quotes in spreadsheets.
              </p>

              <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-2">
                Result
              </p>
              <div className="space-y-3">
                {[
                  { label: "Time saved", value: "14 hrs/week" },
                  { label: "Quote response time", value: "4 hrs → 8 min" },
                  { label: "Quote acceptance rate", value: "+23%" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-center gap-3">
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: teal }}
                    />
                    <span className="text-gray-600">{label}:</span>
                    <span
                      className="font-bold"
                      style={{ color: teal }}
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Guarantee ────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: amber }} className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-5xl mb-6">🛡️</div>
          <h2
            className="text-3xl lg:text-4xl font-extrabold mb-6 leading-tight"
            style={{ color: dark }}
          >
            If we can't find 5 automation opportunities with positive ROI in
            your business — the audit is completely free.
          </h2>
          <p className="text-lg mb-8" style={{ color: "hsl(222 47% 20%)" }}>
            No risk. No obligation. Just clarity.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-base font-semibold" style={{ color: dark }}>
            {[
              "No sales pitch",
              "Written findings same day",
              "You own everything we recommend",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="text-green-700 text-xl">✓</span>
                {item}
              </div>
            ))}
          </div>

          <div className="mt-10">
            <a href={CTA_HREF}>
              <Button
                size="lg"
                className="text-base font-bold px-10 py-6 rounded-xl hover:opacity-90 transition-opacity shadow-lg"
                style={{ backgroundColor: dark, color: amber }}
              >
                Book My Free Process Audit →
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ── Form section ─────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: dark }} className="py-20">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white text-center mb-3">
            Book Your Free 30-Minute Process Audit
          </h2>
          <p className="text-gray-400 text-center mb-10">
            Fill out the form below and we'll reach out within 1 business day to
            schedule your call.
          </p>

          {submitted ? (
            <div
              className="rounded-2xl p-10 text-center border"
              style={{ borderColor: teal, backgroundColor: `${teal}22` }}
            >
              <div className="text-5xl mb-4">✅</div>
              <p className="text-white text-xl font-bold mb-2">You're in!</p>
              <p className="text-gray-300">
                We'll be in touch within 1 business day.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-5 bg-white/5 border border-white/10 rounded-2xl p-8"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    className="w-full rounded-lg px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-teal-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Acme HVAC"
                    className="w-full rounded-lg px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-teal-400 transition-colors"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(281) 555-0100"
                    className="w-full rounded-lg px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-teal-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@acmehvac.com"
                    className="w-full rounded-lg px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-teal-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  What's your biggest process headache?
                </label>
                <textarea
                  name="headache"
                  value={form.headache}
                  onChange={handleChange}
                  rows={4}
                  placeholder="e.g. We manually enter job tickets into 3 different systems every morning..."
                  className="w-full rounded-lg px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-teal-400 transition-colors resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full text-base font-bold py-6 rounded-xl hover:opacity-90 transition-opacity"
                style={{ backgroundColor: amber, color: dark }}
              >
                Book My Free Audit →
              </Button>
            </form>
          )}

          {/* Prominent phone */}
          <div className="text-center mt-8">
            <p className="text-gray-400 text-sm mb-2">Prefer to call us directly?</p>
            <a
              href={PHONE_HREF}
              className="text-2xl font-bold hover:opacity-80 transition-opacity"
              style={{ color: amber }}
            >
              {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* ── Bottom bar ───────────────────────────────────────────────────── */}
      <div
        className="py-5 px-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-500"
        style={{ backgroundColor: "hsl(222 47% 7%)" }}
      >
        <span>© 2025 MyAgentVerse</span>
        <span className="hidden sm:inline">·</span>
        <a href={PHONE_HREF} className="hover:text-gray-300 transition-colors">
          {PHONE}
        </a>
        <span className="hidden sm:inline">·</span>
        <a href="/privacy" className="hover:text-gray-300 transition-colors">
          Privacy Policy
        </a>
      </div>
    </div>
  );
}
