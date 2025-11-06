import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const BuildTestimonials = () => {
  const testimonials = [
    {
      name: "David R., SaaS Founder",
      company: "$2.3M ARR",
      quote: "We had been planning our client portal for 6 months. MyAgentVerse delivered it in 21 days. Our onboarding time dropped by 60% and customer satisfaction went through the roof."
    },
    {
      name: "Jennifer K., Agency Owner",
      company: "15-person team",
      quote: "The custom dashboard they built replaced 4 different tools we were paying for. ROI was immediate. The team actually uses it daily — which never happened with our old systems."
    },
    {
      name: "Marcus T., Manufacturing Director",
      company: "$5M+ revenue",
      quote: "I was skeptical about the 21-day timeline, but they delivered exactly what they promised. The quoting tool saves our team 15 hours a week and we've closed deals faster than ever."
    }
  ];

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          What Our Build Clients Say
        </h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="pt-8">
                <Quote className="w-8 h-8 text-primary mb-4 opacity-50" />
                <p className="text-lg mb-6 italic leading-relaxed">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold text-foreground">— {testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuildTestimonials;
