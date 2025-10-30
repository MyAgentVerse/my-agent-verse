import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Industries = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Industries We Serve
          </h1>
          <p className="mb-12 text-xl text-muted-foreground">
            AI teammates built for your industry. 24/7 coverage. No training required.
          </p>
          
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-8">
              <h3 className="mb-4 text-2xl font-bold">HVAC</h3>
              <p className="mb-6 text-muted-foreground">
                Never miss a service call or install lead again with Ava, Jack, and Sofia.
              </p>
              <Button variant="accent" asChild>
                <a href="/hvac">Learn More</a>
              </Button>
            </div>
            
            <div className="rounded-lg border bg-card p-8">
              <h3 className="mb-4 text-2xl font-bold">Real Estate</h3>
              <p className="mb-6 text-muted-foreground">
                Ava answers calls, books showings, and follows up 24/7 so you never miss a lead.
              </p>
              <Button variant="accent" asChild>
                <a href="/realtor">Learn More</a>
              </Button>
            </div>
            
            <div className="rounded-lg border bg-card p-8">
              <h3 className="mb-4 text-2xl font-bold">Plumbing</h3>
              <p className="mb-6 text-muted-foreground">
                Coming soon. AI teammates for plumbing businesses.
              </p>
              <Button variant="outline" disabled>
                Coming Soon
              </Button>
            </div>
            
            <div className="rounded-lg border bg-card p-8">
              <h3 className="mb-4 text-2xl font-bold">Electrical Services</h3>
              <p className="mb-6 text-muted-foreground">
                Coming soon. AI teammates for electrical contractors.
              </p>
              <Button variant="outline" disabled>
                Coming Soon
              </Button>
            </div>
            
            <div className="rounded-lg border bg-card p-8">
              <h3 className="mb-4 text-2xl font-bold">Appliance Repair & Installation</h3>
              <p className="mb-6 text-muted-foreground">
                Coming soon. AI teammates for appliance service businesses.
              </p>
              <Button variant="outline" disabled>
                Coming Soon
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Industries;
