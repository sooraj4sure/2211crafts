import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SampleBadge from "@/components/SampleBadge";
import { CREATIONS } from "@/data/creations";

const FEATURED = ["blush-flower-bracelet", "rose-garden-necklace", "petal-drop-earrings", "daisy-wish-ring"].map(
  (s) => CREATIONS.find((c) => c.slug === s)!
);

const PILLARS = [
  {
    emoji: "💎",
    title: "Shop Handmade",
    text: "One-of-a-kind beaded bracelets, necklaces, rings & earrings — each piece strung by hand, bead by bead.",
    href: "https://ashmita-jewellery.vercel.app",
    cta: "Shop the collection",
    external: true,
  },
  {
    emoji: "🎓",
    title: "Learn Beading",
    text: "Beginner-friendly DIY beading classes — from your first bracelet to full necklace sets, taught with love.",
    href: "/classes",
    cta: "See classes",
    external: false,
  },
  {
    emoji: "🤝",
    title: "Brand Collabs",
    text: "Paid promotions for craft, jewellery & lifestyle brands — reels, unboxings and reviews to 1.26M followers.",
    href: "/collabs",
    cta: "Work with me",
    external: false,
  },
];

const TESTIMONIALS = [
  { name: "Priya S.", role: "Bracelet lover", text: "The flower bracelet I ordered is even prettier in person — you can feel the love in every bead! 🌸" },
  { name: "Ritika M.", role: "Class student", text: "I had never beaded before and finished my first bracelet in one class. Ashmita explains everything so simply!" },
  { name: "Sana K.", role: "Gift buyer", text: "Ordered a necklace set for my sister's birthday — it arrived beautifully packed and she wears it daily." },
];

