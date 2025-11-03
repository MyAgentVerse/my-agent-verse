import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { getCalApi } from "@calcom/embed-react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CheckCircle, Lightbulb, Target, FileText, Rocket, DollarSign, Calendar, TrendingUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import ManufacturingSpotlight from "@/components/sections/ManufacturingSpotlight";
import heroImage from "@/assets/consultation-hero.jpg";
import roadmapImage from "@/assets/consultation-roadmap.jpg";
import founderImage from "@/assets/founder-journey.jpg";
import industriesImage from "@/assets/industries-connected.jpg";
import resultsImage from "@/assets/consultation-results.jpg";
import testimonialImage from "@/assets/testimonial-success.jpg";

const Consultation = () => {
  const [searchParams] = useSearchParams();
  const [isPaymentDialogOpen, setIsPaymentDialogOpen] = useState(false);
  
  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [website, setWebsite] = useState("");
  const [industry, setIndustry] = useState("");
  const [annualRevenue, setAnnualRevenue] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [phone, setPhone] = useState("");
  const [biggestChallenge, setBiggestChallenge] = useState("");
  const [useCases, setUseCases] = useState<string[]>([]);
  
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const payment = searchParams.get("payment");
    const sessionId = searchParams.get("session_id");
    
    if (payment === "success" && sessionId) {
      // Initialize Cal.com for post-payment booking
      (async function () {
        const cal = await getCalApi({ namespace: "paid-consultation" });
        cal("ui", { 
          hideEventTypeDetails: false, 
          layout: "month_view",
        });
      })();
      
      toast({
        title: "Payment Successful! 🎉",
        description: "Please schedule your consultation below.",
      });
    } else if (payment === "canceled") {
      toast({
        title: "Payment Canceled",
        description: "You can try again anytime.",
        variant: "destructive",
      });
    }
  }, [searchParams, toast]);

  const handleUseCaseToggle = (useCase: string) => {
    setUseCases(prev => 
      prev.includes(useCase) 
        ? prev.filter(uc => uc !== useCase)
        : [...prev, useCase]
    );
  };

  const handlePayment = async () => {
    // Validate required fields
    if (!name || !email || !companyName || !industry || !annualRevenue || !teamSize || !phone || !biggestChallenge) {
      toast({
        title: "Required Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    // Validate phone format (basic)
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    if (!phoneRegex.test(phone)) {
      toast({
        title: "Invalid Phone",
        description: "Please enter a valid phone number.",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);

    try {
      const { data, error } = await supabase.functions.invoke("create-consultation-payment", {
        body: { 
          name,
          email,
          companyName,
          website: website || null,
          industry,
          annualRevenue,
          teamSize,
          phone,
          biggestChallenge,
          useCases,
        },
      });

      if (error) throw error;

      if (data?.url) {
        window.open(data.url, "_blank");
        setIsPaymentDialogOpen(false);
      }
    } catch (error) {
      console.error("Payment error:", error);
      toast({
        title: "Payment Error",
        description: error.message || "Unable to process payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>AI Implementation Roadmap Call | MyAgentVerse</title>
        <meta
          name="description"
          content="Unlock a custom AI roadmap for your business. In one paid strategy session, discover how AI can save and earn your company up to $100K+ annually. Includes pre-call audit, ROI breakdown, and full roadmap PDF."
        />
        <meta
          property="og:title"
          content="AI Implementation Roadmap Call | MyAgentVerse"
        />
        <meta
          property="og:description"
          content="Turn AI confusion into a clear, profitable roadmap. $299 strategy session with full credit toward your first AI project."
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
                <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                  <span className="text-sm font-semibold text-primary">💼 Executive Strategy Session</span>
                </div>
                <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent animate-scale-in">
                  Turn AI Confusion Into a Clear, Profitable Roadmap
                </h1>
                <p className="mb-6 mx-auto lg:mx-0 max-w-3xl text-xl text-muted-foreground leading-relaxed">
                  The AI Implementation Roadmap Call — Your <strong className="text-foreground">$4,750 Strategy</strong> for Just <strong className="text-primary text-2xl">$299</strong>
                </p>
                <p className="mx-auto lg:mx-0 max-w-3xl text-lg text-muted-foreground leading-relaxed">
                  Most businesses know AI can save time and money — but few know <em>where to start</em>. In this 60-minute private strategy call, we'll identify exactly how AI fits into your operations, marketing, and sales, and show you where it can deliver the highest ROI.
                </p>
              </div>
              <div className="relative animate-slide-in-right">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
                <img 
                  src={heroImage} 
                  alt="AI consultation session with strategic business planning" 
                  className="relative rounded-3xl shadow-2xl w-full hover-scale transition-transform duration-500"
                />
              </div>
            </div>
          </section>

          {/* VALUE PROPOSITION TABLE */}
          <section className="mb-32 animate-fade-in">
            <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              What You'll Get Inside Your Session
            </h2>
            
            {/* Mobile-friendly card layout */}
            <div className="max-w-5xl mx-auto">
              {/* Desktop table view */}
              <div className="hidden lg:block overflow-hidden rounded-3xl shadow-2xl border border-primary/20">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[700px]">
                    <thead className="bg-gradient-to-r from-primary via-purple-600 to-primary">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs sm:text-sm font-bold text-primary-foreground uppercase tracking-wider">Step</th>
                        <th className="px-4 py-3 text-left text-xs sm:text-sm font-bold text-primary-foreground uppercase tracking-wider">Deliverable</th>
                        <th className="px-4 py-3 text-left text-xs sm:text-sm font-bold text-primary-foreground uppercase tracking-wider">Value</th>
                      </tr>
                    </thead>
                    <tbody className="bg-muted/50 divide-y divide-border">
                      <tr className="hover:bg-muted transition-colors">
                        <td className="px-4 py-3 whitespace-nowrap font-semibold text-foreground text-sm">Pre-Call</td>
                        <td className="px-4 py-3">
                          <p className="font-semibold text-foreground mb-1 text-sm">Personalized AI Opportunity Audit</p>
                          <p className="text-xs text-muted-foreground">We analyze your workflows and find untapped automation opportunities before the meeting.</p>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap font-bold text-primary text-base">$750</td>
                      </tr>
                      <tr className="hover:bg-muted transition-colors">
                        <td className="px-4 py-3 font-semibold text-foreground text-sm">Live Call<br/>(45–60 min)</td>
                        <td className="px-4 py-3">
                          <p className="font-semibold text-foreground mb-1 text-sm">AI Strategy & ROI Breakdown</p>
                          <p className="text-xs text-muted-foreground">We pinpoint 2–3 automation opportunities and estimate your annual savings or revenue gains.</p>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap font-bold text-primary text-base">$1,500</td>
                      </tr>
                      <tr className="hover:bg-muted transition-colors">
                        <td className="px-4 py-3 whitespace-nowrap font-semibold text-foreground text-sm">Post-Call</td>
                        <td className="px-4 py-3">
                          <p className="font-semibold text-foreground mb-1 text-sm">Custom 3–5 Page AI Implementation Roadmap</p>
                          <p className="text-xs text-muted-foreground">A detailed PDF showing your AI integration plan, recommended agents, and phase roadmap.</p>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap font-bold text-primary text-base">$2,500</td>
                      </tr>
                      <tr className="bg-primary/10 hover:bg-primary/20 transition-colors">
                        <td className="px-4 py-3 whitespace-nowrap font-semibold text-foreground text-sm">Bonus</td>
                        <td className="px-4 py-3">
                          <p className="font-semibold text-foreground mb-1 text-sm">Full Credit Toward First Project</p>
                          <p className="text-xs text-muted-foreground">Your $299 fee is fully credited toward your first AI project if you move forward with us.</p>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap font-bold text-green-600 text-base">Risk-Free</td>
                      </tr>
                    </tbody>
                    <tfoot className="bg-gradient-to-r from-primary/20 to-purple-600/20">
                      <tr>
                        <td colSpan={2} className="px-4 py-3 text-right font-bold text-foreground text-base">Total Value:</td>
                        <td className="px-4 py-3 font-bold text-primary text-xl">$4,750+</td>
                      </tr>
                      <tr className="bg-gradient-to-r from-green-500/20 to-green-600/20">
                        <td colSpan={2} className="px-4 py-3 text-right font-bold text-foreground text-lg">Your Investment:</td>
                        <td className="px-4 py-3 font-bold text-green-600 text-2xl">$299</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>

              {/* Mobile card view */}
              <div className="lg:hidden space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-primary/20 bg-muted/50">
                  <div className="bg-gradient-to-r from-primary via-purple-600 to-primary px-4 py-3">
                    <h3 className="font-bold text-primary-foreground text-sm">Pre-Call</h3>
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-foreground mb-2">Personalized AI Opportunity Audit</p>
                    <p className="text-sm text-muted-foreground mb-3">We analyze your workflows and find untapped automation opportunities before the meeting.</p>
                    <p className="font-bold text-primary text-lg">Value: $750</p>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-xl border border-primary/20 bg-muted/50">
                  <div className="bg-gradient-to-r from-primary via-purple-600 to-primary px-4 py-3">
                    <h3 className="font-bold text-primary-foreground text-sm">Live Call (45–60 min)</h3>
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-foreground mb-2">AI Strategy & ROI Breakdown</p>
                    <p className="text-sm text-muted-foreground mb-3">We pinpoint 2–3 automation opportunities and estimate your annual savings or revenue gains.</p>
                    <p className="font-bold text-primary text-lg">Value: $1,500</p>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-xl border border-primary/20 bg-muted/50">
                  <div className="bg-gradient-to-r from-primary via-purple-600 to-primary px-4 py-3">
                    <h3 className="font-bold text-primary-foreground text-sm">Post-Call</h3>
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-foreground mb-2">Custom 3–5 Page AI Implementation Roadmap</p>
                    <p className="text-sm text-muted-foreground mb-3">A detailed PDF showing your AI integration plan, recommended agents, and phase roadmap.</p>
                    <p className="font-bold text-primary text-lg">Value: $2,500</p>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-xl border border-green-500/30 bg-primary/10">
                  <div className="bg-gradient-to-r from-green-500 via-green-600 to-green-500 px-4 py-3">
                    <h3 className="font-bold text-white text-sm">Bonus</h3>
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-foreground mb-2">Full Credit Toward First Project</p>
                    <p className="text-sm text-muted-foreground mb-3">Your $299 fee is fully credited toward your first AI project if you move forward with us.</p>
                    <p className="font-bold text-green-600 text-lg">Value: Risk-Free</p>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-xl border border-primary/30 bg-gradient-to-r from-primary/20 to-purple-600/20 p-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <p className="font-bold text-foreground">Total Value:</p>
                    <p className="font-bold text-primary text-2xl">$4,750+</p>
                  </div>
                  <div className="flex justify-between items-center bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-xl p-3">
                    <p className="font-bold text-foreground text-lg">Your Investment:</p>
                    <p className="font-bold text-green-600 text-3xl">$299</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA SECTION */}
          <section className="mb-32 rounded-3xl bg-gradient-to-br from-primary via-primary/90 to-purple-600 p-12 text-center md:p-16 shadow-2xl animate-fade-in relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDQyYzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
            <div className="relative z-10">
              <DollarSign className="w-16 h-16 mx-auto mb-6 text-primary-foreground" />
              <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">A $4,750 Strategy for a $299 Commitment</h2>
              <p className="mb-8 text-lg text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
                "This isn't a sales pitch — it's a paid strategy session that gives you clarity, numbers, and a roadmap you can act on immediately. You'll know exactly how AI can save or make your business money."
              </p>
              <p className="mb-8 text-sm text-primary-foreground/80 italic">— Dawood Kokawala, Founder of MyAgentVerse</p>
              
              {searchParams.get("payment") === "success" ? (
                <div className="space-y-4">
                  <div className="inline-block px-6 py-3 rounded-full bg-green-500/20 border border-green-500">
                    <CheckCircle className="inline-block w-5 h-5 mr-2 text-green-400" />
                    <span className="font-semibold text-primary-foreground">Payment Successful!</span>
                  </div>
                  <div className="max-w-4xl mx-auto bg-background/95 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Schedule Your Consultation</h3>
                    <div
                      data-cal-namespace="paid-consultation"
                      data-cal-link="agentverse/60mins"
                      data-cal-config='{"layout":"month_view"}'
                      className="min-h-[600px]"
                    ></div>
                  </div>
                </div>
              ) : (
                <Button 
                  size="lg" 
                  variant="secondary" 
                  onClick={() => setIsPaymentDialogOpen(true)}
                  className="text-lg sm:text-xl px-6 sm:px-12 py-6 sm:py-8 shadow-xl hover:scale-105 transition-transform font-bold w-full sm:w-auto"
                >
                  <Calendar className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                  <span className="block sm:inline">Reserve Strategy Call<span className="hidden sm:inline"> ($299)</span><span className="block sm:hidden text-base">$299</span></span>
                </Button>
              )}
            </div>
          </section>

          {/* WHY INVEST SECTION */}
          <section className="mb-32 animate-fade-in">
            <div className="max-w-5xl mx-auto">
              <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl">Why Businesses Invest in This Call</h2>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="group rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/5 p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <Lightbulb className="w-12 h-12 text-blue-500 mb-4" />
                  <h3 className="mb-3 text-2xl font-bold">Clarity Instead of Confusion</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Know exactly where AI fits in your business — no more guessing or chasing trends.
                  </p>
                </div>
                <div className="group rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-600/5 p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <TrendingUp className="w-12 h-12 text-purple-500 mb-4" />
                  <h3 className="mb-3 text-2xl font-bold">Proven Playbooks</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Learn how similar companies are saving 100+ hours a month or adding $50K+ in revenue using AI.
                  </p>
                </div>
                <div className="group rounded-2xl bg-gradient-to-br from-green-500/10 to-green-600/5 p-8 border border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <Target className="w-12 h-12 text-green-500 mb-4" />
                  <h3 className="mb-3 text-2xl font-bold">Executive-Level Strategy</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Walk away with a professional roadmap you can implement with or without us.
                  </p>
                </div>
                <div className="group rounded-2xl bg-gradient-to-br from-orange-500/10 to-orange-600/5 p-8 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <CheckCircle className="w-12 h-12 text-orange-500 mb-4" />
                  <h3 className="mb-3 text-2xl font-bold">Risk-Free Offer</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    If you continue with an AI project, your consultation fee is credited in full.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* WHO THIS IS FOR */}
          <section className="mb-32 rounded-3xl bg-gradient-to-br from-primary/10 via-purple-500/10 to-primary/5 p-8 md:p-16 shadow-xl animate-fade-in">
            <h2 className="mb-8 text-3xl font-bold text-center md:text-4xl">Who This Is For</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="flex items-start gap-4 group">
                <CheckCircle className="mt-1 h-8 w-8 flex-shrink-0 text-green-500 group-hover:scale-110 transition-transform" />
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Businesses earning <strong className="text-foreground">$1M–$5M per year</strong> who want to modernize operations
                </p>
              </div>
              <div className="flex items-start gap-4 group">
                <CheckCircle className="mt-1 h-8 w-8 flex-shrink-0 text-green-500 group-hover:scale-110 transition-transform" />
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Founders, COOs, and Marketing Directors seeking <strong className="text-foreground">clarity, not just ideas</strong>
                </p>
              </div>
              <div className="flex items-start gap-4 group">
                <CheckCircle className="mt-1 h-8 w-8 flex-shrink-0 text-green-500 group-hover:scale-110 transition-transform" />
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Teams that want to <strong className="text-foreground">automate lead capture, scheduling, or reporting</strong> using AI agents
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

        {/* Payment Dialog */}
        <Dialog open={isPaymentDialogOpen} onOpenChange={setIsPaymentDialogOpen}>
          <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl">Reserve Your Strategy Call</DialogTitle>
              <DialogDescription>
                Complete this quick form to help us prepare for your call. All fields marked with * are required.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-6 py-4">
              {/* Basic Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground border-b pb-2">Basic Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Business Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground border-b pb-2">Business Information</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name *</Label>
                    <Input
                      id="companyName"
                      placeholder="Your Company Inc."
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website">Business Website</Label>
                    <Input
                      id="website"
                      type="url"
                      placeholder="https://yourcompany.com"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry/Sector *</Label>
                    <Select value={industry} onValueChange={setIndustry}>
                      <SelectTrigger id="industry">
                        <SelectValue placeholder="Select your industry" />
                      </SelectTrigger>
                      <SelectContent className="bg-background z-50">
                        <SelectItem value="manufacturing">Manufacturing</SelectItem>
                        <SelectItem value="real-estate">Real Estate</SelectItem>
                        <SelectItem value="hvac">HVAC</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="professional-services">Professional Services</SelectItem>
                        <SelectItem value="retail">Retail</SelectItem>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Qualifying Questions */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground border-b pb-2">Qualifying Questions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="annualRevenue">Annual Revenue Range *</Label>
                    <Select value={annualRevenue} onValueChange={setAnnualRevenue}>
                      <SelectTrigger id="annualRevenue">
                        <SelectValue placeholder="Select revenue range" />
                      </SelectTrigger>
                      <SelectContent className="bg-background z-50">
                        <SelectItem value="under-500k">Under $500K</SelectItem>
                        <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                        <SelectItem value="1m-5m">$1M - $5M</SelectItem>
                        <SelectItem value="5m-10m">$5M - $10M</SelectItem>
                        <SelectItem value="10m-plus">$10M+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="teamSize">Team Size *</Label>
                    <Select value={teamSize} onValueChange={setTeamSize}>
                      <SelectTrigger id="teamSize">
                        <SelectValue placeholder="Select team size" />
                      </SelectTrigger>
                      <SelectContent className="bg-background z-50">
                        <SelectItem value="1-5">1-5 employees</SelectItem>
                        <SelectItem value="6-20">6-20 employees</SelectItem>
                        <SelectItem value="21-50">21-50 employees</SelectItem>
                        <SelectItem value="51-100">51-100 employees</SelectItem>
                        <SelectItem value="100-plus">100+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>

              {/* Consultation Focus */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground border-b pb-2">Consultation Focus</h3>
                <div className="space-y-2">
                  <Label htmlFor="biggestChallenge">What's your biggest challenge with AI? * (200 char max)</Label>
                  <Textarea
                    id="biggestChallenge"
                    placeholder="e.g., Not sure where to start, overwhelmed by options, need help with implementation..."
                    value={biggestChallenge}
                    onChange={(e) => setBiggestChallenge(e.target.value.slice(0, 200))}
                    maxLength={200}
                    rows={3}
                  />
                  <p className="text-xs text-muted-foreground">{biggestChallenge.length}/200 characters</p>
                </div>
                <div className="space-y-3">
                  <Label>What specific AI use cases are you interested in?</Label>
                  <div className="space-y-2">
                    {[
                      { id: "lead-generation", label: "Lead Generation" },
                      { id: "customer-service", label: "Customer Service" },
                      { id: "workflow-automation", label: "Workflow Automation" },
                      { id: "data-analysis", label: "Data Analysis" },
                      { id: "other", label: "Other" },
                    ].map((useCase) => (
                      <div key={useCase.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={useCase.id}
                          checked={useCases.includes(useCase.id)}
                          onCheckedChange={() => handleUseCaseToggle(useCase.id)}
                        />
                        <Label
                          htmlFor={useCase.id}
                          className="text-sm font-normal cursor-pointer"
                        >
                          {useCase.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Privacy Note */}
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-xs text-muted-foreground">
                  🔒 Your information is secure and will only be used to prepare for your consultation. We respect your privacy.
                </p>
              </div>
            </div>
            <DialogFooter>
              <Button
                onClick={handlePayment}
                disabled={isProcessing || !name || !email || !companyName || !industry || !annualRevenue || !teamSize || !phone || !biggestChallenge}
                className="w-full"
                size="lg"
              >
                {isProcessing ? "Processing..." : "Continue to Payment ($299)"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default Consultation;
