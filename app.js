/* Static browser-language localization. Source content remains English; no runtime translation requests. */
(() => {
  const dictionaries = window.GREEN_TOURS_TRANSLATIONS || {};
  const supported = new Set(['en','id','zh-CN','ja','ko']);
  const prefs = Array.isArray(navigator.languages) && navigator.languages.length ? navigator.languages : [navigator.language || 'en'];
  function detectLanguage(values=prefs) {
    for (const value of values) {
      const tag=String(value||'').trim().replace('_','-').toLowerCase();
      if (tag==='zh' || tag.startsWith('zh-')) return 'zh-CN';
      const base=tag.split('-')[0];
      if (base==='id'||base==='ja'||base==='ko') return base;
    }
    return 'en';
  }
  const locale=detectLanguage(), messages=dictionaries[locale]?.messages||{};
  document.documentElement.lang=locale;
  window.GREEN_TOURS_LANGUAGE=locale;
  // Derive plain fragments for headings whose source/translation keys include inline markup.
  const expanded={...messages};
  for (const [src,dst] of Object.entries(messages)) {
    if (/[<>]/.test(src) && /[<>]/.test(dst)) {
      const plain=x=>x.replace(/<br\s*\/?\s*>/gi,' ').replace(/<[^>]*>/g,'').replace(/&amp;/g,'&').replace(/\s+/g,' ').trim();
      const a=plain(src),b=plain(dst); if(a.length>5&&b) expanded[a]=b;
    }
  }
  const entries=Object.entries(expanded).filter(([s,t])=>s.length>=5&&t&&s!==t).sort((a,b)=>b[0].length-a[0].length);
  const decode=s=>{const el=document.createElement('textarea');el.innerHTML=s;return el.value;};
  function translate(value) {
    if (value==null) return value;
    const original=String(value), decoded=decode(original);
    if (Object.prototype.hasOwnProperty.call(expanded,original)) return expanded[original];
    if (Object.prototype.hasOwnProperty.call(expanded,decoded)) return expanded[decoded];
    let result=decoded;
    for(const [src,dst] of entries) if(result.includes(src)) result=result.split(src).join(dst);
    return result;
  }
  const attrs=['alt','title','aria-label','aria-description','placeholder','content'];
  const skip=e=>!e || e.matches?.('script,style,noscript,[data-i18n-ignore]') || !!e.closest?.('script,style,noscript,[data-i18n-ignore]');
  function text(node) {
    if(!node?.nodeValue||skip(node.parentElement)) return;
    const raw=node.nodeValue,trim=raw.trim(); if(!trim)return;
    const out=translate(trim); if(out!==trim) node.nodeValue=raw.replace(trim,out);
  }
  function visit(node) {
    if(node.nodeType===Node.TEXT_NODE){text(node);return;}
    if(node.nodeType!==Node.ELEMENT_NODE||skip(node))return;
    for(const a of attrs) if(node.hasAttribute(a)){const v=node.getAttribute(a),t=translate(v);if(t!==v)node.setAttribute(a,t);}
    for(const child of node.childNodes)visit(child);
  }
  function tree(root){if(root?.nodeType===Node.TEXT_NODE||root?.nodeType===Node.ELEMENT_NODE)visit(root);}
  tree(document.head); tree(document.body);
  const observer=new MutationObserver(records=>{
    for(const r of records){
      if(r.type==='characterData') text(r.target);
      if(r.type==='attributes'&&r.target.hasAttribute(r.attributeName)){const v=r.target.getAttribute(r.attributeName),t=translate(v);if(t!==v)r.target.setAttribute(r.attributeName,t);}
      for(const node of r.addedNodes||[])tree(node);
    }
  });
  observer.observe(document.documentElement,{childList:true,characterData:true,attributes:true,attributeFilter:attrs,subtree:true});
  window.GREEN_TOURS_I18N={locale,supported:[...supported],translate,detectLanguage};
})();

const packages = window.GREEN_TOURS_CONTENT?.packages ?? {};
const whatsappNumber = window.GREEN_TOURS_CONTENT?.whatsappNumber ?? '6283894497992';
const supabaseProjectUrl = 'https://aegtpwclwasjjzsgznac.supabase.co';
const supabasePublishableKey = 'sb_publishable_Gkk12V3Q-4nE7Rir9n5CkQ_AV8WPVgA';
const packageEntries = Object.entries(packages).filter(([, data]) => !data.isVehicleDetail && !data.isPackageDetail);
const bookingPackageEntries = Object.entries(packages).filter(([, data]) => !data.isVehicleHub && !data.isPackageHub && !data.excludeBookingOption);
const childCountHiddenPackageKeys = new Set(['manta', 'matabay', 'mantaShared', 'matabayShared', 'carRentalService', 'motorbikeDriver']);
const packageCards = document.querySelector('#package-cards');
const bookingDialog = document.querySelector('#booking-dialog');
const bookingForm = document.querySelector('#booking-form');
const packageSelect = document.querySelector('#tour-package');
const bookingPrice = document.querySelector('#booking-price');
const bookingDestinations = document.querySelector('#booking-destinations');
const bookingStatus = document.querySelector('#booking-status');
let activeBookingPackageKey = null;
let activeRentalBooking = null;
let observer;
let landingReturnScrollY = 0;
let landingReturnHash = '#packages';
const genericIncludes = [
  'Hotel pickup and drop-off in Bali',
  'Round-trip fast boat tickets between Bali and Nusa Penida',
  'Private transportation and driver',
  'Entrance fees for the listed destinations',
  'Lunch and bottled water',
  'Fuel, parking, and port fees',
  'All transportation during the tour'
];
const genericNotes = [
  'The schedule may change depending on local conditions.',
  'Our guide will help you capture the best moments and find the best photo angles.',
  'Destinations and timings can be adjusted on request.',
  'All-inclusive: all listed services are included, with no hidden fees.'
];
const defaultBring = ['National ID card / Passport', 'Comfortable clothing', 'Comfortable sandals or shoes', 'Sunscreen', 'Sunglasses & hat', 'Mobile phone', 'Cash for personal expenses'];

