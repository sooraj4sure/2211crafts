import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ashmita Art & Craft — Handmade Beaded Jewellery, Classes & Tutorials",
  description:
    "Ashmita Art & Craft (@2211_crafts): handmade beaded jewellery, DIY beading classes and tutorials. Shop the collection, learn beadwork, or book a brand collab.",
};

const NAV = [
  { href: "/", label: "Home" },
  { href: "/creations", label: "Creations" },
  { href: "/classes", label: "Classes" },
  { href: "/tutorials", label: "Tutorials" },
  { href: "/collabs", label: "Collabs" },
  { href: "/contact", label: "Contact" },
];

function DemoStrip() {
  return (
    <div className="bg-cocoa text-center text-[11px] sm:text-xs font-semibold tracking-wide text-blush-200 px-3 py-1.5">
      Sample preview by Evenlyn Studio — DEMO v1
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 bg-cream/90 backdrop-blur border-b border-blush-200">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-blush-400 to-blush-600 text-lg text-white shadow-bead">
            A
          </span>
          <span className="font-display text-lg font-extrabold text-blush-700">
            Ashmita Art &amp; Craft
          </span>
          {/* <span className="ml-1 rounded-full bg-gold/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-gold-dark">
            Demo v1
          </span> */}
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="rounded-full px-3 py-1.5 text-sm font-semibold text-cocoa/80 hover:bg-blush-100 hover:text-blush-700"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          href="https://www.instagram.com/2211_crafts"
          target="_blank"
          rel="noopener"
          className="md:hidden rounded-full bg-blush-500 px-4 py-2 text-sm font-bold text-white shadow-bead"
        >
          Follow
        </Link>
      </div>
      {/* Mobile nav: horizontal bead-scroll */}
      <nav className="md:hidden flex gap-2 overflow-x-auto px-4 pb-3">
        {NAV.map((n) => (
          <Link
            key={n.href}
            href={n.href}
            className="shrink-0 rounded-full border border-blush-200 bg-white px-3.5 py-1.5 text-xs font-bold text-blush-700"
          >
            {n.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-16 bg-gradient-to-b from-blush-100 to-blush-200/70">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="font-display text-xl font-extrabold text-blush-700">
              Ashmita Art &amp; Craft 🩷
            </p>
            <p className="mt-2 text-sm text-cocoa/70">
              Handmade beaded jewellery, DIY classes &amp; tutorials — made bead by bead
              with love in Madhya Pradesh, India.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-blush-700">Explore</p>
            <ul className="mt-3 space-y-2 text-sm font-semibold text-cocoa/80">
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="hover:text-blush-600">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-blush-700">Find me</p>
            <ul className="mt-3 space-y-2 text-sm font-semibold text-cocoa/80">
              <li>
                <a href="https://www.instagram.com/2211_crafts" target="_blank" rel="noopener" className="hover:text-blush-600">
                  📸 Instagram — @2211_crafts
                </a>
              </li>
              <li>
                <a href="https://youtube.com/@ashmita_art_and_craft" target="_blank" rel="noopener" className="hover:text-blush-600">
                  ▶️ YouTube — Ashmita Art &amp; Craft
                </a>
              </li>
              <li>
                <a href="mailto:ashmitap898@gmail.com" className="hover:text-blush-600">
                  ✉️ ashmitap898@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-blush-300/50 pt-4 text-center text-xs text-cocoa/60">
          <p>Sample preview by Evenlyn Studio — DEMO v1 · All class dates, prices &amp; testimonials are illustrative samples.</p>
          <p className="mt-1">© Ashmita Art &amp; Craft · @2211_crafts</p>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* <DemoStrip /> */}
        <Header />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
