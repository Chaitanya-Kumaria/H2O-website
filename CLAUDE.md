# H2O House and Mystic Village websites: project context

Read this first. It carries the decisions made during planning so you don't have to re-derive them.

## What we are building

Two separate websites for community tourism in Chamba, Himachal Pradesh, run with NotOnMap (an NGO headquartered at H2O):

1. **H2O House, the Water Mill Residency.** A heritage riverside property built on 13th-century gharats (traditional water mills), at least one still working, beside the Saal river (a tributary of the Ravi), in Chaminoo village, about 8.6 km from Chamba town. Two parts: **H2O House** (the stay) and **H2O Anandam** (experiences).
2. **Mystic Village.** Community-hosted village stays where guests choose their house and the kitchen they eat in. Three circuits: **Khajjiar** (live; Gaddi village reached by a 2 km walk through deodar trees), **Chamba/Saal** (live; name not final, keep it as one editable field), **Dwat Mahadev** (coming soon).

Build H2O first. Mystic Village follows on the same setup.

## Hard constraints

- **The local team must update the site without code after handover** (one month). They change prices, availability, photos, stories and testimonials week to week.
- **Stack:** static site (Astro preferred) + **Sanity** as the admin (free plan, one login for both sites) + hosting on Netlify or Cloudflare Pages (free tier). Every item in the admin has show/hide, featured and display-order controls. Do not build a custom admin.
- **Bookings, phase 1:** no live booking engine. Every call to action is **"Enquire on WhatsApp"**, with a prefilled message naming the room, experience or itinerary. Payment is an advance via a Razorpay payment link sent after confirmation (outside the site for now).
- All accounts go under an H2O or NotOnMap email, never a personal one.
- Mobile first. Low phone signal at the villages: keep pages light, compress images.
- Each site links to the other in the footer ("A NotOnMap property") and to NotOnMap. Show a Chalo Chamba link or badge (the district campaign run with NotOnMap); logo use is pending permission, so use a text link for now.

## Positioning (from stakeholder feedback)

- Differentiate by **experience, not price tier**. Never call H2O "premium" or "luxury" on the site; never call Mystic Village "budget".
- H2O is told through **water and heritage**: the working mill, the river, the waterways, rooms above the sound of water, and the people who run it.
- Mystic Village is told through **community-hosted village life**: families, home kitchens, the walk up, evenings, seasons. Experiences and itineraries lead; houses appear inside them.
- Every page connects up (to the brand and to Chamba) and down (to a person or a specific experience).

## Site map: H2O

1. **Home:** hero (river photo; later the working gharat with sound behind a play button) → one-line promise + Enquire button → the story in one scroll (mill, river, 13th-century land) → room cards → Community Kitchen and the people who run H2O → experiences → verified recognition and guest voices → Why Chamba + Chalo Chamba → enquire.
2. **The story:** long-form gharat and river story; timeline; hand-drawn water map.
3. **H2O House (rooms):** one card and one page per room. Each room page leads with its story (the wall, beam or waterway behind it), then view, capacity, price, house rules, photos.
4. **H2O Anandam (experiences):** gharat tour and milling, mill-kitchen thali, river walk, art and craft with local artists, herbal healing; riverside barbeque and destination weddings as "Enquire" items. Each card names who leads it, duration, guest limit, price.
5. **Heritage and community:** Chamba rumal, miniature painting, thal and dham; community library and art gallery; NotOnMap's home.
6. **Testimonials**, **Plan your visit** (getting there, seasons, safety, house rules, FAQ), **Enquire**.

## Site map: Mystic Village

Home (the whole village is your homestay) → choose a circuit (each with its story) → that circuit's itineraries (day visit, 2 days, 3 days) → meet the families → signature experiences → houses → guest code and honest expectations → impact and Chamba → enquire. Circuit pages: narrative, key attractions, signature experiences, itineraries, houses. House pages open with the host (name, portrait, story in their voice), then age of the house, USP, rooms, signature dish, house rules, price. Every house gets equal space.

## Admin (Sanity) content types

Room, House, Host/Person (hosts, guides, artisans, cooks), Experience, Itinerary, Circuit, Story, Testimonial, Award, Page settings (WhatsApp number, prices note, Chalo Chamba link). Fields on each mirror the page contents above; every type has `visible`, `featured`, `order`.

## Design system (H2O)

Full brand book, tokens, motifs, photos and sample components live in the design system artifact: https://claude.ai/artifact/4a1vDCavsc8Q5anyJ3aFkc (open it with `/artifacts` or by URL, and read its `project/README.md` and `project/tokens.json`). Summary:

- **Fonts:** Young Serif (display, headings, quotes; one weight only) + Work Sans 400/500/600 (body, labels, buttons). Google Fonts.
- **Corners** nearly square (3px / 6px); round only for the millstone and portraits. Borders and plaster-coloured bands, not shadows.
- **Voice:** calm, observant, heritage-rich. Plain English, "you" for the guest, "we" for the people of H2O. Local names explained once ("the gharat (water mill)"). Sentence case. No emoji, no exclamation marks. Honest: rustic, mud and wood, little signal.

Colour tokens (Day theme / Lantern dark theme):

