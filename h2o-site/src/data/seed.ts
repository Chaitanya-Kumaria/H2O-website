// Seed content, used until Sanity is connected (see README).
// Rule: no invented facts. Anything not confirmed by H2O is a placeholder
// (₹X,XXX, [to verify], [Name to add]) for the team to replace in the admin.
// Room descriptions only describe what is visible in the photos.

import type { Award, Experience, HomePage, Person, Photo, Room, Settings, Testimonial } from '../lib/types';

export const settings: Settings = {
  siteName: 'H2O House',
  heroLine: 'Stay where the water still works',
  promise:
    'A riverside house on the old gharats (water mills) of Chaminoo, run by the people who live here.',
  whatsappNumber: '', // [to add] digits only with country code, e.g. 9198XXXXXXXX
  whatsappGreeting: 'Hello H2O House,',
  pricesNote: 'Prices are per night and change with the season. We confirm the final price on WhatsApp. [to verify]',
  address: 'Chaminoo village, Chamba, Himachal Pradesh',
  distanceNote: 'About 8.6 km from Chamba town',
  chaloChambaUrl: '#', // [to add] Chalo Chamba campaign link
  chaloChambaText: 'H2O is part of Chalo Chamba, the district campaign for travel in Chamba, run with NotOnMap.',
  notOnMapUrl: '#', // [to add] NotOnMap website
  mysticVillageUrl: '#', // [to add] once the Mystic Village site is live
};

export const home: HomePage = {
  heroImage: { local: 'hero-riverside-deck', alt: 'A hanging cane chair and lanterns on the stone deck above the river at dusk' },
  story: {
    label: 'The story',
    heading: 'A house built on the mills of Chaminoo',
    body: [
      'For centuries the villages along the Saal river, a tributary of the Ravi, ground their grain in gharats (water mills): small stone houses where a channel of river water turns a wooden wheel under the floor, and the millstone above it. The gharats at Chaminoo date to the 13th century. [to verify]',
      'H2O House is built around them, and at least one still works. [How many gharats stand here, and which one turns: to verify.] You sleep in rooms above the sound of water.',
    ],
    image: { local: 'mill-channel', alt: 'Water pouring from beneath a stone-and-timber mill house into a rocky stream' },
    caption: 'Water leaving the mill house. [to verify: is this the gharat?]',
  },
  rooms: {
    label: 'H2O House',
    heading: 'Rooms above the sound of water',
    body: ['Mud plaster, pine and old timber. Each room has its own story.'],
    image: { local: 'lawn-dusk', alt: '' },
  },
  kitchen: {
    label: 'The community kitchen',
    heading: 'Meals from the village kitchen',
    body: [
      'Meals come from our community kitchen and are served at long pine tables in the dining hall by the lawn. [Add what is cooked, by whom, and where the grain and vegetables come from.]',
    ],
    image: { local: 'thali-clay-bowls', alt: 'Rice and six small clay bowls of dal and vegetables on a wooden table' },
  },
  people: {
    label: 'The people of H2O',
    heading: 'The people who run the house',
    body: [],
    image: { local: 'dining-hall', alt: '' },
  },
  anandam: {
    label: 'H2O Anandam',
    heading: 'Days by the mill and the river',
    body: ['Each experience is led by someone from the valley. Tell us what you would like to do when you enquire.'],
    image: { local: 'cottage-dusk-path', alt: '' },
  },
  voices: {
    label: 'Guests and recognition',
    heading: 'What guests say',
    body: [],
    image: { local: 'lawn-day', alt: '' },
  },
  chamba: {
    label: 'Why Chamba',
    heading: 'A valley of rumals, paintings and feasts',
    body: [
      'Chamba is known for the Chamba rumal, an embroidered cloth that looks the same on both sides; for its miniature paintings; and for the dham, a feast served on leaf plates. [to verify wording]',
    ],
  },
  enquire: {
    label: 'Enquire',
    heading: 'Tell us when you would like to come',
    body: [
      'We reply on WhatsApp, confirm the room and price, and send a link for the advance. There is little phone signal at the house, so replies can take a few hours. [to verify]',
    ],
    image: { local: 'courtyard-dusk', alt: '' },
  },
};

