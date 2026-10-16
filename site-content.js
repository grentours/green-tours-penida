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
const SNORKEL_LAND_INCLUDES = [
  'Hotel pick-up & drop-off in Bali',
  'Private transportation in Bali',
  'Return fast boat tickets Bali to Nusa Penida',
  'Private car & driver in Nusa Penida',
  'English-speaking driver',
  'Entrance tickets to tourist attractions',
  'Parking & port fees',
  'Lunch at Amarta Penida',
  'Mineral water',
  'Fuel',
  'All transportation during the tour',
  'Snorkeling trip',
  'Snorkeling equipment',
  'Towel',
  'GoPro',
  'Professional snorkeling boat crew & guide',
  'Safety equipment for snorkeling',
  'Sharing snorkeling boat'
];
const SNORKEL_LAND_ITINERARY = [
  ['LAND TOUR', 'Kelingking Beach • Paluang Cliff • Amarta Penida Gate', 'Explore iconic viewpoints before continuing to the snorkeling trip.'],
  ['06:10 – 06:50 AM', '🏨 Hotel Pick-Up in Bali', 'Private pick-up from your hotel and transfer to Sanur Port.'],
  ['06:50 – 07:30 AM', 'Arrive at Sanur Port', 'Arrive at Sanur port and register the boat ticket.'],
  ['07:30 – 08:30 AM', 'Fast Boat to Nusa Penida', 'Fast boat crossing from Sanur to Nusa Penida.'],
  ['08:30 AM', 'Arrive at Nusa Penida Port', 'Meet your private driver and begin exploring Nusa Penida.'],
  ['08:30 – 09:15 AM', 'Visit Kelingking Beach', 'Travel to Kelingking Beach.'],
  ['09:15 – 10:00 AM', '📍 Explore Kelingking Beach', 'Enjoy the iconic T-Rex cliff and spectacular ocean views.'],
  ['10:00 – 10:15 AM', 'Visit Paluang Cliff', 'Continue to Paluang Cliff.'],
  ['10:15 – 11:00 AM', '📍 Explore Paluang Cliff', 'Discover the breathtaking beauty of Paluang Cliff.'],
  ['11:00 – 11:50 AM', 'Visit Restaurant / Amarta Penida Gate', 'Continue to Amarta Penida.'],
  ['11:50 AM – 01:20 PM', '🍽️ Lunch at Amarta Penida — LUNCH WITH A VIEW', 'Enjoy lunch with breathtaking ocean views, a stunning infinity pool, the iconic Gate of Heaven, and panoramic views of Mount Agung.'],
  ['01:20 – 01:45 PM', 'Visit the Harbour to Prepare for Snorkeling', 'Head to the harbour for the next part of your adventure.'],
  ['01:45 – 02:00 PM', 'Get Ready for Snorkeling', 'Prepare for your snorkeling adventure. The boat departs directly from the harbour and returns to the same spot.'],
  ['02:00 – 04:00 PM', '🤿 Snorkeling Trip', 'Explore Manta Bay, Crystal Bay, Gamat Bay, and Wall Point. Discover colorful coral, tropical fish, and, depending on conditions, manta rays.'],
  ['04:00 – 04:10 PM', 'Return from Snorkeling Trip', 'Freshen up with a shower and get ready for the journey back to Nusa Penida Harbour.'],
  ['04:10 – 04:20 PM', '🚗 Return to Nusa Penida Port', 'Transfer back to Nusa Penida port.'],
  ['04:20 – 04:30 PM', 'Arrive at Nusa Penida Port', 'Register the boat ticket.'],
  ['04:30 – 05:10 PM', 'Return to Sanur Harbour', 'Fast boat from Nusa Penida to Sanur Harbour.'],
  ['05:10 PM', 'Hotel Drop-Off in Bali', 'Private transfer back to your hotel in Bali.'],
  ['🏁', 'TOUR ENDS', 'Thank you for exploring Nusa Penida with Green Tours Penida.']
];
const PRIVATE_SNORKEL_LAND_INCLUDES = [
  'Hotel pick-up & drop-off in Bali (private car)',
  'Return fast boat tickets Sanur to Nusa Penida',
  'Private car & driver in Nusa Penida',
  'Entrance tickets to tourist attractions',
  'Lunch at Amarta Penida',
  'Mineral water',
  'Fuel',
  'All transportation during the tour',
  'Snorkeling spots',
  'Snorkeling equipment',
  'Underwater GoPro photos & videos',
  'Towel',
  'Professional snorkeling boat crew',
  'Private snorkeling boat',
  'Professional snorkeling guide',
  'Safety equipment for snorkeling'
];
const PRIVATE_SNORKEL_LAND_ITINERARY = [
  ['06:15 AM', 'Hotel Pick-Up in Bali', 'Our driver will pick you up from your hotel in Bali and take you directly to Sanur Harbour.'],
  ['07:00 AM', 'Sanur Harbour', 'Arrive at Sanur Harbour, check in and register your fast boat ticket, then prepare for departure to Nusa Penida.'],
  ['07:30 AM', 'Fast Boat to Nusa Penida', 'Enjoy the fast boat journey from Sanur to Nusa Penida.'],
  ['08:40 AM', 'Arrive in Nusa Penida', 'Upon arrival, your private driver will meet you at the harbour and assist you with the next part of your journey. Your snorkeling guide will prepare your equipment and assist you before the trip.'],
  ['08:40 AM – 12:00 PM', '🤿 NUSA PENIDA SNORKELING TRIP', 'Start your adventure with a snorkeling trip around the beautiful waters of Nusa Penida.'],
  ['📍', 'Snorkeling Spots', 'Manta Bay • Crystal Bay Beach • Gamat Bay • Wall Point. Snorkeling spots may change depending on sea and weather conditions.'],
  ['12:15 – 01:30 PM', '🍽️ Lunch at Amarta Penida', 'Enjoy lunch at Amarta Penida, a beautiful cliffside restaurant with breathtaking ocean views, infinity pool, Gate of Heaven, and views toward Mount Agung.'],
  ['01:20 – 03:50 PM', 'WEST NUSA PENIDA TOUR', 'Continue your journey by private car to explore the iconic West side of Nusa Penida.'],
  ['📍', 'Kelingking Beach', 'Enjoy the iconic T-Rex viewpoint and spectacular ocean views.'],
  ['📍', 'Broken Beach', 'Discover the iconic coastal archway with breathtaking ocean views.'],
  ['📍', 'Angel’s Billabong', 'Admire the natural infinity pool surrounded by dramatic cliffs.'],
  ['03:50 – 04:20 PM', '🚗 Return to Nusa Penida Port', 'Your private driver will take you back to the port and assist you with your fast boat ticket and check-in. Check your belongings and prepare for the return journey.'],
  ['04:20 – 05:10 PM', '🚤 Fast Boat: Nusa Penida to Sanur Port', 'Enjoy the fast boat journey back to Bali.'],
  ['05:10 – 06:00 PM', '🚗 Sanur to Hotel in Bali', 'Our driver will pick you up at Sanur Port and take you back to your hotel in Bali.'],
  ['🏁', 'TOUR ENDS', 'Thank you for exploring Nusa Penida with Green Tours Penida.']
];
const TWO_DAY_INCLUDES = [
  '🚗 Transportation:',
  'Bali hotel pick-up',
  'Bali hotel drop-off',
  'Private transfer to Sanur Harbour',
  'Fast boat tickets Bali to Nusa Penida',
  'Private transportation in Nusa Penida',
  'Private driver',
  'Fuel',
  'Parking fees',
  '🤿 Snorkeling:',
  'Snorkeling trip',
  'Sharing snorkeling boat',
  'Snorkeling equipment',
  'Life jacket',
  'Drinking water',
  'Towel',
  'GoPro',
  '🏨 Accommodation:',
  '1 night hotel accommodation in Nusa Penida',
  'Breakfast',
  '🍽️ Meals:',
  'Lunch Day 1',
  'Lunch Day 2',
  'Dinner',
  '🎫 Entrance & Other Fees:',
  'Entrance tickets to listed destinations',
  'Parking fees',
  'Fast boat ticket',
  'All applicable local fees'
];
const TWO_DAY_ITINERARY = [
  ['DAY 1', '🤿 SNORKELING + WEST NUSA PENIDA', 'Begin your two-day Nusa Penida adventure.'],
  ['06:00 – 06:30 AM', 'Hotel Pick-Up in Bali', 'Our driver will pick you up from your hotel in Bali and take you directly to Sanur Harbour.'],
  ['06:30 – 07:00 AM', 'Sanur Harbour', 'Arrive at Sanur Harbour, check in and register your fast boat ticket, then prepare for departure to Nusa Penida.'],
  ['07:00 – 07:30 AM', 'Fast Boat to Nusa Penida', 'Enjoy the fast boat journey from Sanur to Nusa Penida.'],
  ['08:15 – 08:30 AM', 'Arrive in Nusa Penida', 'Upon arrival, your private driver will meet you at the harbour and assist you with the next part of your journey.'],
  ['08:30 AM – 12:00 PM', '🤿 NUSA PENIDA SNORKELING TRIP', 'Start your adventure with a snorkeling trip around the beautiful waters of Nusa Penida.'],
  ['🐠', 'Manta Bay', 'Experience the incredible underwater world and, when conditions allow, the chance to see manta rays.'],
  ['🌊', 'Gamat Bay', 'Enjoy clear water, colorful coral, and tropical marine life.'],
  ['🐠', 'Wall Point', 'Explore beautiful coral reefs and colorful fish.'],
  ['NOTE', 'Snorkeling Locations', 'Snorkeling locations may be adjusted depending on sea conditions, weather, safety, and local operator recommendations.'],
  ['12:00 – 01:00 PM', '🍽️ Lunch at AMARTA PENIDA', 'After snorkeling, enjoy a delicious lunch at Amarta Penida.'],
  ['01:00 – 05:00 PM', '🌊 WEST NUSA PENIDA TOUR', 'Continue your journey by private car to explore the iconic West side of Nusa Penida.'],
  ['📍', 'Kelingking Beach', 'Enjoy the famous T-Rex-shaped cliff and spectacular ocean views.'],
  ['📍', 'Broken Beach', 'Discover the unique natural rock formation with a beautiful turquoise lagoon.'],
  ['📍', 'Angel’s Billabong', 'Admire the natural infinity pool surrounded by dramatic cliffs and ocean views.'],
  ['05:00 – 05:30 PM', 'Hotel Check-In', 'Transfer to your hotel and complete check-in.'],
  ['🍽️', 'Dinner at Restaurant / Hotel', 'Take some time to relax and freshen up after a full day of adventure.'],
  ['🌙', 'Evening – Free Time', 'Enjoy your evening at your own leisure.'],
  ['🏨', 'Overnight: Nusa Penida', ''],
  ['DAY 2', '💎 EAST NUSA PENIDA TOUR', 'Continue your journey through the beautiful east side of Nusa Penida.'],
  ['07:00 – 07:30 AM', 'Breakfast', 'Enjoy breakfast at the hotel.'],
  ['07:30 – 08:00 AM', 'Check-Out', 'Check out from the hotel and prepare for your East Nusa Penida adventure.'],
  ['08:00 – 09:30 AM', '🌴 Thousand Islands / Raja Lima', 'Visit one of the most spectacular viewpoints in East Nusa Penida. Enjoy panoramic views of the ocean, cliffs, and small islands. Perfect for photos and enjoying the scenery.'],
  ['09:30 – 10:30 AM', '🌳 Molenteng Tree House', 'Visit the famous traditional tree house overlooking the spectacular coastline. Take your time to enjoy the views and capture memorable photos.'],
  ['10:30 AM – 12:00 PM', '💎 Diamond Beach', 'Enjoy the dramatic cliffs, white sand, turquoise water, and iconic Diamond Beach viewpoint.'],
  ['12:00 – 01:00 PM', '🏖️ Atuh Beach', 'Continue to Atuh Beach and enjoy the beautiful coastal scenery.'],
  ['01:00 – 02:00 PM', '🍽️ Lunch', 'Enjoy lunch at a local restaurant before continuing the journey.'],
  ['03:00 – 04:00 PM', '🚗 Return to Nusa Penida Harbour', 'Your private driver will take you back to the harbour. Check your belongings, prepare your fast boat ticket, and check in for the return journey.'],
  ['04:00 – 04:45 PM', '🚤 Fast Boat: Nusa Penida → Sanur Harbour', 'Enjoy your return fast boat journey to Bali.'],
  ['05:00 – 06:00 PM', '🚗 Sanur → Bali Hotel', 'Our driver will meet you at Sanur Harbour and transfer you back to your hotel in Bali.'],
  ['🏁', 'TOUR ENDS', 'Thank you for exploring Nusa Penida with Green Tours Penida. 🌴']
];
const MIX_ITINERARY = [
  ['06:10 – 06:40', 'Hotel Pick-Up in Bali', 'Private pick-up from your hotel and transfer to Sanur Port.'],
  ['06:40 – 07:00', 'Arrive at Sanur Port', 'Arrive at Sanur port and register the boat ticket.'],
  ['07:00 – 07:30', 'Fast Boat to Nusa Penida', 'Fast boat crossing from Sanur to Nusa Penida.'],
  ['08:20 – 08:30', 'Arrive at Nusa Penida Port', 'Meet your private driver and begin exploring Nusa Penida.'],
  ['08:30 – 09:30', 'Visit Diamond Beach', 'Travel to Diamond Beach and Atuh Beach.'],
  ['09:30 – 10:30', 'Explore Diamond Beach & Atuh Beach', 'Admire the dramatic cliffs, white sand beach, and stunning ocean views.'],
  ['10:30 – 10:40', 'Visit Tree House', 'Continue to the Molenteng Tree House.'],
  ['10:40 – 11:40', 'Explore Molenteng Tree House', 'Enjoy panoramic views of the coastline and surrounding islands.'],
  ['11:40 – 12:30', 'Visit Restaurant for Lunch', 'Stop at a local restaurant.'],
  ['12:30 – 01:20', 'Lunch', 'Enjoy a local restaurant and lunch.'],
  ['01:20 – 01:20', 'Visit Kelingking Beach', 'Continue to Kelingking Beach.'],
  ['01:20 – 02:05', 'Explore Kelingking Beach', 'Enjoy the iconic T-Rex cliff and spectacular ocean views.'],
  ['02:05 – 02:35', "Visit Broken Beach & Angel's Billabong", 'Continue to the famous west-coast viewpoints.'],
  ['02:35 – 03:35', "Explore Broken Beach & Angel’s Billabong", 'Discover the famous natural rock formation and turquoise lagoon.'],
  ['03:35 – 04:20', 'Return to Nusa Penida Port', 'Transfer back to Nusa Penida port.'],
  ['04:20 – 04:30', 'Arrive at Nusa Penida Port', 'Register the return boat ticket.'],
  ['04:30 – 05:30', 'Return to Sanur Harbor', 'Fast boat from Nusa Penida back to Sanur Harbor.'],
  ['05:30 – 06:00', 'Hotel Drop-Off in Bali', 'Arrive at Sanur Harbor and enjoy a private transfer back to your hotel in Bali.'],
  ['🏁', 'TOUR ENDS', '']
];
const EAST_ITINERARY = [
  ['06:10 – 06:50 AM', 'Hotel Pick-Up in Bali', 'Private pick-up from your hotel and transfer to Sanur Port.'],
  ['06:50 – 07:30 AM', 'Arrive at Sanur Port', 'Arrive at Sanur port and register the boat ticket.'],
  ['07:30 – 08:50 AM', 'Fast Boat to Nusa Penida', 'Fast boat crossing from Sanur to Nusa Penida.'],
  ['08:50 AM', 'Arrive at Nusa Penida Port', 'Meet your private driver and begin exploring Nusa Penida.'],
  ['08:50 – 09:50 AM', 'Visit Diamond Beach & Atuh Beach', 'Travel to Diamond Beach and Atuh Beach.'],
  ['09:50 AM – 12:00 PM', 'Explore Diamond Beach & Atuh Beach', 'Admire the dramatic cliffs, white sand beach, and stunning ocean views. Swimming is possible.'],
  ['12:00 – 12:10 PM', 'Visit Restaurant for Lunch', 'Stop at a local restaurant.'],
  ['12:10 – 01:20 PM', 'Lunch', 'Enjoy a local restaurant and lunch.'],
  ['01:20 – 01:30 PM', 'Visit Molenteng Tree House & Thousand Islands', 'Continue to the Molenteng Tree House and Thousand Islands viewpoint.'],
  ['01:30 – 02:50 PM', 'Explore Molenteng Tree House', 'Enjoy panoramic views of the coastline and surrounding islands.'],
  ['02:50 – 03:50 PM', 'Return to Nusa Penida Port', 'Transfer back to Nusa Penida port.'],
  ['03:50 – 04:30 PM', 'Arrive at Nusa Penida Port', 'Register the return boat ticket.'],
  ['04:30 – 05:15 PM', 'Return to Sanur Harbor', 'Fast boat from Nusa Penida back to Sanur Harbor.'],
  ['05:15 PM', 'Hotel Drop-Off in Bali', 'Arrive at Sanur Harbor and enjoy a private transfer back to your hotel in Bali.'],
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

const SNORKEL_DESTINATION_PHOTOS = [
  { src: 'assets/manta-snorkeling.webp', alt: 'Snorkeler swimming above manta rays in Nusa Penida', caption: 'Manta snorkeling' },
  { src: 'assets/manta-guest.webp', alt: 'Guest snorkeling alongside a manta ray in Nusa Penida', caption: 'Manta Point' },
  { src: 'assets/turtle-snorkeling-guest.webp', alt: 'Guest snorkeling with a sea turtle above a coral reef in Nusa Penida', caption: 'Turtle snorkeling' },
  { src: 'assets/snorkeling-boat-vanora.webp', alt: 'Snorkeling boat on the clear waters of Nusa Penida', caption: 'Snorkeling boat' }
];

window.GREEN_TOURS_CONTENT = {
  whatsappNumber: '6283894497992',
  packages: {
    west: { kicker: 'Island highlights', title: 'West tour<br><i>meets the blue.</i>', number: '01', description: 'See the iconic west side of Nusa Penida, from dramatic cliffs and hidden coves to unforgettable ocean views.', time: 'One day trip', price: 'All inclusive', size: '2–5 guests', heroTitle: 'Go west,<br><i>feel more.</i>', heroDescription: 'Kelingking cliffs, hidden coves, and a full day discovering the wild west coast of Nusa Penida.', heroImage: 'assets/manta-penida.webp', heroAlt: 'Manta ray and diver in the blue waters of Nusa Penida', destinations: "Kelingking • Broken Beach • Angel's Billabong • Crystal Beach", destinationPhotos: [{ src: 'assets/kelingking-penida.webp', alt: 'Kelingking Beach, Nusa Penida', caption: 'Kelingking Beach' }, { src: 'assets/broken-beach-guest.webp', alt: 'Guest at Broken Beach in Nusa Penida', caption: 'Broken Beach' }, { src: 'assets/angels-billabong-guest.webp', alt: "Natural pool at Angel's Billabong in Nusa Penida", caption: "Angel's Billabong" }, { src: 'assets/west-beach-guest.webp', alt: 'Clear turquoise beach on the west coast of Nusa Penida', caption: 'West coast beach' }], rates: [['2 Persons', 'IDR 950,000 / person'], ['3 Persons', 'IDR 850,000 / person'], ['4 Persons', 'IDR 800,000 / person'], ['5 Persons', 'IDR 750,000 / person']], message: 'West tour' },
    east: { itinerary: EAST_ITINERARY, destinations: 'Diamond Beach • Atuh Beach • Tree House • Thousand Islands', destinationPhotos: [{ src: 'assets/gallery-04.webp', alt: 'Catamaran in open water', caption: 'Open water journey' }, { src: 'assets/tree-house-thousand-islands.webp', alt: 'Tree House overlooking Thousand Islands in Nusa Penida', caption: 'Tree House and Thousand Islands' }, { src: 'assets/thousand-islands-couple.webp', alt: 'Couple enjoying the Thousand Islands viewpoint in Nusa Penida', caption: 'Thousand Islands viewpoint' }, { src: 'assets/east-coast-arch-beach.webp', alt: 'Turquoise beach and natural rock arch on the east coast of Nusa Penida', caption: 'East coast beach' }], kicker: 'Wild east coast', title: 'East tour<br><i>goes further.</i>', number: '02', description: 'A full day of striking coastlines, bright water, and the island’s quieter eastern corners.', time: 'One day trip', price: 'All inclusive', size: '2–5 guests', heroTitle: 'Go east,<br><i>find wonder.</i>', heroDescription: 'Follow the dramatic east coast, turquoise coves, and unforgettable viewpoints of Nusa Penida.', heroImage: 'assets/east-tour-hero.webp', heroAlt: 'Traveller overlooking the cliffs and turquoise coastline of Nusa Penida', rates: [['2 Persons', 'IDR 950,000 / person'], ['3 Persons', 'IDR 850,000 / person'], ['4 Persons', 'IDR 800,000 / person'], ['5 Persons', 'IDR 750,000 / person']], message: 'East tour' },
    mix: { itinerary: MIX_ITINERARY, destinations: "Kelingking Beach • Broken Beach & Angel's Billabong • Diamond Beach & Atuh Beach • Tree House", destinationPhotos: [{ src: 'assets/kelingking-penida.webp', alt: 'Kelingking Beach, Nusa Penida', caption: 'Kelingking Beach' }, { src: 'assets/gallery-04.webp', alt: 'Catamaran in open water', caption: 'Open water journey' }, { src: 'assets/broken-beach-guest.webp', alt: 'Guest at Broken Beach in Nusa Penida', caption: 'Broken Beach' }, { src: 'assets/angels-billabong-guest.webp', alt: "Natural pool at Angel's Billabong in Nusa Penida", caption: "Angel's Billabong" }, { src: 'assets/tree-house-thousand-islands.webp', alt: 'Tree House overlooking Thousand Islands in Nusa Penida', caption: 'Tree House and Thousand Islands' }, { src: 'assets/thousand-islands-couple.webp', alt: 'Couple enjoying the Thousand Islands viewpoint in Nusa Penida', caption: 'Thousand Islands viewpoint' }, { src: 'assets/east-coast-arch-beach.webp', alt: 'Turquoise beach and natural rock arch on the east coast of Nusa Penida', caption: 'East coast beach' }], kicker: 'Best of both sides', title: 'Mix tour<br><i>your way.</i>', number: '03', description: 'Combine the highlights of west and east Penida for one memorable island day with the best of both routes.', time: 'Flexible · 8 hours', price: 'All inclusive', size: '2–5 guests', heroImage: 'assets/kelingking-penida.webp', heroAlt: 'Visitors overlooking the green cliffs and beach of Kelingking, Nusa Penida', rates: [['2 Persons', 'IDR 1.050,000 / person'], ['3 Persons', 'IDR 950,000 / person'], ['4 Persons', 'IDR 875,000 / person'], ['5 Persons', 'IDR 800,000 / person']], message: 'Mix tour' },
    snorkelland: { itinerary: SNORKEL_LAND_ITINERARY, includes: SNORKEL_LAND_INCLUDES, destinations: "Kelingking Beach • Paluang Cliff • Amarta Gate • Manta Bay • Crystal Bay • Gamat Bay • Wall Point", destinationPhotos: [{ src: 'assets/kelingking-penida.webp', alt: 'Kelingking Beach, Nusa Penida', caption: 'Kelingking Beach' }, { src: 'assets/kelingking-viewpoint.webp', alt: 'Kelingking viewpoint above the blue ocean', caption: 'Kelingking viewpoint' }, { src: 'assets/amarta-pool-ocean-view.webp', alt: 'Infinity pool and ocean view at Amarta Penida', caption: 'Pool with ocean view' }, ...SNORKEL_DESTINATION_PHOTOS], kicker: 'Sea meets shore', title: 'Snorkeling &<br><i>Land tour.</i>', number: '04', description: 'Split the day between clear-water snorkeling and the viewpoints, beaches, and landscapes that make Penida famous.', time: '07:00 — 16:00', price: 'All inclusive', size: '2–5 guests', heroImage: 'assets/manta-snorkeling.webp', heroAlt: 'Snorkeler swimming above manta rays in Nusa Penida', rates: [['2 Persons', 'IDR 1.275.000 / person'], ['3 Persons', 'IDR 1.045.000 / person'], ['4 Persons', 'IDR 915.000 / person'], ['5 Persons', 'IDR 830.000 / person']], message: 'Snorkeling & Land tour' },
    privatesnorkelland: { itinerary: PRIVATE_SNORKEL_LAND_ITINERARY, includes: PRIVATE_SNORKEL_LAND_INCLUDES, destinations: "Kelingking Beach • Broken Beach • Angel's Billabong • Manta Bay • Crystal Bay • Gamat Bay • Wall Point", destinationPhotos: [{ src: 'assets/kelingking-penida.webp', alt: 'Kelingking Beach, Nusa Penida', caption: 'Kelingking Beach' }, { src: 'assets/broken-beach-guest.webp', alt: 'Guest at Broken Beach in Nusa Penida', caption: 'Broken Beach' }, { src: 'assets/angels-billabong-guest.webp', alt: "Natural pool at Angel's Billabong in Nusa Penida", caption: "Angel's Billabong" }, { src: 'assets/amarta-pool-ocean-view.webp', alt: 'Infinity pool and ocean view at Amarta Penida', caption: 'Pool with ocean view' }, ...SNORKEL_DESTINATION_PHOTOS], kicker: 'Made for your crew', title: 'Private snorkeling<br><i>& Land tour.</i>', number: '05', description: 'A private boat and island adventure with a route shaped around your group, your pace, and your favourite places.', time: 'Flexible · 8 hours', price: 'All inclusive', size: '2–5 guests', heroImage: 'assets/manta-snorkeling.webp', heroAlt: 'Private snorkeling experience above manta rays in Nusa Penida', rates: [['2 Persons', 'IDR 1.875.000 / person'], ['3 Persons', 'IDR 1.380.000 / person'], ['4 Persons', 'IDR 1.135.000 / person'], ['5 Persons', 'IDR 990.000 / person']], message: 'Private snorkeling & Land tour' },
    twoDay: { itinerary: TWO_DAY_ITINERARY, includes: TWO_DAY_INCLUDES, destinations: "Day 1 — Manta Bay • Crystal Bay • Gamat Bay • Wall Point • Kelingking Beach • Broken Beach • Angel's Billabong\nDay 2 — Diamond Beach • Atuh Beach • Tree House • Thousand Islands", destinationPhotos: [{ src: 'assets/kelingking-penida.webp', alt: 'Kelingking Beach, Nusa Penida', caption: 'Kelingking Beach' }, { src: 'assets/gallery-04.webp', alt: 'Catamaran in open water', caption: 'Open water journey' }, { src: 'assets/broken-beach-guest.webp', alt: 'Guest at Broken Beach in Nusa Penida', caption: 'Broken Beach' }, { src: 'assets/angels-billabong-guest.webp', alt: "Natural pool at Angel's Billabong in Nusa Penida", caption: "Angel's Billabong" }, { src: 'assets/tree-house-thousand-islands.webp', alt: 'Tree House overlooking Thousand Islands in Nusa Penida', caption: 'Tree House and Thousand Islands' }, { src: 'assets/thousand-islands-couple.webp', alt: 'Couple enjoying the Thousand Islands viewpoint in Nusa Penida', caption: 'Thousand Islands viewpoint' }, { src: 'assets/east-coast-arch-beach.webp', alt: 'Turquoise beach and natural rock arch on the east coast of Nusa Penida', caption: 'East coast beach' }, { src: 'assets/amarta-pool-ocean-view.webp', alt: 'Infinity pool and ocean view at Amarta Penida', caption: 'Pool with ocean view' }, ...SNORKEL_DESTINATION_PHOTOS], kicker: 'Stay a little longer', title: '2Day 1Night<br><i>in Penida.</i>', number: '06', description: 'Take the scenic route without rushing: two days of sea, land, sunsets, and a night on the island.', time: '2 days · 1 night', price: 'All inclusive', size: '2–5 guests', heroImage: 'assets/kelingking-viewpoint.webp', heroAlt: 'Visitor enjoying a Kelingking viewpoint in Nusa Penida', rates: [['2 Persons', 'IDR 1.850.000 / person'], ['3 Persons', 'IDR 1.700.000 / person'], ['4 Persons', 'IDR 1.550.000 / person'], ['5 Persons', 'IDR 1.400.000 / person']], message: '2Day 1Night' },
    manta: { kicker: 'Meet the giants', title: 'Manta point<br><i>snorkeling.</i>', number: '07', description: 'Swim through the deep blue at Manta Point and experience one of Penida’s most unforgettable encounters.', time: '5 hours', price: 'All inclusive', destinationPhotos: SNORKEL_DESTINATION_PHOTOS, snorkeling: { includes: SNORKELING_INCLUDES, itinerary: MANTA_POINT_ITINERARY, notes: SNORKELING_NOTES }, destinations: 'Manta Point • Gamat Bay • Wall Point', size: '2–8 guests', heroImage: 'assets/manta-snorkeling.webp', heroAlt: 'Manta point snorkeling in Nusa Penida', rates: [['1–4 people', 'IDR 2.950.000'], ['5–8 people', 'IDR 3.100.000']], rateUnit: 'This price for one boat', message: 'Manta point snorkeling' },
    matabay: { kicker: 'Bright water, big life', title: 'Manta bay<br><i>snorkeling.</i>', number: '08', description: 'Discover the clear, colourful water of Manta Bay with time to snorkel, float, and take it all in.', time: '5 hours', price: 'All inclusive', destinationPhotos: SNORKEL_DESTINATION_PHOTOS, snorkeling: { includes: SNORKELING_INCLUDES, itinerary: MANTA_BAY_ITINERARY, notes: SNORKELING_NOTES }, destinations: 'Manta Bay • Crystal Bay • Gamat Bay • Wall Point', size: 'Up to 12', heroImage: 'assets/manta-snorkeling.webp', heroAlt: 'Manta Bay snorkeling in Nusa Penida', rates: [['1–4 people', 'IDR 1.850.000'], ['5–8 people', 'IDR 1.950.000']], rateUnit: 'This price for one boat', message: 'Manta bay snorkeling' }
  }
};
