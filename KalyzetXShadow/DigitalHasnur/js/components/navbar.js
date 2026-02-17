export class Navbar {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.isScrolled = false;
        this.init();
    }

    /**
     * Initialize navbar
     */
    init() {
        if (!this.navbar) {
            console.error('Navbar element not found');
            return;
        }

        // Initialize scroll behavior
        this.initScrollBehavior();

        // Initialize smooth scroll navigation
        this.initSmoothScroll();

        // Initialize mobile menu
        this.initMobileMenu();
    }

    /**
     * Initialize scroll behavior for glassmorphism effect
     */
    initScrollBehavior() {
        // Throttle scroll event for performance
        let ticking = false;

        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    this.handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        });

        // Initial check
        this.handleScroll();
    }

    /**
     * Handle scroll event
     */
    handleScroll() {
        const scrollY = window.scrollY;
        const shouldBeScrolled = scrollY > 50;

        // Only update if state changed
        if (shouldBeScrolled !== this.isScrolled) {
            this.isScrolled = shouldBeScrolled;

            if (this.isScrolled) {
                // Add scrolled class for CSS styling
                this.navbar.classList.add('scrolled');
            } else {
                // Remove scrolled class
                this.navbar.classList.remove('scrolled');
            }
        }
    }

    /**
     * Initialize smooth scroll for navigation links
     */
    initSmoothScroll() {
        const navLinks = this.navbar.querySelectorAll('a[href^="#"]');

        navLinks.forEach((link) => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.scrollToSection(link.getAttribute('href'));
            });
        });
    }

    /**
     * Scroll to section smoothly
     * @param {string} sectionId - Section ID with # prefix (e.g., '#hero')
     */
    scrollToSection(sectionId) {
        const targetSection = document.querySelector(sectionId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });

            // Dispatch custom event for other components to listen
            window.dispatchEvent(
                new CustomEvent('sectionChange', {
                    detail: { sectionId: sectionId.substring(1) },
                }),
            );
        }
    }

    /**
     * Update active link based on current section
     * @param {string} sectionId - Current section ID
     */
    updateActiveLink(sectionId) {
        const navLinks = this.navbar.querySelectorAll('a[href^="#"]');

        navLinks.forEach((link) => {
            const href = link.getAttribute('href');
            if (href === `#${sectionId}`) {
                link.classList.add('text-primary', 'font-semibold');
            } else {
                link.classList.remove('text-primary', 'font-semibold');
            }
        });
    }

    /**
     * Show navbar (if hidden)
     */
    show() {
        this.navbar.classList.remove('hidden');
    }

    /**
     * Hide navbar
     */
    hide() {
        this.navbar.classList.add('hidden');
    }

    /**
     * Initialize mobile menu toggle
     */
    initMobileMenu() {
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = mobileMenu?.querySelectorAll('.mobile-link');

        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });

            // Close menu when clicking a link
            mobileLinks?.forEach((link) => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('hidden');
                });
            });
        }
    }
}
