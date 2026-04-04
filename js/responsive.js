/**
 * Responsive functionality for PeoplPursuit
 * Works with Bootstrap 4 for optimal responsive behavior
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // Bootstrap handles menu toggle via data-toggle="collapse"
    const navToggle = document.getElementById('nav-toggle');
    const mainNav = document.getElementById('mainNav');
    
    // Helper function to close mobile menu
    function closeMenu() {
        if (window.innerWidth < 992 && mainNav && navToggle) {
            if (typeof jQuery !== 'undefined') {
                jQuery(mainNav).collapse('hide');
            } else {
                mainNav.classList.remove('show');
                navToggle.classList.add('collapsed');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        }
    }
    
    // Close menu when clicking nav links
    const navLinks = document.querySelectorAll('#mainNav .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Don't close if it's a dropdown toggle
            if (!this.classList.contains('dropdown-toggle')) {
                closeMenu();
            }
        });
    });
    
    // Close menu when clicking dropdown items
    const dropdownItems = document.querySelectorAll('#mainNav .dropdown-item');
    dropdownItems.forEach(item => {
        item.addEventListener('click', function() {
            closeMenu();
        });
    });
    
    // Handle dropdown toggle for mobile
    const dropdownToggles = document.querySelectorAll('#mainNav .dropdown-toggle');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            // On mobile, prevent default and toggle dropdown
            if (window.innerWidth < 992) {
                e.preventDefault();
                const menu = this.nextElementSibling;
                if (menu && menu.classList.contains('dropdown-menu')) {
                    menu.classList.toggle('show');
                    toggle.setAttribute('aria-expanded', 
                        toggle.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
                }
            }
        });
    });
    
    // Navbar scroll effect
    const topBar = document.getElementById('tm-top-bar');
    
    window.addEventListener('scroll', function() {
        if (topBar) {
            if (window.scrollY > 50) {
                topBar.classList.add('active');
            } else {
                topBar.classList.remove('active');
            }
        }
    }, { passive: true });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Don't process if it's a dropdown toggle or already handled
            if (this.classList.contains('dropdown-toggle')) {
                return;
            }
            
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const element = document.querySelector(href);
                if (element) {
                    const offsetTop = element.getBoundingClientRect().top + window.scrollY - 100;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu on navigation
                    closeMenu();
                }
            }
        });
    });
    
    // Form input focus states for better mobile UX
    const formControls = document.querySelectorAll('.form-control, select.tm-select');
    formControls.forEach(control => {
        control.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        control.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.navbar-collapse')) {
            const dropdowns = document.querySelectorAll('#mainNav .dropdown-menu');
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('show');
            });
        }
    });
});
