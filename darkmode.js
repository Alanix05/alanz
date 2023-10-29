function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var darkButton = document.getElementById("darkmode");

    if (element.classList.contains("dark-mode")) {
        darkButton.innerHTML = "&#127773;";
        localStorage.setItem("darkMode", "enabled"); 
    } else {
        darkButton.innerHTML = "&#127770;";
        localStorage.setItem("darkMode", "disabled"); 
    }
}

if (localStorage.getItem("darkMode") === "enabled") {
    toggleDarkMode(); 
}
