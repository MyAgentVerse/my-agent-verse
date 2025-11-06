import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

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