const room = (num: string, count: number, alts: string[], skip: number[] = []): Photo[] =>
  Array.from({ length: count }, (_, i) => i + 1)
    .filter((i) => !skip.includes(i))
    .map((i) => ({ local: `room-${num}-${String(i).padStart(2, '0')}`, alt: alts[i - 1] ?? alts[0] }));

const TBC = '[to verify]';

export const rooms: Room[] = [
  {
    slug: 'large-double-room', number: '101', name: 'Large Double Room',
    tagline: 'Mud walls, a pine roof and a day bed by the window',
    story: [
      'The walls are mud plaster and the ceiling rises to a peak of pine boards, with small windows set high under the roof.',
      'A day bed sits along the window beside two low wooden chairs. [Add the story behind this room: the wall, beam or waterway it is built around.]',
    ],
    view: TBC, sleeps: TBC, beds: 'One double bed and a day bed',
    priceFrom: '₹X,XXX', priceUnit: 'a night', amenities: [],
    rules: ['[House rules to add]'],
    image: { local: 'room-101-01', alt: 'Double bed with yellow linen under a pine ceiling, a day bed along the window' },
    gallery: room('101', 4, [
      'Double bed with yellow linen under a pine ceiling, a day bed along the window',
      'The bed and a pair of low wooden chairs beneath tall windows',
      'Pine cupboards set into the mud-plaster wall',
      'The room from the door, with a carved wooden side table',
    ]),
    visible: true, featured: true, order: 1,
  },
  {
    slug: 'twin-room', number: '102', name: 'Twin Room',
    tagline: 'Carved niches, low pine boards and a row of small windows',
    story: [
      'A low ceiling of pine boards, carved niches in the mud-plaster walls and a row of small-paned windows along one side.',
      '[Add the story behind this room.]',
    ],
    view: TBC, sleeps: TBC, beds: 'Two single beds [to verify]',
    priceFrom: '₹X,XXX', priceUnit: 'a night', amenities: [],
    rules: ['[House rules to add]'],
    image: { local: 'room-102-05', alt: 'Two single beds with yellow linen beneath a row of small-paned windows' },
    gallery: room('102', 9, [
      'A bed under the pine ceiling, a lantern above the door',
      'The bed beside carved wooden cupboards',
      'Wooden cupboards and a wall fan on the mud-plaster wall',
      'The bed below a row of windows and a shelf niche',
      'Two single beds with yellow linen beneath a row of small-paned windows',
      'Two beds and a wooden door with a frosted panel',
      'An arched niche in the mud-plaster wall',
      'Two beds along the window wall',
      'The room from the far corner, with a carved arch',
    ]),
    visible: true, featured: true, order: 2,
  },
  {
    slug: 'duplex-cottage', number: '103', name: 'Duplex Cottage',
    tagline: 'Two floors under old beams in a stone-and-timber house',
    story: [
      'Downstairs, dark old beams and a carved timber post stand over a slate floor. A wooden stair climbs to an attic under the pine roof, with arched windows and a round woven rug.',
      'The cottage itself is stone and timber, with a lit doorway and tables in the stone courtyard outside. [Add the story behind this house.]',
    ],
    view: TBC, sleeps: TBC, beds: '[to verify]',
    priceFrom: '₹X,XXX', priceUnit: 'a night', amenities: [],
    rules: ['[House rules to add]'],
    image: { local: 'room-103-01', alt: 'A bed beneath dark old beams and a carved timber post, a wooden stair behind' },
    gallery: room('103', 11, [
      'A bed beneath dark old beams and a carved timber post, a wooden stair behind',
      'The lower floor with a bench and a framed embroidery',
      'The lower floor opening onto the courtyard',
      'A bed under the beams with a carved niche above',
      'The beams and post, with a doorway to the trees',
      'The attic under the pine roof with a round woven rug',
      'The attic with arched windows in the gable',
      'A bed under the sloping pine roof',
      'Mattresses and a round table in the attic',
      'The stone-and-timber cottage at dusk, tables in the courtyard',
      'The cottage and courtyard against the hills at dusk',
    ]),
    visible: true, featured: true, order: 3,
  },
  {
    slug: 'family-hall', number: '104', name: 'Family Hall',
    tagline: 'One long room under dark beams, room for the whole family',
    story: [
      'One long room under dark beams and timber posts, with wooden floors and beds laid out across it.',
      '[Add the story behind this room.]',
    ],
    view: TBC, sleeps: TBC, beds: '[to verify]',
    priceFrom: '₹X,XXX', priceUnit: 'a night', amenities: [],
    rules: ['[House rules to add]'],
    image: { local: 'room-104-04', alt: 'A long room with several beds under dark beams and timber posts' },
    gallery: room('104', 9, [
      'The hall with beds, a carpet and a low table under the beams',
      'Beds and a lantern lamp shaped from a branch',
      'Beds laid out along the hall',
      'A long room with several beds under dark beams and timber posts',
      'The hall from the end, beds on both sides',
      'A floor mattress on a patterned carpet',
      'A double bed below a window',
      'A double bed beside a lamp made from a branch',
      'A bed beside a lamp and a round wooden table',
    ]),
    visible: true, featured: true, order: 4,
  },
  {
    slug: 'riverside-cottage', number: '105', name: 'Riverside Cottage',
    tagline: 'Pine walls, a slate floor and windows onto the trees',
    story: [
      'Pine-panelled walls, a slate floor and a wall of windows onto the trees. The bathroom has a wall of river stone.',
      '[Add the story behind this cottage and how close it sits to the river.]',
    ],
    view: TBC, sleeps: TBC, beds: 'One double bed [to verify]',
    priceFrom: '₹X,XXX', priceUnit: 'a night', amenities: [],
    rules: ['[House rules to add]'],
    image: { local: 'room-105-01', alt: 'A double bed against pine-panelled walls, a wooden table by the window' },
    gallery: room('105', 5, [
      'A double bed against pine-panelled walls, a wooden table by the window',
      'The bed and a branch lamp on the pine wall',
      'A desk under a long window onto the trees',
      'The bed facing glass doors and the trees',
      'The bathroom, with a wall of river stone',
    ]),
    visible: true, featured: true, order: 5,
  },
  {
    slug: 'anandam-1', number: '106', name: 'Anandam 1',
    tagline: 'An attic up a wooden stair, with its own washroom',
    story: [
      'An attic room up a wooden stair, with saffron curtains, a timber roof and mattresses laid on the floor beside the bed. It has an attached washroom.',
      '[Add the story behind this room.]',
    ],
    view: TBC, sleeps: TBC, beds: '[to verify]',
    priceFrom: '₹X,XXX', priceUnit: 'a night', amenities: [],
    rules: ['[House rules to add]'],
    image: { local: 'room-106-05', alt: 'A bed beside a wooden stair, saffron curtains at the windows' },
    gallery: room('106', 5, [
      'Cane chairs and a day bed by saffron curtains',
      'Floor mattresses and a carpet under the timber roof',
      'A bed beside a wooden stair',
      'Floor mattresses below the stair',
      'A bed beside a wooden stair, saffron curtains at the windows',
    ]),
    visible: true, featured: false, order: 6,
  },
  {
    slug: 'riverside-family-room', number: '107', name: 'Riverside Family Room',
    tagline: 'A sleeping loft, bunk beds and a balcony above the water',
    story: [
      'A tall room with a sleeping loft, bunk beds and a skylight. A balcony with cane chairs looks into the trees and down to the water. [to verify]',
      '[Add the story behind this room.]',
    ],
    view: TBC, sleeps: TBC, beds: '[to verify]',
    priceFrom: '₹X,XXX', priceUnit: 'a night', amenities: [],
    rules: ['[House rules to add]'],
    image: { local: 'room-107-04', alt: 'Cane chairs on a wooden balcony above a wooded stream' },
    gallery: room('107', 7, [
      'Beds under a skylight with a loft above',
      'A double bed, bunk beds and a patterned carpet',
      'Bunk beds, the loft and a cane dining set',
      'Cane chairs on a wooden balcony above a wooded stream',
      'The room under its skylight, with the loft',
      'Twin beds in the loft beneath a row of windows',
      'Beds in the loft under the skylight',
    ]),
    visible: true, featured: false, order: 7,
  },
];

