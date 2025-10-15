import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Booking = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Book Your Setup Call
          </h1>
          <p className="mb-12 text-xl text-muted-foreground">
            Schedule a personalized onboarding session with our team. We'll get Ava up and running for your shop in no time.
          </p>
          
          <div className="rounded-lg border bg-card p-8">
            <p className="text-lg">
              Calendly or booking widget will be embedded here.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Booking;
