import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import InternalLink from "@/components/InternalLink";

const posts = [
  { title: "How to Split a Bill: The Complete Guide", desc: "Everything you need to know about splitting bills fairly, from restaurant checks to group expenses.", href: "/blog/how-to-split-a-bill", date: "2025-01-15" },
  { title: "How to Track Shared Expenses Without Spreadsheets", desc: "Stop using spreadsheets and Venmo request chains. Here's a better way to track who owes what.", href: "/blog/how-to-track-shared-expenses", date: "2025-01-10" },
  { title: "How to Split Rent Fairly With Roommates", desc: "Square footage, income-based, or equal? The definitive guide to fair rent splitting.", href: "/blog/how-to-split-rent", date: "2025-01-05" },
  { title: "Group Expense Management: A Practical Guide", desc: "How to manage shared expenses for trips, events, and ongoing groups without losing friends or money.", href: "/blog/group-expense-management", date: "2024-12-28" },
];

export default function BlogIndexPage() {
  return (
    <PageLayout
      title="Bill Splitting Blog | Tips & Guides | Loot"
      description="Expert guides on splitting bills, tracking shared expenses, and managing group finances. Learn the best practices for every situation."
      canonicalPath="/blog"
    >
      <Section>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">Blog</h1>
        <p className="text-lg text-muted-foreground max-w-[55ch] mb-10">
          Practical guides on splitting bills, tracking expenses, and managing group finances.
        </p>

        <div className="space-y-6">
          {posts.map((post) => (
            <article key={post.href} className="shadow-native-sm rounded-xl p-6 hover:shadow-native-md transition-shadow">
              <time className="text-xs text-muted-foreground">{post.date}</time>
              <h2 className="text-lg font-semibold mt-1 mb-2">
                <InternalLink to={post.href}>{post.title}</InternalLink>
              </h2>
              <p className="text-muted-foreground text-sm max-w-[55ch]">{post.desc}</p>
            </article>
          ))}
        </div>
      </Section>
    </PageLayout>
  );
}
