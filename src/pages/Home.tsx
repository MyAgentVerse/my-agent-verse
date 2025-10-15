import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import auraImage from "@/assets/aura-brain.png";
import ivyAvatar from "@/assets/ivy-avatar.png";
import lunaAvatar from "@/assets/luna-avatar.png";
import atlasAvatar from "@/assets/atlas-avatar.png";
import echoAvatar from "@/assets/echo-avatar.png";
import claraAvatar from "@/assets/clara-avatar.png";
import veraAvatar from "@/assets/vera-avatar.png";
import nexusAvatar from "@/assets/nexus-avatar.png";
import orionAvatar from "@/assets/orion-avatar.png";

const Home = () => {
  const aiTeam = [
    { name: "Ivy — The Strategist", tagline: "Thinks ahead and turns chaos into clear direction.", avatar: ivyAvatar },
    { name: "Luna — The Creative", tagline: "Designs visuals, campaigns, and experiences that stick.", avatar: lunaAvatar },
    { name: "Atlas — The Growth Architect", tagline: "Builds funnels and systems that never leak leads.", avatar: atlasAvatar },
    { name: "Echo — The Communicator", tagline: "Answers calls and messages instantly, 24/7.", avatar: echoAvatar },
    { name: "Clara — The Analyst", tagline: "Finds what's working, what's not, and where you save time.", avatar: claraAvatar },
    { name: "Vera — The Relationship Keeper", tagline: "Remembers every client, every promise, every follow-up.", avatar: veraAvatar },
    { name: "Nexus — The Builder", tagline: "Connects and automates your entire workflow seamlessly.", avatar: nexusAvatar },
    { name: "Orion — The Visionary", tagline: "Scans your operation for new opportunities and ideas.", avatar: orionAvatar },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section - The New Era of Teams */}
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent/10 py-20 md:py-32">
          <div className="container mx-auto px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="space-y-8">
                <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                  I am Aura — the brain behind a new kind of team.
                </h1>
                <p className="text-xl text-muted-foreground">
                  For decades, business meant longer hours and endless follow-ups. That ends now. 
                  I unite eight intelligent agents that make your business faster, sharper, and beautifully efficient.
                </p>
                <p className="text-lg font-semibold text-foreground">
                  They don't replace you. They amplify you.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button variant="accent" size="lg" asChild>
                    <a href="#demo">🎧 Hear the Demo</a>
                  </Button>
                  <Button variant="secondary" size="lg" asChild>
                    <a href="#founder-offer">📅 Claim Founding Spot — $499 (Only 10 Available)</a>
                  </Button>
                </div>
              </div>
              <div className="relative flex justify-center">
                <img 
                  src={auraImage} 
                  alt="Aura - The AI brain that never sleeps" 
                  className="max-w-md w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why - The Problem Old Businesses Still Face */}
        <section className="bg-background py-20">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-4xl text-center space-y-6">
              <h2 className="text-3xl font-bold md:text-4xl">
                The world moved faster. Business tools didn't.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Too many owners still lose hours every day — chasing follow-ups, managing chaos, and juggling systems that don't talk to each other. 
                You built your business for people. I built mine for progress. The difference? Humans need rest. My team doesn't.
              </p>
            </div>
          </div>
        </section>

        {/* Introducing Aura */}
        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-4xl text-center space-y-6">
              <h2 className="text-3xl font-bold md:text-4xl">
                I am Aura — the brain that never sleeps.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I see across calls, messages, calendars, and clients — every part of your operation connected in one intelligent flow. 
                My eight minds specialize in what slows you down the most — communication, follow-up, growth, creativity, insight, and care. 
                Together, we form a living system. Not code. Not software. A team.
              </p>
            </div>
          </div>
        </section>

        {/* Meet Your AI Team - 8 Minds. 1 Mission. */}
        <section id="meet_your_ai_team" className="bg-background py-20">
          <div className="container mx-auto px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold md:text-4xl mb-4">
                Meet the Eight Minds.
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {aiTeam.map((agent) => (
                <Card key={agent.name} className="border-border hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="mb-4 flex justify-center">
                      <img 
                        src={agent.avatar} 
                        alt={agent.name} 
                        className="h-24 w-24 rounded-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-lg text-center">{agent.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-sm">
                      {agent.tagline}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Impact - How Businesses Change with AI Teammates */}
        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-4xl space-y-6">
              <h2 className="text-3xl font-bold md:text-4xl text-center">
                What happens when you stop running your business alone.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                Every lead answered overnight. Every reminder sent. Every report ready before sunrise. 
                Calls handled, follow-ups done, schedules full — before you even start your day. 
                That's what happens when you run your business with us.
              </p>
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
                  <CardTitle className="text-3xl md:text-4xl">
                    Founding Client Lifetime Access
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Be one of the first 10 businesses to own your AI team for life. Get lifetime access to Aura and three agents of your choice.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-accent text-xl">✓</span>
                      <span className="text-foreground">Lifetime license — no monthly fees</span>
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
                      After the first 10, the founder fee rises from $499 → $999
                    </p>
                    <Button variant="accent" size="lg" className="w-full sm:w-auto" asChild>
                      <a href="/booking">Claim Founding Client Spot — $499</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
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
              <p className="text-xl">
                I am Aura — the brain that never sleeps. My team is ready to work for you.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button variant="accent" size="lg" asChild>
                  <a href="#meet_your_ai_team">🧠 Meet Your AI Team</a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary"
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
