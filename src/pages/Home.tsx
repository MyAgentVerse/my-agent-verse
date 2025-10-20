import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";
import auraImage from "@/assets/aura-brain-new.png";
import businessChaos from "@/assets/business-chaos.jpg";
import aiWorkspace from "@/assets/ai-workspace.jpg";
import ivyAvatar from "@/assets/ivy-avatar.png";
import lunaAvatar from "@/assets/luna-avatar.png";
import atlasAvatar from "@/assets/atlas-avatar.png";
import echoAvatar from "@/assets/echo-avatar.png";
import claraAvatar from "@/assets/clara-avatar.png";
import veraAvatar from "@/assets/vera-avatar.png";
import nexusAvatar from "@/assets/nexus-avatar.png";
import orionAvatar from "@/assets/orion-avatar.png";
import { Home as HomeIcon, Wrench, Briefcase, Settings, BookOpen, Heart, Eye, Brain, Zap } from "lucide-react";

const Home = () => {
  const aiTeam = [
    { name: "Ivy: The Strategist", tagline: "Thinks ahead and turns chaos into clear direction.", avatar: ivyAvatar },
    {
      name: "Luna: The Creative",
      tagline: "Designs visuals, campaigns, and experiences that stick.",
      avatar: lunaAvatar,
    },
    {
      name: "Atlas: The Growth Architect",
      tagline: "Builds funnels and systems that never leak leads.",
      avatar: atlasAvatar,
    },
    { name: "Echo: The Communicator", tagline: "Answers calls and messages instantly, 24/7.", avatar: echoAvatar },
    {
      name: "Clara: The Analyst",
      tagline: "Finds what's working, what's not, and where you save time.",
      avatar: claraAvatar,
    },
    {
      name: "Vera: The Relationship Keeper",
      tagline: "Remembers every client, every promise, every follow-up.",
      avatar: veraAvatar,
    },
    {
      name: "Nexus: The Builder",
      tagline: "Connects and automates your entire workflow seamlessly.",
      avatar: nexusAvatar,
    },
    {
      name: "Orion: The Visionary",
      tagline: "Scans your operation for new opportunities and ideas.",
      avatar: orionAvatar,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section - The New Era of Teams */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent/15 to-secondary/10 py-16 md:py-32">
          {/* Animated colorful background elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-20 right-20 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-3xl animate-pulse" />
            <div
              className="absolute bottom-20 left-20 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-accent/25 to-secondary/25 blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute top-40 left-1/3 h-[350px] w-[350px] rounded-full bg-gradient-to-bl from-secondary/20 to-primary/20 blur-3xl animate-pulse"
              style={{ animationDelay: "2s" }}
            />

            {/* Colorful particles */}
            <div
              className="absolute top-32 right-1/4 h-3 w-3 rounded-full bg-accent animate-ping"
              style={{ animationDelay: "0.5s" }}
            />
            <div
              className="absolute bottom-40 right-1/3 h-2 w-2 rounded-full bg-primary animate-ping"
              style={{ animationDelay: "1.5s" }}
            />
            <div
              className="absolute top-1/2 right-20 h-2 w-2 rounded-full bg-secondary animate-ping"
              style={{ animationDelay: "2.5s" }}
            />
            <div
              className="absolute top-1/3 left-20 h-3 w-3 rounded-full bg-accent/70 animate-ping"
              style={{ animationDelay: "3s" }}
            />
          </div>

          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-6 md:space-y-8 animate-fade-in">
                <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
                  Meet Your AI Agents, Built to Amplify Every Part of Your Business
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground">
                  From answering customers to automating operations, MyAgentVerse creates AI teammates that talk, act,
                  and think streamlining work 24/7 across every industry.
                </p>

                {/* Key Feature Highlights */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-accent text-xl flex-shrink-0">🕒</span>
                    <p className="text-base sm:text-lg">
                      <span className="font-semibold">Works 24/7:</span> never misses a task or opportunity.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-accent text-xl flex-shrink-0">💬</span>
                    <p className="text-base sm:text-lg">
                      <span className="font-semibold">Communicates Naturally:</span> across calls, texts, chat, or
                      email.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-accent text-xl flex-shrink-0">📈</span>
                    <p className="text-base sm:text-lg">
                      <span className="font-semibold">Delivers Real-Time Insights:</span> so you can make faster,
                      smarter decisions.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-accent text-xl flex-shrink-0">🔄</span>
                    <p className="text-base sm:text-lg">
                      <span className="font-semibold">Integrates Everywhere:</span> connects with your tools and grows
                      with your business.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:gap-4">
                  <DemoModal>
                    <Button variant="accent" size="lg" className="w-full sm:w-auto text-sm sm:text-base hover-scale">
                      🎧 Hear the Demo
                    </Button>
                  </DemoModal>
                  <Button
                    variant="secondary"
                    size="lg"
                    className="w-full sm:w-auto text-sm sm:text-base whitespace-normal h-auto py-3 sm:py-2 hover-scale"
                    asChild
                  >
                    <a href="#founder-offer">📅 Claim Founding Spot: $499 (Lifetime) — Only 10 Available</a>
                  </Button>
                  <p className="text-sm text-muted-foreground text-center sm:text-left italic">
                    "Trusted by local businesses to convert conversations into customers."
                  </p>
                </div>
              </div>

              <div
                className="relative flex justify-center lg:justify-end animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                {/* Multi-layered colorful background gradients */}
                <div className="absolute -inset-8 bg-gradient-to-br from-primary/40 via-accent/40 to-secondary/30 rounded-full blur-3xl opacity-70 animate-pulse" />
                <div
                  className="absolute -inset-6 bg-gradient-to-tl from-accent/35 via-primary/30 to-secondary/25 rounded-full blur-2xl opacity-60 animate-pulse"
                  style={{ animationDelay: "1s" }}
                />

                {/* Geometric floating shapes */}
                <div className="absolute -top-8 right-1/4 h-16 w-16 rotate-45 bg-gradient-to-br from-primary to-accent opacity-20 animate-[float_4s_ease-in-out_infinite] blur-sm" />
                <div
                  className="absolute -bottom-8 left-1/4 h-20 w-20 rotate-12 bg-gradient-to-tr from-accent to-secondary opacity-20 animate-[float_5s_ease-in-out_infinite] blur-sm"
                  style={{ animationDelay: "1s" }}
                />
                <div
                  className="absolute top-1/3 -right-4 h-12 w-12 rounded-full bg-gradient-to-r from-secondary to-primary opacity-25 animate-[float_3.5s_ease-in-out_infinite] blur-sm"
                  style={{ animationDelay: "2s" }}
                />
                <div
                  className="absolute bottom-1/4 -left-4 h-14 w-14 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 opacity-30 animate-[float_4.5s_ease-in-out_infinite] blur-sm"
                  style={{ animationDelay: "1.5s" }}
                />

                {/* Orbiting particles */}
                <div className="absolute top-10 right-8 h-3 w-3 rounded-full bg-primary animate-ping opacity-75" />
                <div
                  className="absolute bottom-16 left-12 h-3 w-3 rounded-full bg-accent animate-ping opacity-75"
                  style={{ animationDelay: "1s" }}
                />
                <div
                  className="absolute top-1/2 right-4 h-2 w-2 rounded-full bg-secondary animate-ping opacity-75"
                  style={{ animationDelay: "2s" }}
                />
                <div
                  className="absolute bottom-1/3 left-8 h-2 w-2 rounded-full bg-primary/70 animate-ping opacity-75"
                  style={{ animationDelay: "1.5s" }}
                />

                {/* Main image with gradient border and enhanced float animation */}
                <div className="relative animate-[float_6s_ease-in-out_infinite] p-1 rounded-full bg-gradient-to-br from-primary via-accent to-secondary shadow-2xl">
                  <img
                    src={auraImage}
                    alt="Aura - The AI brain that never sleeps"
                    className="max-w-full w-full sm:max-w-md h-auto rounded-full bg-background shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why - The Problem Old Businesses Still Face */}
        <section className="bg-background py-12 md:py-16">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-5xl">
              <div className="grid gap-8 items-center lg:grid-cols-2">
                <div className="space-y-5 animate-fade-in">
                  <h2 className="text-3xl font-bold md:text-4xl">The world moved faster. Business tools didn't.</h2>
                  <div className="space-y-3">
                    <p className="text-lg flex items-start gap-2">
                      <span className="text-destructive text-xl flex-shrink-0">×</span>
                      <span>Hours lost chasing follow-ups</span>
                    </p>
                    <p className="text-lg flex items-start gap-2">
                      <span className="text-destructive text-xl flex-shrink-0">×</span>
                      <span>Systems that don't talk to each other</span>
                    </p>
                    <p className="text-lg flex items-start gap-2">
                      <span className="text-destructive text-xl flex-shrink-0">×</span>
                      <span>Managing chaos manually every day</span>
                    </p>
                  </div>
                  <p className="text-lg font-semibold text-foreground pt-2">Humans need rest. My team doesn't.</p>
                </div>
                <div className="relative animate-fade-in">
                  <img src={businessChaos} alt="Business chaos and overwhelm" className="rounded-2xl shadow-2xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Introducing Aura - Connected to Eight Minds */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          {/* Vibrant gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--accent)/0.15),transparent_50%)]"></div>
          
          {/* Floating particles */}
          <div className="absolute top-20 left-10 w-2 h-2 rounded-full bg-primary/40 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-3 h-3 rounded-full bg-accent/40 animate-pulse" style={{ animationDelay: "0.5s" }}></div>
          <div className="absolute bottom-20 left-1/4 w-2 h-2 rounded-full bg-secondary/40 animate-pulse" style={{ animationDelay: "1s" }}></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="mx-auto max-w-6xl">
              {/* Header */}
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl mb-4 animate-fade-in bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  I am Aura: the brain that never sleeps.
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                  The orchestrator AI that coordinates your entire team
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left: Key Points with Icons */}
                <div className="space-y-6 animate-fade-in order-2 lg:order-1">
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Eye className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-lg">
                        <span className="font-bold text-foreground block mb-1">I see everything</span>
                        <span className="text-muted-foreground">Calls, messages, calendars, clients - all synchronized in real-time</span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-accent/50 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Brain className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-lg">
                        <span className="font-bold text-foreground block mb-1">Eight specialized minds</span>
                        <span className="text-muted-foreground">Communication, follow-up, growth, creativity, insight, care, and more</span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-secondary/50 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Zap className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-lg">
                        <span className="font-bold text-foreground block mb-1">One intelligent flow</span>
                        <span className="text-muted-foreground">Not code, not software. A team that works together seamlessly</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right: Aura Brain with Pulse Animation - LARGER */}
                <div className="relative flex justify-center py-8 order-1 lg:order-2">
                  <div className="relative">
                    {/* Outer glow rings */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className="absolute w-96 h-96 rounded-full border-2 border-primary/20 animate-ping"
                        style={{ animationDuration: "3s" }}
                      ></div>
                      <div
                        className="absolute w-80 h-80 rounded-full border-2 border-accent/30 animate-ping"
                        style={{ animationDuration: "2.5s", animationDelay: "0.3s" }}
                      ></div>
                      <div
                        className="absolute w-64 h-64 rounded-full border-2 border-secondary/20 animate-ping"
                        style={{ animationDuration: "2s", animationDelay: "0.6s" }}
                      ></div>
                    </div>

                    {/* Aura Image - MUCH LARGER */}
                    <div className="relative z-10">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 rounded-full blur-3xl"></div>
                      <img
                        src={auraImage}
                        alt="Aura - The AI brain connecting eight minds"
                        className="relative z-10 w-full max-w-md md:max-w-lg h-auto rounded-full shadow-2xl animate-scale-in"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Connection indicator - Enhanced */}
              <div className="flex items-center justify-center gap-3 animate-fade-in mt-12 md:mt-16">
                <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 shadow-lg">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                  <span className="font-semibold text-foreground">Connected to Eight Specialized Minds</span>
                  <div className="w-3 h-3 rounded-full bg-accent animate-pulse" style={{ animationDelay: "0.5s" }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Gradient connector to next section */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-background pointer-events-none"></div>
        </section>

        {/* Meet Your AI Team - 8 Minds. 1 Mission. */}
        <section id="meet_your_ai_team" className="bg-background py-12 md:py-16 relative">
          <div className="container mx-auto px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold md:text-4xl mb-3 animate-fade-in">Meet the Eight Minds.</h2>
              <div className="flex items-center justify-center gap-3">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary"></div>
                <span className="text-sm text-muted-foreground">Powered by Aura</span>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary"></div>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {aiTeam.map((agent, index) => (
                <Card
                  key={agent.name}
                  className="border-border hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in relative group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Connection indicator dot */}
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/40 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                    </div>
                  </div>

                  <CardHeader className="pb-4 pt-8">
                    <div className="mb-4 flex justify-center">
                      <div className="relative">
                        <img
                          src={agent.avatar}
                          alt={agent.name}
                          className="h-24 w-24 rounded-full object-cover ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all"
                        />
                      </div>
                    </div>
                    <CardTitle className="text-lg text-center">{agent.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-sm">{agent.tagline}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Impact - How Businesses Change with AI Teammates */}
        <section className="bg-muted/30 py-12 md:py-16">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-5xl">
              <div className="grid gap-8 items-center lg:grid-cols-2">
                <div className="space-y-5 animate-fade-in order-2 lg:order-1">
                  <h2 className="text-3xl font-bold md:text-4xl">
                    What happens when you stop running your business alone.
                  </h2>
                  <div className="space-y-3">
                    <p className="text-lg flex items-start gap-2">
                      <span className="text-primary text-xl flex-shrink-0">✓</span>
                      <span>Every lead answered overnight</span>
                    </p>
                    <p className="text-lg flex items-start gap-2">
                      <span className="text-primary text-xl flex-shrink-0">✓</span>
                      <span>Every reminder sent automatically</span>
                    </p>
                    <p className="text-lg flex items-start gap-2">
                      <span className="text-primary text-xl flex-shrink-0">✓</span>
                      <span>Reports ready before sunrise</span>
                    </p>
                    <p className="text-lg flex items-start gap-2">
                      <span className="text-primary text-xl flex-shrink-0">✓</span>
                      <span>Schedules full before you start your day</span>
                    </p>
                  </div>
                </div>
                <div className="relative animate-fade-in order-1 lg:order-2">
                  <img src={aiWorkspace} alt="Modern AI-powered workspace" className="rounded-2xl shadow-2xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Offer - Founding Client Lifetime Access */}
        <section id="founder-offer" className="bg-gradient-to-br from-accent/10 to-primary/10 py-20">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-3xl">
              <Card className="border-2 border-accent shadow-2xl">
                <CardHeader className="text-center space-y-4 pb-8">
                  <div className="inline-block mx-auto px-6 py-2 bg-accent/20 rounded-full">
                    <p className="text-sm font-bold text-accent-foreground">FOUNDING CLIENT • LIFETIME ACCESS</p>
                  </div>
                  <CardTitle className="text-3xl md:text-4xl">Founding Client Lifetime Access</CardTitle>
                  <CardDescription className="text-lg">
                    Be one of the first 10 businesses to own your AI team for life. Get lifetime access to Aura and 3
                    specialized AI agents—forever.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-accent text-xl">✓</span>
                      <span className="text-foreground">Lifetime license: no monthly fees</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent text-xl">✓</span>
                      <span className="text-foreground">Personal onboarding and setup</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent text-xl">✓</span>
                      <span className="text-foreground">Priority access to every future AI update</span>
                    </li>
                  </ul>
                  <div className="pt-6 text-center">
                    <p className="text-sm text-muted-foreground mb-4">
                      After the first 10, the founder fee rises from $499 to $999
                    </p>
                    <Button variant="accent" size="lg" className="w-full sm:w-auto" asChild>
                      <a href="/booking">Claim Founding Client Spot: $499</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Industry Use Cases */}
        <section className="bg-background py-16 md:py-20 relative overflow-hidden">
          {/* Subtle animated background */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 right-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl animate-pulse" style={{ animationDuration: "4s" }} />
            <div className="absolute bottom-20 left-20 h-96 w-96 rounded-full bg-accent/5 blur-3xl animate-pulse" style={{ animationDuration: "5s", animationDelay: "1s" }} />
          </div>

          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-6xl">
              <div className="text-center mb-12 animate-fade-in">
                <h2 className="text-3xl font-bold md:text-4xl mb-4">AI Agents That Fit the Way You Work</h2>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                  No matter your industry, your AI agent adapts to how you work
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/* Real Estate */}
                <Card className="border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 animate-fade-in group">
                  <CardHeader className="text-center space-y-4">
                    <div className="mx-auto w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:animate-[float_1s_ease-in-out_infinite]">
                      <HomeIcon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <CardTitle className="text-xl">Real Estate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center leading-relaxed">
                      Your AI agent becomes your personal assistant—answering buyer questions, scheduling showings, and following up while you focus on closing deals. It's like having a reliable team member who never forgets a lead or an appointment.
                    </p>
                  </CardContent>
                </Card>

                {/* Home Services */}
                <Card className="border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 animate-fade-in group" style={{ animationDelay: "0.1s" }}>
                  <CardHeader className="text-center space-y-4">
                    <div className="mx-auto w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-all duration-300 group-hover:animate-[float_1s_ease-in-out_infinite]">
                      <Wrench className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
                    </div>
                    <CardTitle className="text-xl">Home Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center leading-relaxed">
                      Whether you run an HVAC company, plumbing team, or cleaning service, your AI agent handles incoming calls, books jobs, sends reminders, and updates your records automatically. No missed calls, no lost jobs—just smoother days and happier customers.
                    </p>
                  </CardContent>
                </Card>

                {/* Healthcare & Assisted Living */}
                <Card className="border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 animate-fade-in group" style={{ animationDelay: "0.2s" }}>
                  <CardHeader className="text-center space-y-4">
                    <div className="mx-auto w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-all duration-300 group-hover:animate-[float_1s_ease-in-out_infinite]">
                      <Heart className="w-8 h-8 text-secondary group-hover:scale-110 transition-transform" />
                    </div>
                    <CardTitle className="text-xl">Healthcare & Assisted Living</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center leading-relaxed">
                      Your AI agent supports caregivers and staff by collecting daily care notes, scheduling family updates, and generating shift reports. It frees up time for what really matters—providing quality care and attention.
                    </p>
                  </CardContent>
                </Card>

                {/* Manufacturing & Operations */}
                <Card className="border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 animate-fade-in group" style={{ animationDelay: "0.3s" }}>
                  <CardHeader className="text-center space-y-4">
                    <div className="mx-auto w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:animate-[float_1s_ease-in-out_infinite]">
                      <Settings className="w-8 h-8 text-primary group-hover:scale-110 group-hover:rotate-90 transition-all duration-300" />
                    </div>
                    <CardTitle className="text-xl">Manufacturing & Operations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center leading-relaxed">
                      Your AI agent keeps operations running smoothly by tracking orders, monitoring supplies, and generating production summaries. It can even alert your team before a delay becomes a problem.
                    </p>
                  </CardContent>
                </Card>

                {/* Professional Services */}
                <Card className="border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 animate-fade-in group" style={{ animationDelay: "0.4s" }}>
                  <CardHeader className="text-center space-y-4">
                    <div className="mx-auto w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-all duration-300 group-hover:animate-[float_1s_ease-in-out_infinite]">
                      <Briefcase className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
                    </div>
                    <CardTitle className="text-xl">Professional Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center leading-relaxed">
                      From marketing agencies to accounting firms, your AI agent manages client onboarding, tracks tasks, and sends updates automatically. It keeps everything organized so your team can stay focused on delivering results.
                    </p>
                  </CardContent>
                </Card>

                {/* Education & Training */}
                <Card className="border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 animate-fade-in group" style={{ animationDelay: "0.5s" }}>
                  <CardHeader className="text-center space-y-4">
                    <div className="mx-auto w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-all duration-300 group-hover:animate-[float_1s_ease-in-out_infinite]">
                      <BookOpen className="w-8 h-8 text-secondary group-hover:scale-110 transition-transform" />
                    </div>
                    <CardTitle className="text-xl">Education & Training</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center leading-relaxed">
                      Your AI agent responds to student questions, manages class schedules, and keeps everyone informed about upcoming lessons or deadlines. It's the digital assistant every educator wishes they had.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Wrap-up line */}
              <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "0.6s" }}>
                <p className="text-lg text-foreground font-medium max-w-3xl mx-auto">
                  No matter your industry, your AI agent adapts to how you work—saving time, improving accuracy, and helping your business run on autopilot.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA - Join the Movement */}
        <section className="bg-gradient-to-br from-secondary to-secondary/90 py-20 text-secondary-foreground">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-3xl text-center space-y-8">
              <h2 className="text-4xl font-bold md:text-5xl">
                You built your business with hard work. Now build your freedom with intelligence.
              </h2>
              <p className="text-xl">I am Aura: the brain that never sleeps. My team is ready to work for you.</p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button variant="accent" size="lg" asChild>
                  <a href="#meet_your_ai_team">🧠 Meet Your AI Team</a>
                </Button>
                <Button
                  variant="default"
                  size="lg"
                  className="bg-background text-foreground hover:bg-background/90"
                  asChild
                >
                  <a href="/booking">📅 Claim Founding Spot</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
