import { simulationData } from '../data/simulation-data.js';

export class TimelineSimulator {
    constructor(userProfile = 'general') {
        this.userProfile = userProfile;
        this.data = simulationData[userProfile] || simulationData.general;
        this.timeSlots = ['08:00', '12:00', '14:00', '17:00', '20:00'];
        this.observer = null;
        this.revealedSlots = new Set();
    }

    renderTimeline() {
        const container = document.getElementById('simulator');
        if (!container) {
            console.error('Simulator container not found');
            return;
        }

        // Build timeline HTML
        const timelineHTML = `
            <div class="container mx-auto px-4">
                <div class="text-center mb-12">
                    <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Sehari dalam Kehidupan Mahasiswa
                    </h2>
                    <p class="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                        ${this.getProfileDescription()}
                    </p>
                </div>

                <div class="timeline-container relative max-w-4xl mx-auto">
                    <!-- Timeline line -->
                    <div class="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20 hidden md:block"></div>

                    ${this.timeSlots.map((time, index) => this.renderTimeSlot(time, index)).join('')}
                </div>
            </div>
        `;

        container.innerHTML = timelineHTML;

        // Initialize scroll animations
        this.handleScroll();
    }

    /**
     * Get profile description for header
     */
    getProfileDescription() {
        const descriptions = {
            general: 'Ikuti perjalanan seorang mahasiswa Politeknik Hasnur dari pagi hingga malam',
            tech: 'Perjalanan ala Tech Wizard di Politeknik Hasnur',
            creative: 'Perjalanan ala Creative Builder di Politeknik Hasnur',
            business: 'Perjalanan ala Business Strategist di Politeknik Hasnur',
            automotive: 'Perjalanan ala Automotive Explorer di Politeknik Hasnur',
        };
        return descriptions[this.userProfile] || descriptions.general;
    }

    renderTimeSlot(time, index) {
        const slotData = this.data[time];
        if (!slotData) {
            console.warn(`No data for time slot: ${time}`);
            return '';
        }

        const isEven = index % 2 === 0;
        const alignmentClass = isEven ? 'md:flex-row' : 'md:flex-row-reverse';
        const textAlignClass = isEven ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12';

        return `
            <div class="timeline-slot opacity-0 transform translate-y-8 transition-all duration-700 mb-12 md:mb-16" 
                 data-time="${time}">
                <div class="flex flex-col ${alignmentClass} items-center gap-8">
                    <!-- Time indicator -->
                    <div class="flex-1 ${textAlignClass}">
                        <div class="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                            ${slotData.time}
                        </div>
                        <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                            ${slotData.title}
                        </h3>
                        <p class="text-lg text-primary font-semibold mb-3">
                            ${slotData.activity}
                        </p>
                        <p class="text-gray-600 leading-relaxed">
                            ${slotData.description}
                        </p>
                    </div>

                    <!-- Icon/Image -->
                    <div class="flex-shrink-0 relative z-10">
                        <div class="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-primary/20">
                            <span class="text-4xl md:text-5xl">${slotData.icon}</span>
                        </div>
                    </div>

                    <!-- Spacer for alignment -->
                    <div class="flex-1 hidden md:block"></div>
                </div>
            </div>
        `;
    }

    handleScroll() {
        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (prefersReducedMotion) {
            // Show all slots immediately without animation
            this.revealAllSlots();
            return;
        }

        // Use Intersection Observer for scroll-triggered animations
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2, // Trigger when 20% of element is visible
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const slot = entry.target;
                    const time = slot.dataset.time;

                    // Only reveal once
                    if (!this.revealedSlots.has(time)) {
                        this.revealSlot(slot);
                    }
                }
            });
        }, options);

        // Observe all timeline slots
        const slots = document.querySelectorAll('.timeline-slot');
        slots.forEach((slot) => {
            this.observer.observe(slot);
        });
    }

    revealSlot(slotElement) {
        // Add reveal classes
        slotElement.classList.remove('opacity-0', 'translate-y-8');
        slotElement.classList.add('opacity-100', 'translate-y-0');

        // Track revealed slot
        const time = slotElement.dataset.time;
        if (time) {
            this.revealedSlots.add(time);
        }
    }

    /**
     * Reveal all slots immediately (for reduced motion)
     */
    revealAllSlots() {
        const slots = document.querySelectorAll('.timeline-slot');
        slots.forEach((slot) => {
            slot.classList.remove('opacity-0', 'translate-y-8');
            slot.classList.add('opacity-100', 'translate-y-0');
        });
    }

    updateProfile(newProfile) {
        this.userProfile = newProfile;
        this.data = simulationData[newProfile] || simulationData.general;
        this.revealedSlots.clear();

        // Disconnect existing observer
        if (this.observer) {
            this.observer.disconnect();
        }

        // Re-render timeline
        this.renderTimeline();
    }

    /**
     * Cleanup method
     */
    destroy() {
        if (this.observer) {
            this.observer.disconnect();
            this.observer = null;
        }
        this.revealedSlots.clear();
    }
}

export function initSimulator(userProfile = 'general') {
    const simulator = new TimelineSimulator(userProfile);
    simulator.renderTimeline();
    return simulator;
}
