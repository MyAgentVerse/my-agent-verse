import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { getCalApi } from "@calcom/embed-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Lightbulb, Target, FileText, Rocket } from "lucide-react";
import ManufacturingSpotlight from "@/components/sections/ManufacturingSpotlight";
import heroImage from "@/assets/consultation-hero.jpg";
import roadmapImage from "@/assets/consultation-roadmap.jpg";
import founderImage from "@/assets/founder-journey.jpg";
import industriesImage from "@/assets/industries-connected.jpg";
import resultsImage from "@/assets/consultation-results.jpg";
import testimonialImage from "@/assets/testimonial-success.jpg";

const Consultation = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "60mins" });
      cal("floatingButton", {
        calLink: "agentverse/60mins",
        config: { layout: "month_view" },
        buttonText: "Book my consultation with founder",
      });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <>
      <Helmet>
        <title>Free AI Consultation with Dawood Kokawala | MyAgentVerse</title>
        <meta
          name="description"
          content="Book a free 1-hour AI consultation with Dawood Kokawala, Founder of MyAgentVerse. Get a personalized AI strategy roadmap for your business — open to all industries."
        />
        <meta
          property="og:title"
          content="Free AI Consultation with Dawood Kokawala | MyAgentVerse"
        />
        <meta
          property="og:description"
          content="Discover where AI fits in your business. Join Dawood Kokawala for a free 1-hour strategy session and walk away with your personalized AI roadmap."
        />
        <meta property="og:url" content="https://myagentverse.com/consultation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background">
        <Header />

        <main className="container mx-auto px-6 py-20">
          {/* HERO SECTION */}
          <section className="mb-32 animate-fade-in">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="text-center lg:text-left">
                <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent animate-scale-in">
                  Not sure where AI fits in your business? Let's figure it out together.
                </h1>
                <p className="mx-auto lg:mx-0 max-w-3xl text-lg text-muted-foreground leading-relaxed">
                  Join <strong className="text-foreground">Dawood Kokawala</strong>, Founder of{" "}
                  <strong className="text-foreground">MyAgentVerse</strong>, for a free 1-hour strategy session. 
                  Walk away with a <strong className="text-foreground">personalized AI roadmap</strong> built just for your business.
                </p>
              </div>
              <div className="relative animate-slide-in-right">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
                <img 
                  src={heroImage} 
                  alt="AI consultation session with holographic technology" 
                  className="relative rounded-3xl shadow-2xl w-full hover-scale transition-transform duration-500"
                />
              </div>
            </div>
          </section>

          {/* BOOKING SECTION */}
          <section className="mb-32 rounded-3xl bg-gradient-to-br from-primary via-primary/90 to-purple-600 p-12 text-center md:p-16 shadow-2xl animate-fade-in relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDQyYzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
            <div className="relative z-10">
              <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">Book Your Free Founder Session</h2>
              <p className="mb-8 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
                I personally host a few sessions each week. They fill up fast. Click below to reserve your free consultation.
              </p>
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-lg px-8 py-6 shadow-xl hover:scale-105 transition-transform"
                data-cal-namespace="60mins"
                data-cal-link="agentverse/60mins"
                data-cal-config='{"layout":"month_view"}'
              >
                Book My Consultation
              </Button>
            </div>
          </section>

          {/* WHY SECTION */}
          <section className="mb-32 animate-fade-in">
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-8 text-3xl font-bold text-center md:text-4xl">Why This Consultation Exists</h2>
              <div className="rounded-3xl bg-gradient-to-br from-muted to-muted/50 p-8 md:p-12 shadow-xl">
                <p className="mb-6 text-xl text-muted-foreground leading-relaxed">
                  Every business talks about AI, but most owners still wonder:{" "}
                  <em className="text-foreground font-semibold">"Where does it actually fit in my business?"</em>
                </p>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  This 1-hour session is built for <strong className="text-foreground">founders, owners, and operators</strong>{" "}
                  who want to see <strong className="text-foreground">practical AI opportunities</strong>, not buzzwords. 
                  Even if your industry isn't listed on our site, I'll help you uncover where AI can save time, reduce costs, and increase results.
                </p>
              </div>
            </div>
          </section>

          {/* SESSION DETAILS */}
          <section className="mb-32 animate-fade-in">
            <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              What Happens During the Free Session
            </h2>
            
            <div className="mb-16 rounded-3xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
              <img 
                src={roadmapImage} 
                alt="AI strategy roadmap with milestones" 
                className="w-full h-auto max-h-[500px] object-cover hover-scale transition-transform duration-500"
              />
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="group rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/5 p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <Lightbulb className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="mb-3 text-2xl font-bold">1. Discovery</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We'll talk about how your business runs today: what's working and what's slowing you down.
                </p>
              </div>
              <div className="group rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-600/5 p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <Target className="w-12 h-12 text-purple-500 mb-4" />
                <h3 className="mb-3 text-2xl font-bold">2. Opportunity Mapping</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  I'll identify 2-3 AI or automation opportunities that could deliver immediate impact.
                </p>
              </div>
              <div className="group rounded-2xl bg-gradient-to-br from-green-500/10 to-green-600/5 p-8 border border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <FileText className="w-12 h-12 text-green-500 mb-4" />
                <h3 className="mb-3 text-2xl font-bold">3. Roadmap Creation</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  You'll receive a written <strong className="text-foreground">AI Strategy Summary</strong> and{" "}
                  <strong className="text-foreground">Roadmap</strong> after our call.
                </p>
              </div>
              <div className="group rounded-2xl bg-gradient-to-br from-orange-500/10 to-orange-600/5 p-8 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <Rocket className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="mb-3 text-2xl font-bold">4. Optional Implementation</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  If you choose, my team at MyAgentVerse can build and integrate your solution from end to end.
                </p>
              </div>
            </div>
          </section>

          {/* FOUNDER STORY */}
          <section className="mb-32 rounded-3xl bg-gradient-to-br from-primary/10 via-purple-500/10 to-primary/5 p-8 md:p-16 shadow-xl animate-fade-in">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 className="mb-8 text-3xl font-bold md:text-4xl">About Dawood Kokawala</h2>
                <p className="mb-6 text-lg text-muted-foreground leading-relaxed">
                  I've been coding since <strong className="text-foreground">1995</strong>, starting with{" "}
                  <strong className="text-foreground">FoxPro</strong> on my first desktop PC. Over the years, I mastered{" "}
                  <strong className="text-foreground">Microsoft Visual Basic</strong>,{" "}
                  <strong className="text-foreground">.ASP</strong>,{" "}
                  <strong className="text-foreground">PHP</strong>, and later{" "}
                  <strong className="text-foreground">Node.js / Express.js</strong> and the{" "}
                  <strong className="text-foreground">MERN stack</strong>, building full-scale business applications and APIs.
                </p>
                <p className="mb-6 text-lg text-muted-foreground leading-relaxed">
                  Around 2.5 years ago, I dove deep into <strong className="text-foreground">AI and Machine Learning</strong>, 
                  and that changed everything. I realized something simple yet powerful:
                </p>
                <blockquote className="my-8 border-l-4 border-primary pl-6 py-4 text-2xl italic font-semibold bg-background/50 rounded-r-xl">
                  "The best tools think before you think and feel like magic."
                </blockquote>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  That belief became <strong className="text-foreground">MyAgentVerse</strong>, a world of AI agents built to 
                  amplify human potential. Now, I share that same mindset through 1-on-1 strategy sessions to help other 
                  business owners discover their own version of AI magic.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={founderImage} 
                  alt="Journey from 1995 coding to modern AI" 
                  className="w-full hover-scale transition-transform duration-500"
                />
              </div>
            </div>
          </section>

          {/* INDUSTRIES */}
          <section className="mb-32 animate-fade-in">
            <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">Industries I Help (and Beyond)</h2>
            
            <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={industriesImage} 
                alt="Various industries connected by AI technology" 
                className="w-full hover-scale transition-transform duration-500"
              />
            </div>

            <div className="max-w-4xl mx-auto text-center">
              <p className="mb-6 text-xl text-muted-foreground leading-relaxed">
                Whether you run an <strong className="text-foreground">HVAC company</strong>, a{" "}
                <strong className="text-foreground">dental clinic</strong>, a{" "}
                <strong className="text-foreground">manufacturing plant</strong>, or any other service-driven business, 
                this session is for you.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                And if your industry isn't listed, that's exactly why this page exists. AI opportunities don't follow 
                industry lines; they follow imagination.
              </p>
            </div>
          </section>

          {/* RESULTS */}
          <section className="mb-32 animate-fade-in">
            <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">What You'll Receive After the Call</h2>
            
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={resultsImage} 
                  alt="AI strategy report on laptop" 
                  className="w-full hover-scale transition-transform duration-500"
                />
              </div>
              
              <div className="order-1 lg:order-2 space-y-6">
                <div className="flex items-start gap-4 group">
                  <CheckCircle className="mt-1 h-8 w-8 flex-shrink-0 text-green-500 group-hover:scale-110 transition-transform" />
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    A written <strong className="text-foreground">AI Strategy Summary</strong> customized for your business
                  </p>
                </div>
                <div className="flex items-start gap-4 group">
                  <CheckCircle className="mt-1 h-8 w-8 flex-shrink-0 text-green-500 group-hover:scale-110 transition-transform" />
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    A <strong className="text-foreground">step-by-step roadmap</strong> showing your best starting points
                  </p>
                </div>
                <div className="flex items-start gap-4 group">
                  <CheckCircle className="mt-1 h-8 w-8 flex-shrink-0 text-green-500 group-hover:scale-110 transition-transform" />
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Optional implementation proposal, only if you decide to move forward, no pressure.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* TESTIMONIALS */}
          <section className="mb-32 rounded-3xl bg-gradient-to-br from-muted via-muted/80 to-muted/60 p-8 md:p-16 shadow-xl animate-fade-in">
            <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Client Results & Testimonials</h2>
            
            <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={testimonialImage} 
                alt="Successful business owners reviewing AI results" 
                className="w-full hover-scale transition-transform duration-500"
              />
            </div>

            <div className="mx-auto max-w-4xl space-y-8">
              <blockquote className="border-l-4 border-primary pl-8 py-4 bg-background/50 rounded-r-2xl hover:shadow-lg transition-shadow">
                <p className="mb-4 text-xl italic text-muted-foreground leading-relaxed">
                  "Dawood helped us automate what used to take three people. Within 30 days, we were saving hours 
                  daily and closing more leads."
                </p>
                <cite className="font-semibold text-foreground text-lg">HVAC Business Owner, Texas</cite>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-8 py-4 bg-background/50 rounded-r-2xl hover:shadow-lg transition-shadow">
                <p className="mb-4 text-xl italic text-muted-foreground leading-relaxed">
                  "He made AI simple: practical, not theoretical. We implemented one idea from our roadmap and saw 
                  ROI in two weeks."
                </p>
                <cite className="font-semibold text-foreground text-lg">Dental Clinic Manager</cite>
              </blockquote>
            </div>
          </section>

          {/* MANUFACTURING SPOTLIGHT */}
          <ManufacturingSpotlight />

          {/* FAQ */}
          <section className="mb-32 animate-fade-in">
            <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Frequently Asked Questions</h2>
            <div className="mx-auto max-w-3xl space-y-6">
              <div className="rounded-2xl bg-muted p-6 hover:bg-muted/80 transition-colors hover:shadow-lg">
                <h3 className="mb-3 text-2xl font-bold">Do I need technical experience?</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  No. You just need curiosity. I'll handle the technical part and translate it into business value.
                </p>
              </div>
              <div className="rounded-2xl bg-muted p-6 hover:bg-muted/80 transition-colors hover:shadow-lg">
                <h3 className="mb-3 text-2xl font-bold">Can you help any industry?</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Yes. Every business has processes that AI can optimize. We'll find your best starting point.
                </p>
              </div>
              <div className="rounded-2xl bg-muted p-6 hover:bg-muted/80 transition-colors hover:shadow-lg">
                <h3 className="mb-3 text-2xl font-bold">What happens after the session?</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  You'll receive your written roadmap. Implementation is optional and offered only if you request it.
                </p>
              </div>
              <div className="rounded-2xl bg-muted p-6 hover:bg-muted/80 transition-colors hover:shadow-lg">
                <h3 className="mb-3 text-2xl font-bold">How do I prepare?</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Simply come ready to discuss your challenges and goals. I'll take it from there.
                </p>
              </div>
            </div>
          </section>

          {/* CLOSING */}
          <section className="rounded-3xl bg-gradient-to-br from-primary via-purple-600 to-primary p-12 text-center text-primary-foreground md:p-20 shadow-2xl animate-fade-in relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDQyYzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
            <div className="relative z-10">
              <h2 className="mb-6 text-4xl font-bold md:text-5xl">Let's Turn Your Ideas into Intelligent Action</h2>
              <p className="mb-8 text-xl opacity-95 max-w-3xl mx-auto leading-relaxed">
                Schedule your free founder session today and discover tools that{" "}
                <strong>think before you think and feel like magic.</strong>
              </p>
              <p className="text-xl font-semibold">
                Dawood Kokawala<br />
                Founder, MyAgentVerse
              </p>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Consultation;
