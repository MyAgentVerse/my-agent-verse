import problemImage from "@/assets/problem-desk.jpg";

const ProblemSection = () => {
  return (
    <section className="bg-muted py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            You're great at what you do. You're just busy doing it.
          </h2>
          
          <div className="mb-12 overflow-hidden rounded-2xl">
            <img 
              src={problemImage} 
              alt="Cluttered office desk showing missed opportunities" 
              className="w-full"
            />
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="text-2xl">❌</span>
              <p className="text-lg">Missed calls when you're in the attic or on a roof.</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl">❌</span>
              <p className="text-lg">After-hours leads that go to competitors.</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl">❌</span>
              <p className="text-lg">Web forms forgotten overnight.</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl">❌</span>
              <p className="text-lg">$80 ad clicks wasted when no one calls back.</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl">❌</span>
              <p className="text-lg">Staff stretched thin across calls and dispatch.</p>
            </div>
          </div>

          <p className="mt-12 text-center text-xl font-semibold">
            It's not your marketing. It's the follow-up. For most shops, that's $15K to $25K a week left on the table.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
