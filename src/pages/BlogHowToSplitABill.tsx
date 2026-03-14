import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import AnswerCard from "@/components/AnswerCard";
import InternalLink from "@/components/InternalLink";
import CTAButton from "@/components/CTAButton";

export default function BlogHowToSplitABill() {
  return (
    <PageLayout
      title="How to Split a Bill: The Complete Guide | Loot Blog"
      description="Learn the best ways to split a bill: equal split, itemized split, and rotating payments. A step-by-step guide for every situation."
      canonicalPath="/blog/how-to-split-a-bill"
    >
      <Section>
        <div className="mb-4"><InternalLink to="/blog">← Back to Blog</InternalLink></div>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6">How to Split a Bill</h1>
        <AnswerCard>
          To split a bill, determine the total amount, choose a splitting method (equal, itemized, or proportional), calculate each person's share including tax and tip, and settle payments immediately. Using a <InternalLink to="/">bill splitting app</InternalLink> makes this process instant.
        </AnswerCard>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">Step-by-Step Bill Splitting</h2>
        <ol className="space-y-4 text-muted-foreground max-w-[65ch]">
          <li><strong className="text-foreground">1. Get the total.</strong> Include subtotal, tax, and tip.</li>
          <li><strong className="text-foreground">2. Decide how to split.</strong> Equal works for similar orders. Itemized is fairer for varied orders.</li>
          <li><strong className="text-foreground">3. Calculate shares.</strong> For equal: total ÷ people. For itemized: each person's items + proportional tax/tip.</li>
          <li><strong className="text-foreground">4. Settle immediately.</strong> Use Apple Pay, Venmo, or cash. Don't wait.</li>
        </ol>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">Related Guides</h2>
        <ul className="space-y-2">
          <li><InternalLink to="/split-restaurant-bill">How to split a restaurant bill →</InternalLink></li>
          <li><InternalLink to="/bill-splitting-guide">Complete bill splitting guide →</InternalLink></li>
          <li><InternalLink to="/best-bill-splitting-app">Best bill splitting apps →</InternalLink></li>
        </ul>
      </Section>

      <Section className="text-center">
        <CTAButton to="/contact" size="lg">Try Loot Free</CTAButton>
      </Section>
    </PageLayout>
  );
}
