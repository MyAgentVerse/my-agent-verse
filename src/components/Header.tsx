// === FILE: src/components/Header.tsx ===
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/myagentverse-logo-new.png";

const industries = [
  { label: "Manufacturing", href: "/industries/manufacturing" },
  { label: "Field Service", href: "/industries/field-service" },
  { label: "Professional Services", href: "/industries/professional-services" },
];

export default function Header() {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  function isActive(href: string) {
    return pathname === href;
  }

  function isIndustriesActive() {
    return pathname.startsWith("/industries");
  }

  const linkClass = (href: string) =>
    `text-sm font-medium transition-colors hover:text-primary ${
      isActive(href)
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
              <Link to="/" className={linkClass("/")}>
                Home
              </Link>
              <Link to="/services" className={linkClass("/services")}>
                Services
              </Link>

              {/* Industries dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary focus:outline-none ${
                      isIndustriesActive()
                        ? "text-primary border-b-2 border-primary pb-0.5"
                        : "text-slate-700"
                    }`}
                  >
                    Industries
                    <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-52">
                  {industries.map((item) => (
                    <DropdownMenuItem key={item.href} asChild>
                      <Link
                        to={item.href}
                        className="cursor-pointer w-full"
                      >
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Link to="/results" className={linkClass("/results")}>
                Results
              </Link>
              <Link to="/about" className={linkClass("/about")}>
                About
              </Link>
            </nav>

            {/* Desktop right side */}
            <div className="hidden md:flex items-center gap-4 shrink-0">
              <a
                href="tel:+12816998318"
                className="flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                (281) 699-8318
              </a>
              <Button
                asChild
                size="sm"
                className="rounded-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold px-5"
              >
                <Link to="/process-audit">Free Process Audit</Link>
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
                      href="tel:+12816998318"
                      className="flex items-center gap-3 px-6 py-4 bg-slate-50 border-b border-slate-100 text-base font-semibold text-slate-800 hover:text-primary transition-colors"
                    >
                      <Phone className="w-5 h-5 text-primary" />
                      (281) 699-8318
                    </a>

                    {/* Mobile nav links */}
                    <nav className="flex flex-col px-6 py-4 gap-1 flex-1">
                      {[
                        { label: "Home", href: "/" },
                        { label: "Services", href: "/services" },
                        { label: "Results", href: "/results" },
                        { label: "About", href: "/about" },
                      ].map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          onClick={() => setMobileOpen(false)}
                          className={`px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                            isActive(item.href)
                              ? "bg-primary/10 text-primary"
                              : "text-slate-700 hover:bg-slate-100 hover:text-primary"
                          }`}
                        >
                          {item.label}
                        </Link>
                      ))}

                      {/* Industries section */}
                      <div className="mt-2">
                        <p className="px-3 py-1 text-xs font-semibold text-slate-400 uppercase tracking-widest">
                          Industries
                        </p>
                        {industries.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            onClick={() => setMobileOpen(false)}
                            className={`block px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                              isActive(item.href)
                                ? "bg-primary/10 text-primary"
                                : "text-slate-700 hover:bg-slate-100 hover:text-primary"
                            }`}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </nav>

                    {/* Mobile CTA */}
                    <div className="px-6 py-5 border-t border-slate-100">
                      <Button
                        asChild
                        size="lg"
                        className="w-full rounded-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold"
                      >
                        <Link to="/process-audit" onClick={() => setMobileOpen(false)}>
                          Free Process Audit
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
