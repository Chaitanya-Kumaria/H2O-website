// Turns the starter content (src/data/seed.ts) and its photos into a Sanity import file,
// so the admin starts filled in instead of empty.
//
//   node scripts/seed-to-sanity.mjs            -> writes studio/seed.ndjson
//   cd ../studio && npx sanity dataset import seed.ndjson production --missing
//
// --missing only adds documents that are not in the admin yet, so running it again never
// overwrites the team's edits. Needs Node 22.18+ (it reads the .ts file directly).

import { writeFileSync, readFileSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const seed = await import(pathToFileURL(path.join(root, 'src/data/seed.ts')).href);
const images = JSON.parse(readFileSync(path.join(root, 'src/data/images.json'), 'utf8'));

let n = 0;
const key = () => `k${(n++).toString(36)}`;

function image(photo) {
  if (!photo?.local) return undefined;
  const entry = images[photo.local];
  const file = path.join(root, 'public/images', `${photo.local}-${entry.widths.at(-1)}.webp`);
  return {
    _type: 'image',
    _sanityAsset: `image@${pathToFileURL(file).href}`,
    alt: photo.alt || '',
    ...(photo.hasPeople ? { hasPeople: true } : {}),
  };
}

const section = (s) => ({
  _type: 'homeSection',
  label: s.label, heading: s.heading, body: s.body,
  ...(s.image ? { image: image(s.image) } : {}),
  ...(s.caption ? { caption: s.caption } : {}),
});

const docs = [];
const { siteName, ...settings } = seed.settings;
docs.push({ _id: 'settings', _type: 'settings', ...settings });

const home = { _id: 'homePage', _type: 'homePage', heroImage: image(seed.home.heroImage) };
for (const [k, v] of Object.entries(seed.home)) if (k !== 'heroImage') home[k] = section(v);
docs.push(home);

for (const r of seed.rooms) {
  const { slug, image: img, gallery, ...rest } = r;
  docs.push({
    _id: `room-${slug}`, _type: 'room', ...rest,
    slug: { _type: 'slug', current: slug },
    image: image(img),
    gallery: gallery.map((g) => ({ _key: key(), ...image(g) })),
  });
}

for (const e of seed.experiences) {
  const { slug, image: img, ledBy, ...rest } = e;
  docs.push({
    _id: `experience-${slug}`, _type: 'experience', ...rest,
    slug: { _type: 'slug', current: slug },
    ledByText: ledBy,
    ...(img?.local ? { image: image(img) } : {}),
  });
}

seed.people.forEach((p, i) => docs.push({ _id: `person-h2o-${i + 1}`, _type: 'person', sites: ['h2o'], ...p }));
seed.testimonials.forEach((t, i) => docs.push({ _id: `testimonial-h2o-${i + 1}`, _type: 'testimonial', sites: ['h2o'], ...t }));
seed.awards.forEach((a, i) => docs.push({ _id: `award-h2o-${i + 1}`, _type: 'award', ...a }));
seed.places.forEach((p, i) => docs.push({ _id: `places-h2o-${i + 1}`, _type: 'placeGroup', sites: ['h2o'], ...p }));

const out = path.join(root, '..', 'studio', 'seed.ndjson');
writeFileSync(out, docs.map((d) => JSON.stringify(d)).join('\n') + '\n');
console.log(`Wrote ${docs.length} documents to ${out}`);
