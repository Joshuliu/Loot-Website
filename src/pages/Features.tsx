import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";
import InternalLink from "@/components/InternalLink";
import { Receipt, Split, Users, CreditCard, MessageSquare } from "lucide-react";

const features = [
  { icon: Receipt, title: "Receipt Scanning", desc: "Point your camera at any receipt. Loot uses OCR to extract every line item, price, tax, and tip automatically. No manual entry required.", link: "/split-restaurant-bill", linkText: "How to split a restaurant bill →" },
  { icon: Split, title: "Itemized Bill Splitting", desc: "Assign specific items to specific people. Split shared items proportionally. Handle tax and tip with one tap.", link: "/split-bills", linkText: "How to split bills with friends →" },
  { icon: Users, title: "Group Expense Tracking", desc: "Track expenses across multiple outings, trips, or months. Loot maintains running balances so you only settle once.", link: "/split-travel-expenses", linkText: "How to split travel expenses →" },
  { icon: CreditCard, title: "One-Tap Settlement", desc: "Settle debts instantly via Apple Pay or Venmo. No fumbling with payment apps or bank transfers.", link: "/split-bills", linkText: "Guide to splitting bills →" },
  { icon: MessageSquare, title: "iMessage Integration", desc: "Loot lives inside iMessage. Your friends don't need to download an app, create an account, or leave the conversation.", link: "/how-it-works", linkText: "See how Loot works →" },
];

export default function FeaturesPage() {
  return (
    <PageLayout
      title="Bill Splitting App Features | Loot"
      description="Explore Loot's features: receipt scanning, itemized splitting, group expense tracking, and one-tap settlement — all inside iMessage."
      canonicalPath="/features"
    >
      <Section>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">Features</h1>
        <p className="text-lg text-muted-foreground max-w-[55ch] mb-12">
          Everything you need to split bills fairly — built directly into iMessage.
        </p>

        <div className="space-y-6">
          {features.map((f) => (
            <div key={f.title} className="shadow-native-sm rounded-xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <f.icon size={20} className="text-primary" />
                </div>
                <h2 className="text-xl font-semibold">{f.title}</h2>
              </div>
              <p className="text-muted-foreground max-w-[55ch] mb-3">{f.desc}</p>
              <InternalLink to={f.link}>{f.linkText}</InternalLink>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-[65ch] space-y-3 text-muted-foreground">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Why These Features Matter</h2>
          <p>
            Most bill splitting friction comes from one of two problems: the person who paid can't be bothered to track it, or the people who owe can't be bothered to venmo back. Loot eliminates both. Receipt scanning means no manual entry for the payer. iMessage integration means no friction for anyone who owes.
          </p>
          <p>
            The result is a system where expenses actually get tracked, balances stay accurate, and payments happen quickly. No more "I'll get you next time" that turns into never, and no more awkward follow-ups weeks after the fact.
          </p>
          <p>
            Loot is free to use. It works for any size group — two roommates splitting utilities or ten friends on a road trip. The core features are available to everyone without a subscription or premium tier.
          </p>
        </div>
        <div className="mt-8 text-center">
          <CTAButton href="https://apps.apple.com/us/app/loot-me/id6757330604" size="lg">Get Loot — It's Free</CTAButton>
        </div>
      </Section>
    </PageLayout>
  );
}
