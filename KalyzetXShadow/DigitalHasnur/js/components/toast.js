export class Toast {
    constructor() {
        this.toastContainer = document.getElementById('toast-root');
        this.activeToasts = [];
    }

    /**
     * Show toast notification
     * @param {string} message - Message to display
     * @param {string} type - Toast type: 'success', 'error', 'warning', 'info'
     * @param {number} duration - Duration in milliseconds (default: 3000)
     */
    show(message, type = 'info', duration = 3000) {
        const toastId = `toast-${Date.now()}`;

        // Create toast element
        const toast = document.createElement('div');
        toast.id = toastId;
        toast.className = `toast-notification ${this.getTypeClass(type)} mb-4 animate-slideInRight`;

        toast.innerHTML = `
            <div class="flex items-start gap-3 bg-white rounded-lg shadow-lg p-4 min-w-[300px] max-w-md border-l-4 ${this.getBorderClass(type)}">
                <div class="flex-shrink-0">
                    ${this.getIcon(type)}
                </div>
                <div class="flex-1">
                    <p class="text-sm font-medium text-gray-900">${message}</p>
                </div>
                <button class="toast-close flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
        `;

        // Add to container
        this.toastContainer.appendChild(toast);
        this.activeToasts.push(toastId);

        // Add close button listener
        const closeBtn = toast.querySelector('.toast-close');
        closeBtn.addEventListener('click', () => this.dismiss(toastId));

        // Auto dismiss after duration
        if (duration > 0) {
            setTimeout(() => this.dismiss(toastId), duration);
        }

        return toastId;
    }

    /**
     * Dismiss toast by ID
     * @param {string} toastId - Toast ID to dismiss
     */
    dismiss(toastId) {
        const toast = document.getElementById(toastId);
        if (!toast) return;

        // Add fade out animation
        toast.classList.add('animate-fadeOut');

        // Remove from DOM after animation
        setTimeout(() => {
            toast.remove();
            this.activeToasts = this.activeToasts.filter((id) => id !== toastId);
        }, 300);
    }

    /**
     * Dismiss all active toasts
     */
    dismissAll() {
        this.activeToasts.forEach((toastId) => this.dismiss(toastId));
    }

    /**
     * Get type-specific CSS class
     * @param {string} type - Toast type
     * @returns {string} CSS class
     */
    getTypeClass(type) {
        return `toast-${type}`;
    }

    /**
     * Get border color class based on type
     * @param {string} type - Toast type
     * @returns {string} Tailwind border class
     */
    getBorderClass(type) {
        const classes = {
            success: 'border-green-500',
            error: 'border-red-500',
            warning: 'border-yellow-500',
            info: 'border-blue-500',
        };
        return classes[type] || classes.info;
    }

    /**
     * Get icon SVG based on type
     * @param {string} type - Toast type
     * @returns {string} SVG icon HTML
     */
    getIcon(type) {
        const icons = {
            success: `
                <svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            `,
            error: `
                <svg class="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            `,
            warning: `
                <svg class="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                </svg>
            `,
            info: `
                <svg class="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            `,
        };
        return icons[type] || icons.info;
    }

    /**
     * Convenience methods for different toast types
     */
    success(message, duration = 3000) {
        return this.show(message, 'success', duration);
    }

    error(message, duration = 3000) {
        return this.show(message, 'error', duration);
    }

    warning(message, duration = 3000) {
        return this.show(message, 'warning', duration);
    }

    info(message, duration = 3000) {
        return this.show(message, 'info', duration);
    }
}
