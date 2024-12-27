document.addEventListener("DOMContentLoaded", function () {
    
    const exploreButton = document.getElementById('explore-btn'); 
    const aboutSection = document.querySelector('#about'); 

    if (exploreButton && aboutSection) {
        exploreButton.addEventListener('click', (e) => {
            e.preventDefault(); 
            aboutSection.scrollIntoView({ behavior: 'smooth' }); 
        });
    }

   
    const menuToggle = document.querySelector('.menu-toggle'); 
    const navLinks = document.querySelector('.nav-links'); 

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active'); 
        });
    }

    
    const prevButton = document.getElementById('prev-btn');
    const nextButton = document.getElementById('next-btn');

    if (prevButton && nextButton) {
        [prevButton, nextButton].forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault(); 
                console.log(`${button.innerText} button clicked`); 
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

    
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            navLinks.classList.remove("active");
            hamburger.setAttribute("aria-expanded", "false");
        }
    });
});
