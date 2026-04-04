import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import AnswerCard from "@/components/AnswerCard";
import CTAButton from "@/components/CTAButton";
import FAQBlock, { faqSchema } from "@/components/FAQBlock";
import InternalLink from "@/components/InternalLink";
import { motion } from "framer-motion";
import { Receipt, Users, MessageSquare, CreditCard, Utensils, Home, Plane, PartyPopper } from "lucide-react";
import heroMockup from "@/assets/hero-imessage-mockup.png";

const homeFAQ = [
  { question: "What is a bill splitting app?", answer: "A bill splitting app is a tool that helps you divide shared expenses among a group of people. Loot is a bill splitting app that works directly inside iMessage, so everyone can participate without downloading a separate app." },
  { question: "How do you split a bill between friends?", answer: "To split a bill between friends, add the expense to a shared group, assign each person their items or an equal share, and settle balances with a single tap. Loot automates this entire process inside your iMessage conversations." },
  { question: "What is the easiest way to split a restaurant bill?", answer: "The easiest way to split a restaurant bill is to scan the receipt with an app like Loot, which uses OCR to extract items and prices. Friends then tap their items in the group chat to claim them." },
  { question: "Is there an app to track shared expenses?", answer: "Yes. Loot is a shared expense tracking app that lets you track who owes what across multiple expenses. It works inside iMessage so there's no separate app for your friends to download." },
  { question: "How do roommates split bills fairly?", answer: "Roommates split bills fairly by tracking all shared expenses — rent, utilities, groceries — in one place and settling the net balance regularly. Loot makes this easy with automatic balance tracking." },
  { question: "Can you split bills in iMessage?", answer: "Yes. Loot is built as an iMessage app, so you can split bills, assign items, and settle payments directly inside any group conversation without leaving the chat." },
  { question: "What is the best bill splitting app?", answer: "The best bill splitting app is one that's fast, simple, and doesn't require everyone to download something new. Loot is the only bill splitting app that works natively inside iMessage." },
  { question: "How do you split travel expenses with friends?", answer: "To split travel expenses with friends, create a shared group and add each expense as it happens — hotels, meals, rides, activities. Loot tracks the running balance so you settle once at the end of the trip." },
  { question: "How do you track who owes what?", answer: "Loot automatically tracks who owes what by maintaining a running balance across all shared expenses. You can see exactly how much each person owes or is owed at any time." },
  { question: "Can you split bills without downloading an app?", answer: "Yes. Because Loot works inside iMessage, your friends don't need to download a separate app. They interact with bill splits directly in the group chat." },
];

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Loot",
  url: "https://plsloot.me",
  operatingSystem: "iOS",
  applicationCategory: "FinanceApplication",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description: "Split bills and track shared expenses directly inside iMessage.",
};

const useCases = [
  { icon: Utensils, label: "Restaurant Bills", desc: "Scan receipts and split items instantly.", link: "/split-restaurant-bill" },
  { icon: Home, label: "Roommate Expenses", desc: "Track rent, utilities, and groceries.", link: "/split-expenses-with-roommates" },
  { icon: Plane, label: "Travel Costs", desc: "Split hotels, flights, and activities.", link: "/split-travel-expenses" },
  { icon: PartyPopper, label: "Group Events", desc: "Manage shared costs for any occasion.", link: "/split-bills" },
];

