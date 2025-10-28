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
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/10 to-secondary/5 py-20 md:py-32">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-20 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-3xl animate-pulse" />
            <div className="absolute bottom-20 left-20 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-accent/25 to-secondary/25 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          
          <div className="container relative mx-auto px-6">
            <div className="mx-auto max-w-7xl">
              <div className="grid items-center gap-12 lg:grid-cols-2">
                {/* Left Content */}
                <div className="space-y-6 animate-fade-in">
                  <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                    Meet Your AI Agents. Built to Work for You, 24/7.
                  </h1>
                  
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Automate calls, tasks, and customer conversations with intelligent agents trained to solve real business problems so your team can focus on growth.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button 
                      size="lg" 
                      variant="accent"
                      className="text-lg rounded-xl hover-scale shadow-lg animate-fade-in"
                      asChild
                    >
                      <a href="/booking">📅 Book Demo</a>
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="text-lg rounded-xl hover-scale shadow-lg animate-fade-in"
                      style={{ animationDelay: '0.1s' }}
                      asChild
                    >
                      <a href="/consultation">
                        Book a Free AI Strategy Call
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Right Content - Hero Image */}
                <div className="relative animate-fade-in hover-scale" style={{ animationDelay: '0.2s' }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-accent/40 to-secondary/30 blur-3xl animate-pulse" style={{ animationDuration: '3s' }} />
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
        <section className="bg-gradient-to-br from-background via-primary/5 to-accent/10 py-20">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-6xl">
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div className="order-2 lg:order-1 animate-fade-in">
                  <img 
                    src={aiMatters} 
                    alt="AI transformation infographic" 
                    className="rounded-xl shadow-lg hover-scale"
                  />
                </div>
                
                <div className="order-1 lg:order-2 space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <h2 className="text-3xl font-bold md:text-4xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Why AI Matters Right Now
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Every day, thousands of businesses lose time and money doing tasks AI could handle faster, smarter, and around the clock. MyAgentVerse helps companies unlock that potential, turning automation into growth.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 hover-scale animate-fade-in" style={{ animationDelay: '0.3s' }}>
                      <Clock className="h-8 w-8 text-primary" />
                      <span className="font-semibold">Save Time</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-accent/10 to-primary/10 hover-scale animate-fade-in" style={{ animationDelay: '0.4s' }}>
                      <TrendingUp className="h-8 w-8 text-accent" />
                      <span className="font-semibold">Boost Growth</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 hover-scale animate-fade-in" style={{ animationDelay: '0.5s' }}>
                      <Bot className="h-8 w-8 text-primary" />
                      <span className="font-semibold">24/7 Automation</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-secondary/10 to-accent/10 hover-scale animate-fade-in" style={{ animationDelay: '0.6s' }}>
                      <Settings className="h-8 w-8 text-secondary" />
                      <span className="font-semibold">Smart Systems</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Businesses Are Automating Grid */}
        <section className="bg-background py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
          <div className="container relative mx-auto px-6">
            <div className="mx-auto max-w-6xl">
              <div className="text-center mb-12 animate-fade-in">
                <h2 className="text-3xl font-bold md:text-4xl mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  What Businesses Are Automating with AI Today
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  From small teams to enterprise operations, AI is helping businesses work smarter. Here are real use cases we help implement every day:
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
                <Card className="bg-card border hover:shadow-xl transition-all duration-300 hover-scale hover:border-primary animate-fade-in" style={{ animationDelay: '0.1s' }}>
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                      <Phone className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Front Desk AI</h3>
                    <p className="text-muted-foreground">
                      Answers calls, books appointments, and qualifies leads automatically.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border hover:shadow-xl transition-all duration-300 hover-scale hover:border-accent animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-4">
                      <MessageCircle className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Chat AI</h3>
                    <p className="text-muted-foreground">
                      Handles website chats, FAQs, and customer support 24/7.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border hover:shadow-xl transition-all duration-300 hover-scale hover:border-primary animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                      <Calendar className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Follow Up AI</h3>
                    <p className="text-muted-foreground">
                      Reconnects with leads, rebooks missed calls, and boosts retention.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border hover:shadow-xl transition-all duration-300 hover-scale hover:border-secondary animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center mb-4">
                      <Database className="h-6 w-6 text-secondary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Operations AI</h3>
                    <p className="text-muted-foreground">
                      Updates CRMs, organizes data, and streamlines team workflows.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border hover:shadow-xl transition-all duration-300 hover-scale hover:border-accent animate-fade-in" style={{ animationDelay: '0.5s' }}>
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center mb-4">
                      <BarChart className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Marketing AI</h3>
                    <p className="text-muted-foreground">
                      Creates social posts, ad copy, and emails that convert in seconds.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border hover:shadow-xl transition-all duration-300 hover-scale hover:border-primary animate-fade-in" style={{ animationDelay: '0.6s' }}>
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                      <Factory className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Industry Specific AI</h3>
                    <p className="text-muted-foreground">
                      Adapts to any field, from real estate to manufacturing to healthcare.
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
        <section className="bg-background py-20">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-6xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold md:text-4xl mb-3">
                  The Problem: Human Hours Can't Scale
                </h2>
                <h3 className="text-2xl font-semibold text-primary mb-6">
                  The Solution: Intelligent AI Agents That Never Sleep
                </h3>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Missed calls, delayed responses, manual admin. They all cost your business money. AI agents from MyAgentVerse don't replace your team, they empower them by taking care of repetitive work so your people can focus on what really matters.
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


        {/* Why Choose MyAgentVerse */}
        <section className="bg-secondary text-secondary-foreground py-20">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-6xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold md:text-4xl mb-4">
                  Why Choose MyAgentVerse
                </h2>
                <p className="text-xl opacity-80 max-w-2xl mx-auto">
                  We combine real human strategy with cutting edge AI execution.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-3 mb-12">
                <Card className="bg-secondary-foreground/5 border-secondary-foreground/10 backdrop-blur hover-scale">
                  <CardContent className="pt-6 text-center">
                    <Puzzle className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-3">Custom Built AI Agents</h3>
                    <p className="opacity-80">
                      Each AI agent is tailored to your workflow, tone, and business goals.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-secondary-foreground/5 border-secondary-foreground/10 backdrop-blur hover-scale">
                  <CardContent className="pt-6 text-center">
                    <Link2 className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-3">Seamless Integration</h3>
                    <p className="opacity-80">
                      Our agents connect with your tools, from CRMs to calendars, without friction.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-secondary-foreground/5 border-secondary-foreground/10 backdrop-blur hover-scale">
                  <CardContent className="pt-6 text-center">
                    <Lightbulb className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-3">Proven ROI</h3>
                    <p className="opacity-80">
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
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-background py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
          
          <div className="container relative mx-auto px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-4xl font-bold md:text-5xl mb-6">
                Explore What AI Could Do for You
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Every business has hidden opportunities for AI. Let's uncover yours today.
              </p>
              
              <Button 
                size="lg"
                variant="accent"
                className="text-lg rounded-xl hover-scale shadow-lg px-8 animate-fade-in"
                asChild
              >
                <a href="/consultation">
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
