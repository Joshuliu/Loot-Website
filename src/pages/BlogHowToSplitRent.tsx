import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import AnswerCard from "@/components/AnswerCard";
import InternalLink from "@/components/InternalLink";
import CTAButton from "@/components/CTAButton";

export default function BlogHowToSplitRent() {
  return (
    <PageLayout
      title="How to Split Rent Fairly With Roommates | Loot Blog"
      description="Learn three fair methods for splitting rent with roommates: equal split, by room size, and by income. Find the approach that works for your household."
      canonicalPath="/blog/how-to-split-rent"
    >
      <Section>
        <div className="mb-4"><InternalLink to="/blog">← Back to Blog</InternalLink></div>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6">How to Split Rent Fairly</h1>
        <AnswerCard>
          The fairest way to split rent is proportionally by room size. Measure each bedroom's square footage, calculate the percentage of total bedroom space, and apply that percentage to the total rent.
        </AnswerCard>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">Three Methods for Splitting Rent</h2>
        <div className="space-y-4">
          <div className="bg-muted rounded-xl p-6">
            <h3 className="font-semibold mb-1">Equal Split</h3>
            <p className="text-sm text-muted-foreground">Total rent ÷ number of roommates. Simple, but only fair when rooms are identical.</p>
          </div>
          <div className="bg-muted rounded-xl p-6">
            <h3 className="font-semibold mb-1">By Room Size</h3>
            <p className="text-sm text-muted-foreground">Bigger room = higher share. Factor in closet space, natural light, and private bathrooms.</p>
          </div>
          <div className="bg-muted rounded-xl p-6">
            <h3 className="font-semibold mb-1">By Income</h3>
            <p className="text-sm text-muted-foreground">Each person pays a percentage of their income. Requires trust and transparency.</p>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">Related</h2>
        <ul className="space-y-2">
          <li><InternalLink to="/split-expenses-with-roommates">Complete roommate expense guide →</InternalLink></li>
          <li><InternalLink to="/bill-splitting-guide">Bill splitting guide →</InternalLink></li>
        </ul>
      </Section>

      <Section className="text-center">
        <CTAButton to="/contact" size="lg">Track Rent With Loot</CTAButton>
      </Section>
    </PageLayout>
  );
}
