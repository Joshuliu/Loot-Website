import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

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
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <div className="w-full">
      {items.map((item, i) => {
        const itemId = `faq-${i}`;
        const isOpen = openItem === itemId;

        return (
          <div key={itemId} className="border-b border-foreground/5">
            <button
              type="button"
              className="flex w-full items-center justify-between py-5 text-left text-base font-medium"
              aria-expanded={isOpen}
              aria-controls={`${itemId}-content`}
              onClick={() => setOpenItem(isOpen ? null : itemId)}
            >
              <span>{item.question}</span>
              <ChevronDown
                className={cn("h-4 w-4 shrink-0 transition-transform duration-200", isOpen && "rotate-180")}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`${itemId}-content`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22, ease: [0.2, 0.8, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <div className="max-w-[65ch] pb-5 text-base text-muted-foreground">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
