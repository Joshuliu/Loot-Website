import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import AnswerCard from "@/components/AnswerCard";
import CTAButton from "@/components/CTAButton";
import InternalLink from "@/components/InternalLink";

export default function BillSplittingGuidePage() {
  return (
    <PageLayout
      title="The Complete Bill Splitting Guide (2025) | Loot"
      description="Everything you need to know about splitting bills: methods, tools, etiquette, and tips. The most comprehensive bill splitting guide online."
      canonicalPath="/bill-splitting-guide"
    >
      <Section>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">The Complete Guide to Splitting Bills</h1>
        <AnswerCard>
          Bill splitting is the process of dividing shared expenses among a group of people. Whether you're splitting a restaurant check, sharing rent with roommates, or managing group travel costs, the right approach prevents awkward conversations and keeps friendships intact.
        </AnswerCard>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
        <nav className="space-y-2">
          {[
            { label: "What Is Bill Splitting?", href: "#what-is-bill-splitting" },
            { label: "Common Bill Splitting Methods", href: "#methods" },
            { label: "When to Use Each Method", href: "#when-to-use" },
            { label: "Bill Splitting Etiquette", href: "#etiquette" },
            { label: "Bill Splitting Tools", href: "#tools" },
            { label: "Splitting by Situation", href: "#situations" },
            { label: "Common Mistakes", href: "#mistakes" },
          ].map((item) => (
            <a key={item.href} href={item.href} className="block text-primary hover:underline underline-offset-2 text-sm">{item.label}</a>
          ))}
        </nav>
      </Section>

      <Section id="what-is-bill-splitting">
        <h2 className="text-2xl font-semibold mb-4">What Is Bill Splitting?</h2>
        <p className="text-muted-foreground max-w-[65ch] mb-4">
          Bill splitting is the practice of dividing a shared expense among two or more people. It applies to any situation where multiple people benefit from a single purchase: restaurant meals, shared housing costs, group travel, subscriptions, and more.
        </p>
        <p className="text-muted-foreground max-w-[65ch]">
          The goal is fairness. Everyone should pay a share that reflects what they consumed or benefited from. The challenge is doing this quickly, accurately, and without making things awkward.
        </p>
      </Section>

      <Section id="methods">
        <h2 className="text-2xl font-semibold mb-4">Common Bill Splitting Methods</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">1. Equal Split</h3>
            <p className="text-muted-foreground max-w-[65ch]">
              Divide the total by the number of people. Simple, fast, and works well when everyone ordered similar items. Less fair when one person had a salad and another had lobster.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">2. Itemized Split</h3>
            <p className="text-muted-foreground max-w-[65ch]">
              Each person pays for exactly what they ordered, plus a proportional share of tax and tip. The fairest method, but harder to calculate manually. Apps like <InternalLink to="/">Loot</InternalLink> make this instant with receipt scanning.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">3. Proportional Split</h3>
            <p className="text-muted-foreground max-w-[65ch]">
              Split based on a ratio — for example, by income or by room size for rent. Common for roommates with different financial situations.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">4. Rotating Payment</h3>
            <p className="text-muted-foreground max-w-[65ch]">
              One person pays the full bill each time. Over several outings, it roughly evens out. Works for regular groups that dine together frequently.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">5. One Person Pays, Others Settle Later</h3>
            <p className="text-muted-foreground max-w-[65ch]">
              One person covers the bill, then tracks who owes what. Best for situations where splitting at the register isn't practical. Use an <InternalLink to="/best-bill-splitting-app">expense tracking app</InternalLink> to avoid forgotten debts.
            </p>
          </div>
        </div>
      </Section>

      <Section id="when-to-use">
        <h2 className="text-2xl font-semibold mb-4">When to Use Each Method</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-foreground text-background">
                <th className="text-left p-3 font-semibold rounded-tl-lg">Situation</th>
                <th className="text-left p-3 font-semibold">Best Method</th>
                <th className="text-left p-3 font-semibold rounded-tr-lg">Why</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Casual dinner, similar orders", "Equal split", "Fast and nobody minds small differences."],
                ["Fine dining, mixed budgets", "Itemized split", "Fair for everyone regardless of what they ordered."],
                ["Roommate rent", "Proportional by room size", "Reflects actual value received."],
                ["Weekly lunch group", "Rotating payment", "Simplifies the process over time."],
                ["Group travel", "Track & settle at end", "Minimizes daily payment hassle."],
              ].map((row, i) => (
                <tr key={i} className="border-b border-foreground/5">
                  <td className="p-3 font-medium">{row[0]}</td>
                  <td className="p-3 text-muted-foreground">{row[1]}</td>
                  <td className="p-3 text-muted-foreground">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="etiquette">
        <h2 className="text-2xl font-semibold mb-4">Bill Splitting Etiquette</h2>
        <ul className="space-y-3 text-muted-foreground max-w-[65ch]">
          <li><strong className="text-foreground">Agree before ordering.</strong> Decide how you'll split the bill before anyone orders. This prevents surprises.</li>
          <li><strong className="text-foreground">Don't nickel-and-dime.</strong> If the difference is a few dollars, let it go. Relationships are worth more.</li>
          <li><strong className="text-foreground">Speak up early.</strong> If you're on a tight budget, say so at the start. Most friends understand.</li>
          <li><strong className="text-foreground">Tip fairly.</strong> Always tip on the full amount, even if you're splitting. Don't short the server.</li>
          <li><strong className="text-foreground">Settle quickly.</strong> Pay your share the same day. Delayed payments breed resentment.</li>
        </ul>
      </Section>

      <Section id="tools">
        <h2 className="text-2xl font-semibold mb-4">Bill Splitting Tools</h2>
        <p className="text-muted-foreground max-w-[65ch] mb-4">
          Several apps can help with bill splitting. The best one depends on your needs:
        </p>
        <ul className="space-y-3 text-muted-foreground max-w-[65ch]">
          <li><strong className="text-foreground"><InternalLink to="/">Loot</InternalLink></strong> — Works inside iMessage. Best for quick splits where friends don't want another app.</li>
          <li><strong className="text-foreground">Splitwise</strong> — Full-featured expense tracker. Good for long-term groups but requires everyone to sign up.</li>
          <li><strong className="text-foreground">Settle Up</strong> — Simple and free. Good for basic tracking but lacks receipt scanning.</li>
        </ul>
        <div className="mt-4 space-y-2">
          <div><InternalLink to="/best-bill-splitting-app">See our full app comparison →</InternalLink></div>
          <div><InternalLink to="/blog/how-to-track-shared-expenses">How to track shared expenses without spreadsheets →</InternalLink></div>
        </div>
      </Section>

      <Section id="situations">
        <h2 className="text-2xl font-semibold mb-4">Splitting by Situation</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="shadow-native-sm rounded-xl p-6">
            <h3 className="font-semibold mb-1">Restaurant Bills</h3>
            <p className="text-sm text-muted-foreground mb-2">Scan the receipt, assign items, split tax and tip.</p>
            <InternalLink to="/split-restaurant-bill">How to split a restaurant bill →</InternalLink>
          </div>
          <div className="shadow-native-sm rounded-xl p-6">
            <h3 className="font-semibold mb-1">Roommate Expenses</h3>
            <p className="text-sm text-muted-foreground mb-2">Track rent, utilities, and groceries monthly.</p>
            <InternalLink to="/split-expenses-with-roommates">Roommate guide →</InternalLink>
          </div>
          <div className="shadow-native-sm rounded-xl p-6">
            <h3 className="font-semibold mb-1">Travel Expenses</h3>
            <p className="text-sm text-muted-foreground mb-2">Log expenses as they happen, settle at the end.</p>
            <InternalLink to="/split-travel-expenses">How to split travel expenses →</InternalLink>
          </div>
          <div className="shadow-native-sm rounded-xl p-6">
            <h3 className="font-semibold mb-1">Group Events</h3>
            <p className="text-sm text-muted-foreground mb-2">Parties, gifts, activities — all tracked in one place.</p>
            <InternalLink to="/blog/group-expense-management">Group expense management guide →</InternalLink>
          </div>
        </div>
      </Section>

      <Section id="mistakes">
        <h2 className="text-2xl font-semibold mb-4">Common Bill Splitting Mistakes</h2>
        <ul className="space-y-3 text-muted-foreground max-w-[65ch]">
          <li><strong className="text-foreground">Waiting too long to settle.</strong> Memory fades and so does motivation to pay. Settle the same day.</li>
          <li><strong className="text-foreground">Not tracking small expenses.</strong> $5 here, $10 there — it adds up. Track everything.</li>
          <li><strong className="text-foreground">Forgetting tax and tip.</strong> A $100 bill becomes $125+ with tax and tip. Include both in your split.</li>
          <li><strong className="text-foreground">Using mental math.</strong> Human calculation is unreliable. Use an app.</li>
          <li><strong className="text-foreground">Making it awkward.</strong> Frame it as "let's use an app so it's fair" rather than "you owe me $12.47."</li>
        </ul>
        <div className="mt-6 space-y-2">
          <p className="text-sm text-muted-foreground font-medium">Further reading:</p>
          <div><InternalLink to="/blog/how-to-split-a-bill">How to split a bill: the complete step-by-step guide →</InternalLink></div>
          <div><InternalLink to="/blog/how-to-track-shared-expenses">How to track shared expenses without spreadsheets →</InternalLink></div>
          <div><InternalLink to="/blog/group-expense-management">Group expense management: a practical guide →</InternalLink></div>
        </div>
      </Section>

      <Section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to Split Bills the Easy Way?</h2>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">Loot handles the math, the tracking, and the settling — all inside iMessage.</p>
        <CTAButton href="https://apps.apple.com/us/app/loot-me/id6757330604" size="lg">Get Loot — It's Free</CTAButton>
      </Section>
    </PageLayout>
  );
}
