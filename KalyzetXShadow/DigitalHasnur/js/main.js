import { initHero } from './components/hero.js';
import { QuizApp } from './components/quiz.js';
import { Modal } from './components/modal.js';
import { Toast } from './components/toast.js';
import { Navbar } from './components/navbar.js';
import { initSimulator } from './components/simulator.js';
import { initExplore } from './components/explore.js';
import { quizData } from './data/quiz-data.js';

// Application state
const appState = {
    quizCompleted: false,
    userProfile: null,
    currentSection: 'hero',
};

// Global instances
let quizApp = null;
let modal = null;
let toast = null;
let navbar = null;
let simulator = null;
let exploreSection = null;

function initSimulatorSection() {
    // Initialize with general profile (fallback)
    // Will be updated when user completes quiz
    const profile = appState.userProfile || 'general';
    simulator = initSimulator(profile);
}

function initExploreSection() {
    exploreSection = initExplore();
}

function initApp() {
    console.log('Digital Hasnur - Initializing application...');

    try {
        // Initialize global components
        toast = new Toast();
        navbar = new Navbar();
        modal = new Modal();

        // Detect prefers-reduced-motion
        detectReducedMotionPreference();

        // Initialize hero section
        initHero();

        // Initialize quiz with error handling
        initQuiz();

        // Initialize simulator with default profile
        // DISABLED: Simulator sekarang menggunakan HTML statis di index.html
        // initSimulatorSection();

        // Initialize explore section
        initExploreSection();

        // Initialize keyboard navigation
        initKeyboardNavigation();

        // Initialize accessibility features
        initAccessibilityFeatures();

        // Log successful initialization
        console.log('Application initialized successfully');

        // Show welcome message
        if (toast) {
            toast.success('Selamat datang di Digital Hasnur!', 2000);
        }
    } catch (error) {
        console.error('Application initialization failed:', error);
        showError('Terjadi kesalahan saat memuat aplikasi. Silakan refresh halaman.');
    }
}

function detectReducedMotionPreference() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
        console.log('Reduced motion preference detected - simplifying animations');
        document.documentElement.classList.add('reduce-motion');
    }

    // Listen for changes in motion preference
    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
        if (e.matches) {
            document.documentElement.classList.add('reduce-motion');
            console.log('Reduced motion enabled');
        } else {
            document.documentElement.classList.remove('reduce-motion');
            console.log('Reduced motion disabled');
        }
    });
}

function initQuiz() {
    try {
        // Validate quiz data
        if (!quizData || !quizData.questions || !quizData.profiles) {
            throw new Error('Quiz data is invalid or missing');
        }

        // Initialize QuizApp
        quizApp = new QuizApp(quizData);

        // Export to window for debugging and fallback
        window.quizAppInstance = quizApp;
        console.log('QuizApp exported to window.quizAppInstance');

        // Get CTA button from hero section to scroll to quiz
        const ctaPrimary = document.getElementById('cta-primary');
        if (ctaPrimary) {
            ctaPrimary.addEventListener('click', (e) => {
                e.preventDefault();
                const quizSection = document.getElementById('quiz');
                if (quizSection) {
                    quizSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });
                }
            });
        }

        // Get secondary CTA button to explore campus (skip to simulator)
        const ctaSecondary = document.getElementById('cta-secondary');
        if (ctaSecondary) {
            ctaSecondary.addEventListener('click', () => {
                const simulatorSection = document.getElementById('simulator');
                if (simulatorSection) {
                    simulatorSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });
                }
            });
        }

        console.log('Quiz initialized successfully');
    } catch (error) {
        console.error('Quiz initialization failed:', error);
        showError('Quiz tidak dapat dimuat. Anda masih dapat menjelajahi kampus.');

        // Provide alternative navigation
        const ctaPrimary = document.getElementById('cta-primary');
        if (ctaPrimary) {
            ctaPrimary.addEventListener('click', () => {
                const exploreSection = document.getElementById('explore');
                if (exploreSection) {
                    exploreSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });
                }
            });
        }
    }
}

/**
 * Start the quiz
 */
function startQuiz() {
    // Quiz sudah diinisialisasi di QuizApp, tidak perlu modal lagi
    console.log('Quiz started via QuizApp');
}

/**
 * Attach event listeners to quiz options
 */
