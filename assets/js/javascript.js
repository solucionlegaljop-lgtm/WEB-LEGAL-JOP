const CONTACT_PHONE = '18296963082';
const CONTACT_EMAIL = 'solucionlegal@gmail.com';
const isLocalPreview = window.location.protocol === 'file:' || window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
const canUseRuntimeOptimizations = window.location.protocol === 'http:' || window.location.protocol === 'https:';
const prefetchedUrls = new Set();

window.dataLayer = window.dataLayer || [];

const propertyCatalog = {
    'apartamento-bella-vista': {
        title: 'Apartamento familiar en Bella Vista',
        type: 'Apartamento',
        status: 'Disponible',
        transaction: 'Venta',
        price: 'US$185,000',
        location: 'Bella Vista, Santo Domingo',
        icon: 'fas fa-building',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1100&q=80',
        gallery: [
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1100&q=80',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1100&q=80',
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1100&q=80'
        ],
        description: 'Apartamento amplio y luminoso, ideal para familias que buscan buena distribucion, ubicacion centrica y acceso rapido a servicios principales.',
        features: {
            bedrooms: 3,
            bathrooms: 2,
            area: '124 m2',
            parking: 2
        },
        amenities: [
            'Sala y comedor integrados',
            'Balcon con vista urbana',
            'Cocina modular',
            'Area de lavado independiente',
            'Ascensor y lobby',
            'Seguridad controlada'
        ]
    },
    'casa-arroyo-hondo': {
        title: 'Casa de dos niveles en Arroyo Hondo',
        type: 'Casa',
        status: 'Disponible',
        transaction: 'Venta',
        price: 'RD$13,500,000',
        location: 'Arroyo Hondo, Distrito Nacional',
        icon: 'fas fa-house',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1100&q=80',
        gallery: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1100&q=80',
            'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1100&q=80',
            'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1100&q=80'
        ],
        description: 'Casa espaciosa con patio, terraza y areas sociales pensadas para una vida familiar comoda en una zona residencial tranquila.',
        features: {
            bedrooms: 4,
            bathrooms: 3.5,
            area: '260 m2',
            parking: 3
        },
        amenities: [
            'Patio privado',
            'Terraza techada',
            'Habitacion de servicio',
            'Estudio familiar',
            'Cisterna',
            'Marquesina para tres vehiculos'
        ]
    },
    'alquiler-piantini': {
        title: 'Apartamento amueblado en Piantini',
        type: 'Apartamento',
        status: 'Listo para ocupar',
        transaction: 'Alquiler',
        price: 'US$1,450/mes',
        location: 'Piantini, Santo Domingo',
        icon: 'fas fa-key',
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1100&q=80',
        gallery: [
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1100&q=80',
            'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?auto=format&fit=crop&w=1100&q=80',
            'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1100&q=80'
        ],
        description: 'Apartamento amueblado con estilo contemporaneo, excelente para ejecutivos o parejas que buscan ubicacion premium y comodidad inmediata.',
        features: {
            bedrooms: 2,
            bathrooms: 2,
            area: '95 m2',
            parking: 1
        },
        amenities: [
            'Totalmente amueblado',
            'Linea blanca incluida',
            'Gimnasio en la torre',
            'Area social',
            'Planta electrica',
            'Control de acceso'
        ]
    },
    'villa-juan-dolio': {
        title: 'Villa cerca de la playa en Juan Dolio',
        type: 'Villa',
        status: 'Reservada',
        transaction: 'Venta',
        price: 'US$320,000',
        location: 'Juan Dolio, San Pedro de Macoris',
        icon: 'fas fa-umbrella-beach',
        image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1100&q=80',
        gallery: [
            'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1100&q=80',
            'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1100&q=80',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1100&q=80'
        ],
        description: 'Villa de descanso con piscina y espacios abiertos, pensada para escapadas familiares, renta vacacional o inversion turistica.',
        features: {
            bedrooms: 3,
            bathrooms: 3,
            area: '310 m2',
            parking: 2
        },
        amenities: [
            'Piscina privada',
            'Terraza exterior',
            'Jardin frontal',
            'Cocina abierta',
            'Proxima a la playa',
            'Potencial de renta corta'
        ]
    },
    'local-herrera': {
        title: 'Local comercial en Herrera',
        type: 'Local comercial',
        status: 'Disponible',
        transaction: 'Alquiler',
        price: 'RD$85,000/mes',
        location: 'Herrera, Santo Domingo Oeste',
        icon: 'fas fa-store',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1100&q=80',
        gallery: [
            'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1100&q=80',
            'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1100&q=80',
            'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1100&q=80'
        ],
        description: 'Local con buena visibilidad comercial, ideal para oficina, showroom o punto de servicios en una zona de alto movimiento.',
        features: {
            bedrooms: 0,
            bathrooms: 2,
            area: '180 m2',
            parking: 4
        },
        amenities: [
            'Frente comercial',
            'Area abierta adaptable',
            'Dos banos',
            'Parqueos disponibles',
            'Zona de alto transito',
            'Facil acceso a avenidas principales'
        ]
    },
    'solar-santo-domingo-oeste': {
        title: 'Solar para desarrollo en Santo Domingo Oeste',
        type: 'Solar',
        status: 'Oportunidad',
        transaction: 'Venta',
        price: 'RD$7,800,000',
        location: 'Santo Domingo Oeste',
        icon: 'fas fa-map',
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1100&q=80',
        gallery: [
            'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1100&q=80',
            'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1100&q=80',
            'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=1100&q=80'
        ],
        description: 'Terreno con potencial para proyecto residencial o comercial ligero, ubicado en una zona con crecimiento y buena conexion vial.',
        features: {
            bedrooms: 0,
            bathrooms: 0,
            area: '720 m2',
            parking: 0
        },
        amenities: [
            'Frente amplio',
            'Acceso por via principal',
            'Zona en desarrollo',
            'Uso potencial residencial o comercial',
            'Topografia aprovechable',
            'Ideal para inversion'
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    trackEvent('page_view', {
        page_title: document.title,
        page_location: window.location.href
    });

    document.addEventListener('click', handleTrackedClick);

    initContactForm();
    renderPropertyCards();
    renderPropertyDetail();
    initHomeCarousel();
    initHomeSocialStrip();
    initDeferredQrCodes();
    initDeferredMap();
    initRoutePrefetching();
});