const FAQS = [
  { q: "Do you take custom orders?", a: "Yes! DM on Instagram with your colour & style preferences and I'll create a one-of-a-kind piece just for you." },
  { q: "Are the classes beginner-friendly?", a: "Absolutely — most students have never beaded before. I guide you step-by-step and share a materials list." },
  { q: "Do you ship across India?", a: "Yes, orders ship all over India. Shipping details are confirmed over DM before you order." },
  { q: "How do brand collabs work?", a: "Send your campaign details via the Collabs page — I reply within a few days with rates and reel ideas." },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/art/hero-bead-flatlay.jpg"
            alt="Handmade pink beaded jewellery flat-lay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blush-100/60 via-blush-50/70 to-cream" />
        </div>
        <div className="relative mx-auto max-w-5xl px-4 pt-16 pb-14 text-center sm:pt-24 sm:pb-20">
          <p className="animate-fade-up inline-block rounded-full bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blush-700 shadow-soft">
            ✨ DIY Beaded Crafts · Madhya Pradesh, India
          </p>
          <h1 className="animate-fade-up font-display mt-4 text-4xl font-extrabold leading-tight text-cocoa sm:text-6xl" style={{ animationDelay: "120ms" }}>
            Ashmita <span className="shimmer-text">Art &amp; Craft</span>
          </h1>
          <p className="animate-fade-up mx-auto mt-4 max-w-xl text-base font-semibold text-cocoa/75 sm:text-lg" style={{ animationDelay: "220ms" }}>
            Handmade beaded jewellery, DIY classes &amp; tutorials — made bead by bead with love 🩷
          </p>
          <div className="animate-fade-up mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center" style={{ animationDelay: "320ms" }}>
            <a
              href="https://ashmita-jewellery.vercel.app"
              className="rounded-full bg-blush-500 px-7 py-3.5 font-bold text-white shadow-bead transition hover:scale-105 hover:bg-blush-600"
            >
              💎 Shop the Collection
            </a>
            <Link
              href="/classes"
              className="rounded-full bg-white px-7 py-3.5 font-bold text-blush-700 shadow-soft transition hover:scale-105"
            >
              🎓 Book a Class
            </Link>
            <Link
              href="/tutorials"
              className="rounded-full border-2 border-blush-300 bg-white/60 px-7 py-3.5 font-bold text-blush-700 transition hover:scale-105 hover:border-blush-400"
            >
              ▶️ Watch Tutorials
            </Link>
          </div>
          {/* Live stats */}
          <div className="animate-fade-up mx-auto mt-10 grid max-w-lg grid-cols-3 gap-3" style={{ animationDelay: "420ms" }}>
            {[
              { n: "1.26M", l: "Instagram followers" },
              { n: "663", l: "Creations shared" },
              { n: "🇮🇳", l: "From Madhya Pradesh" },
            ].map((s) => (
              <div key={s.l} className="rounded-3xl bg-white/85 px-3 py-4 shadow-soft backdrop-blur">
                <p className="font-display text-2xl font-extrabold text-blush-600 sm:text-3xl">{s.n}</p>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-wide text-cocoa/60 sm:text-xs">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED CREATIONS */}
      <section className="mx-auto max-w-5xl px-4 py-14">
        <Reveal>
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-gold-dark">✨ Fresh from the bead box</p>
            <h2 className="font-display mt-2 text-3xl font-extrabold text-cocoa sm:text-4xl">Featured Creations</h2>
            <p className="mt-2 text-sm font-semibold text-cocoa/60">Hand-strung, one at a time — DM to make one yours</p>
          </div>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {FEATURED.map((c, i) => (
            <Reveal key={c.slug} delay={i * 90}>
              <Link href="/creations" className="group block overflow-hidden rounded-3xl bg-white shadow-soft">
                <div className="relative aspect-square overflow-hidden">
                  <Image src={c.image} alt={c.name} fill className="object-cover transition duration-500 group-hover:scale-110" />
                </div>
                <div className="p-3 text-center">
                  <p className="font-display text-sm font-bold text-cocoa">{c.name}</p>
                  <p className="mt-0.5 text-xs font-semibold text-blush-600">DM to order 💌</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8 text-center">
          <Link href="/creations" className="inline-block rounded-full border-2 border-blush-300 px-6 py-2.5 text-sm font-bold text-blush-700 transition hover:border-blush-500 hover:bg-blush-50">
            View all creations →
          </Link>
        </Reveal>
      </section>

      {/* THREE PILLARS */}
      <section className="dot-bg bg-blush-50/60 py-14">
        <div className="mx-auto max-w-5xl px-4">
          <Reveal className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-gold-dark">🩷 One creator, three worlds</p>
            <h2 className="font-display mt-2 text-3xl font-extrabold text-cocoa sm:text-4xl">Shop · Learn · Collab</h2>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <div className="flex h-full flex-col rounded-[2rem] bg-white p-7 shadow-soft">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-blush-100 text-3xl">{p.emoji}</span>
                  <h3 className="font-display mt-4 text-xl font-extrabold text-cocoa">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-cocoa/70">{p.text}</p>
                  {p.external ? (
                    <a href={p.href} className="mt-5 rounded-full bg-blush-500 px-5 py-2.5 text-center text-sm font-bold text-white shadow-bead transition hover:bg-blush-600">
                      {p.cta} →
                    </a>
                  ) : (
                    <Link href={p.href} className="mt-5 rounded-full bg-blush-100 px-5 py-2.5 text-center text-sm font-bold text-blush-700 transition hover:bg-blush-200">
                      {p.cta} →
                    </Link>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY HANDMADE */}
      <section className="mx-auto max-w-5xl px-4 py-14">
        <div className="grid items-center gap-8 sm:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] shadow-soft">
              <Image src="/art/why-handmade-closeup.jpg" alt="Hands finishing a pink beaded bracelet" width={800} height={800} className="aspect-square w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-xs font-bold uppercase tracking-widest text-gold-dark">🧵 Why handmade</p>
            <h2 className="font-display mt-2 text-3xl font-extrabold text-cocoa">Every bead has a heartbeat</h2>
            <ul className="mt-5 space-y-4 text-sm leading-relaxed text-cocoa/75">
              <li className="flex gap-3"><span className="text-xl">💗</span><span><strong className="text-cocoa">Truly one-of-a-kind</strong> — no two pieces are ever exactly alike.</span></li>
              <li className="flex gap-3"><span className="text-xl">🌿</span><span><strong className="text-cocoa">Gentle &amp; skin-friendly</strong> — quality beads, soft cords, careful finishing.</span></li>
              <li className="flex gap-3"><span className="text-xl">🎁</span><span><strong className="text-cocoa">Made to gift</strong> — custom colours &amp; names, packed pretty for someone special.</span></li>
              <li className="flex gap-3"><span className="text-xl">🇮🇳</span><span><strong className="text-cocoa">Homegrown in MP, India</strong> — supporting a small creator, not a factory.</span></li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gradient-to-b from-blush-100 to-cream py-14">
        <div className="mx-auto max-w-5xl px-4">
          <Reveal className="text-center">
            <h2 className="font-display text-3xl font-extrabold text-cocoa">Sweet words</h2>
            <div className="mt-2 flex justify-center"><SampleBadge text="Sample reviews" /></div>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <figure className="flex h-full flex-col rounded-[2rem] bg-white p-6 shadow-soft">
                  <div className="text-gold">★★★★★</div>
                  <blockquote className="mt-2 flex-1 text-sm leading-relaxed text-cocoa/75">“{t.text}”</blockquote>
                  <figcaption className="mt-4">
                    <p className="text-sm font-bold text-cocoa">{t.name}</p>
                    <p className="text-xs font-semibold text-blush-600">{t.role}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-14">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl font-extrabold text-cocoa">Good to know</h2>
        </Reveal>
        <div className="mt-8 space-y-3">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 60}>
              <details className="group rounded-3xl bg-white p-5 shadow-soft">
                <summary className="cursor-pointer list-none text-sm font-bold text-cocoa">
                  <span className="mr-2 text-blush-500">🩷</span>{f.q}
                </summary>
                <p className="mt-3 pl-7 text-sm leading-relaxed text-cocoa/70">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA BAND */}
      <section className="mx-auto max-w-5xl px-4 pb-4">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blush-500 via-blush-600 to-blush-700 p-8 text-center text-white shadow-bead sm:p-12">
            <div className="absolute -left-6 -top-6 h-28 w-28 animate-bead-spin rounded-full border-8 border-dashed border-white/25" />
            <div className="absolute -bottom-8 -right-8 h-36 w-36 animate-float rounded-full bg-white/10" />
            <h2 className="font-display relative text-2xl font-extrabold sm:text-4xl">Let&apos;s make something pretty together 🩷</h2>
            <p className="relative mx-auto mt-3 max-w-md text-sm font-semibold text-white/85">
              Orders, classes &amp; collabs — everything starts with a friendly DM.
            </p>
            <div className="relative mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a href="https://www.instagram.com/2211_crafts" target="_blank" rel="noopener" className="rounded-full bg-white px-7 py-3 font-bold text-blush-700 transition hover:scale-105">
                💌 DM @2211_crafts
              </a>
              <a href="https://ashmita-jewellery.vercel.app" className="rounded-full border-2 border-white/70 px-7 py-3 font-bold text-white transition hover:scale-105 hover:bg-white/10">
                💎 Visit the shop
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
