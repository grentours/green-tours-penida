/* QUICK EDIT FILE — ubah nilai di sini untuk memperbarui nomor WhatsApp dan detail paket. */
const SNORKELING_INCLUDES = [
  'Private snorkeling boat', 'Snorkeling equipment', 'Life jacket', 'Fins & mask',
  'Snorkeling guide & boat crew', 'Mineral water', 'Safety equipment',
  'Shower & changing facilities', 'GoPro', 'Towel'
];
const SNORKELING_NOTES = [
  'Meeting point: Beach Club', 'Meeting time: From 9:00 AM',
  'This package is private boat, so the boat is exclusively for your group.',
  'The snorkeling spots may change depending on weather and sea conditions for safety reasons.',
  'Manta sightings are not guaranteed, as they are wild animals.'
];
const MANTA_BAY_ITINERARY = [
  ['09:00 AM', 'Meeting point at Beach Club', 'Meet our team and prepare for the snorkeling trip.'],
  ['09:30 AM', 'Depart by Private Boat', 'Start your snorkeling adventure with our private boat. Explore Manta Bay, Crystal Bay, Gamat Bay & Wall Point.'],
  ['01', '🐠 Manta Bay', 'Look out for graceful manta rays and enjoy an unforgettable encounter with Nusa Penida’s famous marine life.'],
  ['02', '💎 Crystal Bay', 'Discover crystal-clear waters, colorful coral reefs, and vibrant tropical fish.'],
  ['03', '🐢 Gamat Bay', 'Discover beautiful coral reefs, colorful tropical fish, and crystal-clear waters.'],
  ['04', '🌊 Wall Point', 'Enjoy a beautiful underwater reef with colorful fish, coral formations, and stunning blue water.'],
  ['12:30 PM', 'Return to Beach Club & Gate Shower', ''],
  ['12:50 PM', 'Free Time', ''],
  ['🏁', 'TOUR ENDS', '']
];
const MANTA_POINT_ITINERARY = [
  ['09:00 AM', 'Meeting point at Beach Club', 'Meet our team and prepare for the snorkeling trip.'],
  ['09:30 AM', 'Depart by Private Boat', 'Start your snorkeling adventure with our private boat. Explore Manta Point, Gamat Bay & Wall Point.'],
  ['01', 'Manta Point', 'Swim in the open ocean and look for the magnificent manta rays in their natural habitat.'],
  ['02', 'Gamat Bay', 'Discover beautiful coral reefs, colorful tropical fish, and crystal-clear waters.'],
  ['03', 'Wall Point', 'Explore vibrant coral formations and marine life. If sea conditions are not suitable at Wall Point, the crew will adjust the route for safety.'],
  ['12:30 PM – 01:00 PM', 'Return to Beach Club & Gate Shower', ''],
  ['12:50 PM', 'Free Time', ''],
  ['🏁', 'TOUR ENDS', '']
];

