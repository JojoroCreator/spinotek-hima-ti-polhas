// Import data
import { jobs, programStudi, companies, mitraPolhas, supported, skillRoadmaps } from './data.js';

// Import gamification
import { initGamification, showNotification } from './gamification.js';

// Import auth & UI
import { auth } from './auth.js';
import { 
    showLoginModal, 
    showRegisterModal, 
    closeAuthModal, 
    updateNavbar, 
    toggleUserDropdown,
    setupDropdownClose,
    showToast as uiShowToast,
    showProfileModal,
    handleLogout
} from './ui.js';

// Import recommendation
import { recommendation } from './recommendation.js';

// Debug log
console.log('=== POLHAS CAREERBRIDGE LOADED ===');
console.log('Total Jobs:', jobs.length);
console.log('Total Roadmaps:', Object.keys(skillRoadmaps).length);

// Initialize Gamification
let userProgress = null;

// DOM Elements
const jobContainer = document.getElementById('job-container');
const prodiContainer = document.getElementById('prodi-container');
const mitraHasnurContainer = document.getElementById('mitra-hasnur-container');
const mitraPolhasContainer = document.getElementById('mitra-polhas-container');
const supportedContainer = document.getElementById('supported-container');
const searchInput = document.getElementById('search-input');
const typeFilter = document.getElementById('type-filter');
const prodiFilter = document.getElementById('prodi-filter');
const modal = document.getElementById('job-modal');
const closeModalBtn = document.getElementById('close-modal');
const applyBtn = document.getElementById('apply-btn');
const saveJobBtn = document.getElementById('save-job-btn');
const jobCountEl = document.getElementById('job-count');

// State
let currentJobs = [...jobs];
let selectedJob = null;
let savedJobs = JSON.parse(localStorage.getItem('savedJobs')) || [];
let completedSkills = JSON.parse(localStorage.getItem('completedSkills')) || {};

// Wait for components to load before attaching auth listeners
document.addEventListener('componentsLoaded', () => {
    console.log('✅ componentsLoaded event received in main.js');
    // Initialize auth after components are loaded
    updateNavbar();
    setupDropdownClose();
    attachAuthListeners();
});

// Fallback: Also try to attach listeners after a short delay
setTimeout(() => {
    console.log('⏰ Fallback: Attempting to attach auth listeners...');
    attachAuthListeners();
}, 1000);

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    // Initialize gamification (always needed)
    userProgress = initGamification();
    
    // Only run if elements exist (for specific pages)
    if (document.getElementById('stat-jobs')) {
        animateStats();
    }
    
    if (document.getElementById('prodi-container')) {
        renderProdi();
    }
    
    if (document.getElementById('mitra-hasnur-container')) {
        renderMitraHasnur();
    }
    
    if (document.getElementById('mitra-polhas-container')) {
        renderMitraPolhas();
    }
    
    if (document.getElementById('supported-container')) {
        renderSupported();
    }
    
    if (document.getElementById('prodi-filter')) {
        populateProdiFilter();
    }
    
    if (document.getElementById('job-container')) {
        renderJobs(currentJobs);
    }
    
    if (document.getElementById('skill-tree-container')) {
        initSkillRoadmap();
    }
    
    if (document.getElementById('portfolio-score')) {
        initPortfolioScorecard();
    }
    
    if (document.getElementById('job-container') || document.getElementById('job-modal')) {
        attachEventListeners();
    }
    
    // Show recommendations if user is logged in and element exists
    if (auth.isLoggedIn() && document.getElementById('recommended-jobs')) {
        renderRecommendedJobs();
    }
    
    // Check for URL hash to open specific job modal
    checkUrlHashForJob();
});

// Check URL hash and open job modal if needed
function checkUrlHashForJob() {
    const hash = window.location.hash;
    if (hash.startsWith('#job-')) {
        const jobId = parseInt(hash.replace('#job-', ''));
        if (jobId && jobs.find(j => j.id === jobId)) {
            // Small delay to ensure DOM is ready
            setTimeout(() => {
                openModal(jobId);
                // Clear hash after opening modal
                history.replaceState(null, null, ' ');
            }, 500);
        }
    }
}

// Animate Stats Counter
function animateStats() {
    const stats = [
        { id: 'stat-jobs', target: jobs.length },
        { id: 'stat-companies', target: companies.length },
        { id: 'stat-prodi', target: programStudi.length }
    ];

    stats.forEach(stat => {
        const el = document.getElementById(stat.id);
        if (!el) return; // Skip if element doesn't exist
        
        let current = 0;
        const increment = stat.target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= stat.target) {
                el.textContent = stat.target;
                clearInterval(timer);
            } else {
                el.textContent = Math.floor(current);
            }
        }, 30);
    });
}

