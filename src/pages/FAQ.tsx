import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";
import FAQBlock, { faqSchema } from "@/components/FAQBlock";

const faqItems = [
  { question: "What is Loot?", answer: "Loot is a bill splitting and shared expense tracking app that works directly inside iMessage. It lets you scan receipts, assign items to specific people, and settle payments without leaving the conversation. Your friends don't need to download anything — they interact with splits directly in the group chat." },
  { question: "How do I install Loot?", answer: "Download Loot from the App Store and open any iMessage conversation. The Loot icon appears automatically in your iMessage app drawer — no separate account, login, or setup required. Your contacts can participate immediately without installing anything themselves." },
  { question: "Do my friends need to download Loot?", answer: "No. Your friends interact with bill splits directly inside the iMessage conversation. When you send a split, it appears as a message bubble they can tap to claim items and confirm their share. They never leave the chat and never visit the App Store." },
  { question: "Is Loot free?", answer: "Yes. Loot is completely free to use. There is no premium tier, no subscription, and no paywalled features. Receipt scanning, itemized splitting, group expense tracking, and one-tap settlement are all available at no cost." },
  { question: "How does receipt scanning work?", answer: "Point your camera at any printed or digital receipt. Loot's OCR technology automatically reads every line item, quantity, price, tax, and tip — no manual entry required. You can tap any item to edit it before sending the split to your group. The entire scan-to-send process typically takes under 15 seconds." },
  { question: "Can I split bills with people who don't have iMessage?", answer: "Loot is built for iMessage and works best in Apple device groups. For friends on Android, you can share a summary link that displays the full expense breakdown and allows them to settle via their preferred payment method." },
  { question: "How do I settle payments?", answer: "Loot integrates with Apple Pay and Venmo for one-tap settlement directly inside iMessage. You can also mark a payment as settled manually if someone pays in cash or via a bank transfer. Loot tracks all settlement methods and keeps balances accurate regardless of how you pay." },
  { question: "Can I track expenses across multiple outings?", answer: "Yes. Loot maintains running balances across all shared expenses within a group. You don't need to settle after every meal or purchase. Balances accumulate and you settle periodically — weekly for roommates, once at the end of a trip — with a single payment per person." },
  { question: "How does itemized splitting work?", answer: "After scanning a receipt, each person taps the items they ordered in the chat bubble. Shared items like appetizers or a bottle of wine can be assigned to multiple people and the cost is divided proportionally. Tax and tip are distributed automatically based on each person's subtotal. Everyone sees the live breakdown as items are claimed." },
  { question: "Is my financial data secure?", answer: "Yes. Loot never stores your payment credentials or card information. All financial transactions are processed exclusively through Apple Pay or Venmo's secure infrastructure. Loot only records the expense amounts and who owes what within your group." },
  { question: "What is the best way to split a restaurant bill?", answer: "The best way to split a restaurant bill is itemized splitting — each person pays for exactly what they ordered, plus a proportional share of tax and tip. This is fairer than equal splitting when orders vary significantly in price. Loot automates the entire calculation after you scan the receipt." },
  { question: "How do roommates use Loot?", answer: "Roommates create a shared Loot group for their household and add expenses as they occur — rent, utilities, groceries, household supplies. Loot tracks the running balance across all expenses and calculates how much each person owes at settlement time. Most roommates settle once a month with a single Apple Pay transfer." },
  { question: "Can I use Loot for travel expenses?", answer: "Yes. Create a trip group before you leave and add expenses as they happen — hotels, flights booked together, meals, rideshares, activity tickets. Loot tracks who paid for what and calculates the minimum number of transfers needed to settle everything when the trip ends. You never need to figure out complex multi-way splits manually." },
  { question: "What payment methods does Loot support?", answer: "Loot supports Apple Pay and Venmo for instant digital settlement. You can also manually record cash payments, check payments, or bank transfers. All payment types update the group balance correctly so your records stay accurate regardless of how people choose to pay." },
  { question: "How is Loot different from Splitwise?", answer: "The key difference is that Loot works inside iMessage — your friends don't need to download a separate app, create an account, or learn a new interface. Splitwise requires all participants to install the app and sign up before they can join a group. Loot also offers receipt scanning and Apple Pay settlement, which Splitwise's free tier does not include." },
];

export default function FAQPage() {
  return (
    <PageLayout
      title="FAQ | Bill Splitting Questions Answered | Loot"
      description="Answers to common questions about bill splitting, expense tracking, and how Loot works inside iMessage."
      canonicalPath="/faq"
      schema={faqSchema(faqItems)}
    >
      <Section>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">Frequently Asked Questions</h1>
        <p className="text-lg text-muted-foreground max-w-[55ch] mb-4">
          Everything you need to know about splitting bills with Loot.
        </p>
        <p className="text-muted-foreground max-w-[65ch] mb-10">
          Loot is a bill splitting app built into iMessage. It lets you scan receipts, assign items to specific people, track running balances across multiple outings, and settle payments via Apple Pay or Venmo — all without leaving the conversation. The questions below cover setup, features, and common use cases.
        </p>
        <FAQBlock items={faqItems} />
        <div className="mt-12 space-y-4 text-muted-foreground max-w-[65ch]">
          <h2 className="text-xl font-semibold text-foreground">About Loot</h2>
          <p>
            Loot is available as a free download on the App Store for iPhone. It works as an iMessage extension, so it lives in the same place as your conversations. There's no separate login, no monthly fee, and no requirement for your friends to install anything.
          </p>
          <p>
            Common use cases include splitting restaurant bills, managing roommate expenses, tracking group travel costs, and dividing event expenses among friends. Loot handles one-time splits and long-running group balances equally well.
          </p>
          <p className="mb-4">Still have questions? We respond to every message personally.</p>
          <CTAButton to="/contact">Contact Us</CTAButton>
        </div>
      </Section>
    </PageLayout>
  );
}
