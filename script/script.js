let navItems = document.getElementById("nav-items");
//Display Nav Bar when toggle Button is clicked..
let toggleIcon = document.querySelector("#toggle-icon");
toggleIcon.addEventListener("click", function() {
    navItems.classList.toggle("opacity");
    console.log("Hello world")
    
})
console.log("Hello")