export class Modal {
    static instance = null; // Singleton pattern to prevent multiple modals

    constructor() {
        this.isOpen = false;
        this.modalElement = null;
        this.escapeHandler = null;
    }

    /**
     * Open modal with content
     * @param {string} content - HTML content to display
     * @param {object} options - Modal options (title, size, etc.)
     */
    open(content, options = {}) {
        const { title = '', size = 'large', showClose = true } = options;

        // Close existing modal if any (enforce single modal)
        if (Modal.instance && Modal.instance.isOpen) {
            console.log('Closing existing modal before opening new one');
            Modal.instance.close();
        }

        // Validate content
        if (!content || typeof content !== 'string') {
            console.error('Modal: Invalid content provided');
            return;
        }

        // Create modal HTML
        const modalHTML = `
            <div class="modal-overlay fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fadeIn">
                <div class="modal-content bg-white rounded-xl shadow-2xl max-h-[90vh] overflow-y-auto w-full ${this.getSizeClass(size)} animate-slideUp">
                    ${
                        title || showClose
                            ? `
                        <div class="modal-header sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
                            ${title ? `<h2 class="text-2xl font-bold text-gray-900">${title}</h2>` : '<div></div>'}
                            ${
                                showClose
                                    ? `
                                <button class="modal-close text-gray-400 hover:text-gray-600 transition-colors">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </button>
                            `
                                    : ''
                            }
                        </div>
                    `
                            : ''
                    }
                    <div class="modal-body p-6 md:p-8">
                        ${content}
                    </div>
                </div>
            </div>
        `;

        // Insert modal into DOM
        const modalRoot = document.getElementById('modal-root');
        if (!modalRoot) {
            console.error('Modal: modal-root element not found in DOM');
            return;
        }

        modalRoot.innerHTML = modalHTML;
        this.modalElement = modalRoot.querySelector('.modal-overlay');

        if (!this.modalElement) {
            console.error('Modal: Failed to create modal element');
            return;
        }

        // Prevent body scroll
        document.body.style.overflow = 'hidden';

        // Add event listeners
        this.addEventListeners();

        this.isOpen = true;
        Modal.instance = this; // Set as current instance

        console.log('Modal opened successfully');
    }

    /**
     * Get size class for modal
     * @param {string} size - Size option
     * @returns {string} Tailwind class
     */
    getSizeClass(size) {
        const sizes = {
            small: 'max-w-md',
            medium: 'max-w-2xl',
            large: 'max-w-4xl',
            xlarge: 'max-w-6xl',
        };
        return sizes[size] || sizes.large;
    }

    /**
     * Add event listeners for modal
     */
    addEventListeners() {
        if (!this.modalElement) return;

        // Close button
        const closeBtn = this.modalElement.querySelector('.modal-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.close());
        }

        // Click outside to close
        this.modalElement.addEventListener('click', (e) => {
            if (e.target === this.modalElement) {
                this.close();
            }
        });

        // Escape key to close
        this.escapeHandler = (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.close();
            }
        };
        document.addEventListener('keydown', this.escapeHandler);
    }

    /**
     * Close modal
     */
    close() {
        if (!this.isOpen) {
            console.log('Modal: Already closed');
            return;
        }

        // Remove escape key listener
        if (this.escapeHandler) {
            document.removeEventListener('keydown', this.escapeHandler);
            this.escapeHandler = null;
        }

        // Restore body scroll
        document.body.style.overflow = '';

        // Remove modal from DOM
        const modalRoot = document.getElementById('modal-root');
        if (modalRoot) {
            modalRoot.innerHTML = '';
        }

        this.modalElement = null;
        this.isOpen = false;

        // Clear singleton instance if this is the current instance
        if (Modal.instance === this) {
            Modal.instance = null;
        }

        console.log('Modal closed successfully');
    }

    /**
     * Update modal content
     * @param {string} content - New HTML content
     */
    updateContent(content) {
        if (!this.isOpen || !this.modalElement) {
            console.error('Modal: Cannot update content - modal is not open');
            return;
        }

        if (!content || typeof content !== 'string') {
            console.error('Modal: Invalid content provided for update');
            return;
        }

        const modalBody = this.modalElement.querySelector('.modal-body');
        if (modalBody) {
            modalBody.innerHTML = content;
            console.log('Modal content updated');
        } else {
            console.error('Modal: modal-body element not found');
        }
    }

    /**
     * Cleanup method to ensure proper cleanup
     */
    cleanup() {
        this.close();
    }
}
