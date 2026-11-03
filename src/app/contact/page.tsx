import Reveal from "@/components/Reveal";
import SampleBadge from "@/components/SampleBadge";

const EMAIL = "ashmitap898@gmail.com";
const IG = "https://www.instagram.com/2211_crafts";
const YT = "https://youtube.com/@ashmita_art_and_craft";
const SHOP = "https://ashmita-jewellery.vercel.app";

const LINKS = [
  {
    e: "💎",
    title: "Shop the Collection",
    desc: "Handmade beaded jewellery — bracelets, necklaces, rings & earrings",
    href: SHOP,
    cta: "Visit shop",
  },
  {
    e: "📸",
    title: "Instagram — @2211_crafts",
    desc: "Daily creations, reels & DMs for orders, classes & collabs",
    href: IG,
    cta: "Follow & DM",
  },
  {
    e: "▶️",
    title: "YouTube — Ashmita Art & Craft",
    desc: "Free DIY beading tutorials, step by step",
    href: YT,
    cta: "Watch & subscribe",
  },
  {
    e: "✈️",
    title: "Telegram Channel",
    desc: "Class updates, new drops & behind-the-beads — link in Instagram bio",
    href: IG,
    cta: "Find link in bio",
  },
  {
    e: "🛍️",
    title: "Material Link",
    desc: "The beads & supplies I use — link in Instagram bio",
    href: IG,
    cta: "Find link in bio",
  },
  {
    e: "✉️",
    title: "Email for collabs",
    desc: EMAIL,
    href: `mailto:${EMAIL}`,
    cta: "Write to me",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <Reveal className="text-center">
        <span className="grid mx-auto h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-blush-400 to-blush-600 text-4xl text-white shadow-bead">
          🩷
        </span>
        <h1 className="font-display mt-4 text-4xl font-extrabold text-cocoa">Ashmita Art &amp; Craft</h1>
        <p className="mt-2 text-sm font-semibold text-cocoa/60">
          Diy beaded crafts 🩷 · Madhya Pradesh, India
          <br />
          DM for classes, promotion &amp; collabs
        </p>
        <div className="mt-3 flex justify-center"><SampleBadge text="Demo link hub" /></div>
      </Reveal>

      <div className="mt-8 space-y-4">
        {LINKS.map((l, i) => (
          <Reveal key={l.title} delay={i * 70}>
            <a
              href={l.href}
              target={l.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener"
              className="group flex items-center gap-4 rounded-[1.75rem] bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-bead"
            >
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-blush-100 text-3xl">{l.e}</span>
              <span className="min-w-0 flex-1">
                <span className="font-display block truncate text-base font-extrabold text-cocoa">{l.title}</span>
                <span className="block truncate text-xs text-cocoa/60">{l.desc}</span>
              </span>
              <span className="shrink-0 rounded-full bg-blush-100 px-4 py-2 text-xs font-bold text-blush-700 transition group-hover:bg-blush-500 group-hover:text-white">
                {l.cta} →
              </span>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10">
        <div className="rounded-[2rem] bg-gradient-to-br from-blush-500 to-blush-700 p-8 text-center text-white shadow-bead">
          <h2 className="font-display text-2xl font-extrabold">Say hi! 🩷</h2>
          <p className="mx-auto mt-2 max-w-sm text-sm font-semibold text-white/85">
            Orders, class bookings &amp; brand collabs — my DMs are always open.
          </p>
          <a href={IG} target="_blank" rel="noopener" className="mt-5 inline-block rounded-full bg-white px-8 py-3 text-sm font-bold text-blush-700 transition hover:scale-105">
            💌 DM @2211_crafts
          </a>
        </div>
      </Reveal>
    </div>
  );
}
