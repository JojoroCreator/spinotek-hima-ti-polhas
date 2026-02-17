// ==================== AUTHENTICATION SYSTEM ====================
// Simple auth system using LocalStorage (no backend)

export class AuthSystem {
    constructor() {
        this.currentUser = this.getCurrentUser();
    }

    // Get current logged in user
    getCurrentUser() {
        const userJson = localStorage.getItem('currentUser');
        return userJson ? JSON.parse(userJson) : null;
    }

    // Check if user is logged in
    isLoggedIn() {
        return this.currentUser !== null;
    }

    // Register new user
    register(userData) {
        const { name, email, password, prodi } = userData;

        // Validation
        if (!name || !email || !password || !prodi) {
            return { success: false, message: 'Semua field harus diisi!' };
        }

        if (password.length < 6) {
            return { success: false, message: 'Password minimal 6 karakter!' };
        }

        // Check if email already exists
        const users = this.getAllUsers();
        if (users.find(u => u.email === email)) {
            return { success: false, message: 'Email sudah terdaftar!' };
        }

        // Create new user
        const newUser = {
            id: Date.now(),
            name,
            email,
            password, // In real app, this should be hashed!
            prodi,
            registeredAt: new Date().toISOString(),
            avatar: this.generateAvatar(name)
        };

        // Save to users list
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        return { success: true, message: 'Registrasi berhasil!', user: newUser };
    }

    // Login user
    login(email, password) {
        // Validation
        if (!email || !password) {
            return { success: false, message: 'Email dan password harus diisi!' };
        }

        // Find user
        const users = this.getAllUsers();
        const user = users.find(u => u.email === email && u.password === password);

        if (!user) {
            return { success: false, message: 'Email atau password salah!' };
        }

        // Set current user
        this.currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(user));

        return { success: true, message: 'Login berhasil!', user };
    }

    // Logout user
    logout() {
        this.currentUser = null;
        localStorage.removeItem('currentUser');
        return { success: true, message: 'Logout berhasil!' };
    }

    // Get all users
    getAllUsers() {
        const usersJson = localStorage.getItem('users');
        return usersJson ? JSON.parse(usersJson) : [];
    }

    // Generate avatar from name initials
    generateAvatar(name) {
        const initials = name
            .split(' ')
            .map(n => n[0])
            .join('')
            .toUpperCase()
            .substring(0, 2);
        
        const colors = ['#2563eb', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444', '#06b6d4'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        return { initials, color };
    }

    // Update user profile
    updateProfile(updates) {
        if (!this.currentUser) {
            return { success: false, message: 'User tidak login!' };
        }

        // Update current user
        this.currentUser = { ...this.currentUser, ...updates };
        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));

        // Update in users list
        const users = this.getAllUsers();
        const index = users.findIndex(u => u.id === this.currentUser.id);
        if (index !== -1) {
            users[index] = this.currentUser;
            localStorage.setItem('users', JSON.stringify(users));
        }

        return { success: true, message: 'Profile berhasil diupdate!', user: this.currentUser };
    }
}

// Initialize auth system
export const auth = new AuthSystem();

// Export for global use
export default {
    AuthSystem,
    auth
};
