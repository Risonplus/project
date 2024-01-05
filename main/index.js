let currentSlideIndex = 1;

function showSlide(index) {
    const slides = document.querySelector('.banner-slides');
    const slideWidth = document.querySelector('.banner-image').clientWidth;

    if (index > slides.children.length) {
        currentSlideIndex = 1;
    }

    if (index < 1) {
        currentSlideIndex = slides.children.length;
    }

    slides.style.transform = `translateX(${-slideWidth * (currentSlideIndex - 1)}px)`;
}

function nextSlide() {
    showSlide(currentSlideIndex += 1);
}

function prevSlide() {
    showSlide(currentSlideIndex -= 1);
}

// Automatic slide change every 5 seconds
setInterval(nextSlide, 5000);

// Initial slide display
showSlide(currentSlideIndex);



// JavaScript for Responsive Back Button
function goBack() {
    window.history.back();
}

// Add any other JavaScript functionalities as needed
// JavaScript for Responsive Back Button
document.addEventListener("DOMContentLoaded", function () {
    const backButton = document.getElementById("back-btn");

    // Toggle back button visibility based on scroll position
    window.addEventListener("scroll", function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backButton.style.display = "block";
        } else {
            backButton.style.display = "none";
        }
    });

    // Scroll to top when the back button is clicked
    backButton.addEventListener("click", function () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    });
});

// Add this JavaScript to toggle the mobile menu
function toggleMenu() {
    const navMenu = document.querySelector('nav ul');
    navMenu.classList.toggle('active');
}

// Add this JavaScript to close the menu when a menu item is clicked
document.querySelectorAll('nav ul li a').forEach(item => {
    item.addEventListener('click', () => {
        const navMenu = document.querySelector('nav ul');
        navMenu.classList.remove('active');
    });
});


