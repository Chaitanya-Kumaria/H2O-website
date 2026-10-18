# H2O House website

Astro static site. Content comes from the shared admin in `../studio`. See `../CLAUDE.md` for the brief and `../README.md` for setup and deployment.

## Run it

```
npm install
npm run dev        # http://localhost:4321
npm run build      # static files in dist/
```

Until `.env` has `SANITY_PROJECT_ID`, content comes from `src/data/seed.ts`. Every `[to verify]`, `[Name to add]` and `₹X,XXX` there is a placeholder to replace, not a fact.

## Where things are

| What | Where |
| --- | --- |
| Colours, glass, spacing | `src/styles/tokens.css` (from the design system) |
| Glass panels, buttons, cards | `src/styles/global.css` (`.glass`, `.btn-primary`, `.card`) |
| Logos (swap refined ones in here) | `public/logo/` and `src/components/Logo.astro`; originals in `brand-source/` |
| Content loading (Sanity or seed) | `src/lib/content.ts` |
| WhatsApp enquiry links | `src/lib/whatsapp.ts`, `src/components/EnquiryForm.astro` |
| Pages | `src/pages/index.astro`, `src/pages/rooms/` |
| Admin content types | `../studio/schemaTypes/` |
| Fill a new admin with the seed content | `scripts/seed-to-sanity.mjs` (writes `../studio/seed.ndjson`) |
| Hosting settings | `netlify.toml` |

## Photos

The originals (about 20 MB each) stay on the laptop in `DOCC/property_photos/` and are never committed. `npm run images` makes WebP copies (800 / 1400 / 2000 px) in `public/images/` and lists them in `src/data/images.json`. To add a seed photo, add it to `PICKS` in `scripts/make-images.py`. Once the admin is live, the team uploads photos there and Sanity resizes them.

Photos with recognisable people are marked `hasPeople` and need signed consent before launch: currently the art-and-craft session (Anandam card).
