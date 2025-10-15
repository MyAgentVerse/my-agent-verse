import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
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

        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="flex-shrink-0">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <a href="/" className="text-base font-medium transition-colors hover:text-primary px-2 py-2">
                  Home
                </a>
                <a href="/industries" className="text-base font-medium transition-colors hover:text-primary px-2 py-2">
                  Industries
                </a>
                <a href="/hvac" className="text-base font-medium transition-colors hover:text-primary px-2 py-2">
                  HVAC
                </a>
                <a href="/#meet_your_ai_team" className="text-base font-medium transition-colors hover:text-primary px-2 py-2">
                  AI Team
                </a>
                <a href="/booking" className="text-base font-medium transition-colors hover:text-primary px-2 py-2">
                  Book Demo
                </a>
                <a href="/contact" className="text-base font-medium transition-colors hover:text-primary px-2 py-2">
                  Contact
                </a>
                <Button variant="accent" asChild className="mt-4">
                  <a href="/#founder-offer">Claim Spot</a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
          
          <Button variant="accent" asChild className="flex-shrink-0 text-xs sm:text-sm px-3 sm:px-4">
            <a href="/#founder-offer">Claim Spot</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
