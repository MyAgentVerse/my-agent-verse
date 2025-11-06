import ContactForm from "./ContactForm";

const Footer = () => {
  return (
    <footer className="bg-secondary py-16 text-secondary-foreground">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold">MyAgentVerse</h3>
            <p className="mb-6 text-sm leading-relaxed opacity-90">
              Your world of AI agents, built for you. Empowering small businesses with 24/7 AI teammates that answer, schedule, and follow up automatically.
            </p>
            <div className="space-y-2">
              <a href="/about" className="block text-sm opacity-80 transition-opacity hover:opacity-100 hover:underline">
                About Us
              </a>
              <a href="/industries" className="block text-sm opacity-80 transition-opacity hover:opacity-100 hover:underline">
                Industries
              </a>
              <a href="/careers" className="block text-sm opacity-80 transition-opacity hover:opacity-100 hover:underline">
                Careers
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Solutions</h3>
            <div className="space-y-2">
              <a href="/hvac" className="block text-sm opacity-80 transition-opacity hover:opacity-100 hover:underline">
                HVAC
              </a>
              <a href="/industries" className="block text-sm opacity-80 transition-opacity hover:opacity-100 hover:underline">
                Plumbing
              </a>
              <a href="/industries" className="block text-sm opacity-80 transition-opacity hover:opacity-100 hover:underline">
                Electrical Services
              </a>
              <a href="/industries" className="block text-sm opacity-80 transition-opacity hover:opacity-100 hover:underline">
                Appliance Repair
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Connect</h3>
            <div className="space-y-2">
              <a href="tel:+12816998318" className="block text-sm font-semibold opacity-90 transition-opacity hover:opacity-100 hover:underline">
                📞 (281) 699-8318
              </a>
              <a href="/consultation" className="block text-sm opacity-80 transition-opacity hover:opacity-100 hover:underline">
                AI Roadmap Call
              </a>
              <a href="/booking" className="block text-sm opacity-80 transition-opacity hover:opacity-100 hover:underline">
                Book a Demo
              </a>
              <a href="/contact" className="block text-sm opacity-80 transition-opacity hover:opacity-100 hover:underline">
                Contact Us
              </a>
              <a href="/build" className="block text-sm opacity-80 transition-opacity hover:opacity-100 hover:underline">
                21-Day Build
              </a>
              <a href="/support" className="block text-sm opacity-80 transition-opacity hover:opacity-100 hover:underline">
                Support
              </a>
              <a href="/privacy" className="block text-sm opacity-80 transition-opacity hover:opacity-100 hover:underline">
                Privacy Policy
              </a>
            </div>
          </div>

          <div id="contact-form">
            <h3 className="mb-4 text-lg font-bold">Get in Touch</h3>
            <ContactForm />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm opacity-80">© 2025 MyAgentVerse. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://linkedin.com/company/myagentverse" target="_blank" rel="noopener noreferrer" className="text-sm opacity-80 transition-opacity hover:opacity-100 hover:underline">
              LinkedIn
            </a>
            <a href="https://x.com/myagentverse" target="_blank" rel="noopener noreferrer" className="text-sm opacity-80 transition-opacity hover:opacity-100 hover:underline">
              X
            </a>
            <a href="https://youtube.com/@myagentverse" target="_blank" rel="noopener noreferrer" className="text-sm opacity-80 transition-opacity hover:opacity-100 hover:underline">
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