function attachQuizEventListeners() {
    // Tidak diperlukan lagi karena QuizApp menangani sendiri
}

/**
 * Handle quiz answer selection
 * @param {number} optionIndex - Selected option index
 */
function handleQuizAnswer(optionIndex) {
    // Tidak diperlukan lagi karena QuizApp menangani sendiri
}

/**
 * Handle view simulation button click
 */
function handleViewSimulation() {
    // Tidak diperlukan lagi karena QuizApp menangani sendiri
}

/**
 * Handle retake quiz button click
 */
function handleRetakeQuiz() {
    // Tidak diperlukan lagi karena QuizApp menangani sendiri
}

/**
 * Show error message
 * @param {string} message - Error message to display
 */
function showError(message) {
    if (toast) {
        toast.error(message);
    } else {
        alert(message);
    }
}

/**
 * Get current application state
 */
export function getAppState() {
    return { ...appState };
}

/**
 * Update application state
 */
export function updateAppState(updates) {
    Object.assign(appState, updates);
    console.log('App state updated:', appState);
}

/**
 * Get global toast instance
 */
export function getToast() {
    return toast;
}

/**
 * Get global navbar instance
 */
export function getNavbar() {
    return navbar;
}

function initKeyboardNavigation() {
    // Tab key navigation for interactive elements
    document.addEventListener('keydown', (e) => {
        // Skip if user is typing in an input
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            return;
        }

        // Handle keyboard shortcuts
        switch (e.key) {
            case 'h':
            case 'H':
                // Navigate to hero section
                if (!e.ctrlKey && !e.metaKey) {
                    const heroSection = document.getElementById('hero');
                    if (heroSection) {
                        heroSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }
                break;
            case 'q':
            case 'Q':
                // Navigate to quiz section
                if (!e.ctrlKey && !e.metaKey) {
                    const quizSection = document.getElementById('quiz');
                    if (quizSection) {
                        quizSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }
                break;
            case 's':
            case 'S':
                // Navigate to simulator section
                if (!e.ctrlKey && !e.metaKey) {
                    const simulatorSection = document.getElementById('simulator');
                    if (simulatorSection) {
                        simulatorSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }
                break;
            case 'e':
            case 'E':
                // Navigate to explore section
                if (!e.ctrlKey && !e.metaKey) {
                    const exploreSection = document.getElementById('explore');
                    if (exploreSection) {
                        exploreSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }
                break;
            case 'c':
            case 'C':
                // Navigate to contact section
                if (!e.ctrlKey && !e.metaKey) {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }
                break;
        }
    });

    console.log('Keyboard navigation initialized');
}

function initAccessibilityFeatures() {
    // Add skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#hero';
    skipLink.className =
        'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded';
    skipLink.textContent = 'Lewati ke konten utama';
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Ensure all interactive elements have proper focus indicators
    const style = document.createElement('style');
    style.textContent = `
        /* Enhanced focus indicators for accessibility */
        *:focus-visible {
            outline: 2px solid #106EE8;
            outline-offset: 2px;
        }
        
        /* Screen reader only class */
        .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border-width: 0;
        }
        
        .focus\\:not-sr-only:focus {
            position: static;
            width: auto;
            height: auto;
            padding: 0.5rem 1rem;
            margin: 0;
            overflow: visible;
            clip: auto;
            white-space: normal;
        }
    `;
    document.head.appendChild(style);

    // Add ARIA labels to sections
    const sections = [
        { id: 'hero', label: 'Bagian Utama' },
        { id: 'quiz', label: 'Quiz Kepribadian' },
        { id: 'simulator', label: 'Simulasi Kehidupan Mahasiswa' },
        { id: 'explore', label: 'Jelajahi Kampus' },
        { id: 'contact', label: 'Informasi Kontak' },
    ];

    sections.forEach(({ id, label }) => {
        const section = document.getElementById(id);
        if (section) {
            section.setAttribute('aria-label', label);
            section.setAttribute('role', 'region');
        }
    });

    console.log('Accessibility features initialized');
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

// Export for use in other modules
export { appState };

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const navBrand = document.getElementById('nav-brand');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');

    // 1. Logic Animasi Scroll (Glassmorphism Effect)
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            // Saat di-scroll ke bawah
            navbar.classList.remove('bg-transparent', 'border-transparent', 'py-4');
            navbar.classList.add('bg-white/90', 'backdrop-blur-md', 'border-gray-200', 'shadow-sm');

            // Ubah text logo jadi gelap
            navBrand.classList.remove('text-white');
            navBrand.classList.add('text-slate-800');

            // Ubah text link desktop jadi gelap
            navLinks.forEach((link) => {
                link.classList.remove('text-white', 'hover:bg-white/20');
                link.classList.add('text-slate-700', 'hover:bg-blue-50', 'hover:text-[#106EE8]');
            });

            // Ubah icon hamburger mobile jadi gelap
            mobileMenuBtn.classList.remove('text-white', 'hover:bg-white/20');
            mobileMenuBtn.classList.add('text-slate-800', 'hover:bg-gray-100');
        } else {
            // Saat balik ke paling atas (Hero Section)
            navbar.classList.add('bg-transparent', 'border-transparent', 'py-4');
            navbar.classList.remove(
                'bg-white/90',
                'backdrop-blur-md',
                'border-gray-200',
                'shadow-sm',
            );

            // Kembalikan text ke putih
            navBrand.classList.add('text-white');
            navBrand.classList.remove('text-slate-800');

            navLinks.forEach((link) => {
                link.classList.add('text-white', 'hover:bg-white/20');
                link.classList.remove('text-slate-700', 'hover:bg-blue-50', 'hover:text-[#106EE8]');
            });

            mobileMenuBtn.classList.add('text-white', 'hover:bg-white/20');
            mobileMenuBtn.classList.remove('text-slate-800', 'hover:bg-gray-100');
        }
    });

    // 2. Logic Toggle Menu Mobile
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');

        // Ubah icon dari hamburger (garis 3) ke X (close)
        if (mobileMenu.classList.contains('hidden')) {
            menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16'); // Hamburger
        } else {
            menuIcon.setAttribute('d', 'M6 18L18 6M6 6l12 12'); // Icon X
        }
    });

    // 3. Auto-close mobile menu kalau link diklik
    const mobileLinks = document.querySelectorAll('.mobile-link');
    mobileLinks.forEach((link) => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
        });
    });
});