window.addEventListener('load', () => {
    registerServiceWorker();
}, { once: true });

function trackEvent(eventName, payload = {}) {
    const eventData = {
        event: eventName,
        ...payload
    };

    window.dataLayer.push(eventData);

    if (isLocalPreview) {
        console.info('[JOP analytics]', eventData);
    }
}

function handleTrackedClick(event) {
    const trackedElement = event.target.closest('[data-track]');
    if (trackedElement) {
        trackEvent(trackedElement.dataset.track, {
            label: trackedElement.dataset.trackLabel || trackedElement.textContent.trim(),
            href: trackedElement.getAttribute('href') || ''
        });
        return;
    }

    const whatsappLink = event.target.closest('a[href*="wa.me/"]');
    if (whatsappLink) {
        trackEvent('whatsapp_click', {
            label: whatsappLink.getAttribute('aria-label') || whatsappLink.textContent.trim()
        });
        return;
    }

    const emailLink = event.target.closest('a[href^="mailto:"]');
    if (emailLink) {
        trackEvent('email_click', {
            label: emailLink.getAttribute('href')
        });
        return;
    }

    const phoneLink = event.target.closest('a[href^="tel:"]');
    if (phoneLink) {
        trackEvent('phone_click', {
            label: phoneLink.getAttribute('href')
        });
    }
}

