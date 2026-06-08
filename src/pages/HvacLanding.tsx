import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import ROISection from "@/components/sections/ROISection";
import ImplementationSection from "@/components/sections/ImplementationSection";
import PricingSection from "@/components/sections/PricingSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import TrustSection from "@/components/sections/TrustSection";
import CTASection from "@/components/sections/CTASection";

const HvacLanding = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>AI Automation for HVAC Contractors | MyAgentVerse</title>
        <meta name="description" content="Stop missing calls and losing jobs. MyAgentVerse builds AI agents for HVAC contractors that answer calls 24/7, book appointments, and follow up on every lead automatically." />
        <meta property="og:title" content="AI Automation for HVAC Contractors | MyAgentVerse" />
        <meta property="og:description" content="AI agents for HVAC contractors — answer calls 24/7, auto-book appointments, and follow up every lead. Never miss a job again." />
        <meta property="og:url" content="https://myagentverse.com/hvac" />
        <meta property="og:image" content="https://myagentverse.com/social-preview.png" />
        <link rel="canonical" href="https://myagentverse.com/hvac" />
      </Helmet>
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ROISection />
        <ImplementationSection />
        <PricingSection />
        <TestimonialsSection />
        <TrustSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default HvacLanding;
