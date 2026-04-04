import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import AnswerCard from "@/components/AnswerCard";
import CTAButton from "@/components/CTAButton";
import InternalLink from "@/components/InternalLink";

export default function BestBillSplittingAppPage() {
  return (
    <PageLayout
      title="Best Bill Splitting App in 2025 | Loot vs Splitwise vs Settle Up"
      description="Compare the best bill splitting apps: Loot, Splitwise, and Settle Up. See which app makes splitting expenses easiest."
      canonicalPath="/best-bill-splitting-app"
    >
      <Section>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">Best Bill Splitting App</h1>
        <AnswerCard>
          The best bill splitting app is one that's fast, fair, and doesn't require everyone to download something new. Loot is the only bill splitting app that works natively inside iMessage.
        </AnswerCard>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">App Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-foreground text-background">
                <th className="text-left p-3 font-semibold rounded-tl-lg">Feature</th>
                <th className="text-center p-3 font-semibold">Loot</th>
                <th className="text-center p-3 font-semibold">Splitwise</th>
                <th className="text-center p-3 font-semibold rounded-tr-lg">Settle Up</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["iMessage integration", "✓", "✗", "✗"],
                ["Friends don't need the app", "✓", "✗", "✗"],
                ["Receipt scanning (OCR)", "✓", "✓", "✗"],
                ["Itemized splitting", "✓", "✓", "✓"],
                ["Apple Pay settlement", "✓", "✗", "✗"],
                ["Group balance tracking", "✓", "✓", "✓"],
                ["Free (no premium tier)", "✓", "✗", "✓"],
                ["Setup time", "14 sec", "~2 min", "~2 min"],
              ].map((row, i) => (
                <tr key={i} className="border-b border-foreground/5">
                  <td className="p-3 font-medium">{row[0]}</td>
                  <td className="p-3 text-center font-mono tabular-nums text-primary font-semibold">{row[1]}</td>
                  <td className="p-3 text-center font-mono tabular-nums text-muted-foreground">{row[2]}</td>
                  <td className="p-3 text-center font-mono tabular-nums text-muted-foreground">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">App Breakdown</h2>
        <div className="space-y-4 text-muted-foreground max-w-[65ch]">
          <p>
            <strong className="text-foreground">Loot</strong> is built as an iMessage app, meaning it works inside any group conversation. Scan a receipt, assign items, and settle with Apple Pay — all without anyone leaving the chat. It's the only app where your friends genuinely don't need to download anything.
          </p>
          <p>
            <strong className="text-foreground">Splitwise</strong> is the most established option and works well for tracking long-term balances between roommates or travel groups. However, it requires every participant to create an account and install the app, which creates friction in casual groups.
          </p>
          <p>
            <strong className="text-foreground">Settle Up</strong> is a solid free option for basic expense tracking. It lacks receipt scanning and Apple Pay integration, and friends still need to download the app to participate in the group.
          </p>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">The Verdict</h2>
        <p className="text-muted-foreground max-w-[55ch]">
          If you want the simplest, fastest bill splitting experience, <InternalLink to="/">Loot</InternalLink> wins. It works where your conversations already happen — inside iMessage. No downloads, no accounts, no friction.
        </p>
      </Section>

      <Section className="text-center">
        <CTAButton to="/contact" size="lg">Try Loot Free</CTAButton>
      </Section>
    </PageLayout>
  );
}