function initContactForm() {
    const contactForm = document.querySelector('[data-contact-form]');
    const formMessage = document.querySelector('[data-form-message]');

    if (!contactForm || !formMessage) {
        return;
    }

    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton ? submitButton.textContent : '';
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const setFormMessage = (message, color, allowHtml = false) => {
        if (allowHtml) {
            formMessage.innerHTML = message;
        } else {
            formMessage.textContent = message;
        }

        formMessage.style.color = color;
    };

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const name = String(formData.get('name') || '').trim();
        const email = String(formData.get('email') || '').trim();
        const phone = String(formData.get('phone') || '').trim();
        const message = String(formData.get('message') || '').trim();

        if (!name || !email || !message) {
            setFormMessage('Por favor, complete los campos obligatorios.', '#d9534f');
            return;
        }

        if (!emailPattern.test(email)) {
            setFormMessage('Por favor, ingrese un correo electronico valido.', '#d9534f');
            return;
        }

        const contactSummary = [
            'Hola, quisiera recibir orientacion inmobiliaria.',
            '',
            `Nombre: ${name}`,
            `Correo: ${email}`,
            `Telefono: ${phone || 'No indicado'}`,
            '',
            'Descripcion de la necesidad:',
            message,
            '',
            `Pagina de origen: ${window.location.href}`
        ].join('\n');

        const whatsappUrl = `https://wa.me/${CONTACT_PHONE}?text=${encodeURIComponent(contactSummary)}`;
        const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Orientacion inmobiliaria - ${name}`)}&body=${encodeURIComponent(contactSummary)}`;

        trackEvent('contact_form_submitted', {
            page_title: document.title,
            has_phone: phone ? 'yes' : 'no'
        });

        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = 'Abriendo WhatsApp...';
        }

        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

        setFormMessage(
            `Su solicitud esta lista. Si WhatsApp no se abrio automaticamente, puede <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer">abrir WhatsApp aqui</a> o <a href="${mailtoUrl}">enviarla por correo</a>.`,
            '#1f7a44',
            true
        );

        contactForm.reset();

        window.setTimeout(() => {
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
            }
        }, 1200);
    });
}

function renderPropertyCards() {
    const grids = document.querySelectorAll('[data-property-grid], [data-featured-properties]');

    grids.forEach((grid) => {
        const detailPrefix = grid.dataset.detailPrefix || 'servicio.html';
        const limit = Number(grid.dataset.limit) || Object.keys(propertyCatalog).length;
        const entries = Object.entries(propertyCatalog).slice(0, limit);

        grid.innerHTML = '';

        entries.forEach(([propertyKey, property]) => {
            grid.appendChild(createPropertyCard(propertyKey, property, detailPrefix));
        });
    });
}

function createPropertyCard(propertyKey, property, detailPrefix) {
    const card = document.createElement('article');
    const detailUrl = `${detailPrefix}?propiedad=${propertyKey}`;

    card.className = 'property-card';
    card.innerHTML = `
        <a class="property-card-media" href="${detailUrl}" data-track="property_image_click" data-track-label="${propertyKey}" aria-label="Ver detalles de ${property.title}">
            <img src="${property.image}" alt="${property.title}" width="720" height="480" loading="lazy" decoding="async">
            <span class="property-status">${property.status}</span>
        </a>
        <div class="property-card-body">
            <div class="property-card-topline">
                <span>${property.transaction}</span>
                <strong>${property.price}</strong>
            </div>
            <h3>${property.title}</h3>
            <p class="property-location"><i class="fas fa-location-dot" aria-hidden="true"></i> ${property.location}</p>
            <div class="property-mini-features">
                ${createFeaturePill('fas fa-bed', property.features.bedrooms ? `${property.features.bedrooms} hab.` : 'Sin hab.')}
                ${createFeaturePill('fas fa-bath', property.features.bathrooms ? `${property.features.bathrooms} banos` : 'Sin banos')}
                ${createFeaturePill('fas fa-ruler-combined', property.features.area)}
                ${createFeaturePill('fas fa-car', property.features.parking ? `${property.features.parking} parq.` : 'Sin parq.')}
            </div>
            <p>${property.description}</p>
            <a href="${detailUrl}" class="property-card-link" data-track="property_detail_click" data-track-label="${propertyKey}">Ver detalles <i class="fas fa-arrow-right" aria-hidden="true"></i></a>
        </div>
    `;

    return card;
}

