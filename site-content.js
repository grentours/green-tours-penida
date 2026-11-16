/* QUICK EDIT FILE — edit values here to update the WhatsApp number and package details. */
const SNORKELING_INCLUDES = [
  'Private snorkeling boat', 'Snorkeling equipment', 'Life jacket', 'Fins & mask',
  'Snorkeling guide & boat crew', 'Mineral water', 'Safety equipment',
  'Shower & changing facilities', 'GoPro', 'Towel'
];
const SNORKELING_NOTES = [
  'Meeting point: Beach Club', 'Meeting time: From 9:00 AM',
  'This package includes a private boat exclusively for your group.',
  'For your safety, snorkeling locations may change depending on weather and sea conditions.',
  'Manta sightings cannot be guaranteed, as manta rays are wild animals.'
];
const MANTA_BAY_ITINERARY = [
  ['09:00 AM', 'Meet at Beach Club', 'Meet our team and get ready for your snorkeling trip.'],
  ['09:30 AM', 'Depart by Private Boat', 'Begin your snorkeling adventure aboard our private boat. Explore Manta Bay, Crystal Bay, Gamat Bay & Wall Point.'],
  ['01', '🐠 Manta Bay', 'Look out for graceful manta rays and enjoy unforgettable encounters with Nusa Penida’s marine life.'],
  ['02', '💎 Crystal Bay', 'Explore crystal-clear waters, colorful coral reefs, and vibrant tropical fish.'],
  ['03', '🐢 Gamat Bay', 'Explore beautiful coral reefs, colorful tropical fish, and crystal-clear waters.'],
  ['04', '🌊 Wall Point', 'Admire underwater reefs, colorful fish, coral formations, and brilliant blue waters.'],
  ['12:30 PM', 'Return to Beach Club & rinse off at the entrance', ''],
  ['12:50 PM', 'Free Time', ''],
  ['🏁', 'TOUR ENDS', '']
];
const SNORKEL_LAND_INCLUDES = [
  'Hotel pick-up & drop-off in Bali',
  'Private transportation in Bali',
  'Round-trip fast boat tickets Bali–Nusa Penida',
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
  'Professional boat crew & snorkeling guide',
  'Snorkeling safety equipment',
  'Shared snorkeling boat'
];
const SNORKEL_LAND_ITINERARY = [
  ['LAND TOUR', 'Kelingking Beach • Paluang Cliff • Amarta Penida Gate', 'Explore iconic viewpoints before continuing your snorkeling adventure.'],
  ['06:10 – 06:50 AM', '🏨 Hotel Pick-Up in Bali', 'Private pick-up from your hotel and transfer to Sanur Port.'],
  ['06:50 – 07:30 AM', 'Arrive at Sanur Port', 'Arrive at Sanur Port and register your boat ticket.'],
  ['07:30 – 08:30 AM', 'Fast Boat to Nusa Penida', 'Cross from Sanur to Nusa Penida by fast boat.'],
  ['08:30 AM', 'Arrive at Nusa Penida Port', 'Meet your private driver and begin exploring Nusa Penida.'],
  ['08:30 – 09:15 AM', 'Visit Kelingking Beach', 'Travel to Kelingking Beach.'],
  ['09:15 – 10:00 AM', '📍 Explore Kelingking Beach', 'Admire the iconic T-Rex-shaped cliffs and breathtaking ocean views.'],
  ['10:00 – 10:15 AM', 'Visit Paluang Cliff', 'Continue to Paluang Cliff.'],
  ['10:15 – 11:00 AM', '📍 Explore Paluang Cliff', 'Discover the captivating beauty of Paluang Cliff.'],
  ['11:00 – 11:50 AM', 'Visit Restaurant / Amarta Penida Gate', 'Continue to Amarta Penida.'],
  ['11:50 AM – 01:20 PM', '🍽️ Lunch at Amarta Penida — LUNCH WITH A VIEW', 'Enjoy lunch with stunning ocean panoramas, a beautiful infinity pool, the iconic Gate of Heaven, and views of Gunung Agung.'],
  ['01:20 – 01:45 PM', 'Head to the Port to Prepare for Snorkeling', 'Head to the port to continue your adventure.'],
  ['01:45 – 02:00 PM', 'Prepare for Snorkeling', 'Get ready for your snorkeling adventure. The boat departs directly from the port and returns to the same location.'],
  ['02:00 – 04:00 PM', '🤿 Snorkeling Trip', 'Explore Manta Bay, Crystal Bay, Gamat Bay, and Wall Point. Discover colorful corals, tropical fish, and manta rays if conditions allow.'],
  ['04:00 – 04:10 PM', 'Return from Snorkeling', 'Freshen up with a shower and get ready to return to Nusa Penida Port.'],
  ['04:10 – 04:20 PM', '🚗 Return to Nusa Penida Port', 'Transfer back to Nusa Penida Port.'],
  ['04:20 – 04:30 PM', 'Arrive at Nusa Penida Port', 'Register your boat ticket.'],
  ['04:30 – 05:10 PM', 'Return to Sanur Port', 'Take the fast boat from Nusa Penida to Sanur Port.'],
  ['05:10 PM', 'Hotel Drop-Off in Bali', 'Return to your hotel in Bali by private transfer.'],
  ['🏁', 'TOUR ENDS', 'Thank you for exploring Nusa Penida with Green Tours Penida.']
];
const PRIVATE_SNORKEL_LAND_INCLUDES = [
  'Hotel pick-up & drop-off in Bali (private car)',
  'Round-trip fast boat tickets Sanur–Nusa Penida',
  'Private car & driver in Nusa Penida',
  'Entrance tickets to tourist attractions',
  'Lunch at Amarta Penida',
  'Mineral water',
  'Fuel',
  'All transportation during the tour',
  'Snorkeling locations',
  'Snorkeling equipment',
  'Underwater GoPro photos & videos',
  'Towel',
  'Professional snorkeling boat crew',
  'Private snorkeling boat',
  'Professional snorkeling guide',
  'Snorkeling safety equipment'
];
const PRIVATE_SNORKEL_LAND_ITINERARY = [
  ['06:15 AM', 'Hotel Pick-Up in Bali', 'Our driver will pick you up from your hotel in Bali and take you directly to Sanur Port.'],
  ['07:00 AM', 'Sanur Port', 'Arrive at Sanur Port, check in and register your fast boat ticket, then get ready to depart for Nusa Penida.'],
  ['07:30 AM', 'Fast Boat to Nusa Penida', 'Enjoy the fast boat journey from Sanur to Nusa Penida.'],
  ['08:40 AM', 'Arrive in Nusa Penida', 'Upon arrival at the port, your private driver will welcome you and help you continue your journey. Your snorkeling guide will prepare the equipment and assist you before the trip.'],
  ['08:40 AM – 12:00 PM', '🤿 NUSA PENIDA SNORKELING TRIP', 'Begin your adventure with a snorkeling trip in Nusa Penida’s beautiful waters.'],
  ['📍', 'Snorkeling Locations', 'Manta Bay • Crystal Bay Beach • Gamat Bay • Wall Point. Snorkeling locations may change depending on sea and weather conditions.'],
  ['12:15 – 01:30 PM', '🍽️ Lunch at Amarta Penida', 'Enjoy lunch at Amarta Penida, a beautiful clifftop restaurant with ocean panoramas, an infinity pool, the Gate of Heaven, and views of Gunung Agung.'],
  ['01:20 – 03:50 PM', 'WEST NUSA PENIDA TOUR', 'Continue by private car to explore Nusa Penida’s iconic west coast.'],
  ['📍', 'Kelingking Beach', 'Admire the iconic T-Rex-shaped viewpoint and breathtaking ocean views.'],
  ['📍', 'Broken Beach', 'Explore the iconic coastal arch with captivating ocean views.'],
  ['📍', 'Angel’s Billabong', 'Admire a natural infinity pool framed by dramatic cliffs.'],
  ['03:50 – 04:20 PM', '🚗 Return to Nusa Penida Port', 'Your private driver will take you back to the port and assist with fast boat tickets and check-in. Check your belongings and prepare for the return journey.'],
  ['04:20 – 05:10 PM', '🚤 Fast Boat: Nusa Penida to Sanur Port', 'Enjoy the fast boat journey back to Bali.'],
  ['05:10 – 06:00 PM', '🚗 Sanur to Your Hotel in Bali', 'Our driver will pick you up at Sanur Port and take you back to your hotel in Bali.'],
  ['🏁', 'TOUR ENDS', 'Thank you for exploring Nusa Penida with Green Tours Penida.']
];
const TWO_DAY_INCLUDES = [
  '🚗 Transportation:',
  'Hotel pick-up in Bali',
  'Hotel drop-off in Bali',
  'Private round-trip transfers to Sanur Port',
  'Fast boat tickets Bali–Nusa Penida',
  'Private transportation in Nusa Penida',
  'Private driver',
  'Fuel',
  'Parking fees',
  '🤿 Snorkeling:',
  'Snorkeling trip',
  'Shared snorkeling boat',
  'Snorkeling equipment',
  'Life jacket',
  'Drinking water',
  'Towel',
  'GoPro',
  '🏨 Accommodation:',
  '1 night of hotel accommodation in Nusa Penida',
  'Breakfast',
  '🍽️ Meals:',
  'Lunch on day 1',
  'Lunch on day 2',
  'Dinner',
  '🎫 Entrance Tickets & Other Fees:',
  'Entrance tickets to the listed destinations',
  'Parking fees',
  'Fast boat tickets',
  'All applicable local fees'
];
const TWO_DAY_ITINERARY = [
  ['DAY 1', '🤿 SNORKELING + WEST NUSA PENIDA', 'Begin your two-day adventure in Nusa Penida.'],
  ['06:00 – 06:30 AM', 'Hotel Pick-Up in Bali', 'Our driver will pick you up from your hotel in Bali and take you directly to Sanur Port.'],
  ['06:30 – 07:00 AM', 'Sanur Port', 'Arrive at Sanur Port, check in and register your fast boat ticket, then get ready to depart for Nusa Penida.'],
  ['07:00 – 07:30 AM', 'Fast Boat to Nusa Penida', 'Enjoy the fast boat journey from Sanur to Nusa Penida.'],
  ['08:15 – 08:30 AM', 'Arrive in Nusa Penida', 'Upon arrival at the port, your private driver will welcome you and help you continue your journey.'],
  ['08:30 AM – 12:00 PM', '🤿 NUSA PENIDA SNORKELING TRIP', 'Begin your adventure with a snorkeling trip in Nusa Penida’s beautiful waters.'],
  ['🐠', 'Manta Bay', 'Experience the beauty of the underwater world and, if conditions allow, the chance to see manta rays.'],
  ['🌊', 'Gamat Bay', 'Enjoy clear waters, colorful corals, and tropical marine life.'],
  ['🐠', 'Wall Point', 'Explore beautiful coral reefs and colorful fish.'],
  ['NOTE', 'Snorkeling Locations', 'Snorkeling locations may be adjusted based on sea conditions, weather, safety, and recommendations from the local operator.'],
  ['12:00 – 01:00 PM', '🍽️ Lunch at AMARTA PENIDA', 'After snorkeling, enjoy a delicious lunch at Amarta Penida.'],
  ['01:00 – 05:00 PM', '🌊 WEST NUSA PENIDA TOUR', 'Continue by private car to explore Nusa Penida’s iconic west coast.'],
  ['📍', 'Kelingking Beach', 'Admire the famous T-Rex-shaped cliffs and breathtaking ocean views.'],
  ['📍', 'Broken Beach', 'Explore unique natural rock formations and a beautiful turquoise lagoon.'],
  ['📍', 'Angel’s Billabong', 'Admire a natural infinity pool framed by dramatic cliffs and ocean views.'],
  ['05:00 – 05:30 PM', 'Hotel Check-In', 'Transfer to your hotel to complete check-in.'],
  ['🍽️', 'Dinner at a Restaurant / Hotel', 'Take time to rest and refresh after a full day of adventure.'],
  ['🌙', 'Evening – Free Time', 'Spend the evening as you wish.'],
  ['🏨', 'Overnight Stay: Nusa Penida', ''],
  ['DAY 2', '💎 EAST NUSA PENIDA TOUR', 'Continue your journey exploring Nusa Penida’s beautiful east coast.'],
  ['07:00 – 07:30 AM', 'Breakfast', 'Enjoy breakfast at your hotel.'],
  ['07:30 – 08:00 AM', 'Check-Out', 'Check out of your hotel and prepare for your East Nusa Penida adventure.'],
  ['08:00 – 09:30 AM', '🌴 Thousand Islands / Raja Lima', 'Visit one of East Nusa Penida’s most spectacular viewpoints. Admire panoramic views of the ocean, cliffs, and small islands. Perfect for photographs and taking in the scenery.'],
  ['09:30 – 10:30 AM', '🌳 Molenteng Tree House', 'Visit the traditional tree house renowned for its spectacular coastal views. Take time to enjoy the panorama and capture the moment.'],
  ['10:30 AM – 12:00 PM', '💎 Diamond Beach', 'Admire dramatic cliffs, white sands, turquoise waters, and the iconic Diamond Beach viewpoint.'],
  ['12:00 – 01:00 PM', '🏖️ Atuh Beach', 'Continue to Atuh Beach and enjoy the beautiful coastal scenery.'],
  ['01:00 – 02:00 PM', '🍽️ Lunch', 'Enjoy lunch at a local restaurant before continuing your journey.'],
  ['03:00 – 04:00 PM', '🚗 Return to Nusa Penida Port', 'Your private driver will take you back to the port. Check your belongings, prepare your fast boat ticket, and check in for the return journey.'],
  ['04:00 – 04:45 PM', '🚤 Fast Boat: Nusa Penida → Sanur Port', 'Enjoy the fast boat journey back to Bali.'],
  ['05:00 – 06:00 PM', '🚗 Sanur → Your Hotel in Bali', 'Our driver will meet you at Sanur Port and take you back to your hotel in Bali.'],
  ['🏁', 'TOUR ENDS', 'Thank you for exploring Nusa Penida with Green Tours Penida. 🌴']
];
const MIX_ITINERARY = [
  ['06:10 – 06:40', 'Hotel Pick-Up in Bali', 'Private pick-up from your hotel and transfer to Sanur Port.'],
  ['06:40 – 07:00', 'Arrive at Sanur Port', 'Arrive at Sanur Port and register your boat ticket.'],
  ['07:00 – 07:30', 'Fast Boat to Nusa Penida', 'Cross from Sanur to Nusa Penida by fast boat.'],
  ['08:20 – 08:30', 'Arrive at Nusa Penida Port', 'Meet your private driver and begin exploring Nusa Penida.'],
  ['08:30 – 09:30', 'Visit Diamond Beach', 'Travel to Diamond Beach and Atuh Beach.'],
  ['09:30 – 10:30', 'Explore Diamond Beach & Atuh Beach', 'Admire dramatic cliffs, white-sand beaches, and breathtaking ocean views.'],
  ['10:30 – 10:40', 'Visit Tree House', 'Continue to Molenteng Tree House.'],
  ['10:40 – 11:40', 'Explore Molenteng Tree House', 'Enjoy panoramic views of the coastline and surrounding islands.'],
  ['11:40 – 12:30', 'Head to a Restaurant for Lunch', 'Stop at a local restaurant.'],
  ['12:30 – 01:20', 'Lunch', 'Enjoy local cuisine at the restaurant.'],
  ['01:20 – 01:20', 'Visit Kelingking Beach', 'Continue to Kelingking Beach.'],
  ['01:20 – 02:05', 'Explore Kelingking Beach', 'Admire the iconic T-Rex-shaped cliffs and breathtaking ocean views.'],
  ['02:05 – 02:35', "Visit Broken Beach & Angel's Billabong", 'Continue to the renowned viewpoints on the west coast.'],
  ['02:35 – 03:35', "Explore Broken Beach & Angel’s Billabong", 'Discover the famous natural rock formations and turquoise lagoon.'],
  ['03:35 – 04:20', 'Return to Nusa Penida Port', 'Transfer back to Nusa Penida Port.'],
  ['04:20 – 04:30', 'Arrive at Nusa Penida Port', 'Register your boat ticket for the return journey.'],
  ['04:30 – 05:30', 'Return to Sanur Port', 'Take the fast boat from Nusa Penida back to Sanur Port.'],
  ['05:30 – 06:00', 'Hotel Drop-Off in Bali', 'Arrive at Sanur Port and continue by private transfer to your hotel in Bali.'],
  ['🏁', 'TOUR ENDS', '']
];
const WEST_ITINERARY = [
  ['06:10 – 06:40', '🏨 Hotel Pick-Up in Bali', 'Private pick-up from your hotel and transfer to Sanur Port.'],
  ['06:50 – 07:30', 'Arrive at Sanur port and register the boat ticket.', ''],
  ['07:30 – 08:50', 'Fast Boat to Nusa Penida', 'Fast boat crossing from Sanur to Nusa Penida.'],
  ['08:50', 'Arrive at Nusa Penida port', 'Meet your private driver and begin exploring Nusa Penida.'],
  ['08:50 – 09:35', 'Visit Kelingking Beach', ''],
  ['09:35 – 10:35', '📍 Arrive & Explore Kelingking Beach', 'Enjoy the iconic T-Rex cliff and spectacular ocean views.'],
  ['10:35 – 11:10', "Visit Broken Beach & Angel's Billabong", ''],
  ['11:10 – 12:20', '📍 Arrive & Explore Broken Beach & Angel’s Billabong', 'Discover the famous natural rock formation and turquoise lagoon.'],
  ['12:20 – 12:40', 'Visit Restaurant / Lunch', ''],
  ['12:40 – 13:50', '🍽️ Lunch', 'Enjoy a local restaurant and lunch.'],
  ['13:50 – 14:35', 'Visit Crystal Beach', ''],
  ['14:35 – 15:45', '📍 Arrive & Explore Crystal Beach', 'Relax on the beach, swim, or enjoy the crystal-clear water.'],
  ['15:45 – 16:20', '🚗 Return to Port Penida', 'Transfer back to Nusa Penida port.'],
  ['16:20 – 16:30', 'Arrive at Nusa Penida port and register the boat ticket.', ''],
  ['16:30 – 17:30', 'Return from Nusa Penida to Sanur Harbor.', ''],
  ['17:30', 'Arrive at Sanur Harbor & Hotel Drop-Off', 'Private transfer back to your hotel in Bali.']
];
const WEST_INCLUDES = [
  'Hotel pick-up & drop-off in Bali', 'Private transportation in Bali', 'Return fast boat tickets Bali to Nusa Penida',
  'Private car & driver in Nusa Penida', 'English-speaking driver', 'Entrance tickets to tourist attractions',
  'Parking & port fees', 'Lunch', 'Mineral water', 'Fuel', 'All transportation during the tour'
];
const WEST_BRING = [
  '🪪 ID / Passport', '👕 Comfortable clothes', '🩴 Comfortable sandals or shoes', '🧴 Sunscreen',
  '🕶️ Sunglasses & hat', '📱 Phone', '💵 Extra cash for personal expenses'
];
const WEST_NOTES = [
  'Please Note: The schedule may change depending on local conditions.',
  'Best Photo Spots: Our expert guide will help you capture the best moments and angles.',
  'Private Service: Enjoy a private guide and driver throughout the tour.',
  'Flexible Itinerary: Destinations and times can be adjusted upon request.',
  'All-Inclusive: Lunch, entrance fees, transportation, and other inclusions are covered—no hidden costs.'
];

