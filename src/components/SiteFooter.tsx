import { Link } from "react-router-dom";

const footerSections = [
  {
    title: "Product",
    links: [
      { label: "How It Works", href: "/how-it-works" },
      { label: "Features", href: "/features" },
      { label: "Why Loot", href: "/why-loot" },
      { label: "Best Bill Splitting App", href: "/best-bill-splitting-app" },
    ],
  },
  {
    title: "Use Cases",
    links: [
      { label: "Split Bills", href: "/split-bills" },
      { label: "Restaurant Bills", href: "/split-restaurant-bill" },
      { label: "Roommates", href: "/split-expenses-with-roommates" },
      { label: "Travel Expenses", href: "/split-travel-expenses" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Bill Splitting Guide", href: "/bill-splitting-guide" },
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="bg-foreground text-muted section-padding py-16 mt-24">
      <div className="content-width">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {footerSections.map((s) => (
            <div key={s.title}>
              <h3 className="text-sm font-semibold text-background mb-3">{s.title}</h3>
              <ul className="space-y-2">
                {s.links.map((l) => (
                  <li key={l.href}>
                    <Link to={l.href} className="text-sm text-background/60 hover:text-background/90 transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-background/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/40">© {new Date().getFullYear()} Loot. Split Bills, Not Friendships.</p>
          <Link to="/" className="text-lg font-semibold text-background">Loot</Link>
        </div>
      </div>
    </footer>
  );
}
