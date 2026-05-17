// Tab Swapping Controller System
function switchTab(targetSectionId) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(section => {
        section.classList.remove('active-content');
    });
    // Remove active tab text styles
    document.querySelectorAll('.tab-link').forEach(link => {
        link.classList.remove('active');
    });

    // Light up target tab and header link
    document.getElementById(targetSectionId).classList.add('active-content');
    event.currentTarget.classList.add('active');

    // Trigger instant animations on current view entries
    gsap.from('.active-content .animate-slide-up', { y: 40, opacity: 0, duration: 0.8, ease: "power3.out" });
    gsap.from('.active-content .animate-text-fade', { x: 30, opacity: 0, duration: 0.8, delay: 0.2 });
}

// Add to Bag Toast Confirmation Logic
let itemsInBag = 0;
function addToCart(itemName) {
    itemsInBag++;
    document.getElementById('cart-count').innerText = itemsInBag;
    
    // Switch empty state messaging dynamically
    const statusText = document.getElementById('cart-status-text');
    if (statusText) {
        statusText.innerHTML = `You have <b>${itemsInBag}</b> premium items locked in your basket. Ready for checkout.`;
    }

    // Trigger the crisp pop-up notification window
    const toast = document.getElementById('toast-notification');
    toast.innerText = `Added "${itemName}" to cart!`;
    toast.classList.add('show-toast');

    // Smooth dismiss window loop
    setTimeout(() => {
        toast.classList.remove('show-toast');
    }, 2500);
}

// High-End Mechanical Magnetic Tracking Interactions Engine
document.addEventListener("DOMContentLoaded", () => {
    // Trigger baseline entry animations
    gsap.from('.animate-slide-up', { y: 50, opacity: 0, duration: 1, ease: "power4.out" });
    gsap.from('.animate-text-fade', { opacity: 0, x: 40, duration: 1, delay: 0.3 });

    const magnets = document.querySelectorAll('.magnetic-element');
    magnets.forEach(item => {
        item.addEventListener('mousemove', (e) => {
            const area = item.getBoundingClientRect();
            const mx = e.clientX - (area.left + area.width / 2);
            const my = e.clientY - (area.top + area.height / 2);

            gsap.to(item, { x: mx * 0.4, y: my * 0.4, duration: 0.3, ease: "power2.out" });
        });

        item.addEventListener('mouseleave', () => {
            gsap.to(item, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
        });
    });
});