// Render Program Studi
function renderProdi() {
    const prodiContainer = document.getElementById('prodi-container');
    if (!prodiContainer) return; // Skip if element doesn't exist
    
    prodiContainer.innerHTML = programStudi.map((prodi, index) => `
        <div class="bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-600 hover:shadow-lg transition cursor-pointer" style="animation: fadeInUp 0.6s ease-out ${index * 0.1}s both">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span class="text-2xl">${prodi.jenjang === 'D3' ? '🎓' : '🎯'}</span>
            </div>
            <h3 class="font-bold text-gray-900 mb-2">${prodi.shortName}</h3>
            <p class="text-sm text-gray-600">${prodi.jenjang}</p>
        </div>
    `).join('');
}

// Populate Prodi Filter
function populateProdiFilter() {
    prodiFilter.innerHTML = '<option value="">Semua Prodi</option>' + 
        programStudi.map(prodi => `<option value="${prodi.name}">${prodi.shortName}</option>`).join('');
}

// Render Mitra Hasnur
function renderMitraHasnur() {
    if (!mitraHasnurContainer) return; // Skip if element doesn't exist
    
    // Filter companies yang punya logo di mitra-hasnur
    const mitraHasnur = companies.filter(c => c.logo.includes('mitra-hasnur'));
    
    mitraHasnurContainer.innerHTML = mitraHasnur.map((company, index) => `
        <div class="bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-600 hover:shadow-lg transition" style="animation: fadeInUp 0.6s ease-out ${index * 0.1}s both">
            <div class="h-24 flex items-center justify-center mb-4">
                <img src="${company.logo}" alt="${company.name}" class="max-h-full max-w-full object-contain">
            </div>
            <h4 class="text-sm font-semibold text-gray-900 text-center">${company.name}</h4>
        </div>
    `).join('');
}

// Render Mitra Polhas
function renderMitraPolhas() {
    if (!mitraPolhasContainer) return; // Skip if element doesn't exist
    
    if (mitraPolhas.length === 0) {
        mitraPolhasContainer.innerHTML = `
            <div class="col-span-full text-center py-12">
                <p class="text-gray-500">Segera hadir...</p>
            </div>
        `;
        return;
    }
    
    mitraPolhasContainer.innerHTML = mitraPolhas.map((mitra, index) => `
        <div class="bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-600 hover:shadow-lg transition" style="animation: fadeInUp 0.6s ease-out ${index * 0.1}s both">
            <div class="h-24 flex items-center justify-center mb-4">
                <img src="${mitra.logo}" alt="${mitra.name}" class="max-h-full max-w-full object-contain">
            </div>
            <h4 class="text-sm font-semibold text-gray-900 text-center">${mitra.name}</h4>
        </div>
    `).join('');
}

// Render Supported
function renderSupported() {
    if (!supportedContainer) return; // Skip if element doesn't exist
    
    supportedContainer.innerHTML = supported.map((item, index) => `
        <div class="bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-600 hover:shadow-lg transition" style="animation: fadeInUp 0.6s ease-out ${index * 0.1}s both">
            <div class="h-20 flex items-center justify-center mb-3">
                <img src="${item.logo}" alt="${item.name}" class="max-h-full max-w-full object-contain">
            </div>
            <h4 class="text-xs font-medium text-gray-700 text-center">${item.name}</h4>
        </div>
    `).join('');
}

// Render Jobs Function
function renderJobs(data) {
    jobCountEl.textContent = `Menampilkan ${data.length} lowongan`;

    if (data.length === 0) {
        jobContainer.innerHTML = `
            <div class="col-span-full text-center py-20">
                <svg class="w-24 h-24 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Tidak Ada Lowongan Ditemukan</h3>
                <p class="text-gray-600">Coba ubah kata kunci pencarian atau filter Anda</p>
            </div>
        `;
        return;
    }

    jobContainer.innerHTML = data.map((job, index) => {
        const isSaved = savedJobs.includes(job.id);
        const prodiText = Array.isArray(job.prodi) ? job.prodi[0] : job.prodi;
        
        return `
            <div class="bg-gradient-to-br from-white to-gray-50/50 border-2 border-gray-200 rounded-3xl p-6 hover:border-blue-400 hover:shadow-2xl transition-all duration-300 cursor-pointer job-card group" 
                 style="animation: fadeInUp 0.6s ease-out ${index * 0.1}s both"
                 data-job-id="${job.id}">
                
                <!-- Card Header -->
                <div class="flex items-start justify-between mb-5">
                    <div class="w-16 h-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <img src="${job.logo}" alt="${job.company}" class="w-full h-full object-contain">
                    </div>
                    <button class="save-btn p-2.5 hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 rounded-xl transition-all ${isSaved ? 'text-blue-600' : 'text-gray-400'}" data-job-id="${job.id}">
                        <svg class="w-5 h-5" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                        </svg>
                    </button>
                </div>
                
                <!-- Job Title -->
                <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">${job.role}</h3>
                <p class="text-gray-600 text-sm mb-4 font-medium">${job.company}</p>
                
                <!-- Job Meta -->
                <div class="flex flex-wrap gap-2 mb-4">
                    <span class="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-xs font-bold shadow-lg shadow-blue-500/30">
                        ${job.type}
                    </span>
                    <span class="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full text-xs font-semibold flex items-center gap-1">
                        📍 ${job.location}
                    </span>
                </div>
                
                <!-- Prodi Badge -->
                <div class="mb-4">
                    <span class="text-xs text-gray-600 font-medium bg-purple-50 px-3 py-1.5 rounded-full">
                        ${prodiText}
                    </span>
                </div>
                
                <!-- Action Button -->
                <button class="view-detail-btn w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3.5 rounded-2xl font-bold transition-all hover:scale-105 shadow-lg shadow-blue-500/30">
                    Lihat Detail
                </button>
            </div>
        `;
    }).join('');

    // Attach click handlers
    document.querySelectorAll('.job-card').forEach(card => {
        const viewBtn = card.querySelector('.view-detail-btn');
        viewBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const jobId = parseInt(card.dataset.jobId);
            openModal(jobId);
        });
    });

    // Attach save button handlers
    document.querySelectorAll('.save-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const jobId = parseInt(btn.dataset.jobId);
            toggleSaveJob(jobId);
        });
    });
}

