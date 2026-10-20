// Content shapes shared by the seed data and the Sanity queries.
// Every list type carries visible / featured / order, like the admin.

/** A photo: either a local seed image (key in src/data/images.json) or a Sanity image asset. */
export interface Photo {
  local?: string;
  asset?: { _ref?: string; _id?: string; url?: string };
  hotspot?: unknown;
  crop?: unknown;
  alt: string;
  /** People are recognisable: needs signed consent before the site goes live. */
  hasPeople?: boolean;
  /** No photo yet: show a marked placeholder with this text. */
  placeholder?: string;
}

interface Listed {
  visible: boolean;
  featured: boolean;
  order: number;
}

export interface Settings {
  siteName: string;
  promise: string;
  heroLine: string;
  whatsappNumber: string; // digits only with country code, e.g. 9198XXXXXXXX
  whatsappGreeting: string;
  pricesNote: string;
  address: string;
  distanceNote: string;
  chaloChambaUrl: string;
  /** Sentence about Chalo Chamba; the words "Chalo Chamba" in it become the link. */
  chaloChambaText: string;
  notOnMapUrl: string;
  mysticVillageUrl: string;
  instagramUrl?: string;
  phone?: string;
  email?: string;
}

/** One homepage section's words and photo, editable in the admin. */
export interface HomeSection {
  label?: string;
  heading: string;
  body: string[];
  image?: Photo;
  caption?: string;
}

export interface HomePage {
  story: HomeSection;
  rooms: HomeSection;
  kitchen: HomeSection;
  people: HomeSection;
  anandam: HomeSection;
  voices: HomeSection;
  chamba: HomeSection;
  enquire: HomeSection;
  heroImage: Photo;
}

export interface Room extends Listed {
  slug: string;
  number: string;
  name: string;
  tagline: string;
  story: string[];
  view: string;
  sleeps: string;
  beds: string;
  priceFrom: string;
  priceUnit: string;
  amenities: string[];
  rules: string[];
  image: Photo;
  gallery: Photo[];
}

export interface Experience extends Listed {
  slug: string;
  name: string;
  summary: string;
  ledBy: string;
  duration: string;
  guestLimit: string;
  price: string;
  enquireOnly: boolean;
  image: Photo;
}

export interface Person extends Listed {
  name: string;
  role: string;
  quote?: string;
  portrait?: Photo;
}

export interface Testimonial extends Listed {
  quote: string;
  guestName: string;
  from?: string;
  source?: string;
}

export interface Award extends Listed {
  name: string;
  year: string;
  givenBy: string;
}

/** Places to visit near H2O, grouped by area and kind. */
export interface PlaceGroup extends Listed {
  area: string;
  kind: string;
  places: string[];
}
