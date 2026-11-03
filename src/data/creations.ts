export type Creation = {
  slug: string;
  name: string;
  category: "Bracelets" | "Necklaces" | "Rings" | "Earrings";
  image: string;
  vibe: string;
};

// Gallery reuses the brand's real seed photos (also used by the shop demo).
export const CREATIONS: Creation[] = [
  { slug: "blush-flower-bracelet", name: "Blush Flower Bracelet", category: "Bracelets", image: "/seed-images/bracelet-1.jpg", vibe: "Signature daisy-chain charm" },
  { slug: "cherry-pop-bracelet", name: "Cherry Pop Bracelet", category: "Bracelets", image: "/seed-images/bracelet-2.jpg", vibe: "Playful fruit-bead fun" },
  { slug: "pearl-dream-bracelet", name: "Pearl Dream Bracelet", category: "Bracelets", image: "/seed-images/bracelet-3.jpg", vibe: "Soft everyday elegance" },
  { slug: "crystal-twinkle-bracelet", name: "Crystal Twinkle Bracelet", category: "Bracelets", image: "/seed-images/bracelet-4.jpg", vibe: "Sparkle for every wrist" },
  { slug: "rose-garden-necklace", name: "Rose Garden Necklace", category: "Necklaces", image: "/seed-images/necklace-1.jpg", vibe: "Hand-strung floral layers" },
  { slug: "pearl-muse-necklace", name: "Pearl Muse Necklace", category: "Necklaces", image: "/seed-images/necklace-2.jpg", vibe: "Classic with a cute twist" },
  { slug: "candy-bead-necklace", name: "Candy Bead Necklace", category: "Necklaces", image: "/seed-images/necklace-3.jpg", vibe: "Colour-pop statement" },
  { slug: "pastel-charm-necklace", name: "Pastel Charm Necklace", category: "Necklaces", image: "/seed-images/necklace-4.jpg", vibe: "Sweet layered pastels" },
  { slug: "daisy-wish-ring", name: "Daisy Wish Ring", category: "Rings", image: "/seed-images/ring-1.jpg", vibe: "Tiny flower power" },
  { slug: "berry-bliss-ring", name: "Berry Bliss Ring", category: "Rings", image: "/seed-images/ring-2.jpg", vibe: "Cute stacking staple" },
  { slug: "pearl-pebble-ring", name: "Pearl Pebble Ring", category: "Rings", image: "/seed-images/ring-3.jpg", vibe: "Delicate pearl touch" },
  { slug: "twinkle-trio-ring", name: "Twinkle Trio Ring", category: "Rings", image: "/seed-images/ring-4.jpg", vibe: "Sparkle in a set" },
  { slug: "petal-drop-earrings", name: "Petal Drop Earrings", category: "Earrings", image: "/seed-images/earring-1.jpg", vibe: "Floral everyday pair" },
  { slug: "pearl-glow-earrings", name: "Pearl Glow Earrings", category: "Earrings", image: "/seed-images/earring-2.jpg", vibe: "Soft pearl shimmer" },
  { slug: "candy-hoop-earrings", name: "Candy Hoop Earrings", category: "Earrings", image: "/seed-images/earring-3.jpg", vibe: "Fun colour hoops" },
  { slug: "bloom-stud-earrings", name: "Bloom Stud Earrings", category: "Earrings", image: "/seed-images/earring-4.jpg", vibe: "Dainty bloom studs" },
];

export const CATEGORIES = ["All", "Bracelets", "Necklaces", "Rings", "Earrings"] as const;
