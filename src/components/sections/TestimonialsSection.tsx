import { Card, CardContent } from "@/components/ui/card";
import workshopImage from "@/assets/testimonial-workshop.jpg";

const TestimonialsSection = () => {
  const testimonials = [
    { quote: "Ava catches every call now — my office manager finally goes home on time.", author: "Ben, Lone Star Heating & Air" },
    { quote: "Jack fills the gaps we never had time for.", author: "Melissa, CoolZone Services" },
    { quote: "Sofia keeps everything moving — like a second pair of hands for dispatch.", author: "Ray, QuickCool HVAC" },
    { quote: "Feels like we finally have the backup we needed.", author: "Tony, Comfort Pros HVAC" },
  ];

  return (
    <section className="bg-muted py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
            Real shops. Real help.
          </h2>

          <div className="mb-12 overflow-hidden rounded-2xl">
            <img 
              src={workshopImage} 
              alt="HVAC workshop desk" 
              className="w-full"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <p className="mb-4 text-lg italic">"{testimonial.quote}"</p>
                  <p className="font-semibold text-primary">{testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
