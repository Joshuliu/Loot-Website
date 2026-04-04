import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";

export default function AboutPage() {
  return (
    <PageLayout
      title="About Loot | The iMessage Bill Splitting App"
      description="Loot is a bill splitting app built for iMessage. Learn about our mission to make splitting expenses effortless."
      canonicalPath="/about"
    >
      <Section>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">About Loot</h1>
        <div className="max-w-[65ch] space-y-4 text-muted-foreground">
          <p>
            Loot was built on a simple observation: bill splitting apps only work when everyone in the group uses them. And getting five friends to download, sign up for, and learn a new app is nearly impossible.
          </p>
          <p>
            So we built Loot inside iMessage — the one app everyone already has open. No downloads for friends. No accounts. No friction.
          </p>
          <p>
            Our mission is to make shared expenses invisible. Not the tracking — that should be clear and fair. But the process should be so fast and simple that it disappears into the natural flow of conversation.
          </p>
          <p>
            Loot handles every type of shared expense: restaurant bills split by item, monthly utilities shared by roommates, hotel rooms divided among travelers, and group event costs that span weeks. No matter how complex the situation, Loot reduces it to a single tap.
          </p>
          <p>
            We believe that money should strengthen friendships, not strain them. The best way to keep things fair is to track everything clearly — and the best way to track everything is to make it effortless. That's what Loot is built to do.
          </p>
          <p>
            Receipt scanning powered by OCR, automatic tax and tip distribution, running balance tracking, and one-tap settlement via Apple Pay or Venmo — all inside the iMessage conversation where the plan was made in the first place.
          </p>
          <p className="text-foreground font-medium">
            Split Bills, Not Friendships.
          </p>
        </div>
      </Section>

      <Section className="text-center">
        <CTAButton to="/how-it-works" size="lg">See How It Works</CTAButton>
      </Section>
    </PageLayout>
  );
}
