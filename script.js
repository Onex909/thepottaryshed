document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scroll for "Explore More" Button
    const exploreButton = document.getElementById('explore-btn'); // Select the button by its ID
    const aboutSection = document.querySelector('#about'); // Select the "About Shed" section by its ID

    if (exploreButton && aboutSection) {
        exploreButton.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent any default action
            aboutSection.scrollIntoView({ behavior: 'smooth' }); // Smoothly scroll to the "About Shed" section
        });
    }

    // Responsive Navigation Toggle
    const menuToggle = document.querySelector('.menu-toggle'); // Select the hamburger menu
    const navLinks = document.querySelector('.nav-links'); // Select the navigation links container

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active'); // Toggle the "active" class to show/hide the menu
        });
    }

    // Disable Action for Pagination Buttons
    const prevButton = document.getElementById('prev-btn');
    const nextButton = document.getElementById('next-btn');

    if (prevButton && nextButton) {
        [prevButton, nextButton].forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault(); // Prevent any default or unintended behavior
                console.log(`${button.innerText} button clicked`); // Optional: log the button clicked
            });
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            const isActive = navLinks.classList.toggle("active");
            hamburger.setAttribute("aria-expanded", isActive);
        });
    }

    // Close the menu when resizing to larger screens
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            navLinks.classList.remove("active");
            hamburger.setAttribute("aria-expanded", "false");
        }
    });
});
