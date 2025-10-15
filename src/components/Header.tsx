import { Button } from "@/components/ui/button";
import logo from "@/assets/myagentverse-logo-new.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-background shadow-sm">
      <div className="container mx-auto flex h-18 items-center justify-between px-4 sm:px-6 gap-2 sm:gap-4">
        <a href="/" className="flex items-center gap-2 flex-shrink-0">
          <img src={logo} alt="MyAgentVerse" className="w-40 sm:w-52 md:w-60" />
        </a>
        
        <nav className="hidden items-center gap-4 lg:gap-8 md:flex">
          <a href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </a>
          <a href="/industries" className="text-sm font-medium transition-colors hover:text-primary">
            Industries
          </a>
          <a href="/hvac" className="text-sm font-medium transition-colors hover:text-primary">
            HVAC
          </a>
          <a href="/#meet_your_ai_team" className="text-sm font-medium transition-colors hover:text-primary">
            AI Team
          </a>
          <a href="/booking" className="text-sm font-medium transition-colors hover:text-primary">
            Book Demo
          </a>
          <a href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </a>
        </nav>

        <Button variant="accent" asChild className="flex-shrink-0 text-xs sm:text-sm px-3 sm:px-4">
          <a href="/#founder-offer">Claim Spot</a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
