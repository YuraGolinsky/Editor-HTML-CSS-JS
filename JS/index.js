// index.js

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slideImages = [
    'edit-photo.html',
    'converter.html',
    'converter.html' // Add your page URLs for each slide
];

function openPage(page) {
    window.location.href = page;
}

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Initial setup
showSlide(currentSlide);

// Click event for each slide
slides.forEach((slide, index) => {
    slide.addEventListener('click', () => {
        openPage(slideImages[index]);
    });
});
