// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Function to smoothly scroll to the target section
    function scrollToSection(targetId) {
        var targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    }

    // Function to toggle the responsive menu
    function toggleMenu() {
        var nav = document.getElementById("main-nav");
        nav.classList.toggle("responsive");
    }

    function goBack() {
        window.location.href = "/main/index.html"; // Replace with the correct main page URL
    }
    

    // Add event listeners to menu items for smooth scrolling
    var menuItems = document.querySelectorAll("#main-nav ul a");
    menuItems.forEach(function(item) {
        item.addEventListener("click", function(event) {
            event.preventDefault();
            var targetId = this.getAttribute("href").substring(1);
            scrollToSection(targetId);
            toggleMenu(); // Close the menu on click (for responsiveness)
        });
    });
});
