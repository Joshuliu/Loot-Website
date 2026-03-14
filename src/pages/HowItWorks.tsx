import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";
import { MessageSquare, Receipt, Users, CreditCard, CheckCircle } from "lucide-react";

const steps = [
  { icon: MessageSquare, title: "Open iMessage", desc: "Tap the Loot icon in your iMessage app drawer. No separate app needed for your friends.", step: "1" },
  { icon: Receipt, title: "Scan a Receipt", desc: "Point your camera at the receipt. Loot's OCR extracts every item and price automatically.", step: "2" },
  { icon: Users, title: "Assign Items", desc: "Friends tap the items they ordered directly in the chat bubble. Everyone sees who owes what.", step: "3" },
  { icon: CheckCircle, title: "Track Balances", desc: "Loot keeps a running balance across all your shared expenses. No mental math required.", step: "4" },
  { icon: CreditCard, title: "Settle Payments", desc: "One-tap settlement via Apple Pay or Venmo. The entire flow takes under 30 seconds.", step: "5" },
];

export default function HowItWorksPage() {
  return (
    <PageLayout
      title="How to Split Bills With Friends | How Loot Works"
      description="Learn how to split bills with friends using Loot. Create a group, scan receipts, assign items, and settle payments — all inside iMessage."
      canonicalPath="/how-it-works"
    >
      <Section>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">How Loot Works</h1>
        <p className="text-lg text-muted-foreground max-w-[55ch] mb-12">
          Splitting bills with friends takes five simple steps — all inside iMessage. No new apps to download, no accounts to create.
        </p>

        <div className="space-y-6">
          {steps.map((s) => (
            <div key={s.step} className="flex gap-5 items-start shadow-native-sm rounded-xl p-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
                {s.step}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <s.icon size={18} className="text-primary" />
                  <h2 className="text-lg font-semibold">Step {s.step}: {s.title}</h2>
                </div>
                <p className="text-muted-foreground max-w-[55ch]">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <CTAButton to="/features" size="lg">Explore All Features</CTAButton>
        </div>
      </Section>
    </PageLayout>
  );
}
