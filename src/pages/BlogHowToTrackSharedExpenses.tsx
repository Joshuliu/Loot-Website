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

      <Section>
        <h2 className="text-2xl font-semibold mb-4">Best Practices for Shared Expense Tracking</h2>
        <div className="space-y-3 text-muted-foreground max-w-[65ch]">
          <p>
            <strong className="text-foreground">Log immediately.</strong> Add the expense the moment you pay it. Waiting until you get home means forgetting the exact amount, who was there, or what items were shared. A quick entry while still at the table takes under ten seconds.
          </p>
          <p>
            <strong className="text-foreground">Be specific about who owes what.</strong> "Split 3 ways" is fine for equal shares. But when only two people had the appetizer, charge only those two. Accuracy prevents minor grievances from accumulating into bigger disputes.
          </p>
          <p>
            <strong className="text-foreground">Settle the net balance, not individual transactions.</strong> If you paid for dinner and a friend paid for the Uber, don't exchange two separate payments. Let the app calculate the net difference and make one transfer. <InternalLink to="/">Loot</InternalLink> does this automatically.
          </p>
          <p>
            <strong className="text-foreground">Establish a settlement schedule.</strong> For ongoing groups like roommates, pick a regular date — the first of the month works well. For trips, settle once when you're back. Having a predictable schedule removes the awkwardness of asking for money.
          </p>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">Related Guides</h2>
        <ul className="space-y-2">
          <li><InternalLink to="/blog/how-to-split-a-bill">How to split a bill fairly: step-by-step guide →</InternalLink></li>
          <li><InternalLink to="/blog/group-expense-management">Group expense management for any shared group →</InternalLink></li>
          <li><InternalLink to="/split-expenses-with-roommates">How to split expenses with roommates →</InternalLink></li>
          <li><InternalLink to="/bill-splitting-guide">Complete bill splitting guide →</InternalLink></li>
        </ul>
      </Section>

      <Section className="text-center">
        <CTAButton href="https://apps.apple.com/us/app/loot-me/id6757330604" size="lg">Track Expenses With Loot</CTAButton>
      </Section>
    </PageLayout>
  );
}