function createFeaturePill(iconClass, text) {
    return `<span><i class="${iconClass}" aria-hidden="true"></i>${text}</span>`;
}

function renderPropertyDetail() {
    const propertyTitle = document.getElementById('property-title');
    const propertyDescription = document.getElementById('property-description');
    const propertyIcon = document.getElementById('property-icon');
    const propertyStatus = document.getElementById('property-status');
    const propertyType = document.getElementById('property-type');
    const propertyPrice = document.getElementById('property-price');
    const propertyLocation = document.getElementById('property-location');
    const propertyMainImage = document.getElementById('property-main-image');
    const propertyGallery = document.getElementById('property-gallery');
    const propertyFeatures = document.getElementById('property-features');
    const propertyAmenities = document.getElementById('property-amenities');
    const otherProperties = document.getElementById('other-properties');
    const propertyWhatsapp = document.getElementById('property-whatsapp');

    if (!propertyTitle || !propertyDescription || !propertyIcon || !propertyStatus || !propertyType || !propertyPrice || !propertyLocation || !propertyMainImage || !propertyGallery || !propertyFeatures || !propertyAmenities || !otherProperties) {
        return;
    }

    const params = new URLSearchParams(window.location.search);
    const requestedProperty = params.get('propiedad');
    const fallbackProperty = Object.keys(propertyCatalog)[0];
    const propertyKey = Object.prototype.hasOwnProperty.call(propertyCatalog, requestedProperty)
        ? requestedProperty
        : fallbackProperty;
    const property = propertyCatalog[propertyKey];

    document.title = `JOP Inmobiliaria | ${property.title}`;
    trackEvent('property_detail_view', {
        property: propertyKey,
        title: property.title
    });

    propertyTitle.textContent = property.title;
    propertyDescription.textContent = property.description;
    propertyIcon.className = property.icon;
    propertyStatus.textContent = `${property.transaction} | ${property.status}`;
    propertyType.textContent = property.type;
    propertyPrice.textContent = property.price;
    propertyLocation.innerHTML = `<i class="fas fa-location-dot" aria-hidden="true"></i> ${property.location}`;
    propertyMainImage.src = property.image;
    propertyMainImage.alt = property.title;

    if (propertyWhatsapp) {
        const message = `Hola, quisiera informacion sobre esta propiedad: ${property.title}.`;
        propertyWhatsapp.href = `https://wa.me/${CONTACT_PHONE}?text=${encodeURIComponent(message)}`;
    }

    renderPropertyGallery(property, propertyMainImage, propertyGallery);
    renderPropertyFeatures(property, propertyFeatures);
    renderPropertyAmenities(property, propertyAmenities);
    renderOtherProperties(propertyKey, otherProperties);
}

function renderPropertyGallery(property, mainImage, galleryContainer) {
    galleryContainer.innerHTML = '';

    property.gallery.forEach((imageUrl, index) => {
        const button = document.createElement('button');
        const image = document.createElement('img');

        button.type = 'button';
        button.className = index === 0 ? 'is-active' : '';
        button.setAttribute('aria-label', `Ver imagen ${index + 1} de ${property.title}`);

        image.src = imageUrl;
        image.alt = '';
        image.width = 180;
        image.height = 120;
        image.loading = 'lazy';
        image.decoding = 'async';

        button.appendChild(image);
        button.addEventListener('click', () => {
            mainImage.src = imageUrl;
            galleryContainer.querySelectorAll('button').forEach((item) => item.classList.remove('is-active'));
            button.classList.add('is-active');
        });

        galleryContainer.appendChild(button);
    });
}

