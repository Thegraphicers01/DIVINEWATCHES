document.addEventListener("DOMContentLoaded", () => {
    const magneticButtons = document.querySelectorAll('.magnetic-btn');

    magneticButtons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            // Find center coordinate point of the specific button element
            const btnX = rect.left + rect.width / 2;
            const btnY = rect.top + rect.height / 2;

            // Measure spatial distance vector between user mouse and button center
            const distanceX = e.clientX - btnX;
            const distanceY = e.clientY - btnY;

            // Force physical displacement pop out movement towards mouse cursor
            gsap.to(btn, {
                x: distanceX * 0.35,
                y: distanceY * 0.35,
                duration: 0.3,
                ease: "power2.out"
            });
        });

        // Snap perfectly back to normal structure grid coordinates on mouse exit
        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, {
                x: 0,
                y: 0,
                duration: 0.6,
                ease: "elastic.out(1, 0.4)"
            });
        });
    });
});