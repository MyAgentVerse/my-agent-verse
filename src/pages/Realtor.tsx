import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";
import { Phone, Calendar, Sheet, Mic, Clock, CheckCircle, Star, Headset } from "lucide-react";
import { Helmet } from "react-helmet";

const Realtor = () => {
  return (
    <>
      <Helmet>
        <title>Ava – The 24/7 AI Real Estate Assistant | MyAgentVerse</title>
        <meta name="description" content="Never miss another lead again. Ava answers, qualifies, and books calls 24/7 while you focus on closing deals. Try risk-free for 90 days." />
        <meta name="keywords" content="AI assistant for realtors, real estate automation, missed call solution, AI booking agent, MyAgentVerse Ava" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-accent/5 to-background py-20 md:py-32">
          <div className="container mx-auto px-6">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Never Miss Another Lead Again.
                </h1>
                <p className="text-lg text-muted-foreground">
                  Ava is your 24/7 AI Real Estate Assistant that answers calls, books showings, and follows up in your voice — so you close more deals with zero missed opportunities.
                </p>
                <div className="flex flex-wrap gap-4">
                  <DemoModal>
                    <Button size="lg" className="text-lg px-8">
                      Try Ava Risk-Free
                    </Button>
                  </DemoModal>
                  <Button size="lg" variant="outline" onClick={() => window.open('https://cal.com/myagentverse/discovery', '_blank')}>
                    Book a Demo
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl flex items-center justify-center">
                  <Headset className="h-32 w-32 text-primary animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              The Real Estate Response Problem
            </h2>
            <div className="grid gap-8 md:grid-cols-3 mb-12">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-5xl font-bold text-primary mb-2">78%</div>
                  <p className="text-muted-foreground">of leads go to the first agent who answers</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-5xl font-bold text-primary mb-2">41%</div>
                  <p className="text-muted-foreground">of brokerages fail to respond to new leads</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-5xl font-bold text-primary mb-2">$9,000</div>
                  <p className="text-muted-foreground">average commission lost per missed call</p>
                </CardContent>
              </Card>
            </div>
            <p className="text-center text-lg max-w-3xl mx-auto">
              Ava fixes this instantly — she answers, qualifies, and books appointments 24/7 so you never lose a lead again.
            </p>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Meet Ava – Your AI Real Estate Assistant
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card className="hover-scale">
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Answers Calls & Texts 24/7</h3>
                  <p className="text-muted-foreground">Ava greets prospects, answers questions, and books showings even while you sleep.</p>
                </CardContent>
              </Card>
              <Card className="hover-scale">
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Calendar className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Books Directly to Your Calendar</h3>
                  <p className="text-muted-foreground">Integrated with Cal.com and Google Calendar to auto-schedule appointments.</p>
                </CardContent>
              </Card>
              <Card className="hover-scale">
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Sheet className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Logs & Summarizes Every Call</h3>
                  <p className="text-muted-foreground">All conversations saved in Google Sheets or Airtable via n8n automation.</p>
                </CardContent>
              </Card>
              <Card className="hover-scale">
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mic className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Trained on Your Voice & Brand</h3>
                  <p className="text-muted-foreground">Using ElevenLabs, Ava mirrors your tone and personality so she feels like part of your team.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Video Demo Section */}
        <section className="py-20 bg-gradient-to-br from-accent/5 to-primary/5">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              🎧 Hear Ava in Action
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Watch (or listen) as Ava answers a real buyer's call, qualifies them, and books a showing automatically.
            </p>
            <DemoModal>
              <Button size="lg">
                Listen to Demo Call
              </Button>
            </DemoModal>
          </div>
        </section>

        {/* Value Stack */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Your Complete AI Agent System
            </h2>
            <div className="max-w-3xl mx-auto space-y-4 mb-8">
              <Card className="border-2 border-primary">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Core: Ava AI Assistant</h3>
                      <p className="text-muted-foreground">24/7 call handling, scheduling, lead capture</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Badge variant="secondary" className="mt-1">Bonus #1</Badge>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Voice Personalization</h3>
                      <p className="text-muted-foreground">Train Ava to sound just like you ($299 value)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Badge variant="secondary" className="mt-1">Bonus #2</Badge>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Lead Surge Setup</h3>
                      <p className="text-muted-foreground">Done-for-you automation with n8n & Google Sheets ($499 value)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Badge variant="secondary" className="mt-1">Bonus #3</Badge>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Conversion Dashboard</h3>
                      <p className="text-muted-foreground">Live call summaries and ROI tracker ($199 value)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Badge variant="secondary" className="mt-1">Bonus #4</Badge>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">90-Day ROI Guarantee</h3>
                      <p className="text-muted-foreground">2 extra deals or 90 days free – no risk</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Badge variant="secondary" className="mt-1">Bonus #5</Badge>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Priority Support</h3>
                      <p className="text-muted-foreground">Direct help from MyAgentVerse founder ($150 value)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="text-center space-y-6">
              <div className="text-xl">
                <span className="text-muted-foreground line-through">Total Value: $1,147+</span>
                <span className="mx-4">|</span>
                <span className="text-primary font-bold">Launch Offer: $49/mo + $199 setup</span>
              </div>
              <p className="text-muted-foreground">Cancel anytime after 90 days.</p>
              <Button size="lg" onClick={() => window.open('https://cal.com/myagentverse/discovery', '_blank')}>
                Start My 90-Day Risk-Free Trial
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Agents Already Winning with Ava
            </h2>
            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-lg italic mb-4">"Ava booked 22 calls and 3 closed deals in my first month — I've never been this organized."</p>
                  <p className="font-semibold text-primary">Sarah M., Realtor – Houston TX</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-lg italic mb-4">"I sleep better knowing Ava never misses a lead. My clients think I work 24/7!"</p>
                  <p className="font-semibold text-primary">Jason R., Keller Williams</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-lg italic mb-4">"Setup took less than 2 days and now every call goes straight to my calendar."</p>
                  <p className="font-semibold text-primary">Lindsey P., EXP Realty</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Guarantee Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8 inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-accent to-primary rounded-full">
                <CheckCircle className="h-16 w-16 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our 90-Day ROI Guarantee
              </h2>
              <p className="text-lg text-muted-foreground">
                If Ava doesn't help you close 2 extra deals or book 10 qualified calls in your first 90 days, you get another 90 days free — no questions asked.
              </p>
            </div>
          </div>
        </section>

        {/* Urgency Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <Badge variant="secondary" className="text-lg px-6 py-2">
                <Clock className="h-5 w-5 mr-2" />
                Limited Pilot Cohort
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold">
                Limited Pilot Cohort
              </h2>
              <p className="text-lg text-muted-foreground">
                Only 20 realtors accepted each month for personalized voice training. Apply by Friday 11:59 PM to lock in $49/mo lifetime pricing.
              </p>
              <Button size="lg" onClick={() => window.open('https://cal.com/myagentverse/discovery', '_blank')}>
                Reserve My Spot Now
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Common Questions
            </h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left text-lg">
                    How long does setup take?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Your AI assistant goes live within 48 hours of signup.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left text-lg">
                    Can I cancel anytime?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes. Cancel anytime after the first 90 days — no contracts or penalties.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left text-lg">
                    Does Ava replace my CRM?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    No, she connects with your existing CRM or Google Sheets using n8n.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left text-lg">
                    What if Ava doesn't sound natural?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We include a free voice personalization session to make sure she sounds human and warm.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-primary to-accent text-primary-foreground">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Closing More Deals — While You Sleep.
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Let Ava handle the calls so you can focus on closings. 24/7 coverage. Zero risk.
            </p>
            <Button size="lg" variant="secondary" onClick={() => window.open('https://cal.com/myagentverse/discovery', '_blank')} className="text-lg px-8">
              Activate Ava Now
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Realtor;
