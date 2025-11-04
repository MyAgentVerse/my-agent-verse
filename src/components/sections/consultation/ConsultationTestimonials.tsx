import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const ConsultationTestimonials = () => {
  const testimonials = [
    {
      name: "Sarah L., Real Estate Agent",
      quote: "This session completely changed how I see automation. Within a week, we had two processes running on autopilot and my workload dropped by 30%."
    },
    {
      name: "Michael T., HVAC Business Owner",
      quote: "The AI Profit Map opened my eyes. We were losing thousands every month to missed calls. Now, our AI front desk books jobs automatically 24/7."
    },
    {
      name: "Laura P., Marketing Consultant",
      quote: "It felt like having a CTO for a day. The 90-day roadmap gave me an exact plan to grow my agency using AI. Worth ten times the price."
    }
  ];

  return (
    <section className="mb-20">
      <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
        What Others Are Saying
      </h2>
      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="relative">
            <CardContent className="pt-8">
              <Quote className="w-8 h-8 text-primary mb-4 opacity-50" />
              <p className="text-lg mb-6 italic">{testimonial.quote}</p>
              <p className="font-semibold text-primary">— {testimonial.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ConsultationTestimonials;