// Filter Jobs Function
function filterJobs() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const typeValue = typeFilter.value;
    const prodiValue = prodiFilter.value;

    currentJobs = jobs.filter(job => {
        const matchesSearch = 
            job.role.toLowerCase().includes(searchTerm) ||
            job.company.toLowerCase().includes(searchTerm) ||
            job.description.toLowerCase().includes(searchTerm);
        
        const matchesType = !typeValue || job.type === typeValue;
        
        const matchesProdi = !prodiValue || (Array.isArray(job.prodi) 
            ? job.prodi.includes(prodiValue)
            : job.prodi === prodiValue);

        return matchesSearch && matchesType && matchesProdi;
    });

    renderJobs(currentJobs);
}

// Toggle Save Job
function toggleSaveJob(jobId) {
    const index = savedJobs.indexOf(jobId);
    const job = jobs.find(j => j.id === jobId);
    
    if (index > -1) {
        savedJobs.splice(index, 1);
        showToast('Lowongan dihapus dari simpanan', 'error');
        
        // Update gamification - decrement saved jobs
        if (userProgress) {
            const currentCount = userProgress.data.stats.savedJobs;
            if (currentCount > 0) {
                userProgress.data.stats.savedJobs--;
                userProgress.saveProgress();
            }
        }
    } else {
        savedJobs.push(jobId);
        showToast(`${job.role} disimpan!`, 'success');
        
        // Update gamification - increment saved jobs
        if (userProgress) {
            userProgress.incrementStat('savedJobs');
        }
    }
    
    localStorage.setItem('savedJobs', JSON.stringify(savedJobs));
    renderJobs(currentJobs);
}

