import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BuildTestimonials from "@/components/sections/build/BuildTestimonials";
import BuildApplicationForm from "@/components/BuildApplicationForm";
import heroImage from "@/assets/build-hero.jpg";
import exclusivityImage from "@/assets/build-exclusivity.jpg";
import collaborationImage from "@/assets/build-collaboration.jpg";
import problemImage from "@/assets/build-problem.jpg";
import idealClientImage from "@/assets/build-ideal-client.jpg";
import processImage from "@/assets/build-process.jpg";
import decisionImage from "@/assets/build-decision.jpg";
import whyWorksImage from "@/assets/build-why-works.jpg";
import bookingImage from "@/assets/build-booking-calendar.png";

const Build = () => {
  return (
    <>
      <Helmet>
        <title>Custom Software in 21 Days | MyAgentVerse</title>
        <meta
          name="description"
          content="We design and deliver custom-built software and AI-powered tools in just 21 working days — for teams ready to move fast. Only 2 build slots per month."
        />
        <meta property="og:title" content="Custom Software in 21 Days | MyAgentVerse" />
        <meta
          property="og:description"
          content="We design and deliver custom-built software and AI-powered tools in just 21 working days — for teams ready to move fast. Only 2 build slots per month."
        />
        <meta property="og:url" content="https://myagentverse.com/build" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background">
        <Header />

        <main>
          {/* Hero Section */}
          <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img 
                src={heroImage} 
                alt="Modern tech dashboard workspace with fast-moving UI" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/50"></div>
              
              {/* Animated Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 animate-pulse"></div>
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/30 rounded-full blur-[120px] animate-[pulse_4s_ease-in-out_infinite]"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/30 rounded-full blur-[120px] animate-[pulse_6s_ease-in-out_infinite]"></div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent"></div>
            </div>
            <div className="container mx-auto px-6 py-20 relative z-10">
              <div className="max-w-3xl">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in drop-shadow-[0_0_30px_rgba(0,183,194,0.3)]">
                  ⚡ Build Custom Software in 21 Days
                </h1>
                <p className="text-xl sm:text-2xl mb-8 text-muted-foreground leading-snug animate-fade-in [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
                  For Founders Ready to Move Fast — and Who Qualify
                </p>
                <div className="animate-fade-in [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards]">
                  <Button size="lg" className="text-lg px-8 py-6 shadow-[0_0_40px_rgba(0,183,194,0.4)] hover:shadow-[0_0_60px_rgba(0,183,194,0.6)] transition-all duration-300" asChild>
                    <a href="/consultation">Book Discovery Call</a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Heads-Up Section */}
          <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
            <div className="container mx-auto px-6">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    👋 Quick Heads-Up
                  </h2>
                  <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                    <p>Before we go any further, I want to be upfront.</p>
                    <p>We only take on 2 projects per month. That's not a marketing ploy — it's the only way we can guarantee high-quality delivery, fast.</p>
                    <p>Our process isn't built for everyone. It works best for founders who know what they want and are ready to move now — not later.</p>
                    <p className="font-semibold text-foreground">If that's you, keep reading.</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-l from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
                  <img 
                    src={exclusivityImage} 
                    alt="Exclusive access gate symbolizing high standards" 
                    className="relative rounded-3xl shadow-2xl w-full"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Why Work With Us - 4 USPs Section */}
          <section className="py-20 bg-gradient-to-b from-accent/5 to-background">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                🌟 Why Work With Us?
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
                Here's what makes our approach different — and why clients trust us with their most important software builds:
              </p>
              
              <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
                {/* USP 1 - Speed */}
                <div className="group relative p-8 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-background hover:from-primary/10 hover:border-primary/40 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl">⚡</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">Speed that Delivers</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      You get a review-ready MVP in just <span className="font-semibold text-foreground">14 to 21 working days</span>. No drawn-out cycles.
                    </p>
                  </div>
                </div>

                {/* USP 2 - Future-Ready Tech */}
                <div className="group relative p-8 rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/5 to-background hover:from-accent/10 hover:border-accent/40 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl">🚀</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">Future-Ready Tech</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We build on modern frameworks (React, PostgreSQL, Supabase) so your product stays fast, stable, and scalable.
                    </p>
                  </div>
                </div>

                {/* USP 3 - Smart AI Integration */}
                <div className="group relative p-8 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-background hover:from-primary/10 hover:border-primary/40 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl">🧠</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">Smart AI Integration</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Whether it's quoting, messaging, scheduling, or backend automation — we can embed AI from Day 1, or prepare your system to add it when you're ready.
                    </p>
                  </div>
                </div>

                {/* USP 4 - Human Process */}
                <div className="group relative p-8 rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/5 to-background hover:from-accent/10 hover:border-accent/40 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl">🤝</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">A Smooth, Human Process</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We keep things clear and collaborative from start to finish — with transparent steps, rapid feedback loops, and zero confusion.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-center text-lg text-foreground font-semibold mt-12">
                This isn't a generic dev shop. This is high-performance software, delivered by people who care.
              </p>
            </div>
          </section>

          {/* What We Build Section */}
          <section className="py-20">
            <div className="container mx-auto px-6">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                <div className="relative order-2 lg:order-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
                  <img 
                    src={collaborationImage} 
                    alt="Team collaborating on dashboard interface design" 
                    className="relative rounded-3xl shadow-2xl w-full"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    🧠 What We Build (Fast)
                  </h2>
                  <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                    <p>We design and develop fully custom software tailored to your business — including:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Client Portals</li>
                      <li>Team Dashboards</li>
                      <li>Automated Quoting Tools</li>
                      <li>Custom CRMs</li>
                      <li>AI-Integrated Systems (optional)</li>
                    </ul>
                    <p className="font-semibold text-foreground mt-6">You get:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Full ownership — source code, GitHub, database</li>
                      <li>Wireframe previews before we start</li>
                      <li>Review-ready MVP in 21 working days</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Teams Wait Section */}
          <section className="py-20 bg-gradient-to-b from-accent/5 to-background">
            <div className="container mx-auto px-6">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    ❗ Why Most Teams Wait Too Long
                  </h2>
                  <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                    <p>By the time most teams realize they need custom software, they're already dealing with:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Bottlenecks across teams</li>
                      <li>Manual tasks eating hours</li>
                      <li>Missed opportunities and lost deals</li>
                      <li>Tools that don't talk to each other</li>
                    </ul>
                    <p className="font-semibold text-foreground mt-6">But instead of fixing it, they wait. They overplan. Or they settle for a patchwork system that doesn't scale.</p>
                    <p className="text-foreground font-semibold">We're built for teams who are ready to move now.</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-l from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
                  <img 
                    src={problemImage} 
                    alt="Frustrated team overwhelmed by software tools" 
                    className="relative rounded-3xl shadow-2xl w-full"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Who We Work Best With Section */}
          <section className="py-20">
            <div className="container mx-auto px-6">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                <div className="relative order-2 lg:order-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
                  <img 
                    src={idealClientImage} 
                    alt="Professional business owner reviewing software dashboard" 
                    className="relative rounded-3xl shadow-2xl w-full"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    ✅ Who We Work Best With
                  </h2>
                  <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                    <p>We've found this process works best for businesses who are:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Already generating $1M+ in annual revenue</li>
                      <li>Have 5 or more team members using tools daily</li>
                      <li>Tried other solutions, but nothing has clicked</li>
                      <li>Ready to review working software in the next 30 days</li>
                    </ul>
                    <p className="font-semibold text-foreground mt-6">If you're still in brainstorm mode, that's okay — but this might not be the right moment.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
            <div className="container mx-auto px-6">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    ⚙️ How It Works
                  </h2>
                  <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                    <ol className="list-decimal list-inside space-y-3 ml-4">
                      <li>You book a short discovery call</li>
                      <li>We listen, dig in, and map out your goals</li>
                      <li>You get a clear timeline, quote, and early wireframes</li>
                      <li>A 10% deposit secures your build slot</li>
                      <li>We deliver your MVP — ready for review in 21 working days</li>
                    </ol>
                    <p className="font-semibold text-foreground mt-6">We build everything on proven, scalable technologies (React, PostgreSQL, Supabase, etc.). You own 100% of the product.</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-l from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
                  <img 
                    src={processImage} 
                    alt="Timeline concept with development process icons" 
                    className="relative rounded-3xl shadow-2xl w-full"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Let's Be Honest Section */}
          <section className="py-20">
            <div className="container mx-auto px-6">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                <div className="relative order-2 lg:order-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
                  <img 
                    src={decisionImage} 
                    alt="Person at decision crossroads with glowing paths" 
                    className="relative rounded-3xl shadow-2xl w-full"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    🪞 Let's Be Honest
                  </h2>
                  <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                    <p>If you've made it this far, there's probably a reason.</p>
                    <p>You know the current way of doing things isn't cutting it. You've likely tried other tools, waited on slower teams, or put this off longer than you wanted.</p>
                    <p className="font-semibold text-foreground text-xl mt-6">So here's the real question:</p>
                    <p className="font-bold text-foreground text-xl">Does this feel like the right move for your team right now?</p>
                    <p className="font-semibold text-foreground">Because this only works if you're ready to build — not just think about building.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why This Works Section */}
          <section className="py-20 bg-gradient-to-b from-accent/5 to-background">
            <div className="container mx-auto px-6">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    🎯 Why This Works
                  </h2>
                  <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                    <p>What we've built is fast — but not rushed.<br />
                    Simple — but not generic.<br />
                    Exclusive — but not arrogant.</p>
                    <p className="font-semibold text-foreground mt-6">This works because we've optimized for action-takers.</p>
                    <p>The kind of leaders who don't need to be chased, just empowered.</p>
                    <p className="font-semibold text-foreground">We've designed this process for those who make moves — not for those who make excuses.</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-l from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
                  <img 
                    src={whyWorksImage} 
                    alt="Door opening into futuristic tech workspace" 
                    className="relative rounded-3xl shadow-2xl w-full"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <BuildTestimonials />

          {/* Application Form Section */}
          <section className="py-20 bg-gradient-to-b from-accent/5 to-background">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    📋 Apply for a Build Slot
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Only 2 build slots available per month. Tell us about your project and we'll get back to you within 24 hours.
                  </p>
                </div>
                
                <div className="bg-card rounded-3xl shadow-2xl p-8 md:p-12 border border-primary/10">
                  <BuildApplicationForm />
                </div>
                
                <div className="mt-8 text-center">
                  <p className="text-muted-foreground mb-4">
                    Or prefer to talk first?
                  </p>
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto" asChild>
                    <a href="/consultation">Schedule Discovery Call</a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Currently Booking Section */}
          <section className="py-20">
            <div className="container mx-auto px-6">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                <div className="relative order-2 lg:order-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-3xl blur-3xl"></div>
                  <img 
                    src={bookingImage} 
                    alt="Calendar with limited booking slots" 
                    className="relative rounded-3xl shadow-2xl w-full border border-primary/20"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    📅 Currently Booking:
                  </h2>
                  <div className="space-y-4 text-lg leading-relaxed mb-8">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🟢</span>
                      <span className="font-semibold text-foreground">November (1 slot left)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🟡</span>
                      <span className="font-semibold text-foreground">December (early access)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🔴</span>
                      <span className="font-semibold text-foreground">January (waitlist)</span>
                    </div>
                  </div>
                  <Button size="lg" className="text-lg px-8 py-6" asChild>
                    <a href="/consultation">👉 Book a Discovery Call Now</a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-20 bg-gradient-to-r from-primary to-accent">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
                Ready to Move Fast?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Let's build something powerful together. Book your discovery call today.
              </p>
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
                <a href="/consultation">Book Discovery Call</a>
              </Button>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Build;