// === GANTIKAN SEMUA EVENT LISTENER NAVBAR DENGAN KODE INI ===

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const navBrand = document.getElementById('logo-brand');
    const navLinks = document.querySelectorAll('.nav-link');
    const navCta = document.getElementById('nav-cta');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');

    // 1. Logic Toggle Menu Mobile
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        if (mobileMenu.classList.contains('hidden')) {
            menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16'); // Hamburger
        } else {
            menuIcon.setAttribute('d', 'M6 18L18 6M6 6l12 12'); // Icon X
        }
    });

    // 2. Auto-close mobile menu kalau link diklik
    const mobileLinks = document.querySelectorAll('.mobile-link');
    mobileLinks.forEach((link) => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
        });
    });

    // 3. Logic Animasi Scroll (Satu pintu, anti-nabrak!)
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            // === MODE BIRU (Saat halaman di-scroll ke bawah) ===
            navbar.classList.remove('bg-white/70', 'backdrop-blur-xl', 'border-white/20', 'py-3');
            navbar.classList.add('bg-[#106EE8]', 'shadow-lg', 'py-2'); // Padding mengecil dikit biar elegan

            // Teks Menu & Efek Hover berubah jadi PUTIH
            navLinks.forEach((link) => {
                link.classList.remove('text-slate-600', 'hover:text-blue-600', 'after:bg-blue-600');
                link.classList.add('text-white/80', 'hover:text-white', 'after:bg-white');
            });

            // Tombol CTA (Daftar) berubah jadi latar Putih, teks Biru
            navCta.classList.remove(
                'bg-gradient-to-r',
                'from-blue-600',
                'to-indigo-600',
                'text-white',
            );
            navCta.classList.add('bg-white', 'text-[#106EE8]', 'hover:bg-gray-100');

            // Tombol Mobile Menu berubah Putih
            mobileMenuBtn.classList.remove(
                'text-slate-600',
                'hover:text-blue-600',
                'hover:bg-blue-50',
            );
            mobileMenuBtn.classList.add('text-white', 'hover:bg-white/20');
        } else {
            // === MODE GLASSMORPHISM (Saat kembali ke paling atas) ===
            navbar.classList.add('bg-white/70', 'backdrop-blur-xl', 'border-white/20', 'py-3');
            navbar.classList.remove('bg-[#106EE8]', 'shadow-lg', 'py-2');

            // Teks Menu & Efek Hover kembali jadi SLATE & BIRU
            navLinks.forEach((link) => {
                link.classList.add('text-slate-600', 'hover:text-blue-600', 'after:bg-blue-600');
                link.classList.remove('text-white/80', 'hover:text-white', 'after:bg-white');
            });

            // Tombol CTA kembali ke Gradasi Biru
            navCta.classList.add(
                'bg-gradient-to-r',
                'from-blue-600',
                'to-indigo-600',
                'text-white',
            );
            navCta.classList.remove('bg-white', 'text-[#106EE8]', 'hover:bg-gray-100');

            // Tombol Mobile Menu kembali ke Slate
            mobileMenuBtn.classList.add(
                'text-slate-600',
                'hover:text-blue-600',
                'hover:bg-blue-50',
            );
            mobileMenuBtn.classList.remove('text-white', 'hover:bg-white/20');
        }
    });
});

