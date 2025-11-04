import industriesImage from "@/assets/industries-connected.jpg";

const WhoThisIsFor = () => {
  const targetBusinesses = [
    "Real Estate Agency managing inbound leads and follow-ups.",
    "HVAC or Home Services Company handling high call volume and scheduling.",
    "Restaurant Group or Franchise balancing orders, reservations, and staffing.",
    "Marketing or Creative Agency managing multiple clients and reporting workflows.",
    "Manufacturing or Logistics Company coordinating supply, production, and delivery.",
    "Dental or Medical Office juggling patient intake, reminders, and billing.",
    "E-commerce Brand managing customer service and fulfillment tasks."
  ];

  return (
    <section className="mb-20 bg-muted/50 -mx-6 px-6 py-16 lg:py-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">
          Who This Is For
        </h2>
        
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center mb-12">
          <div>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              This consultation is designed for growth-focused business owners and operators earning between <strong className="text-foreground">$1 million and $5 million</strong> in annual revenue who want to unlock more time, efficiency, and profit through AI automation.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Typical businesses in this range have 10 to 50 employees, depending on their industry, and face the same challenge: manual processes that slow down growth.
            </p>
          </div>
          <div className="relative">
            <img 
              src={industriesImage} 
              alt="Diverse business owners from different industries connected through AI network" 
              className="rounded-3xl shadow-xl w-full"
            />
          </div>
        </div>

        <div className="bg-background rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">You'll get the most value if you are a:</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {targetBusinesses.map((business, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-primary font-bold text-xl">•</span>
                <p className="text-muted-foreground">{business}</p>
              </div>
            ))}
          </div>
          <p className="text-lg text-center mt-8 font-semibold text-foreground">
            If you're in this revenue range and ready to scale without adding more payroll, this session will show you exactly how to do it with AI.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoThisIsFor;
