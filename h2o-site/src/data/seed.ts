// Seed content, used until Sanity is connected (see README).
// Rule: no invented facts. Anything not confirmed by H2O is a placeholder
// (₹X,XXX, [to verify], [Name to add]) for the team to replace in the admin.
// Room descriptions describe what is visible in the photos, plus what H2O's own
// property note (Oct 2026) says about each room.

import type { Award, Experience, HomePage, Person, Photo, PlaceGroup, Room, Settings, Testimonial } from '../lib/types';

export const settings: Settings = {
  siteName: 'H2O House',
  heroLine: 'Stay where the water still works',
  promise:
    'A family home more than 150 years old, built on a gharat (water mill) where two mountain streams meet, and run by the people of the valley.',
  whatsappNumber: '919816220009', // H2O's phone, 98162 20009. [to verify that this number is on WhatsApp]
  phone: '98162 20009',
  email: 'h2ohouse.chaminu@gmail.com',
  whatsappGreeting: 'Hello H2O House,',
  pricesNote: 'Prices are per night and change with the season. We confirm the final price on WhatsApp. [to verify]',
  address: 'Village Chaminoo, PO Barour, Chamba–Saho Road, Chamba, Himachal Pradesh 176314',
  // the property note says 12 km; the planning notes said 8.6 km
  distanceNote: 'About 12 km from Chamba town [to verify]',
  chaloChambaUrl: '#', // [to add] Chalo Chamba campaign link
  chaloChambaText: 'H2O is part of Chalo Chamba, the district campaign for travel in Chamba, run with NotOnMap.',
  notOnMapUrl: 'https://www.notonmap.com',
  mysticVillageUrl: '#', // [to add] once the Mystic Village site is live
};

