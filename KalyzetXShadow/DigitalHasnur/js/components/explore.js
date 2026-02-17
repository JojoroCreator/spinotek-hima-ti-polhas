import { campusData } from '../data/prodi-data.js';
import { Modal } from './modal.js';

export class ExploreSection {
    constructor() {
        this.data = campusData;
        this.currentCategory = 'all';
        this.modal = new Modal();
        this.container = null;
    }

    init() {
        this.container = document.getElementById('explore');
        if (!this.container) {
            console.error('Explore section container not found');
            return;
        }

        this.render();
    }

    render() {
        const html = `
            <div class="container mx-auto px-4">
                <div class="text-center mb-12">
                    <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Jelajahi Ekosistem Kampus
                    </h2>
                    <p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                        Temukan fasilitas, organisasi, dan program studi yang tersedia di Politeknik Hasnur
                    </p>
                </div>

                <!-- Program Studi Section -->
                ${this.renderCategorySlider('studyPrograms', 'Program Studi', '🎓')}

                <!-- Organisasi Section -->
                ${this.renderCategorySlider('organizations', 'Organisasi Mahasiswa', '👥')}

                <!-- UKM Section -->
                ${this.renderCategorySlider('ukm', 'Unit Kegiatan Mahasiswa', '🎯')}

                <!-- Fasilitas Section -->
                ${this.renderCategorySlider('facilities', 'Fasilitas Kampus', '🏢')}

                <div class="mt-20">
    <div class="text-center mb-12">
        <h3 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Lokasi Kampus
        </h3>
        <p class="text-lg text-gray-600">
            Politeknik Hasnur memiliki 2 kampus yang strategis di Kalimantan Selatan
        </p>
    </div>

    <div class="grid md:grid-cols-2 gap-8">
        
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full hover:shadow-2xl transition-shadow duration-300">
            <div class="bg-gradient-to-r from-primary to-blue-600 p-6">
                <div class="flex items-center gap-3 mb-1">
                    <svg class="w-6 h-6 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                    </svg>
                    <h4 class="text-2xl font-bold text-white">Kampus 1</h4>
                </div>
                <p class="text-blue-100 text-sm font-medium">Kampus Utama (Handil Bakti)</p>
            </div>

            <div class="p-6 flex-1 flex flex-col">
                <p class="text-gray-600 mb-4 flex items-start gap-2 text-sm leading-relaxed">
                    <svg class="w-4 h-4 text-primary mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    Ray V, Jl. Brigjen H. Hasan Basri, Handil Bakti, Kec. Alalak, Kabupaten Barito Kuala, Kalimantan Selatan 70582
                </p>

                <div class="rounded-xl overflow-hidden shadow-inner border border-gray-200 relative group flex-1 min-h-[250px]">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.462502632767!2d114.6201257146738!3d-3.2344798976450995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de4230bff29bd8b%3A0x9b8228278b99e443!2sPoliteknik%20Hasnur!5e0!3m2!1sid!2sid!4v1653568412593!5m2!1sid!2sid" 
                        class="absolute inset-0 w-full h-full border-0 group-hover:opacity-90 transition-opacity" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>

            </div>
        </div>

        <div class="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full hover:shadow-2xl transition-shadow duration-300">
            <div class="bg-gradient-to-r from-indigo-600 to-purple-600 p-6">
                <div class="flex items-center gap-3 mb-1">
                    <svg class="w-6 h-6 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path>
                    </svg>
                    <h4 class="text-2xl font-bold text-white">Kampus 2</h4>
                </div>
                <p class="text-indigo-100 text-sm font-medium">Wetland Square (Banjarmasin)</p>
            </div>

            <div class="p-6 flex-1 flex flex-col">
                <p class="text-gray-600 mb-4 flex items-start gap-2 text-sm leading-relaxed">
                    <svg class="w-4 h-4 text-indigo-600 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    Jl. Jend. Ahmad Yani KM.3,5 No.115A, Kota Banjarmasin, Kalimantan Selatan 70234
                </p>

                <div class="rounded-xl overflow-hidden shadow-inner border border-gray-200 relative group flex-1 min-h-[250px]">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.086525636458!2d114.60569732269964!3d-3.328799089825868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de42395905787bb%3A0xd2c3b6c02497f9fb!2sWetland%20Square!5e0!3m2!1sid!2sid!4v1653568362940!5m2!1sid!2sid" 
                        class="absolute inset-0 w-full h-full border-0 group-hover:opacity-90 transition-opacity" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
        </div>
    </div>
</div>
        `;

        this.container.innerHTML = html;
        this.attachEventListeners();
        this.initializeSliders();
    }

