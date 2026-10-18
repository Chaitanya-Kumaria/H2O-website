# NotOnMap sites

Websites for community tourism in Chamba, Himachal Pradesh, run with NotOnMap.

| Folder | What | Deployed to |
| --- | --- | --- |
| `h2o-site/` | H2O House, the Water Mill Residency (Astro, static) | Netlify or Cloudflare Pages, base directory `h2o-site` |
| `studio/` | The admin (Sanity Studio) for both sites: one login | `npx sanity deploy` → `<name>.sanity.studio` |
| `mystic-village/` | Mystic Village (not started) | its own Netlify / Cloudflare site, base directory `mystic-village` |

`CLAUDE.md` holds the brief and the decisions made so far. Keep this repository **private**: it names the laptop's photo folder and links to the private design system.

## How updates happen

The team edits in the admin and presses **Publish**. A webhook tells the host to rebuild the site, and the change is live in about a minute. Nobody edits code for content changes.

## First-time setup (with the H2O / NotOnMap accounts, never personal ones)

1. **GitHub:** create a private repository under the H2O / NotOnMap account and push this folder.
2. **Admin:**
   ```
   cd studio
   npm install
   npx sanity login          # H2O / NotOnMap email
   npx sanity init --env     # creates the project; copy the project ID into studio/.env
   npx sanity deploy         # publishes the admin
   ```
3. **Fill the admin** with the current content and photos (once):
   ```
   cd h2o-site && npm install && node scripts/seed-to-sanity.mjs
   cd ../studio && npx sanity dataset import seed.ndjson production --missing
   ```
4. **Website host:** new site from the GitHub repo, base directory `h2o-site` (Netlify reads `h2o-site/netlify.toml`). Add the environment variable `SANITY_PROJECT_ID` (and `SANITY_DATASET=production`).
5. **Rebuild on publish:** in the host, create a build hook. In sanity.io/manage → API → Webhooks, add that URL, triggered on create, update and delete.
6. **Team:** in sanity.io/manage → Members, invite the team's emails as Editors.

## Working on it locally

```
cd h2o-site
npm install
npm run dev        # http://localhost:4321, uses seed content until .env has SANITY_PROJECT_ID
```

Original photos (about 20 MB each) are **not** in this repository. `npm run images` in `h2o-site` makes the web-sized copies from the photo folder on the laptop; see `h2o-site/README.md`.
