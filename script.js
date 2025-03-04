// Slider auto move
document.addEventListener('DOMContentLoaded', function () {

    let currentSlide = 1;
    const totalSlides = 2; // Adjust this if you have more slides
    const intervalTime = 20000; 

    setInterval(() => {
        currentSlide = (currentSlide % totalSlides) + 1;
        document.getElementById(`slide${currentSlide}`).checked = true;
    }, intervalTime);
});

document.addEventListener("DOMContentLoaded", function(event) { 
    var scrollpos = localStorage.getItem('scrollpos');
    if (scrollpos) window.scrollTo(0, scrollpos);
});


// Stays in the same position when page is refreshed
window.onbeforeunload = function(e) {
            localStorage.setItem('scrollpos', window.scrollY);
};


// Smooth item reveal for desktop
document.addEventListener("DOMContentLoaded", function() {
    const gridItems = document.querySelectorAll('.grid-item');

    function revealOnScroll() {
        for (let item of gridItems) {
            const rect = item.getBoundingClientRect();
            if (rect.top <= (window.innerHeight || document.documentElement.clientHeight)) {
                item.classList.add('reveal');
            }
        }
    }

    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('resize', revealOnScroll);
    revealOnScroll(); // Trigger reveal on page load
});


// smooth reveal for mobile
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.mobile-head, .mobile-greeting, .mobile-education, .mobile-grid-item');

    function reveal() {
        elements.forEach(function(element) {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementPosition < windowHeight) { // Adjust this threshold as needed
                element.classList.add('reveal');
            }
        });
    }

    window.addEventListener('scroll', reveal);
    window.addEventListener('resize', reveal);

    // Initial call to reveal elements that are already in view
    reveal();
});

// project auto slides
// document.addEventListener("DOMContentLoaded", function() {
//     function autoSlide(sliderId, slide1Id, slide2Id, interval) {
//         let currentSlide = 1;
//         setInterval(() => {
//             document.getElementById(sliderId).checked = false;
//             currentSlide = currentSlide === 1 ? 2 : 1;
//             document.getElementById(currentSlide === 1 ? slide1Id : slide2Id).checked = true;
//         }, interval);
//     }

//     // Data Science Slider
//     autoSlide('project-slide1-ds', 'project-slide1-ds', 'project-slide2-ds', 40000);

//     // // Full Stack Slider with 0.5s delay
//     setTimeout(() => {
//         autoSlide('project-slide1-fs', 'project-slide1-fs', 'project-slide2-fs', 40000);
//     }, 500);
// });
