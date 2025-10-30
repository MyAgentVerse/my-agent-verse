import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Cal, { getCalApi } from "@calcom/embed-react";

const Booking = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/10 to-secondary/5 py-20 md:py-32">
          {/* Animated background elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-20 right-20 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-3xl animate-pulse" />
            <div className="absolute bottom-20 left-20 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-accent/25 to-secondary/25 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-40 left-1/3 h-[350px] w-[350px] rounded-full bg-gradient-to-bl from-secondary/20 to-primary/20 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
            
            {/* Colorful particles */}
            <div className="absolute top-32 right-1/4 h-3 w-3 rounded-full bg-accent animate-ping" style={{ animationDelay: '0.5s' }} />
            <div className="absolute bottom-40 right-1/3 h-2 w-2 rounded-full bg-primary animate-ping" style={{ animationDelay: '1.5s' }} />
            <div className="absolute top-1/2 right-20 h-2 w-2 rounded-full bg-secondary animate-ping" style={{ animationDelay: '2.5s' }} />
          </div>
          
          <div className="container mx-auto px-6">
            <div className="text-center space-y-8 max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl animate-fade-in">
                Book Your Demo Call
              </h1>
              <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Schedule a personalized demo with our team. We'll show you how Ava can transform your business and handle every lead 24/7.
              </p>
              <p className="text-lg font-medium animate-fade-in" style={{ animationDelay: '0.2s' }}>
                See Ava in action and get all your questions answered. No commitment required.
              </p>
              <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <Button variant="accent" size="lg" asChild className="hover-scale">
                  <a href="#calendar">📅 Schedule Now</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Calendar Section */}
        <section id="calendar" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-5xl">
              <div className="mb-12 text-center space-y-4">
                <h2 className="text-3xl font-bold md:text-4xl">
                  Choose Your Preferred Time
                </h2>
                <p className="text-lg text-muted-foreground">
                  Pick a time that works best for you. Our team is ready to help you get started.
                </p>
              </div>
              
              <div className="rounded-lg border bg-card shadow-lg overflow-hidden" style={{ minHeight: '700px' }}>
                <Cal
                  namespace="30min"
                  calLink="agentverse/30min"
                  style={{ width: "100%", height: "100%", minHeight: "700px" }}
                  config={{ layout: "month_view" }}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Booking;
