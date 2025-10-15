import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-center text-4xl font-bold md:text-5xl">
            About MyAgentVerse
          </h1>
          <p className="mb-12 text-center text-xl text-muted-foreground">
            Your world of AI agents, built for you.
          </p>
          
          <div className="space-y-8 text-lg leading-relaxed">
            <p>
              We built MyAgentVerse because small businesses deserve the same tools as the Fortune 500s — without the complexity or cost.
            </p>
            
            <p>
              Every missed call is lost revenue. Every forgotten follow-up is a competitor's win. Every overwhelmed front desk means burned-out staff.
            </p>
            
            <p>
              That's why we created Ava, Jack, and Sofia — AI teammates that work 24/7, never take breaks, and never let leads slip through the cracks.
            </p>
            
            <p className="font-semibold">
              Real backup. Real results. Built for real businesses.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
