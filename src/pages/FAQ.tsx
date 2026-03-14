import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import AnswerCard from "@/components/AnswerCard";
import CTAButton from "@/components/CTAButton";
import FAQBlock, { faqSchema } from "@/components/FAQBlock";
import InternalLink from "@/components/InternalLink";

const faqItems = [
  { question: "What is Loot?", answer: "Loot is a bill splitting and shared expense tracking app that works directly inside iMessage. It lets you scan receipts, assign items, and settle payments without leaving your conversation." },
  { question: "How do I install Loot?", answer: "Download Loot from the App Store. It automatically appears as an iMessage app — no separate account creation required." },
  { question: "Do my friends need to download Loot?", answer: "No. Your friends interact with bill splits directly inside the iMessage conversation. They don't need to download a separate app." },
  { question: "Is Loot free?", answer: "Yes. Loot is completely free to use for splitting bills and tracking shared expenses." },
  { question: "How does receipt scanning work?", answer: "Point your camera at a receipt and Loot's OCR technology automatically extracts every line item, price, tax, and tip. You can manually adjust any items if needed." },
  { question: "Can I split bills with people who don't have iMessage?", answer: "Loot is optimized for iMessage. For friends without iMessage, you can share a summary link that shows the breakdown and allows them to settle via other payment methods." },
  { question: "How do I settle payments?", answer: "Loot integrates with Apple Pay and Venmo for one-tap settlement. You can also mark payments as settled manually for cash or bank transfers." },
  { question: "Can I track expenses across multiple outings?", answer: "Yes. Loot maintains running balances across all shared expenses in a group, so you don't need to settle after every meal or purchase." },
  { question: "How does itemized splitting work?", answer: "After scanning a receipt, each person taps the items they ordered. Shared items like appetizers can be split proportionally. Tax and tip are distributed automatically." },
  { question: "Is my financial data secure?", answer: "Yes. Loot never stores your payment information. All transactions are processed through Apple Pay or Venmo's secure infrastructure." },
  { question: "What is the best way to split a restaurant bill?", answer: "The best way to split a restaurant bill is to use an itemized approach where each person pays for what they ordered, plus a proportional share of tax and tip. Loot automates this entire process." },
  { question: "How do roommates use Loot?", answer: "Roommates can create a shared group in Loot to track rent, utilities, groceries, and other household expenses. Loot calculates running balances so you can settle monthly." },
  { question: "Can I use Loot for travel expenses?", answer: "Yes. Create a trip group and add expenses as they happen — flights, hotels, meals, activities. Loot tracks who paid and who owes what, so you settle once when the trip ends." },
  { question: "What payment methods does Loot support?", answer: "Loot supports Apple Pay and Venmo for instant settlement. You can also record cash payments and bank transfers manually." },
  { question: "How is Loot different from Splitwise?", answer: "Unlike Splitwise, Loot works directly inside iMessage so your friends don't need to download a separate app. It also offers receipt scanning and one-tap settlement built into the chat experience." },
];

export default function FAQPage() {
  return (
    <PageLayout
      title="FAQ | Bill Splitting Questions Answered | Loot"
      description="Answers to common questions about bill splitting, expense tracking, and how Loot works inside iMessage."
      canonicalPath="/faq"
      schema={faqSchema(faqItems)}
    >
      <Section>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">Frequently Asked Questions</h1>
        <p className="text-lg text-muted-foreground max-w-[55ch] mb-10">
          Everything you need to know about splitting bills with Loot.
        </p>
        <FAQBlock items={faqItems} />
        <div className="mt-10">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <CTAButton to="/contact">Contact Us</CTAButton>
        </div>
      </Section>
    </PageLayout>
  );
}
