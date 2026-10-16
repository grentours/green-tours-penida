const packages = window.GREEN_TOURS_CONTENT?.packages ?? {};
const whatsappNumber = window.GREEN_TOURS_CONTENT?.whatsappNumber ?? '6283894497992';
const detail = document.querySelector('#package-detail');

function whatsappLink(message) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

const landItineraryList = document.querySelector('#land-itinerary-list');
const defaultLandItinerary = landItineraryList?.innerHTML || '';
const landIncludesList = document.querySelector('#land-includes-list');
const defaultLandIncludes = landIncludesList?.innerHTML || '';

function renderLandIncludes(data) {
  if (!landIncludesList) return;
  landIncludesList.innerHTML = data.includes ? data.includes.map((item) => `<li>${item}</li>`).join('') : defaultLandIncludes;
}

function renderLandItinerary(data) {
  if (!landItineraryList) return;
  if (!data.itinerary) {
    landItineraryList.innerHTML = defaultLandItinerary;
    return;
  }
  landItineraryList.innerHTML = data.itinerary.map(([step, title, description]) => `<article class=\"itinerary-item reveal\"><span class=\"step\">${step}</span><div><h3>${title}</h3>${description ? `<p>${description}</p>` : ''}</div><span class=\"step-icon\">${step === '🏁' ? '🏁' : '📍'}</span></article>`).join('');
}

function renderSnorkelingDetails(data) {
  const landDetails = document.querySelector('#land-details');
  const snorkelingDetails = document.querySelector('#snorkeling-details');
  const westItinerary = document.querySelector('#west-itinerary');
  if (!landDetails || !snorkelingDetails) return;
  const info = data.snorkeling;
  landDetails.hidden = Boolean(info);
  if (westItinerary) westItinerary.hidden = Boolean(info);
  snorkelingDetails.hidden = !info;
  if (!info) return;
  const includesList = document.querySelector('#snorkeling-includes-list');
  const itineraryList = document.querySelector('#snorkeling-itinerary-list');
  const notesList = document.querySelector('#snorkeling-notes-list');
  if (includesList) includesList.innerHTML = info.includes.map((item) => `<li>${item}</li>`).join('');
  if (notesList) notesList.innerHTML = info.notes.map((item) => `<li>${item}</li>`).join('');
  if (itineraryList) itineraryList.innerHTML = info.itinerary.map(([step, title, description]) => `<article class="itinerary-item reveal"><span class="step">${step}</span><div><h3>${title}</h3>${description ? `<p>${description}</p>` : ''}</div><span class="step-icon">${step === '🏁' ? '🏁' : '📍'}</span></article>`).join('');
}

