import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-20">
        <div className="mx-auto max-w-2xl">
          <h1 className="mb-6 text-center text-4xl font-bold md:text-5xl">
            Get in Touch
          </h1>
          <p className="mb-12 text-center text-xl text-muted-foreground">
            Questions? We're here to help. Reach out anytime.
          </p>
          
          <form className="space-y-6 rounded-lg border bg-card p-8">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                Name
              </label>
              <Input id="name" placeholder="Your name" />
            </div>
            
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Email
              </label>
              <Input id="email" type="email" placeholder="your@email.com" />
            </div>
            
            <div>
              <label htmlFor="company" className="mb-2 block text-sm font-medium">
                Company
              </label>
              <Input id="company" placeholder="Your company name" />
            </div>
            
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium">
                Message
              </label>
              <Textarea id="message" placeholder="How can we help?" rows={5} />
            </div>
            
            <Button variant="accent" className="w-full" type="submit">
              Send Message
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
