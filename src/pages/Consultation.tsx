import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { getCalApi } from "@calcom/embed-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

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

      <div className="min-h-screen bg-background">
        <Header />

        <main className="container mx-auto px-6 py-20">
          {/* HERO SECTION */}
          <section className="mb-20 text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              Not sure where AI fits in your business?<br />Let's figure it out — together.
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              Join <strong className="text-foreground">Dawood Kokawala</strong>, Founder of{" "}
              <strong className="text-foreground">MyAgentVerse</strong>, for a free 1-hour strategy session. 
              Walk away with a <strong className="text-foreground">personalized AI roadmap</strong> built just for your business.
            </p>
          </section>

          {/* BOOKING SECTION */}
          <section className="mb-20 rounded-2xl bg-muted p-8 text-center md:p-12">
            <h2 className="mb-4 text-3xl font-bold">Book Your Free Founder Session</h2>
            <p className="mb-6 text-muted-foreground">
              I personally host a few sessions each week — they fill up fast. Click below to reserve your free consultation.
            </p>
            <Button size="lg" className="text-lg">
              Book My Consultation
            </Button>
          </section>

          {/* WHY SECTION */}
          <section className="mb-20">
            <h2 className="mb-6 text-3xl font-bold">Why This Consultation Exists</h2>
            <p className="mb-4 text-lg text-muted-foreground">
              Every business talks about AI — but most owners still wonder:{" "}
              <em>"Where does it actually fit in my business?"</em>
            </p>
            <p className="text-lg text-muted-foreground">
              This 1-hour session is built for <strong className="text-foreground">founders, owners, and operators</strong>{" "}
              who want to see <strong className="text-foreground">practical AI opportunities</strong>, not buzzwords. 
              Even if your industry isn't listed on our site, I'll help you uncover where AI can save time, reduce costs, and increase results.
            </p>
          </section>

          {/* SESSION DETAILS */}
          <section className="mb-20">
            <h2 className="mb-8 text-center text-3xl font-bold">What Happens During the Free Session</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-xl bg-muted p-6">
                <h3 className="mb-3 text-xl font-bold">1. Discovery</h3>
                <p className="text-muted-foreground">
                  We'll talk about how your business runs today — what's working and what's slowing you down.
                </p>
              </div>
              <div className="rounded-xl bg-muted p-6">
                <h3 className="mb-3 text-xl font-bold">2. Opportunity Mapping</h3>
                <p className="text-muted-foreground">
                  I'll identify 2–3 AI or automation opportunities that could deliver immediate impact.
                </p>
              </div>
              <div className="rounded-xl bg-muted p-6">
                <h3 className="mb-3 text-xl font-bold">3. Roadmap Creation</h3>
                <p className="text-muted-foreground">
                  You'll receive a written <strong className="text-foreground">AI Strategy Summary</strong> and{" "}
                  <strong className="text-foreground">Roadmap</strong> after our call.
                </p>
              </div>
              <div className="rounded-xl bg-muted p-6">
                <h3 className="mb-3 text-xl font-bold">4. Optional Implementation</h3>
                <p className="text-muted-foreground">
                  If you choose, my team at MyAgentVerse can build and integrate your solution from end to end.
                </p>
              </div>
            </div>
          </section>

          {/* FOUNDER STORY */}
          <section className="mb-20 rounded-2xl bg-primary/5 p-8 md:p-12">
            <h2 className="mb-6 text-3xl font-bold">About Dawood Kokawala</h2>
            <p className="mb-4 text-lg text-muted-foreground">
              I've been coding since <strong className="text-foreground">1995</strong>, starting with{" "}
              <strong className="text-foreground">FoxPro</strong> on my first desktop PC. Over the years, I mastered{" "}
              <strong className="text-foreground">Microsoft Visual Basic</strong>,{" "}
              <strong className="text-foreground">.ASP</strong>,{" "}
              <strong className="text-foreground">PHP</strong>, and later{" "}
              <strong className="text-foreground">Node.js / Express.js</strong> and the{" "}
              <strong className="text-foreground">MERN stack</strong> — building full-scale business applications and APIs.
            </p>
            <p className="mb-4 text-lg text-muted-foreground">
              Around 2.5 years ago, I dove deep into <strong className="text-foreground">AI and Machine Learning</strong> — 
              and that changed everything. I realized something simple yet powerful:
            </p>
            <blockquote className="my-6 border-l-4 border-primary pl-6 text-xl italic">
              "The best tools think before you think — and feel like magic."
            </blockquote>
            <p className="text-lg text-muted-foreground">
              That belief became <strong className="text-foreground">MyAgentVerse</strong> — a world of AI agents built to 
              amplify human potential. Now, I share that same mindset through 1-on-1 strategy sessions to help other 
              business owners discover their own version of AI magic.
            </p>
          </section>

          {/* INDUSTRIES */}
          <section className="mb-20">
            <h2 className="mb-6 text-center text-3xl font-bold">Industries I Help (and Beyond)</h2>
            <p className="mb-4 text-center text-lg text-muted-foreground">
              Whether you run an <strong className="text-foreground">HVAC company</strong>, a{" "}
              <strong className="text-foreground">dental clinic</strong>, a{" "}
              <strong className="text-foreground">manufacturing plant</strong>, or any other service-driven business — 
              this session is for you.
            </p>
            <p className="text-center text-lg text-muted-foreground">
              And if your industry isn't listed, that's exactly why this page exists. AI opportunities don't follow 
              industry lines — they follow imagination.
            </p>
          </section>

          {/* RESULTS */}
          <section className="mb-20">
            <h2 className="mb-8 text-center text-3xl font-bold">What You'll Receive After the Call</h2>
            <div className="mx-auto max-w-2xl space-y-4">
              <div className="flex items-start gap-4">
                <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                <p className="text-lg text-muted-foreground">
                  A written <strong className="text-foreground">AI Strategy Summary</strong> customized for your business
                </p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                <p className="text-lg text-muted-foreground">
                  A <strong className="text-foreground">step-by-step roadmap</strong> showing your best starting points
                </p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                <p className="text-lg text-muted-foreground">
                  Optional implementation proposal — only if you decide to move forward, no pressure.
                </p>
              </div>
            </div>
          </section>

          {/* TESTIMONIALS */}
          <section className="mb-20 rounded-2xl bg-muted p-8 md:p-12">
            <h2 className="mb-8 text-center text-3xl font-bold">Client Results & Testimonials</h2>
            <div className="mx-auto max-w-4xl space-y-8">
              <blockquote className="border-l-4 border-primary pl-6">
                <p className="mb-4 text-lg italic text-muted-foreground">
                  "Dawood helped us automate what used to take three people. Within 30 days, we were saving hours 
                  daily — and closing more leads."
                </p>
                <cite className="font-semibold text-foreground">— HVAC Business Owner, Texas</cite>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-6">
                <p className="mb-4 text-lg italic text-muted-foreground">
                  "He made AI simple — practical, not theoretical. We implemented one idea from our roadmap and saw 
                  ROI in two weeks."
                </p>
                <cite className="font-semibold text-foreground">— Dental Clinic Manager</cite>
              </blockquote>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-20">
            <h2 className="mb-8 text-center text-3xl font-bold">Frequently Asked Questions</h2>
            <div className="mx-auto max-w-3xl space-y-6">
              <div>
                <h3 className="mb-2 text-xl font-bold">Do I need technical experience?</h3>
                <p className="text-muted-foreground">
                  No — you just need curiosity. I'll handle the technical part and translate it into business value.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold">Can you help any industry?</h3>
                <p className="text-muted-foreground">
                  Yes. Every business has processes that AI can optimize — we'll find your best starting point.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold">What happens after the session?</h3>
                <p className="text-muted-foreground">
                  You'll receive your written roadmap. Implementation is optional and offered only if you request it.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold">How do I prepare?</h3>
                <p className="text-muted-foreground">
                  Simply come ready to discuss your challenges and goals. I'll take it from there.
                </p>
              </div>
            </div>
          </section>

          {/* CLOSING */}
          <section className="rounded-2xl bg-primary p-8 text-center text-primary-foreground md:p-12">
            <h2 className="mb-4 text-3xl font-bold">Let's Turn Your Ideas into Intelligent Action</h2>
            <p className="mb-6 text-lg opacity-90">
              Schedule your free founder session today — and discover tools that{" "}
              <strong>think before you think and feel like magic.</strong>
            </p>
            <p className="text-lg font-semibold">
              — Dawood Kokawala<br />
              Founder, MyAgentVerse
            </p>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Consultation;