const noPhoto = (what: string): Photo => ({ alt: '', placeholder: what });

export const experiences: Experience[] = [
  {
    slug: 'gharat-tour', name: 'Gharat tour and milling',
    summary: 'Walk the channel to the mill and watch the stones turn. Bring home flour you have ground yourself. [to verify]',
    ledBy: '[Miller’s name to add]', duration: '[to verify]', guestLimit: '[to verify]', price: '₹X,XXX',
    enquireOnly: false, image: noPhoto('Photo to come: the gharat at work'),
    visible: true, featured: true, order: 1,
  },
  {
    slug: 'mill-kitchen-thali', name: 'Mill-kitchen thali',
    summary: 'A Chambyali thali from the community kitchen, served on a leaf plate. [Add what is on it and where the grain comes from.]',
    ledBy: '[Cook’s name to add]', duration: '[to verify]', guestLimit: '[to verify]', price: '₹X,XXX',
    enquireOnly: false, image: { local: 'thali-on-leaf', alt: 'A thali on a leaf plate: rice, dal, greens and pickle, a brass tumbler beside it' },
    visible: true, featured: true, order: 2,
  },
  {
    slug: 'river-walk', name: 'River walk',
    summary: 'Follow the Saal and its waterways with someone who grew up beside them. [to verify]',
    ledBy: '[Guide’s name to add]', duration: '[to verify]', guestLimit: '[to verify]', price: '₹X,XXX',
    enquireOnly: false, image: noPhoto('Photo to come: the river walk'),
    visible: true, featured: true, order: 3,
  },
  {
    slug: 'art-and-craft', name: 'Art and craft with local artists',
    summary: 'Paint and carve alongside artists from the valley in the open-air studio.',
    ledBy: '[Artist’s name to add]', duration: '[to verify]', guestLimit: '[to verify]', price: '₹X,XXX',
    enquireOnly: false,
    image: { local: 'art-craft-session', alt: 'Two artists painting and carving at a wooden table in the studio', hasPeople: true },
    visible: true, featured: true, order: 4,
  },
  {
    slug: 'herbal-healing', name: 'Herbal healing',
    summary: '[Describe the session and who leads it.]',
    ledBy: '[Name to add]', duration: '[to verify]', guestLimit: '[to verify]', price: '₹X,XXX',
    enquireOnly: false, image: noPhoto('Photo to come: herbal healing'),
    visible: true, featured: false, order: 5,
  },
  {
    slug: 'riverside-barbeque', name: 'Riverside barbeque',
    summary: 'An evening by the river, with lanterns on the stone deck.',
    ledBy: 'The H2O team', duration: 'Evening', guestLimit: '[to verify]', price: 'On enquiry',
    enquireOnly: true, image: { local: 'riverside-verandah', alt: 'Cane chairs and tables on the riverside verandah, the forest beyond' },
    visible: true, featured: false, order: 6,
  },
  {
    slug: 'destination-weddings', name: 'Destination weddings',
    summary: 'Small gatherings on the lawns. Tell us your dates and numbers and we will talk it through.',
    ledBy: 'The H2O team', duration: 'By arrangement', guestLimit: '[to verify]', price: 'On enquiry',
    enquireOnly: true, image: { local: 'lawn-day', alt: 'The open lawn with a wooden table, cottages and hills behind' },
    visible: true, featured: false, order: 7,
  },
];

