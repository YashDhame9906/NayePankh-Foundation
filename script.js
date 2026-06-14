/* =================================
   Dark Mode Toggle
================================= */

const themeToggle = document.getElementById("theme-toggle");


// Check saved theme when page loads

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark-mode");

    themeToggle.textContent = "☀️";
}


// Toggle theme on button click

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");


    // Save preference

    if (document.body.classList.contains("dark-mode")) {

        localStorage.setItem("theme", "dark");

        themeToggle.textContent = "☀️";

    } 
    
    else {

        localStorage.setItem("theme", "light");

        themeToggle.textContent = "🌙";

    }

});