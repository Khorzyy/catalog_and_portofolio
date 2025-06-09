let currentIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    
    // Hide all slides
    slides.forEach(slide => (slide.style.display = 'none'));

    // Increment index
    currentIndex++;
    if (currentIndex > slides.length) currentIndex = 1;

    // Show the current slide
    slides[currentIndex - 1].style.display = 'block';

    // Change slide every 5 seconds
    setTimeout(showSlides, 2500);
}

// Initialize slideshow
document.addEventListener('DOMContentLoaded', showSlides);