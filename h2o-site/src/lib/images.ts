// Turns a Photo (local seed image or Sanity asset) into src / srcset for <img>.
import { createImageUrlBuilder } from '@sanity/image-url';
import manifest from '../data/images.json';
import { sanityConfig } from './content';
import type { Photo } from './types';

type Entry = { widths: number[]; ratio: number };
const local = manifest as Record<string, Entry>;
const WIDTHS = [800, 1400, 2000];

const builder = sanityConfig.projectId
  ? createImageUrlBuilder({ projectId: sanityConfig.projectId, dataset: sanityConfig.dataset })
  : null;

export interface Resolved {
  src: string;
  srcset: string;
  width: number;
  height: number;
}

export function resolve(photo: Photo | undefined, maxWidth = 2000): Resolved | null {
  if (!photo || photo.placeholder) return null;

  if (photo.local) {
    const entry = local[photo.local];
    if (!entry) throw new Error(`Unknown local image "${photo.local}". Run npm run images.`);
    const widths = entry.widths.filter((w) => w <= maxWidth);
    if (!widths.length) widths.push(entry.widths[0]);
    const url = (w: number) => `/images/${photo.local}-${w}.webp`;
    const w = widths[widths.length - 1];
    return {
      src: url(widths[0]),
      srcset: widths.map((x) => `${url(x)} ${x}w`).join(', '),
      width: w,
      height: Math.round(w / entry.ratio),
    };
  }

  if (photo.asset && builder) {
    const img = builder.image(photo).auto('format').quality(78).fit('max');
    const widths = WIDTHS.filter((w) => w <= maxWidth);
    // Sanity asset ids end in -<w>x<h>-<ext>; use them for the aspect ratio
    const id = photo.asset._ref ?? photo.asset._id ?? '';
    const m = id.match(/-(\d+)x(\d+)-/);
    const ratio = m ? Number(m[1]) / Number(m[2]) : 4 / 3;
    const w = widths[widths.length - 1];
    return {
      src: img.width(widths[0]).url(),
      srcset: widths.map((x) => `${img.width(x).url()} ${x}w`).join(', '),
      width: w,
      height: Math.round(w / ratio),
    };
  }
  return null;
}