const tourDetailsTitles = {
  west: 'Nusa Penida West Tour Package Details',
  east: 'Nusa Penida East Tour Package Details',
  mix: 'Nusa Penida Mix Tour Package Details',
  snorkelland: 'Nusa Penida Snorkeling & Land Tour Package Details',
  privatesnorkelland: 'Nusa Penida Private Snorkeling & Land Tour Package Details',
  twoDay: 'Nusa Penida 2 Day 1 Night Tour Package Details',
  manta: 'Nusa Penida Manta Point Snorkeling Package Details',
  matabay: 'Nusa Penida Manta Bay Snorkeling Package Details'
};
function renderTourDetailsHeading(key) {
  const title = tourDetailsTitles[key] || 'Nusa Penida Tour Package Details';
  document.querySelectorAll('.tour-details-heading').forEach((heading) => { heading.textContent = title; });
}
function renderDestinationPhotos(data) {
  document.querySelectorAll('.destination-photo-strip').forEach((strip) => {
    const photos = data?.destinationPhotos || [];
    strip.innerHTML = photos.length
      ? photos.map((photo) => `<figure><img src="${photo.src}" alt="${photo.alt || 'Nusa Penida destination'}" loading="lazy"></figure>`).join('')
      : '<p class="destination-photo-empty">Destination photos will be added here.</p>';
  });
}
function selectPackage(key, shouldScroll = true) {
  const data = packages[key];
  if (!data) return;
  const heroKicker = document.querySelector('#hero-kicker');
  const heroTitle = document.querySelector('#hero-title');
  const heroLede = document.querySelector('#hero-lede');
  const heroImage = document.querySelector('#hero-image');
  if (heroKicker) heroKicker.textContent = data.kicker;
  if (heroTitle) heroTitle.innerHTML = data.heroTitle || data.title;
  if (heroLede) heroLede.textContent = data.heroDescription || data.description;
  if (heroImage) {
    heroImage.classList.add('package-switching');
    heroImage.src = data.heroImage || 'assets/manta-penida.webp';
    heroImage.alt = data.heroAlt || data.message;
    heroImage.addEventListener('load', () => heroImage.classList.remove('package-switching'), { once: true });
  }
  renderTourDetailsHeading(key);
  renderDestinationPhotos(data);
  document.querySelector('#package-kicker').textContent = data.kicker;
  document.querySelector('#package-title').innerHTML = data.title;
  document.querySelector('#package-number').textContent = data.number;
  document.querySelector('#package-description').textContent = data.description;
  document.querySelectorAll('.tour-details-destinations').forEach((block) => {
    const destinationText = block.querySelector('strong');
    block.hidden = !data.destinations;
    if (destinationText) destinationText.textContent = data.destinations || '';
  });
  const bookingDestinationBlock = document.querySelector('#package-destinations');
  const bookingDestinationText = document.querySelector('#package-destinations-text');
  if (bookingDestinationBlock && bookingDestinationText) {
    bookingDestinationBlock.hidden = !data.destinations;
    bookingDestinationText.textContent = data.destinations || '';
  }
  document.querySelector('#package-time').textContent = data.time;
  document.querySelector('#package-price').textContent = data.price;
  document.querySelector('#package-size').textContent = data.size;
  renderLandIncludes(data);
  renderLandItinerary(data);
  renderSnorkelingDetails(data);
  const ratesBox = document.querySelector('#package-rates');
  const ratesList = document.querySelector('#package-rates-list');
  const ratesLabel = document.querySelector('#package-rates-label');
  ratesBox.hidden = !data.rates;
  if (ratesLabel) ratesLabel.innerHTML = data.rateUnit ? `PRICE <span>· ${data.rateUnit}</span>` : 'PACKAGE PRICE <span>· per person</span>';
  ratesList.innerHTML = data.rates ? data.rates.map(([group, rate]) => `<span><b>${group}</b><strong>${rate}</strong></span>`).join('') : '';
  document.querySelector('#package-cta').href = whatsappLink(`Hi Green Tours Penida, I’d like to book the ${data.message} trip.`);
  syncBookingPackage(key);
  document.querySelectorAll('[data-package]').forEach((button) => {
    const active = button.dataset.package === key;
    button.classList.toggle('active', active);
    if (button.getAttribute('role') === 'tab') button.setAttribute('aria-selected', active);
  });
  detail.animate([{ opacity: 0.35, transform: 'translateY(5px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 320, easing: 'ease-out' });
  observeDynamicReveals?.();
  if (shouldScroll) document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.querySelectorAll('.package-tab, .mobile-package').forEach((button) => button.addEventListener('click', () => selectPackage(button.dataset.package, true)));
document.querySelectorAll('a[href*="wa.me"]').forEach((link) => {
  const isHeader = link.classList.contains('header-cta');
  link.href = whatsappLink(isHeader ? 'Hi Green Tours Penida, I’d like to book a trip.' : 'Hi Green Tours Penida, I’d like to plan a trip.');
});

const bookingForm = document.querySelector('#booking-form');
const packageSelect = document.querySelector('#tour-package');
const bookingStatus = document.querySelector('#booking-status');
const bookingDialog = document.querySelector('#booking-dialog');
const bookingPrice = document.querySelector('#booking-price');
const bookingDestinations = document.querySelector('#booking-destinations');
const travelDate = document.querySelector('#travel-date');
if (travelDate) travelDate.min = new Date().toISOString().split('T')[0];
if (packageSelect) {
  packageSelect.innerHTML = Object.entries(packages).map(([key, data]) => `<option value="${key}">${data.message}</option>`).join('');
  packageSelect.value = 'west';
}
function syncBookingPackage(key) {
  if (!packages[key]) return;
  if (packageSelect) packageSelect.value = key;
  if (bookingDestinations) bookingDestinations.value = packages[key].destinations || 'To be confirmed by our team.';
}
function updateBookingPrice() {
  const data = packages[packageSelect?.value];
  const guests = Number(document.querySelector('#guests')?.value || 0);
  const match = data?.rates?.find(([group]) => {
    const numbers = [...group.matchAll(/\d+/g)].map((item) => Number(item[0]));
    return numbers.length > 1 ? guests >= numbers[0] && guests <= numbers[1] : numbers[0] === guests;
  });
  const unit = data?.rateUnit || 'per person';
  if (bookingPrice) bookingPrice.textContent = match ? `Estimated package price: ${match[1]} · ${unit}` : (data?.rates ? `Enter the number of guests to see the ${unit}.` : 'Price will be confirmed by our team.');
}
document.querySelector('#guests')?.addEventListener('input', updateBookingPrice);
packageSelect?.addEventListener('change', () => { syncBookingPackage(packageSelect.value); updateBookingPrice(); });
document.querySelectorAll('.package-tab, .mobile-package').forEach((button) => button.addEventListener('click', () => syncBookingPackage(button.dataset.package)));
document.querySelector('#package-cta')?.addEventListener('click', (event) => { event.preventDefault(); bookingDialog?.showModal(); updateBookingPrice(); });
document.querySelector('.dialog-close')?.addEventListener('click', () => bookingDialog?.close());
bookingDialog?.addEventListener('click', (event) => { if (event.target === bookingDialog) bookingDialog.close(); });
bookingForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(bookingForm).entries());
  const selected = packages[data.tourPackage];
  const message = [
    'BOOKING REQUEST — Green Tours Penida',
    '', `Travel date: ${data.travelDate}`, `Guests: ${data.guests}`, `Tour package: ${selected?.message || data.tourPackage}`, `Destinations: ${data.destinations || selected?.destinations || 'To be confirmed by our team.'}`, 'Package policy: ALL-INCLUSIVE • NO HIDDEN FEES',
    `Hotel & location: ${data.hotel}`, `Full name: ${data.fullName}`, `WhatsApp: ${data.whatsapp}`,
    data.specialRequest ? `Special request: ${data.specialRequest}` : ''
  ].filter(Boolean).join('\n');
  bookingStatus.textContent = 'WhatsApp Green Tours Penida sedang dibuka. Silakan kirim pesan booking Anda.';
  window.open(whatsappLink(message), '_blank', 'noopener,noreferrer');
});

document.querySelectorAll('.faq-item').forEach((item) => item.addEventListener('toggle', () => {
  if (item.open) document.querySelectorAll('.faq-item').forEach((other) => { if (other !== item) other.removeAttribute('open'); });
}));

const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.desktop-nav');
menu?.addEventListener('click', () => {
  const expanded = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', String(!expanded));
  nav.classList.toggle('mobile-open', !expanded);
});
nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menu?.setAttribute('aria-expanded', 'false');
  nav.classList.remove('mobile-open');
}));

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
}), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
function observeDynamicReveals() { landItineraryList?.querySelectorAll('.reveal').forEach((element) => observer.observe(element)); }

const initialPackage = new URLSearchParams(window.location.search).get('package');
selectPackage(packages[initialPackage] ? initialPackage : 'west', false);
if (packages.manta?.snorkeling || packages.matabay?.snorkeling) {
  document.querySelectorAll('.package-tab, .mobile-package').forEach((button) => button.addEventListener('click', () => {
    document.querySelectorAll('#snorkeling-details .reveal').forEach((element) => observer.observe(element));
  }));
}
