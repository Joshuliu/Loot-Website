import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import AnswerCard from "@/components/AnswerCard";
import InternalLink from "@/components/InternalLink";
import CTAButton from "@/components/CTAButton";

export default function BlogGroupExpenseManagement() {
  return (
    <PageLayout
      title="Group Expense Management: A Practical Guide | Loot Blog"
      description="How to manage shared expenses for trips, events, and ongoing groups. Practical strategies to avoid conflict and track every dollar."
      canonicalPath="/blog/group-expense-management"
    >
      <Section>
        <div className="mb-4"><InternalLink to="/blog">← Back to Blog</InternalLink></div>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6">Group Expense Management</h1>
        <AnswerCard>
          Group expense management is the practice of tracking, splitting, and settling shared costs within a group. The key principle: log every expense immediately, split fairly, and settle the net balance — not individual transactions.
        </AnswerCard>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">Core Principles</h2>
        <ul className="space-y-3 text-muted-foreground max-w-[65ch]">
          <li><strong className="text-foreground">Track immediately.</strong> Log expenses the moment they happen. Waiting leads to forgotten charges.</li>
          <li><strong className="text-foreground">Assign accurately.</strong> Not every expense involves everyone. Only charge the people who participated.</li>
          <li><strong className="text-foreground">Settle net balances.</strong> Instead of 10 individual payments, let the app calculate the minimum number of transfers needed.</li>
          <li><strong className="text-foreground">Use one tool.</strong> Don't split tracking across apps, texts, and spreadsheets. Use <InternalLink to="/">one app</InternalLink> for everything.</li>
        </ul>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">Common Mistakes to Avoid</h2>
        <div className="space-y-3 text-muted-foreground max-w-[65ch]">
          <p>
            <strong className="text-foreground">Tracking across multiple places.</strong> Splitting some expenses in Venmo, some in texts, and some in a shared note leads to missing charges and disputes. Use a single dedicated app for the entire group.
          </p>
          <p>
            <strong className="text-foreground">Settling after every transaction.</strong> Requesting $7.50 after every coffee run creates unnecessary friction. Let balances accumulate and settle the net amount periodically — weekly for roommates, once at the end of a trip.
          </p>
          <p>
            <strong className="text-foreground">Forgetting who didn't participate.</strong> If only three of five people had the appetizer, only those three should be charged. Accurate assignment prevents resentment over being charged for things you didn't consume.
          </p>
          <p>
            <strong className="text-foreground">Waiting to log expenses.</strong> Memory fades quickly. Log the expense immediately after paying — it takes seconds with an app like <InternalLink to="/">Loot</InternalLink> and prevents the awkward "wait, did I pay for that?" conversation later.
          </p>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">Related Guides</h2>
        <ul className="space-y-2">
          <li><InternalLink to="/blog/how-to-split-a-bill">How to split a bill: step-by-step for any situation →</InternalLink></li>
          <li><InternalLink to="/blog/how-to-track-shared-expenses">How to track shared expenses without spreadsheets →</InternalLink></li>
          <li><InternalLink to="/split-travel-expenses">Split travel expenses →</InternalLink></li>
          <li><InternalLink to="/split-expenses-with-roommates">Split roommate expenses →</InternalLink></li>
          <li><InternalLink to="/bill-splitting-guide">Complete bill splitting guide →</InternalLink></li>
        </ul>
      </Section>

      <Section className="text-center">
        <CTAButton to="/contact" size="lg">Manage Group Expenses With Loot</CTAButton>
      </Section>
    </PageLayout>
  );
}
