const ROISection = () => {
  return (
    <section className="bg-muted py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-12 text-3xl font-bold md:text-4xl">
            The math that matters.
          </h2>

          <div className="space-y-8">
            <div className="rounded-xl bg-background p-8 shadow-lg">
              <p className="text-2xl font-bold text-primary">One missed install = $5,000 gone.</p>
            </div>
            <div className="rounded-xl bg-background p-8 shadow-lg">
              <p className="text-2xl font-bold text-primary">Ten ignored ad leads = $800 wasted.</p>
            </div>
            <div className="rounded-xl bg-background p-8 shadow-lg">
              <p className="text-2xl font-bold text-primary">Three web forms unanswered = $15,000 lost.</p>
            </div>
          </div>

          <div className="mt-16 rounded-2xl bg-primary p-8 text-primary-foreground">
            <p className="text-xl leading-relaxed md:text-2xl">
              That's $20K+ a week — gone quietly. <br />
              <span className="font-bold">Ava, Jack, and Sofia close every gap.</span> <br />
              Save one install a week and you're $20K ahead each month.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROISection;
