import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FAQItem {
  question: string;
  answer: string;
}

interface Props {
  items: FAQItem[];
}

export function faqSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: i.answer,
      },
    })),
  };
}

export default function FAQBlock({ items }: Props) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, i) => (
        <AccordionItem key={i} value={`faq-${i}`} className="border-b border-foreground/5">
          <AccordionTrigger className="text-left text-base font-medium py-5 hover:no-underline">
            {item.question}
          </AccordionTrigger>
          <AccordionContent forceMount className="text-muted-foreground text-base pb-5 max-w-[65ch]">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
