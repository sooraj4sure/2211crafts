import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SampleBadge from "@/components/SampleBadge";

const DM = "https://www.instagram.com/2211_crafts";

const CLASSES = [
  {
    emoji: "🌱",
    title: "Beginner Bead Bracelet",
    level: "Absolute beginner",
    duration: "2 hours · Online (live)",
    price: "₹499",
    includes: [
      "Materials list + where to buy (budget-friendly)",
      "Knot-tying, stringing & finishing basics",
      "Make 2 bracelets live with me",
      "Class recording for 7 days",
    ],
  },
  {
    emoji: "🌸",
    title: "Flower Bracelet Masterclass",
    level: "Beginner+",
    duration: "3 hours · Online (live)",
    price: "₹899",
    includes: [
      "Daisy-chain & flower-weave techniques",
      "3 signature flower designs",
      "Colour-matching & pattern tips",
      "Printable pattern sheet + recording",
    ],
    popular: true,
  },
  {
    emoji: "💎",
    title: "Necklace & Anklet Workshop",
    level: "Intermediate",
    duration: "4 hours · Online (live)",
    price: "₹1,299",
    includes: [
      "Necklace sizing, clasps & crimping",
      "Layered necklace + matching anklet",
      "Jewellery care & gifting packaging",
      "Certificate of completion + recording",
    ],
  },
];

const FAQS = [
  { q: "Do I need to buy materials before class?", a: "I'll share a simple, budget-friendly materials list (or a 'material link' to shop) as soon as you book. Most supplies cost very little to start." },
  { q: "Are the classes live or recorded?", a: "All classes are live on video call so I can correct your technique in real time. You also get the recording for 7 days." },
  { q: "What if I've never beaded before?", a: "Perfect — the Beginner class assumes zero experience. If you can tie a shoelace, you can bead!" },
  { q: "Do you teach in Hindi or English?", a: "Both! Classes are friendly and bilingual — ask questions in whichever language you're comfortable with." },
  { q: "Can I get a 1:1 private session?", a: "Yes — DM me and we'll plan a private session around your schedule and goals." },
];

export default function ClassesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <Reveal className="text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-gold-dark">🎓 Learn with me</p>
        <h1 className="font-display mt-2 text-4xl font-extrabold text-cocoa">DIY Beading Classes</h1>
        <p className="mx-auto mt-3 max-w-md text-sm font-semibold text-cocoa/60">
          From your very first knot to pieces you&apos;ll proudly gift — learn beading the fun, friendly way.
        </p>
        <div className="mt-3 flex justify-center"><SampleBadge text="Sample pricing & dates" /></div>
      </Reveal>

      {/* Banner */}
      <Reveal className="mt-8">
        <div className="relative overflow-hidden rounded-[2rem] shadow-soft">
          <Image src="/art/classes-hands-beading.jpg" alt="Hands stringing beads in a beading class" width={1200} height={600} className="h-52 w-full object-cover sm:h-72" />
          <div className="absolute inset-0 bg-gradient-to-t from-cocoa/60 via-transparent to-transparent" />
          <p className="absolute bottom-4 left-5 right-5 font-display text-lg font-bold text-white sm:text-2xl">
            Small batches · Live guidance · Bead along with me 🩷
          </p>
        </div>
      </Reveal>

      {/* Class cards */}
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {CLASSES.map((c, i) => (
          <Reveal key={c.title} delay={i * 100}>
            <div className={`relative flex h-full flex-col rounded-[2rem] bg-white p-7 shadow-soft ${c.popular ? "ring-2 ring-blush-400" : ""}`}>
              {c.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blush-500 px-4 py-1 text-[11px] font-bold uppercase tracking-widest text-white shadow-bead">
                  Most loved 💗
                </span>
              )}
              <span className="grid h-14 w-14 place-items-center rounded-full bg-blush-100 text-3xl">{c.emoji}</span>
              <h2 className="font-display mt-4 text-xl font-extrabold text-cocoa">{c.title}</h2>
              <p className="mt-1 text-xs font-bold uppercase tracking-wide text-blush-600">{c.level}</p>
              <p className="mt-1 text-xs font-semibold text-cocoa/55">⏱ {c.duration}</p>
              <ul className="mt-4 flex-1 space-y-2.5 text-sm text-cocoa/75">
                {c.includes.map((it) => (
                  <li key={it} className="flex gap-2"><span className="text-blush-500">✓</span>{it}</li>
                ))}
              </ul>
              <div className="mt-5 flex items-center justify-between rounded-2xl bg-blush-50 px-4 py-3">
                <span className="font-display text-2xl font-extrabold text-blush-700">{c.price}</span>
                <SampleBadge text="Sample price" />
              </div>
              <a
                href={DM}
                target="_blank"
                rel="noopener"
                className="mt-4 rounded-full bg-blush-500 py-3 text-center text-sm font-bold text-white shadow-bead transition hover:bg-blush-600"
              >
                💌 DM on Instagram to book
              </a>
            </div>
          </Reveal>
        ))}
      </div>

      {/* How booking works */}
      <Reveal className="mt-12">
        <div className="rounded-[2rem] bg-white p-7 shadow-soft sm:p-9">
          <h2 className="font-display text-2xl font-extrabold text-cocoa text-center">How booking works</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-4">
            {[
              { e: "💌", t: "DM me", d: "Message @2211_crafts with the class you want." },
              { e: "📅", t: "Pick a slot", d: "We'll choose a date & time that suits you." },
              { e: "🛍️", t: "Get materials", d: "Simple list shared right after booking." },
              { e: "🎉", t: "Bead along!", d: "Join live, make pieces, keep the recording." },
            ].map((s, i) => (
              <div key={s.t} className="rounded-3xl bg-blush-50 p-5 text-center">
                <p className="text-3xl">{s.e}</p>
                <p className="mt-2 text-sm font-bold text-cocoa">{i + 1}. {s.t}</p>
                <p className="mt-1 text-xs text-cocoa/65">{s.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-center text-xs text-cocoa/50">
            No phone number needed — everything happens over Instagram DM. <SampleBadge text="Sample flow" />
          </p>
        </div>
      </Reveal>

      {/* FAQ */}
      <div className="mx-auto mt-12 max-w-3xl">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl font-extrabold text-cocoa">Class FAQs</h2>
        </Reveal>
        <div className="mt-6 space-y-3">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 60}>
              <details className="rounded-3xl bg-white p-5 shadow-soft">
                <summary className="cursor-pointer list-none text-sm font-bold text-cocoa">
                  <span className="mr-2 text-blush-500">🩷</span>{f.q}
                </summary>
                <p className="mt-3 pl-7 text-sm leading-relaxed text-cocoa/70">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal className="mt-10 text-center">
        <Link href="/tutorials" className="inline-block rounded-full border-2 border-blush-300 px-6 py-2.5 text-sm font-bold text-blush-700 transition hover:border-blush-500 hover:bg-blush-50">
          Prefer learning free? Watch tutorials →
        </Link>
      </Reveal>
    </div>
  );
}