export const people: Person[] = [
  { name: '[Name to add]', role: 'Runs the community kitchen', quote: '[A line in their own words, with consent]', visible: true, featured: true, order: 1 },
  { name: '[Name to add]', role: 'Keeps the gharat', quote: '[A line in their own words, with consent]', visible: true, featured: true, order: 2 },
  { name: '[Name to add]', role: 'Your host at H2O', quote: '[A line in their own words, with consent]', visible: true, featured: true, order: 3 },
];

export const testimonials: Testimonial[] = [
  { quote: '[Guest quote from a verified review]', guestName: 'Guest name', from: '[City]', source: '[Google / Booking.com, to verify]', visible: true, featured: true, order: 1 },
  { quote: '[Guest quote from a verified review]', guestName: 'Guest name', from: '[City]', source: '[Source to verify]', visible: true, featured: true, order: 2 },
  { quote: '[Guest quote from a verified review]', guestName: 'Guest name', from: '[City]', source: '[Source to verify]', visible: true, featured: true, order: 3 },
];

export const awards: Award[] = [
  { name: '[Award name, exact wording]', year: '[Year]', givenBy: '[Given by, to verify]', visible: true, featured: true, order: 1 },
  { name: '[Award name, exact wording]', year: '[Year]', givenBy: '[Given by, to verify]', visible: true, featured: true, order: 2 },
];
