import { Button } from "@/components/ui/button";
import logo from "@/assets/myagentverse-logo.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-background shadow-sm">
      <div className="container mx-auto flex h-18 items-center justify-between px-6">
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="MyAgentVerse" className="h-10" />
        </a>
        
        <nav className="hidden items-center gap-8 md:flex">
          <a href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </a>
          <a href="/industries" className="text-sm font-medium transition-colors hover:text-primary">
            Industries
          </a>
          <a href="/hvac" className="text-sm font-medium transition-colors hover:text-primary">
            HVAC AI Agent
          </a>
          <a href="/booking" className="text-sm font-medium transition-colors hover:text-primary">
            Book Demo
          </a>
          <a href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </a>
        </nav>

        <Button variant="accent" asChild>
          <a href="#demo">🎧 Hear Ava Demo</a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
