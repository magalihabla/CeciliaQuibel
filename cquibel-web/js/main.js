/**
 * CQuibel Propiedades — Main Application JS
 */

// ─── Shared Utilities ────────────────────────────────────────────────────────

/** Render skeleton loading cards */
function renderSkeletons(container, count = 6) {
  container.innerHTML = Array(count).fill(`
    <div class="skeleton">
      <div class="skeleton-img"></div>
      <div class="skeleton-body">
        <div class="skeleton-line short"></div>
        <div class="skeleton-line medium"></div>
        <div class="skeleton-line"></div>
        <div class="skeleton-line short"></div>
      </div>
    </div>
  `).join('');
}

/** Build a property card HTML */
function buildPropertyCard(prop) {
  const opType   = TOKKO.getOperationType(prop);
  const badge    = opType === 'Rent' ? 'Alquiler' : opType === 'Sale' ? 'Venta' : '';
  const badgeCls = opType === 'Rent' ? 'rent' : 'sale';
  const price    = TOKKO.formatPrice(prop);
  const location = TOKKO.getLocation(prop);
  const rooms    = prop.room_amount ? `<span class="card-feature">${iconBed()}${prop.room_amount} amb.</span>` : '';
  const baths    = prop.bathroom_amount ? `<span class="card-feature">${iconBath()}${prop.bathroom_amount} baño${prop.bathroom_amount > 1 ? 's' : ''}</span>` : '';
  const surf     = prop.roofed_surface && parseFloat(prop.roofed_surface) > 0
    ? `<span class="card-feature">${iconSquare()}${parseFloat(prop.roofed_surface)} m²</span>` : '';

  const photos = (prop.photos && prop.photos.length)
    ? prop.photos.slice(0, 8).map(p => p.image)
    : [TOKKO.getPhoto(prop, 'img/placeholder.jpg')];
  const multi = photos.length > 1;

  const slides = photos.map((src, i) =>
    `<img src="${src}" alt="${prop.publication_title}" ${i > 0 ? 'loading="lazy"' : ''} onerror="this.src='img/placeholder.jpg'">`
  ).join('');

  const controls = multi ? `
    <button class="carousel-btn carousel-prev" onclick="event.stopPropagation();carouselMove(this,-1)" aria-label="Anterior">&#8249;</button>
    <button class="carousel-btn carousel-next" onclick="event.stopPropagation();carouselMove(this,1)" aria-label="Siguiente">&#8250;</button>
    <div class="carousel-dots">${photos.map((_,i) => `<span class="carousel-dot${i===0?' active':''}"></span>`).join('')}</div>
  ` : '';

  return `
    <article class="property-card" onclick="window.location='propiedad.html?id=${prop.id}'" tabindex="0" role="link"
      onkeydown="if(event.key==='Enter')window.location='propiedad.html?id=${prop.id}'">
      <div class="card-image card-carousel" data-index="0">
        <div class="carousel-track">${slides}</div>
        ${badge ? `<span class="card-badge ${badgeCls}">${badge}</span>` : ''}
        <span class="card-price-chip">${price}</span>
        ${controls}
      </div>
      <div class="card-body">
        <div class="card-type">${prop.type ? t(prop.type.name) : ''}</div>
        <h3 class="card-title">${prop.publication_title || prop.address}</h3>
        <p class="card-location">${iconPin()}${location}</p>
        <div class="card-features">
          ${rooms}${baths}${surf}
        </div>
        <p class="card-ref">Ref: ${prop.reference_code || prop.id}</p>
      </div>
    </article>
  `;
}

/** Move carousel prev (-1) or next (1) */
function carouselMove(btn, dir) {
  const carousel = btn.closest('.card-carousel');
  const track    = carousel.querySelector('.carousel-track');
  const imgs     = track.querySelectorAll('img');
  let   idx      = parseInt(carousel.dataset.index || 0) + dir;
  if (idx < 0) idx = imgs.length - 1;
  if (idx >= imgs.length) idx = 0;
  carousel.dataset.index     = idx;
  track.style.transform      = `translateX(-${idx * 100}%)`;
  carousel.querySelectorAll('.carousel-dot').forEach((d, i) => d.classList.toggle('active', i === idx));
}

// Touch swipe support for carousels
let _swipeX = 0;
document.addEventListener('touchstart', e => {
  if (e.target.closest('.card-carousel')) _swipeX = e.changedTouches[0].clientX;
}, { passive: true });
document.addEventListener('touchend', e => {
  const c = e.target.closest('.card-carousel');
  if (!c) return;
  const dx = e.changedTouches[0].clientX - _swipeX;
  if (Math.abs(dx) > 40) {
    const btn = c.querySelector(dx > 0 ? '.carousel-prev' : '.carousel-next');
    if (btn) btn.click();
  }
});

/** Build a development card HTML */
function buildDevCard(dev) {
  const photo = (dev.photos && dev.photos.length) ? dev.photos[0].image : 'img/placeholder.jpg';
  const loc   = dev.address || '';
  return `
    <article class="property-card" onclick="window.location='emprendimiento.html?id=${dev.id}'" tabindex="0" role="link"
      onkeydown="if(event.key==='Enter')window.location='emprendimiento.html?id=${dev.id}'">
      <div class="card-image">
        <img src="${photo}" alt="${dev.name}" loading="lazy" onerror="this.src='img/placeholder.jpg'">
        <span class="card-badge dev">Emprendimiento</span>
      </div>
      <div class="card-body">
        <div class="card-type">${dev.construction_status || 'En desarrollo'}</div>
        <h3 class="card-title">${dev.name}</h3>
        <p class="card-location">${iconPin()}${loc}</p>
        <div class="card-features">
          ${dev.floors ? `<span class="card-feature">${iconSquare()}${dev.floors} pisos</span>` : ''}
          ${dev.units ? `<span class="card-feature">${iconBed()}${dev.units} unidades</span>` : ''}
        </div>
      </div>
    </article>
  `;
}