window.GREEN_TOURS_CONTENT = {
  whatsappNumber: '6283894497992',
  packages: {
    west: { kicker: 'Island highlights', title: 'West tour<br><i>meets the blue.</i>', number: '01', description: 'See the iconic west side of Nusa Penida, from dramatic cliffs and hidden coves to unforgettable ocean views.', time: 'One day trip', price: 'All inclusive', size: '2–5 guests', heroTitle: 'Go west,<br><i>feel more.</i>', heroDescription: 'Kelingking cliffs, hidden coves, and a full day discovering the wild west coast of Nusa Penida.', heroImage: '/assets/manta-penida.webp', heroAlt: 'Manta ray and diver in the blue waters of Nusa Penida', destinations: "Kelingking • Broken Beach • Angel's Billabong • Crystal Beach", rates: [['2 Persons', 'IDR 950,000 / person'], ['3 Persons', 'IDR 850,000 / person'], ['4 Persons', 'IDR 800,000 / person'], ['5 Persons', 'IDR 750,000 / person']], message: 'West tour' },
    east: { kicker: 'Wild east coast', title: 'East tour<br><i>goes further.</i>', number: '02', description: 'A full day of striking coastlines, bright water, and the island’s quieter eastern corners.', time: 'One day trip', price: 'All inclusive', size: '2–5 guests', heroTitle: 'Go east,<br><i>find wonder.</i>', heroDescription: 'Follow the dramatic east coast, turquoise coves, and unforgettable viewpoints of Nusa Penida.', heroImage: '/assets/east-tour-hero.webp', heroAlt: 'Traveller overlooking the cliffs and turquoise coastline of Nusa Penida', rates: [['2 Persons', 'IDR 950,000 / person'], ['3 Persons', 'IDR 850,000 / person'], ['4 Persons', 'IDR 800,000 / person'], ['5 Persons', 'IDR 750,000 / person']], message: 'East tour' },
    mix: { kicker: 'Best of both sides', title: 'Mix tour<br><i>your way.</i>', number: '03', description: 'Combine the highlights of west and east Penida for one memorable island day with the best of both routes.', time: 'Flexible · 8 hours', price: 'All inclusive', size: '2–5 guests', heroImage: '/assets/kelingking-penida.webp', heroAlt: 'Visitors overlooking the green cliffs and beach of Kelingking, Nusa Penida', rates: [['2 Persons', 'IDR 1.050,000 / person'], ['3 Persons', 'IDR 950,000 / person'], ['4 Persons', 'IDR 875,000 / person'], ['5 Persons', 'IDR 800,000 / person']], message: 'Mix tour' },
    snorkelland: { kicker: 'Sea meets shore', title: 'Snorkeling &<br><i>Land tour.</i>', number: '04', description: 'Split the day between clear-water snorkeling and the viewpoints, beaches, and landscapes that make Penida famous.', time: '07:00 — 16:00', price: 'All inclusive', size: '2–5 guests', heroImage: '/assets/manta-snorkeling.webp', heroAlt: 'Snorkeler swimming above manta rays in Nusa Penida', rates: [['2 Persons', 'IDR 1.275.000 / person'], ['3 Persons', 'IDR 1.045.000 / person'], ['4 Persons', 'IDR 915.000 / person'], ['5 Persons', 'IDR 830.000 / person']], message: 'Snorkeling & Land tour' },
    privatesnorkelland: { kicker: 'Made for your crew', title: 'Private snorkeling<br><i>& Land tour.</i>', number: '05', description: 'A private boat and island adventure with a route shaped around your group, your pace, and your favourite places.', time: 'Flexible · 8 hours', price: 'All inclusive', size: '2–5 guests', heroImage: '/assets/manta-snorkeling.webp', heroAlt: 'Private snorkeling experience above manta rays in Nusa Penida', rates: [['2 Persons', 'IDR 1.875.000 / person'], ['3 Persons', 'IDR 1.380.000 / person'], ['4 Persons', 'IDR 1.135.000 / person'], ['5 Persons', 'IDR 990.000 / person']], message: 'Private snorkeling & Land tour' },
    twoDay: { kicker: 'Stay a little longer', title: '2Day 1Night<br><i>in Penida.</i>', number: '06', description: 'Take the scenic route without rushing: two days of sea, land, sunsets, and a night on the island.', time: '2 days · 1 night', price: 'All inclusive', size: '2–5 guests', heroImage: '/assets/kelingking-viewpoint.webp', heroAlt: 'Visitor enjoying a Kelingking viewpoint in Nusa Penida', rates: [['2 Persons', 'IDR 1.850.000 / person'], ['3 Persons', 'IDR 1.700.000 / person'], ['4 Persons', 'IDR 1.550.000 / person'], ['5 Persons', 'IDR 1.400.000 / person']], message: '2Day 1Night' },
    manta: { kicker: 'Meet the giants', title: 'Manta point<br><i>snorkeling.</i>', number: '07', description: 'Swim through the deep blue at Manta Point and experience one of Penida’s most unforgettable encounters.', time: '5 hours', price: 'All inclusive', snorkeling: { includes: SNORKELING_INCLUDES, itinerary: MANTA_POINT_ITINERARY, notes: SNORKELING_NOTES }, destinations: 'Manta Point • Gamat Bay • Wall Point', size: '2–8 guests', heroImage: '/assets/manta-snorkeling.webp', heroAlt: 'Manta point snorkeling in Nusa Penida', rates: [['1–4 people', 'IDR 2.950.000'], ['5–8 people', 'IDR 3.100.000']], rateUnit: 'This price for one boat', message: 'Manta point snorkeling' },
    matabay: { kicker: 'Bright water, big life', title: 'Mata bay<br><i>snorkeling.</i>', number: '08', description: 'Discover the clear, colourful water of Mata Bay with time to snorkel, float, and take it all in.', time: '5 hours', price: 'All inclusive', snorkeling: { includes: SNORKELING_INCLUDES, itinerary: MANTA_BAY_ITINERARY, notes: SNORKELING_NOTES }, destinations: 'Manta Bay • Crystal Bay • Gamat Bay • Wall Point', size: 'Up to 12', heroImage: '/assets/manta-snorkeling.webp', heroAlt: 'Mata Bay snorkeling in Nusa Penida', rates: [['1–4 people', 'IDR 1.850.000'], ['5–8 people', 'IDR 1.950.000']], rateUnit: 'This price for one boat', message: 'Mata bay snorkeling' }
  }
};