export default function HomePage() {
  return (
    <PageLayout
      title="Best Bill Splitting App | Split Bills With Friends Instantly | Loot"
      description="Split bills with friends instantly using Loot. The easiest bill splitting app for restaurants, roommates, and travel expenses. Stop arguing about money."
      canonicalPath="/"
      schema={[orgSchema, faqSchema(homeFAQ)]}
    >
      {/* Hero */}
      <section className="section-padding pt-20 pb-16 sm:pt-28 sm:pb-24 min-h-[70svh] flex items-center">
        <div className="content-width">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
              className="max-w-2xl lg:flex-1"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1] mb-5">
                Split Bills With Friends Instantly
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-[55ch] mb-8 leading-relaxed">
                Loot is a bill splitting app that works directly inside iMessage. No new apps for your friends to download, no awkward "what's your username" moments.
              </p>
              <div className="flex flex-wrap gap-3">
                <CTAButton to="/how-it-works" size="lg">
                  <MessageSquare size={18} className="mr-2" />
                  See How It Works
                </CTAButton>
                <CTAButton to="/features" variant="secondary" size="lg">
                  Explore Features
                </CTAButton>
              </div>
              <p className="mt-5 text-sm text-muted-foreground">Average setup time: 14 seconds.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
              className="lg:flex-1 max-w-md"
            >
              <img
                src={heroMockup}
                alt="Loot bill splitting app running inside iMessage showing a receipt breakdown and friend assignments"
                className="w-full h-auto rounded-2xl shadow-native-lg"
                loading="eager"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is Loot */}
      <Section>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">What Is Loot?</h2>
        <AnswerCard>
          Loot is a bill splitting and shared expense tracking app designed to make splitting money with friends simple and stress-free. Unlike traditional expense apps, Loot works directly inside iMessage so you can split bills without leaving your conversation.
        </AnswerCard>
        <div className="mt-6 space-y-4 text-muted-foreground max-w-[65ch]">
          <p>
            Every bill splitting app works the same way: one person downloads it, tries to get everyone else to download it, fails to get at least one person to join, and gives up. Loot solves this by living inside iMessage — the app your whole group already uses every day.
          </p>
          <p>
            When you start a split in Loot, it appears as an interactive message bubble in your group chat. Your friends tap their items, confirm their share, and pay — all without leaving the conversation or downloading anything new. The person who paid gets reimbursed instantly.
          </p>
        </div>
      </Section>

      {/* Pain points */}
      <Section>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Why Splitting Bills Is So Hard</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: "Awkward conversations", desc: "Nobody wants to be the one to ask 'so who had what?'" },
            { title: "Complicated math", desc: "Tax, tip, split items, and IOUs make even simple bills confusing." },
            { title: "Lost receipts", desc: "By the time you get home, the receipt is gone and memory is fuzzy." },
            { title: "Unclear payments", desc: "Venmo requests get lost, and nobody remembers who paid whom." },
          ].map((item) => (
            <div key={item.title} className="bg-muted rounded-xl p-6">
              <h3 className="font-semibold mb-1">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* How Loot works */}
      <Section>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">How Loot Makes Splitting Bills Easy</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Users, step: "1", label: "Add friends to a group" },
            { icon: Receipt, step: "2", label: "Scan a receipt" },
            { icon: MessageSquare, step: "3", label: "Assign items in chat" },
            { icon: CreditCard, step: "4", label: "Settle balances instantly" },
          ].map((s) => (
            <div key={s.step} className="shadow-native-sm rounded-xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground text-sm font-semibold mb-3">
                {s.step}
              </div>
              <s.icon size={24} className="mx-auto mb-2 text-muted-foreground" />
              <p className="font-medium text-sm">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 space-y-3 text-muted-foreground max-w-[65ch]">
          <p>
            Open Loot inside any iMessage group chat and tap the camera to scan a receipt. Loot's OCR technology reads every line item, price, tax, and tip automatically — no manual entry required. Each friend taps the items they ordered directly in the chat, and Loot calculates what everyone owes including a proportional share of tax and tip.
          </p>
          <p>
            Loot tracks running balances across all your shared expenses. Instead of settling after every dinner or ride, the balance accumulates and you settle periodically with one tap using Apple Pay or Venmo.
          </p>
        </div>
        <div className="mt-4">
          <InternalLink to="/how-it-works">See the full walkthrough →</InternalLink>
        </div>
      </Section>

      {/* Use cases */}
      <Section>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Perfect for Every Shared Expense</h2>
        <p className="text-muted-foreground max-w-[65ch] mb-6">
          Whether you're splitting a single dinner check or managing months of shared costs, Loot handles any situation where more than one person is paying for something together.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {useCases.map((uc) => (
            <InternalLink to={uc.link} key={uc.label}>
              <div className="shadow-native-sm rounded-xl p-6 hover:shadow-native-md transition-shadow h-full">
                <uc.icon size={24} className="mb-3 text-primary" />
                <h3 className="font-semibold mb-1">{uc.label}</h3>
                <p className="text-sm text-muted-foreground">{uc.desc}</p>
              </div>
            </InternalLink>
          ))}
        </div>
      </Section>

      {/* Why Loot is best */}
      <Section>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Why Loot Is the Best Bill Splitting App</h2>
        <p className="text-muted-foreground max-w-[65ch] mb-6">
          Splitwise and Settle Up require every person in the group to create an account and install a separate app. Loot requires nothing from your friends — it works inside the iMessage conversation you're already in. That difference is why Loot actually gets used.
        </p>
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
                ["No download required for friends", "✓", "✗", "✗"],
                ["Receipt scanning", "✓", "✓", "✗"],
                ["Instant settlement", "✓", "✓", "✓"],
                ["Free to use", "✓", "Freemium", "Free"],
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
        <div className="mt-6">
          <InternalLink to="/best-bill-splitting-app">See the full comparison →</InternalLink>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Frequently Asked Questions</h2>
        <FAQBlock items={homeFAQ} />
      </Section>

      {/* CTA */}
      <Section className="text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Stop Arguing About Money</h2>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">Split bills in seconds. Right inside iMessage.</p>
        <CTAButton to="/contact" size="lg">Get Loot — It's Free</CTAButton>
      </Section>
    </PageLayout>
  );
}