import { quizData } from './data/quiz-data.js';

// Fungsi ini dipanggil setelah kuis selesai dan profil sudah ditentukan
function renderSimulator(profileKey) {
    console.log('renderSimulator dipanggil dengan profileKey:', profileKey);

    const profile = quizData.profiles[profileKey];
    if (!profile) {
        console.error('Profile tidak ditemukan untuk key:', profileKey);
        return;
    }

    console.log('Profile ditemukan:', profile.title);

    // Helper function untuk update elemen dengan null check
    const updateElement = (id, property, value) => {
        const element = document.getElementById(id);
        if (element) {
            element[property] = value;
        } else {
            console.warn(`Element dengan id '${id}' tidak ditemukan`);
        }
    };

    // 1. Update Teks di ID Card
    updateElement('sim-title', 'textContent', profile.title);
    updateElement('sim-subtitle', 'textContent', profile.name);
    updateElement('sim-desc', 'textContent', profile.description);
    updateElement(
        'simulator-subtitle',
        'textContent',
        `Wah, ternyata kamu seorang ${profile.title}! Berikut adalah simulasi kehidupan kampusmu:`,
    );

    // Update warna Header Card sesuai profil
    const headerBg = document.getElementById('card-header-bg');

    if (headerBg) {
        // Hapus warna default
        headerBg.className = 'h-32 relative ';

        // Set warna dinamis
        if (profileKey === 'tech') {
            headerBg.classList.add('bg-gradient-to-br', 'from-[#106EE8]', 'to-indigo-800');
            const timelineIcon = document.getElementById('timeline-icon');
            const matkulIcon = document.getElementById('matkul-icon');
            if (timelineIcon) timelineIcon.classList.replace('text-slate-400', 'text-blue-500');
            if (matkulIcon) matkulIcon.classList.replace('text-slate-400', 'text-blue-500');
        } else if (profileKey === 'creative') {
            headerBg.classList.add('bg-gradient-to-br', 'from-purple-500', 'to-fuchsia-700');
            const timelineIcon = document.getElementById('timeline-icon');
            const matkulIcon = document.getElementById('matkul-icon');
            if (timelineIcon) timelineIcon.classList.replace('text-slate-400', 'text-purple-500');
            if (matkulIcon) matkulIcon.classList.replace('text-slate-400', 'text-purple-500');
        } else if (profileKey === 'business') {
            headerBg.classList.add('bg-gradient-to-br', 'from-emerald-500', 'to-teal-700');
            const timelineIcon = document.getElementById('timeline-icon');
            const matkulIcon = document.getElementById('matkul-icon');
            if (timelineIcon) timelineIcon.classList.replace('text-slate-400', 'text-emerald-500');
            if (matkulIcon) matkulIcon.classList.replace('text-slate-400', 'text-emerald-500');
        } else if (profileKey === 'automotive') {
            headerBg.classList.add('bg-gradient-to-br', 'from-orange-500', 'to-red-700');
            const timelineIcon = document.getElementById('timeline-icon');
            const matkulIcon = document.getElementById('matkul-icon');
            if (timelineIcon) timelineIcon.classList.replace('text-slate-400', 'text-orange-500');
            if (matkulIcon) matkulIcon.classList.replace('text-slate-400', 'text-orange-500');
        }
    }

    // 2. Update Traits (Sifat)
    const traitsHtml = profile.traits
        .map(
            (trait) =>
                `<span class="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full">${trait}</span>`,
        )
        .join('');
    updateElement('sim-traits', 'innerHTML', traitsHtml);

    // 3. Update Prodi & UKM
    updateElement('sim-prodi', 'textContent', profile.recommendedProdi[0]);
    updateElement('sim-ukm', 'textContent', profile.recommendedUKM.join(' / '));

    const prodiDot = document.getElementById('sim-prodi-dot');
    if (prodiDot) {
        prodiDot.className = `w-2 h-2 rounded-full ${profileKey === 'tech' ? 'bg-blue-500' : profileKey === 'creative' ? 'bg-purple-500' : profileKey === 'business' ? 'bg-emerald-500' : 'bg-orange-500'}`;
    }

    const ukmDot = document.getElementById('sim-ukm-dot');
    if (ukmDot) {
        ukmDot.className = `w-2 h-2 rounded-full ${profileKey === 'tech' ? 'bg-indigo-500' : profileKey === 'creative' ? 'bg-fuchsia-500' : profileKey === 'business' ? 'bg-teal-500' : 'bg-red-500'}`;
    }

    // 4. Update Mata Kuliah
    const matkulHtml = profile.exampleCourses
        .map((mk) => {
            let colorClass = 'bg-blue-50 text-blue-700 border-blue-100';
            if (profileKey === 'creative')
                colorClass = 'bg-purple-50 text-purple-700 border-purple-100';
            if (profileKey === 'business')
                colorClass = 'bg-emerald-50 text-emerald-700 border-emerald-100';
            if (profileKey === 'automotive')
                colorClass = 'bg-orange-50 text-orange-700 border-orange-100';

            return `<span class="px-4 py-2 ${colorClass} border rounded-xl text-sm font-medium">${mk}</span>`;
        })
        .join('');
    updateElement('sim-matkul', 'innerHTML', matkulHtml);

    // 5. UPDATE JUDUL TIMELINE
    updateElement('timeline-title', 'textContent', `Perjalanan Sehari ${profile.title}`);

    // 6. Merender Jadwal Harian (Timeline)
    const icons = ['📚', '⚙️', '🍜', '🎮'];
    const timelineHtml = profile.dailySchedule
        .map((schedule, index) => {
            let colorTheme = 'blue';
            if (profileKey === 'creative') colorTheme = 'purple';
            if (profileKey === 'business') colorTheme = 'emerald';
            if (profileKey === 'automotive') colorTheme = 'orange';

            const bgColors = [
                `bg-${colorTheme}-100`,
                `bg-indigo-100`,
                `bg-orange-100`,
                `bg-sky-100`,
            ];
            const textColors = [
                `text-${colorTheme}-700`,
                `text-indigo-700`,
                `text-orange-700`,
                `text-sky-700`,
            ];

            return `
            <div class="flex gap-4 md:gap-6 relative group">
                <div class="w-12 h-12 flex-shrink-0 ${bgColors[index % 4]} rounded-full flex items-center justify-center border-4 border-white shadow-sm relative z-10 group-hover:scale-110 transition-transform">
                    <span class="text-lg">${icons[index % 4]}</span>
                </div>
                <div class="flex-1 bg-slate-50 border border-slate-100 rounded-2xl p-5 hover:bg-white hover:shadow-md transition-all">
                    <div class="inline-block px-3 py-1 ${bgColors[index % 4]} ${textColors[index % 4]} rounded-lg text-xs font-bold mb-2">${schedule.time}</div>
                    <h5 class="font-bold text-slate-800 text-lg mb-1">${schedule.activity.split(':')[0]}</h5>
                    <p class="text-sm text-slate-600">${schedule.activity}</p>
                </div>
            </div>
        `;
        })
        .join('');
    updateElement('sim-timeline', 'innerHTML', timelineHtml);

    console.log('renderSimulator selesai dijalankan');
}

// Export ke global scope agar bisa dipanggil dari quiz.js
if (typeof window !== 'undefined') {
    window.renderSimulator = renderSimulator;
    console.log('renderSimulator telah di-export ke window');
}
