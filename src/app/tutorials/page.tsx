import Reveal from "@/components/Reveal";
import SampleBadge from "@/components/SampleBadge";

const CHANNEL = "https://youtube.com/@ashmita_art_and_craft";
const IG = "https://www.instagram.com/2211_crafts";

const TUTORIALS = [
  {
    emoji: "🌸",
    title: "Beaded Flower Bracelet Tutorial",
    desc: "Step-by-step daisy-chain bracelet — the design my followers ask for the most.",
    level: "Beginner",
    mins: "≈ 12 min",
  },
  {
    emoji: "💎",
    title: "DIY Crystal Bracelet",
    desc: "Sparkly crystal bead bracelet with pro finishing — looks straight out of a boutique.",
    level: "Beginner+",
    mins: "≈ 15 min",
  },
  {
    emoji: "📿",
    title: "Beaded Necklace Set Tutorial",
    desc: "Full necklace + matching earrings set, from first bead to clasp.",
    level: "Intermediate",
    mins: "≈ 20 min",
  },
];

const SHORTS = [
  "Cherry bracelet in 60 seconds 🍒",
  "Pearl bag keychain DIY 👜",
  "Beaded phone cover — full process 📱",
  "Anklet stacking ideas ✨",
];

export default function TutorialsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <Reveal className="text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-gold-dark">▶️ Learn free</p>
        <h1 className="font-display mt-2 text-4xl font-extrabold text-cocoa">Tutorials</h1>
        <p className="mx-auto mt-3 max-w-md text-sm font-semibold text-cocoa/60">
          Free DIY beading tutorials on my YouTube channel — grab your beads and follow along!
        </p>
        <div className="mt-3 flex justify-center"><SampleBadge text="Sample layout" /></div>
      </Reveal>

      <Reveal className="mt-8">
        <div className="rounded-[2rem] bg-gradient-to-br from-blush-500 to-blush-700 p-8 text-center text-white shadow-bead sm:p-10">
          <p className="text-4xl">▶️</p>
          <h2 className="font-display mt-3 text-2xl font-extrabold">Ashmita Art &amp; Craft on YouTube</h2>
          <p className="mx-auto mt-2 max-w-sm text-sm font-semibold text-white/85">
            Full-length tutorials, quick DIYs and behind-the-beads vlogs.
          </p>
          <a href={CHANNEL} target="_blank" rel="noopener" className="mt-5 inline-block rounded-full bg-white px-8 py-3 text-sm font-bold text-blush-700 transition hover:scale-105">
            Visit the channel →
          </a>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-3">
        {TUTORIALS.map((t, i) => (
          <Reveal key={t.title} delay={i * 100}>
            <a
              href={CHANNEL}
              target="_blank"
              rel="noopener"
              className="group flex h-full flex-col rounded-[2rem] bg-white p-6 shadow-soft transition hover:-translate-y-1"
            >
              <div className="relative grid h-36 place-items-center overflow-hidden rounded-3xl bg-gradient-to-br from-blush-100 to-blush-200">
                <span className="text-5xl">{t.emoji}</span>
                <span className="absolute grid h-12 w-12 place-items-center rounded-full bg-white/95 text-lg text-blush-600 shadow-bead transition group-hover:scale-110">
                  ▶
                </span>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <span className="rounded-full bg-blush-100 px-2.5 py-0.5 text-[11px] font-bold text-blush-700">{t.level}</span>
                <span className="text-[11px] font-semibold text-cocoa/50">{t.mins}</span>
              </div>
              <h3 className="font-display mt-2 text-lg font-extrabold text-cocoa">{t.title}</h3>
              <p className="mt-1 flex-1 text-sm text-cocoa/65">{t.desc}</p>
              <span className="mt-4 text-sm font-bold text-blush-600">Watch on YouTube →</span>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10">
        <div className="rounded-[2rem] bg-white p-7 shadow-soft">
          <h2 className="font-display text-xl font-extrabold text-cocoa">⚡ Quick DIYs on Instagram</h2>
          <p className="mt-1 text-sm text-cocoa/60">60-second beading ideas &amp; reels you can try today:</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {SHORTS.map((s) => (
              <a key={s} href={IG} target="_blank" rel="noopener" className="rounded-2xl bg-blush-50 px-4 py-3 text-sm font-semibold text-cocoa/80 transition hover:bg-blush-100">
                🎬 {s}
              </a>
            ))}
          </div>
          <a href={IG} target="_blank" rel="noopener" className="mt-5 inline-block rounded-full bg-blush-500 px-6 py-2.5 text-sm font-bold text-white shadow-bead transition hover:bg-blush-600">
            📸 Learn on Instagram — @2211_crafts
          </a>
        </div>
      </Reveal>
    </div>
  );
}
