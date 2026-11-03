"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import SampleBadge from "@/components/SampleBadge";

const EMAIL = "ashmitap898@gmail.com";

const OFFERINGS = [
  { e: "🎬", t: "Reels", d: "Fun, aesthetic unboxing & DIY reels featuring your product." },
  { e: "📸", t: "Posts & Carousels", d: "Styled flat-lays of your beads, kits or tools in my feed." },
  { e: "💬", t: "Stories", d: "Swipe-up style story series with polls & links." },
  { e: "📦", t: "Product Unboxing", d: "Genuine first impressions my audience trusts." },
  { e: "🏷️", t: "Brand Mention", d: "Your materials credited in tutorials I create." },
  { e: "🎓", t: "Class Sponsorship", d: "Your kit featured in a live beading class." },
];

const SAMPLE_BRANDS = ["BeadBox", "CraftKart", "Pearl & Co.", "ThreadTrove", "GlamBeads", "DIY Haven"];

export default function CollabsPage() {
  const [form, setForm] = useState({ name: "", brand: "", type: "Reel", budget: "Under ₹10k", message: "" });
  const [sent, setSent] = useState(false);

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Collab inquiry — ${form.brand || "your brand"} (via website demo)`);
    const body = encodeURIComponent(
      `Hi Ashmita!\n\nName: ${form.name}\nBrand: ${form.brand}\nCampaign type: ${form.type}\nBudget range: ${form.budget}\n\nMessage:\n${form.message}\n\n— sent from the Ashmita Art & Craft website (demo form)`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <Reveal className="text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-gold-dark">🤝 For brands</p>
        <h1 className="font-display mt-2 text-4xl font-extrabold text-cocoa">Paid Collabs &amp; Promotions</h1>
        <p className="mx-auto mt-3 max-w-md text-sm font-semibold text-cocoa/60">
          Put your craft, jewellery or lifestyle brand in front of 1.26M bead-loving followers.
        </p>
        <div className="mt-3 flex justify-center"><SampleBadge text="Sample rates & brands" /></div>
      </Reveal>

      {/* Hero band */}
      <Reveal className="mt-8">
        <div className="relative overflow-hidden rounded-[2rem] shadow-soft">
          <Image src="/art/collabs-creator-filming.jpg" alt="Creator filming beaded jewellery for a brand collab" width={1200} height={600} className="h-52 w-full object-cover sm:h-72" />
          <div className="absolute inset-0 bg-gradient-to-t from-cocoa/65 via-cocoa/10 to-transparent" />
          <div className="absolute bottom-4 left-5 right-5 flex flex-wrap items-end justify-between gap-3">
            <p className="font-display text-lg font-bold text-white sm:text-2xl">Your brand, my beads, their screens ✨</p>
            <a href={`mailto:${EMAIL}`} className="rounded-full bg-white px-6 py-2.5 text-sm font-bold text-blush-700 transition hover:scale-105">
              ✉️ {EMAIL}
            </a>
          </div>
        </div>
      </Reveal>

      {/* Stats */}
      <div className="mt-8 grid grid-cols-3 gap-3">
        {[
          { n: "1.26M", l: "Followers" },
          { n: "663", l: "Posts" },
          { n: "DIY · Craft", l: "Niche" },
        ].map((s, i) => (
          <Reveal key={s.l} delay={i * 90}>
            <div className="rounded-3xl bg-white px-3 py-5 text-center shadow-soft">
              <p className="font-display text-2xl font-extrabold text-blush-600 sm:text-3xl">{s.n}</p>
              <p className="mt-1 text-[11px] font-bold uppercase tracking-wide text-cocoa/60">{s.l}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Offerings */}
      <Reveal className="mt-12 text-center">
        <h2 className="font-display text-3xl font-extrabold text-cocoa">What I offer</h2>
      </Reveal>
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {OFFERINGS.map((o, i) => (
          <Reveal key={o.t} delay={i * 70}>
            <div className="h-full rounded-[2rem] bg-white p-6 text-center shadow-soft">
              <p className="text-3xl">{o.e}</p>
              <p className="font-display mt-2 text-base font-extrabold text-cocoa">{o.t}</p>
              <p className="mt-1 text-xs leading-relaxed text-cocoa/65">{o.d}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Sample brand logos */}
      <Reveal className="mt-10">
        <div className="rounded-[2rem] bg-blush-50 p-7 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-blush-700">Brands I&apos;d love to work with</p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {SAMPLE_BRANDS.map((b) => (
              <span key={b} className="rounded-full bg-white px-5 py-2 text-sm font-bold text-cocoa/70 shadow-soft">
                {b}
              </span>
            ))}
          </div>
          <div className="mt-3 flex justify-center"><SampleBadge text="Sample brand names" /></div>
        </div>
      </Reveal>

      {/* Inquiry form */}
      <Reveal className="mt-12">
        <div className="rounded-[2rem] bg-white p-7 shadow-soft sm:p-9">
          <h2 className="font-display text-2xl font-extrabold text-cocoa text-center">Send a collab inquiry</h2>
          <p className="mt-2 text-center text-sm text-cocoa/60">
            Fill this in — it opens your email app addressed to me. <SampleBadge text="Demo form · no backend" />
          </p>
          {sent ? (
            <div className="mt-6 rounded-3xl bg-blush-50 p-8 text-center">
              <p className="text-4xl">💌</p>
              <p className="font-display mt-3 text-xl font-extrabold text-cocoa">Your email app should have opened!</p>
              <p className="mt-2 text-sm text-cocoa/65">
                Just hit send — I usually reply within a few days. Or write directly to{" "}
                <a href={`mailto:${EMAIL}`} className="font-bold text-blush-600">{EMAIL}</a>
              </p>
            </div>
          ) : (
            <form onSubmit={submit} className="mx-auto mt-6 grid max-w-2xl gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-xs font-bold uppercase tracking-wide text-cocoa/60">Your name</span>
                  <input required value={form.name} onChange={update("name")} placeholder="Priya Sharma"
                    className="mt-1 w-full rounded-2xl border border-blush-200 bg-cream px-4 py-3 text-sm outline-none focus:border-blush-400" />
                </label>
                <label className="block">
                  <span className="text-xs font-bold uppercase tracking-wide text-cocoa/60">Brand / company</span>
                  <input required value={form.brand} onChange={update("brand")} placeholder="BeadBox India"
                    className="mt-1 w-full rounded-2xl border border-blush-200 bg-cream px-4 py-3 text-sm outline-none focus:border-blush-400" />
                </label>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-xs font-bold uppercase tracking-wide text-cocoa/60">Campaign type</span>
                  <select value={form.type} onChange={update("type")}
                    className="mt-1 w-full rounded-2xl border border-blush-200 bg-cream px-4 py-3 text-sm outline-none focus:border-blush-400">
                    {["Reel", "Post / Carousel", "Stories", "Unboxing", "Class sponsorship", "Other"].map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="text-xs font-bold uppercase tracking-wide text-cocoa/60">Budget range</span>
                  <select value={form.budget} onChange={update("budget")}
                    className="mt-1 w-full rounded-2xl border border-blush-200 bg-cream px-4 py-3 text-sm outline-none focus:border-blush-400">
                    {["Under ₹10k", "₹10k – ₹25k", "₹25k – ₹50k", "₹50k+", "Let's discuss"].map((b) => (
                      <option key={b}>{b}</option>
                    ))}
                  </select>
                </label>
              </div>
              <label className="block">
                <span className="text-xs font-bold uppercase tracking-wide text-cocoa/60">Message</span>
                <textarea required value={form.message} onChange={update("message")} rows={4}
                  placeholder="Tell me about your product, campaign dates and what you'd love to create together…"
                  className="mt-1 w-full rounded-2xl border border-blush-200 bg-cream px-4 py-3 text-sm outline-none focus:border-blush-400" />
              </label>
              <button type="submit" className="rounded-full bg-blush-500 py-3.5 text-sm font-bold text-white shadow-bead transition hover:bg-blush-600">
                ✉️ Compose email to {EMAIL}
              </button>
            </form>
          )}
        </div>
      </Reveal>
    </div>
  );
}
