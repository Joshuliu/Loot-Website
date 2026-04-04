import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import AnswerCard from "@/components/AnswerCard";
import CTAButton from "@/components/CTAButton";
import InternalLink from "@/components/InternalLink";

export default function SplitBillsPage() {
  return (
    <PageLayout
      title="How to Split Bills With Friends | Loot"
      description="Learn the best ways to split bills with friends. From restaurant checks to group expenses, Loot makes bill splitting easy inside iMessage."
      canonicalPath="/split-bills"
    >
      <Section>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">How to Split Bills With Friends</h1>
        <AnswerCard>
          The best way to split bills with friends is to use a bill splitting app that tracks who paid, who owes what, and settles balances automatically. <InternalLink to="/">Loot</InternalLink> does this inside iMessage.
        </AnswerCard>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">Why Splitting Bills Causes Problems</h2>
        <p className="text-muted-foreground max-w-[55ch] mb-4">
          Money is the number one source of conflict in friendships. Unclear expenses, forgotten payments, and awkward reminders strain relationships. A structured system eliminates the guesswork.
        </p>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">The Best Way to Split Bills</h2>
        <ul className="space-y-3 text-muted-foreground max-w-[55ch]">
          <li className="flex gap-2"><span className="text-primary font-semibold">1.</span> Track every shared expense in one place.</li>
          <li className="flex gap-2"><span className="text-primary font-semibold">2.</span> Assign items to specific people when possible.</li>
          <li className="flex gap-2"><span className="text-primary font-semibold">3.</span> Let the app calculate running balances.</li>
          <li className="flex gap-2"><span className="text-primary font-semibold">4.</span> Settle periodically, not after every transaction.</li>
        </ul>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">Tools That Help Split Bills</h2>
        <p className="text-muted-foreground max-w-[55ch] mb-4">
          Apps like <InternalLink to="/best-bill-splitting-app">Splitwise, Settle Up, and Loot</InternalLink> automate expense tracking. Loot's advantage is that it works inside iMessage — your friends don't need to download anything.
        </p>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">Why Apps Are Better Than Manual Tracking</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: "No forgotten expenses", desc: "Everything is recorded in real time." },
            { title: "Automatic math", desc: "Tax, tip, and splits calculated instantly." },
            { title: "Clear records", desc: "Everyone can see who owes what." },
            { title: "Easy settlement", desc: "One tap to pay or request." },
          ].map((item) => (
            <div key={item.title} className="bg-muted rounded-xl p-6">
              <h3 className="font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">Splitting Bills for Every Situation</h2>
        <div className="space-y-3 text-muted-foreground max-w-[65ch]">
          <p>
            Different situations call for different approaches. For a restaurant, itemized splitting is usually fairest — each person pays for what they ordered. For a group Airbnb, equal splitting makes sense since everyone gets the same benefit. For utilities, splitting by usage or equally are both common.
          </p>
          <p>
            The key in every case is to agree on the method before splitting, not after. Once the bill arrives and someone realizes they're being asked to cover more than their fair share, resentment sets in quickly. A clear system established upfront prevents that conversation entirely.
          </p>
          <p>
            Loot handles all of these scenarios. For restaurants, scan the receipt and assign items. For group trips or ongoing roommate expenses, create a group and track everything over time. The app calculates the net balance across all expenses so you only need to settle once, minimizing the number of individual payments required.
          </p>
        </div>
      </Section>

      <Section className="text-center">
        <CTAButton to="/contact" size="lg">Start Splitting Bills With Loot</CTAButton>
      </Section>
    </PageLayout>
  );
}