```css
:root {
  --surface:#EFE9DD; --surface-raised:#FAF6EE; --surface-plaster:#E0D5C1;
  --ink:#2B2A26; --ink-muted:#5C5448;
  --maroon:#662924; --on-maroon:#FAF6EE; --ochre:#D08438;   /* logo colours: brand */
  --river:#2E5856;      /* links, focus ring, line art; never a big fill */
  --mustard:#E3B23C; --on-mustard:#2B2A26;  /* primary button only */
  --pine:#B98448; --forest:#4F5B33; --jute:#CDB894; --stone:#8E8070;
  --line:#CBBFA9; --line-strong:#877C6A;
}
[data-theme="lantern"] {
  --surface:#1C1A16; --surface-raised:#27231D; --surface-plaster:#332C23;
  --ink:#EFE7D8; --ink-muted:#BDB29F; --maroon:#9A4038; --ochre:#D9934C;
  --river:#8DBDB7; --mustard:#E6BA4E; --pine:#C9965C; --forest:#A3B17A;
  --jute:#5A4E3C; --stone:#6E6355; --line:#4A4236; --line-strong:#8A7F6C;
}
```

Mystic Village uses the NotOnMap family look instead (yellow #FFD000, charcoal olive #4A4236, mud wall #A0694A, Gaddi red #B3262E, Gaddi green #1E6B47, torn-paper edges, rumal borders). Do not mix the two.

## Photos

Originals (about 20 MB each) are on this laptop at:

`C:\Users\chaitanya\OneDrive\Desktop\SPJIMR Courses\term 4\DOCC\property_photos\Property Overview` (the `.zip` beside it is the original download)

Folders: `101 Large Double Room`, `102 Twin Room`, `103 Duplex COTTAGE`, `104 FAMILY HALL`, `105 RIVERSIDE COTTAGE`, `106 Anandam 1 with attached washroom` (phone photos), `107 Riverside Family Room` (phone photos), `DINING`, `OPEN SPACE` (with `ART & CRAFT` and `Riverside Seating Area`).

- Never commit originals. Resize copies to max 2000 px wide (and 800 px for cards), JPEG/WebP around 80% quality, into the site's image folder.
- Picks so far: hero `OPEN SPACE/Riverside Area.jpg`; arrival `OPEN SPACE/Riverside Seating Area/DSC01123.jpg` and `OPEN SPACE/DSC01144.jpg`; setting `OPEN SPACE/DSC01250.jpg`; food `DINING/DSC00939.jpg`, `DINING/DSC01201.jpg`; experiences `OPEN SPACE/ART & CRAFT/DSC00983.jpg`, `OPEN SPACE/DSC01022.jpg`; rooms `101/DSC00924`, `102/DSC00700`, `103/DSC00786`, `104/DSC00604`, `105/DSC00647`. Only about a third of the folder has been reviewed; check the rest.
- No gharat or water-channel photos yet: leave clearly marked placeholders.
- Photos with people need signed consent before going live. Bathroom photos only on room pages.
- Logo: the current H2O House logo (maroon "H2O", ochre "HOUSE" with a gharat wheel as the O) is in the design system's Logos group. A refined version is being designed; keep the logo in one component so it can be swapped.

## Content rules

- **No invented facts.** Use placeholders like `₹X,XXX`, `Guest name`, `[to verify]` for anything not confirmed.
- Verify before publishing: how many gharats exist and which works, the 13th-century and copper-plate claims, award names/years/wording, "only homestay" and "sole witness to Gaddi life" claims, capacity (no "unlimited beds"), the impact footfall figure (report says both 25% and 20%), partner status of adventure activities and the Peakview camp.
- Old brochure copy mentions Ladakh by mistake; never reuse it unedited.

## Handover deliverables

A one-page guide for the team (how to log in to Sanity, change a price, hide a room, add a testimonial, add a photo), and a short "if something breaks" note naming where each account lives.
## Build status (H2O)

- The H2O site is `notonmap-sites/h2o-site/` (Astro 7, static). The repo `README.md` covers running it, the photo script and connecting Sanity. The repository is `notonmap-sites/` (H2O site in `h2o-site/`, the shared admin in `studio/`); the admin content types are in `studio/schemaTypes/`; the Sanity project itself is not created yet (needs the H2O / NotOnMap login).
- **Visual direction: glassmorphism** (owner's decision, Oct 2026). Frosted panels over full-bleed property photos; Lantern (smoked) glass over dusk photos, Day (plaster) glass over daylight ones. Kept on-brand: brand tokens only, hairline borders and a lit top edge instead of drop shadows, 6px corners, a solid fallback where blur is unsupported or reduced transparency is requested.
- Logo: transparent versions made from the supplied logo image are in `h2o-site/public/logo/` (`logo-full`, `logo-mark` without tagline, and `-reversed` cream versions for dark grounds). The source is in `h2o-site/brand-source/`.
- All 85 photos have been reviewed. `OPEN SPACE/DSC01219` and `DSC01223` show water pouring from beneath a stone-and-timber building: probably the gharat and its channel, used in the story section as "[to verify]".
- H2O Anandam logo: transparent version at `h2o-site/public/logo/anandam.(png|webp)` (`<Logo variant="anandam">`), used on a light (Day) glass panel because its maroon H2O disappears on dark.
- Every word and photo on the home page is editable in the admin (Home page + Site settings). `scripts/seed-to-sanity.mjs` fills a new Sanity project with the current content and photos.
