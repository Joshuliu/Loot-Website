import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import AnswerCard from "@/components/AnswerCard";
import CTAButton from "@/components/CTAButton";
import InternalLink from "@/components/InternalLink";
import FAQBlock, { faqSchema } from "@/components/FAQBlock";

const faqItems = [
  { question: "What is the easiest way to split a restaurant bill?", answer: "The easiest way to split a restaurant bill is to scan the receipt with an app like Loot, which extracts items automatically and lets each person claim what they ordered." },
  { question: "Should you split a restaurant bill equally?", answer: "Equal splitting works when everyone ordered similar items. For groups with different orders, itemized splitting is fairer — each person pays for exactly what they had." },
  { question: "How do you handle tax and tip when splitting a bill?", answer: "Distribute tax proportionally based on each person's subtotal. For tip, agree on a percentage and apply it to each person's share. Loot handles this calculation automatically." },
];

export default function SplitRestaurantBillPage() {
  return (
    <PageLayout
      title="How to Split a Restaurant Bill Fairly | Loot"
      description="Learn the best ways to split a restaurant bill: equal split, itemized split, and tip calculation. Use Loot to automate restaurant bill splitting."
      canonicalPath="/split-restaurant-bill"
      schema={faqSchema(faqItems)}
    >
      <Section>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">How to Split a Restaurant Bill Fairly</h1>
        <AnswerCard>
          To split a restaurant bill, calculate the subtotal per person, add a proportional share of tax and tip, and settle via a shared expense app like <InternalLink to="/">Loot</InternalLink>.
        </AnswerCard>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">Three Ways to Split a Restaurant Bill</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-foreground text-background">
                <th className="text-left p-3 font-semibold rounded-tl-lg">Method</th>
                <th className="text-left p-3 font-semibold">How It Works</th>
                <th className="text-left p-3 font-semibold rounded-tr-lg">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-foreground/5">
                <td className="p-3 font-medium">Equal Split</td>
                <td className="p-3 text-muted-foreground">Divide total (including tax and tip) by number of people.</td>
                <td className="p-3 text-muted-foreground">Similar orders, casual dining.</td>
              </tr>
              <tr className="border-b border-foreground/5">
                <td className="p-3 font-medium">Itemized Split</td>
                <td className="p-3 text-muted-foreground">Each person pays for exactly what they ordered, plus proportional tax and tip.</td>
                <td className="p-3 text-muted-foreground">Mixed budgets, fine dining.</td>
              </tr>
              <tr className="border-b border-foreground/5">
                <td className="p-3 font-medium">Host Pays</td>
                <td className="p-3 text-muted-foreground">One person covers the bill, others settle later.</td>
                <td className="p-3 text-muted-foreground">Business meals, celebrations.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">How to Calculate Tip on a Split Bill</h2>
        <div className="bg-muted rounded-xl p-6 space-y-3">
          <p className="text-muted-foreground">Example: $120 bill, 4 people, 20% tip.</p>
          <div className="font-mono tabular-nums text-sm space-y-1">
            <p>Subtotal per person: <span className="font-semibold text-foreground">$30.00</span></p>
            <p>Tip per person (20%): <span className="font-semibold text-foreground">$6.00</span></p>
            <p>Tax per person (~8%): <span className="font-semibold text-foreground">$2.40</span></p>
            <p className="pt-2 border-t border-foreground/5">Total per person: <span className="font-semibold text-primary">$38.40</span></p>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">Why Use an App to Split Restaurant Bills?</h2>
        <div className="space-y-3 text-muted-foreground max-w-[65ch]">
          <p>
            Manual calculations are error-prone and awkward. A bill splitting app like <InternalLink to="/">Loot</InternalLink> scans your receipt, handles the math, and lets everyone pay their share in seconds — all inside iMessage. <InternalLink to="/how-it-works">See how Loot works →</InternalLink>
          </p>
          <p>
            The most common problem with splitting restaurant bills manually is forgetting to account for tax and tip in each person's share. If the group agrees on 20% tip but applies it only to the subtotal before tax, the total collected comes up short. Loot applies tax and tip proportionally to each person's itemized subtotal, so the math always works out.
          </p>
          <p>
            Another common issue is shared items — appetizers, bottles of wine, desserts split by the table. Loot lets you mark an item as shared and automatically divides the cost among everyone who had it. No more mental math at the table or awkward conversations about who owes what for the guacamole.
          </p>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-6">FAQ</h2>
        <FAQBlock items={faqItems} />
      </Section>

      <Section className="text-center">
        <CTAButton href="https://apps.apple.com/us/app/loot-me/id6757330604" size="lg">Split Your Next Bill With Loot</CTAButton>
      </Section>
    </PageLayout>
  );
}
