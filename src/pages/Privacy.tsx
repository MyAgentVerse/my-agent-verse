import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-4xl font-bold">Privacy Policy</h1>
          <p className="mb-12 text-muted-foreground">Last updated: January 2025</p>
          
          <div className="space-y-6 leading-relaxed">
            <section>
              <h2 className="mb-4 text-2xl font-bold">Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when you create an account, use our services, or communicate with us.
              </p>
            </section>
            
            <section>
              <h2 className="mb-4 text-2xl font-bold">How We Use Your Information</h2>
              <p>
                We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.
              </p>
            </section>
            
            <section>
              <h2 className="mb-4 text-2xl font-bold">Data Security</h2>
              <p>
                We take reasonable measures to help protect your personal information from loss, theft, misuse, and unauthorized access.
              </p>
            </section>
            
            <section>
              <h2 className="mb-4 text-2xl font-bold">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at privacy@myagentverse.com
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
