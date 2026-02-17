// ==================== UI UTILITIES ====================
// UI helper functions

import { auth } from './auth.js';

// Show login modal
export function showLoginModal() {
    console.log('🔓 showLoginModal called');
    const modal = document.getElementById('auth-modal');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    
    if (!modal || !loginForm) {
        console.error('❌ Modal or login form not found!');
        return;
    }
    
    console.log('✅ Showing login form');
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Show register modal
export function showRegisterModal() {
    console.log('📝 showRegisterModal called');
    const modal = document.getElementById('auth-modal');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    
    if (!modal || !registerForm) {
        console.error('❌ Modal or register form not found!');
        return;
    }
    
    console.log('✅ Showing register form');
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close auth modal
export function closeAuthModal() {
    console.log('❌ Closing modal');
    const modal = document.getElementById('auth-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Update navbar based on auth state
export function updateNavbar() {
    const loginBtn = document.getElementById('login-btn');
    const userMenu = document.getElementById('user-menu');
    const userName = document.getElementById('user-name');
    const userAvatar = document.getElementById('user-avatar');
    
    // Dropdown header elements
    const dropdownAvatar = document.getElementById('dropdown-avatar');
    const dropdownName = document.getElementById('dropdown-name');
    const dropdownEmail = document.getElementById('dropdown-email');

    // Check if elements exist (some pages might not have auth UI)
    if (!loginBtn || !userMenu) return;

    if (auth.isLoggedIn()) {
        loginBtn.classList.add('hidden');
        userMenu.classList.remove('hidden');
        
        const user = auth.currentUser;
        const avatar = user.avatar;
        
        // Update main navbar user info
        if (userName) {
            userName.textContent = user.name;
        }
        
        if (userAvatar) {
            userAvatar.textContent = avatar.initials;
            userAvatar.style.backgroundColor = avatar.color;
        }
        
        // Update dropdown header
        if (dropdownAvatar) {
            dropdownAvatar.textContent = avatar.initials;
            dropdownAvatar.style.backgroundColor = avatar.color;
        }
        
        if (dropdownName) {
            dropdownName.textContent = user.name;
        }
        
        if (dropdownEmail) {
            dropdownEmail.textContent = user.email;
        }
        
        // Setup dropdown menu event listeners
        setupDropdownMenuListeners();
    } else {
        loginBtn.classList.remove('hidden');
        userMenu.classList.add('hidden');
    }
}

// Setup dropdown menu event listeners
function setupDropdownMenuListeners() {
    console.log('🔧 setupDropdownMenuListeners called');
    
    // Profile menu item
    const profileMenuItem = document.getElementById('profile-menu-item');
    if (profileMenuItem && !profileMenuItem.dataset.listenerAttached) {
        profileMenuItem.dataset.listenerAttached = 'true';
        profileMenuItem.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('✅ Profile menu clicked');
            const dropdown = document.getElementById('user-dropdown');
            if (dropdown) dropdown.classList.add('hidden');
            showProfileModal();
        });
        console.log('✅ Profile listener attached');
    } else if (!profileMenuItem) {
        console.error('❌ Profile menu item NOT found!');
    }

    // Dashboard menu item
    const dashboardMenuItem = document.getElementById('dashboard-menu-item');
    if (dashboardMenuItem && !dashboardMenuItem.dataset.listenerAttached) {
        dashboardMenuItem.dataset.listenerAttached = 'true';
        dashboardMenuItem.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('✅ Dashboard menu clicked');
            const dropdown = document.getElementById('user-dropdown');
            if (dropdown) dropdown.classList.add('hidden');
            window.location.href = 'dashboard.html';
        });
        console.log('✅ Dashboard listener attached');
    } else if (!dashboardMenuItem) {
        console.error('❌ Dashboard menu item NOT found!');
    }

    // Logout menu item
    const logoutMenuItem = document.getElementById('logout-menu-item');
    if (logoutMenuItem && !logoutMenuItem.dataset.listenerAttached) {
        logoutMenuItem.dataset.listenerAttached = 'true';
        logoutMenuItem.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('✅ Logout menu clicked');
            const dropdown = document.getElementById('user-dropdown');
            if (dropdown) dropdown.classList.add('hidden');
            handleLogout();
        });
        console.log('✅ Logout listener attached');
    } else if (!logoutMenuItem) {
        console.error('❌ Logout menu item NOT found!');
        // Debug: show all buttons in dropdown
        const dropdown = document.getElementById('user-dropdown');
        if (dropdown) {
            const allButtons = dropdown.querySelectorAll('button');
            console.log('All buttons in dropdown:', allButtons.length);
            allButtons.forEach((btn, idx) => {
                console.log(`Button ${idx}: id="${btn.id}" text="${btn.textContent.trim().substring(0, 30)}"`);
            });
        }
    }
    
    console.log('✅ All dropdown menu listeners setup complete');
}

