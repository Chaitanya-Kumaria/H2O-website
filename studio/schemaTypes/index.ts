import { defineField, defineType } from 'sanity';
import { listControls, photo, sites } from './shared';

const text = (name: string, title: string, description?: string) =>
  defineField({ name, title, type: 'string', description });

export const room = defineType({
  name: 'room', title: 'Room', type: 'document',
  fields: [
    ...listControls,
    text('name', 'Room name'),
    defineField({ name: 'slug', title: 'Web address', type: 'slug', options: { source: 'name' }, validation: (r) => r.required() }),
    text('number', 'Room number', 'e.g. 103'),
    text('tagline', 'One line under the name'),
    defineField({ name: 'story', title: 'Story of the room', type: 'array', of: [{ type: 'text', rows: 4 }], description: 'One box per paragraph. Lead with the wall, beam or waterway behind it.' }),
    text('view', 'View'),
    text('sleeps', 'Sleeps', 'e.g. 2 adults and 1 child'),
    text('beds', 'Beds'),
    text('priceFrom', 'Price from', 'e.g. ₹4,500'),
    text('priceUnit', 'Price is per', 'e.g. a night'),
    defineField({ name: 'amenities', title: 'In the room', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'rules', title: 'House rules', type: 'array', of: [{ type: 'string' }] }),
    photo('image', 'Main photo'),
    defineField({ name: 'gallery', title: 'More photos', type: 'array', of: [photo('photo', 'Photo')], options: { layout: 'grid' } }),
  ],
  orderings: [{ title: 'Display order', name: 'order', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'name', subtitle: 'priceFrom', media: 'image', visible: 'visible' }, prepare: ({ title, subtitle, media, visible }) => ({ title: `${visible === false ? '(hidden) ' : ''}${title}`, subtitle, media }) },
});

export const person = defineType({
  name: 'person', title: 'Person', type: 'document',
  description: 'Hosts, guides, artisans, cooks, the miller.',
  fields: [
    ...listControls,
    sites,
    text('name', 'Name'),
    text('role', 'What they do', 'e.g. Keeps the gharat'),
    defineField({ name: 'quote', title: 'A line in their own words', type: 'text', rows: 3 }),
    photo('portrait', 'Portrait'),
  ],
  preview: { select: { title: 'name', subtitle: 'role', media: 'portrait' } },
});

export const experience = defineType({
  name: 'experience', title: 'Experience (H2O Anandam)', type: 'document',
  fields: [
    ...listControls,
    text('name', 'Name'),
    defineField({ name: 'slug', title: 'Web address', type: 'slug', options: { source: 'name' } }),
    defineField({ name: 'summary', title: 'Short description', type: 'text', rows: 3 }),
    defineField({ name: 'ledBy', title: 'Led by', type: 'reference', to: [{ type: 'person' }] }),
    text('ledByText', 'Led by (if not in People)', 'e.g. The H2O team'),
    text('duration', 'How long'),
    text('guestLimit', 'Guest limit'),
    text('price', 'Price', 'e.g. ₹800 per person, or "On enquiry"'),
    defineField({ name: 'enquireOnly', title: 'Enquire only (no fixed price)', type: 'boolean', initialValue: false }),
    photo('image', 'Photo'),
  ],
  preview: { select: { title: 'name', subtitle: 'price', media: 'image' } },
});

export const testimonial = defineType({
  name: 'testimonial', title: 'Guest voice', type: 'document',
  fields: [
    ...listControls,
    sites,
    defineField({ name: 'quote', title: 'What they said', type: 'text', rows: 4, description: 'Copy exactly from the review.' }),
    text('guestName', 'Guest name'),
    text('from', 'Where they are from'),
    text('source', 'Where the review is', 'e.g. Google, Booking.com'),
  ],
  preview: { select: { title: 'guestName', subtitle: 'quote' } },
});

export const award = defineType({
  name: 'award', title: 'Award or recognition', type: 'document',
  fields: [...listControls, text('name', 'Exact name of the award'), text('givenBy', 'Given by'), text('year', 'Year')],
});

export const placeGroup = defineType({
  name: 'placeGroup', title: 'Nearby places', type: 'document',
  description: 'A list of places to visit, e.g. temples around Bharmour.',
  fields: [
    ...listControls,
    sites,
    text('area', 'Area', 'e.g. Bharmour'),
    text('kind', 'Kind of place', 'e.g. Temples and sacred places'),
    defineField({ name: 'places', title: 'Places', type: 'array', of: [{ type: 'string' }], description: 'One box per place.' }),
  ],
  preview: { select: { area: 'area', kind: 'kind' }, prepare: ({ area, kind }) => ({ title: area, subtitle: kind }) },
});

export const settings = defineType({
  name: 'settings', title: 'Site settings', type: 'document',
  fields: [
    text('whatsappNumber', 'WhatsApp number', 'Digits with country code, no spaces or +. e.g. 919812345678'),
    text('whatsappGreeting', 'Start of every WhatsApp message', 'e.g. Hello H2O House,'),
    text('heroLine', 'Home page headline'),
    defineField({ name: 'promise', title: 'One-line promise under the headline', type: 'text', rows: 2 }),
    defineField({ name: 'pricesNote', title: 'Note about prices', type: 'text', rows: 2 }),
    text('phone', 'Phone number, as shown on the site', 'e.g. 98162 20009'),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    text('address', 'Address'),
    text('distanceNote', 'Distance line', 'e.g. About 12 km from Chamba town'),
    defineField({ name: 'chaloChambaUrl', title: 'Chalo Chamba link', type: 'url' }),
    defineField({ name: 'chaloChambaText', title: 'Sentence about Chalo Chamba', type: 'text', rows: 2, description: 'The words "Chalo Chamba" in it become the link.' }),
    defineField({ name: 'notOnMapUrl', title: 'NotOnMap link', type: 'url' }),
    defineField({ name: 'mysticVillageUrl', title: 'Mystic Village link', type: 'url' }),
  ],
});

// The words and photo for one part of the home page
export const homeSection = defineType({
  name: 'homeSection', title: 'Section', type: 'object',
  fields: [
    text('label', 'Small heading above', 'e.g. THE STORY. Keep it to four words.'),
    text('heading', 'Heading'),
    defineField({ name: 'body', title: 'Text', type: 'array', of: [{ type: 'text', rows: 4 }], description: 'One box per paragraph.' }),
    photo('image', 'Photo'),
    text('caption', 'Photo caption'),
  ],
});

const SECTIONS = [
  ['story', 'The story'],
  ['rooms', 'Rooms'],
  ['kitchen', 'Community kitchen'],
  ['people', 'People of H2O'],
  ['anandam', 'H2O Anandam'],
  ['voices', 'Guest voices'],
  ['chamba', 'Why Chamba'],
  ['enquire', 'Enquire'],
] as const;

export const homePage = defineType({
  name: 'homePage', title: 'Home page', type: 'document',
  groups: [{ name: 'hero', title: 'Top of page', default: true }, ...SECTIONS.map(([name, title]) => ({ name, title }))],
  fields: [
    defineField({ ...photo('heroImage', 'Top photo'), group: 'hero', description: 'The headline and promise are in Site settings.' }),
    ...SECTIONS.map(([name, title]) => defineField({ name, title, type: 'homeSection', group: name })),
  ],
  preview: { prepare: () => ({ title: 'Home page' }) },
});

export const schemaTypes = [homePage, homeSection, room, experience, person, testimonial, award, placeGroup, settings];
