import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsultationHero from "@/components/sections/consultation/ConsultationHero";
import ConsultationTable from "@/components/sections/consultation/ConsultationTable";
import WhyThisWorks from "@/components/sections/consultation/WhyThisWorks";
import WhoThisIsFor from "@/components/sections/consultation/WhoThisIsFor";
import ConsultationTestimonials from "@/components/sections/consultation/ConsultationTestimonials";
import ConsultationFAQ from "@/components/sections/consultation/ConsultationFAQ";
import ConsultationCTA from "@/components/sections/consultation/ConsultationCTA";
import BehindTheStrategy from "@/components/sections/consultation/BehindTheStrategy";

const Consultation = () => {
  return (
    <>
      <Helmet>
        <title>AI Strategy & Implementation Sprint | MyAgentVerse Consultation</title>
        <meta
          name="description"
          content="Transform your $1–5M business into an AI-powered machine in two private sessions. Get a personalized 90-Day AI Roadmap, Profit Map, and Risk Scorecard for only $299, fully credited toward your first project."
        />
        <meta
          property="og:title"
          content="AI Strategy & Implementation Sprint | MyAgentVerse Consultation"
        />
        <meta
          property="og:description"
          content="Transform your $1–5M business into an AI-powered machine in two private sessions. Get a personalized 90-Day AI Roadmap, Profit Map, and Risk Scorecard for only $299, fully credited toward your first project."
        />
        <meta property="og:url" content="https://myagentverse.com/consultation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background">
        <Header />

        <main className="container mx-auto px-6 py-20">
          <ConsultationHero />
          <ConsultationTable />
          <WhyThisWorks />
          <WhoThisIsFor />
          <ConsultationTestimonials />
          <ConsultationFAQ />
          <ConsultationCTA />
          <BehindTheStrategy />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Consultation;