// Toggle user dropdown
export function toggleUserDropdown() {
    const dropdown = document.getElementById('user-dropdown');
    dropdown.classList.toggle('hidden');
}

// Close dropdown when clicking outside
export function setupDropdownClose() {
    document.addEventListener('click', (e) => {
        const userMenu = document.getElementById('user-menu');
        const dropdown = document.getElementById('user-dropdown');
        
        if (!userMenu.contains(e.target) && !dropdown.classList.contains('hidden')) {
            dropdown.classList.add('hidden');
        }
    });
}

// Show toast notification
export function showToast(message, type = 'success') {
    if (typeof Toastify !== 'undefined') {
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
    } else {
        alert(message);
    }
}

// Show profile modal
export function showProfileModal() {
    if (!auth.isLoggedIn()) {
        showLoginModal();
        return;
    }

    const user = auth.currentUser;
    
    Swal.fire({
        title: 'Profile Saya',
        html: `
            <div class="text-left space-y-4">
                <div class="flex items-center gap-4 mb-6">
                    <div class="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold text-white" style="background-color: ${user.avatar.color}">
                        ${user.avatar.initials}
                    </div>
                    <div>
                        <h3 class="text-xl font-bold">${user.name}</h3>
                        <p class="text-gray-600">${user.email}</p>
                    </div>
                </div>
                <div class="space-y-2">
                    <div class="flex justify-between py-2 border-b">
                        <span class="text-gray-600">Program Studi:</span>
                        <span class="font-semibold">${user.prodi}</span>
                    </div>
                    <div class="flex justify-between py-2 border-b">
                        <span class="text-gray-600">Terdaftar:</span>
                        <span class="font-semibold">${new Date(user.registeredAt).toLocaleDateString('id-ID')}</span>
                    </div>
                </div>
            </div>
        `,
        showCancelButton: true,
        confirmButtonText: 'Edit Profile',
        cancelButtonText: 'Tutup',
        confirmButtonColor: '#2563eb',
        customClass: {
            popup: 'rounded-2xl',
            confirmButton: 'rounded-xl px-6 py-3 font-bold',
            cancelButton: 'rounded-xl px-6 py-3 font-bold'
        }
    }).then((result) => {
        if (result.isConfirmed) {
            showEditProfileModal();
        }
    });
}

// Show edit profile modal
export function showEditProfileModal() {
    const user = auth.currentUser;
    
    Swal.fire({
        title: 'Edit Profile',
        html: `
            <div class="text-left space-y-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                    <input type="text" id="edit-name" value="${user.name}" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input type="email" id="edit-email" value="${user.email}" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600" disabled>
                    <p class="text-xs text-gray-500 mt-1">Email tidak dapat diubah</p>
                </div>
            </div>
        `,
        showCancelButton: true,
        confirmButtonText: 'Simpan',
        cancelButtonText: 'Batal',
        confirmButtonColor: '#2563eb',
        customClass: {
            popup: 'rounded-2xl',
            confirmButton: 'rounded-xl px-6 py-3 font-bold',
            cancelButton: 'rounded-xl px-6 py-3 font-bold'
        },
        preConfirm: () => {
            const name = document.getElementById('edit-name').value;
            
            if (!name) {
                Swal.showValidationMessage('Nama harus diisi!');
                return false;
            }
            
            return { name };
        }
    }).then((result) => {
        if (result.isConfirmed) {
            const updates = result.value;
            updates.avatar = auth.generateAvatar(updates.name);
            
            const response = auth.updateProfile(updates);
            if (response.success) {
                showToast(response.message, 'success');
                updateNavbar();
            }
        }
    });
}

// Handle logout
export function handleLogout() {
    Swal.fire({
        title: 'Logout',
        text: 'Apakah Anda yakin ingin keluar?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Ya, Logout',
        cancelButtonText: 'Batal',
        confirmButtonColor: '#ef4444',
        customClass: {
            popup: 'rounded-2xl',
            confirmButton: 'rounded-xl px-6 py-3 font-bold',
            cancelButton: 'rounded-xl px-6 py-3 font-bold'
        }
    }).then((result) => {
        if (result.isConfirmed) {
            // Logout user
            auth.logout();
            
            // Show success message
            showToast('Logout berhasil!', 'success');
            
            // Redirect to homepage after short delay
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 500);
        }
    });
}

export default {
    showLoginModal,
    showRegisterModal,
    closeAuthModal,
    updateNavbar,
    toggleUserDropdown,
    setupDropdownClose,
    showToast,
    showProfileModal,
    showEditProfileModal,
    handleLogout
};
