import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const ConsultationCTA = () => {
  return (
    <section className="mb-20">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary/90 to-purple-600 p-12 md:p-16 text-center shadow-2xl">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDQyYzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="relative z-10">
          <Calendar className="w-16 h-16 mx-auto mb-6 text-primary-foreground" />
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
            Ready to Unlock Your 90-Day AI Sprint?
          </h2>
          <p className="mb-8 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Reserve your consultation for only $299. The full amount is credited toward your first AI project if you choose to continue.
          </p>
          <Button 
            asChild
            size="lg"
            variant="secondary"
            className="text-lg px-10 py-6 h-auto font-semibold shadow-xl hover:scale-105 transition-transform"
          >
            <a href="https://cal.com/myagentverse/consultation" target="_blank" rel="noopener noreferrer">
              Schedule My Consultation
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCTA;
