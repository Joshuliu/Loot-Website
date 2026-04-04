import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";
import InternalLink from "@/components/InternalLink";

export default function ContactPage() {
  return (
    <PageLayout
      title="Contact Loot | Get in Touch"
      description="Have questions about Loot? Get in touch with our team. We'd love to hear from you."
      canonicalPath="/contact"
    >
      <Section>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">Contact Us</h1>
        <div className="max-w-lg">
          <p className="text-muted-foreground mb-4">
            Have questions, feedback, or partnership inquiries? We'd love to hear from you.
          </p>
          <div className="space-y-3 text-muted-foreground mb-8">
            <p>
              Whether you've run into an issue with the app, have a feature request, or want to explore a partnership, we read every message and respond to each one personally.
            </p>
            <p>
              Common reasons people reach out include: trouble getting started with Loot, questions about how receipt scanning works, feedback on the splitting experience, and press or business inquiries.
            </p>
            <p>
              We typically respond within one business day. For faster answers to common questions, check out the <a href="/faq" className="underline underline-offset-2">FAQ page</a> — most setup and usage questions are answered there.
            </p>
          </div>
          <h2 className="text-xl font-semibold mb-3">Send Us a Message</h2>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1.5">Name</label>
              <input id="name" type="text" className="w-full h-11 px-4 rounded-xl bg-muted text-foreground text-sm outline-none focus:ring-2 focus:ring-primary" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1.5">Email</label>
              <input id="email" type="email" className="w-full h-11 px-4 rounded-xl bg-muted text-foreground text-sm outline-none focus:ring-2 focus:ring-primary" placeholder="you@email.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1.5">Message</label>
              <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl bg-muted text-foreground text-sm outline-none focus:ring-2 focus:ring-primary resize-none" placeholder="How can we help?" />
            </div>
            <CTAButton>Send Message</CTAButton>
          </form>
        </div>
      </Section>

      <Section>
        <h2 className="text-xl font-semibold mb-4">Common Questions</h2>
        <div className="max-w-[65ch] space-y-4 text-muted-foreground">
          <p>
            <strong className="text-foreground">Getting started:</strong> Download Loot from the App Store and open iMessage. The Loot icon appears in your iMessage app drawer automatically — no separate account needed. Your friends don't need to install anything.
          </p>
          <p>
            <strong className="text-foreground">Receipt scanning:</strong> Point your camera at any printed or digital receipt. Loot's OCR reads every line item, price, tax, and tip. You can edit any item manually if needed before sending the split to the group.
          </p>
          <p>
            <strong className="text-foreground">Settlement:</strong> Loot integrates with Apple Pay and Venmo for one-tap payment. You can also mark payments as settled manually for cash or bank transfers.
          </p>
          <p>
            <strong className="text-foreground">Privacy and data:</strong> Loot does not store your payment credentials. All financial transactions are handled by Apple Pay or Venmo's secure infrastructure.
          </p>
          <p>
            If your question isn't answered above, check the <InternalLink to="/faq">full FAQ</InternalLink> or send us a message using the form above.
          </p>
        </div>
      </Section>
    </PageLayout>
  );
}
