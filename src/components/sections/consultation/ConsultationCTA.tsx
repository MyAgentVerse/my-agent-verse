import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import ConsultationCheckoutDialog from "@/components/ConsultationCheckoutDialog";

const ConsultationCTA = () => {
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  return (
    <section className="mb-20 px-4 sm:px-0">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary/90 to-purple-600 p-6 sm:p-8 md:p-12 lg:p-16 text-center shadow-2xl">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDQyYzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="relative z-10">
          <Calendar className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-4 sm:mb-6 text-primary-foreground" />
          <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground leading-tight">
            Ready to Unlock Your 90-Day AI Sprint?
          </h2>
          <p className="mb-6 sm:mb-8 text-sm sm:text-base md:text-lg text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Reserve your consultation for only $299. The full amount is credited toward your first AI project if you choose to continue.
          </p>
          <Button 
            onClick={() => setCheckoutOpen(true)}
            size="lg"
            variant="secondary"
            className="text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 h-auto font-semibold shadow-xl hover:scale-105 transition-transform w-full sm:w-auto"
          >
            <span className="block sm:hidden">Schedule Consultation</span>
            <span className="hidden sm:block">Schedule My Consultation</span>
          </Button>
        </div>
      </div>
      <ConsultationCheckoutDialog 
        open={checkoutOpen}
        onOpenChange={setCheckoutOpen}
      />
    </section>
  );
};

export default ConsultationCTA;