function renderPropertyFeatures(property, featureContainer) {
    const features = [
        ['fas fa-bed', 'Habitaciones', property.features.bedrooms ? property.features.bedrooms : 'No aplica'],
        ['fas fa-bath', 'Banos', property.features.bathrooms ? property.features.bathrooms : 'No aplica'],
        ['fas fa-ruler-combined', 'Metraje', property.features.area],
        ['fas fa-car', 'Parqueos', property.features.parking ? property.features.parking : 'No aplica'],
        [property.icon, 'Tipo', property.type],
        ['fas fa-tag', 'Estatus', property.status]
    ];

    featureContainer.innerHTML = '';

    features.forEach(([icon, label, value]) => {
        const item = document.createElement('div');
        item.className = 'property-feature-item';
        item.innerHTML = `
            <i class="${icon}" aria-hidden="true"></i>
            <span>${label}</span>
            <strong>${value}</strong>
        `;
        featureContainer.appendChild(item);
    });
}

function renderPropertyAmenities(property, amenitiesContainer) {
    amenitiesContainer.innerHTML = '';

    property.amenities.forEach((amenity) => {
        const item = document.createElement('li');
        item.innerHTML = `<i class="fas fa-check-circle" aria-hidden="true"></i><span>${amenity}</span>`;
        amenitiesContainer.appendChild(item);
    });
}

function renderOtherProperties(currentPropertyKey, otherPropertiesContainer) {
    otherPropertiesContainer.innerHTML = '';

    Object.entries(propertyCatalog).forEach(([propertyKey, property]) => {
        if (propertyKey === currentPropertyKey) {
            return;
        }

        const link = document.createElement('a');
        const icon = document.createElement('i');
        const text = document.createElement('span');

        link.href = `servicio.html?propiedad=${propertyKey}`;
        link.className = 'other-service-link';
        link.setAttribute('aria-label', `Ver ${property.title}`);

        icon.className = property.icon;
        icon.setAttribute('aria-hidden', 'true');

        text.textContent = property.title;

        link.append(icon, text);
        otherPropertiesContainer.appendChild(link);
    });
}

function initHomeCarousel() {
    const carousel = document.querySelector('[data-home-carousel]');

    if (!carousel) {
        return;
    }

    const slides = Array.from(carousel.querySelectorAll('.hero-slide'));
    const dots = Array.from(carousel.querySelectorAll('[data-slide-dot]'));

    if (slides.length <= 1) {
        return;
    }

    let currentIndex = 0;
    let intervalId;

    const goToSlide = (nextIndex) => {
        currentIndex = nextIndex % slides.length;

        slides.forEach((slide, index) => {
            slide.classList.toggle('is-active', index === currentIndex);
        });

        dots.forEach((dot, index) => {
            dot.classList.toggle('is-active', index === currentIndex);
        });
    };

    const startCarousel = () => {
        intervalId = window.setInterval(() => {
            goToSlide(currentIndex + 1);
        }, 4200);
    };

    const stopCarousel = () => {
        window.clearInterval(intervalId);
    };

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopCarousel();
            goToSlide(index);
            startCarousel();
        });
    });

    carousel.addEventListener('mouseenter', stopCarousel);
    carousel.addEventListener('mouseleave', startCarousel);
    startCarousel();
}

function initHomeSocialStrip() {
    const strip = document.querySelector('[data-home-social-strip]');

    if (!strip) {
        return;
    }

    const updateStripState = () => {
        document.body.classList.toggle('social-strip-hidden', window.scrollY > 48);
    };

    updateStripState();
    window.addEventListener('scroll', updateStripState, { passive: true });
}

