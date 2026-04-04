import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import AnswerCard from "@/components/AnswerCard";
import CTAButton from "@/components/CTAButton";
import InternalLink from "@/components/InternalLink";

export default function SplitRoommatesPage() {
  return (
    <PageLayout
      title="How to Split Bills With Roommates | Loot"
      description="The best way to split rent, utilities, and groceries with roommates. Track shared household expenses with Loot inside iMessage."
      canonicalPath="/split-expenses-with-roommates"
    >
      <Section>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">How to Split Expenses With Roommates</h1>
        <AnswerCard>
          The fairest way to split expenses with roommates is to track all shared costs — rent, utilities, and groceries — in a single app and settle the net balance at the end of each month. <InternalLink to="/">Loot</InternalLink> makes this effortless inside iMessage.
        </AnswerCard>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">Common Roommate Expenses</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { title: "Rent", desc: "Split based on room size or equally. Record it once and it repeats monthly." },
            { title: "Utilities", desc: "Electricity, water, internet, gas. Track actual amounts each month." },
            { title: "Groceries", desc: "Split shared groceries. Personal items stay separate." },
          ].map((item) => (
            <div key={item.title} className="shadow-native-sm rounded-xl p-6">
              <h3 className="font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">How to Split Rent Fairly</h2>
        <p className="text-muted-foreground max-w-[55ch] mb-3">
          If rooms are different sizes, split rent proportionally by square footage. For equal rooms, split evenly. Add your rent as a recurring expense in <InternalLink to="/">Loot</InternalLink> so it's tracked automatically each month.
        </p>
        <div className="space-y-2">
          <div><InternalLink to="/blog/how-to-split-rent">Read our full rent splitting guide →</InternalLink></div>
          <div><InternalLink to="/blog/how-to-track-shared-expenses">How to track shared expenses without spreadsheets →</InternalLink></div>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">Best Practices for Roommate Expenses</h2>
        <div className="space-y-3 text-muted-foreground max-w-[65ch]">
          <p>
            The most important habit for roommate expense tracking is consistency. Log expenses immediately — not at the end of the week or when you get around to it. A 10-second entry in the app prevents a 10-minute awkward conversation later.
          </p>
          <p>
            Agree on what counts as a shared expense before disputes arise. Generally: rent, utilities, and household supplies that everyone uses are shared. Personal groceries, personal hygiene products, and individual subscriptions are not. The clearer the boundary, the fewer the disputes.
          </p>
          <p>
            Settle on a schedule, not on demand. Asking for money the moment someone owes it creates tension. Agree to settle on the first of each month, or whenever balances pass a threshold like $50. This normalizes the process and removes the awkwardness of individual requests.
          </p>
          <p>
            <InternalLink to="/">Loot</InternalLink> makes this workflow seamless. Add shared expenses as they happen, check the running balance anytime, and settle the net amount at the end of the month with a single Apple Pay or Venmo transaction.
          </p>
        </div>
      </Section>

      <Section className="text-center">
        <CTAButton to="/contact" size="lg">Track Roommate Expenses With Loot</CTAButton>
      </Section>
    </PageLayout>
  );
}
