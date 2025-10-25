(function() {
    'use strict';

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initFormValidation);
    } else {
        initFormValidation();
    }

    function initFormValidation() {
        const form = document.querySelector('.contact-form');
        if (!form) return;

        // Record page load time
        const formLoadTime = Date.now();

        // Add submit listener
        form.addEventListener('submit', function(e) {
            const currentTime = Date.now();
            const timeDiff = currentTime - formLoadTime;

            // Minimum time check (3 seconds)
            if (timeDiff < 3000) {
                e.preventDefault();

                // Log for debugging
                console.warn('Form submission blocked: too fast', {
                    timeDiff: timeDiff,
                    required: 3000
                });

                // User-friendly message
                showError('Please take a moment to review your information before submitting.');

                return false;
            }

            // Check honeypot (backup client-side check)
            const honeypot = form.querySelector('[name="_gotcha"]');
            if (honeypot && honeypot.value !== '') {
                e.preventDefault();
                console.warn('Honeypot triggered');
                // Silently fail - don't tell bots what went wrong
                return false;
            }

            // All checks passed
            return true;
        });
    }

    function showError(message) {
        // Create or use existing error display
        let errorDiv = document.querySelector('.form-error');

        if (!errorDiv) {
            errorDiv = document.createElement('div');
            errorDiv.className = 'form-error';
            errorDiv.style.cssText = 'color: #e74c3c; padding: 1rem; margin: 1rem 0; border: 2px solid #e74c3c; border-radius: 8px; background: #fef2f2;';

            const form = document.querySelector('.contact-form');
            form.insertBefore(errorDiv, form.firstChild);
        }

        errorDiv.textContent = message;
        errorDiv.style.display = 'block';

        // Scroll to error
        errorDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Auto-hide after 5 seconds
        setTimeout(() => {
            errorDiv.style.display = 'none';
        }, 5000);
    }
})();
