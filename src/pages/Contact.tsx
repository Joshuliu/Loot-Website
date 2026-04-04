import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";

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
    </PageLayout>
  );
}
