import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import AnswerCard from "@/components/AnswerCard";
import CTAButton from "@/components/CTAButton";
import InternalLink from "@/components/InternalLink";

export default function WhyLootPage() {
  return (
    <PageLayout
      title="Why Loot | The Best Way to Split Bills"
      description="Why Loot is the best bill splitting app. iMessage integration, receipt scanning, and instant settlement — no separate app for your friends."
      canonicalPath="/why-loot"
    >
      <Section>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">Why Loot?</h1>
        <AnswerCard>
          Loot is the only bill splitting app that works inside iMessage. Your friends don't need to download anything, create accounts, or leave the conversation.
        </AnswerCard>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">The Problem With Other Apps</h2>
        <p className="text-muted-foreground max-w-[55ch] mb-4">
          Traditional bill splitting apps require everyone in your group to download, sign up, and learn a new app. That friction means most people never actually use them.
        </p>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">What Makes Loot Different</h2>
        <div className="space-y-4">
          {[
            { title: "Zero friction", desc: "Works inside iMessage. No downloads for friends." },
            { title: "Instant setup", desc: "Average setup time: 14 seconds." },
            { title: "Smart scanning", desc: "OCR receipt scanning extracts every item automatically." },
            { title: "Fair splitting", desc: "Itemized splits so everyone pays for what they ordered." },
            { title: "One-tap settlement", desc: "Settle via Apple Pay or Venmo without leaving the chat." },
          ].map((item) => (
            <div key={item.title} className="flex gap-4 items-start">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">Who Loot Is For</h2>
        <div className="space-y-3 text-muted-foreground max-w-[65ch]">
          <p>
            Loot works for anyone who regularly splits expenses with people they know — friends who go out to dinner, roommates who share a household, travel groups managing a trip budget, or colleagues splitting a work lunch.
          </p>
          <p>
            The iMessage integration makes it especially useful in groups where not everyone is willing to download a new app. Since your friends only need iMessage — which they already have — adoption isn't a barrier. The person who initiated the split does the work; everyone else just taps.
          </p>
          <p>
            Loot is free. There's no premium tier, no ads, and no paywalled features. Receipt scanning, itemized splitting, group tracking, and Apple Pay settlement are all available from day one. The average setup time is 14 seconds — from opening iMessage to sending the first split.
          </p>
          <p>
            If you've tried apps like Splitwise or Settle Up and found that getting everyone to actually use them is the hard part, Loot solves exactly that problem.
          </p>
        </div>
      </Section>

      <Section className="text-center">
        <CTAButton to="/features" size="lg">See All Features</CTAButton>
      </Section>
    </PageLayout>
  );
}
