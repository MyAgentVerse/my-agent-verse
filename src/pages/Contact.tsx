import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contact MyAgentVerse | AI Automation Agency — The Woodlands, TX</title>
        <meta name="description" content="Get in touch with MyAgentVerse. We build custom AI automation for small businesses in Houston, The Woodlands, and across the US. Call (281) 699-8318 or fill out the form." />
        <meta property="og:title" content="Contact MyAgentVerse | AI Automation Agency" />
        <meta property="og:description" content="Contact MyAgentVerse — custom AI automation for small businesses. Call (281) 699-8318 or send us a message." />
        <meta property="og:url" content="https://myagentverse.com/contact" />
        <meta property="og:image" content="https://myagentverse.com/social-preview.png" />
        <link rel="canonical" href="https://myagentverse.com/contact" />
      </Helmet>
      <Header />
      <main className="container mx-auto px-6 py-20">
        <div className="mx-auto max-w-2xl">
          <h1 className="mb-6 text-center text-4xl font-bold md:text-5xl">
            Get in Touch
          </h1>
          <p className="mb-12 text-center text-xl text-muted-foreground">
            Questions? We're here to help. Reach out anytime.
          </p>
          
          <div className="rounded-lg border bg-card p-8">
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
