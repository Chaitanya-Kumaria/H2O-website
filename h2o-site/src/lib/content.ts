// One place the pages get content from.
// With SANITY_PROJECT_ID set, content comes from the Sanity admin (published documents only).
// Without it, the site builds from src/data/seed.ts so it can be developed before the admin exists.

import { createClient, type SanityClient } from '@sanity/client';
import * as seed from '../data/seed';
import type { Award, Experience, HomePage, Person, PlaceGroup, Room, Settings, Testimonial } from './types';

const projectId = import.meta.env.SANITY_PROJECT_ID;
const dataset = import.meta.env.SANITY_DATASET || 'production';

export const sanity: SanityClient | null = projectId
  ? createClient({ projectId, dataset, apiVersion: '2025-01-01', useCdn: false, perspective: 'published' })
  : null;

export const sanityConfig = { projectId, dataset };

type Listed = { visible: boolean; order: number };
const listed = <T extends Listed>(items: T[]) =>
  items.filter((i) => i.visible).sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

const LIST = (type: string, fields: string, filter = '') =>
  `*[_type == "${type}" && visible == true ${filter}] | order(order asc) { ${fields} }`;

const PHOTO = `{ ..., "alt": coalesce(alt, "") }`;

export async function getSettings(): Promise<Settings> {
  if (!sanity) return seed.settings;
  const s = await sanity.fetch(`*[_type == "settings"][0]`);
  return { ...seed.settings, ...(s ?? {}) };
}

export async function getHome(): Promise<HomePage> {
  if (!sanity) return seed.home;
  const h = (await sanity.fetch(`*[_type == "homePage"][0]`)) ?? {};
  // a section left empty in the admin falls back to the starter text
  const merged = { ...seed.home } as HomePage;
  for (const key of Object.keys(seed.home) as (keyof HomePage)[]) {
    if (h[key]) (merged as any)[key] = key === 'heroImage' ? h[key] : { body: [], ...h[key] };
  }
  return merged;
}

export async function getRooms(): Promise<Room[]> {
  if (!sanity) return listed(seed.rooms);
  return sanity.fetch(
    LIST('room', `..., "slug": slug.current, image ${PHOTO}, gallery[] ${PHOTO}, "story": coalesce(story, []), "rules": coalesce(rules, []), "amenities": coalesce(amenities, [])`),
  );
}

export async function getExperiences(): Promise<Experience[]> {
  if (!sanity) return listed(seed.experiences);
  return sanity.fetch(LIST('experience', `..., "slug": slug.current, image ${PHOTO}, "ledBy": coalesce(ledBy->name, ledByText, "")`));
}

export async function getPeople(): Promise<Person[]> {
  if (!sanity) return listed(seed.people);
  return sanity.fetch(LIST('person', `..., portrait ${PHOTO}`, '&& "h2o" in sites'));
}

export async function getTestimonials(): Promise<Testimonial[]> {
  if (!sanity) return listed(seed.testimonials);
  return sanity.fetch(LIST('testimonial', '...', '&& "h2o" in sites'));
}

export async function getAwards(): Promise<Award[]> {
  if (!sanity) return listed(seed.awards);
  return sanity.fetch(LIST('award', '...'));
}

export async function getPlaces(): Promise<PlaceGroup[]> {
  if (!sanity) return listed(seed.places);
  return sanity.fetch(LIST('placeGroup', '..., "places": coalesce(places, [])', '&& "h2o" in sites'));
}