// Open Modal Function
function openModal(jobId) {
    selectedJob = jobs.find(job => job.id === jobId);
    
    if (!selectedJob) return;

    // Update gamification - increment job views
    if (userProgress) {
        userProgress.incrementStat('jobViews');
    }

    // Populate modal content
    document.getElementById('modal-logo').src = selectedJob.logo;
    document.getElementById('modal-logo').alt = selectedJob.company;
    document.getElementById('modal-role').textContent = selectedJob.role;
    document.getElementById('modal-company').textContent = selectedJob.company;
    document.getElementById('modal-type').textContent = selectedJob.type;
    
    const prodiText = Array.isArray(selectedJob.prodi) 
        ? selectedJob.prodi.join(', ') 
        : selectedJob.prodi;
    document.getElementById('modal-prodi').textContent = prodiText;
    
    // Add location
    document.getElementById('modal-location').textContent = selectedJob.location;
    
    document.getElementById('modal-description').textContent = selectedJob.description;
    
    // Populate requirements
    const reqList = document.getElementById('modal-requirements');
    reqList.innerHTML = selectedJob.requirements.map(req => 
        `<li class="flex items-start gap-2">
            <span class="text-blue-600 mt-1">✓</span>
            <span>${req}</span>
        </li>`
    ).join('');

    // Populate required skills if available
    const requiredSkillsSection = document.getElementById('required-skills-section');
    const modalSkills = document.getElementById('modal-skills');
    
    if (selectedJob.requiredSkills && selectedJob.requiredSkills.length > 0) {
        requiredSkillsSection.classList.remove('hidden');
        
        // Calculate skill match
        const { matchedSkills, totalSkills, percentage } = calculateSkillMatch(selectedJob.requiredSkills);
        
        // Determine match status color and message
        let matchColor = 'blue';
        let matchMessage = 'Mulai belajar skill yang dibutuhkan!';
        
        if (percentage >= 80) {
            matchColor = 'green';
            matchMessage = 'Kamu sangat cocok untuk posisi ini! 🎉';
        } else if (percentage >= 50) {
            matchColor = 'yellow';
            matchMessage = 'Lumayan! Tingkatkan skill untuk peluang lebih besar.';
        } else if (percentage > 0) {
            matchColor = 'orange';
            matchMessage = 'Masih perlu banyak belajar, tapi jangan menyerah!';
        }
        
        modalSkills.innerHTML = `
            <div class="mb-4 p-6 bg-gradient-to-br from-${matchColor}-50 to-${matchColor}-100/50 rounded-2xl border-2 border-${matchColor}-200 shadow-lg">
                <div class="flex items-center justify-between mb-3">
                    <span class="font-bold text-gray-900 text-lg">Skill Match</span>
                    <span class="text-3xl font-black bg-gradient-to-r from-${matchColor}-600 to-${matchColor}-700 bg-clip-text text-transparent">${percentage}%</span>
                </div>
                <div class="w-full bg-white/50 rounded-full h-4 overflow-hidden shadow-inner">
                    <div class="bg-gradient-to-r from-${matchColor}-500 to-${matchColor}-600 h-4 rounded-full transition-all duration-1000 ease-out shadow-lg" style="width: ${percentage}%"></div>
                </div>
                <p class="text-sm text-gray-800 mt-3 font-semibold">${matchedSkills} dari ${totalSkills} skill sudah kamu kuasai</p>
                <p class="text-xs text-${matchColor}-700 mt-1 font-medium">${matchMessage}</p>
            </div>
            
            ${selectedJob.requiredSkills.map(skillGroup => {
                const roadmap = skillRoadmaps[skillGroup.role];
                if (!roadmap) return '';
                
                const level = roadmap.levels.find(l => l.level === skillGroup.level);
                if (!level) return '';
                
                return `
                    <div class="bg-gradient-to-br from-white to-gray-50/50 border-2 border-gray-200 rounded-2xl p-5 mb-3 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="w-12 h-12 bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 text-white rounded-xl flex items-center justify-center text-base font-black shadow-lg">
                                L${skillGroup.level}
                            </div>
                            <div>
                                <h5 class="font-bold text-base text-gray-900">${level.title}</h5>
                                <p class="text-xs text-gray-500 font-medium">${roadmap.title}</p>
                            </div>
                        </div>
                        <div class="space-y-2.5 pl-1">
                            ${skillGroup.skills.map(skillName => {
                                const skill = level.skills.find(s => s.name === skillName);
                                const isCompleted = isSkillCompleted(skillGroup.role, skillGroup.level, skillName);
                                
                                return `
                                    <div class="flex items-center gap-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200 group">
                                        <input type="checkbox" 
                                               class="skill-checkbox w-5 h-5 text-blue-600 rounded-lg border-2 border-gray-300 cursor-pointer transition-all" 
                                               data-role="${skillGroup.role}" 
                                               data-level="${skillGroup.level}" 
                                               data-skill="${skillName}"
                                               ${isCompleted ? 'checked' : ''}>
                                        <span class="${isCompleted ? 'text-gray-900 font-bold' : 'text-gray-600 font-medium'} text-sm flex-1 group-hover:text-blue-700 transition-colors">${skillName}</span>
                                        ${isCompleted ? '<span class="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold rounded-full shadow-md">✓ Dikuasai</span>' : '<span class="text-gray-400 text-xs font-medium">Belum dikuasai</span>'}
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                `;
            }).join('')}
            
            <div class="mt-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border-2 border-blue-200">
                <p class="text-xs text-blue-900 font-medium">
                    💡 <strong>Tips:</strong> Centang skill yang sudah kamu kuasai untuk melihat skill match kamu dengan lowongan ini!
                </p>
            </div>
        `;
        
        // Attach checkbox listeners
        modalSkills.querySelectorAll('.skill-checkbox').forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                const role = e.target.dataset.role;
                const level = parseInt(e.target.dataset.level);
                const skill = e.target.dataset.skill;
                toggleSkillCompletion(role, level, skill);
                
                // Refresh modal to update skill match
                openModal(selectedJob.id);
            });
        });
        
        // Attach view roadmap button listener
        const viewRoadmapBtn = document.getElementById('view-roadmap-btn');
        if (viewRoadmapBtn) {
            viewRoadmapBtn.onclick = () => {
                closeModal();
                
                // Get the primary role from required skills
                const primaryRole = selectedJob.requiredSkills[0].role;
                
                // Navigate to roadmap page
                window.location.href = `roadmap.html?role=${primaryRole}`;
            };
        }
    } else {
        requiredSkillsSection.classList.add('hidden');
    }

    // Update save button state
    const isSaved = savedJobs.includes(selectedJob.id);
    if (isSaved) {
        saveJobBtn.classList.add('border-blue-600', 'text-blue-600', 'bg-blue-50');
        saveJobBtn.innerHTML = `
            <svg class="w-5 h-5 inline-block mr-1" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
            </svg>
            Tersimpan
        `;
    } else {
        saveJobBtn.classList.remove('border-blue-600', 'text-blue-600', 'bg-blue-50');
        saveJobBtn.innerHTML = `
            <svg class="w-5 h-5 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
            </svg>
            Simpan
        `;
    }

    // Show modal with animation
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    // Scroll modal to top
    const modalContent = modal.querySelector('.bg-white');
    if (modalContent) {
        modalContent.scrollTop = 0;
    }
}

// Close Modal Function
function closeModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
    selectedJob = null;
}

// Handle Apply Function
function handleApply() {
    if (!selectedJob) return;

    Swal.fire({
        title: 'Konfirmasi Lamaran',
        html: `
            <p class="text-gray-600 mb-4">Anda akan melamar untuk posisi:</p>
            <p class="font-bold text-xl text-gray-900 mb-2">${selectedJob.role}</p>
            <p class="text-gray-600">di ${selectedJob.company}</p>
        `,
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#2563eb',
        cancelButtonColor: '#6b7280',
        confirmButtonText: 'Ya, Lamar!',
        cancelButtonText: 'Batal',
        customClass: {
            popup: 'rounded-2xl',
            confirmButton: 'rounded-xl px-6 py-3 font-bold',
            cancelButton: 'rounded-xl px-6 py-3 font-bold'
        }
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Berhasil!',
                html: `
                    <p class="text-gray-600 mb-2">Lamaran Anda untuk posisi <strong>${selectedJob.role}</strong> telah terkirim.</p>
                    <p class="text-gray-600">Tim ${selectedJob.company} akan menghubungi Anda segera.</p>
                `,
                icon: 'success',
                confirmButtonColor: '#2563eb',
                confirmButtonText: 'Oke',
                customClass: {
                    popup: 'rounded-2xl',
                    confirmButton: 'rounded-xl px-6 py-3 font-bold'
                }
            });
            closeModal();
        }
    });
}

// Handle Save from Modal
function handleSaveFromModal() {
    if (!selectedJob) return;
    toggleSaveJob(selectedJob.id);
    
    // Update button state
    const isSaved = savedJobs.includes(selectedJob.id);
    const saveIcon = saveJobBtn.querySelector('svg');
    if (isSaved) {
        saveJobBtn.classList.add('border-blue-600', 'text-blue-600');
        saveIcon.setAttribute('fill', 'currentColor');
    } else {
        saveJobBtn.classList.remove('border-blue-600', 'text-blue-600');
        saveIcon.setAttribute('fill', 'none');
    }
}

// Toast Notification
function showToast(message, type = 'success') {
    Toastify({
        text: message,
        duration: 3000,
        gravity: 'top',
        position: 'right',
        style: {
            background: type === 'success' ? '#2563eb' : '#ef4444',
            borderRadius: '0.75rem',
            padding: '1rem 1.5rem',
            fontWeight: '600'
        }
    }).showToast();
}

// Attach Event Listeners
function attachEventListeners() {
    // Search and Filter
    searchInput.addEventListener('input', filterJobs);
    typeFilter.addEventListener('change', filterJobs);
    prodiFilter.addEventListener('change', filterJobs);

    // Modal Controls
    closeModalBtn.addEventListener('click', closeModal);
    applyBtn.addEventListener('click', handleApply);
    saveJobBtn.addEventListener('click', handleSaveFromModal);

    // Close modal on backdrop click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });
}


// ==================== SKILL TRACKING FUNCTIONS ====================

// Check if a skill is completed
function isSkillCompleted(role, level, skillName) {
    const key = `${role}-${level}-${skillName}`;
    return completedSkills[key] === true;
}

// Toggle skill completion
function toggleSkillCompletion(role, level, skillName) {
    const key = `${role}-${level}-${skillName}`;
    completedSkills[key] = !completedSkills[key];
    localStorage.setItem('completedSkills', JSON.stringify(completedSkills));
    
    if (completedSkills[key]) {
        showToast(`✅ ${skillName} ditandai sebagai selesai!`, 'success');
        
        // Update gamification
        if (userProgress) {
            userProgress.incrementStat('skillsCompleted');
        }
    } else {
        showToast(`${skillName} ditandai belum selesai`, 'error');
        
        // Update gamification
        if (userProgress) {
            const currentCount = userProgress.data.stats.skillsCompleted;
            if (currentCount > 0) {
                userProgress.data.stats.skillsCompleted--;
                userProgress.saveProgress();
            }
        }
    }
}

// Calculate skill match for a job
function calculateSkillMatch(requiredSkills) {
    let totalSkills = 0;
    let matchedSkills = 0;
    
    requiredSkills.forEach(skillGroup => {
        skillGroup.skills.forEach(skillName => {
            totalSkills++;
            if (isSkillCompleted(skillGroup.role, skillGroup.level, skillName)) {
                matchedSkills++;
            }
        });
    });
    
    const percentage = totalSkills > 0 ? Math.round((matchedSkills / totalSkills) * 100) : 0;
    
    return { matchedSkills, totalSkills, percentage };
}

// ==================== SKILL ROADMAP FEATURES ====================

let currentRole = 'web-dev';

// Initialize Skill Roadmap
function initSkillRoadmap() {
    console.log('Initializing Skill Roadmap...');
    console.log('Available roadmaps:', Object.keys(skillRoadmaps));
    renderSkillTree(currentRole);
    attachRoleButtonListeners();
}

// Render Skill Tree
function renderSkillTree(role) {
    console.log('Rendering skill tree for role:', role);
    const roadmap = skillRoadmaps[role];
    
    if (!roadmap) {
        console.error('Roadmap not found for role:', role);
        return;
    }
    
    // Update gamification - track roadmap views
    if (userProgress) {
        userProgress.updateStat('roadmapsViewed', role);
    }
    
    const container = document.getElementById('skill-tree-container');
    
    container.innerHTML = `
        <div class="text-center mb-8">
            <h3 class="text-2xl font-bold mb-2">${roadmap.title}</h3>
            <p class="text-gray-600">${roadmap.description}</p>
        </div>
        
        <div class="space-y-8">
            ${roadmap.levels.map((level, index) => `
                <div class="skill-level" style="animation: fadeInUp 0.6s ease-out ${index * 0.1}s both">
                    <div class="flex items-center gap-4 mb-4">
                        <div class="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                            ${level.level}
                        </div>
                        <div>
                            <h4 class="text-xl font-bold">${level.title}</h4>
                            <p class="text-sm text-gray-600">Level ${level.level}</p>
                        </div>
                    </div>
                    
                    <div class="grid md:grid-cols-3 gap-4 ml-16">
                        ${level.skills.map((skill, skillIndex) => {
                            const isCompleted = isSkillCompleted(role, level.level, skill.name);
                            return `
                            <div class="skill-card bg-white border-2 ${isCompleted ? 'border-green-500 bg-green-50' : 'border-gray-200'} rounded-xl p-6 hover:border-blue-600 hover:shadow-lg transition cursor-pointer" data-role="${role}" data-level="${level.level}" data-skill="${skillIndex}">
                                <div class="flex items-start justify-between mb-3">
                                    <h5 class="font-bold text-lg">${skill.name}</h5>
                                    <input type="checkbox" 
                                           class="skill-complete-checkbox w-5 h-5 text-green-600 rounded" 
                                           ${isCompleted ? 'checked' : ''}
                                           data-role="${role}" 
                                           data-level="${level.level}" 
                                           data-skill-name="${skill.name}">
                                </div>
                                <p class="text-sm text-gray-600 mb-4">${skill.description}</p>
                                <div class="flex flex-wrap gap-2 mb-3">
                                    ${skill.resources.map(resource => `
                                        <span class="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-full">${resource}</span>
                                    `).join('')}
                                </div>
                                <button class="learn-skill-btn w-full py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition text-sm">
                                    ${isCompleted ? '✓ Selesai' : 'Mulai Belajar'}
                                </button>
                            </div>
                        `;
                        }).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    // Attach skill card listeners
    document.querySelectorAll('.skill-card').forEach(card => {
        const learnBtn = card.querySelector('.learn-skill-btn');
        const checkbox = card.querySelector('.skill-complete-checkbox');
        
        // Prevent checkbox click from triggering card click
        checkbox.addEventListener('click', (e) => {
            e.stopPropagation();
        });
        
        checkbox.addEventListener('change', (e) => {
            const role = e.target.dataset.role;
            const level = parseInt(e.target.dataset.level);
            const skillName = e.target.dataset.skillName;
            toggleSkillCompletion(role, level, skillName);
            renderSkillTree(currentRole); // Re-render to update UI
        });
        
        learnBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const role = card.dataset.role;
            const level = parseInt(card.dataset.level);
            const skillIndex = parseInt(card.dataset.skill);
            showSkillDetail(role, level, skillIndex);
        });
    });
}

// Show Skill Detail Modal
function showSkillDetail(role, level, skillIndex) {
    const roadmap = skillRoadmaps[role];
    const levelData = roadmap.levels.find(l => l.level === level);
    const skill = levelData.skills[skillIndex];
    
    Swal.fire({
        title: skill.name,
        html: `
            <div class="text-left">
                <p class="text-gray-600 mb-4">${skill.description}</p>
                <h4 class="font-bold mb-2">📚 Learning Resources:</h4>
                <ul class="space-y-2 mb-4">
                    ${skill.resources.map(resource => `
                        <li class="flex items-center gap-2">
                            <span class="text-blue-600">→</span>
                            <span>${resource}</span>
                        </li>
                    `).join('')}
                </ul>
                <p class="text-sm text-gray-500">💡 Klik "Mulai Belajar" untuk menandai skill ini sebagai sedang dipelajari!</p>
            </div>
        `,
        icon: 'info',
        confirmButtonColor: '#2563eb',
        confirmButtonText: 'Mulai Belajar',
        showCancelButton: true,
        cancelButtonText: 'Tutup',
        customClass: {
            popup: 'rounded-2xl',
            confirmButton: 'rounded-xl px-6 py-3 font-bold',
            cancelButton: 'rounded-xl px-6 py-3 font-bold'
        }
    }).then((result) => {
        if (result.isConfirmed) {
            showToast(`🚀 Mulai belajar ${skill.name}! Semangat!`, 'success');
        }
    });
}

// Attach Role Button Listeners
function attachRoleButtonListeners() {
    document.querySelectorAll('.role-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            document.querySelectorAll('.role-btn').forEach(b => {
                b.classList.remove('active', 'bg-blue-600', 'text-white');
                b.classList.add('bg-gray-100', 'text-gray-700');
            });
            btn.classList.add('active', 'bg-blue-600', 'text-white');
            btn.classList.remove('bg-gray-100', 'text-gray-700');
            
            // Render new skill tree
            currentRole = btn.dataset.role;
            renderSkillTree(currentRole);
        });
    });
}

// ==================== PORTFOLIO SCORECARD FEATURES ====================

let portfolioScore = 0;

// Initialize Portfolio Scorecard
function initPortfolioScorecard() {
    attachPortfolioCheckListeners();
}

// Attach Portfolio Check Listeners
function attachPortfolioCheckListeners() {
    document.querySelectorAll('.portfolio-check').forEach(checkbox => {
        checkbox.addEventListener('change', updatePortfolioScore);
    });
}

// Update Portfolio Score
function updatePortfolioScore() {
    const checkboxes = document.querySelectorAll('.portfolio-check');
    let score = 0;
    
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            const scoreValue = parseInt(checkbox.parentElement.querySelector('.text-gray-500').textContent.replace('+', ''));
            score += scoreValue;
        }
    });
    
    portfolioScore = score;
    
    // Update UI
    document.getElementById('portfolio-score').textContent = score;
    document.getElementById('progress-text').textContent = `${score}/100`;
    document.getElementById('progress-bar').style.width = `${score}%`;
    
    // Update gamification - update portfolio score
    if (userProgress) {
        userProgress.updateStat('portfolioScore', score);
    }
    
    // Update recommendation
    const recommendation = document.getElementById('recommendation');
    if (score === 0) {
        recommendation.innerHTML = '<p class="text-blue-800 font-medium">💡 Mulai dengan mencentang checklist di atas untuk meningkatkan skor portfolio kamu!</p>';
        recommendation.className = 'p-4 bg-blue-50 border border-blue-200 rounded-xl';
    } else if (score < 50) {
        recommendation.innerHTML = '<p class="text-yellow-800 font-medium">⚠️ Portfolio kamu masih perlu banyak improvement. Lengkapi checklist untuk meningkatkan peluang diterima!</p>';
        recommendation.className = 'p-4 bg-yellow-50 border border-yellow-200 rounded-xl';
    } else if (score < 80) {
        recommendation.innerHTML = '<p class="text-orange-800 font-medium">📈 Lumayan! Tapi masih bisa lebih baik. Lengkapi semua checklist untuk hasil maksimal!</p>';
        recommendation.className = 'p-4 bg-orange-50 border border-orange-200 rounded-xl';
    } else if (score < 100) {
        recommendation.innerHTML = '<p class="text-green-800 font-medium">✨ Bagus! Portfolio kamu sudah cukup baik. Tinggal sedikit lagi untuk sempurna!</p>';
        recommendation.className = 'p-4 bg-green-50 border border-green-200 rounded-xl';
    } else {
        recommendation.innerHTML = '<p class="text-green-800 font-medium">🎉 Perfect! Portfolio kamu sudah siap untuk apply lowongan. Good luck!</p>';
        recommendation.className = 'p-4 bg-green-50 border border-green-200 rounded-xl';
        
        // Confetti effect
        showToast('🎉 Portfolio Score Perfect! Kamu siap apply lowongan!', 'success');
    }
}

// Update initialization
const originalInit = document.addEventListener;
document.addEventListener('DOMContentLoaded', () => {
    animateStats();
    renderProdi();
    renderMitraHasnur();
    renderMitraPolhas();
    renderSupported();
    populateProdiFilter();
    renderJobs(currentJobs);
    initSkillRoadmap(); // NEW
    initPortfolioScorecard(); // NEW
    attachEventListeners();
});

// ==================== RECOMMENDATION SYSTEM ====================

function renderRecommendedJobs() {
    const section = document.getElementById('recommended-jobs');
    const container = document.getElementById('recommended-jobs-container');
    
    const recommendations = recommendation.getRecommendedJobs(6);
    
    if (recommendations.length === 0) {
        section.classList.add('hidden');
        return;
    }
    
    section.classList.remove('hidden');
    
    container.innerHTML = recommendations.map((rec, index) => {
        const job = rec.job;
        const prodiText = Array.isArray(job.prodi) ? job.prodi[0] : job.prodi;
        const isSaved = savedJobs.includes(job.id);
        
        return `
            <div class="bg-white border-2 border-green-200 rounded-xl p-6 hover:border-green-400 hover:shadow-lg transition cursor-pointer" style="animation: fadeInUp 0.6s ease-out ${index * 0.1}s both">
                
                <!-- Match Badge -->
                <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">
                        ${Math.round(rec.score)}% Match
                    </span>
                    <button class="save-btn-rec p-2 hover:bg-gray-100 rounded-lg transition ${isSaved ? 'text-blue-600' : 'text-gray-400'}" data-job-id="${job.id}">
                        <svg class="w-5 h-5" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                        </svg>
                    </button>
                </div>
                
                <div class="flex items-start gap-4 mb-4">
                    <img src="${job.logo}" alt="${job.company}" class="w-12 h-12 object-contain">
                    <div class="flex-1">
                        <h3 class="text-lg font-bold text-gray-900 mb-1">${job.role}</h3>
                        <p class="text-gray-600 text-sm">${job.company}</p>
                    </div>
                </div>
                
                <!-- Reasons -->
                <div class="mb-4 space-y-1">
                    ${rec.reasons.map(reason => `
                        <div class="flex items-center gap-2 text-xs text-gray-600">
                            <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg>
                            <span>${reason}</span>
                        </div>
                    `).join('')}
                </div>
                
                <div class="flex gap-2 mb-4">
                    <span class="px-3 py-1 bg-blue-100 text-blue-600 rounded-lg text-xs font-semibold">
                        ${job.type}
                    </span>
                    <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium">
                        📍 ${job.location}
                    </span>
                </div>
                
                <button class="view-rec-btn w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition" data-job-id="${job.id}">
                    Lihat Detail
                </button>
            </div>
        `;
    }).join('');
    
    // Attach handlers
    container.querySelectorAll('.view-rec-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const jobId = parseInt(btn.dataset.jobId);
            openModal(jobId);
        });
    });
    
    container.querySelectorAll('.save-btn-rec').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const jobId = parseInt(btn.dataset.jobId);
            toggleSaveJob(jobId);
            renderRecommendedJobs(); // Re-render to update button state
        });
    });
}

// ==================== AUTH EVENT LISTENERS ====================

// Helper functions for switch buttons
function handleSwitchToRegister(e) {
    e.preventDefault();
    showRegisterModal();
}

function handleSwitchToLogin(e) {
    e.preventDefault();
    showLoginModal();
}

function attachAuthListeners() {
    console.log('🔧 Attaching auth event listeners...');
    
    // Login button
    const loginBtn = document.getElementById('login-btn');
    if (loginBtn) {
        console.log('✅ Login button found, attaching click listener');
        // Remove existing listener first to avoid duplicates
        loginBtn.removeEventListener('click', showLoginModal);
        loginBtn.addEventListener('click', showLoginModal);
    } else {
        console.error('❌ Login button NOT found!');
    }

    // Close modal buttons
    const closeModalBtns = document.querySelectorAll('.close-auth-modal');
    closeModalBtns.forEach(btn => {
        btn.removeEventListener('click', closeAuthModal);
        btn.addEventListener('click', closeAuthModal);
    });

    // Switch to register
    const switchToRegister = document.getElementById('switch-to-register');
    if (switchToRegister) {
        switchToRegister.removeEventListener('click', handleSwitchToRegister);
        switchToRegister.addEventListener('click', handleSwitchToRegister);
    }

    // Switch to login
    const switchToLogin = document.getElementById('switch-to-login');
    if (switchToLogin) {
        switchToLogin.removeEventListener('click', handleSwitchToLogin);
        switchToLogin.addEventListener('click', handleSwitchToLogin);
    }

    // Login form submit
    const loginForm = document.getElementById('login-form-element');
    if (loginForm) {
        loginForm.removeEventListener('submit', handleLogin);
        loginForm.addEventListener('submit', handleLogin);
    }

    // Register form submit
    const registerForm = document.getElementById('register-form-element');
    if (registerForm) {
        registerForm.removeEventListener('submit', handleRegister);
        registerForm.addEventListener('submit', handleRegister);
    }

    // User menu toggle
    const userMenuBtn = document.getElementById('user-menu-btn');
    if (userMenuBtn) {
        userMenuBtn.removeEventListener('click', toggleUserDropdown);
        userMenuBtn.addEventListener('click', toggleUserDropdown);
    }

    // Note: Dropdown menu item listeners are handled by setupDropdownMenuListeners() in ui.js
    // which is called automatically by updateNavbar()

    // Close modal on backdrop click
    const authModal = document.getElementById('auth-modal');
    if (authModal) {
        authModal.addEventListener('click', (e) => {
            if (e.target === authModal) {
                closeAuthModal();
            }
        });
    }
}

// Handle login
function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    const response = auth.login(email, password);
    
    if (response.success) {
        uiShowToast(response.message, 'success');
        closeAuthModal();
        updateNavbar();
        
        // Reset form
        e.target.reset();
    } else {
        uiShowToast(response.message, 'error');
    }
}

// Handle register
function handleRegister(e) {
    e.preventDefault();
    
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const prodi = document.getElementById('register-prodi').value;
    
    const response = auth.register({ name, email, password, prodi });
    
    if (response.success) {
        uiShowToast(response.message, 'success');
        
        // Auto login after register
        auth.login(email, password);
        closeAuthModal();
        updateNavbar();
        
        // Reset form
        e.target.reset();
    } else {
        uiShowToast(response.message, 'error');
    }
}
