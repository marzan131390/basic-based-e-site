let navItems = document.getElementById("nav-items");
let navContent = document.querySelector(".nav-content")
//Display Nav Bar when toggle Button is clicked..
let toggleIcon = document.querySelector("#toggle-icon");
toggleIcon.addEventListener("click", function() {
    navItems.classList.toggle("opacity");
    navContent.classList.toggle("rs-nav-content-height");
    
})