function initDeferredQrCodes() {
    const widgets = document.querySelectorAll('.whatsapp-widget');

    widgets.forEach((widget) => {
        const qrImages = widget.querySelectorAll('img[data-qr-src]');
        if (!qrImages.length) {
            return;
        }

        const loadQrCodes = () => {
            qrImages.forEach((image) => {
                if (image.dataset.qrLoaded === 'true') {
                    return;
                }

                image.src = image.dataset.qrSrc;
                image.dataset.qrLoaded = 'true';
            });
        };

        widget.addEventListener('mouseenter', loadQrCodes, { once: true });
        widget.addEventListener('focusin', loadQrCodes, { once: true });
        widget.addEventListener('touchstart', loadQrCodes, { once: true, passive: true });
    });
}

function initDeferredMap() {
    const loader = document.querySelector('[data-map-loader]');
    const mapEmbed = document.querySelector('[data-map-src]');

    if (!loader || !mapEmbed) {
        return;
    }

    const mapPanel = loader.closest('.map-panel');

    const loadMap = () => {
        if (!mapEmbed.src) {
            mapEmbed.src = mapEmbed.dataset.mapSrc;
        }

        if (mapPanel) {
            mapPanel.classList.add('is-loaded');
        }

        trackEvent('map_loaded', {
            page_title: document.title
        });
    };

    loader.addEventListener('click', loadMap, { once: true });
}

function initRoutePrefetching() {
    if (!canUseRuntimeOptimizations) {
        return;
    }

    const links = Array.from(document.querySelectorAll('a[href]'));
    const resolvedLinks = links
        .map((link) => ({
            element: link,
            url: resolveInternalDocumentUrl(link.getAttribute('href'))
        }))
        .filter((entry) => entry.url);

    const warmTargets = [];
    const seen = new Set();

    resolvedLinks.forEach(({ url }) => {
        if (seen.has(url.href) || warmTargets.length >= 6) {
            return;
        }

        seen.add(url.href);
        warmTargets.push(url);
    });

    const warmSoon = () => {
        warmTargets.forEach(prefetchInternalUrl);
    };

    if ('requestIdleCallback' in window) {
        window.requestIdleCallback(warmSoon, { timeout: 1500 });
    } else {
        window.setTimeout(warmSoon, 700);
    }

    resolvedLinks.forEach(({ element, url }) => {
        const warmRoute = () => {
            prefetchInternalUrl(url);
        };

        element.addEventListener('mouseenter', warmRoute, { once: true });
        element.addEventListener('focus', warmRoute, { once: true });
        element.addEventListener('touchstart', warmRoute, { once: true, passive: true });
    });
}

function resolveInternalDocumentUrl(href) {
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) {
        return null;
    }

    let url;

    try {
        url = new URL(href, window.location.href);
    } catch (error) {
        return null;
    }

    if (url.origin !== window.location.origin) {
        return null;
    }

    if (!url.pathname.endsWith('.html') && !url.pathname.endsWith('/')) {
        return null;
    }

    return url;
}

function prefetchInternalUrl(url) {
    if (!url || prefetchedUrls.has(url.href)) {
        return;
    }

    const prefetchLink = document.createElement('link');
    prefetchLink.rel = 'prefetch';
    prefetchLink.as = 'document';
    prefetchLink.href = url.href;

    document.head.appendChild(prefetchLink);
    prefetchedUrls.add(url.href);
}

function registerServiceWorker() {
    if (!canUseRuntimeOptimizations || !('serviceWorker' in navigator)) {
        return;
    }

    const currentScript = document.currentScript || document.querySelector('script[src*="assets/js/javascript.js"]');
    if (!currentScript) {
        return;
    }

    const scriptUrl = new URL(currentScript.src, window.location.href);
    const siteRootPath = scriptUrl.pathname.replace(/assets\/js\/javascript\.js$/, '');
    const serviceWorkerUrl = `${siteRootPath}sw.js`;

    navigator.serviceWorker.register(serviceWorkerUrl, { scope: siteRootPath }).catch((error) => {
        if (isLocalPreview) {
            console.info('[JOP service worker]', error);
        }
    });
}
