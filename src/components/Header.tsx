// === FILE: src/components/Header.tsx ===
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/myagentverse-logo-new.png";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Results", href: "/results" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const linkClass = (href: string) =>
    `text-sm font-medium transition-colors hover:text-primary ${
      pathname === href
        ? "text-primary border-b-2 border-primary pb-0.5"
        : "text-slate-700"
    }`;

  return (
    <div className="sticky top-0 z-50 w-full">
      <header className="bg-white border-b border-slate-200 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-6">
            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0">
              <img
                src={logo}
                alt="MyAgentVerse"
                className="h-14 w-auto object-contain"
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-7">
              {NAV_LINKS.map((item) => (
                <Link key={item.href} to={item.href} className={linkClass(item.href)}>
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop right side */}
            <div className="hidden md:flex items-center gap-4 shrink-0">
              <a
                href="tel:+17135176792"
                className="flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                (713) 517-6792
              </a>
              <Button
                asChild
                size="sm"
                className="rounded-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold px-5"
              >
                <Link to="/process-audit">Book Free Bottleneck Assessment</Link>
              </Button>
            </div>

            {/* Mobile hamburger */}
            <div className="md:hidden">
              <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="Open menu">
                    <Menu className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80 p-0">
                  <div className="flex flex-col h-full">
                    {/* Mobile header */}
                    <div className="px-6 py-5 border-b border-slate-100">
                      <Link
                        to="/"
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center"
                      >
                        <img src={logo} alt="MyAgentVerse" className="h-12 w-auto" />
                      </Link>
                    </div>

                    {/* Phone prominent */}
                    <a
                      href="tel:+17135176792"
                      className="flex items-center gap-3 px-6 py-4 bg-slate-50 border-b border-slate-100 text-base font-semibold text-slate-800 hover:text-primary transition-colors"
                    >
                      <Phone className="w-5 h-5 text-primary" />
                      (713) 517-6792
                    </a>

                    {/* Mobile nav links */}
                    <nav className="flex flex-col px-6 py-4 gap-1 flex-1">
                      {NAV_LINKS.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          onClick={() => setMobileOpen(false)}
                          className={`px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                            pathname === item.href
                              ? "bg-primary/10 text-primary"
                              : "text-slate-700 hover:bg-slate-100 hover:text-primary"
                          }`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </nav>

                    {/* Mobile CTA */}
                    <div className="px-6 py-5 border-t border-slate-100">
                      <Button
                        asChild
                        size="lg"
                        className="w-full rounded-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold"
                      >
                        <Link to="/process-audit" onClick={() => setMobileOpen(false)}>
                          Book Free Bottleneck Assessment
                        </Link>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