const EAST_ITINERARY = [
  ['06:10 – 06:50 AM', 'Hotel Pick-Up in Bali', 'Private pick-up from your hotel and transfer to Sanur Port.'],
  ['06:50 – 07:30 AM', 'Arrive at Sanur Port', 'Arrive at Sanur Port and register your boat ticket.'],
  ['07:30 – 08:50 AM', 'Fast Boat to Nusa Penida', 'Cross from Sanur to Nusa Penida by fast boat.'],
  ['08:50 AM', 'Arrive at Nusa Penida Port', 'Meet your private driver and begin exploring Nusa Penida.'],
  ['08:50 – 09:50 AM', 'Visit Diamond Beach & Atuh Beach', 'Travel to Diamond Beach and Atuh Beach.'],
  ['09:50 AM – 12:00 PM', 'Explore Diamond Beach & Atuh Beach', 'Admire dramatic cliffs, white-sand beaches, and breathtaking ocean views. You can also swim.'],
  ['12:00 – 12:10 PM', 'Head to a Restaurant for Lunch', 'Stop at a local restaurant.'],
  ['12:10 – 01:20 PM', 'Lunch', 'Enjoy local cuisine at the restaurant.'],
  ['01:20 – 01:30 PM', 'Visit Molenteng Tree House & Thousand Islands', 'Continue to Molenteng Tree House and the Thousand Islands viewpoint.'],
  ['01:30 – 02:50 PM', 'Explore Molenteng Tree House', 'Enjoy panoramic views of the coastline and surrounding islands.'],
  ['02:50 – 03:50 PM', 'Return to Nusa Penida Port', 'Transfer back to Nusa Penida Port.'],
  ['03:50 – 04:30 PM', 'Arrive at Nusa Penida Port', 'Register your boat ticket for the return journey.'],
  ['04:30 – 05:15 PM', 'Return to Sanur Port', 'Take the fast boat from Nusa Penida back to Sanur Port.'],
  ['05:15 PM', 'Hotel Drop-Off in Bali', 'Arrive at Sanur Port and continue by private transfer to your hotel in Bali.'],
  ['🏁', 'TOUR ENDS', '']
];
const MANTA_POINT_ITINERARY = [
  ['09:00 AM', 'Meet at Beach Club', 'Meet our team and get ready for your snorkeling trip.'],
  ['09:30 AM', 'Depart by Private Boat', 'Begin your snorkeling adventure aboard our private boat. Explore Manta Point, Gamat Bay & Wall Point.'],
  ['01', 'Manta Point', 'Swim in the open sea and look out for magnificent manta rays in their natural habitat.'],
  ['02', 'Gamat Bay', 'Explore beautiful coral reefs, colorful tropical fish, and crystal-clear waters.'],
  ['03', 'Wall Point', 'Explore vibrant coral formations and marine life. If sea conditions at Wall Point are unsuitable, the boat crew will adjust the route for your safety.'],
  ['12:30 PM – 01:00 PM', 'Return to Beach Club & rinse off at the entrance', ''],
  ['12:50 PM', 'Free Time', ''],
  ['🏁', 'TOUR ENDS', '']
];

