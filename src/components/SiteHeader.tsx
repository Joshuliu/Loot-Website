import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const appStoreUrl = "https://apps.apple.com/us/app/loot-me/id6757330604";

const navLinks = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Features", href: "/features" },
  { label: "Why Loot", href: "/why-loot" },
  { label: "Guides", href: "/bill-splitting-guide" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl shadow-native-sm">
      <nav className="content-width section-padding flex items-center justify-between h-14" aria-label="Main navigation">
        <Link to="/" className="flex items-center gap-2">
          <img src="/circle_1024x1024.png" alt="Loot" className="h-8 w-auto" />
          <span className="text-base font-semibold text-foreground">Loot</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <Link key={l.href} to={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </Link>
          ))}
          <a
            href={appStoreUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center h-9 px-4 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Get Loot
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 -mr-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border section-padding pb-4">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className="block py-2.5 text-sm text-muted-foreground hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={appStoreUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex items-center justify-center h-10 w-full text-sm font-medium rounded-lg bg-primary text-primary-foreground"
            onClick={() => setOpen(false)}
          >
            Get Loot
          </a>
        </div>
      )}
    </header>
  );
}