    /**
     * Render category slider section
     * @param {string} category - Category key
     * @param {string} title - Section title
     * @param {string} icon - Section icon
     * @returns {string} HTML string
     */
    renderCategorySlider(category, title, icon) {
        const items = this.data[category] || [];

        if (items.length === 0) {
            return '';
        }

        return `
            <div class="mb-16">
                <div class="flex items-center justify-between mb-6">
                    <h3 class="text-2xl md:text-3xl font-bold text-gray-900 flex items-center gap-3">
                        <span class="text-3xl">${icon}</span>
                        ${title}
                        <span class="text-lg font-normal text-gray-500">(${items.length})</span>
                    </h3>
                    <div class="flex gap-2">
                        <button 
                            class="slider-btn prev-btn p-2 rounded-full bg-white border-2 border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-500 hover:text-blue-600 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                            data-slider="${category}"
                            data-direction="prev"
                        >
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                            </svg>
                        </button>
                        <button 
                            class="slider-btn next-btn p-2 rounded-full bg-white border-2 border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-500 hover:text-blue-600 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                            data-slider="${category}"
                            data-direction="next"
                        >
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                
                <div class="relative">
                    <div 
                        class="slider-container overflow-x-auto scrollbar-hide scroll-smooth"
                        data-slider="${category}"
                    >
                        <div class="flex gap-6 pb-4">
                            ${items.map((item) => this.renderSliderCard(item)).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * Render slider card
     * @param {object} card - Card data
     * @returns {string} HTML string of card
     */
    renderSliderCard(card) {
        const imageUrl = card.logo || card.image || 'assets/images/polihasnur-logo.png';
        const categoryLabel = this.getCategoryLabel(card.category);

        return `
            <div 
                class="card group cursor-pointer flex-shrink-0 w-72 transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white rounded-xl overflow-hidden border border-gray-200"
                data-card-id="${card.id}"
                data-category="${card.category}"
            >
                <div class="card-image-wrapper relative h-40 overflow-hidden bg-white">
                    <img 
                        src="${imageUrl}" 
                        alt="${card.name}"
                        class="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                        onerror="this.onerror=null; this.src='assets/images/polihasnur-logo.png';"
                    />
                    <div class="absolute top-2 right-2">
                        <span class="bg-primary text-white text-xs font-semibold px-2 py-1 rounded-full">
                            ${categoryLabel}
                        </span>
                    </div>
                </div>
                <div class="card-content p-4">
                    <h3 class="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                        ${card.name}
                    </h3>
                    <p class="text-gray-600 text-sm line-clamp-2 mb-3">
                        ${card.description}
                    </p>
                    <div class="flex items-center text-primary font-semibold text-sm">
                        <span>Lihat Detail</span>
                        <svg class="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * Filter cards by category
     * @param {string} category - Category to filter
     * @returns {array} Filtered cards
     */
    filterCards(category) {
        if (category === 'all') {
            return [
                ...this.data.studyPrograms,
                ...this.data.organizations,
                ...this.data.ukm,
                ...this.data.facilities,
            ];
        }

        return this.data[category] || [];
    }

    /**
     * Get category label in Indonesian
     * @param {string} category - Category key
     * @returns {string} Category label
     */
    getCategoryLabel(category) {
        const labels = {
            studyPrograms: 'Program Studi',
            organizations: 'Organisasi',
            ukm: 'UKM',
            facilities: 'Fasilitas',
        };
        return labels[category] || category;
    }

    attachEventListeners() {
        // Slider navigation buttons
        const sliderButtons = this.container.querySelectorAll('.slider-btn');
        sliderButtons.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                const sliderName = e.currentTarget.dataset.slider;
                const direction = e.currentTarget.dataset.direction;
                this.handleSliderNavigation(sliderName, direction);
            });
        });

        // Card clicks - use event delegation
        const sliderContainers = this.container.querySelectorAll('.slider-container');
        sliderContainers.forEach((container) => {
            container.addEventListener('click', (e) => {
                const card = e.target.closest('.card');
                if (card) {
                    const cardId = parseInt(card.dataset.cardId);
                    const category = card.dataset.category;
                    this.handleCardClick(cardId, category);
                }
            });
        });
    }

    /**
     * Initialize sliders with scroll detection
     */
    initializeSliders() {
        const sliderContainers = this.container.querySelectorAll('.slider-container');

        sliderContainers.forEach((container) => {
            const sliderName = container.dataset.slider;
            this.updateSliderButtons(sliderName);

            // Update buttons on scroll
            container.addEventListener('scroll', () => {
                this.updateSliderButtons(sliderName);
            });
        });
    }

    /**
     * Handle slider navigation
     * @param {string} sliderName - Slider identifier
     * @param {string} direction - 'prev' or 'next'
     */
    handleSliderNavigation(sliderName, direction) {
        const container = this.container.querySelector(
            `.slider-container[data-slider="${sliderName}"]`,
        );
        if (!container) return;

        const scrollAmount = 300; // Scroll by 300px
        const currentScroll = container.scrollLeft;

        if (direction === 'next') {
            container.scrollLeft = currentScroll + scrollAmount;
        } else {
            container.scrollLeft = currentScroll - scrollAmount;
        }
    }

    /**
     * Update slider button states
     * @param {string} sliderName - Slider identifier
     */
    updateSliderButtons(sliderName) {
        const container = this.container.querySelector(
            `.slider-container[data-slider="${sliderName}"]`,
        );
        if (!container) return;

        const prevBtn = this.container.querySelector(`.prev-btn[data-slider="${sliderName}"]`);
        const nextBtn = this.container.querySelector(`.next-btn[data-slider="${sliderName}"]`);

        if (!prevBtn || !nextBtn) return;

        // Check if at start
        if (container.scrollLeft <= 0) {
            prevBtn.disabled = true;
        } else {
            prevBtn.disabled = false;
        }

        // Check if at end
        const maxScroll = container.scrollWidth - container.clientWidth;
        if (container.scrollLeft >= maxScroll - 10) {
            // 10px threshold
            nextBtn.disabled = true;
        } else {
            nextBtn.disabled = false;
        }
    }

    /**
     * Handle card click - open modal with details
     * @param {number} cardId - Card ID
     * @param {string} category - Card category
     */
    handleCardClick(cardId, category) {
        const cardData = this.findCardData(cardId, category);
        if (!cardData) {
            console.error('Card data not found:', cardId, category);
            return;
        }

        this.renderModal(cardData);
    }

    /**
     * Find card data by ID and category
     * @param {number} cardId - Card ID
     * @param {string} category - Card category
     * @returns {object|null} Card data
     */
    findCardData(cardId, category) {
        const categoryData = this.data[category];
        if (!categoryData) return null;

        return categoryData.find((item) => item.id === cardId);
    }

    /**
     * Render modal with card details
     * @param {object} cardData - Card data to display
     */
    renderModal(cardData) {
        const imageUrl = cardData.logo || cardData.image || 'assets/images/polihasnur-logo.png';
        const categoryLabel = this.getCategoryLabel(cardData.category);

        const content = `
            <div class="flex flex-col md:flex-row gap-8">
                <div class="md:w-1/3">
                    <div class="rounded-lg overflow-hidden bg-gray-100">
                        <img 
                            src="${imageUrl}" 
                            alt="${cardData.name}"
                            class="w-full h-auto object-cover"
                            onerror="this.onerror=null; this.src='assets/images/polihasnur-logo.png'; this.classList.add('object-contain', 'p-8');"
                        />
                    </div>
                    <div class="mt-4">
                        <span class="inline-block bg-primary text-white text-sm font-semibold px-4 py-2 rounded-full">
                            ${categoryLabel}
                        </span>
                    </div>
                </div>
                <div class="md:w-2/3">
                    <h3 class="text-3xl font-bold text-gray-900 mb-4">
                        ${cardData.name}
                    </h3>
                    ${
                        cardData.level
                            ? `
                        <div class="mb-4">
                            <span class="inline-block bg-gray-200 text-gray-700 text-sm font-semibold px-3 py-1 rounded">
                                ${cardData.level}
                            </span>
                        </div>
                    `
                            : ''
                    }
                    <p class="text-gray-700 text-lg leading-relaxed mb-6">
                        ${cardData.description}
                    </p>
                    
                    ${this.renderAdditionalInfo(cardData)}
                    
                    <div class="mt-8 pt-6 border-t border-gray-200">
                        <p class="text-gray-600 text-sm">
                            Untuk informasi lebih lanjut, silakan hubungi kami di:
                        </p>
                        <div class="mt-2 flex flex-col sm:flex-row gap-4">
                            <a href="tel:085100156666" class="text-primary hover:text-primary/80 font-semibold">
                                📞 0851-0015-6666
                            </a>
                            <a href="mailto:polihasnur@polihasnur.ac.id" class="text-primary hover:text-primary/80 font-semibold">
                                ✉️ polihasnur@polihasnur.ac.id
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;

        this.modal.open(content, {
            title: '',
            size: 'xlarge',
            showClose: true,
        });
    }

    /**
     * Render additional info based on card type
     * @param {object} cardData - Card data
     * @returns {string} HTML string
     */
    renderAdditionalInfo(cardData) {
        // For study programs, could add more details
        if (cardData.category === 'studyPrograms') {
            return `
                <div class="bg-blue-50 rounded-lg p-6 mb-6">
                    <h4 class="font-bold text-gray-900 mb-3">Keunggulan Program</h4>
                    <ul class="space-y-2 text-gray-700">
                        <li class="flex items-start">
                            <svg class="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg>
                            <span>Kurikulum berbasis industri</span>
                        </li>
                        <li class="flex items-start">
                            <svg class="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg>
                            <span>Fasilitas laboratorium modern</span>
                        </li>
                        <li class="flex items-start">
                            <svg class="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg>
                            <span>Dosen berpengalaman dan bersertifikasi</span>
                        </li>
                        <li class="flex items-start">
                            <svg class="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg>
                            <span>Peluang magang dan kerja sama industri</span>
                        </li>
                    </ul>
                </div>
            `;
        }

        return '';
    }
}

/**
 * Initialize explore section
 * @returns {ExploreSection} Explore section instance
 */
export function initExplore() {
    const explore = new ExploreSection();
    explore.init();
    return explore;
}
