import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, MessageSquare, Calendar, TrendingUp, 
  PhoneOff, Snowflake, TrendingDown, 
  Settings, GitBranch, Bot,
  BarChart3, Clock, Repeat, Mail,
  Target, Megaphone, DollarSign, 
  Star, Quote, Shield, Lock, CheckCircle2,
  Sparkles, Handshake, Brain
} from "lucide-react";
import heroImage from "@/assets/realtor-ai-hero.jpg";
import problemsImage from "@/assets/realtor-problems-clean.jpg";
import howItWorksImage from "@/assets/realtor-workflow-clean.jpg";
import dashboardImage from "@/assets/realtor-dashboard.jpg";
import growthPlanImage from "@/assets/realtor-growth-plan.jpg";
import partnershipImage from "@/assets/realtor-partnership.jpg";

const RealEstate = () => {
  const scrollToBooking = () => {
    window.location.href = "/discovery-call";
  };

  return (
    <>
      <Helmet>
        <title>Realtor AI System – Automate Your Real Estate Calls, Leads & Follow-Ups | MyAgentVerse</title>
        <meta 
          name="description" 
          content="Meet Ava, your 24/7 AI Real Estate Assistant. Automatically answer calls, follow up on leads, and generate new clients through our Realtor AI Dashboard and Growth Plan." 
        />
        <meta 
          name="keywords" 
          content="AI for realtors, real estate automation, AI real estate assistant, AI lead follow-up, realtor lead generation system, AI real estate CRM, AI call answering for agents, Realtor Growth Plan, real estate chatbot, AI real estate dashboard" 
        />
        <link rel="canonical" href="https://myagentverse.com/real-estate" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Ava – The 24/7 AI Real Estate Assistant | MyAgentVerse" />
        <meta property="og:description" content="Automate every call, follow-up, and showing. Ava handles leads 24/7 — so you close more deals without chasing clients." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://myagentverse.com/real-estate" />
        <meta property="og:image" content="https://myagentverse.com/assets/ava-ai-realtor-demo-banner.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ava – AI Real Estate Assistant by MyAgentVerse" />
        <meta name="twitter:description" content="Automate your real estate business with AI. Calls, leads, and follow-ups handled 24/7 — all in one dashboard." />
        <meta name="twitter:image" content="https://myagentverse.com/assets/ava-ai-realtor-demo-banner.jpg" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Realtor AI System by MyAgentVerse",
            "brand": "MyAgentVerse",
            "description": "AI-powered automation system for real estate professionals that answers calls, manages follow-ups, and generates new leads through territory-based ads.",
            "offers": {
              "@type": "Offer",
              "price": "49",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "url": "https://myagentverse.com/real-estate"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "134"
            }
          })}
        </script>
      </Helmet>

      <Header />
      
      <main className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background">
        {/* Hero Section */}
        <section className="relative py-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge className="bg-accent/20 text-accent border-accent/30">
                  <Brain className="w-4 h-4 mr-2" />
                  AI-Powered Real Estate Assistant
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Turn Missed Calls into Closings — and Leads into Deals.
                </h1>
                <p className="text-xl text-muted-foreground">
                  Meet Ava — your 24/7 Real Estate Assistant that answers calls, qualifies leads, and follows up automatically. Close more deals without chasing leads.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    variant="accent"
                    onClick={scrollToBooking}
                    className="text-lg"
                  >
                    🔥 Book 15-Minute Discovery Call
                  </Button>
                  <DemoModal industry="realtor">
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="text-lg"
                    >
                      🎧 Try the Live AI Demo
                    </Button>
                  </DemoModal>
                </div>
                <div className="flex gap-8 pt-4">
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-accent" />
                    <span className="text-sm text-muted-foreground">24/7 Answering</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-accent" />
                    <span className="text-sm text-muted-foreground">Auto Booking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-accent" />
                    <span className="text-sm text-muted-foreground">Lead Growth</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src={heroImage} 
                  alt="AI real estate assistant dashboard with holographic automation icons"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                The #1 Reason Realtors Lose Deals — Slow Follow-Up.
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="p-8 border-2 hover:border-accent/50 transition-all">
                <PhoneOff className="w-12 h-12 text-destructive mb-4" />
                <h3 className="text-xl font-bold mb-3">Missed Calls</h3>
                <p className="text-muted-foreground">
                  Every unanswered call is a lost opportunity. Ava answers instantly — day or night.
                </p>
              </Card>
              <Card className="p-8 border-2 hover:border-accent/50 transition-all">
                <Snowflake className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">Cold Leads</h3>
                <p className="text-muted-foreground">
                  AI reactivates old prospects with smart text and voice follow-ups.
                </p>
              </Card>
              <Card className="p-8 border-2 hover:border-accent/50 transition-all">
                <TrendingDown className="w-12 h-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">No Consistent New Leads</h3>
                <p className="text-muted-foreground">
                  The Growth Plan runs targeted ads that bring in verified buyers and sellers automatically.
                </p>
              </Card>
            </div>
            <div className="flex justify-center">
              <img 
                src={problemsImage} 
                alt="Infographic showing realtor pain points solved by AI automation"
                className="rounded-2xl shadow-xl max-w-2xl w-full"
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-background to-primary/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                How It Works — Simple, Fast, and Fully Automated
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="p-8 bg-accent/5 border-accent/20">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 text-accent text-2xl font-bold mb-4">
                  1
                </div>
                <Settings className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-3">Connect Your Account</h3>
                <p className="text-muted-foreground">
                  Access your private Realtor AI Dashboard where every call, text, and lead is tracked automatically.
                </p>
              </Card>
              <Card className="p-8 bg-accent/5 border-accent/20">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 text-accent text-2xl font-bold mb-4">
                  2
                </div>
                <GitBranch className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-3">Choose Your Growth Level</h3>
                <p className="text-muted-foreground">
                  Start with automation or activate the Growth Plan for exclusive local leads.
                </p>
              </Card>
              <Card className="p-8 bg-accent/5 border-accent/20">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 text-accent text-2xl font-bold mb-4">
                  3
                </div>
                <Bot className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-3">Let Ava Do the Work</h3>
                <p className="text-muted-foreground">
                  Ava calls, texts, and emails leads 24/7 — books appointments, revives old ones, and keeps you updated in real time.
                </p>
              </Card>
            </div>
            <div className="flex justify-center mb-8">
              <img 
                src={howItWorksImage} 
                alt="3-step flowchart showing Realtor AI setup process"
                className="rounded-2xl shadow-xl max-w-2xl w-full"
              />
            </div>
            <div className="text-center">
              <Button 
                size="lg" 
                variant="accent"
                onClick={scrollToBooking}
                className="text-lg"
              >
                🚀 Book My 15-Minute Call
              </Button>
            </div>
          </div>
        </section>

        {/* Feature Grid Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Your Realtor AI Dashboard — Total Control, Zero Hassle
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <img 
                  src={dashboardImage} 
                  alt="Clean AI dashboard mockup showing real estate analytics and call logs"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="grid grid-cols-1 gap-6">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <Phone className="w-8 h-8 text-accent mb-3" />
                  <h3 className="text-xl font-bold mb-2">AI Call Log</h3>
                  <p className="text-muted-foreground">
                    Listen to every conversation with summaries and tags.
                  </p>
                </Card>
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <MessageSquare className="w-8 h-8 text-accent mb-3" />
                  <h3 className="text-xl font-bold mb-2">Smart Inbox</h3>
                  <p className="text-muted-foreground">
                    All your texts, emails, and notes in one place.
                  </p>
                </Card>
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <Calendar className="w-8 h-8 text-accent mb-3" />
                  <h3 className="text-xl font-bold mb-2">Appointment Calendar</h3>
                  <p className="text-muted-foreground">
                    View bookings and follow-ups at a glance.
                  </p>
                </Card>
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <BarChart3 className="w-8 h-8 text-accent mb-3" />
                  <h3 className="text-xl font-bold mb-2">Performance Tracker</h3>
                  <p className="text-muted-foreground">
                    See ROI and conversion data in real-time.
                  </p>
                </Card>
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <Repeat className="w-8 h-8 text-accent mb-3" />
                  <h3 className="text-xl font-bold mb-2">Reactivation Hub</h3>
                  <p className="text-muted-foreground">
                    Wake up old leads automatically with targeted outreach.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Choose Your Growth Level
              </h2>
              <p className="text-xl text-muted-foreground">
                Start small or scale big — every plan includes your AI assistant and dashboard.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="p-8 hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold mb-2">Starter</h3>
                <div className="text-4xl font-bold text-accent mb-4">$49<span className="text-lg text-muted-foreground">/mo</span></div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>100 call minutes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>AI call handling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Dashboard access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>$0.35/min after limit</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 hover:shadow-xl transition-all border-accent/50">
                <Badge className="mb-2 bg-accent/20 text-accent">Popular</Badge>
                <h3 className="text-2xl font-bold mb-2">Pro</h3>
                <div className="text-4xl font-bold text-accent mb-4">$99<span className="text-lg text-muted-foreground">/mo</span></div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>250 mins, 500 texts, 200 emails</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Automated follow-ups</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>$0.30/min after limit</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold mb-2">Elite</h3>
                <div className="text-4xl font-bold text-accent mb-4">$149<span className="text-lg text-muted-foreground">/mo</span></div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>500 mins, 1,000 texts, 500 emails</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Full reactivation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Priority support</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 hover:shadow-xl transition-all bg-accent/5 border-accent">
                <Badge className="mb-2 bg-accent text-accent-foreground">Best Value</Badge>
                <h3 className="text-2xl font-bold mb-2">Growth Plan</h3>
                <div className="text-4xl font-bold text-accent mb-4">$299<span className="text-lg text-muted-foreground">/mo</span></div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Territory-branded landing page</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Ad setup + optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>AI follow-up + ROI dashboard</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>$99 per additional territory</span>
                  </li>
                </ul>
              </Card>
            </div>
            <p className="text-center text-sm text-muted-foreground">
              Setup fee: $199 (Voice + Branding) • Guarantee: 2 extra deals or 90 days free.
            </p>
          </div>
        </section>

        {/* Growth Plan Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">
                  <Megaphone className="w-4 h-4 mr-2" />
                  For Agents Ready to Scale
                </Badge>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  The Growth Plan — For Agents Ready to Scale
                </h2>
                <p className="text-xl text-muted-foreground mb-6">
                  We'll manage your local ads, build your branded page, and feed qualified leads straight into your dashboard — ready for Ava to call, text, and convert automatically.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-lg">Facebook + Instagram ad setup and optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-lg">Territory-branded landing page</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-lg">AI call, text, and email follow-ups in real-time</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-lg">ROI dashboard with cost-per-lead tracking</span>
                  </li>
                </ul>
                <Button 
                  size="lg" 
                  variant="accent"
                  onClick={scrollToBooking}
                  className="text-lg"
                >
                  🔥 Activate My Growth Plan →
                </Button>
              </div>
              <div className="relative">
                <img 
                  src={growthPlanImage} 
                  alt="Realtors viewing AI-powered ad analytics and growth metrics"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-background to-primary/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                What Realtors Are Saying
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 hover:shadow-lg transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <Quote className="w-10 h-10 text-accent/20 mb-4" />
                <p className="text-lg mb-4">
                  "AI booked 9 appointments in my first month — plus 17 new leads from the Growth Plan!"
                </p>
                <p className="font-bold">— Jason M.</p>
              </Card>

              <Card className="p-8 hover:shadow-lg transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <Quote className="w-10 h-10 text-accent/20 mb-4" />
                <p className="text-lg mb-4">
                  "Closed 3 old leads in 2 weeks. This system paid for itself fast."
                </p>
                <p className="font-bold">— Melissa R.</p>
              </Card>

              <Card className="p-8 hover:shadow-lg transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <Quote className="w-10 h-10 text-accent/20 mb-4" />
                <p className="text-lg mb-4">
                  "I was skeptical at first, but seeing every call in my dashboard gave me total confidence."
                </p>
                <p className="font-bold">— Tom L.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Guarantee Section */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <Card className="p-12 bg-gradient-to-br from-accent/10 to-primary/5 border-accent/30 text-center">
              <Shield className="w-16 h-16 text-accent mx-auto mb-6" />
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Only 10 Realtors Accepted Each Month
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Each setup is fully customized — your AI voice, your branding, and your local territory. We onboard just 10 agents per month to ensure quality. If you don't close 2 extra deals in 90 days, your next 3 months are free.
              </p>
              <Button 
                size="lg" 
                variant="accent"
                onClick={scrollToBooking}
                className="text-lg"
              >
                🚀 Claim My Spot → Book 15-Minute Call
              </Button>
            </Card>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="relative py-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent/20 to-background opacity-90" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-6xl font-bold text-foreground">
                  You've Seen Ava. Now Let's See Results.
                </h2>
                <p className="text-xl text-muted-foreground">
                  Schedule your free 15-minute Discovery Call and see how fast we can transform your lead flow and follow-up.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <DemoModal industry="realtor">
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="text-lg bg-background/80 backdrop-blur"
                    >
                      🎧 Try Ava Demo
                    </Button>
                  </DemoModal>
                  <Button 
                    size="lg" 
                    variant="accent"
                    onClick={scrollToBooking}
                    className="text-lg"
                  >
                    📅 Book Discovery Call
                  </Button>
                </div>
                <div className="flex gap-6 pt-4">
                  <div className="flex items-center gap-2">
                    <Handshake className="w-6 h-6 text-accent" />
                    <span className="text-sm">Trust & Partnership</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-6 h-6 text-accent" />
                    <span className="text-sm">AI Innovation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Brain className="w-6 h-6 text-accent" />
                    <span className="text-sm">Smart Automation</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src={partnershipImage} 
                  alt="Realtor shaking hands with AI avatar representing trust and partnership"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default RealEstate;
