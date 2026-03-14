import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import AnswerCard from "@/components/AnswerCard";
import InternalLink from "@/components/InternalLink";
import CTAButton from "@/components/CTAButton";

export default function BlogHowToTrackSharedExpenses() {
  return (
    <PageLayout
      title="How to Track Shared Expenses Without Spreadsheets | Loot Blog"
      description="Stop using spreadsheets to track shared expenses. Learn better methods for tracking who owes what in any group."
      canonicalPath="/blog/how-to-track-shared-expenses"
    >
      <Section>
        <div className="mb-4"><InternalLink to="/blog">← Back to Blog</InternalLink></div>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6">How to Track Shared Expenses</h1>
        <AnswerCard>
          The best way to track shared expenses is to use a dedicated expense tracking app that logs each payment, calculates running balances, and shows exactly who owes whom. <InternalLink to="/">Loot</InternalLink> does this inside iMessage.
        </AnswerCard>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">Why Spreadsheets Don't Work</h2>
        <p className="text-muted-foreground max-w-[65ch]">
          Spreadsheets require manual entry, lack mobile convenience, and get outdated quickly. Nobody wants to open Google Sheets after dinner. A purpose-built app captures expenses in seconds and keeps everyone on the same page.
        </p>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">What to Look For in an Expense Tracker</h2>
        <ul className="space-y-2 text-muted-foreground max-w-[65ch]">
          <li>• Real-time balance updates</li>
          <li>• Receipt scanning</li>
          <li>• Group support</li>
          <li>• Easy settlement options</li>
          <li>• No app required for friends (<InternalLink to="/why-loot">like Loot</InternalLink>)</li>
        </ul>
      </Section>

      <Section className="text-center">
        <CTAButton to="/contact" size="lg">Track Expenses With Loot</CTAButton>
      </Section>
    </PageLayout>
  );
}