// ─── Traducciones ────────────────────────────────────────────────────────────
const TRANSLATIONS = {
  // Tipos de propiedad
  'Apartment':        'Departamento',
  'House':            'Casa',
  'Office':           'Oficina',
  'PH':               'PH',
  'Store':            'Local comercial',
  'Warehouse':        'Depósito',
  'Land':             'Terreno',
  'Building':         'Edificio',
  'Country house':    'Casa de campo',
  'Department':       'Departamento',
  'Commercial':       'Local comercial',
  'Garage':           'Cochera',
  'Hotel':            'Hotel',

  // Disposición
  'Front':            'Frente',
  'Back':             'Contrafrente',
  'Side':             'Lateral',
  'Interior':         'Interior',
  'Exterior':         'Exterior',

  // Amenities / tags
  'Balcony':                    'Balcón',
  'Storage room':               'Baulera',
  'Kitchen':                    'Cocina',
  'Dependency':                 'Dependencia de servicio',
  'Laundry':                    'Lavadero',
  'Dining lounge':              'Comedor',
  'Dining room':                'Comedor',
  'Living room':                'Living',
  'Toilette':                   'Toilette',
  'Dresser':                    'Vestidor',
  'Individual Air conditioner': 'Aire acondicionado individual',
  'Central Air conditioner':    'Aire acondicionado central',
  'Air conditioner':            'Aire acondicionado',
  'Pool':                       'Pileta',
  'Gym':                        'Gimnasio',
  'Terrace':                    'Terraza',
  'Garden':                     'Jardín',
  'Elevator':                   'Ascensor',
  'Security':                   'Seguridad 24hs',
  'Grill':                      'Parrilla',
  'Parking':                    'Estacionamiento',
  'Hall':                       'Hall',
  'Study room':                 'Escritorio',
  'Playroom':                   'Sala de juegos',
  'Central heating':            'Calefacción central',
  'Natural gas':                'Gas natural',
  'Solarium':                   'Solarium',
  'Sauna':                      'Sauna',
  'Jacuzzi':                    'Jacuzzi',
  'Business center':            'Business center',
  'Coworking':                  'Coworking',
  'Sum':                        'SUM',
  'Spa':                        'Spa',
  'Quincho':                    'Quincho',
  'Game room':                  'Sala de juegos',
  'Doorman':                    'Portería',
  'Fire place':                 'Chimenea',
  'Fireplace':                  'Chimenea',
  'Heating':                    'Calefacción',
  'Hot water':                  'Agua caliente',
  'Gas':                        'Gas',
  'Cable TV':                   'Cable',
  'Internet':                   'Internet',
  'Telephone':                  'Teléfono',
};

function t(term) {
  if (!term) return '';
  return TRANSLATIONS[term] || TRANSLATIONS[term.trim()] || term;
}

// ─── SVG Icons ───────────────────────────────────────────────────────────────
const iconPin    = () => `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`;
const iconBed    = () => `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 4v16M2 8h20M22 4v16M2 12h20"/></svg>`;
const iconBath   = () => `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12h16a1 1 0 0 1 1 1v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3a1 1 0 0 1 1-1z"/><path d="M6 12V5a2 2 0 0 1 2-2h3v2.25"/></svg>`;
const iconSquare = () => `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>`;
const iconCheck  = () => `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`;

// ─── Navigation active state ─────────────────────────────────────────────────
(function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href === path || (path === 'index.html' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();

// ─── Mobile nav toggle ───────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('navToggle');
  const menu   = document.getElementById('navMenu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => menu.classList.toggle('open'));
  }
});

// ─── Contact Form ────────────────────────────────────────────────────────────
async function submitContactForm(e) {
  e.preventDefault();
  const form    = e.target;
  const btn     = form.querySelector('[type=submit]');
  const status  = form.querySelector('.form-status');

  const name     = form.querySelector('[name=name]').value.trim();
  const email    = form.querySelector('[name=email]').value.trim();
  const phone    = form.querySelector('[name=phone]')?.value.trim() || '';
  const interest = form.querySelector('[name=interest]')?.value || '';
  const message  = form.querySelector('[name=message]').value.trim();
  const _hp      = form.querySelector('[name=_hp]')?.value || '';

  const payload = { name, email, phone, interest, message, _hp };

  btn.disabled = true;
  btn.textContent = 'Enviando…';

  try {
    const res  = await fetch('mail.php', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body:    JSON.stringify(payload),
    });
    const json = await res.json();
    if (json.success) {
      status.className = 'form-status success';
      status.textContent = '¡Mensaje enviado! Te contactaremos pronto.';
      form.reset();
    } else {
      throw new Error(json.message || 'Error');
    }
  } catch {
    status.className = 'form-status error';
    status.textContent = 'Hubo un error. Por favor escribinos a cquibel.propiedades@gmail.com';
  } finally {
    btn.disabled = false;
    btn.textContent = 'Enviar consulta';
    status.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

// Bind all contact forms
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.contact-form').forEach(f => {
    f.addEventListener('submit', submitContactForm);
  });
});
