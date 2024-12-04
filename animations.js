document.addEventListener('DOMContentLoaded', function() {
    // Create Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '50px'
    });

    // Observe elements with animate-typing class
    document.querySelectorAll('.animate-typing').forEach((element) => {
        observer.observe(element);
    });

    // Observe elements with animate-bounce class
    document.querySelectorAll('.animate-bounce').forEach((element) => {
        observer.observe(element);
    });

    // Optional: Reset animations when elements leave viewport
    const resetObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                entry.target.classList.remove('visible');
            }
        });
    }, { 
        threshold: 0,
        rootMargin: '-50px'
    });

    // Apply reset observer to animated elements
    document.querySelectorAll('.animate-typing, .animate-bounce').forEach((element) => {
        resetObserver.observe(element);
    });
}); 