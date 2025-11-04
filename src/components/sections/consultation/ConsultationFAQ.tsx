import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ConsultationFAQ = () => {
  const faqs = [
    {
      question: "How is this different from hiring an AI agency?",
      answer: "Most agencies sell pre-built automation or high-cost retainers. This consultation focuses on strategy first—showing you exactly what to automate, which tools to use, and how to implement it efficiently. You leave with a plan, not a sales pitch."
    },
    {
      question: "Do I need to be technical to benefit from this session?",
      answer: "Not at all. We handle the technical understanding for you. You only need to know your business goals and processes. Everything is explained clearly, step by step, in plain English."
    },
    {
      question: "What happens after the consultation?",
      answer: "You'll receive your AI Implementation Roadmap, Profit Map, and all supporting documents. If you choose to move forward, we can help you build and launch your first automation, applying your $299 credit toward the project."
    },
    {
      question: "Can I include my team in the session?",
      answer: "Yes. You're encouraged to invite up to two key team members who are directly involved in operations or marketing. It ensures everyone understands the plan and next steps."
    },
    {
      question: "Is the $299 refundable?",
      answer: "The fee is non-refundable but fully credited toward your first AI project if you decide to continue. This ensures both sides are fully committed to producing real results."
    }
  ];

  return (
    <section className="mb-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default ConsultationFAQ;
