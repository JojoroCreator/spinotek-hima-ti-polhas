/**
 * Typing animation for hero tagline
 * @param {string} text - The text to animate
 * @param {HTMLElement} element - The element to display text in
 * @param {number} speed - Typing speed in milliseconds
 */
export function typeText(text, element, speed = 100) {
    if (!element) {
        console.error('Typing animation: element not found');
        return;
    }

    let index = 0;
    element.textContent = '';

    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }

    type();
}

/**
 * Initialize hero section
 */
export function initHero() {
    // Get hero elements
    const heroVideo = document.getElementById('hero-video');
    const typingText = document.getElementById('typing-text');
    const ctaPrimary = document.getElementById('cta-primary');
    const ctaSecondary = document.getElementById('cta-secondary');

    // Check if elements exist
    if (!heroVideo || !typingText || !ctaPrimary || !ctaSecondary) {
        console.error('Hero section: Required elements not found');
        return;
    }

    // Setup video error handling with fallback
    setupVideoFallback(heroVideo);

    // Start typing animation
    const tagline = 'Wujudkan Masa Depan Cemerlang Bersama Politeknik Hasnur';
    typeText(tagline, typingText, 80);

    // Setup CTA button handlers
    setupCTAButtons(ctaPrimary, ctaSecondary);

    console.log('Hero section initialized');
}

/**
 * Setup video fallback for loading errors
 * @param {HTMLVideoElement} videoElement - The video element
 */
function setupVideoFallback(videoElement) {
    videoElement.addEventListener('error', () => {
        console.warn('Video failed to load, using fallback image');
        const heroSection = document.getElementById('hero');
        if (heroSection) {
            // Set fallback background image
            heroSection.style.backgroundImage = 'url(assets/images/polihasnur-logo.png)';
            heroSection.style.backgroundSize = 'cover';
            heroSection.style.backgroundPosition = 'center';
            heroSection.style.backgroundColor = '#0A1628';

            // Hide video element
            videoElement.style.display = 'none';
        }
    });

    // Also handle case where video source is missing
    videoElement.addEventListener('loadedmetadata', () => {
        console.log('Hero video loaded successfully');
    });
}

/**
 * Setup CTA button click handlers
 * @param {HTMLButtonElement} primaryBtn - Primary CTA button
 * @param {HTMLButtonElement} secondaryBtn - Secondary CTA button
 */
function setupCTAButtons(primaryBtn, secondaryBtn) {
    // Primary CTA: Scroll to quiz section
    primaryBtn.addEventListener('click', () => {
        const quizSection = document.getElementById('quiz');
        if (quizSection) {
            smoothScrollToSection(quizSection);
        }
    });

    // Secondary CTA: Scroll to explore section
    secondaryBtn.addEventListener('click', () => {
        const exploreSection = document.getElementById('explore');
        if (exploreSection) {
            smoothScrollToSection(exploreSection);
        }
    });
}

/**
 * Smooth scroll to a section
 * @param {HTMLElement} section - The section to scroll to
 */
export function smoothScrollToSection(section) {
    if (!section) return;

    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
}