const SNORKEL_DESTINATION_PHOTOS = [
  { src: 'assets/manta-snorkeling.webp', alt: 'Snorkelers swimming above a manta ray in Nusa Penida', caption: 'Snorkeling with manta rays' },
  { src: 'assets/manta-guest.webp', alt: 'A guest snorkeling beside a manta ray in Nusa Penida', caption: 'Manta Point' },
  { src: 'assets/turtle-snorkeling-guest.webp', alt: 'A guest snorkeling with a sea turtle above a coral reef in Nusa Penida', caption: 'Snorkeling with sea turtles' },
  { src: 'assets/snorkeling-boat-vanora.webp', alt: 'A snorkeling boat in Nusa Penida’s clear waters', caption: 'Snorkeling boat' }
];

window.GREEN_TOURS_CONTENT = {
  whatsappNumber: '6283894497992',
  packages: {
    west: { itinerary: WEST_ITINERARY, includes: WEST_INCLUDES, bring: WEST_BRING, notes: WEST_NOTES, kicker: 'Island allure', title: 'West coast tour<br><i>embrace the ocean blue.</i>', number: '01', description: 'Explore Nusa Penida’s iconic west coast, from dramatic cliffs and hidden bays to unforgettable ocean panoramas.', time: 'One day', price: 'All-inclusive', size: '2–5 guests', heroTitle: 'Head west,<br><i>experience more.</i>', heroDescription: 'Kelingking’s cliffs, hidden bays, and a full day exploring Nusa Penida’s wild west coast.', heroImage: 'assets/manta-penida.webp', heroAlt: 'A manta ray and divers in Nusa Penida’s blue waters', destinations: "Kelingking • Broken Beach • Angel's Billabong • Crystal Beach", destinationPhotos: [{ src: 'assets/kelingking-penida.webp', alt: 'Kelingking Beach, Nusa Penida', caption: 'Kelingking Beach' }, { src: 'assets/broken-beach-guest.webp', alt: 'Guests at Broken Beach, Nusa Penida', caption: 'Broken Beach' }, { src: 'assets/angels-billabong-guest.webp', alt: "A natural pool at Angel's Billabong, Nusa Penida", caption: "Angel's Billabong" }, { src: 'assets/west-beach-guest.webp', alt: 'A beach with clear turquoise waters on Nusa Penida’s west coast', caption: 'West coast beach' }], rates: [['2 Persons', 'Adult: IDR 950,000 / person · Child: IDR 725,000 / person'], ['3 Persons', 'Adult: IDR 850,000 / person · Child: IDR 625,000 / person'], ['4 Persons', 'Adult: IDR 800,000 / person · Child: IDR 575,000 / person'], ['5 Persons', 'Adult: IDR 750,000 / person · Child: IDR 525,000 / person']], participantRates: [{ participants: 2, adultPrice: 950000, childPrice: 725000 }, { participants: 3, adultPrice: 850000, childPrice: 625000 }, { participants: 4, adultPrice: 800000, childPrice: 575000 }, { participants: 5, adultPrice: 750000, childPrice: 525000 }], message: 'West coast tour' },
    east: { itinerary: EAST_ITINERARY, includes: WEST_INCLUDES, bring: WEST_BRING, notes: WEST_NOTES, destinations: 'Diamond Beach • Atuh Beach • Tree House • Thousand Islands', destinationPhotos: [{ src: 'assets/gallery-04.webp', alt: 'A catamaran on the open sea', caption: 'An open-sea journey' }, { src: 'assets/tree-house-thousand-islands.webp', alt: 'Tree House overlooking Thousand Islands in Nusa Penida', caption: 'Tree House and Thousand Islands' }, { src: 'assets/thousand-islands-couple.webp', alt: 'A couple enjoying the Thousand Islands views in Nusa Penida', caption: 'Thousand Islands viewpoint' }, { src: 'assets/east-coast-arch-beach.webp', alt: 'A turquoise beach and natural rock arch on Nusa Penida’s east coast', caption: 'East coast beach' }], kicker: 'The wild east coast', title: 'East coast tour<br><i>venture further.</i>', number: '02', description: 'Spend a full day discovering stunning coastlines, clear waters, and the island’s quieter eastern corners.', time: 'One day', price: 'All-inclusive', size: '2–5 guests', heroTitle: 'Head east,<br><i>discover wonder.</i>', heroDescription: 'Explore the dramatic east coast, turquoise bays, and Nusa Penida’s unforgettable viewpoints.', heroImage: 'assets/east-tour-hero.webp', heroAlt: 'Travelers enjoying Nusa Penida’s cliffs and turquoise coastline', rates: [['2 Persons', 'Adult: IDR 950,000 / person · Child: IDR 725,000 / person'], ['3 Persons', 'Adult: IDR 850,000 / person · Child: IDR 625,000 / person'], ['4 Persons', 'Adult: IDR 800,000 / person · Child: IDR 575,000 / person'], ['5 Persons', 'Adult: IDR 750,000 / person · Child: IDR 525,000 / person']], participantRates: [{ participants: 2, adultPrice: 950000, childPrice: 725000 }, { participants: 3, adultPrice: 850000, childPrice: 625000 }, { participants: 4, adultPrice: 800000, childPrice: 575000 }, { participants: 5, adultPrice: 750000, childPrice: 525000 }], message: 'East coast tour' },
    mix: { itinerary: MIX_ITINERARY, includes: WEST_INCLUDES, bring: WEST_BRING, notes: WEST_NOTES, destinations: "Kelingking Beach • Broken Beach & Angel's Billabong • Diamond Beach & Atuh Beach • Tree House", destinationPhotos: [{ src: 'assets/kelingking-penida.webp', alt: 'Kelingking Beach, Nusa Penida', caption: 'Kelingking Beach' }, { src: 'assets/gallery-04.webp', alt: 'A catamaran on the open sea', caption: 'An open-sea journey' }, { src: 'assets/broken-beach-guest.webp', alt: 'Guests at Broken Beach, Nusa Penida', caption: 'Broken Beach' }, { src: 'assets/angels-billabong-guest.webp', alt: "A natural pool at Angel's Billabong, Nusa Penida", caption: "Angel's Billabong" }, { src: 'assets/tree-house-thousand-islands.webp', alt: 'Tree House overlooking Thousand Islands in Nusa Penida', caption: 'Tree House and Thousand Islands' }, { src: 'assets/thousand-islands-couple.webp', alt: 'A couple enjoying the Thousand Islands views in Nusa Penida', caption: 'Thousand Islands viewpoint' }, { src: 'assets/east-coast-arch-beach.webp', alt: 'A turquoise beach and natural rock arch on Nusa Penida’s east coast', caption: 'East coast beach' }], kicker: 'The best of both coasts', title: 'Combined tour<br><i>explore your way.</i>', number: '03', description: 'Combine the allure of Penida’s west and east coasts in one exceptional day, with the finest experiences from both routes.', time: 'One day', price: 'All-inclusive', size: '2–5 guests', heroImage: 'assets/kelingking-penida.webp', heroAlt: 'Visitors enjoying the green cliffs and beach at Kelingking, Nusa Penida', rates: [['2 Persons', 'Adult: IDR 1,050,000 / person · Child: IDR 825,000 / person'], ['3 Persons', 'Adult: IDR 950,000 / person · Child: IDR 725,000 / person'], ['4 Persons', 'Adult: IDR 875,000 / person · Child: IDR 650,000 / person'], ['5 Persons', 'Adult: IDR 800,000 / person · Child: IDR 575,000 / person']], participantRates: [{ participants: 2, adultPrice: 1050000, childPrice: 825000 }, { participants: 3, adultPrice: 950000, childPrice: 725000 }, { participants: 4, adultPrice: 875000, childPrice: 650000 }, { participants: 5, adultPrice: 800000, childPrice: 575000 }], message: 'Combined tour' },
    snorkelland: { itinerary: SNORKEL_LAND_ITINERARY, includes: SNORKEL_LAND_INCLUDES, bring: WEST_BRING, notes: WEST_NOTES, includes: SNORKEL_LAND_INCLUDES, destinations: "Kelingking Beach • Paluang Cliff • Amarta Gate • Manta Bay • Crystal Bay • Gamat Bay • Wall Point", destinationPhotos: [{ src: 'assets/kelingking-penida.webp', alt: 'Kelingking Beach, Nusa Penida', caption: 'Kelingking Beach' }, { src: 'assets/kelingking-viewpoint.webp', alt: 'Kelingking viewpoint above the blue sea', caption: 'Kelingking viewpoint' }, { src: 'assets/amarta-pool-ocean-view.webp', alt: 'An infinity pool and ocean views at Amarta Penida', caption: 'Ocean-view pool' }, ...SNORKEL_DESTINATION_PHOTOS], kicker: 'Where sea meets land', title: 'Snorkeling &<br><i>land tour.</i>', number: '04', description: 'Spend the day snorkeling in clear waters and exploring the viewpoints, beaches, and landscapes that make Penida so exceptional.', time: 'One day', price: 'All-inclusive', size: '2–5 guests', heroImage: 'assets/manta-snorkeling.webp', heroAlt: 'Snorkelers swimming above a manta ray in Nusa Penida', rates: [['2 Persons', 'Adult: IDR 1,275,000 / person · Child: IDR 1,050,000 / person'], ['3 Persons', 'Adult: IDR 1,045,000 / person · Child: IDR 820,000 / person'], ['4 Persons', 'Adult: IDR 915,000 / person · Child: IDR 690,000 / person'], ['5 Persons', 'Adult: IDR 830,000 / person · Child: IDR 605,000 / person']], participantRates: [{ participants: 2, adultPrice: 1275000, childPrice: 1050000 }, { participants: 3, adultPrice: 1045000, childPrice: 820000 }, { participants: 4, adultPrice: 915000, childPrice: 690000 }, { participants: 5, adultPrice: 830000, childPrice: 605000 }], message: 'Snorkeling & land tour' },
    privatesnorkelland: { itinerary: PRIVATE_SNORKEL_LAND_ITINERARY, includes: PRIVATE_SNORKEL_LAND_INCLUDES, bring: WEST_BRING, notes: WEST_NOTES, includes: PRIVATE_SNORKEL_LAND_INCLUDES, destinations: "Kelingking Beach • Broken Beach • Angel's Billabong • Manta Bay • Crystal Bay • Gamat Bay • Wall Point", destinationPhotos: [{ src: 'assets/kelingking-penida.webp', alt: 'Kelingking Beach, Nusa Penida', caption: 'Kelingking Beach' }, { src: 'assets/broken-beach-guest.webp', alt: 'Guests at Broken Beach, Nusa Penida', caption: 'Broken Beach' }, { src: 'assets/angels-billabong-guest.webp', alt: "A natural pool at Angel's Billabong, Nusa Penida", caption: "Angel's Billabong" }, { src: 'assets/amarta-pool-ocean-view.webp', alt: 'An infinity pool and ocean views at Amarta Penida', caption: 'Ocean-view pool' }, ...SNORKEL_DESTINATION_PHOTOS], kicker: 'Tailored to your group', title: 'Private snorkeling<br><i>& land tour.</i>', number: '05', description: 'An island adventure with a private boat and a route tailored to your group, your pace, and your favorite places.', time: 'One day', price: 'All-inclusive', size: '2–5 guests', heroImage: 'assets/manta-snorkeling.webp', heroAlt: 'A private snorkeling experience with manta rays in Nusa Penida', rates: [['2 Persons', 'Adult: IDR 1,875,000 / person · Child: IDR 1,650,000 / person'], ['3 Persons', 'Adult: IDR 1,380,000 / person · Child: IDR 1,155,000 / person'], ['4 Persons', 'Adult: IDR 1,135,000 / person · Child: IDR 910,000 / person'], ['5 Persons', 'Adult: IDR 990,000 / person · Child: IDR 765,000 / person']], participantRates: [{ participants: 2, adultPrice: 1875000, childPrice: 1650000 }, { participants: 3, adultPrice: 1380000, childPrice: 1155000 }, { participants: 4, adultPrice: 1135000, childPrice: 910000 }, { participants: 5, adultPrice: 990000, childPrice: 765000 }], message: 'Private snorkeling & land tour' },
    twoDay: { itinerary: TWO_DAY_ITINERARY, includes: TWO_DAY_INCLUDES, bring: WEST_BRING, notes: WEST_NOTES, includes: TWO_DAY_INCLUDES, destinations: "Day 1 — Manta Bay • Crystal Bay • Gamat Bay • Wall Point • Kelingking Beach • Broken Beach • Angel's Billabong\nDay 2 — Diamond Beach • Atuh Beach • Tree House • Thousand Islands", destinationPhotos: [{ src: 'assets/kelingking-penida.webp', alt: 'Kelingking Beach, Nusa Penida', caption: 'Kelingking Beach' }, { src: 'assets/gallery-04.webp', alt: 'A catamaran on the open sea', caption: 'An open-sea journey' }, { src: 'assets/broken-beach-guest.webp', alt: 'Guests at Broken Beach, Nusa Penida', caption: 'Broken Beach' }, { src: 'assets/angels-billabong-guest.webp', alt: "A natural pool at Angel's Billabong, Nusa Penida", caption: "Angel's Billabong" }, { src: 'assets/tree-house-thousand-islands.webp', alt: 'Tree House overlooking Thousand Islands in Nusa Penida', caption: 'Tree House and Thousand Islands' }, { src: 'assets/thousand-islands-couple.webp', alt: 'A couple enjoying the Thousand Islands views in Nusa Penida', caption: 'Thousand Islands viewpoint' }, { src: 'assets/east-coast-arch-beach.webp', alt: 'A turquoise beach and natural rock arch on Nusa Penida’s east coast', caption: 'East coast beach' }, { src: 'assets/amarta-pool-ocean-view.webp', alt: 'An infinity pool and ocean views at Amarta Penida', caption: 'Ocean-view pool' }, ...SNORKEL_DESTINATION_PHOTOS], kicker: 'Stay a little longer', title: '2 days, 1 night<br><i>in Penida.</i>', number: '06', description: 'Explore the island at leisure: two days of sea, land, and sunsets, with one night on the island.', time: '2 days · 1 night', price: 'All-inclusive', size: '2–5 guests', heroImage: 'assets/kelingking-viewpoint.webp', heroAlt: 'Visitors enjoying the Kelingking viewpoint in Nusa Penida', rates: [['2 Persons', 'Adult: IDR 1,850,000 / person · Child: IDR 1,625,000 / person'], ['3 Persons', 'Adult: IDR 1,700,000 / person · Child: IDR 1,475,000 / person'], ['4 Persons', 'Adult: IDR 1,550,000 / person · Child: IDR 1,325,000 / person'], ['5 Persons', 'Adult: IDR 1,400,000 / person · Child: IDR 1,175,000 / person']], participantRates: [{ participants: 2, adultPrice: 1850000, childPrice: 1625000 }, { participants: 3, adultPrice: 1700000, childPrice: 1475000 }, { participants: 4, adultPrice: 1550000, childPrice: 1325000 }, { participants: 5, adultPrice: 1400000, childPrice: 1175000 }], message: '2 days, 1 night' },
    snorkelingOptions: { isPackageHub: true, number: '07', kicker: 'Private snorkeling adventures', title: 'SNORKELING<br><i>TRIPS</i>', message: 'Choose a Snorkeling Trip', description: 'Choose between two snorkeling adventures in Nusa Penida: Manta Point or Manta Bay.', time: 'One day', size: 'Two snorkeling experiences', heroImage: 'assets/manta-snorkeling.webp', heroAlt: 'Snorkeling in the clear waters of Nusa Penida' },
    manta: { isPackageDetail: true, bring: WEST_BRING, kicker: 'Meet the gentle giants', title: 'Snorkeling<br><i>Manta Point.</i>', number: '07', description: 'Swim in Manta Point’s blue waters and experience one of Penida’s most memorable wildlife encounters.', time: '5 hours', price: 'All-inclusive', destinationPhotos: SNORKEL_DESTINATION_PHOTOS, snorkeling: { includes: SNORKELING_INCLUDES, itinerary: MANTA_POINT_ITINERARY, notes: SNORKELING_NOTES }, destinations: 'Manta Point • Gamat Bay • Wall Point', size: '2–8 guests', heroImage: 'assets/manta-snorkeling.webp', heroAlt: 'Snorkeling at Manta Point, Nusa Penida', rates: [['1–4 people', 'IDR 2.950.000'], ['5–8 people', 'IDR 3.100.000']], rateUnit: 'Price per boat', message: 'Snorkeling Manta Point' },
    matabay: { isPackageDetail: true, bring: WEST_BRING, kicker: 'Clear waters, abundant marine life', title: 'Snorkeling<br><i>Manta Bay.</i>', number: '08', description: 'Explore Manta Bay’s clear, vibrant waters. Take time to snorkel, float, and savor the beauty around you.', time: '5 hours', price: 'All-inclusive', destinationPhotos: [SNORKEL_DESTINATION_PHOTOS[2], SNORKEL_DESTINATION_PHOTOS[3], SNORKEL_DESTINATION_PHOTOS[0], SNORKEL_DESTINATION_PHOTOS[1]], snorkeling: { includes: SNORKELING_INCLUDES, itinerary: MANTA_BAY_ITINERARY, notes: SNORKELING_NOTES }, destinations: 'Manta Bay • Crystal Bay • Gamat Bay • Wall Point', size: 'Up to 12 people', heroImage: 'assets/manta-snorkeling.webp', heroAlt: 'Snorkeling at Manta Bay, Nusa Penida', rates: [['1–4 people', 'IDR 1.850.000'], ['5–8 people', 'IDR 1.950.000']], rateUnit: 'Price per boat', message: 'Snorkeling Manta Bay' },
    carRental: { isVehicleHub: true, number: '08', kicker: 'Private transport options', title: 'PRIVATE CAR OR MOTORBIKE<br><i>WITH DRIVER</i>', message: 'Private car or motorbike with driver', description: 'Choose a private car or a motorbike with a professional local driver for your day exploring Nusa Penida.', time: 'One day', size: 'Choose your ride', heroImage: 'assets/motorbike-driver.webp', heroAlt: 'Guests exploring Nusa Penida by motorbike with a local driver' },
    carRentalService: { isCarRental: true, isVehicleDetail: true, vehicleTitle: 'Private Car Rental', kicker: 'Private car service', title: 'PRIVATE CAR RENTAL – ONE DAY', number: '08', message: 'PRIVATE CAR RENTAL – ONE DAY', description: 'Explore Nusa Penida at your own pace with a private car and professional local driver. Choose your preferred destinations and enjoy a comfortable journey.', heroImage: 'assets/private-car-rental-penida.png', heroAlt: 'Private car rental at Kelingking Beach, Nusa Penida', destinationPhotos: [{ src: 'assets/private-car-rental-penida.png', alt: 'Private car rental at Kelingking Beach, Nusa Penida', caption: 'Private car rental' }], rentalIncludes: ['Private Car', 'Professional Driver as a Photografer and Guide', 'Fuel (Gasoline)', 'One-Day Servis', 'Car Parking Fees at Each Destination'], rentalCapacity: 'Maximum Capacity: 1–5 passengers per car.', rentalItineraries: [{ title: 'WEST TRIP', description: 'Explore the famous destinations of West Nusa Penida.', places: ['Kelingking Beach', 'Broken Beach', "Angel's Billabong", 'Crystal Bay'], price: 'IDR 700.000 / Car / Day', button: 'Book West Trip' }, { title: 'EAST TRIP', description: 'Discover the beautiful beaches and breathtaking views of East Nusa Penida.', places: ['Diamond Beach', 'Atuh Beach', 'Tree House (Molenteng)', 'Thousand Islands Viewpoint'], price: 'IDR 700.000 / Car / Day', button: 'Book East Trip' }, { title: 'MIX TRIP', description: 'Explore a combination of selected destinations from West and East Nusa Penida.', places: ['Diamond Beach', 'Atuh Beach', 'Tree House (Molenteng)', 'Kelingking Beach', 'Broken Beach', "Angel's Billabong"], price: 'IDR 800.000 / Car / Day', button: 'Book Mix Trip' }], rentalNotes: ['Price Starting from IDR 750.000 per car per day.', 'The service includes a private car, professional driver, and fuel.', 'Entrance tickets, fast boat tickets, meals, and personal expenses are not included.'], rentalClosing: 'Explore Nusa Penida Your Way with Green Tours Penida.' },
    motorbikeDriver: { isMotorbike: true, isVehicleDetail: true, vehicleTitle: 'Motorbike with Professional Driver', kicker: 'Private motorbike service', title: 'MOTORBIKE WITH<br><i>PROFESSIONAL DRIVER – ONE DAY</i>', number: '08', message: 'MOTORBIKE WITH PROFESSIONAL DRIVER – ONE DAY', description: 'Explore Nusa Penida with a private motorbike and a professional local driver.', rentalDetailDescription: 'Explore the beautiful island of Nusa Penida at your own pace with a private motorbike and professional local driver. Enjoy a flexible and convenient journey while discovering the island’s most beautiful destinations.', time: 'One day', price: 'From IDR 600,000 / Motorbike / Day', size: 'Maximum 1 passenger per motorbike', heroImage: 'assets/motorbike-driver.webp', heroAlt: 'Guests exploring Nusa Penida by motorbike with a local driver', destinationPhotos: [{ src: 'assets/motorbike-driver.webp', alt: 'A local driver and guest exploring Nusa Penida by motorbike' }], rentalSectionHeading: 'MOTORBIKE WITH PROFESSIONAL DRIVER – ONE DAY', rentalServiceLabel: 'Private motorbike service', rentalIncludesHeading: 'YOUR SERVICE INCLUDES', rentalIncludes: ['Private Motorbike', 'Professional Local Driver as a Photographer and Guide', 'Fuel (Gasoline)', 'One-Day Service'], rentalCapacity: 'Maximum Capacity: 1 passenger per motorbike (excluding the driver).', rentalItineraries: [{ title: 'WEST TRIP', description: 'Explore the famous destinations of West Nusa Penida.', places: ['Kelingking Beach', 'Broken Beach', "Angel's Billabong", 'Crystal Bay'], price: 'IDR 600,000 / Motorbike / Day', button: 'Book West Trip' }, { title: 'EAST TRIP', description: 'Discover the beautiful beaches and breathtaking views of East Nusa Penida.', places: ['Diamond Beach', 'Atuh Beach', 'Tree House (Molenteng)', 'Thousand Islands Viewpoint'], price: 'IDR 600,000 / Motorbike / Day', button: 'Book East Trip' }, { title: 'MIX TRIP', description: 'Explore a combination of selected destinations from West and East Nusa Penida.', places: ['Diamond Beach', 'Atuh Beach', 'Tree House (Molenteng)', 'Kelingking Beach', 'Broken Beach', "Angel's Billabong"], price: 'IDR 700,000 / Motorbike / Day', button: 'Book Mix Trip' }], rentalNotes: ['Prices are per motorbike per day, including one professional local driver.', 'Fuel', 'Entrance tickets, fast boat tickets, meals, and personal expenses are not included.', 'Maximum capacity is 1 passenger per motorbike, excluding the driver.', 'All itineraries are subject to road conditions and available time.'], rentalClosing: 'Explore Nusa Penida Your Way with Green Tours Penida.' },
  }
};
