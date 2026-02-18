/* =========================================
   CHOIZZ - Hackathon Edition JavaScript
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {

    // --- INITIAL DATA & LOCALSTORAGE ---
    let userPoints = parseInt(localStorage.getItem('choizz_points')) || 4200;

    // Simulate other users
    let leaderboardData = [
        { name: "Zenith_Creator", points: 12400 },
        { name: "Neon_Ghost", points: 9100 },
        { name: "Aether_Flux", points: 8800 },
        { name: "Cyber_Sage", points: 7200 },
        { name: "Choizz_User (You)", points: userPoints, isUser: true }
    ];

    // --- 1. SPA NAVIGATION ---
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');

    function switchSection(targetId) {
        sections.forEach(section => {
            section.classList.add('hidden');
            section.classList.remove('animate-fade-in-up');
        });

        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.remove('hidden');
            void targetSection.offsetWidth;
            targetSection.classList.add('animate-fade-in-up');
            initSkeletons(targetSection);
        }

        navLinks.forEach(link => {
            link.classList.toggle('nav-active', link.dataset.target === targetId);
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            switchSection(link.dataset.target);
        });
    });


    // --- 2. EXPERIENCE HUB (Filter & Search) ---
    const searchInput = document.getElementById('exp-search');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const expCards = document.querySelectorAll('.exp-card');

    function applyFilters() {
        const searchTerm = searchInput.value.toLowerCase();
        const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;

        let visibleCount = 0;
        expCards.forEach(card => {
            const title = card.dataset.title.toLowerCase();
            const mood = card.dataset.mood;

            const matchesSearch = title.includes(searchTerm);
            const matchesMood = activeFilter === 'all' || mood === activeFilter;

            if (matchesSearch && matchesMood) {
                card.style.display = 'block';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        // Trigger skeleton loading on the visible cards
        if (visibleCount > 0) {
            initSkeletons(document.getElementById('experience-grid'));
        }
    }

    if (searchInput) {
        searchInput.addEventListener('input', applyFilters);
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active', 'bg-white/10'));
            btn.classList.add('active');
            applyFilters();
        });
    });


    // --- 3. SOCIAL VALIDATION (Leaderboard & Points) ---
    function updateLeaderboardUI() {
        const list = document.getElementById('leaderboard-list');
        if (!list) return;

        // Sort data
        leaderboardData.sort((a, b) => b.points - a.points);

        list.innerHTML = leaderboardData.map((player, index) => `
            <div class="flex items-center justify-between p-3 rounded-2xl ${player.isUser ? 'bg-fuchsia-600/10 border-fuchsia-600/20' : 'bg-white/5'} border border-white/5 transition-all duration-500">
                <div class="flex items-center gap-4">
                    <div class="w-8 h-8 rounded-full ${index === 0 ? 'bg-yellow-400 text-black' : 'bg-white/5 text-gray-400'} flex items-center justify-center font-bold text-xs">${index + 1}</div>
                    <span class="font-bold text-xs ${player.isUser ? 'text-fuchsia-400' : ''}">${player.name}</span>
                </div>
                <span class="font-mono text-[10px] text-cyan-400">${(player.points / 1000).toFixed(1)}k pts</span>
            </div>
        `).join('');

        // Update footer/counter stats
        document.querySelectorAll('.vibe-score').forEach(el => {
            if (el.closest('#community')) el.innerText = (userPoints / 1000).toFixed(1) + 'k';
        });
    }

    const vibeBtns = document.querySelectorAll('.vibe-btn');
    vibeBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            createParticles(e.clientX, e.clientY);

            // Add points
            userPoints += 100;
            localStorage.setItem('choizz_points', userPoints);

            // Update local object
            const userObj = leaderboardData.find(p => p.isUser);
            if (userObj) userObj.points = userPoints;

            updateLeaderboardUI();

            btn.classList.add('scale-110');
            setTimeout(() => btn.classList.remove('scale-110'), 200);
            createToast('Vibe Points +100!');
        });
    });

    // Simulate other users playing
    setInterval(() => {
        const randomPlayerIndex = Math.floor(Math.random() * (leaderboardData.length - 1));
        leaderboardData[randomPlayerIndex].points += Math.floor(Math.random() * 50);
        updateLeaderboardUI();
    }, 5000);

    updateLeaderboardUI();


    // --- 4. VISUAL EFFECTS (Particles, Toasts, Skeletons) ---
    function createParticles(x, y) {
        for (let i = 0; i < 10; i++) {
            const p = document.createElement('div');
            p.className = 'particle';
            const tx = (Math.random() - 0.5) * 150;
            const ty = (Math.random() - 0.5) * 150;
            p.style.setProperty('--tw-translate-x', `${tx}px`);
            p.style.setProperty('--tw-translate-y', `${ty}px`);
            p.style.left = `${x}px`;
            p.style.top = `${y}px`;
            document.body.appendChild(p);
            setTimeout(() => p.remove(), 800);
        }
    }

    function createToast(message) {
        const container = document.getElementById('toast-container');
        if (!container) return;
        const toast = document.createElement('div');
        toast.className = 'glass-card px-4 py-3 rounded-xl border border-white/10 text-xs font-medium animate-fade-in-up shadow-lg';
        toast.innerHTML = `<span class="text-fuchsia-400 mr-2">●</span> ${message}`;
        container.appendChild(toast);
        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    function initSkeletons(parent = document) {
        const skeletons = parent.querySelectorAll('.skeleton');
        const actuals = parent.querySelectorAll('.content-actual');

        skeletons.forEach(s => s.classList.remove('hidden'));
        actuals.forEach(c => c.classList.add('hidden'));

        setTimeout(() => {
            skeletons.forEach(s => s.classList.add('hidden'));
            actuals.forEach(c => c.classList.remove('hidden'));
        }, 800);
    }
    initSkeletons();

    // TOASTS SIMULATION
    setInterval(() => {
        const msgs = ["User_Z shared vibe", "Leaderboard updated", "New creator joined", "System status: Optimised"];
        createToast(msgs[Math.floor(Math.random() * msgs.length)]);
    }, 12000);


    // --- 5. PREMIUM VIBE SHIFTER ENGINE ---
    const vibeTrigger = document.getElementById('vibe-trigger');
    const vibePanel = document.getElementById('vibe-panel');
    const vibeOptions = document.querySelectorAll('.vibe-option');
    const glitchBtn = document.getElementById('glitch-trigger');
    const scanline = document.getElementById('scanline-wave');
    const screenFlash = document.getElementById('screen-flash');
    const vibeAudio = document.getElementById('vibe-audio');
    const customCursor = document.getElementById('custom-cursor');

    // Load saved vibe
    const savedVibe = localStorage.getItem('choizz_vibe') || 'cyber';
    applyVibe(savedVibe, false); // Initial load, no anim

    function applyVibe(vibeName, withFeedback = true) {
        if (withFeedback) triggerFeedback();

        // 2. Set Theme Attribute
        document.body.setAttribute('data-theme', vibeName);

        // 3. Update Global UI Elements
        updateThemeUI(vibeName);

        // 4. Persistence
        localStorage.setItem('choizz_vibe', vibeName);
    }

    function triggerFeedback() {
        scanline.classList.remove('scanline-active');
        screenFlash.classList.remove('flash-active');
        void scanline.offsetWidth; // Force reflow
        void screenFlash.offsetWidth;

        scanline.classList.add('scanline-active');
        screenFlash.classList.add('flash-active');

        if (vibeAudio) {
            vibeAudio.currentTime = 0;
            vibeAudio.play().catch(() => { }); // Handle browser policy
        }
    }

    function triggerRealityGlitch() {
        // Apply Glitch Filters to Body
        document.body.classList.add('glitch-flash');

        // Vibrate all experience cards
        const cards = document.querySelectorAll('.exp-card');
        cards.forEach(card => card.classList.add('reconstructing'));

        // Play sound if available (can use same vibeAudio for intensity)
        if (vibeAudio) {
            vibeAudio.currentTime = 0;
            vibeAudio.playbackRate = 0.5; // Deeper sound
            vibeAudio.play().catch(() => { });
        }

        // Change Theme mid-glitch
        setTimeout(() => {
            applyVibe('chaos', false);
            createToast("REALITY COLLAPSED: DEEP CHAOS");
        }, 400);

        // Remove filters and vibration after 1s
        setTimeout(() => {
            document.body.classList.remove('glitch-flash');
            cards.forEach(card => card.classList.remove('reconstructing'));
            if (vibeAudio) vibeAudio.playbackRate = 1.0;
        }, 1200);
    }

    function updateThemeUI(vibeName) {
        vibeOptions.forEach(opt => {
            opt.classList.toggle('active', opt.dataset.vibe === vibeName);
            opt.classList.toggle('border-accent-primary', opt.dataset.vibe === vibeName);
        });

        // Sync extra elements (Tailwind might need class swaps for complete sync)
        const accentColor = getComputedStyle(document.body).getPropertyValue('--accent-primary').trim();

        // Update particles and icons based on accent
        document.querySelectorAll('ion-icon').forEach(icon => {
            if (!icon.closest('.vibe-option')) {
                icon.style.color = 'var(--accent-primary)';
            }
        });

        // Cursor logic
        if (customCursor) {
            if (vibeName === 'chaos') {
                customCursor.classList.add('chaos-cursor');
                document.body.style.cursor = 'none';
            } else {
                customCursor.classList.remove('chaos-cursor');
                document.body.style.cursor = 'auto';
            }
        }
    }

    // Cursor tracking
    document.addEventListener('mousemove', (e) => {
        if (customCursor) {
            customCursor.style.left = e.clientX + 'px';
            customCursor.style.top = e.clientY + 'px';
        }
    });

    if (vibeTrigger) {
        vibeTrigger.addEventListener('click', (e) => {
            e.stopPropagation();
            vibePanel.classList.toggle('hidden');
        });
    }

    if (glitchBtn) {
        glitchBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            triggerRealityGlitch();
        });
    }

    vibeOptions.forEach(opt => {
        opt.addEventListener('click', (e) => {
            e.stopPropagation();
            const vibe = opt.dataset.vibe;
            applyVibe(vibe);
            createToast(`REALITY SHIFTED: ${vibe.toUpperCase()}`);
        });
    });

    // Global Close
    document.addEventListener('click', (e) => {
        if (vibePanel && !vibePanel.contains(e.target) && e.target !== vibeTrigger) {
            vibePanel.classList.add('hidden');
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') vibePanel.classList.add('hidden');
    });

    function init3DTilt() {
        document.querySelectorAll('.tilt-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const r = card.getBoundingClientRect();
                const x = e.clientX - r.left;
                const y = e.clientY - r.top;
                card.style.transform = `perspective(1000px) rotateX(${(r.height / 2 - y) / 10}deg) rotateY(${(x - r.width / 2) / 10}deg) scale3d(1.02, 1.02, 1.02)`;
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
            });
        });
    }
    init3DTilt();

    // --- 9. JOIN PORTAL SPA LOGIC ---
    const joinBtn = document.querySelector('a[href="#join"]');
    const joinSection = document.getElementById('join-section');
    const heroSection = document.querySelector('section.relative.min-h-screen');
    const spaContainer = document.getElementById('spa-content');
    const joinForm = document.getElementById('vibe-join-form');
    const joinClose = document.getElementById('join-close');
    const successClose = document.getElementById('success-close');

    function openJoinPortal(e) {
        if (e) e.preventDefault();
        heroSection.classList.add('hidden');
        spaContainer.classList.add('hidden');
        joinSection.classList.remove('hidden');
        joinSection.classList.add('animate-fade-in-up');
        document.getElementById('join-form-container').classList.remove('hidden');
        document.getElementById('join-success').classList.add('hidden');
    }

    function closeJoinPortal() {
        joinSection.classList.add('hidden');
        heroSection.classList.remove('hidden');
        spaContainer.classList.remove('hidden');
    }

    if (joinBtn) joinBtn.addEventListener('click', openJoinPortal);
    if (joinClose) joinClose.addEventListener('click', closeJoinPortal);
    if (successClose) successClose.addEventListener('click', closeJoinPortal);

    if (joinForm) {
        joinForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('join-username').value;
            const vibe = document.getElementById('join-vibe').value;
            document.getElementById('join-form-container').classList.add('hidden');
            const successDiv = document.getElementById('join-success');
            successDiv.classList.remove('hidden');
            document.getElementById('success-msg').innerText = `Welcome to the Pulse, ${username}!`;
            createToast(`New member: ${username} joined with ${vibe} vibe!`);
            leaderboardData.push({ name: username, points: 500, isUser: false });
            updateLeaderboardUI();
            userPoints += 500;
            localStorage.setItem('choizz_points', userPoints);
            createParticles(window.innerWidth / 2, window.innerHeight / 2);
        });
    }

    console.log("%c Choizz Hackathon Edition Live ", "background: #c026d3; color: white; padding: 5px; font-weight: bold;");
});
