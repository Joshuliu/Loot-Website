import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";
import { MessageSquare, Receipt, Users, CreditCard, CheckCircle } from "lucide-react";
import scanImg from "@/assets/how-it-works-scan.png";
import assignImg from "@/assets/how-it-works-assign.png";

const steps = [
  { icon: MessageSquare, title: "Open iMessage", desc: "Tap the Loot icon in your iMessage app drawer. Loot appears automatically once installed — no setup needed. Your friends don't need to do anything in advance. They'll interact with the split directly inside the chat message.", step: "1", img: null as string | null },
  { icon: Receipt, title: "Scan a Receipt", desc: "Point your camera at any printed or digital receipt. Loot's OCR technology reads every line item, quantity, price, tax, and tip. No manual entry required. You can edit any item if the scan misses something, then send the split to the group.", step: "2", img: scanImg },
  { icon: Users, title: "Assign Items", desc: "A message bubble appears in the group chat showing the full receipt. Each friend taps the items they ordered. Shared items — like a bottle of wine or an appetizer — can be assigned to multiple people and split proportionally. Everyone sees the live breakdown update as people claim their items.", step: "3", img: assignImg },
  { icon: CheckCircle, title: "Track Balances", desc: "After each split, Loot updates the running balance for each person in the group. Instead of settling after every meal, balances accumulate. You can see exactly who owes what at any time — no mental math, no spreadsheet.", step: "4", img: null as string | null },
  { icon: CreditCard, title: "Settle Payments", desc: "When you're ready to settle, tap once to pay via Apple Pay or Venmo. Loot calculates the minimum number of transfers needed so no one has to make multiple payments. The entire process from scan to settlement takes under 30 seconds.", step: "5", img: null as string | null },
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

        <div className="space-y-8">
          {steps.map((s) => (
            <div key={s.step} className={`flex flex-col ${s.img ? 'md:flex-row' : ''} gap-6 items-start shadow-native-sm rounded-xl p-6`}>
              <div className={`flex gap-5 items-start ${s.img ? 'md:flex-1' : 'w-full'}`}>
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
              {s.img && (
                <div className="md:flex-1 max-w-xs mx-auto md:mx-0">
                  <img
                    src={s.img}
                    alt={`${s.title} - Loot bill splitting in iMessage`}
                    className="w-full h-auto rounded-xl shadow-native"
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-[65ch] space-y-3 text-muted-foreground">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Why iMessage?</h2>
          <p>
            The biggest problem with existing bill splitting apps is that they require everyone to download and install them. In a group of five, you almost always have at least one person who refuses to download a new app — and that one person breaks the whole system.
          </p>
          <p>
            iMessage is already installed on every iPhone. When you start a Loot split in a group chat, your friends can see the receipt, tap their items, and confirm their share without ever leaving the conversation. No account creation, no app store visit, no friction.
          </p>
          <p>
            For the person initiating the split, the experience is just as fast. Scan the receipt, review the items Loot extracted automatically, and send. The entire process takes under 30 seconds. Loot then tracks the running balance in that conversation, so when the next dinner or trip comes up, everything is already organized.
          </p>
        </div>
        <div className="mt-8 text-center">
          <CTAButton to="/features" size="lg">Explore All Features</CTAButton>
        </div>
      </Section>
    </PageLayout>
  );
}