export const home: HomePage = {
  heroImage: { local: 'hero-riverside-deck', alt: 'A hanging cane chair and lanterns on the stone deck above the river at dusk' },
  story: {
    label: 'The story',
    heading: 'A house built on the mills of Chaminoo',
    body: [
      'H2O House is a family home more than 150 years old in Chaminoo village, where the Saal, a tributary of the Ravi, meets the Hul Nala below the Pir Panjal range. A copper plate records that the land passed to the family in the 13th century.',
      'The house sits on top of a gharat (water mill): a small stone mill where a channel of stream water turns a wooden wheel under the floor, and the millstone above it grinds the village’s flour. [Does it still grind today: to verify.] You sleep in rooms above the sound of water.',
      'H2O is run by people from the local community and by self-help groups, together with the homestays around it, as a place to stay that the community runs on sustainable lines.',
    ],
    image: { local: 'mill-channel', alt: 'Water pouring from beneath a stone-and-timber mill house into a rocky stream' },
    caption: 'Water leaving the mill house. [to verify: is this the gharat?]',
  },
  rooms: {
    label: 'H2O House',
    heading: 'Rooms above the sound of water',
    body: ['The rooms are spread across four traditional houses of mud plaster, pine and old timber. Each room has its own story.'],
    image: { local: 'lawn-dusk', alt: '' },
  },
  kitchen: {
    label: 'The community kitchen',
    heading: 'Meals from the community kitchen',
    body: [
      'Our community kitchen is run by people from villages across Chamba. It cooks traditional Chambyali food, to keep the valley’s own dishes on the table.',
      'Breakfast, lunch and dinner come as a thali (a full plate of several dishes) that changes every day, served hot at long pine tables in the dining hall by the lawn. Book your meals in advance; for other dishes, tell us at least 3 hours before you arrive.',
      'What the kitchen earns is shared equally among the people who cook in it.',
    ],
    image: { local: 'thali-clay-bowls', alt: 'Rice and six small clay bowls of dal and vegetables on a wooden table' },
  },
  people: {
    label: 'The people of H2O',
    heading: 'The people who run the house',
    body: ['H2O House is managed by people from the local community and by self-help groups (small village groups that run local enterprises together).'],
    image: { local: 'dining-hall', alt: '' },
  },
  anandam: {
    label: 'H2O Anandam',
    heading: 'Days by the mill and the river',
    body: ['Each experience is led by someone from the valley: a walk through the village, a meal in a local home, a session with an artist or a healer. Tell us what you would like to do when you enquire.'],
    image: { local: 'cottage-dusk-path', alt: '' },
  },
  voices: {
    label: 'Recognition and guest voices',
    heading: 'What guests say',
    body: [],
    image: { local: 'lawn-day', alt: '' },
  },
  chamba: {
    label: 'Why Chamba',
    heading: 'A valley of rumals, paintings and feasts',
    body: [
      'Chamba is known for the Chamba rumal, an embroidered cloth that looks the same on both sides; for its miniature paintings; and for the dham, a feast served on leaf plates. [to verify wording]',
      'From H2O you can reach the old temples and palaces of Chamba town, the shrines of Bharmour and Manimahesh, the meadows of Khajjiar and Dalhousie, and the road to Sach Pass through Churah. Ask us when you enquire and we will help you plan the days.',
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
      'A day bed sits along the window beside two low wooden chairs. It is a quiet room for two, with its own washroom.',
      '[Add the story behind this room: the wall, beam or waterway it is built around.]',
    ],
    view: TBC, sleeps: '2', beds: 'One double bed and a day bed',
    priceFrom: '₹X,XXX', priceUnit: 'a night', amenities: ['Attached washroom'],
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
      'Two interconnected rooms under low ceilings of pine boards, with carved niches in the mud-plaster walls and a row of small-paned windows along one side. They share one washroom and a private seating area.',
      '[Add the story behind this room.]',
    ],
    view: TBC, sleeps: '4', beds: '[to verify]',
    priceFrom: '₹X,XXX', priceUnit: 'a night', amenities: ['Two interconnected rooms', 'One attached washroom', 'Private seating area'],
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
      'The cottage itself is stone and timber, with a lit doorway and tables in the stone courtyard outside. Its two interconnected rooms each have their own washroom, which suits a family or a small group.',
      '[Add the story behind this house.]',
    ],
    view: TBC, sleeps: '4', beds: '[to verify]',
    priceFrom: '₹X,XXX', priceUnit: 'a night', amenities: ['Two interconnected rooms', 'A washroom for each room'],
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
      'One long room under dark beams and timber posts, with wooden floors, two double beds and room to spread out.',
      '[Add the story behind this room.]',
    ],
    // the property note's "Family Room" (two double beds, attached washrooms). [to verify that it is this room]
    view: TBC, sleeps: '4', beds: 'Two double beds',
    priceFrom: '₹X,XXX', priceUnit: 'a night', amenities: ['Attached washrooms'],
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
      'A cottage for two by the river, with its own washroom and a private seating area. [Add the story behind this cottage and how close it sits to the river.]',
    ],
    view: TBC, sleeps: '2', beds: 'One double bed',
    priceFrom: '₹X,XXX', priceUnit: 'a night', amenities: ['Attached washroom', 'Private seating area'],
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
    slug: 'village-walk', name: 'Village walk',
    summary: 'A guided walk through the village, to see rural life and culture in the valley up close.',
    ledBy: '[Guide’s name to add]', duration: '[to verify]', guestLimit: '[to verify]', price: '₹X,XXX',
    enquireOnly: false, image: noPhoto('Photo to come: the village walk'),
    visible: true, featured: true, order: 2,
  },
  {
    slug: 'meals-with-locals', name: 'Meals with locals',
    summary: 'Eat a home-cooked meal of local food in a family’s house nearby, and get to know the people who made it.',
    ledBy: '[Host family to add]', duration: '[to verify]', guestLimit: '[to verify]', price: '₹X,XXX',
    enquireOnly: false, image: noPhoto('Photo to come: a meal in a village home'),
    visible: true, featured: true, order: 3,
  },
  {
    slug: 'mill-kitchen-thali', name: 'Mill-kitchen thali',
    summary: 'A traditional Chambyali thali from the community kitchen, served on a leaf plate. [Add what is on it and where the grain comes from.]',
    ledBy: '[Cook’s name to add]', duration: '[to verify]', guestLimit: '[to verify]', price: '₹X,XXX',
    enquireOnly: false, image: { local: 'thali-on-leaf', alt: 'A thali on a leaf plate: rice, dal, greens and pickle, a brass tumbler beside it' },
    visible: true, featured: true, order: 4,
  },
  {
    slug: 'art-and-craft', name: 'Art and craft with local artists',
    summary: 'Paint and carve alongside artists from the valley in the open-air studio.',
    ledBy: '[Artist’s name to add]', duration: '[to verify]', guestLimit: '[to verify]', price: '₹X,XXX',
    enquireOnly: false,
    image: { local: 'art-craft-session', alt: 'Two artists painting and carving at a wooden table in the studio', hasPeople: true },
    visible: true, featured: true, order: 5,
  },
  {
    slug: 'herbal-healing', name: 'Herbal healing session',
    summary: '[Describe the session and who leads it.]',
    ledBy: '[Name to add]', duration: '[to verify]', guestLimit: '[to verify]', price: '₹X,XXX',
    enquireOnly: false, image: noPhoto('Photo to come: herbal healing'),
    visible: true, featured: true, order: 6,
  },
  {
    slug: 'river-walk', name: 'River walk',
    summary: 'Follow the Saal and its waterways with someone who grew up beside them. [to verify]',
    ledBy: '[Guide’s name to add]', duration: '[to verify]', guestLimit: '[to verify]', price: '₹X,XXX',
    enquireOnly: false, image: noPhoto('Photo to come: the river walk'),
    visible: true, featured: false, order: 7,
  },
  {
    slug: 'fairs-and-festivals', name: 'Fairs and festivals',
    summary: 'Take part in Chamba’s local fairs and festivals when they fall during your stay. [Which fairs, and in which months: to add]',
    ledBy: 'The H2O team', duration: 'By season', guestLimit: '[to verify]', price: 'On enquiry',
    enquireOnly: true, image: noPhoto('Photo to come: a Chamba fair'),
    visible: true, featured: false, order: 8,
  },
  {
    slug: 'yoga-and-meetings', name: 'Yoga, retreats and meetings',
    summary: 'Open seating areas by the river for yoga and meditation, and for team meetings and dinners. Tell us your group size and dates.',
    ledBy: 'The H2O team', duration: 'By arrangement', guestLimit: '[to verify]', price: 'On enquiry',
    enquireOnly: true, image: { local: 'yoga-on-lawn', alt: 'Five people in white doing yoga on the lawn among the trees', hasPeople: true },
    visible: true, featured: false, order: 9,
  },
  {
    slug: 'riverside-barbeque', name: 'Riverside barbeque',
    summary: 'An evening by the river, with lanterns on the stone deck.',
    ledBy: 'The H2O team', duration: 'Evening', guestLimit: '[to verify]', price: 'On enquiry',
    enquireOnly: true, image: { local: 'riverside-verandah', alt: 'Cane chairs and tables on the riverside verandah, the forest beyond' },
    visible: true, featured: false, order: 10,
  },
  {
    slug: 'destination-weddings', name: 'Destination weddings',
    summary: 'Small gatherings on the lawns. Tell us your dates and numbers and we will talk it through.',
    ledBy: 'The H2O team', duration: 'By arrangement', guestLimit: '[to verify]', price: 'On enquiry',
    enquireOnly: true, image: { local: 'lawn-day', alt: 'The open lawn with a wooden table, cottages and hills behind' },
    visible: true, featured: false, order: 11,
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

// Award names as written in H2O's property note. Years and exact wording: to verify against the certificates.
export const awards: Award[] = [
  { name: 'Gold award, Sustainable leadership: homestays', year: '[Year]', givenBy: 'Indian Responsible Tourism Awards (IRTA)', visible: true, featured: true, order: 1 },
  { name: 'Sustainable Accommodation of the Year', year: '[Year]', givenBy: 'SATTE (South Asia Travel and Tourism Exchange) Awards', visible: true, featured: true, order: 2 },
  { name: 'Best Small Local Stay', year: '[Year]', givenBy: 'Airbnb', visible: true, featured: true, order: 3 },
  { name: 'Green 5 Star rating, the only homestay in Himachal Pradesh to hold it [to verify]', year: '[Year]', givenBy: 'Himachal Pradesh Pollution Control Board', visible: true, featured: true, order: 4 },
];

// Places to visit, from H2O's property note. Spellings follow common usage.
export const places: PlaceGroup[] = [
  {
    area: 'Chamba', kind: 'Temples and sacred places',
    places: ['Lakshmi Narayan Temple', 'Hari Rai Temple', 'Champavati Temple', 'Chamunda Devi Temple', 'Church of Scotland', 'Sui Mata Temple', 'Sita Ram Temple', 'Bansi Gopal Temple', 'Bajreshwari Mata Temple', 'Chandrashekhar Mahadev Temple', 'Jamu Nag Temple, Jhumar'],
    visible: true, featured: true, order: 1,
  },
  {
    area: 'Chamba', kind: 'Landmarks',
    places: ['Chamba Chowgan', 'Chamba Bazaar', 'Rang Mahal', 'Akhand Chandi Palace', 'Bhuri Singh Museum', 'Bhuri Singh Power House', 'Majri Garden'],
    visible: true, featured: true, order: 2,
  },
  {
    area: 'Bharmour', kind: 'Temples and sacred places',
    places: ['Chaurasi Temple', 'Kartik Swami Temple', 'Bharmani Mata Temple', 'Shakti Mata Temple', 'Hidimba Mata Temple', 'Manimahesh Lake'],
    visible: true, featured: true, order: 3,
  },
  {
    area: 'Bharmour', kind: 'Landmarks and nature',
    places: ['Tundah Wildlife Sanctuary', 'Kugti Wildlife Sanctuary', 'Thala Waterfall', 'Dhanchho Waterfall', 'Kali Chho'],
    visible: true, featured: true, order: 4,
  },
  {
    area: 'Dalhousie and Khajjiar', kind: 'Temples and sacred places',
    places: ['Khajji Nag Temple', 'Bhalei Mata Temple', 'St John’s Church', 'Ainan Mata Temple', 'Pohlani Mata Temple'],
    visible: true, featured: true, order: 5,
  },
  {
    area: 'Dalhousie and Khajjiar', kind: 'Landmarks and nature',
    places: ['Khajjiar', 'Kalatop Wildlife Sanctuary', 'Dainkund Peak', 'Chamera Lake', 'Jot', 'Bakrota Hills', 'Panjpula', 'Bara Patthar', 'Mall Road', 'Indo-Tibetan Market', 'Rock Garden'],
    visible: true, featured: true, order: 6,
  },
  {
    area: 'Churah', kind: 'Temples and sacred places',
    places: ['Devi Kothi Temple', 'Bhanodi Gompa', 'Chanju Temple', 'Garh Mata Temple', 'Shiv Temple, Shavaain'],
    visible: true, featured: true, order: 7,
  },
  {
    area: 'Churah', kind: 'Landmarks',
    places: ['Sach Pass'],
    visible: true, featured: true, order: 8,
  },
];
