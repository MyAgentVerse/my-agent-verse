import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";
import { Phone, Calendar, Sheet, Mic, Clock, CheckCircle, Star, Headset } from "lucide-react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import realtorBusyImage from "@/assets/realtor-busy-calls.jpg";
import guaranteePartnershipImage from "@/assets/guarantee-partnership.png";
import guaranteeBadgeImage from "@/assets/guarantee-badge.png";
import assuranceIconsImage from "@/assets/assurance-icons.png";
import limitedCohortImage from "@/assets/limited-cohort.png";

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
                  Ava is your 24/7 AI Real Estate Assistant that answers calls, books showings, and follows up in your voice, so you close more deals with zero missed opportunities.
                </p>
                <div className="flex flex-wrap gap-4">
                  <DemoModal phoneNumber="+13466342736" industry="realtor">
                    <Button size="lg" className="text-lg px-8 h-12 shadow-lg hover:shadow-xl transition-all w-full sm:w-auto">
                      <Phone className="mr-2 h-5 w-5" />
                      Try Live Demo with Ava
                    </Button>
                  </DemoModal>
                  <Button size="lg" variant="outline" className="text-lg px-8 h-12 border-2 hover:bg-primary/5 transition-all w-full sm:w-auto" asChild>
                    <a href="/booking" className="flex items-center justify-center w-full h-full">
                      <Calendar className="mr-2 h-5 w-5" />
                      Schedule Strategy Session
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img 
                  src={realtorBusyImage} 
                  alt="Real estate agent in meeting with clients while missing incoming calls" 
                  className="rounded-3xl shadow-2xl w-full h-auto object-cover"
                />
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
              Ava fixes this instantly. She answers, qualifies, and books appointments 24/7 so you never lose a lead again.
            </p>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Meet Ava: Your AI Real Estate Assistant
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
            <DemoModal phoneNumber="+13466342736" industry="realtor">
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
                      <p className="text-muted-foreground">2 extra deals or 90 days free, no risk</p>
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

        {/* Why This Guarantee Exists */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid gap-12 md:grid-cols-2 items-center max-w-6xl mx-auto">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Why This Guarantee Exists
                </h2>
                <p className="text-lg text-muted-foreground">
                  We built Ava to solve one simple problem: missed opportunities. Realtors were losing thousands every month simply because no one picked up after hours. We're so confident Ava will turn those missed calls into booked appointments and closed deals that we made her performance fully guaranteed. Your success is the only metric that matters.
                </p>
              </div>
              <div className="relative">
                <img 
                  src={guaranteePartnershipImage} 
                  alt="Vector-style image showing a realtor and AI assistant shaking hands with a large checkmark behind them, symbolizing trust and partnership" 
                  className="rounded-3xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our 90-Day ROI Guarantee */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="flex justify-center">
                <img 
                  src={guaranteeBadgeImage} 
                  alt="Flat vector image of a gold badge with a checkmark in the center and soft gradient lighting on navy background representing reliability and assurance" 
                  className="w-48 h-48 object-contain"
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Our 90-Day ROI Guarantee
              </h2>
              <p className="text-lg text-muted-foreground">
                If Ava doesn't help you close 2 extra deals or book at least 10 qualified calls in your first 90 days, you'll get another 90 days completely free, no questions asked. That's how confident we are in her performance.
              </p>
              <p className="text-base text-muted-foreground font-semibold">
                Zero contracts. Zero risk. 100% performance-based.
              </p>
            </div>
          </div>
        </section>

        {/* Extra Assurance */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid gap-12 md:grid-cols-2 items-center max-w-6xl mx-auto">
              <div className="relative order-2 md:order-1">
                <img 
                  src={assuranceIconsImage} 
                  alt="Clean vector graphic with icons for time (calendar), support (headset), transparency (document report), and protection (shield), arranged in a neat 2x2 grid with blue glow effects" 
                  className="rounded-3xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Extra Assurance: We've Got You Covered
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <p>Your AI assistant goes live within 48 hours or setup is free.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <p>Cancel anytime after 90 days, no contracts or penalties.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <p>Direct founder support for your first 30 days.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <p>Monthly report shows how many calls Ava booked and your estimated ROI.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <p>Flat $49/month with no upsells, no hidden fees, ever.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Limited Pilot Cohort */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-6">
            <div className="grid gap-12 md:grid-cols-2 items-center max-w-6xl mx-auto">
              <div className="space-y-6">
                <Badge variant="secondary" className="text-lg px-6 py-2">
                  <Clock className="h-5 w-5 mr-2" />
                  Limited Pilot Cohort
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Limited Pilot Cohort: November Enrollment Now Open
                </h2>
                <p className="text-lg text-muted-foreground">
                  To ensure every agent gets personalized voice training and perfect setup, we only accept 20 realtors each month. Once the November cohort is full, registration closes until next month.
                </p>
                <p className="text-base text-muted-foreground">
                  Apply by <strong>Friday, November 8 at 11:59 PM</strong> to lock in your lifetime $49/mo pricing and claim your $499 Lead Surge Setup bonus free.
                </p>
                <Button 
                  size="lg" 
                  onClick={() => {
                    window.location.href = '/booking';
                  }}
                >
                  Reserve My Spot Now
                </Button>
              </div>
              <div className="relative">
                <img 
                  src={limitedCohortImage} 
                  alt="Vector illustration showing a countdown timer and circular avatars of realtors joining a limited access group, conveying urgency and exclusivity with blue gradient tones" 
                  className="rounded-3xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
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
                    Setup takes less than 48 hours. Our team personalizes Ava's voice, connects your calendar, and ensures she sounds just like you before going live.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left text-lg">
                    Can I cancel anytime?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, absolutely. After your first 90 days, you can cancel anytime with no contracts or penalties.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left text-lg">
                    Does Ava replace my CRM?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    No. Ava integrates seamlessly with your existing CRM to log calls, notes, and appointment details. She makes it work better.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left text-lg">
                    What if Ava doesn't sound natural?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Ava uses advanced ElevenLabs voice synthesis and real conversational AI. Most clients say she sounds more natural than human receptionists!
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left text-lg">
                    How does Ava book my appointments?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Ava connects directly to your calendar. When a qualified lead calls, she checks availability and books them instantly via Cal.com with no manual follow-up needed.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-left text-lg">
                    What if Ava misses something important on a call?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Every conversation is summarized and logged for review. You'll see caller details, call outcomes, and follow-up actions right in your dashboard.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                  <AccordionTrigger className="text-left text-lg">
                    Can Ava handle after-hours or weekend calls?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes. Ava works 24/7, nights, weekends, and holidays, so you never miss a single opportunity again.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8">
                  <AccordionTrigger className="text-left text-lg">
                    Do I need to train or manage Ava?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Not at all. We handle everything during setup. Ava runs automatically, and you can always reach our team if you want to adjust her behavior.
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
              Start Closing More Deals While You Sleep.
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
