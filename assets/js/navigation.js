/**
 * Handles the mobile navigation menu toggle.
 */
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.remove('translate-x-full');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    }

    if (menuClose && mobileMenu) {
        menuClose.addEventListener('click', () => {
            mobileMenu.classList.add('translate-x-full');
            document.body.style.overflow = ''; // Restore scrolling
        });
    }

    // Close menu when clicking on a link
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('translate-x-full');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside the menu content
    if (mobileMenu) {
        mobileMenu.addEventListener('click', (e) => {
            if (e.target === mobileMenu) {
                mobileMenu.classList.add('translate-x-full');
                document.body.style.overflow = '';
            }
        });
    }
});
