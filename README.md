# Ashmita Art & Craft — Brand Website (DEMO v1)

Brand site for Ashmita Art & Craft (@2211_crafts) — handmade beaded jewellery,
DIY beading classes & tutorials, and paid brand collabs.

**Marker:** "Sample preview by Evenlyn Studio — DEMO v1" (top strip on every page,
plus a "Demo v1" badge in the header). Built Nov 2026.

## Run / deploy

```bash
npm install
npm run dev      # preview locally
npm run build    # production build (verified clean)
```

Deploy on Vercel as a **new project** (do NOT overwrite the ashmita-jewellery store project).

## Routes

| Route | Page |
|---|---|
| `/` | Home — hero, live stats, featured creations, Shop/Learn/Collab pillars, why handmade, sample testimonials, FAQ |
| `/creations` | Gallery of 16 beadwork photos with filter chips (Necklaces/Bracelets/Rings/Earrings), "DM to order" |
| `/classes` | 3 sample classes with SAMPLE prices, "DM on Instagram to book", booking flow, FAQ |
| `/tutorials` | YouTube channel link-out, 3 sample tutorial cards, Instagram quick-DIYs |
| `/collabs` | Brand stats, offerings, sample brand names, inquiry form → mailto ashmitap898@gmail.com |
| `/contact` | Link hub: shop, Instagram, YouTube, Telegram (via bio), material link, email |

## Notes

- All prices, class dates, testimonials and brand names are illustrative samples.
- No backend, no invented phone numbers. Contact = Instagram DM + ashmitap898@gmail.com.
- Shop CTA links to the separate store demo: https://ashmita-jewellery.vercel.app
- Images: 16 real seed photos reused from the store demo + 4 generated art images in `public/art/`.
