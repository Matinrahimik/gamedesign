document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const sideNav = document.querySelector('.side-nav');

    hamburgerMenu.addEventListener('click', function() {
        sideNav.classList.toggle('active');
        // Optional: animate hamburger menu
        this.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!sideNav.contains(event.target) && !hamburgerMenu.contains(event.target)) {
            sideNav.classList.remove('active');
            hamburgerMenu.classList.remove('active');
        }
    });
});