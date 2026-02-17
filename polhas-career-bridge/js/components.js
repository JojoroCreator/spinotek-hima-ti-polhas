// Component Loader - Load reusable HTML components
export async function loadComponent(elementId, componentPath) {
    try {
        // Add cache-busting timestamp with random number
        const cacheBuster = `?v=${Date.now()}&r=${Math.random()}&cb=${performance.now()}`;
        const response = await fetch(componentPath + cacheBuster, {
            cache: 'no-store',
            headers: {
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                'Pragma': 'no-cache',
                'Expires': '0'
            }
        });
        const html = await response.text();
        console.log(`📦 Loaded ${componentPath}: ${html.length} characters`);
        
        // Debug: Check if logout-menu-item exists in loaded HTML
        if (componentPath.includes('navbar')) {
            const hasLogout = html.includes('logout-menu-item');
            console.log(`🔍 navbar.html contains logout-menu-item: ${hasLogout}`);
            if (!hasLogout) {
                console.error('❌ logout-menu-item NOT found in fetched HTML!');
                console.log('📄 First 500 chars:', html.substring(0, 500));
                console.log('📄 Last 500 chars:', html.substring(html.length - 500));
            } else {
                console.log('✅ logout-menu-item found in navbar.html!');
            }
        }
        
        const element = document.getElementById(elementId);
        if (element) {
            element.innerHTML = html;
            console.log(`✅ Injected HTML into #${elementId}`);
        }
    } catch (error) {
        console.error(`Error loading component ${componentPath}:`, error);
    }
}

// Load all common components
export async function loadCommonComponents() {
    console.log('📦 Loading common components...');
    
    await Promise.all([
        loadComponent('navbar-container', 'components/navbar.html'),
        loadComponent('footer-container', 'components/footer.html')
    ]);
    
    console.log('✅ All components loaded');
    
    // Inject auth modal if it doesn't exist
    const { injectAuthModal } = await import('./inject-auth-modal.js');
    injectAuthModal();
    
    // Verify modal exists
    const modal = document.getElementById('auth-modal');
    if (modal) {
        console.log('✅ Auth modal found in DOM');
    } else {
        console.error('❌ Auth modal NOT found in DOM!');
    }
    
    // Highlight active nav link based on current page
    highlightActiveNav();
    
    // Initialize auth after components are loaded
    initializeAuth();
}

// Highlight active navigation link
function highlightActiveNav() {
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('data-page');
        if (linkPage === currentPage) {
            link.classList.remove('text-gray-700');
            link.classList.add('text-blue-600');
        }
    });
}

// Initialize auth functionality after components load
function initializeAuth() {
    // Import and initialize auth from main.js will handle this
    // This ensures auth modal event listeners are attached after DOM is ready
    console.log('✅ Components loaded, dispatching componentsLoaded event');
    
    // Setup mobile menu toggle
    setupMobileMenu();
    
    // Debug: Check if register-prodi select exists
    setTimeout(() => {
        const prodiSelect = document.getElementById('register-prodi');
        if (prodiSelect) {
            console.log('✅ register-prodi SELECT found:', prodiSelect);
            console.log('   - Display:', window.getComputedStyle(prodiSelect).display);
            console.log('   - Visibility:', window.getComputedStyle(prodiSelect).visibility);
            console.log('   - Opacity:', window.getComputedStyle(prodiSelect).opacity);
            console.log('   - Height:', window.getComputedStyle(prodiSelect).height);
            console.log('   - Options count:', prodiSelect.options.length);
        } else {
            console.error('❌ register-prodi SELECT NOT FOUND!');
        }
    }, 100);
    
    const event = new Event('componentsLoaded');
    document.dispatchEvent(event);
}

// Setup mobile menu toggle
function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            
            // Toggle icon
            const icon = mobileMenuBtn.querySelector('svg');
            if (mobileMenu.classList.contains('hidden')) {
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
            } else {
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>';
            }
        });
        
        // Close mobile menu when clicking a link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuBtn.querySelector('svg');
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
            });
        });
        
        console.log('✅ Mobile menu setup complete');
    }
}
