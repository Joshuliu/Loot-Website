import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import AnswerCard from "@/components/AnswerCard";
import CTAButton from "@/components/CTAButton";
import InternalLink from "@/components/InternalLink";

export default function SplitTravelPage() {
  return (
    <PageLayout
      title="How to Split Travel Expenses With Friends | Loot"
      description="The best way to split travel expenses with friends: Airbnb, transportation, food, and activities. Use Loot to track group travel costs in iMessage."
      canonicalPath="/split-travel-expenses"
    >
      <Section>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">How to Split Travel Expenses With Friends</h1>
        <AnswerCard>
          To split travel expenses with friends, create a shared group before the trip and log every expense as it happens. At the end, settle the net balance in one payment. <InternalLink to="/">Loot</InternalLink> tracks everything inside your iMessage group chat.
        </AnswerCard>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">Common Travel Expenses to Split</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: "Accommodation", desc: "Airbnb, hotels, hostels. Split by nights stayed or equally." },
            { title: "Transportation", desc: "Rental cars, gas, rideshares, flights booked together." },
            { title: "Food & Drinks", desc: "Group meals, groceries for the house, bar tabs." },
            { title: "Activities", desc: "Tours, tickets, equipment rentals. Only charge who participated." },
          ].map((item) => (
            <div key={item.title} className="shadow-native-sm rounded-xl p-6">
              <h3 className="font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">The Golden Rule: One Settlement at the End</h2>
        <p className="text-muted-foreground max-w-[55ch]">
          Don't try to settle after every meal or taxi ride. Track expenses throughout the trip and settle the net balance once when you get home. <InternalLink to="/how-it-works">Loot</InternalLink> calculates exactly who owes whom, minimizing the number of payments needed.
        </p>
      </Section>

      <Section className="text-center">
        <CTAButton to="/contact" size="lg">Plan Your Trip With Loot</CTAButton>
      </Section>
    </PageLayout>
  );
}
