// === FILE: src/components/Footer.tsx ===
import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";

const PHONE = "(713) 517-6792";
const PHONE_HREF = "tel:+17135176792";
const EMAIL = "hello@myagentverse.com";
const EMAIL_HREF = "mailto:hello@myagentverse.com";

export default function Footer() {
  return (
    <footer className="bg-[hsl(222,47%,11%)] text-slate-300">
      {/* Main grid */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1 — Brand */}
          <div className="lg:col-span-1">
            <p className="text-lg font-bold text-white mb-2">MyAgentVerse</p>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              We find and fix the operational bottlenecks holding your business
              back. AI, automation, and intelligent systems built around your
              operation. The Woodlands, TX.
            </p>
            <nav className="flex flex-col gap-2">
              {[
                { label: "About", href: "/about" },
                { label: "Results", href: "/results" },
                { label: "Privacy Policy", href: "/privacy" },
              ].map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 2 — Services */}
          <div>
            <p className="text-sm font-semibold text-white uppercase tracking-widest mb-4">
              Services
            </p>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Operations Automation", href: "/services" },
                { label: "Lead & Quote Automation", href: "/services" },
                { label: "Document Processing", href: "/services" },
                { label: "Book Free Assessment", href: "/process-audit" },
              ].map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 3 — Industries */}
          <div>
            <p className="text-sm font-semibold text-white uppercase tracking-widest mb-4">
              Industries
            </p>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Manufacturing", href: "/industries/manufacturing" },
                { label: "Field Service", href: "/industries/field-service" },
                {
                  label: "Professional Services",
                  href: "/industries/professional-services",
                },
              ].map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 4 — Get In Touch */}
          <div>
            <p className="text-sm font-semibold text-white uppercase tracking-widest mb-4">
              Get In Touch
            </p>
            <div className="flex flex-col gap-3 mb-5">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" />
                {PHONE}
              </a>
              <a
                href={EMAIL_HREF}
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" />
                {EMAIL}
              </a>
            </div>
            <Button
              asChild
              size="sm"
              className="mb-6 w-full rounded-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold"
            >
              <Link to="/process-audit">Book Free Assessment</Link>
            </Button>
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © 2025 MyAgentVerse. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="https://linkedin.com/company/myagentverse"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-500 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/myagentverse"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-500 hover:text-white transition-colors"
              aria-label="X (Twitter)"
            >
              X
            </a>
            <a
              href="https://youtube.com/@myagentverse"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-500 hover:text-white transition-colors"
              aria-label="YouTube"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