function escapeHtml(value = '') {
  return String(value).replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
}
function formatText(value = '') { return escapeHtml(value).replace(/\n/g, '<br>'); }
function whatsappLink(message) { return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`; }
function fallbackItinerary(data) {
  const destinations = String(data.destinations || 'selected Nusa Penida destinations').split(/[•\n]/).map((item) => item.trim()).filter(Boolean);
  return [
    ['MORNING', 'Pickup and travel to Nusa Penida', 'Our team will pick you up, help with the boat crossing, and begin your island tour.'],
    ['MORNING', 'Explore the main destinations', destinations.slice(0, 2).join(' • ') || 'Main destinations included in your package', 'Enjoy time to take in the views, take photos, and explore at a comfortable pace.'],
    ['MIDDAY', 'Lunch and free time', 'Take a break, enjoy lunch, and continue your tour based on local conditions and the best time to visit each location.'],
    ['AFTERNOON', 'Return to the port and hotel', 'Your tour ends with a transfer back to the port, a fast boat crossing, and a return to your hotel in Bali.']
  ];
}
function itineraryFor(data) {
  const itinerary = data.snorkeling?.itinerary || data.itinerary;
  return itinerary?.length ? itinerary : fallbackItinerary(data);
}
function includesFor(data) {
  const includes = data.includes || data.snorkeling?.includes;
  return includes?.length ? includes : genericIncludes;
}
function notesFor(data) {
  const notes = data.snorkeling?.notes || data.notes;
  return notes?.length ? notes : genericNotes;
}
function bringFor(data) {
  if (data.bring?.length) return data.bring;
  const snorkelingBring = data.snorkeling ? ['Swimwear', 'A change of clothes', 'Waterproof bag for personal belongings'] : [];
  return [...defaultBring, ...snorkelingBring];
}
const homepageGalleryPhotos = [
  { src: 'assets/couple-cliff-gallery.webp', alt: 'A couple enjoying the cliffs and sea of Nusa Penida' },
  { src: 'assets/guest-boat-ride-gallery.webp', alt: 'Guests enjoying a boat trip in Nusa Penida' },
  { src: 'assets/sunset-beach-gallery.webp', alt: 'A beach at sunset in Nusa Penida' },
  { src: 'assets/gallery-01.webp', alt: 'A catamaran in turquoise waters' },
  { src: 'assets/manta-snorkeling.webp', alt: 'Snorkelers swimming above manta rays in Nusa Penida' },
  { src: 'assets/kelingking-penida.webp', alt: 'Visitors enjoying the green cliffs and Kelingking Beach, Nusa Penida' },
  { src: 'assets/kelingking-viewpoint.webp', alt: 'Visitors at the Kelingking viewpoint above the blue sea' },
  { src: 'assets/gallery-04.webp', alt: 'A catamaran in open waters' },
  { src: 'assets/kelingking-gallery.webp', alt: 'Kelingking cliffs and the turquoise sea of Nusa Penida' },
  { src: 'assets/kelingking-guest.webp', alt: 'Guests enjoying the Kelingking viewpoint' },
  { src: 'assets/kelingking-guest-2.webp', alt: 'Guests at the Kelingking viewpoint overlooking the sea' },
  { src: 'assets/manta-guest.webp', alt: 'Guests snorkeling with manta rays in Nusa Penida' },
  { src: 'assets/turtle-snorkeling-guest.webp', alt: 'Guests snorkeling with turtles above the coral reefs' },
  { src: 'assets/broken-beach-guest.webp', alt: 'Guests at Broken Beach, Nusa Penida' },
  { src: 'assets/angels-billabong-guest.webp', alt: "A natural pool at Angel's Billabong" },
  { src: 'assets/tree-house-thousand-islands.webp', alt: 'Tree House overlooking Thousand Islands' },
  { src: 'assets/west-beach-guest.webp', alt: 'A beach with crystal-clear turquoise waters' },
  { src: 'assets/thousand-islands-couple.webp', alt: 'A couple enjoying the Thousand Islands viewpoint' },
  { src: 'assets/east-coast-arch-beach.webp', alt: 'A turquoise beach and natural rock arch' },
  { src: 'assets/snorkeling-boat-vanora.webp', alt: 'A snorkeling boat in the clear waters of Nusa Penida' },
  { src: 'assets/amarta-pool-ocean-view.webp', alt: 'An infinity pool and ocean view at Amarta Penida' }
];
function photosFor(data) { return data.destinationPhotos || []; }
function galleryPhotosFor(data) { return data.isCarRental || data.isMotorbike ? homepageGalleryPhotos : photosFor(data); }
const cardHeroPhotoByPackage = new Map();
const usedCardHeroPhotos = new Set();
packageEntries.forEach(([key, data]) => {
  const candidates = photosFor(data);
  const selected = candidates.find((photo) => photo?.src && !usedCardHeroPhotos.has(photo.src)) || candidates[0] || { src: data.heroImage || 'assets/manta-penida.webp', alt: data.heroAlt || data.message || key };
  cardHeroPhotoByPackage.set(key, selected);
  if (selected?.src) usedCardHeroPhotos.add(selected.src);
});

function photoSlides(photos, fallbackSrc, fallbackAlt, extraClass = '') {
  const source = photos.length ? photos : [{ src: fallbackSrc, alt: fallbackAlt }];
  return `<div class="photo-slide-track" aria-label="Swipe to see all destination photos">${source.map((photo, index) => `<img class="${extraClass} photo-slide" loading="lazy" decoding="async" src="${escapeHtml(photo.src)}" alt="${escapeHtml(photo.alt || fallbackAlt)}" data-slide-index="${index}">`).join('')}</div><span class="photo-swipe-hint" aria-hidden="true">Swipe ↔</span><button class="photo-carousel-arrow photo-carousel-prev" type="button" data-photo-nav="prev" aria-label="Previous photo">‹</button><button class="photo-carousel-arrow photo-carousel-next" type="button" data-photo-nav="next" aria-label="Next photo">›</button>`;
}
function startPhotoRotators(scope = document) {
  scope.querySelectorAll('[data-photo-rotator]').forEach((rotator) => {
    const track = rotator.querySelector('.photo-slide-track');
    const slides = [...rotator.querySelectorAll('.photo-slide')];
    if (!track || slides.length < 2 || rotator.dataset.rotatorStarted) return;
    rotator.dataset.rotatorStarted = 'true';
    rotator.setAttribute('aria-roledescription', 'carousel');
    rotator.setAttribute('aria-label', `Destination hero photos, ${slides.length} photos. Swipe right or left.`);
    let startX = 0;
    let moved = false;
    rotator.addEventListener('pointerdown', (event) => { startX = event.clientX; moved = false; });
    rotator.addEventListener('pointerup', (event) => { if (Math.abs(event.clientX - startX) > 35) moved = true; });
    rotator.addEventListener('pointercancel', () => { moved = false; });
    rotator.addEventListener('click', (event) => {
      if (moved) { event.stopPropagation(); moved = false; }
    }, true);
    rotator.querySelectorAll('[data-photo-nav]').forEach((button) => button.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      const direction = button.dataset.photoNav === 'next' ? 1 : -1;
      track.scrollBy({ left: direction * track.clientWidth, behavior: 'smooth' });
    }));
  });
}
function startHeroPhotoRotator() {
  const rotator = document.querySelector('[data-hero-photo-rotator]');
  if (!rotator || rotator.dataset.started) return;
  const slides = [...rotator.querySelectorAll('.hero-photo-slide')];
  if (slides.length < 2) return;
  rotator.dataset.started = 'true';
  let index = 0;
  let loadingIndex = -1;
  const showSlide = (next) => {
    const nextIndex = next % slides.length;
    const target = slides[nextIndex];
    if (nextIndex === index) return;
    const activate = () => {
      slides[index].classList.remove('is-active');
      index = nextIndex;
      target.classList.add('is-active');
    };
    if (!target.getAttribute('src') && target.dataset.src) {
      if (loadingIndex === nextIndex) return;
      loadingIndex = nextIndex;
      target.addEventListener('load', () => { loadingIndex = -1; activate(); }, { once: true });
      target.addEventListener('error', () => { loadingIndex = -1; target.removeAttribute('src'); }, { once: true });
      target.src = target.dataset.src;
      return;
    }
    activate();
  };
  let heroVisible = true;
  if ('IntersectionObserver' in window) {
    const heroObserver = new IntersectionObserver(([entry]) => { heroVisible = entry.isIntersecting; }, { threshold: 0.1 });
    heroObserver.observe(rotator);
  }
  window.setTimeout(() => {
    if (!document.hidden && heroVisible) showSlide(index + 1);
    window.setInterval(() => {
      if (!document.hidden && heroVisible) showSlide(index + 1);
    }, 4800);
  }, 7000);
}
function cardMarkup(key, data) {
  const title = data.message || key;
  const photo = cardHeroPhotoByPackage.get(key) || { src: data.heroImage || 'assets/manta-penida.webp', alt: data.heroAlt || title };
  return `<article class="package-card reveal" id="package-${escapeHtml(key)}" data-package-card="${escapeHtml(key)}" tabindex="0" role="link" aria-label="Open ${escapeHtml(title)}"><div class="package-card-visual"><img class="package-card-hero-photo is-active" loading="lazy" decoding="async" src="${escapeHtml(photo.src)}" alt="${escapeHtml(photo.alt || title)}"><div class="package-card-number">${escapeHtml(data.number || '')}</div><div class="package-card-visual-shade"></div><div class="package-card-visual-copy"><span>${escapeHtml(data.kicker || 'Nusa Penida Experience')}</span><h3>${data.title || escapeHtml(title)}</h3><p class="package-card-description">${escapeHtml(data.description || data.heroDescription || '')}</p><button class="package-card-view-button" type="button" aria-label="View package ${escapeHtml(title)}">View package <span>↗</span></button></div></div></article>`;
}
function renderPackageCards() {
  if (!packageCards) return;
  packageCards.innerHTML = packageEntries.map(([key, data]) => cardMarkup(key, data)).join('');
  packageCards.querySelectorAll('.package-card').forEach((card) => {
    const key = card.dataset.packageCard;
    const category = packageCategoryLabel(packages[key]);
    if (category) {
      const badge = document.createElement('strong');
      badge.className = 'package-category-label';
      badge.textContent = category;
      card.setAttribute('aria-label', `${card.getAttribute('aria-label')} — ${category}`);
      card.querySelector('.package-card-visual')?.append(badge);
    }
    card.addEventListener('click', () => openPackagePage(key));
    card.querySelector('.package-card-view-button')?.addEventListener('click', (event) => {
      event.stopPropagation();
      openPackagePage(key);
    });
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); card.click(); }
    });
  });
  observeReveals();
  startPhotoRotators(packageCards);
}

function packageCategoryLabel(data, packageKey = '') {
  if (packageKey === 'westTrip09' || packageKey === 'eastTrip09') return 'LIMITED PACKAGE';
  const number = Number(data?.number);
  if (number >= 1 && number <= 6) return 'PREMIUM';
  return ({ 7: 'MARINE EXPERIENCE', 8: 'MOBILITY', 9: 'LIMITED PACKAGE' })[number] || '';
}
function packageCategoryBadge(data, packageKey = '') {
  const label = packageCategoryLabel(data, packageKey);
  return label ? `<strong class="package-category-label">${escapeHtml(label)}</strong>` : '';
}

const packageFaqs = [
  ['What is included in the tour price?', 'Our packages include the services listed on each tour page, such as hotel pick-up and drop-off, fast boat tickets, private transportation, entrance tickets, lunch, and snorkeling equipment where applicable.'],
  ['Do you provide hotel pick-up and drop-off in Bali?', 'Yes. Selected packages include private hotel pick-up and drop-off in Bali. Please provide your hotel name and location when booking.'],
  ['Are there any hidden fees?', 'No. We believe in clear and transparent pricing. All inclusions are listed before you book, with no hidden fees.'],
  ['What time does the trip start?', 'The start time depends on your selected tour and fast boat schedule. We will confirm the pick-up time with you before your trip.'],
  ['How do I make a booking?', 'Click Book Your Trip, fill in your travel details, and submit the form. Your booking will be securely recorded, and our team will contact you to confirm your trip.'],
  ['Can I customize my tour?', 'Yes. Some tours can be customized depending on your preferred destinations, activities, and available time. Contact us to discuss your itinerary.'],
  ['What happens if the weather or sea conditions change?', 'Your safety comes first. If weather or sea conditions affect the tour, our team will discuss the available options with you and make the necessary adjustments.'],
];
const packagesOneToSixFaqs = [
  ['Can I book a private trip?', 'Yes. Our Private snorkeling & Land tour is made for couples, families, and small groups who want the route and rhythm to be entirely their own.'],
  ['Where does the trip start?', 'We pick you up from your hotel in Bali, take you to Nusa Penida for your tour, and bring you back to your hotel after the trip. Exact pick-up time is confirmed before your travel date.'],
  ['What happens if the weather changes?', 'Your safety comes first. If sea conditions are not suitable, our crew will offer a route adjustment or a new date.'],
  ['Do I need to be a strong swimmer?', 'Not at all. Life jackets and flotation aids are available, and our crew is always close by. Tell us your comfort level before we head out.'],
  ['What is the cancellation policy?', 'Free cancellation is available up to 2 hours before your scheduled pick-up time.'],
  ['Can I change my tour date?', 'Free rescheduling is available up to 2 hours before your scheduled pick-up time, subject to availability.'],
];
const packagePagesWithoutFaqs = new Set(['manta', 'matabay', 'mantaShared', 'matabayShared', 'westTrip09', 'eastTrip09']);
function packageBottomContent(data, title, key) {
  const photos = galleryPhotosFor(data);
  const packageNumber = Number(data.number);
  const faqs = packageNumber >= 1 && packageNumber <= 6 ? [...packageFaqs, ...packagesOneToSixFaqs] : packageFaqs;
  const faqSection = packagePagesWithoutFaqs.has(key) ? '' : `<section class="package-detail-faq"><div class="package-detail-section-heading"><p class="eyebrow">Your questions, answered</p><h2>What to know<br><i>before you go.</i></h2></div><div class="package-faq-list">${faqs.map(([question, answer]) => `<details><summary>${escapeHtml(question)} <span>+</span></summary><p>${escapeHtml(answer)}</p></details>`).join('')}</div></section>`;
  return `<section class="package-detail-gallery"><div class="package-detail-section-heading"><p class="eyebrow">Our guest gallery</p><h2>Moments from<br><i>your day on the island.</i></h2></div><div class="package-bottom-gallery">${photos.map(photo => `<img loading="lazy" decoding="async" src="${escapeHtml(photo.src)}" alt="${escapeHtml(photo.alt || title)}">`).join('')}</div></section>${faqSection}`;
}
function packageChoiceMarkup(config) {
  return `<div class="package-detail-page-inner vehicle-options-page ${escapeHtml(config.theme || '')}"><button class="package-back" type="button">← Back to all packages</button><header class="vehicle-options-heading"><p class="eyebrow">${escapeHtml(config.eyebrow)}</p><h1>${escapeHtml(config.heading)}</h1><p>${escapeHtml(config.description)}</p></header><div class="vehicle-options-grid">${config.choices.map((choice) => { const data = packages[choice.key]; const image = choice.image || data.heroImage; return `<article class="vehicle-option-card"><img src="${escapeHtml(image)}" alt="${escapeHtml(choice.alt || data.heroAlt || choice.title)}" loading="lazy"><div class="vehicle-option-shade"></div><div class="vehicle-option-copy"><span>${escapeHtml(choice.eyebrow)}</span><h2>${escapeHtml(choice.title)}</h2><p>${escapeHtml(choice.description || data.description || '')}</p><button class="vehicle-option-action" type="button" data-open-package="${escapeHtml(choice.key)}">${escapeHtml(choice.action)} <span aria-hidden="true">↗</span></button></div></article>`; }).join('')}</div></div>`;
}
function vehicleOptionsMarkup() {
  return packageChoiceMarkup({ eyebrow: 'PACKAGE 08 · PRIVATE TRANSPORT', heading: 'Choose your ride', description: 'Select a private car or a motorbike with a professional local driver for your day in Nusa Penida.', choices: [
    { key: 'carRentalService', title: 'Private Car Rental', eyebrow: 'Comfortable island travel', description: 'Enjoy a private car with a professional local driver and choose the destinations you want to explore.', action: 'Explore car rental' },
    { key: 'motorbikeDriver', title: 'Motorbike with Professional Driver', eyebrow: 'Flexible island travel', description: 'Discover Nusa Penida by private motorbike with a professional local driver as your guide and photographer.', action: 'Explore motorbike trip' }
  ] });
}
function westEastTripOptionsMarkup() {
  return packageChoiceMarkup({ eyebrow: 'PACKAGE 09 · WEST & EAST TRIPS', heading: 'Choose your island route', description: 'Select West Trip or East Trip. Each opens the same tour details and pricing as package 01 or 02.', choices: [
    { key: 'westTrip09', title: 'West Trip', eyebrow: 'PACKAGE 01', description: packages.westTrip09.description, action: 'Explore West Trip', image: packages.westTrip09.heroImage, alt: packages.westTrip09.heroAlt },
    { key: 'eastTrip09', title: 'East Trip', eyebrow: 'PACKAGE 02', description: packages.eastTrip09.description, action: 'Explore East Trip', image: packages.eastTrip09.heroImage, alt: packages.eastTrip09.heroAlt }
  ] });
}
function snorkelingOptionsMarkup() {
  return packageChoiceMarkup({ eyebrow: 'PACKAGES 07 & 08 · SNORKELING', heading: 'Choose your snorkeling trip', description: 'Choose the snorkeling destination you would like to experience around Nusa Penida.', theme: 'snorkeling-options-page', choices: [
    { key: 'manta', title: 'Private Snorkeling Manta Point', eyebrow: 'PACKAGE 07', description: 'Explore Manta Point’s blue waters and enjoy a memorable snorkeling experience.', action: 'Explore Manta Point', image: packages.manta.destinationPhotos?.[0]?.src },
    { key: 'matabay', title: 'Private Snorkeling Manta Bay', eyebrow: 'PACKAGE 08', description: 'Enjoy the clear waters and vibrant marine life of Manta Bay.', action: 'Explore Manta Bay', image: packages.matabay.destinationPhotos?.[0]?.src },
    { key: 'mantaShared', title: 'Shared Manta Point Snorkeling', eyebrow: 'SHARED · IDR 395,000 / PERSON', description: 'Join a shared snorkeling trip to Manta Point.', action: 'Explore shared trip', image: packages.manta.destinationPhotos?.[0]?.src },
    { key: 'matabayShared', title: 'Shared Manta Bay Snorkeling', eyebrow: 'SHARED · IDR 295,000 / PERSON', description: 'Join a shared snorkeling trip to Manta Bay.', action: 'Explore shared trip', image: packages.matabay.destinationPhotos?.[0]?.src }
  ] });
}
function rentalBookButton(route, data, packageKey) {
  const serviceName = data.isMotorbike ? 'MOTORBIKE WITH PROFESSIONAL DRIVER' : 'PRIVATE CAR RENTAL';
  return `<button class="button button-dark package-detail-book rental-book-button" type="button" data-rental-package-key="${escapeHtml(packageKey)}" data-rental-route="${escapeHtml(route.title)}" data-rental-price="${escapeHtml(route.price)}" data-rental-destinations="${escapeHtml(JSON.stringify(route.places))}">${escapeHtml(route.button)} <span>↗</span></button>`;
}
function rentalDetailMarkup(data, packageKey) {
  const isMotorbike = Boolean(data.isMotorbike);
  const title = data.message || (isMotorbike ? 'Motorbike with professional driver' : 'Private car rental');
  const heroPhotos = photosFor(data);
  const backButton = data.isVehicleDetail
    ? '<button class="package-back" type="button" data-back-package="carRental">← Back to transport options</button>'
    : '<button class="package-back" type="button">← Back to all packages</button>';
  const sectionHeading = data.rentalSectionHeading
    ? `<h2>${escapeHtml(data.rentalSectionHeading)}</h2>`
    : `<h2>PRIVATE CAR RENTAL<br><i>– ONE DAY</i></h2>`;
  const sectionDescription = data.rentalDetailDescription || 'Explore the beautiful island of Nusa Penida at your own pace with our private car rental service. Enjoy a comfortable journey with a professional local driver and the freedom to choose your preferred destinations.';
  const includesHeading = data.rentalIncludesHeading || 'YOUR RENTAL INCLUDES';
  return `<div class="package-detail-page-inner ${isMotorbike ? 'motorbike-page' : 'car-rental-page'}">${backButton}<div class="package-detail-hero"><div class="package-detail-hero-image rental-hero-image" data-photo-rotator>${photoSlides(heroPhotos, data.heroImage, data.heroAlt || title, 'package-detail-hero-photo')}<div class="package-card-visual-shade"></div>${packageCategoryBadge(data, packageKey)}<div class="package-detail-hero-copy"><p class="eyebrow">${escapeHtml(data.kicker)}</p><h1>${escapeHtml(title)}</h1></div></div><div class="package-detail-intro"><p class="package-detail-description">${escapeHtml(data.description)}</p><p class="rental-capacity">${escapeHtml(data.rentalCapacity)}</p></div></div><div class="rental-detail-content"><section class="rental-section"><p class="eyebrow">${escapeHtml(data.rentalServiceLabel || 'Private car service')}</p>${sectionHeading}<p>${escapeHtml(sectionDescription)}</p></section><section class="rental-section rental-includes"><h3>${escapeHtml(includesHeading)}</h3><ul>${data.rentalIncludes.map((item) => `<li>✅${escapeHtml(item)}</li>`).join('')}</ul><p class="rental-capacity">${escapeHtml(data.rentalCapacity)}</p></section><section class="rental-section rental-itineraries"><h3>SUGGESTED ITINERARIES</h3>${data.rentalItineraries.map((route, index) => `<article class="rental-route"><span class="rental-route-number">${index + 1}</span><div><h4>${escapeHtml(route.title)}</h4><p>${escapeHtml(route.description)}</p><ul>${route.places.map((place) => `<li>${escapeHtml(place)}</li>`).join('')}</ul><strong class="rental-price">Price: ${escapeHtml(route.price)}</strong>${rentalBookButton(route, data, packageKey)}</div></article>`).join('')}</section><section class="rental-section rental-notes"><h3>TOUR NOTES</h3><ul>${data.rentalNotes.map((note) => `<li>${escapeHtml(note)}</li>`).join('')}</ul><p class="rental-closing">${escapeHtml(data.rentalClosing)}</p></section></div><section class="package-detail-gallery rental-gallery"><div class="package-detail-section-heading"><p class="eyebrow">Our guest gallery</p><h2>Moments from<br><i>your day on the island.</i></h2></div><div class="package-bottom-gallery">${galleryPhotosFor(data).map((photo) => `<img loading="eager" decoding="async" src="${escapeHtml(photo.src)}" alt="${escapeHtml(photo.alt || title)}">`).join('')}</div></section><section class="rental-social"><p class="eyebrow">Follow Green Tours Penida</p><h2>Stay connected<br><i>with the island.</i></h2><div class="rental-social-links"><a href="https://www.instagram.com/greentours_penida" target="_blank" rel="noreferrer">Instagram</a><a href="https://www.facebook.com/share/1JADfhCmwo/" target="_blank" rel="noreferrer">Facebook</a><a href="https://www.youtube.com/@GreenToursPenida" target="_blank" rel="noreferrer">YouTube</a><a href="https://www.tiktok.com/@greentours_penida" target="_blank" rel="noreferrer">TikTok</a></div></section></div>`;
}
function detailMarkup(key, data) {
  if (data.isVehicleHub) return vehicleOptionsMarkup();
  if (data.isLandTripHub) return westEastTripOptionsMarkup();
  if (data.isPackageHub) return snorkelingOptionsMarkup();
  if (data.isCarRental || data.isMotorbike) return rentalDetailMarkup(data, key);
  const title = data.message || key;
  const itinerary = itineraryFor(data), includes = includesFor(data), notes = notesFor(data), photos = photosFor(data), rates = data.rates || [];
  const ratesMarkup = data.participantRates?.length
    ? `<div class="package-card-rates package-participant-rates"><p>PACKAGE PRICE · PER PERSON</p><div class="package-rates-scroll"><table><thead><tr><th>Participants</th><th>Adult Price / Person</th><th>Child Price / Person</th></tr></thead><tbody>${data.participantRates.map((row) => `<tr><th scope="row">${row.participants} Persons</th><td>IDR ${row.adultPrice.toLocaleString('en-US')}</td><td>IDR ${row.childPrice.toLocaleString('en-US')}</td></tr>`).join('')}</tbody></table></div><div class="children-pricing-policy"><h3>CHILDREN'S PRICING POLICY</h3><p><strong>Infants (0–2 Years):</strong> FREE</p><p><strong>Children (3–8 Years):</strong> Special Child Rate</p><p><strong>Adults (9 Years and Above):</strong> Full Adult Price</p></div></div>`
    : rates.length ? `<div class="package-card-rates"><p>${data.rateUnit ? 'PRICE · ' + escapeHtml(data.rateUnit) : 'PACKAGE PRICE · per person'}</p>${rates.map(([group, rate]) => `<span><b>${escapeHtml(group)}</b><strong>${escapeHtml(rate)}</strong></span>`).join('')}</div>` : '';
  const packageBack = data.isPackageDetail ? `<button class="package-back" type="button" data-back-package="${escapeHtml(data.backPackageKey || 'snorkelingOptions')}">${escapeHtml(data.backPackageLabel || '← Back to snorkeling options')}</button>` : '<button class="package-back" type="button">← Back to all packages</button>';
  return `<div class="package-detail-page-inner">${packageBack}<div class="package-detail-hero"><div class="package-detail-hero-image" data-photo-rotator>${photoSlides(photos, data.heroImage || 'assets/manta-penida.webp', data.heroAlt || title, 'package-detail-hero-photo')}<div class="package-card-visual-shade"></div>${packageCategoryBadge(data, key)}<div class="package-detail-hero-copy"><p class="eyebrow">${escapeHtml(data.kicker || 'Nusa Penida Experience')}</p><h1>${data.title || escapeHtml(title)}</h1></div></div><div class="package-detail-intro"><p class="package-detail-description">${escapeHtml(data.description || '')}</p><div class="package-card-facts"><span><b>${escapeHtml(data.time || 'One-day tour')}</b><small>Duration</small></span><span><b>${escapeHtml(data.price || 'All-inclusive')}</b><small>Pricing policy</small></span><span><b>${escapeHtml(data.size || '2–5 guests')}</b><small>Guests</small></span></div>${data.destinations ? `<div class="package-card-destinations"><span>Destinations</span><strong>${formatText(data.destinations)}</strong></div>` : ''}${ratesMarkup}<button class="button button-dark package-detail-book" type="button">Book this trip <span>↗</span></button></div></div><div class="package-detail-content"><details open><summary>${escapeHtml(data.includesHeading || 'Package inclusions')} <b>+</b></summary><ul>${includes.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul></details>${data.excludes?.length ? `<details><summary>${escapeHtml(data.excludesHeading || 'What’s Excluded')} <b>+</b></summary><ul>${data.excludes.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul></details>` : ''}<details><summary>${escapeHtml(data.itineraryHeading || 'View the full itinerary')} <b>+</b></summary><div class="package-card-itinerary">${itinerary.map(([step, heading, description]) => `<div><span>${escapeHtml(step)}</span><p><strong>${escapeHtml(heading)}</strong>${description ? `<small>${escapeHtml(description)}</small>` : ''}</p></div>`).join('')}</div></details><details><summary>Tour notes <b>+</b></summary><ul>${notes.map(note => `<li>${escapeHtml(note)}</li>`).join('')}</ul></details><details><summary>What to bring <b>+</b></summary><ul>${bringFor(data).map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul></details></div></div>${packageBottomContent(data, title, key)}`;
}
function openPackagePage(key, replace = false) {
  if (!packages[key]) return;
  const page = document.querySelector('#package-detail-page');
  if (!page) return;
  if (!document.body.classList.contains('package-detail-active') && !replace) {
    landingReturnScrollY = window.scrollY;
    landingReturnHash = window.location.hash || '#packages';
  }
  selectPackage(key, false);
  page.innerHTML = detailMarkup(key, packages[key]);
  page.hidden = false;
  document.body.classList.add('package-detail-active');
  document.querySelectorAll('.landing-only').forEach(section => { section.hidden = true; });
  const packageUrl = `?package=${encodeURIComponent(key)}`;
  if (replace) history.replaceState({ package: key }, '', packageUrl);
  else history.pushState({ package: key }, '', packageUrl);
  window.scrollTo({ top: 0, behavior: 'auto' });
  page.querySelector('.package-back')?.addEventListener('click', (event) => { const backPackage = event.currentTarget.dataset.backPackage; if (backPackage) openPackagePage(backPackage, true); else showLanding(); });
  page.querySelectorAll('[data-open-package]').forEach((choice) => choice.addEventListener('click', () => openPackagePage(choice.dataset.openPackage)));
  page.querySelectorAll('[data-rental-package-key]').forEach((button) => button.addEventListener('click', () => {
    let places = [];
    try { places = JSON.parse(button.dataset.rentalDestinations || '[]'); } catch { places = []; }
    const price = Number((button.dataset.rentalPrice || '').replace(/[^0-9]/g, ''));
    openBooking(button.dataset.rentalPackageKey, { title: button.dataset.rentalRoute, price, places });
  }));
  page.querySelector('.package-detail-intro button.package-detail-book')?.addEventListener('click', () => openBooking(key));
  startPhotoRotators(page);
}
function showLanding() {
  document.querySelector('#package-detail-page')?.setAttribute('hidden', '');
  document.body.classList.remove('package-detail-active');
  document.querySelectorAll('.landing-only').forEach(section => { section.hidden = false; });
  history.replaceState({}, '', `${window.location.pathname}${landingReturnHash}`);
  window.requestAnimationFrame(() => {
    window.scrollTo({ top: landingReturnScrollY, behavior: 'auto' });
  });
}
function selectPackage(key, shouldScroll = false) {
  const data = packages[key];
  if (!data) return;
  activeBookingPackageKey = key;
  document.querySelectorAll('[data-package-card]').forEach((card) => card.classList.toggle('selected', card.dataset.packageCard === key));
  if (packageSelect) packageSelect.value = data.bookingPackageKey || key;
  const childrenField = document.querySelector('#children-field');
  const childrenInput = document.querySelector('#children');
  const assuranceField = document.querySelector('#booking-assurance')?.closest('.booking-field');
  const hideRentalAssurance = key === 'carRentalService' || key === 'motorbikeDriver';
  if (assuranceField) assuranceField.hidden = hideRentalAssurance;
  const isPackage09 = key === 'westTrip09' || key === 'eastTrip09';
  const isStandardLandPackage = Number(data.number) >= 1 && Number(data.number) <= 6 && !isPackage09;
  const isRentalPackage = key === 'carRentalService' || key === 'motorbikeDriver';
  const showHotelLocation = isStandardLandPackage || isPackage09 || isRentalPackage;
  const hideChildrenCount = childCountHiddenPackageKeys.has(key) || (!isStandardLandPackage && !isPackage09);
  const adultCountLabel = document.querySelector('#adult-count-label');
  if (adultCountLabel) adultCountLabel.textContent = hideChildrenCount ? '👥 Number of guests:' : '👥 Number of Adults:';
  if (childrenField) childrenField.hidden = hideChildrenCount;
  if (childrenInput) {
    childrenInput.disabled = hideChildrenCount;
    childrenInput.required = !hideChildrenCount;
    if (hideChildrenCount) childrenInput.value = '0';
  }
  if (bookingDestinations) bookingDestinations.value = window.GREEN_TOURS_I18N?.translate(data.destinations || 'To be confirmed by our team.') || data.destinations || 'To be confirmed by our team.';
  const discountCodeField = document.querySelector('#discount-code-field');
  const discountEligible = isStandardLandPackage;
  if (discountCodeField) discountCodeField.hidden = !discountEligible;
  if (!discountEligible) {
    const discountCode = document.querySelector('#discount-code');
    if (discountCode) discountCode.value = '';
  }
  const hotelField = document.querySelector('#hotel')?.closest('.booking-field');
  if (hotelField) hotelField.hidden = !showHotelLocation;
  const hotelInput = document.querySelector('#hotel');
  if (hotelInput) {
    hotelInput.disabled = !showHotelLocation;
    hotelInput.required = showHotelLocation;
    hotelInput.placeholder = isPackage09 || isRentalPackage ? 'Nusa Penida Pick-up Point' : 'Hotel name, area, Bali';
    const hotelLabel = document.querySelector('label[for="hotel"]');
    if (hotelLabel) hotelLabel.textContent = isPackage09 || isRentalPackage ? '🏨 Hotel name / pick-up point' : '🏨 Hotel name & location';
  }
  updateBookingPrice();
  if (shouldScroll) document.querySelector(`#package-${key}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function openBooking(key, rentalRoute = null) {
  activeRentalBooking = rentalRoute ? { packageKey: key, ...rentalRoute } : null;
  if (packageSelect) packageSelect.disabled = Boolean(rentalRoute);
  selectPackage(key, false);
  if (bookingDialog?.showModal) bookingDialog.showModal();
  updateBookingPrice();
}
function updateBookingPrice() {
  const data = packages[activeBookingPackageKey] || packages[packageSelect?.value];
  const adults = Number(document.querySelector('#adults')?.value || 0);
  const children = Number(document.querySelector('#children')?.value || 0);
  const guests = adults + children;
  if (activeRentalBooking && bookingPrice) {
    const vehicles = activeRentalBooking.packageKey === 'carRentalService' ? Math.ceil(adults / 5) : adults;
    const total = activeRentalBooking.price * vehicles;
    bookingPrice.textContent = `Estimated package total: IDR ${total.toLocaleString('en-US')} · ${activeRentalBooking.title} · One day.`;
    return;
  }
  if (data?.participantRates?.length) {
    const rate = data.participantRates.find((row) => row.participants === guests);
    if (!bookingPrice) return;
    if (!rate) {
      bookingPrice.textContent = 'Rates are available for groups of 2–5 participants.';
      return;
    }
    const total = adults * rate.adultPrice + children * rate.childPrice;
    bookingPrice.textContent = `Estimated package total: IDR ${total.toLocaleString('en-US')} · ${adults} adult${adults === 1 ? '' : 's'}, ${children} child${children === 1 ? '' : 'ren'}.\nRate for ${guests} participants: Adult IDR ${rate.adultPrice.toLocaleString('en-US')} / person · Child IDR ${rate.childPrice.toLocaleString('en-US')} / person.`;
    return;
  }
  if (data?.perPersonPrice && bookingPrice) {
    if (guests <= 0) {
      bookingPrice.textContent = 'Enter the number of guests to view the estimated total.';
      return;
    }
    const total = guests * data.perPersonPrice;
    bookingPrice.textContent = `Estimated package total: IDR ${total.toLocaleString('en-US')} · ${guests} guest${guests === 1 ? '' : 's'} at IDR ${data.perPersonPrice.toLocaleString('en-US')} / person.`;
    return;
  }
  const match = data?.rates?.find(([group]) => { const numbers = [...group.matchAll(/\d+/g)].map((item) => Number(item[0])); return numbers.length > 1 ? guests >= numbers[0] && guests <= numbers[1] : numbers[0] === guests; });
  const unit = data?.rateUnit || 'per person';
  if (bookingPrice) bookingPrice.textContent = match ? `Estimated package price: ${match[1]} · ${unit}` : (data?.rates ? `Enter the number of guests to view the price ${unit}.` : 'The price will be confirmed by our team.');
}

startHeroPhotoRotator();
renderPackageCards();
bookingPackageEntries.forEach(([key]) => { if (packageSelect) packageSelect.insertAdjacentHTML('beforeend', `<option value="${escapeHtml(key)}">${escapeHtml(packages[key].message || key)}</option>`); });
if (packageSelect) packageSelect.value = 'west';
const initialPackage = new URLSearchParams(window.location.search).get('package');
selectPackage(initialPackage && packages[initialPackage] ? initialPackage : 'west', false);
if (initialPackage && packages[initialPackage]) openPackagePage(initialPackage, true);
window.addEventListener('popstate', () => {
  const key = new URLSearchParams(window.location.search).get('package');
  if (key && packages[key]) openPackagePage(key, true); else showLanding();
});

['#adults', '#children'].forEach((selector) => document.querySelector(selector)?.addEventListener('input', updateBookingPrice));
packageSelect?.addEventListener('change', () => selectPackage(packageSelect.value, true));
document.querySelector('.dialog-close')?.addEventListener('click', () => bookingDialog?.close());
bookingDialog?.addEventListener('click', (event) => { if (event.target === bookingDialog) bookingDialog.close(); });
bookingForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(bookingForm).entries());
  const packageKey = activeBookingPackageKey || data.tourPackage;
  const selected = packages[packageKey] || packages[data.tourPackage];
  const isPackage09 = packageKey === 'westTrip09' || packageKey === 'eastTrip09';
  const standardLandPackage = Number(selected?.number) >= 1 && Number(selected?.number) <= 6 && !isPackage09;
  const rentalPackage = packageKey === 'carRentalService' || packageKey === 'motorbikeDriver';
  const hasHotelLocation = standardLandPackage || isPackage09 || rentalPackage;
  const hasChildren = standardLandPackage || isPackage09;
  const payload = {
    package_key: packageKey,
    travel_date: data.travelDate,
    full_name: String(data.fullName || '').trim(),
    adults: Number(data.adults),
    whatsapp: String(data.whatsapp || '').trim(),
    destinations: activeRentalBooking?.places?.join(' • ') || data.destinations || selected?.destinations || 'To be confirmed by our team.',
    special_requests: String(data.specialRequest || '').trim(),
  };
  if (activeRentalBooking) payload.rental_route = activeRentalBooking.title;
  if (hasChildren) payload.children_3_8 = Number(data.children || 0);
  if (hasHotelLocation) payload.hotel_location = String(data.hotel || '').trim();
  if (standardLandPackage) {
    payload.discount_code = String(data.discountCode || '').trim();
  }
  const submitButton = bookingForm.querySelector('button[type="submit"]');
  if (submitButton) submitButton.disabled = true;
  let bookingSaved = false;
  if (bookingStatus) bookingStatus.textContent = 'Saving your booking securely…';
  try {
    const response = await fetch(`${supabaseProjectUrl}/functions/v1/create-booking`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', apikey: supabasePublishableKey },
      body: JSON.stringify(payload),
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok || result.ok !== true) throw new Error(result.message || 'Booking could not be saved. Please try again.');
    bookingSaved = true;
    if (bookingStatus) bookingStatus.textContent = 'Your booking has been saved. Green Tours Penida will follow up using your provided contact number.';
  } catch (error) {
    if (bookingStatus) bookingStatus.textContent = error instanceof Error ? error.message : 'We could not save your booking. Please try again.';
  } finally {
    if (submitButton) submitButton.disabled = bookingSaved;
  }
});

document.querySelectorAll('.faq-item').forEach((item) => item.addEventListener('toggle', () => { if (item.open) document.querySelectorAll('.faq-item').forEach((other) => { if (other !== item) other.removeAttribute('open'); }); }));
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.desktop-nav');
menu?.addEventListener('click', () => { const expanded = menu.getAttribute('aria-expanded') === 'true'; menu.setAttribute('aria-expanded', String(!expanded)); nav?.classList.toggle('mobile-open', !expanded); });
nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => { menu?.setAttribute('aria-expanded', 'false'); nav?.classList.remove('mobile-open'); }));
function observeReveals() { if (!observer) return; document.querySelectorAll('.reveal:not(.visible)').forEach((element) => observer.observe(element)); }
observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: 0.08 });
observeReveals();

document.querySelectorAll('a[href*="wa.me"]').forEach((link) => { link.href = whatsappLink('Hello Green Tours Penida, I would like to book a trip.'); });
document.querySelectorAll('.hero-actions a[href="#packages"], .hero-actions a[href="#experience"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    history.replaceState(null, '', link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
