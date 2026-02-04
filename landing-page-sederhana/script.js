// ===================================
// WHATSAPP INTEGRATION
// ===================================

// WhatsApp Configuration
const WHATSAPP_CONFIG = {
    // Replace with actual WhatsApp number (format: country code + number, no + or spaces)
    phoneNumber: '628123456789', // Example: Indonesian number
    defaultMessage: 'Halo! Saya tertarik memesan roti sourdough artisan. Bisa info lebih lanjut?'
};

/**
 * Generate WhatsApp link with pre-filled message
 * @param {string} customMessage - Optional custom message
 * @returns {string} WhatsApp URL
 */
function generateWhatsAppLink(customMessage = null) {
    const message = customMessage || WHATSAPP_CONFIG.defaultMessage;
    const encodedMessage = encodeURIComponent(message);
    
    // Use wa.me for universal compatibility (works on mobile & desktop)
    return `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encodedMessage}`;
}

/**
 * Track CTA click events (can be integrated with analytics)
 * @param {string} ctaLocation - Where the CTA was clicked
 */
function trackCTAClick(ctaLocation) {
    console.log(`CTA clicked: ${ctaLocation}`);
    
    // TODO: Integrate with Google Analytics or other analytics platform
    // Example: gtag('event', 'cta_click', { location: ctaLocation });
}

// ===================================
// CTA BUTTON HANDLERS
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    
    // Hero WhatsApp CTA
    const heroWhatsAppBtn = document.getElementById('order-whatsapp');
    if (heroWhatsAppBtn) {
        heroWhatsAppBtn.addEventListener('click', (e) => {
            e.preventDefault();
            trackCTAClick('hero');
            window.open(generateWhatsAppLink(), '_blank');
        });
    }
    
    // Final WhatsApp CTA
    const finalWhatsAppBtn = document.getElementById('order-whatsapp-final');
    if (finalWhatsAppBtn) {
        finalWhatsAppBtn.addEventListener('click', (e) => {
            e.preventDefault();
            trackCTAClick('final');
            window.open(generateWhatsAppLink(), '_blank');
        });
    }
    
    // Smooth scroll for "Lihat Menu" button
    const menuBtn = document.querySelector('.cta-secondary');
    if (menuBtn) {
        menuBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = menuBtn.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    
});

// ===================================
// SCROLL ANIMATIONS
// ===================================

/**
 * Intersection Observer for scroll animations
 */
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all animated elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.split-item, .highlight-card, .testimonial-card'
    );
    
    animatedElements.forEach(el => observer.observe(el));
});

// ===================================
// HERO SECTION ANIMATIONS
// ===================================

window.addEventListener('load', () => {
    // Animate hero elements on page load
    setTimeout(() => {
        document.querySelector('.hero-title')?.classList.add('animate-in');
    }, 100);
    
    setTimeout(() => {
        document.querySelector('.hero-subtitle')?.classList.add('animate-in');
    }, 300);
    
    setTimeout(() => {
        document.querySelector('.cta-group')?.classList.add('animate-in');
    }, 500);
    
    // Stagger feature pills animation
    const pills = document.querySelectorAll('.pill');
    pills.forEach((pill, index) => {
        setTimeout(() => {
            pill.classList.add('animate-in');
        }, 700 + (index * 100));
    });
});

// ===================================
// SCROLL INDICATOR
// ===================================

const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        window.scrollBy({
            top: window.innerHeight * 0.9,
            behavior: 'smooth'
        });
    });
    
    // Hide scroll indicator after scrolling
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.pointerEvents = 'none';
        } else {
            scrollIndicator.style.opacity = '1';
            scrollIndicator.style.pointerEvents = 'auto';
        }
    });
}

// ===================================
// PARALLAX EFFECT (Desktop only)
// ===================================

if (window.innerWidth > 768) {
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                const hero = document.querySelector('.hero');
                
                if (hero && scrolled < window.innerHeight) {
                    // Subtle parallax effect
                    hero.style.transform = `translateY(${scrolled * 0.4}px)`;
                }
                
                ticking = false;
            });
            
            ticking = true;
        }
    });
}

// ===================================
// LAZY LOADING IMAGES
// ===================================

/**
 * Native lazy loading is already implemented via HTML loading="lazy"
 * This is a fallback for older browsers
 */
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===================================
// PERFORMANCE MONITORING
// ===================================

/**
 * Log Core Web Vitals (optional - for development)
 */
if (window.performance && window.performance.timing) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            const connectTime = perfData.responseEnd - perfData.requestStart;
            const renderTime = perfData.domComplete - perfData.domLoading;
            
            console.log('Performance Metrics:');
            console.log(`Page Load Time: ${pageLoadTime}ms`);
            console.log(`Connect Time: ${connectTime}ms`);
            console.log(`Render Time: ${renderTime}ms`);
        }, 0);
    });
}

// ===================================
// ACCESSIBILITY ENHANCEMENTS
// ===================================

/**
 * Keyboard navigation for CTA buttons
 */
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        const activeElement = document.activeElement;
        if (activeElement.classList.contains('cta-button')) {
            e.preventDefault();
            activeElement.click();
        }
    }
});

/**
 * Respect user's reduced motion preference
 */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    // Disable parallax and complex animations
    document.documentElement.style.setProperty('--transition-slow', '0.01ms');
    document.documentElement.style.setProperty('--transition-base', '0.01ms');
    document.documentElement.style.setProperty('--transition-fast', '0.01ms');
}

// ===================================
// UTILITY FUNCTIONS
// ===================================

/**
 * Debounce function for performance optimization
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Check if element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// ===================================
// CONSOLE MESSAGE
// ===================================

console.log('%c🍞 Artisan Bread Landing Page', 'font-size: 20px; font-weight: bold; color: #FF6B35;');
console.log('%cBuilt with ❤️ using Vanilla JavaScript', 'font-size: 12px; color: #666;');
console.log('%cConversion-focused • Performance-optimized • Accessible', 'font-size: 12px; color: #4CAF50;');
