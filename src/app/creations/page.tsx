"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { CREATIONS, CATEGORIES } from "@/data/creations";

const DM = "https://www.instagram.com/2211_crafts";

export default function CreationsPage() {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>("All");
  const shown = CREATIONS.filter((c) => filter === "All" || c.category === filter);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <Reveal className="text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-gold-dark">🩷 The bead gallery</p>
        <h1 className="font-display mt-2 text-4xl font-extrabold text-cocoa">Creations</h1>
        <p className="mx-auto mt-3 max-w-md text-sm font-semibold text-cocoa/60">
          Beaded bracelets, necklaces, rings &amp; earrings — every piece handmade by Ashmita.
          Love one? DM to order 💌
        </p>
      </Reveal>

      {/* Filter chips */}
      <div className="mt-8 flex justify-center gap-2 overflow-x-auto pb-1">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`shrink-0 rounded-full px-5 py-2 text-sm font-bold transition ${
              filter === c
                ? "bg-blush-500 text-white shadow-bead"
                : "bg-white text-blush-700 border border-blush-200 hover:bg-blush-50"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {shown.map((c, i) => (
          <div key={c.slug} className="group overflow-hidden rounded-3xl bg-white shadow-soft animate-fade-up" style={{ animationDelay: `${(i % 8) * 60}ms` }}>
            <div className="relative aspect-square overflow-hidden">
              <Image src={c.image} alt={c.name} fill className="object-cover transition duration-500 group-hover:scale-110" />
              <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-blush-700">
                {c.category.slice(0, -1)}
              </span>
            </div>
            <div className="p-3.5">
              <p className="font-display text-sm font-bold text-cocoa">{c.name}</p>
              <p className="text-xs text-cocoa/55">{c.vibe}</p>
              <a
                href={DM}
                target="_blank"
                rel="noopener"
                className="mt-2.5 block rounded-full bg-blush-100 py-2 text-center text-xs font-bold text-blush-700 transition hover:bg-blush-500 hover:text-white"
              >
                💌 DM to order
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-[2rem] bg-gradient-to-br from-blush-500 to-blush-700 p-8 text-center text-white shadow-bead">
        <h2 className="font-display text-2xl font-extrabold">Want something custom?</h2>
        <p className="mx-auto mt-2 max-w-sm text-sm font-semibold text-white/85">
          Pick your colours, charms &amp; size — I&apos;ll bead a piece that&apos;s only yours.
        </p>
        <a href={DM} target="_blank" rel="noopener" className="mt-5 inline-block rounded-full bg-white px-7 py-3 text-sm font-bold text-blush-700 transition hover:scale-105">
          💌 DM for a custom piece
        </a>
      </div>
    </div>
  );
}
