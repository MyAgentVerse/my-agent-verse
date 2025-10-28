import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ElevenLabsVoiceAgent from "@/components/ElevenLabsVoiceAgent";
import heroWorkspace from "@/assets/hero-ai-workspace.jpg";
import aiMatters from "@/assets/ai-matters-infographic.jpg";
import aiAvatars from "@/assets/ai-avatars-grid.jpg";
import problemSolution from "@/assets/problem-solution-split.jpg";
import avaDemo from "@/assets/ava-voice-demo.jpg";
import collaboration from "@/assets/why-choose-collaboration.jpg";
import { 
  Phone, 
  MessageCircle, 
  Calendar, 
  Database, 
  BarChart, 
  Factory,
  Clock,
  TrendingUp,
  Bot,
  Settings,
  Puzzle,
  Link2,
  Lightbulb
} from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0A192F] via-background to-accent/10 py-20 md:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
          
          <div className="container relative mx-auto px-6">
            <div className="mx-auto max-w-7xl">
              <div className="grid items-center gap-12 lg:grid-cols-2">
                {/* Left Content */}
                <div className="space-y-6 animate-fade-in">
                  <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                    Meet Your AI Agents — Built to Work for You, 24/7.
                  </h1>
                  
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Automate calls, tasks, and customer conversations with intelligent agents trained to solve real business problems — so your team can focus on growth.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button 
                      size="lg" 
                      className="text-lg rounded-xl hover:scale-105 transition-transform shadow-lg"
                      asChild
                    >
                      <a href="#talk-to-ava">🎙️ Talk to Ava Live</a>
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="text-lg rounded-xl hover:scale-105 transition-transform"
                      asChild
                    >
                      <a href="https://cal.com/myagentverse/consultation" target="_blank" rel="noopener noreferrer">
                        Book a Free AI Strategy Call
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Right Content - Hero Image */}
                <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl" />
                  <img 
                    src={heroWorkspace} 
                    alt="AI collaboration workspace" 
                    className="relative rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why AI Matters Section */}
        <section className="bg-muted/50 py-20">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-6xl">
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div className="order-2 lg:order-1">
                  <img 
                    src={aiMatters} 
                    alt="AI transformation infographic" 
                    className="rounded-xl shadow-lg"
                  />
                </div>
                
                <div className="order-1 lg:order-2 space-y-6">
                  <h2 className="text-3xl font-bold md:text-4xl">
                    Why AI Matters Right Now
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Every day, thousands of businesses lose time and money doing tasks AI could handle faster, smarter, and around the clock. MyAgentVerse helps companies unlock that potential — turning automation into growth.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="flex items-center gap-3">
                      <Clock className="h-8 w-8 text-primary" />
                      <span className="font-semibold">Save Time</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <TrendingUp className="h-8 w-8 text-primary" />
                      <span className="font-semibold">Boost Growth</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Bot className="h-8 w-8 text-accent" />
                      <span className="font-semibold">24/7 Automation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Settings className="h-8 w-8 text-accent" />
                      <span className="font-semibold">Smart Systems</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Businesses Are Automating Grid */}
        <section className="bg-background py-20">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-6xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold md:text-4xl mb-4">
                  What Businesses Are Automating with AI Today
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  From small teams to enterprise operations, AI is helping businesses work smarter. Here are real use cases we help implement every day:
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
                <Card className="hover:shadow-lg transition-shadow hover-scale">
                  <CardContent className="pt-6">
                    <Phone className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2">Front Desk AI</h3>
                    <p className="text-muted-foreground">
                      Answers calls, books appointments, and qualifies leads automatically.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow hover-scale">
                  <CardContent className="pt-6">
                    <MessageCircle className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2">Chat AI</h3>
                    <p className="text-muted-foreground">
                      Handles website chats, FAQs, and customer support 24/7.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow hover-scale">
                  <CardContent className="pt-6">
                    <Calendar className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2">Follow-Up AI</h3>
                    <p className="text-muted-foreground">
                      Reconnects with leads, rebooks missed calls, and boosts retention.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow hover-scale">
                  <CardContent className="pt-6">
                    <Database className="h-10 w-10 text-accent mb-4" />
                    <h3 className="text-xl font-bold mb-2">Operations AI</h3>
                    <p className="text-muted-foreground">
                      Updates CRMs, organizes data, and streamlines team workflows.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow hover-scale">
                  <CardContent className="pt-6">
                    <BarChart className="h-10 w-10 text-accent mb-4" />
                    <h3 className="text-xl font-bold mb-2">Marketing AI</h3>
                    <p className="text-muted-foreground">
                      Creates social posts, ad copy, and emails that convert — in seconds.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow hover-scale">
                  <CardContent className="pt-6">
                    <Factory className="h-10 w-10 text-accent mb-4" />
                    <h3 className="text-xl font-bold mb-2">Industry-Specific AI</h3>
                    <p className="text-muted-foreground">
                      Adapts to any field — from real estate to manufacturing to healthcare.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="relative rounded-xl overflow-hidden">
                <img 
                  src={aiAvatars} 
                  alt="AI avatars grid" 
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Problem/Solution Split */}
        <section className="bg-muted/50 py-20">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-6xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold md:text-4xl mb-3">
                  The Problem: Human Hours Can't Scale
                </h2>
                <h3 className="text-2xl font-semibold text-primary mb-6">
                  The Solution: Intelligent AI Agents That Never Sleep.
                </h3>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Missed calls, delayed responses, manual admin — they all cost your business money. AI agents from MyAgentVerse don't replace your team — they empower them by taking care of repetitive work so your people can focus on what really matters.
                </p>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={problemSolution} 
                  alt="Business transformation" 
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Talk to Ava CTA */}
        <section id="talk-to-ava" className="bg-gradient-to-br from-primary/10 to-accent/10 py-20">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-6xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold md:text-4xl mb-4">
                  🎙️ Experience the Future — Talk to Ava
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  See how natural AI can sound. Talk with Ava, our AI front desk assistant, and experience firsthand how AI can help your business run smoother.
                </p>
              </div>

              <div className="grid gap-12 lg:grid-cols-2 items-center">
                <div className="order-2 lg:order-1">
                  <ElevenLabsVoiceAgent />
                </div>

                <div className="order-1 lg:order-2">
                  <img 
                    src={avaDemo} 
                    alt="Ava AI assistant" 
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose MyAgentVerse */}
        <section className="bg-[#0A192F] text-white py-20">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-6xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold md:text-4xl mb-4">
                  Why Choose MyAgentVerse
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  We combine real human strategy with cutting-edge AI execution.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-3 mb-12">
                <Card className="bg-white/5 border-white/10 backdrop-blur hover-scale">
                  <CardContent className="pt-6 text-center">
                    <Puzzle className="h-12 w-12 text-[#00B7C2] mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-3">Custom-Built AI Agents</h3>
                    <p className="text-gray-300">
                      Each AI agent is tailored to your workflow, tone, and business goals.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 border-white/10 backdrop-blur hover-scale">
                  <CardContent className="pt-6 text-center">
                    <Link2 className="h-12 w-12 text-[#00B7C2] mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-3">Seamless Integration</h3>
                    <p className="text-gray-300">
                      Our agents connect with your tools — from CRMs to calendars — without friction.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 border-white/10 backdrop-blur hover-scale">
                  <CardContent className="pt-6 text-center">
                    <Lightbulb className="h-12 w-12 text-[#00B7C2] mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-3">Proven ROI</h3>
                    <p className="text-gray-300">
                      We focus on measurable outcomes: saved time, captured leads, and faster growth.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="relative rounded-xl overflow-hidden">
                <img 
                  src={collaboration} 
                  alt="Team collaboration" 
                  className="w-full opacity-80"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0085FF]/10 to-[#00B7C2]/10" />
          
          <div className="container relative mx-auto px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-4xl font-bold md:text-5xl mb-6">
                Explore What AI Could Do for You
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Every business has hidden opportunities for AI — let's uncover yours today.
              </p>
              
              <Button 
                size="lg" 
                className="text-lg rounded-xl hover:scale-105 transition-transform shadow-lg px-8"
                asChild
              >
                <a href="https://cal.com/myagentverse/consultation" target="_blank" rel="noopener noreferrer">
                  📅 Book Your Free AI Consultation
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Footer Info */}
        <section className="bg-muted py-12">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <p className="text-xl font-bold mb-2">
                Built by Humans. Powered by AI. Proven by Results.
              </p>
              <p className="text-sm text-muted-foreground">
                © 2025 MyAgentVerse | All Rights Reserved · Powered by Retell AI · ElevenLabs · n8n · Cal.com
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
