document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Mobile Navigation Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Ubah icon hamburger menjadi 'X'
        const icon = hamburger.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close menu when link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = hamburger.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // --- 2. Dynamic Year in Footer ---
    const yearSpan = document.getElementById('year');
    yearSpan.textContent = new Date().getFullYear();

    // --- 3. Scroll Animation (Intersection Observer) ---
    const observerOptions = {
        threshold: 0.2 // Elemen muncul saat 20% terlihat
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Animasi hanya berjalan sekali
            }
        });
    }, observerOptions);

    // Target semua elemen dengan class 'hidden'
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(el => observer.observe(el));
});